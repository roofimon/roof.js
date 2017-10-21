#!/usr/bin/env node
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var files = require('./lib/files');

var Roof = {};

Roof.say = function () {
  console.log.apply(console, Array.prototype.slice.call(arguments));
}

Roof.doSomething = function () {
  'use strict';
  return true;
};

Roof.greetToPeople = function () {
  this.say(
    chalk.yellow(
      figlet.textSync('ROOF.42', { horizontalLayout: 'full' })
    )
  );
};

Roof.checkGit = function () {
  if (files.directoryExists('.git')) {
    Roof.say(chalk.red('Already a git repository!'));
  }
};

if (require.main === module) {
  clear();
  Roof.greetToPeople();
  Roof.checkGit();
}

module.exports = Roof;