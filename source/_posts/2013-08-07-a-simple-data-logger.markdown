---
layout: post
title: "A simple data logger"
date: 2013-08-07 15:30
comments: true
categories: 
---
> At work we needed to collect telemetry data from one of our applications, distributed across different computers, in order to be able to perform a trend analysis later.

Things we looked at:

  * one log file on a central fileserver
  * multiple log files (one per application host) on a central fileserver
  * send telemetry data per mail
  * write telemetry data from within the application code directly to a database
  * use remote syslog 

Requirements:

  * logging must not have a performance penalty
  * it should not add a ton of dependencies to the application code
  * it should be robust in case of failure, i.e. not influence the rest of the application
