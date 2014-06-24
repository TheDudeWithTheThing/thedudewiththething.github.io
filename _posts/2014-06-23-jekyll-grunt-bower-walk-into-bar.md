---
title: Jekyll, Grunt And Bower Walk Into A Bar
layout: post
author: Shaun
category: code
tags: jekyll grunt bower
---

I'm sure there's some clever punchline to that and I hope I can come up with it before I'm done writing. I recently decided to use github pages to do my online writing. I have a couple of projects I'd like to do and share what I learned.  I've been phone screening a lot of people at work and for some reason I enjoy asking them to build an elevator system to handle a hotel with 3 elevators and 20 floors that gets people where they're going in the most efficient way. I'll soon eat my own ducks in a row and code it, stay tuned.

The things I decided to use for my online writing are:

* Jekyll: A static site is fine, I need 0 features except a simple way to get stuff out. If there's any difficulty publishing content I just won't do it. I'm guessing even if there's no difficulty I still won't but time will tell.
* Coffeescript: Love it or hate it, it is a thing. If you're using coffeescript to hide the fact that you don't know javascript then I hate it. If you're using coffeescript to write JS faster with less typing and less text then I love it.
* Sass: I feel like I'm in the middle of a sassy sandwich! There are a lot of things I dislike about my profession and CSS is one of them. Sass makes me less likely to flip my desk. (unintended less reference there)
* Grunt: I need a tool to compile the coffee and the sass. I want something to watch for my changes and compile as I change and even get super fancy and live reload my browser. I'm working in coffee already, it makes sense and I've wanted an excuse to use it.

Here's my [Gruntfile.coffee](https://github.com/TheDudeWithTheThing/thedudewiththething.github.io/blob/master/Gruntfile.coffee):

```coffeescript
grunt.initConfig
  pkg: grunt.file.readJSON('package.json'),
  watch:
    files: ['src/scss/*.scss', '_posts/*.md', '_layouts/*.html', '_config.yml', 'src/coffee/**/*.coffee', '*.html', 'src/coffee/templates/*.emblem']
    tasks: ['default', 'shell:jekyllBuild']
    options:
      interrupt: true
      atBegin: true
      livereload: true
      debounceDelay: 2000
  clean: ['src/js/']
  concat:
    options:
      separator: ';'
    dist:
      src: ['src/coffee/**/.js']
  coffee:
    compile:
      files:
        'js/site.js': 'src/coffee/**/*.coffee'
  emblem:
    compile:
      files:
        'js/templates.js': 'src/coffee/templates/*.emblem',
    options:
      root: 'src/coffee/templates/'
      dependencies:
        jquery: 'js/jquery.min.js'
        ember: 'js/ember.min.js'
        emblem: 'js/emblem.min.js'
        handlebars: 'js/handlebars.min.js'
  sass:
    dist:
      files:
        'stylesheets/site.css': 'src/scss/site.scss'
        'stylesheets/jellybeans.css': 'src/scss/jellybeans.scss'
        'stylesheets/font-awesome.css': 'bower_components/font-awesome/scss/font-awesome.scss'
  shell:
    jekyllBuild:
      command: 'jekyll build --drafts'
    jekyllServe: 
      command: 'jekyll serve'
  uglify:
    options:
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
    dist:
      files:
        'js/<%= pkg.name %>.min.js': ['<%= coffee,dist.dest %>']
```

My workflow is to open up a split terminal, both in my working directory and then run
```
jekyll serve --drafts
```
in one and
```
grunt watch
```
in the other. I actually have grunt watch alias'd to gw. The great thing about grunt watch is the live reload. After everything is built my localhost:4000 auto refreshes and reflects all the changes.

Since this is getting pretty lengthy already I'll wrap it up and save how to use this set up for your own github pages for another post.

Punchline: I still can't think of a punchline. =\
