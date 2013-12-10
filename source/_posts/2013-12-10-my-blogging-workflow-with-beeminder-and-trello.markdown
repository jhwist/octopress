---
layout: post
title: "My blogging workflow with Beeminder and Trello"
date: 2013-12-10 15:59
comments: true
categories: [General, Coding]
---

> As noted in my [last post](/blog/2013/12/06/how-beeminder-paid-for-14-bikes/ "Have you donated to WBR yet?")
> I had planned to write about my blogging work-flow, and today, almost 6 months after starting this blog,
> shall be the day.

Before I started this very blog, I had a [Tumblr](http://jhwist.tumblr.com/), where I posted a couple of entries
and then stopped. I still wanted to blog, but writing blog posts never was my priority, and I also wasn't too
happy with the Tumblr platform. In the meantime, I tried to set up a [Drupal](http://www.drupal.org) based blog,
but quickly noticed that just maintaining the setup drained more energy than I was willing to invest.

Enters the new kid on the block, [Octopress](http://www.octopress.org), a simple "blogging platform" based
of the static site generator [Jekyll](http://github.com/mojombo/jekyll). I like the fact that I can edit blog
posts in my favourite [editor](http://www.vim.org) and store them all in Git for revision control. Furthermore,
since Octopress is open source, I can customize, modify and add functionality at will.

Now, Octopress is great, except when it isn't. Since it doesn't come with an online editor to draft blog posts,
and since I don't always have access to my development box that has the git repository{%fn_ref 1%}, I needed something that
enabled me to quickly jot down blog ideas. I usually even need to work on the draft some time before I can
actually sit down and fill the details.

## Trello to the Rescue ##
Luckily, there is an awesome web-based tool called [Trello](https://trello.com/henrikwist/recommend "If you sign up for Trello with this link, I'll get one month of Trello Gold for free.").
From their help:

    Trello is a collaboration tool that organizes your projects into boards.
    In one glance, Trello tells you what's being worked on, who's working on
    what, and where something is in a process.

Besides the super-easy-to-use Web application, Trello has a mobile app, which works really great on my phone
as well as on my tablet. That way, I can work on my blog content from any computer or even on the go.
So here's how I use Trello for blogging:

Since I use Trello for other stuff as well, I created a [Board](http://help.trello.com/customer/portal/articles/887722-adding-your-first-board)
called 'Blog', which holds these four lists:

 * Ideas
 * Draft
 * Doing
 * Done

That's really all there is to it. If I have an idea for a blog post, I'll just add a card to the "Ideas"
list, giving it a preliminary title and label it with the "Content" label{% fn_ref 2 %}.

## Keep Going ##
One problem of my old blog was that, while I really wanted to have a blog because I had all kinds of posts
in my mind, nothing *forced* me to write a post. Now, I use the term "force" in a positive sense here. I sometimes
need some external pressure to make things happen. When I decided to start [Run. Bike. Code.](/) I really wanted
to stick with it this time. [Beeminder](http://www.beeminder.com) is the perfect tool for people like me.

You commit to a goal, get reminded on a regular basis, and if you fall off the waggon, you have to pay out of
your own pocket for it (that's the simplified version, for details on why and how Beeminder works for "us", please head
over to their website and check out all goodness there).

Turns out, Beeminder integrates with [Trello](https://www.beeminder.com/trello). I have a Beeminder goal to
move one Trello card to the "Done" list{% fn_ref 3 %} per week. So the complete work-flow works like
this:

 1. Create a card in "Ideas".
 1. Move the card to "Drafts" when I know more details of what to actually write.
 1. Do the necessary steps to add meat to the card, i.e. research, collect pictures, or just plain writing.
 1. Once the card seems ripe and I have some free time at hand, move the card to "Doing". Start the blog post
 within my git repository, using the material collected so far.
 1. When I'm happy with the post, I'll publish it and move the card to the "Done" list.
 1. Beeminder will pick it up from there and update the [goal](https://www.beeminder.com/jhwist/goals/rubico-blog).

Now, if you do the math, starting from my [first post](/blog/2013/03/05/write-while-youre-still-learning/ "The obligatory Hello World post, more or less")
to today, there should be 40 blog posts published, having derailed from the goal only once. If you actually go through
the [archive](/blog/archives/), you'll find only 34 posts. That's because I had (and still have) a couple of
non-content cards that I completed, especially in the early phase of this blog. I use Trello for those as well,
justified by the fact the by working on those I actually work on the blog, thereby keeping it alive.

Now, being the lazy nerd, I don't manually move cards around on the Trello board, there is some automation
for that, which I shall explain in a future post (yes, it has a Trello card already).

Also, should I really run out of ideas, Beeminder lets me easily adjust the goal rate, or, if I know I won't
be able to blog (e.g. during vacation) I can schedule a break without violating the contract. Works out
really nice.

> With that, thanks for reading, especially to my new readers! You can
> expect weekly posts for quite some time. And remember, Beemind all the things!

{% footnotes %}
 {% fn %} Nor can I write blog posts from idea to published article on one go.
 {% fn %} I also have a label for technical, or behind-the-scenes, stuff that I want to change or implement
 for the blog.
 {% fn %} Technically, "archived" cards count as well, helping me to keep the "Done" list clean.
{% endfootnotes %}
