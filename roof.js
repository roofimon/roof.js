#!/usr/bin/env node
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var files = require('./lib/files');

clear();
console.log(
  chalk.yellow(
    figlet.textSync('ROOF.42', { horizontalLayout: 'full' })
  )
);

if (files.directoryExists('.git')) {
  console.log(chalk.red('Already a git repository!'));
  process.exit();
}

var Roof = {};
Roof.doSomething = function () {
  'use strict';
  return true;
};
module.exports = Roof;