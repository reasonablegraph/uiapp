

module.exports = function (grunt) {

	var USER_OPTIONS_FILE = 'user_options.js';

  var fs = require("fs"), vm = require('vm'), jsesc = require('jsesc'),  util=require('util'),Handlebars  = require('handlebars'), _ = require('lodash'),process = require('process');

  var dataContext = {fs:fs, console:console,jsesc:jsesc,util:util,Handlebars:Handlebars,grunt:grunt,process:process,_:_};
  vm.runInNewContext(fs.readFileSync('etc/env.js'), dataContext);
  var shell_env = dataContext['env'];

  vm.runInNewContext(fs.readFileSync('etc/options.js'), dataContext);
  var options = dataContext['options'];
  options['env'] = shell_env;
  options['MAIN_DIR'] = grunt.config.get('options.MAIN_DIR');

  var local_options_file = 'local-options.json';
  if (fs.existsSync(local_options_file)) {
  	var local_opts = grunt.file.readJSON(local_options_file);
  	for (var attrname in local_opts) { options[attrname] = local_opts[attrname]; };
  }


  var user_opts = {};
	if (fs.existsSync(USER_OPTIONS_FILE)) {
		vm.runInNewContext(fs.readFileSync(USER_OPTIONS_FILE), dataContext);
		user_opts = dataContext['options'];
	}
	grunt.config.set('options',options);
	var oconf = {'options':user_opts};
	grunt.config.merge(oconf);

	options = grunt.config.get('options');
	return options;

};
