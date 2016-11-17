'use strict';

module.exports = function(grunt) {

	function clean(filepath) {

		var rimraf = require('rimraf');

		if (!grunt.file.exists(filepath)) {
			return false;
		}

		// Only delete cwd or outside cwd if --force enabled. Be careful, people!
		if (grunt.file.isPathCwd(filepath)) {
			grunt.verbose.error();
			grunt.fail.warn('Cannot delete the current working directory.');
			return false;
		} else if (!grunt.file.isPathInCwd(filepath)) {
			grunt.verbose.error();
			grunt.fail.warn('Cannot delete files outside the current working directory.');
			return false;
		}

		try {
			rimraf.sync(filepath);
			grunt.verbose.writeln('Cleaning ' + filepath + '...');
		} catch (e) {
			grunt.log.error();
			grunt.fail.warn('Unable to delete "' + filepath + '" file (' + e.message + ').', e);
		}
	};

	var loadOptions = function(deployment) {
		var fs = require("fs");
		var _ = require('lodash');
		var vm = require('vm');

		var dataContext = {
			_ : _,
			grunt : grunt
		};
		var options_file = 'etc/deployment/' + deployment + '/deploy.js';
		if (!grunt.file.exists(options_file)) {
			return null;
		}
		vm.runInNewContext(fs.readFileSync(options_file), dataContext);
		var options = dataContext['deploy_options'];
		return options;
	};

	var sh_exec = function(cmd, variables) {
		var sh = require('shelljs');
		var handlebars = require('handlebars');
		return sh.exec(handlebars.compile(cmd)(variables));
	}

	var scp_file = function(local_file, server, remote_file) {
		var sh = require('shelljs');
		var handlebars = require('handlebars');

		var ctx = {
			local_file : local_file,
			server : server,
			remote_file : remote_file,
		};

		var cmd = 'scp {{local_file}} {{server}}:{{remote_file}}';
		cmd = handlebars.compile(cmd)(ctx);
		console.log(cmd);
		sh.exec(cmd);

	}


	var sync = function(local_dir, remote_dir) {
		return rsync(local_dir,remote_dir,null);
	}
	var rsync = function(local_dir, remote_dir, server,port,ssh_user) {

		if (!port){
			port = 22;
		}

		var sh = require('shelljs');
		var handlebars = require('handlebars');

		var ctx = {
			local_dir : local_dir,
			server : server,
			remote_dir : remote_dir,
			port:  port,
		};

		if (ssh_user){
			ctx['ssh_user_option'] = ' -l ' + ssh_user;
		}

		var cmd = null;
		//--dry-run
		if (server){
			cmd = 'rsync  -e \'ssh {{ssh_user_option}} -p {{port}}\' -aHOhxv --chmod=g+rw -p --delete  {{local_dir}} {{server}}:{{remote_dir}}';
		} else {
			 cmd = 'rsync  -aHOhxv --chmod=g+rw -p --delete  {{local_dir}} {{remote_dir}}';
		}
		cmd = handlebars.compile(cmd)(ctx);
		console.log(cmd);
		sh.exec(cmd);
	}

	var do_deploy = function(deployment, options) {

		var _ = require('lodash');
		var sh = require('shelljs');
		//console.log(options);


		var deployment_conf_home = 'etc/deployment/' + deployment;
		var laravel_config_dir = deployment_conf_home + '/laravel/config';

		var confs = [];
		grunt.file.recurse(laravel_config_dir, function(abspath, rootdir, subdir, filename) {
			confs.push(abspath);
		});

		//clean('target/deploy');

		var target_deploy_laravel = 'target/deploy/laravel';
		sh.mkdir('-p', target_deploy_laravel);
		//sh.cp('-R', '../../laravel/app/', target_deploy_laravel);
		sync('../../laravel/app/', target_deploy_laravel);

		_.each(confs, function(file) {
			//scp_file(file, options.server, options.laravel_app_dir + "/config");
			sh.cp('-f',file,target_deploy_laravel + "/config");
		});

		rsync('target/deploy/laravel/', options.laravel_app_dir,options.server,options.port, options.ssh_user);
		//rsync('../apache/drupal/sites/ps.ntev.gr/modules/parchive/', options.drupal_module_dir, options.server,options.port, options.ssh_user);
		//rsync('../apache/htdocs/_assets/ ', options.assets_dir, options.server,options.port, options.ssh_user);
		//rsync('/data/www/laravel/archive/app/store/',options.store_dir, options.server,options.port, options.ssh_user);


		rsync('/data/www/sites/default/modules/parchive/', options.drupal_module_dir, options.server,options.port, options.ssh_user);
		rsync('/data/www/assets/', options.assets_dir, options.server,options.port, options.ssh_user);
	}

	grunt.registerTask('deploy', '', function(deployment) {

		if (!deployment) {
			console.log("DEPLOYMENT name expected");
			return;
		}
		var options = loadOptions(deployment);
		if (!options) {
			console.log("canot find deploy.js, worng deployment name");
			return;
		}

		var readline = require('readline');
		var rl = readline.createInterface({
			input : process.stdin,
			output : process.stdout
		});

		var done = this.async();
		var msg = "DEPLOY TO: " + options.server + " are you soure? (y/n): ";
		rl.question(msg, function(answer) {

			if (answer && answer.toUpperCase() == 'Y') {
				do_deploy(deployment, options);
			} else {
				console.log("deployment aborted");
			}
			rl.close();
			done();
		});

	});

}