---
title: Ivan Site 
layout: base.njk
---

{% for post in collections.posts %}

- [{{post.data.title}}]({{post.url}})
  
{% endfor %}