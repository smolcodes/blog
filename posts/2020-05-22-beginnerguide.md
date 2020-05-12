---
title: Making CSS Art
description: 
date: 2020-05-11
tags:
  ['css art']
layout: layouts/post.njk
---

Today I made a very simple picture of coffee.

<p class="codepen" data-height="265" data-theme-id="light" data-default-tab="css,result" data-user="smolcodes" data-slug-hash="rNOKMwM" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="coffee">
  <span>See the Pen <a href="https://codepen.io/smolcodes/pen/rNOKMwM">
  coffee</a> by smolcodes (<a href="https://codepen.io/smolcodes">@smolcodes</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

This is my first time trying to draw something with CSS. I read [Lynn's](https://hacks.mozilla.org/2014/09/single-div-drawings-with-css/) tutorial but was still a bit confused until I got up and actually started the drawing.

Thanks to CSS's :before and :after, one div is actually three and if you cheat a bit, the body is also a div so you have access to 5 divs!

For my first piece I tried initially for a complicated shaded coffee cup but that got overwhelming so I switched to a more simpler drawing. 

The key to this drawing was being organized. There are two parts to a coffee cup: the cup and the handle. The top saying coffee was just for the lolz. This is the canvas

```
<div id="cup">
</div>
```

Now for the styling. It's good to first create a skeleton 

```
#cup:before {
//the title is here
}
#cup {
//this is the cup's body
}
#cup:after {
//this is the 
}
```

Once everything was organized, I created the outline of the cup and handle. The z-index is in the order of :before, #div and :after. Only having one element meant I had to be creative about making the handle. A simple trick was to use inset box shadows. Box shadows don't stack. They always start from the same beginning position so to create the illusion, I had two layers, the background color for the handle and black for the inner line of the handle.

```
body {
  background:aquamarine;
  display:flex;
  justify-content:center;
}
#cup:before {
  display:block;
  content:"Coffe";
  color:coral;
  font-weight:bold;
  font-size:52px;
}
#cup {
  border: 6px solid black;
  width: 180px;
  height:200px; 
  margin-top:10%;
  border-radius:0% 0% 60% 60%;
}
#cup:after {
  display:block;
  content: "";
  height:70px;
  width:40px;
  margin-left:180px;
  margin-top:60px;
  border:6px solid black;
  border-top-right-radius:30%;
  border-bottom-right-radius:30%;
  box-shadow:inset -4px 4px aquamarine,
             inset 0px -4px aquamarine,
             inset -10px 8px black,
             inset -2px -10px black;
}
```

The final step was to add a bit more styles. I used the same inset box trick again to create the coffee in the cup with a bit of foam on top.

```
body {
  background:aquamarine;
  display:flex;
  justify-content:center;
}
#cup:before {
  display:block;
  content:"Coffe";
  color:coral;
  font-weight:bold;
  font-size:52px;
  margin-top:-58%;
  margin-left:55%;
  padding-top:10px;
  padding-right:10px;
  z-index:-6;
  border-top:8px solid coral;
}
#cup {
  border: 6px solid black;
  width: 180px;
  height:200px; 
  margin-top:10%;
  border-radius:0% 0% 60% 60%;
  box-shadow: inset 0px 8px 0px white,
         inset 0px 26px 0px burlywood,
             inset 0px 44px 0px aquamarine,
    inset 0px 48px 0px black,
    inset 0px 82px 0px coral,
    inset 0px 86px 0px black,
           90px -100px white;
  z-index:10;
}
#cup:after {
  display:block;
  content: "";
  height:70px;
  width:40px;
  margin-left:180px;
  margin-top:60px;
  border:6px solid black;
  border-top-right-radius:30%;
  border-bottom-right-radius:30%;
  box-shadow:inset -4px 4px aquamarine,
             inset 0px -4px aquamarine,
             inset -10px 8px black,
             inset -2px -10px black;
}
```







​    