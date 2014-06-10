---
title: My Dotfiles
layout: post
author: Shaun
category: code
tags: vim
---

You can find my dotfiles [here](https://github.com/TheDudeWithTheThing/dotfiles.git). I have some aliases that I use regularly. Here's a big one, so stupid but I feel like I do this enough to warrant it. The rest are nothing to write home about. You might argue this one is also nothing to write home about.

```bash
alias v='mvim .'
```

I use <D-F> for my fuzzy file find so I needed to remap the gui version. It's vim, I have /, no need to hog more keys for find in file. I also decided to use <D-t> to tag search so neededt to remap new tab to <D-T>. I never knew you could just edit the gui menu so this was a nice find.

```vim
if has('gui_macvim')
  macmenu Edit.Find.Find\.\.\. key=<nop>
  macmenu File.New\ Tab key=<D-T>
endif
```

For vim / mvim I was using [janus](https://github.com/carlhuda/janus) but felt it had too much stuff that I never used. I finally sat down, after almost 20 years of using vim, and created my own vim files. I used a lot of janus as a starting point. I like my default actions to open files in new tabs and this one does just what the comments say.


```vim
" CtrlP settings
" make enter auto open in new tab
let g:ctrlp_prompt_mappings = {
    \ 'AcceptSelection("e")': ['<S-cr>'],
    \ 'AcceptSelection("t")': ['<cr>', '<2-LeftMouse>'],
    \ 'AcceptSelection("h")': ['<c-x>', '<c-cr>', '<c-s>'],
    \ 'AcceptSelection("v")': ['<c-v>', '<RightMouse>'],
    \ }
```
