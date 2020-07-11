---
title: Setting Up Eleventy
description: This is a post on My Blog about agile frameworks.
date: 2020-05-04
tags:
  -11ty
layout: layouts/post.html
---

I'm an avid user of Tumblr. I love Tumblr. I love the functionality and how quick it is to make a theme. I love the theme developing community BUT I don't like the writing experience. It's good for long notes however what if I want to post crap? And I always want to post crap!

My first foray with Static Site Generators was with Jekyll but I found it difficult to set up. Gems? What and why do I need that? Making a theme for Jekyll is kind of a hassle. Also at the time, Jekyll was not easy to use for a Windows person like me. 

[llty](https://www.11ty.dev/) is very easy and quick to install. Here's a guide to how I set it up. This is not the best guide or the best way to do things but ya know, we're all learning and having fun.

## Pre-install

Before doing anything, stop and [learn a bit](https://learntocodewith.me/getting-started/topics/command-line/) about the command line. [Install Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) and watch + work out the git tutorial from [Traversy Media's Youtube video](https://www.youtube.com/watch?v=SWYqp7iY_Tc) . I do everything from Microsoft's Command Line and I don't use the git command line. Next you'll want to install NPM using the command line. Follow the instructions [for Windows](https://phoenixnap.com/kb/install-node-js-npm-on-windows) very carefully. 

I was a noob and didn't know what global versus local meant. Local means in a specific folder so only that folder can use what you install. Global means in some designated place that every folder has access to. If you're coming from Tumbrl, also know that directory means folder.

## Install Time!!

_If you are ever stuck, stop and look up the terms you don't understand!_ You don't need to know everything. You just need to know enough. I didn't know what liquid format was or njk and I'm still not sure about JSON. [Liquid template language](https://shopify.github.io/liquid/basics/introduction/) is very similar to Tumblr's {block} structures. 

Create a folder named _blog_ . I made this folder in my documents folder but it doesn't really matter where you make it.

Now hover over that folder, hold the cmd button and right click. Click "copy path". Another easier way to get the location of the folder is by dropping the folder in your internet browser and copying it from there.

In the command line type cd and right click paste the location of your blog. Now type `npm --version` to make sure you have npm 8 or higher. NPM by the way stands for Node Package Manager. If you do feel free to continue on.

Install 11ty by typing `npm install -g @11ty/eleventy`. 

[Clone the 11ty base blog](https://github.com/11ty/eleventy-base-blog) by clicking the "clone or download" button at that link. Cloning basically means to copy. What I actually did was individually copied the files and folders one at a time and put them in the blog folder because I didn't really know how cloning worked.

Back to the command line you're  going to need to install a few plugins by copy pasting and pressing enter for these:

```
npm install @11ty/eleventy-plugin-rss
npm install @11ty/eleventy-plugin-syntaxhighlight
npm install @11ty/eleventy-navigation
npm install markdown-it
npm install markdown-it-anchor
```

In your blog folder, look for a file named .eleventy.js. Open it in any old text editor and paste this in it:

```
 eleventyConfig.addPassthroughCopy('css')
  return {
    passthroughFileCopy: true
  }// rest of .eleventy.js config
};
```

Now back in the command line, type `eleventy --serve` this will serve your website. Go to http://localhost:8080/ and you should be able to see your site. If not that means something wrong happened. Maybe the instructions I gave were terrible.  In that case [go here](https://www.filamentgroup.com/lab/build-a-blog/). Wish I'd discovered this post earlier. Oh well.



