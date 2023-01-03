---
title: list of posts
permalink: /blog/
---

## All Posts

{% for post in collections.posts %}

- [{{post.data.title}}]({{post.url}})
  
{% endfor %}