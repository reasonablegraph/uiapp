
module.exports = function (grunt) {

	var MAIN_DIR = grunt.config.get('options.MAIN_DIR');
	var FILE_RUNTIME_CONFIG = MAIN_DIR + '/config/_runtime.js';

  var fs = require("fs"), vm = require('vm'), jsesc = require('jsesc'), util=require('util'),Handlebars  = require('handlebars'), _ = require('lodash'),process = require('process');
  var dataContext = {fs:fs, console:console,jsesc:jsesc,util:util,Handlebars:Handlebars,grunt:grunt,process:process,_:_};

  vm.runInNewContext(fs.readFileSync(FILE_RUNTIME_CONFIG), dataContext);
  var BUILD_PROJECT  = dataContext['_runtime']['BUILD_PROJECT'];
  grunt.config.set('options.BUILD_PROJECT',BUILD_PROJECT);


  var import_options = function(MAIN_DIR, BUILD_PROJECT, dataContext, conf_name){
  	var BUILD_PROJECT_DIR = MAIN_DIR + '/config/overights/' + BUILD_PROJECT ;
  	var CONF_FILE_NAME = conf_name + '.js';
	  var FILE_ARC_LARAVEL_BASE = MAIN_DIR + '/config/' +CONF_FILE_NAME;
	  var OVERIGHT_CONF_FILE_NAME = BUILD_PROJECT_DIR + '/' + CONF_FILE_NAME;
	  vm.runInNewContext(fs.readFileSync(FILE_ARC_LARAVEL_BASE), dataContext);
	  var conf1  = dataContext[conf_name];

	  dataContext['REPLACE_BASE_CONFIG'] = false;
	  vm.runInNewContext(fs.readFileSync(OVERIGHT_CONF_FILE_NAME), dataContext);
	  if (!dataContext['REPLACE_BASE_CONFIG']){
	  	grunt.config.set('options.' + conf_name,conf1);
	  } else {
	  	grunt.config.set('options.' + conf_name,{});
	  }
	  //conf2  = {'options':{conf_name:dataContext[conf_name]}};
	  var conf2 = {};  var conf3 = {};
	  conf3[conf_name] =dataContext[conf_name];
	  conf2['options'] = conf3;
	  grunt.config.merge(conf2);
  }

  import_options(MAIN_DIR, BUILD_PROJECT, dataContext, 'arc');
  import_options(MAIN_DIR, BUILD_PROJECT, dataContext, 'arc_rules');

	options = grunt.config.get('options');
	return options;

};
