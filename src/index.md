---
title: Ivan Site 
layout: base.njk
---

I'm Ivan and this is my blog

{% for post in collections.posts %}

- [{{post.data.title}}]({{post.url}})
  
{% endfor %}