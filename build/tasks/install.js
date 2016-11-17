'use strict';

module.exports = function(grunt) {

	grunt.registerTask('install_jquery_colorbox', function(pkg) {
		var shell = require('shelljs');
		var destination  = grunt.config.get('options.dir.assets') + '/vendor/jquery-colorbox';
		shell.mkdir('-p',destination);
		shell.cp('-rf','bower_components/jquery-colorbox/',destination);
		grunt.log.ok("installation done: " + destination);
	});

	grunt.registerTask('install_mustache', function(pkg) {
		var shell = require('shelljs');
		var destination  = grunt.config.get('options.dir.assets') + '/vendor/mustache';
		shell.mkdir('-p',destination);
		shell.cp('-rf','bower_components/mustache/',destination);
		grunt.log.ok("installation done: " + destination);
	});


	grunt.registerTask('make_commands', function(pkg) {
		var commands_set = grunt.config.get('options.arc.commands_set');
		grunt.log.oklns('make commands_set: ', commands_set);
		var commands_sets = grunt.config.get('options.commands_sets');
		if(commands_sets[commands_set]){
			grunt.task.run(commands_sets[commands_set]);
		}else{
			grunt.fail.fatal('error commands_set not found:',commands_set);
		}
	});

	grunt.registerTask('install', function(pkg) {

		var shell = require('shelljs');

		var print_pacakages = function(){
			console.log("avaliable options:")
			console.log("install:all");
			console.log("install:bootstrap");
			console.log("install:jquery_colorbox");
			console.log("install:tinymce");
			console.log("install:mustache");
			console.log("install:old_vendor");
			console.log("install:jseditor");
			//console.log("-------------------------------");
		//	console.log("remember to run:  grunt bower:install");
		};

		var bower_install = function(bower_package) {
			var cmd = 'bower install ';
			if (bower_package){
				cmd = cmd + bower_package;
			}
			console.log(cmd);
			shell.exec(cmd,{silent:false});
		}

		var install_jseditor = function(){
			grunt.task.run(['copy:jseditor']);
		}


		var install_oldvendor = function(){
			grunt.task.run(['copy:oldvendor']);
		}

		var install_bootstrap = function(){
			grunt.task.run(['copy:bower-bootstrap-dist']);
			grunt.task.run(['copy:bower-bootstrap-less']);
		}

		var install_tinymce = function(){
//			var cmd = 'bower install tinymce';
//			console.log(cmd);
//			shell.exec(cmd,{silent:false});
			grunt.task.run(['copy:bower-tinymce']);
		}

		var install_jquery_deferred_sequence = function(){
			grunt.task.run(['copy:bower-jquery-deferred-sequence']);
		}

		var install_jquery_ui = function(){
			grunt.task.run(['copy:bower-jquery-ui']);
		}


		var install_autocomplete = function(){
			grunt.task.run(['copy:bower-ui-autocomplete']);
		}

		var install_dialog = function(){
			grunt.task.run(['copy:bower-ui-dialog']);
		}

		if (pkg === undefined){
			console.log("package expected");
			print_pacakages();
		} else if (pkg == 'all'){
			//grunt.task.run(['bower:install']);
			bower_install();
			grunt.task.run(['install_jquery_colorbox']);
			install_bootstrap();
			install_tinymce();
			install_jquery_ui();
			install_autocomplete();
			install_dialog();
			install_jquery_deferred_sequence();
			install_oldvendor();
			install_jseditor();
			grunt.task.run(['copy:bower-clipboard']);
		} else if (pkg == 'old_vendor'){
			install_oldvendor();
		} else if (pkg == 'jquery_ui'){
			bower_install();
			install_jquery_ui();
		} else if (pkg == 'tinymce'){
			bower_install('tinymce');
			install_tinymce();
		} else if (pkg == 'jquery_colorbox'){
			bower_install();
			grunt.task.run(['install_jquery_colorbox']);
		} else if (pkg == 'mustache'){
			bower_install();
			grunt.task.run(['install_mustache']);
		} else if (pkg == 'bootstrap'){
			bower_install();
			install_bootstrap();
		} else if (pkg == 'autocomplete'){
			bower_install();
			install_autocomplete();
		} else if (pkg == 'dialog'){
			bower_install();
			install_dialog();
		} else if (pkg == 'jseditor'){
			install_jseditor();
		} else {
			console.log("package not found");
			print_pacakages();
		}

});



}