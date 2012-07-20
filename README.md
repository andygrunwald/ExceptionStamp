ExceptionStamp
=======================

Demo?
----------------------------
Yep, this "project" is online. Have a look at [exceptionstamp.andygrunwald.com](http://exceptionstamp.andygrunwald.com/)

What is it in detail?
----------------------------
Every programmer who interact with exceptions know the problem. You need a unique number for your exception to determine it in the whole application. In my opinion a smart concept is to use the unix timestamp from the time of implementation this exception as a application wide unique number. This is used by some open source projects e.g. [TYPO3](http://typo3.org/) and [FLOW3](http://flow3.typo3.org/). [Robert Lemke](https://twitter.com/robertlemke) described this concept in a [blog post](http://buzz.typo3.org/people/robert-lemke/article/exceptional-usefulness/).

Why you create this?
----------------------------
Because every time i need a timestamp i create a single file which returns the current time as one number. Every time i waste time for the same thing. To do the same could be boring ;) And of course is this a little finger exercise and playground for myself to try [JQuery](http://jquery.com/) and [HTML5Boilerplate](http://html5boilerplate.com/).

Why a client side timestamp?
----------------------------
To create the possibility to use it [offline](http://exceptionstamp.andygrunwald.com/download/exceptionStamp.zip) and without a webserver.

Who built it?
----------------------------
Andy Grunwald, [andygrunwald.com](http://andygrunwald.com)