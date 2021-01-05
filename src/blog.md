---
title: 'From The Blog'
layout: 'layouts/feed.html'
pagination: 
  data: collections.blog
  size: 7
permalink: 'blog{% if pagination.pageNumber > 0 %}/page/{{ pagination.pageNumber }}{% endif %}/index.html'
paginationPrevText: 'Newer posts'
paginationNextText: 'Older posts'
paginationAnchor: '#post-list'
eleventyNavigation:
  key: Blog
  order: 2
---
A notebook of sorts. Let's put a pin in everything. 