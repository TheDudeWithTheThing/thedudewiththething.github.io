---
title: link_to vs. a
author: Shaun
layout: post
categories: programming
tags: rails javascript
---

It is always comforting to find something on the internet about a problem you are having. If you have run into data attribute names getting mangled like I did then feel better, you are not alone. I was writing some javascript to hook into an ```<a>``` tag that had ```data-user_id="1"``` on it and things were not working. I did not understand what was happening since the same javascript and data attribute name was working on another ```<a>``` tag on the same page. The difference was that one link was being generated with a haml ```%a``` tag and the non working one with the rails helper ```link_to```. What was happening was the ```<a>``` tag would create the data attributes with the exact name I gave them, user_id in this case, while the ```link_to``` was trying to normalize my data name to be user-id. The javascript looked like:

```javascript
$('a').data('user_id')
```

Which of course would not find an attribute with the name user-id. On top of it jquery was doing some magic to turn the id into userId. 

### TLDR:
1. Always name data attributes in html elements ```data-your-name```, not ```data-your_name```.
2. Beware of ```link_to```, no idea what other magic this thing is performing.
