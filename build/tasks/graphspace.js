'use strict';

module.exports = function(grunt) {

//	grunt.registerTask('test1', '', function() {
//		grunt.log.header = function() {}
//		//console.log(grunt.log.header.toString());
//		grunt.registerTask('test2', '', function() {
//			console.log("TEST2");
//		});
//		grunt.task.run('test2');
//
//	});



	grunt.registerTask('_generate-storage-settings', '', function() {
		var files =[
//		            'src/js/conf/amelib/config_storage.js',
//		            'src/js/conf/amelib/config_storage_relations.js'
									'target/config_storage_php_gen.js'
		            ];

		var fs = require("fs"), vm = require('vm');

		var dataContext = {};
		for (var i in files){
			vm.runInNewContext(fs.readFileSync(files[i]), dataContext);
		}
	 // console.log(dataContext);

	  // var settings = {};
	  //settings['contributor_work_type_map'] = dataContext['contributor_work_type_map'];
	  var settings = dataContext;



	  //console.log(JSON.stringify(settings));
	  grunt.file.write('target/settings.json',JSON.stringify(settings));


	  if (grunt.file.exists('target/settings.json')){
	  	grunt.log.ok('target/settings.json CREATED');
	  	console.log('------------------------------------------------------');
	  	console.log('keys:');
	  	console.log('------------------------------------------------------');
	  	var tmp = grunt.file.readJSON('target/settings.json');
	  	for (var k in tmp){
	  		console.log(k);
	  	}
	  	console.log('------------------------------------------------------')
	  	grunt.log.ok('/tmp/settings.json CREATED');
	  	grunt.file.write('/tmp/settings.json',JSON.stringify(settings,null,2));

		  var laravel_storage_settings_file = grunt.config.get('options.laravel_storage_settings_file');
		  if (laravel_storage_settings_file){
		  	console.log("copy settings to: "  + laravel_storage_settings_file);
		  	grunt.file.copy('target/settings.json',laravel_storage_settings_file);
		  }


	  }


	});


	grunt.registerTask('remove_log_header', '', function() {
		global['grunt_log_header'] = grunt.log.header;
		grunt.log.header = function() {};
	});

	grunt.registerTask('reset_log_header', '', function() {
		if (global['grunt_log_header']){
			grunt.log.header = global['grunt_log_header'];
		}
	});

	var sh_exec = function(cmd,variables){
		var sh = require('shelljs');
		var handlebars = require('handlebars');
		var cmd = handlebars.compile(cmd,{noEscape:true})(variables);
		console.log(cmd);
		return sh.exec(cmd);
	}

	var make_item_graph = function(inferred_flag,neighbourhood_flag,only_test_nodes_flag){
		neighbourhood_flag =  (neighbourhood_flag !== undefined) ? neighbourhood_flag : false;
		inferred_flag = (inferred_flag !== undefined) ? inferred_flag : false;
		only_test_nodes_flag = (only_test_nodes_flag !== undefined) ? only_test_nodes_flag : false;

		var sh = require('shelljs');
		sh.mkdir('-p', 'target/tmp');

		// console.log('neighbourhood:' + neighbourhood_flag + '  :::: ' + (neighbourhood_flag ?  'TRUE': 'FALSE'));
		// console.log('inferred     :' + inferred_flag + '  :::: ' + (inferred_flag ?  'TRUE': 'FALSE'));
		// console.log('only_test_nodes:' + only_test_nodes_flag + '  :::: ' + (only_test_nodes_flag ?  'TRUE': 'FALSE'));

		// var inferred_flag_graph = inferred_flag ? 1 : 0;
		// var neighbourhood_flag_graph = neighbourhood_flag
		// var graph= 'target/tmp/item-graph.dot';
		// var exec_context = {
		// 		HOST_LARAVEL:grunt.config.get('options.HOST_LARAVEL'),
		// 		GRAPH:graph,
		// 		INFERRED_FLAG:inferred_flag_graph,
		// 		NEIGHBOURHOOD_FLAG:neighbourhood_flag_graph,
		// };
		//sh_exec('curl -v "http://{{HOST_LARAVEL}}/prepo/graphviz?inferred={{INFERRED_FLAG}}&neighbourhood={{NEIGHBOURHOOD_FLAG}}" > {{GRAPH}}',exec_context);

		var graph= 'target/tmp/item-graph.dot';
		sh_exec('/laravel_artisan  graph:dot --neighbourhood={{neighbourhood}}  --inferred={{inferred}} --onlytestnodes={{only_test_nodes}}  > {{GRAPH}}',{
			'GRAPH':graph,
			'neighbourhood':neighbourhood_flag,
			'inferred':inferred_flag,
			'only_test_nodes':only_test_nodes_flag,
		});
		return graph;

	};


	var graphReset = function(verbose, itemId){
		var sh = require('shelljs');

		var get_params = '';
		var sep = '';
		if (verbose){
			get_params += sep + 'verbose=1';
			sep='&';
		}
		if (itemId && itemId > 0){
			get_params += sep + 'item=' + itemId;
			sep='&';
		}

		var exec_context = {
				HOST_LARAVEL:grunt.config.get('options.HOST_LARAVEL'),
				GET_PARAMS:get_params,
		};
		var ts = Date.now();
		sh_exec('curl "http://{{HOST_LARAVEL}}/prepo/graphReset?{{GET_PARAMS}}" > /tmp/graph-reset-output.html',exec_context);
		var te = Date.now();
		console.log('');console.log('');console.log('');console.log('');
		sh_exec('cat /tmp/graph-reset-output.html',{});
		var diff = Math.floor((te-ts) / 1000);
		console.log('');console.log('');
		var base = 60;
		if (diff < base){
			console.log('reset-duration: ', diff, 'sec');
		} else {
			var mdiff = Math.floor(diff / base);
			var sdiff = diff - mdiff*base;
			console.log('reset-duration: ', mdiff + ':' +sdiff);
		}

	}

	grunt.registerTask('graph-reset', '', function(item) {
		graphReset(false,item);
	});

	grunt.registerTask('graph-reset-verbose', '', function(item) {
		graphReset(true,item);
	});


	grunt.registerTask('graph-show-steps', '', function() {
    var eog_flag = grunt.option('eog');
    if (eog_flag == undefined){ eog_flag = true;}
		sh_exec('dot -Tpng  -o /tmp/g-0.png /tmp/g0.dot');
		sh_exec('dot -Tpng  -o /tmp/g-1.png /tmp/g1.dot');
		sh_exec('dot -Tpng  -o /tmp/g-2.png /tmp/g2.dot');
		sh_exec('dot -Tpng  -o /tmp/g-3.png /tmp/g3.dot');
		if (eog_flag) {
      sh_exec('eog /tmp/g-?.png');
    }
	});

	grunt.registerTask('graph-create-png', '', function() {
		var neighbourhood_flag = grunt.option('neighbourhood');
		var inf_flag = grunt.option('inferred');
		var only_test_nodes = grunt.option('onlytestnodes');
		make_item_graph(inf_flag,neighbourhood_flag,only_test_nodes);
		sh_exec('dot -Tpng  -o target/tmp/item-graph.png target/tmp/item-graph.dot');
		sh_exec('cp target/tmp/item-graph.png /tmp/');
	});

	grunt.registerTask('graph-show', '', function() {
		var neighbourhood_flag = grunt.option('neighbourhood');
		var inf_flag = grunt.option('inferred');
		var only_test_nodes = grunt.option('onlytestnodes');
		make_item_graph(inf_flag,neighbourhood_flag,only_test_nodes);
		sh_exec('dot -Tpng  -o target/tmp/item-graph.png target/tmp/item-graph.dot');
		sh_exec('eog target/tmp/item-graph.png');
	});

	grunt.registerTask('graph-show-node', '', function(node,depth) {
		var inf_flag = grunt.option('inferred');
		var neighbourhood_flag = grunt.option('neighbourhood');
		if(node){ node = 'oi:' + node;}
		var graph = make_item_graph(inf_flag,neighbourhood_flag);
		graph_node_show(graph,'node',node,depth);
	});

	grunt.registerTask('graph-show-node-parents', '', function(node,depth) {
		var inf_flag = grunt.option('inferred');
		var neighbourhood_flag = grunt.option('neighbourhood');
		if(node){ node = 'oi:' + node;}
		var graph = make_item_graph(inf_flag,neighbourhood_flag);
		graph_node_show(graph,'parents',node,depth);
	});

	grunt.registerTask('graph-show-node-childs', '', function(node,depth) {
		var inf_flag = grunt.option('inferred');
		var neighbourhood_flag = grunt.option('neighbourhood');
		if(node){ node = 'oi:' + node;}
		var graph = make_item_graph(inf_flag,neighbourhood_flag);
		graph_node_show(graph,'childs',node,depth);
	});

	var  graph_node_show = function(graph,type,node,depth) {
		var g_file = 'subgraph.g';
		if (type == 'parents'){
			g_file = 'parents.g';
		} else if (type == 'node') {
			g_file = 'node.g';
		};
		//console.log(g_file);
		if (!depth){
			depth =100;
		}
		var sh = require('shelljs');
		sh.mkdir('-p', 'target/tmp');

		var hc ={
			graph:graph,
			node:node,
			depth:depth,
			g_file:g_file,
		}
		sh_exec('cat  {{graph}} |gvpr    -f ./src/g/{{g_file}}  -a "{{depth}} {{node}}" > ./target/tmp/{{node}}.dot',hc);
		sh_exec('dot -Tpng  -o ./target/tmp/{{node}}.png ./target/tmp/{{node}}.dot',hc);
		sh_exec('eog ./target/tmp/{{node}}.png',hc);
	};


	var  command_show_deps = function(type,command_name,depth) {
		graph_node_show('./target/deps.dot',type,command_name,depth);
	};




	grunt.registerTask('command-show-childs', '', function(command_name,depth) {
		grunt.registerTask('_show_deps', '',function() {
			command_show_deps('subgraph',command_name,depth);
		});
		grunt.task.run('commands-deps','remove_log_header','_show_deps','reset_log_header');
	});

	grunt.registerTask('command-show-parents', '', function(command_name,depth) {
		grunt.registerTask('_show_deps', '', function() {
			command_show_deps('parents',command_name,depth);
		});
		grunt.task.run('commands-deps','remove_log_header','_show_deps','reset_log_header');
	});

	grunt.registerTask('command-show', '', function(command_name,depth) {
		grunt.registerTask('_show_deps', '', function() {
			command_show_deps('node',command_name,depth);
		});
		grunt.task.run('commands-deps','remove_log_header','_show_deps','reset_log_header');
	});

	grunt.registerTask('form-show', '', function(command_name,depth) {

		command_name = 'form@' + command_name ;

		grunt.registerTask('_show_deps', '', function() {
			command_show_deps('subgraph',command_name,depth);
		});

		grunt.task.run('commands-deps','remove_log_header','_show_deps','reset_log_header');

	});




	grunt.registerTask('dump-options', 'dump-options', function() {
			console.log('------------------------------------------------');
			console.log(JSON.stringify(grunt.config.get('options'), undefined, 2));
	});

	grunt.registerTask('dump-arc', '', function() {
		console.log('------------------------------------------------');
		console.log(JSON.stringify(grunt.config.get('options.arc'), undefined, 2));
		console.log('------------------------------------------------');
	});

	grunt.registerTask('dump-arc_solr', '', function() {
		console.log('------------------------------------------------');
		var arc_rules = grunt.config.get('options.arc');
		var k, v, k1,v1;
		for (k in arc_rules){
			v = arc_rules[k];
			if (k.includes('SOLR')){
				if (k == 'SOLR_ENDPOINTS'){
					console.log(k, ':', JSON.stringify(v,undefined,2));
				} else {
					console.log(k, ':', JSON.stringify(v));
				}
			}
		}
		console.log('------------------------------------------------');
	});

	grunt.registerTask('dump-arc_rules', '', function() {
		console.log('------------------------------------------------');
		var arc_rules = grunt.config.get('options.arc_rules');
		var k, v, k1,v1;
		for (k in arc_rules){
			v = arc_rules[k];
			if (k == 'DEFAULT_RULES' || k == 'DEFAULT_ITEM_RULES'){
				console.log("");
				console.log(k, ':');
				for (k1 in v){
					v1 = v[k1];
					console.log(' ⤷',k1, ':', JSON.stringify(v1));
				}
			} else {
				console.log(k, ':', JSON.stringify(v));
			}
		}
		console.log('------------------------------------------------');
	});

	grunt.registerTask('dump-config', 'dump-config', function() {
	    console.log('------------------------------------------------');
	    console.log(JSON.stringify(grunt.config.get(), undefined, 2));
	    console.log('------------------------------------------------');
	});
	grunt.registerTask('dump-config-raw', 'dump-config-raw', function() {
	    console.log('------------------------------------------------');
	    console.log(JSON.stringify(grunt.config.getRaw(), undefined, 2));
	    console.log('------------------------------------------------');
	});

	grunt.registerTask('dump-global', '', function() {
	  console.log('------------------------------------------------');
	  //console.log(JSON.stringify(global, undefined, 2));
	  console.log(global);
	  console.log('------------------------------------------------');
	});



//'commands_tmp':{
//files : [ {
//	expand : true,
//	cwd : '<%= options.dir.assets %>/js/form/',
//	src : [ 'step1_conf_gen.js' ,'commands_gen.js'],
//	dest : '/tmp',
//	filter : 'isFile'
//}, ],
//},


	var copyCommandsToTmp = function(){
		var dir_asets = grunt.config.get('options.dir.assets');
		var base_path = dir_asets + '/js/form/';
		var base_path2 = dir_asets + '/js/';
		var file;
		///commands_gen.js  form_controler_gen.js	step1_conf_gen.js  step1_form_gen.js  worker.js

		file = 'step1_conf_gen.js'; grunt.file.copy(base_path + file,'/tmp/' +file);
		file = 'commands_gen.js'; grunt.file.copy(base_path + file,'/tmp/' +file);
		file = 'form_controler_gen.js'; grunt.file.copy(base_path + file,'/tmp/' +file);
		file = 'putil.js';  grunt.file.copy(base_path2 + file,'/tmp/' +file);
		grunt.file.copy('/data/www/assets/vendor/jquery-deferred-sequence/jquery.deferred.sequence.js','/tmp/jquery.deferred.sequence.js');
		grunt.file.copy('/data/www/assets/vendor/jquery.blockUI.js','/tmp/jquery.blockUI.js');

	}

	var phantomjsAddDumpCommands = function(phantomjs){
		phantomjs.on('dump.commands', function(ob) {
			console.log("dump.commands");
			grunt.file.write('src/test/commands_gen.json', JSON.stringify(ob, undefined, 2));
		});
	}


	grunt.registerTask('command-find','',function(c1,c2,c3,c4,c5,c6){
//	 var cmd = 'ack "commands.{{command_name}} " ./src/js/commands/';
//	 sh_exec(cmd,{command_name:command_name});
		//var sh = require('shelljs');

		if (! c1) {
			grunt.fail.fatal('command name expected');
		}
		var command_name = c1;
		if (c2){ command_name = command_name + ':' + c2; }
		if (c3){ command_name = command_name + ':' + c3; }
		if (c4){ command_name = command_name + ':' + c4; }
		if (c5){ command_name = command_name + ':' + c5; }
		if (c6){ command_name = command_name + ':' + c6; }


		var phantomjs = require('../src/phantom.js')(grunt);

		copyCommandsToTmp();
	  phantomjsAddDumpCommands(phantomjs);


	  // This task is async.
	  var done = this.async();

	  var url = 'file:///opt/ins/dev/jsproject/src/test/commands-test.html#command-find=' + encodeURIComponent(command_name);
	  // Spawn phantomjs
	  phantomjs.spawn(url, {
	    // Additional PhantomJS options.
	    options: {},
	    // Complete the task when done.
	    done: function(err) {
	      done(err);
	    }
	  });

});

	grunt.registerTask('command-dump', function(arg) {

		if (! arg) {
			grunt.fail.fatal('command name expected');
		}

		var command_name = arg;

		var phantomjs = require('../src/phantom.js')(grunt);

		copyCommandsToTmp();
	  phantomjsAddDumpCommands(phantomjs);

	  // This task is async.
	  var done = this.async();

	  var url = 'file:///opt/ins/dev/jsproject/src/test/commands-test.html#dump_command=' + command_name;

	  // Spawn phantomjs
	  phantomjs.spawn(url, {
	    // Additional PhantomJS options.
	    options: {},
	    // Complete the task when done.
	    done: function(err) {
	      done(err);
	    }
	  });

	});


	grunt.registerTask('form-test', function(arg) {

		if (! arg) {
			grunt.fail.fatal('test name expected');
		}

		var js_test_file_path = 'src/test/form/' + arg + '.js';
		if (! grunt.file.exists(js_test_file_path)){
			grunt.fail.fatal(js_test_file_path + ' NOT EXISTS');
		}

		grunt.file.copy(js_test_file_path,'/tmp/form-test-gen.js');

		var phantomjs = require('../src/phantom.js')(grunt);

		copyCommandsToTmp();
		//phantomjsAddDumpCommands(phantomjs);

		// This task is async.
		var done = this.async();

		var url = 'src/test/form-test.html#' + arg;


		// Spawn phantomjs
		phantomjs.spawn(url, {
			// Additional PhantomJS options.
			options: {
				'--debug': true,
				'--web-security': false,
			},
			// Complete the task when done.
			done: function (err) {
				done(err);
			}
		});

	});



	grunt.registerTask('form-test2', function(arg) {

		var phantomjs = require('../src/phantom.js')(grunt);
		var done = this.async();


		phantomjs.on('onLoadFinished', function(arg) {
			console.log('LoadFinished',arg);
		});
		phantomjs.on('onInitialized', function(arg) {
			console.log('onInitialized',arg);
		});




		var url = 'http://laravel.local/prepo/edit_step1?br=2&rd=auth-work';

		// Spawn phantomjs
		phantomjs.spawn(url, {
			// Additional PhantomJS options.
			options: {
				'--debug': true,
				'--web-security': false,
			},
			// Complete the task when done.
			done: function (err) {
				done(err);
			}
		});

	});

	//http://laravel.local/prepo/edit_step1?br=2&rd=auth-work

	grunt.registerTask('form-dump', function(arg) {

		if (! arg) {
			grunt.fail.fatal('form name expected');
		}

		var form_name = arg;

		var phantomjs = require('../src/phantom.js')(grunt);

		copyCommandsToTmp();
	  phantomjsAddDumpCommands(phantomjs);

	  // This task is async.
	  var done = this.async();

	  var url = 'file:///opt/ins/dev/jsproject/src/test/commands-test.html#dump_form=' + form_name;

	  // Spawn phantomjs
	  phantomjs.spawn(url, {
	    // Additional PhantomJS options.
	    options: {},
	    // Complete the task when done.
	    done: function(err) {
	      done(err);
	    }
	  });

	});


	grunt.registerTask('commands-test', 'commands tests', function() {
		var phantomjs = require('../src/phantom.js')(grunt);
		var errorCount = 0;

	  phantomjs.on('console.error', function(msg) {
	    errorCount++;
	    grunt.log.error(msg);
	  });

	  copyCommandsToTmp();
	  phantomjsAddDumpCommands(phantomjs);


	  // This task is async.
	  var done = this.async();

	  // Spawn phantomjs
	  phantomjs.spawn('file:///opt/ins/dev/jsproject/src/test/commands-test.html', {
	    // Additional PhantomJS options.
	    options: {},
	    // Complete the task when done.
	    done: function(err) {
	      done(err || errorCount === 0);
	    }
	  });

	});



	grunt.registerTask('commands-deps', 'create commands depentencies dot', function() {
		var phantomjs = require('../src/phantom.js')(grunt);

		copyCommandsToTmp();
		phantomjsAddDumpCommands(phantomjs);


	  phantomjs.on('dump.depsToDot', function(graph_data) {
	  	var deps = graph_data['arcs'];
	  	var node_data = graph_data['nodes'];
	  	grunt.file.mkdir('target');
	  	console.log("dump.depsToDot");
	  	//console.log(node_data);

//	  	var txt = 'digraph Deps { rankdir=LR;';
//	  	txt +="\n";
//	  	for (var i in deps){
//	  		var d = deps[i];
//	  		var d1 = d['from'];
//	  		var d2 = d['to'];
//	  		var label = null;
//	  		if (d['label']){
//	  			label = d['label'];
//	  		}
//	  		txt += '"' + d1 +'"' + ' -> ' +  '"' + d2 + '"' ;
//	  		if (label){
//	  			txt += '  [ label = "' + label + '" ]';
//	  		}
//	  		txt += ';';
//	  		txt +="\n";
//	  	};
//	  	txt +="\n";
//	  	txt += '}';
//	  	txt +="\n";
//	  	grunt.file.write('target/deps.dot', txt);

	  var graphviz = require('graphviz');
	  var g = graphviz.digraph("G");
	  g.set('rankdir','LR');

	  for (var  i in node_data){
	  	var data = node_data[i];
	  	var label = i;
	  	if (data['type']){
	  		label += "\n" + data['type'];
	  		if (data['key']){
		  		label += ' # ' + data['key'];
	  		}
	  	} else {
	  		label += "\n" + '(' + data['action'] + ')';
	  	}
	  	if (data['x-generator']){
	  		label += "\n" + 'x-gen: ' + data['x-generator'];
	  	}
	  	if (data['x-srcFile']){
	  		label += "\n" + 'x-src: ' + data['x-srcFile'];
	  	}
	  	g.addNode(i,{'label':label});
	  }

  	for (var i in deps){
  		var d = deps[i];
  		var d1 = d['from'];
  		var d2 = d['to'];
  		var label = null;
  		if (d['label']){
  			label = d['label'];
  		}
  		var e = g.addEdge( d1, d2 );
  		if (label){
  			e.set('label',label);
  		}
  	};

  	grunt.file.write('target/deps.dot', g.to_dot());


	  });


	  // This task is async.
	  var done = this.async();

	  copyCommandsToTmp();
	  // Spawn phantomjs
	  phantomjs.spawn('file:///opt/ins/dev/jsproject/src/test/commands-test.html#deps', {
	    // Additional PhantomJS options.
	    options: {},
	    // Complete the task when done.
	    done: function(err) {
	      done(err);
	    }
	  });

	});



	/**
	 * @memberOf grunt_tasks
	 * @name commands-list
	 */
	grunt.registerTask('commands-list', 'list commands', function() {
		var phantomjs = require('../src/phantom.js')(grunt);

		var sh = require('shelljs');
		//console.log(sh.ls('src/test/commands-list').stdout);


		copyCommandsToTmp();
		phantomjsAddDumpCommands(phantomjs);
	  // This task is async.
	  var done = this.async();
	  // Spawn phantomjs
	  var child = phantomjs.spawn('file:///opt/ins/dev/jsproject/src/test/commands-test.html#commands-list', {
	    // Additional PhantomJS options.
	    options: {},
	    // Complete the task when done.
	    done: function(err) {
	      done(err);
	    }
	  });

//	  child.stdout.on("data", function (data) {
//	    console.log("spawnSTDOUT:", data)
//	  })
//
//	  child.stderr.on("data", function (data) {
//	    console.log("spawnSTDERR:", data)
//	  })
//
//	  child.on("exit", function (code) {
//	  })

	});

/**
 * @memberOf grunt_tasks
 * @name forms-list
 */
	var forms_list = function() {
		var phantomjs = require('../src/phantom.js')(grunt);

		copyCommandsToTmp();
		phantomjsAddDumpCommands(phantomjs);

	  // This task is async.
	  var done = this.async();

	  // Spawn phantomjs
	  phantomjs.spawn('file:///opt/ins/dev/jsproject/src/test/commands-test.html#forms-list', {
	    // Additional PhantomJS options.
	    options: {},
	    // Complete the task when done.
	    done: function(err) {
	      done(err);
	    }
	  });

	}
	grunt.registerTask('forms-list', 'list formSetups',forms_list );



	grunt.registerTask('manifest', '', function() {

		var sexec = function(cmd,variables){
			var sh = require('shelljs');
			var handlebars = require('handlebars');
			var cmd = handlebars.compile(cmd,{noEscape:true})(variables);
			return sh.exec(cmd,{silent:true});
		}

		var path = require('path');
		var dev_dir = grunt.config.get('options.arc.DEV_DIR');
		dev_dir = dev_dir ? path.resolve(dev_dir) : '/opt/ins/dev/';

		var proj1 = path.resolve(dev_dir + '/jsproject');
		var proj2 = path.resolve(dev_dir + '/laravel');

		var check_hg = function(name, prj_path){
			var rep = {};
			var cmd,out;
			cmd=' hg --cwd {{PATH}} log -l 1 ';
			out = sexec(cmd,{'PATH':prj_path}).stdout;
			var msg ="-----------------------------------\n" + name + "\n-----------------------------------\n" + out;


			cmd="hg --cwd {{PATH}}  summary| grep  'commit:'|grep -q  '(clean)' && echo CLEAN || echo DIRTY";
			out = sexec(cmd,{'PATH':prj_path}).stdout.trim();
			if (out == 'CLEAN' ){
				rep.status = true;
			} else {
				rep.status = false;
				var chalk = require('chalk');
				msg += chalk.red('ERROR: ') + name + chalk.red(' IS NOT CLEAN') + "\n";
			}
			rep.msg = msg;
			return rep;
		}

		var manifest_body = check_hg('jsproject',proj1).msg +"\n"+ check_hg('laravel',proj2).msg;
		console.log(manifest_body);
		grunt.file.write(path.resolve(proj1 + '/target/manifest.txt'),manifest_body);

	});






}