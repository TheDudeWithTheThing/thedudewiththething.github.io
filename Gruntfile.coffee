module.exports = (grunt) ->

  require('load-grunt-tasks')(grunt)

  grunt.initConfig
    pkg: grunt.file.readJSON('package.json'),
    watch:
      files: ['src/scss/*.scss', '_drafts/*.md', '_posts/*.md', '_layouts/*.html', '_config.yml', 'src/coffee/**/*.coffee', '*.html']
      # tasks: ['default', 'shell:jekyllBuild']
      tasks: ['default']
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
        command: 'jekyll serve --drafts'
    uglify:
      options:
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      dist:
        files:
          'js/<%= pkg.name %>.min.js': ['<%= coffee,dist.dest %>']

  grunt.registerTask('default', ['clean', 'sass', 'coffee'])
