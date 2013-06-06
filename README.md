Drupal Testing with Zombie.js
=============================

Some insanely fast, headless browser testing for Drupal using Zombie.js  
Zombie.js Docs: http://zombie.labnotes.org

## Getting Started
----
Zombie.js does not work with the latest node.js
You will need Node.js 0.8 - use nvm to set this up.

#### download and install nvm
> $ git clone git://github.com/creationix/nvm.git ~/.nvm

#### if you're using zsh change to .zshrc
> echo ". ~/.nvm/nvm.sh" >> ~/.bashrc

#### reload your terminal and install node 0.8
> nvm install -s v0.8
> nvm alias default v0.8

#### you'll also need npm
> curl https://npmjs.org/install.sh | clean=no sh

#### finally, install zombie
> npm install zombie

#### optional: add coffeescript
> npm -g install coffee-script

## Try it out!
----
> coffee drupal-login.coffee

### Test Requirements
----
- *drupal-node-title.&#42;* -- Entity JS (http://drupal.org/project/entity_js)
- *drupal-login.&#42;* -- Administration menu Toolbar style (http://drupal.org/project/admin_menu)
