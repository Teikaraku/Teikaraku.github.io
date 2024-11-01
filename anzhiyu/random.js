var posts=["2024/10/11/新人三百问/","2024/10/11/游戏工具/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };