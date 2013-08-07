---
layout: post
title: "A simple data logger"
date: 2013-08-07 15:30
comments: true
categories: [ Coding ]
---

> At work we needed to collect telemetry data from one of our applications,
> distributed across different computers, in order to be able to perform a
> trend analysis later. Since I was surprised how simple the solution was that
> we came up with, I thought I'd share it here.

## Requirements ##

The application in question is a Java desktop application that runs multiple times
per day on various colleagues' machines. Data that we collect includes duration
of a run, memory consumption, number of threads and of course whether it ran
successfully. On the other hand, we didn't want to break the application (of course!)
by adding the logging capabilities, therefore these requirements had to be met for
a solution:

  1. Logging must not have a performance penalty.
  1. Concurrent logging should not result in corrupted data entries.
  1. It should not add a ton of dependencies to the application code.
  1. It should be robust in case of failure, i.e. not influence the rest of the application.
  1. It should work with existing infrastructure, most notably firewall rules
  1. The collected data should be easily processable.

As for Req. #2 we decided that, while we didn't want to deal with **corrupt** data,
we didn't care very much for entirely lost entries (just less data to run
statistics on).

<!-- More -->

## Things we looked at ##

I'm sure there are even more ways to do this, but this is the list we came up
with in a short time. None of the solutions seemed suitable though, because
they all didn't meet one or more requirements from above:

  * One log file on a central file server (doesn't meet Req. #2).
  * Multiple log files (one per application host) on a central file server (doesn't meet Req. #6).
  * Send telemetry data per mail via a simple log4j rule (doesn't meet Req. #6).
  * Write telemetry data from within the application code directly to a database via JDBC (doesn't meet Req. #3).
  * Use remote syslog (doesn't meet Req. #5 and #6).

## What we ended up using ##

Since adding JDBC wasn't an option, but sending a short string via HTTP is
actually pretty easy even in Java (Req. #3), we decided to use an existing
web-server (accessible from all relevant computers (Req. #5)) to send the
data via HTTP in a separate thread. If for any reason this would fail, the
application would still work correctly (Req. #4). Enters [Sinatra](http://www.sinatrarb.com/)
and [DataMapper](http://datamapper.org/)!

The web-server in question runs a bunch of Rails applications already and has
access to a PostgreSQL database, so the infrastructure to run any Rack-based
application was in place.

``` ruby A simple data logger

require 'bundler/setup'
require 'sinatra'
require 'dm-core'
require 'dm-migrations'
require 'uri'

class TelemetricData
  include DataMapper::Resource
  property :id,            Serial
  property :started_at,    DateTime
  property :duration_s,    Integer
  property :exit_code,     Integer
  property :mem_mb,        Integer
  property :mem_peak_mb,   Integer
  property :threads,       Integer
  property :threads_total, Integer
  property :threads_peak,  Integer
end

def init_datamapper
  DataMapper::Property::Integer.allow_nil(true)
  DataMapper.finalize
  DataMapper.auto_upgrade!
end

configure :production do |config|
  DataMapper.setup(:default, 'postgres://user:password@host/db')
  init_datamapper
end

configure :development do |config|
  DataMapper::Logger.new($stdout, :debug)
  DataMapper.setup(:default, 'in_memory::')
  init_datamapper
end

post '/t' do
  request.body.rewind
  payload = request.body.read
  post_data_to_db(payload)
end

def post_data_to_db(payload)
  ary = URI::decode_www_form(payload)
  data = Hash[ary.map { |entry| [entry[0].to_sym, entry[1]] }]
  TelemetricData.create(data)
end
```

That's it, less than 50 lines of Ruby (plus some boiler-plate in other files
like `config.ru` and of course the `Gemfile`, which I left out because
they are really set up according to the Sinatra docs). I especially like how
easy it turned out to be to parse the payload thanks to the existence of `URI::decode_www_form`
and the construction of a `DataMapper` instance.

Another nice thing about this solution is that it is really easy to add
other data later on thanks to the `auto_upgrade` capability of DataMapper.

> Is there an even simpler way to gather distributed data in a central database? Let me know
> what you think!
