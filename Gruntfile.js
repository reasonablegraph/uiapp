module.exports = function(grunt) {

	grunt.config.set('options.MAIN_DIR','/opt/ins/dev/archive');

	var options = require('./build/src/load-data.js')(grunt);
	var less_custom_functions = require('./build/src/less-custom-functions.js')();

	options = require('./build/src/load-bconfig.js')(grunt);

	grunt.initConfig({
				pkg : grunt.file.readJSON('package.json'),
				options: options,
				less : {
					archive : {
						options : {
//							paths : [ "assets/css" ],
//							cleancss : true,
							//compress: true,
							customFunctions:less_custom_functions
						},
						files : {
							"<%= options.dir.assets %>/css/archive.css" : "src/less/archive.less"
						}
					},
					theme : {
						options : {
							customFunctions:less_custom_functions
						},
						files : {
							"themes/drupal/graphspace_bs/css/style.css" : "themes/drupal/graphspace_bs/less/style.less"
						}
					},
					bootstrap : {
						options : {
							customFunctions:less_custom_functions,
						},
						files : {
							"<%= options.dir.assets %>/bootstrap/bootstrap.css" : "bootstrapgs/less/main.less"
						}
					},



				},

				 sync: {
//					 	theme: {
//			        files: [{
//			          cwd: 'themes/drupal/',
//			          src: [
//			            'bootstrap/**','graphspace_bs/**'
//			          ],
//			          dest : '<%=options.dir.themes%>',
//			        }],
//			       //ignoreInDest: "storage/**", // Never remove js files from destination
//			       //pretend: true, // Don't do any IO. Before you run the task with `updateAndDelete` PLEASE MAKE SURE it doesn't remove too much.
//			        verbose: true, // Display log messages when copying files
//			        updateAndDelete:true,
//			      },

					  "parchive-module": {
			        files: [{
			          cwd: 'parchive/',
			          src: [
			            '**',
			          ],
			          dest : '<%=options.dir.modules%>/parchive/',
			        }],
			       //ignoreInDest: "storage/**", // Never remove js files from destination
			      // pretend: true, // Don't do any IO. Before you run the task with `updateAndDelete` PLEASE MAKE SURE it doesn't remove too much.
			       verbose: true, // Display log messages when copying files
			       updateAndDelete:true,
					  },
					 	theme1: {
			        files: [{
			          cwd: 'themes/drupal/bootstrap/',
			          src: [
			            '**',
			          ],
			          dest : '<%=options.dir.themes%>/bootstrap/',
			        }],
			       //ignoreInDest: "storage/**", // Never remove js files from destination
			       //pretend: true, // Don't do any IO. Before you run the task with `updateAndDelete` PLEASE MAKE SURE it doesn't remove too much.
			        verbose: true, // Display log messages when copying files
			        updateAndDelete:true,
			      },
			      theme2: {
			        files: [{
			          cwd: 'themes/drupal/graphspace_bs/',
			          src: [
			            '**',
			          ],
			          dest : '<%=options.dir.themes%>/graphspace_bs/',
			        }],
			       //ignoreInDest: "storage/**", // Never remove js files from destination
			       //pretend: true, // Don't do any IO. Before you run the task with `updateAndDelete` PLEASE MAKE SURE it doesn't remove too much.
			        verbose: true, // Display log messages when copying files
			        updateAndDelete:true,
			      },

			      img: {
			        files: [{
			          cwd: 'img',
			          src: [
			            '**',
			          ],
			          dest : '<%=options.dir.assets%>/img/',
			        }],
			       //ignoreInDest: "storage/**", // Never remove js files from destination
			       //pretend: true, // Don't do any IO. Before you run the task with `updateAndDelete` PLEASE MAKE SURE it doesn't remove too much.
			        verbose: true, // Display log messages when copying files
			        updateAndDelete:true,
			      },

//			      old_vendor: {
//			        files: [{
//			          cwd: 'vendor',
//			          src: [
//									'imagesloaded/',
//									'isbnjs/',
//									//'isbnjs.txt',
//									'isotope/',
//									'jquery.query-object.js',
//									'masonry/',
//									'mustache/',
//									'node-uuid/',
//									//'node-uuid.txt',
//									'select2/',
//									'uuid.js',
//			          ],
//			          dest : '<%=options.dir.assets%>/vendor/',
//			        }],
//			       //ignoreInDest: "storage/**", // Never remove js files from destination
//			       //pretend: true, // Don't do any IO. Before you run the task with `updateAndDelete` PLEASE MAKE SURE it doesn't remove too much.
//			        verbose: true, // Display log messages when copying files
//			        updateAndDelete:false,
//			      },

			      old_js: {
			        files: [{
			          cwd: 'js',
			          src: [
			            '*.js',
			          ],
			          dest : '<%=options.dir.assets%>/js/',
			        }],
			       ignoreInDest: "form/**", // Never remove js files from destination
			       //pretend: true, // Don't do any IO. Before you run the task with `updateAndDelete` PLEASE MAKE SURE it doesn't remove too much.
			        verbose: true, // Display log messages when copying files
			        updateAndDelete:true,
			      },



			    },



				 jsdoc : {
		        dist : {
		            src: ['src/js/form/*.js',],
		            options: {
		                destination: 'doc/jsdoc/'
		            }
		        }
		    },

				watch : {
					archive: {
						files : [ 'src/less/**/*.less' ],
						tasks : [ 'less:archive', 'timestamp' ],
						options: {
							spawn: false,
						},
					},
					theme: {
						files : [ 'themes/drupal/graphspace_bs/less/**/*.less' ],
						tasks : [ 'theme', 'timestamp' ],
						options: {
							spawn: false,
						},
					},
					js : {
						files : [ 'src/js/**/*.js' ],
						tasks: ['make','timestamp'],
						options: {
							spawn: false,
						},
					}
				},


				concat: {
					options : {
					stripBanners : true,
					banner : '/*! generated: <%= grunt.template.today("yyyy-mm-dd") %> */'
							+ "\n\n",
					},

					'form-controller': {
						src :[
							'src/js/form/fctrl01_fn.js',
							'src/js/form/fctrl02_messagecontext.js',
							'src/js/form/fctrl03_base.js',
							'src/js/form/fctrl04_inputbasewidget.js',
							'src/js/form/fctrl05_util.js',
							'src/js/form/fctrl06_inputs.js',
							'src/js/form/fctrl07_formwidgets.js',
							'src/js/form/fctrl08_fieldmodel.js',
							'src/js/form/fctrl09_cmdcontext.js',
							'src/js/form/fctrl10_fieldmodelaccessor.js',
							'src/js/form/fctrl11_controller.js',
							'src/js/form/fctrl12_displaywidgets.js',
						 ],
						 dest : '<%= options.dir.assets %>/js/form/form_controler_gen.js',
					},

			    'commands-demo-altsol': {
			      src: [
			          'src/js/commands/meta_cmds.js',
								'src/js/commands/init.js',
								'src/js/commands/main.js',
								'src/js/commands/demo-altsol/place-dependency.js',
								'src/js/commands/demo-altsol/relation-fields.js',
								'src/js/commands/demo-altsol/auth-person.js',
								'src/js/commands/demo-altsol/auth-family.js',
								'src/js/commands/demo-altsol/place.js',
								'src/js/commands/demo-altsol/auth-organization.js',
								'src/js/commands/demo-altsol/auth-place.js',
								'src/js/commands/demo-altsol/auth-manifestation.js',
								'src/js/commands/demo-altsol/auth-work.js',
								'src/js/commands/demo-altsol/auth-work-expression.js',
								'src/js/commands/demo-altsol/auth-obj_collection.js',
								'src/js/commands/demo-altsol/auth-event.js',
								'src/js/commands/demo-altsol/auth-concept.js',
								'src/js/commands/demo-altsol/auth-genre.js',
								'src/js/commands/demo-altsol/auth-object.js',
								'src/js/commands/demo-altsol/auth-general.js',
								'src/js/commands/demo-altsol/auth-expression.js',
								'src/js/commands/demo-altsol/auth-person_work.js',
								'src/js/commands/demo-altsol/auth-digital_item.js',
								'src/js/commands/demo-altsol/auth-physical_item.js',
								'src/js/commands/demo-altsol/control-fields.js',
								'src/js/commands/demo-altsol/information-fields.js',
								'src/js/commands/demo-altsol/link-fields.js',
								'src/js/commands/demo-altsol/cataloging-fields.js',
								'src/js/commands/demo-altsol/subject-fields-method1.js',
								'src/js/commands/demo-altsol/subject-chain.js',
								'src/js/commands/demo-altsol/work-dependency.js',
								'src/js/commands/demo-altsol/contributor-dependency.js',
								],
			    	dest : '<%= options.dir.assets %>/js/form/commands_gen.js',
			    },

			    'form-demo-altsol':{
			      src: [
									'src/js/conf/demo-altsol/object-type-map.js',
//									'src/js/conf/demo-altsol/value-maps_en.js',
									'src/js/conf/demo-altsol/value-maps_el.js',
									'src/js/conf/demo-altsol/config_storage.js',
//									'src/js/conf/global/key_labels_en.js',
//									'src/js/conf/global/messages_labels_en.js',
									'src/js/conf/global/key_labels_el.js',
									'src/js/conf/global/messages_labels_el.js',
									'src/js/form-setups/demo-altsol/auth_digital_item.js',
									'src/js/form-setups/demo-altsol/auth_physical_item.js',
									'src/js/form-setups/demo-altsol/subject_chain.js',
									'src/js/form-setups/demo-altsol/auth_person.js',
									'src/js/form-setups/demo-altsol/auth_family.js',
									'src/js/form-setups/demo-altsol/auth_organization.js',
									'src/js/form-setups/demo-altsol/auth_place.js',
									'src/js/form-setups/demo-altsol/auth_manifestation.js',
									'src/js/form-setups/demo-altsol/auth_concept.js',
									'src/js/form-setups/demo-altsol/auth_obj_collection.js',
									'src/js/form-setups/demo-altsol/auth_event.js',
									'src/js/form-setups/demo-altsol/auth_genre.js',
									'src/js/form-setups/demo-altsol/auth_object.js',
									'src/js/form-setups/demo-altsol/auth_general.js',
									'src/js/form-setups/demo-altsol/auth_work.js',
									'src/js/form-setups/demo-altsol/auth-work-man.js',
									'src/js/form-setups/demo-altsol/auth_expression.js',
									'src/js/conf/demo-altsol/form-setups.js',
				          ],
				    	dest : '<%= options.dir.assets %>/js/form/step1_conf_gen.js',
			    },

			    'config-storage-php-demo-altsol': {
			      src: [
			            'src/js/conf/demo-altsol/config_storage.js',
			            'src/js/conf/demo-altsol/config_storage_relations.js'
								],
			    	dest : 'target/config_storage_php_gen.js',
			    },


//DEMO_EN
			    'commands-demo_en': {
			      src: [
			          'src/js/commands/meta_cmds.js',
								'src/js/commands/init.js',
								'src/js/commands/main.js',
								'src/js/commands/demo_en/place-dependency.js',
								'src/js/commands/demo_en/relation-fields.js',
								'src/js/commands/demo_en/auth-person.js',
								'src/js/commands/demo_en/auth-family.js',
								'src/js/commands/demo_en/place.js',
								'src/js/commands/demo_en/auth-organization.js',
								'src/js/commands/demo_en/auth-place.js',
								'src/js/commands/demo_en/auth-manifestation.js',
								'src/js/commands/demo_en/auth-work.js',
								'src/js/commands/demo_en/auth-work-expression.js',
								'src/js/commands/demo_en/auth-obj_collection.js',
								'src/js/commands/demo_en/auth-event.js',
								'src/js/commands/demo_en/auth-concept.js',
								'src/js/commands/demo_en/auth-genre.js',
								'src/js/commands/demo_en/auth-object.js',
								'src/js/commands/demo_en/auth-general.js',
								'src/js/commands/demo_en/auth-expression.js',
								'src/js/commands/demo_en/auth-person_work.js',
								'src/js/commands/demo_en/auth-digital_item.js',
								'src/js/commands/demo_en/auth-physical_item.js',
								'src/js/commands/demo_en/control-fields.js',
								'src/js/commands/demo_en/information-fields.js',
								'src/js/commands/demo_en/link-fields.js',
								'src/js/commands/demo_en/cataloging-fields.js',
								'src/js/commands/demo_en/subject-fields-method1.js',
								'src/js/commands/demo_en/subject-chain.js',
								'src/js/commands/demo_en/work-dependency.js',
								'src/js/commands/demo_en/contributor-dependency.js',
								],
			    	dest : '<%= options.dir.assets %>/js/form/commands_gen.js',
			    },

			    'form-demo_en':{
			      src: [
									'src/js/conf/demo_en/object-type-map.js',
									'src/js/conf/demo_en/value-maps_en.js',
									'src/js/conf/demo_en/value-maps_el.js',
//								'src/js/conf/demo_en/config_storage_el.js',
									'src/js/conf/global/key_labels_en.js',
//								'src/js/conf/global/key_labels_el.js',
									'src/js/conf/global/messages_labels_en.js',
//									'src/js/conf/global/messages_labels_el.js',
									'src/js/form-setups/demo_en/auth_digital_item.js',
									'src/js/form-setups/demo_en/auth_physical_item.js',
									'src/js/form-setups/demo_en/subject_chain.js',
									'src/js/form-setups/demo_en/auth_person.js',
									'src/js/form-setups/demo_en/auth_family.js',
									'src/js/form-setups/demo_en/auth_organization.js',
									'src/js/form-setups/demo_en/auth_place.js',
									'src/js/form-setups/demo_en/auth_manifestation.js',
									'src/js/form-setups/demo_en/auth_concept.js',
									'src/js/form-setups/demo_en/auth_obj_collection.js',
									'src/js/form-setups/demo_en/auth_event.js',
									'src/js/form-setups/demo_en/auth_genre.js',
									'src/js/form-setups/demo_en/auth_object.js',
									'src/js/form-setups/demo_en/auth_general.js',
									'src/js/form-setups/demo_en/auth_work.js',
									'src/js/form-setups/demo_en/auth-work-man.js',
									'src/js/form-setups/demo_en/auth_expression.js',
									'src/js/form-setups/demo_en/collection.js',
									'src/js/conf/demo_en/form-setups.js',
				          ],
				    	dest : '<%= options.dir.assets %>/js/form/step1_conf_gen.js',
			    },

			    'config-storage-php-demo_en': {
			      src: [
			            'src/js/conf/demo_en/config_storage_en.js',
			            'src/js/conf/demo_en/config_storage_relations.js'
								],
			    	dest : 'target/config_storage_php_gen.js',
			    },





///////////////////////////////////////////////////////////////////////////////


			  },


				copy : {

//					'commands_tmp':{
//						files : [ {
//							expand : true,
//							cwd : '<%= options.dir.assets %>/js/form/',
//							src : [ 'step1_conf_gen.js' ,'commands_gen.js'],
//							dest : '/tmp',
//							filter : 'isFile'
//						}, ],
//					},

					'jseditor':{
						files : [ {
							expand : true,
							cwd : 'bower_components/trumbowyg/dist',
							src : [ '**' ],
							dest : '<%= options.dir.assets %>/vendor/trumbowyg',
							//filter : 'isFile'
						}, ],
					},

					'oldvendor':{
						files : [ {
							nonull:true,
							expand : true,
							cwd : 'vendor',
							src : [
								'imagesloaded/**',
								'isbnjs/**',
								//'isbnjs.txt',
								'isotope/**',
								'jquery.query-object.js',
								'masonry/**',
								'mustache/**',
								'node-uuid/**',
								//'node-uuid.txt',
								'select2/**',
								'uuid.js',
							       ],
							dest : '<%= options.dir.assets %>/vendor/',
							//filter : 'isFile'
						}, ],
					},

					'css':{
						files : [ {
							expand : true,
							cwd : 'src/css',
							src : [ '**' ],
							dest : '<%= options.dir.assets %>/css',
							filter : 'isFile'
						}, ],
					},
					'step1_form':{
					expand : true,
					cwd : 'src/js/form',
					src : [ 'step1_form.js' ],
					dest : '<%= options.dir.assets %>/js/form',
			      rename: function(dest, src) {
			        return  '<%= options.dir.assets %>/js/form/step1_form_gen.js';
			      },
					},
					'workers-js':{
						files : [ {
							expand : true,
							cwd : 'src/js/form',
							src : [ 'worker.js' ],
							dest : '<%= options.dir.assets %>/js/form',
							filter : 'isFile'
						}, ],
					},

					'jquery-blockUI':{
						files : [ {
							expand : true,
							cwd : 'src/js/form',
							src : [ 'jquery.blockUI.js' ],
							dest : '<%= options.dir.assets %>/vendor',
							filter : 'isFile'
						}, ],
					},

					'bower-jquery-ui': {
						files : [ {
							expand : true,
							cwd : 'bower_components/jquery-ui/',
							src : [ '**' ],
							dest : '<%= options.dir.assets %>/vendor/jquery-ui',
							//filter : 'isFile'
						}, ],
					},
					'bower-clipboard': {
						files : [ {
							expand : true,
							cwd : 'bower_components/clipboard/dist/',
							src : [ 'clipboard.min.js' ],
							dest : '<%= options.dir.assets %>/vendor/clipboard',
							filter : 'isFile'
						}, ],
					},
					'bower-tinymce': {
						files : [ {
							expand : true,
							cwd : 'bower_components/tinymce/',
							src : [ '**' ],
							dest : '<%= options.dir.assets %>/vendor/tinymce',
							//filter : 'isFile'
						}, ],
					},
//					'bower-jquery-colorbox': {
//						files : [ {
//							expand : true,
//							cwd : 'bower_components/jquery-colorbox/',
//							src : [ '**' ],
//							dest : '<%= options.dir.assets %>/vendor/jquery-colorbox',
//							//filter : 'isFile'
//						}, ],
//					},
					'bower-ui-autocomplete': {
						files : [ {
							expand : true,
							cwd : 'bower_components/ui-autocomplete/',
							src : [ '**' ],
							dest : '<%= options.dir.assets %>/vendor/autocomplete',
							//filter : 'isFile'
						}, ],
					},

					'bower-jquery-deferred-sequence': {
						files : [ {
							expand : true,
							cwd : 'bower_components/jquery-deferred-sequence/',
							src : [ '**' ],
							dest : '<%= options.dir.assets %>/vendor/jquery-deferred-sequence',
							//filter : 'isFile'
						}, ],
					},

					'bower-ui-dialog': {
						files : [ {
							expand : true,
							cwd : 'bower_components/jquery.dialog/',
							src : [ '**' ],
							dest : '<%= options.dir.assets %>/vendor/dialog',
							//filter : 'isFile'
						}, ],
					},
					'bower-bootstrap-dist' : {
						files : [ {
							expand : true,
							cwd : 'bower_components/bootstrap/dist',
							src : [ '**' ],
							dest : '<%= options.dir.assets %>/vendor/bootstrap',
							//filter : 'isFile'
						}, ],
					},
					'bower-bootstrap-less' : {
						files : [ {
							expand : true,
							cwd : 'bower_components/bootstrap/less',
							src : [ '**' ],
							dest : 'lib/bootstrap/less',
							//filter : 'isFile'
						}, ],
					},


				},

//				bower: {
//			    install: {
//			    	options:{
//			    		targetDir:'bower_components',
//			    	}
//			    }
//			  },


				acat : {
					help : {
						file : 'etc/grunt-help.txt'
					},
				},

				clean : {
					target : {
						src : [ "target" ],
					},
				},

				mkdir : {
					target : {
						options : {
							create : [ 'target/build', 'target/rdata', 'target/dist' ]
						},
					},
				},



			});




	grunt.loadTasks('build/tasks');


	// Project configuration.
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-mkdir');
	grunt.loadNpmTasks('grunt-jsdoc');
	grunt.loadNpmTasks('grunt-sync');

	grunt.registerTask('help', [ "acat:help" ]);
	grunt.registerTask('default', [ 'help' ]);
	grunt.registerTask('form-controller', ['concat:form-controller']);
//	grunt.registerTask('commands', ['make_commands']);
	grunt.registerTask('theme', [ 'less:theme' ]); //'sync:theme1', 'sync:theme2'
	grunt.registerTask('css', [ 'copy:css','less:archive' ]);
	grunt.registerTask('step1_form', [ 'copy:step1_form' ]);
	grunt.registerTask('workers-js', [ 'copy:workers-js' ]);
	grunt.registerTask('jquery-blockUI', [ 'copy:jquery-blockUI' ]);
	grunt.registerTask('bootstrap', [ 'less:bootstrap' ]);
	grunt.registerTask("clear", [ "clean", "mkdir:target" ]);

	grunt.registerTask('generate-storage-settings', ['_generate-storage-settings','make_commands' ]);
	grunt.registerTask('make', [ 'css','form-controller','theme','make_commands','step1_form','workers-js','jquery-blockUI' ]);
	grunt.registerTask('devel', [ 'generate-storage-settings','sync', 'make','watch' ]);



	grunt.registerTask('timestamp', function() {
		grunt.log.subhead(Date());
		//grunt.log.subhead('MAIN_DIR2: ' + grunt.config.get('options.MAIN_DIR'));
	});














};
