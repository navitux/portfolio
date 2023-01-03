---
title: Ivan Site 
layout: base.njk
---
<h1 class="animate__animated animate__fadeInUp">
    Welcome to my Site
</h1>

<lottie-player src="https://assets9.lottiefiles.com/packages/lf20_jtkejege.json" background="transparent" speed="1"
    style="width: 40%; height: 40%; margin:0 auto;" loop autoplay></lottie-player>
<p class="animate__animated animate__fadeInUp animate__delay-1s">Please, enjoy.</p>
<p class="animate__animated animate__fadeInUp animate__delay-2s">Feel free to check my most recent posts & projects I'm
    working on</p>

<h3>Latest posts</h3>

{% for post in collections.posts %}

- [{{post.data.title}}]({{post.url}})
  
{% endfor %}

<picture>
    <img src="https://random.imagecdn.app/500/150">
    <br>
    <caption><small>(random image)</small></caption>
</picture>

<h3 class="mastofeed" style="position:fixed; top:12%; right: 1%;">What's on Mastodon ?</h3>
    <iframe class="mastofeed" style="position:fixed; top:22%; right: 1%;" allowfullscreen sandbox="allow-top-navigation allow-scripts" width="400" height="500" src="https://www.mastofeed.com/apiv2/feed?userurl=https%3A%2F%2Fmasto.nobigtech.es%2Fusers%2Fnavitux&theme=dark&size=100&header=true&replies=false&boosts=true"></iframe>