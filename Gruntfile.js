/* globals module, process, require */

module.exports = function(grunt) {

  'use strict';

  require('time-grunt')(grunt);
  require('jit-grunt')(grunt, {
    ngtemplates: 'grunt-angular-templates'
  });

  var path = require('path');

  require('load-grunt-config')(grunt, {
    jitGrunt: true,
    configPath: path.join(process.cwd(), 'grunt', 'tasks'),
    init: true,
    data: {
      webpack: grunt.option('webpack') || '',
      paths: require(path.join(process.cwd(), 'grunt', 'options/') + 'paths.json')
    },
    loadGruntTasks: {
      config: require('./package.json'),
      scope: 'devDependencies'
    },
    postProcess: function() {}
  });

};
