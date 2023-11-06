/*
OLD FETCH SCRIPT FROM PLUME BLOG
// feeding Plume articles
// gist: https://gist.github.com/navitux/2474ea39f2cf4106c2a9dd46f2dcd052
var plume_feed = document.getElementById("plume_feed");
var URL = 'https://plume.otakufarms.com/@/ivantux/atom.xml'
//var URL = 'https://plume.otakufarms.com/~/BlogPersonalYPortafolioVersiNEnEspaOl/atom.xml';

let parser = new RSSParser({
  requestOptions: {
    rejectUnauthorized: false
  }
});

var URL_corsproxy = 'https://corsproxy.io/?'+encodeURIComponent(URL);
parser.parseURL(URL_corsproxy, function(err, feed) {
  if (err) throw err;
  const plume_list = document.createElement("ul");
  plume_feed.insertAdjacentElement("beforeend",plume_list);
  feed.items.forEach(function(entry) {
    //create and add list item
    const plume_list_item = document.createElement("li");
    plume_list.insertAdjacentElement("beforeend",plume_list_item);
    
    //title with link
    const title_link = document.createElement("a");
    plume_list_item.insertAdjacentElement("beforeend",title_link);
    title_link.setAttribute('href', entry.id);
    title_link.setAttribute('target','_blank');
    title_link.setAttribute('rel','noopener');
    title_link.textContent = entry.title.replace("<![CDATA[", "").replace("]]>", "");
    
    //content
    const content = document.createElement("p");
    plume_list_item.insertAdjacentElement("beforeend",content);
    content.innerHTML = entry.content.replace("]]>", "").split(" ")
    .splice(0,19).join(" ")+" ...";
  })
}) 
*/

// blog markdown rendering
const md = window.markdownit({
  html: true
});
fetch("../README.txt")
  .then((res) => res.text())
  .then((text) => {
    document.getElementById("mdblog").innerHTML = md.render(text);
  });

// image zoom:
mediumZoom('[data-zoomable]',{
 background: '#000a',
 scrollOffset: 0,
});