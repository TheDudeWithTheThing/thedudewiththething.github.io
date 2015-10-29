---
title: My Dotfiles
layout: post
author: Shaun
categories: code
tags: vim
---

You can find my dotfiles [here](https://github.com/TheDudeWithTheThing/dotfiles.git). I have some aliases that I use regularly. Here's a big one, so stupid but I feel like I do this enough to warrant it. The rest are nothing to write home about. You might argue this one is also nothing to write home about.

```bash
alias v='mvim .'
```

I use &lt;D-F> for my fuzzy file find so I needed to remap the gui version. It's vim, I have /, no need to hog more keys for find in file. I also decided to use &lt;D-t&gt; to tag search so neededt to remap new tab to &lt;D-T&gt;. I never knew you could just edit the gui menu so this was a nice find.

```vim
if has('gui_macvim')
  macmenu Edit.Find.Find\.\.\. key=<nop>
  macmenu File.New\ Tab key=<D-T>
endif
```

For vim / mvim I was using [janus](https://github.com/carlhuda/janus) but felt it had too much stuff that I never used. I finally sat down, after almost 20 years of using vim, and created my own vim files. I used a lot of janus as a starting point since I was pretty used to it already.

Many thanks to [thoughtbot](http://robots.thoughtbot.com/rcm-for-rc-files-in-dotfiles-repos) for making rcm. It made the whole source controled dot files stupid simple.
