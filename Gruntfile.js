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
						//tasks : [ 'concat:commands-amelib','concat:form-amelib', 'concat:form-controller','copy:step1_form','copy:workers-js','timestamp']
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

//GHR (aselis)
			    'commands-ghr': {
			      src: [
			          'src/js/commands/meta_cmds.js',
								'src/js/commands/init.js',
								'src/js/commands/main.js',
								'src/js/commands/ghr/place-dependency.js',
								'src/js/commands/ghr/relation-fields.js',
								'src/js/commands/ghr/auth-person.js',
								'src/js/commands/ghr/auth-family.js',
								'src/js/commands/ghr/place.js',
								'src/js/commands/ghr/auth-organization.js',
								'src/js/commands/ghr/auth-place.js',
								'src/js/commands/ghr/auth-manifestation.js',
								'src/js/commands/ghr/auth-work.js',
								'src/js/commands/ghr/auth-work-expression.js',
								'src/js/commands/ghr/auth-obj_collection.js',
								'src/js/commands/ghr/auth-event.js',
								'src/js/commands/ghr/auth-concept.js',
								'src/js/commands/ghr/auth-genre.js',
								'src/js/commands/ghr/auth-object.js',
								'src/js/commands/ghr/auth-general.js',
								'src/js/commands/ghr/auth-expression.js',
								'src/js/commands/ghr/auth-person_work.js',
								'src/js/commands/ghr/auth-digital_item.js',
								'src/js/commands/ghr/auth-physical_item.js',
								'src/js/commands/ghr/control-fields.js',
								'src/js/commands/ghr/information-fields.js',
								'src/js/commands/ghr/link-fields.js',
								'src/js/commands/ghr/cataloging-fields.js',
								'src/js/commands/ghr/subject-fields-method1.js',
								'src/js/commands/ghr/subject-chain.js',
								'src/js/commands/ghr/work-dependency.js',
								'src/js/commands/ghr/contributor-dependency.js',
								],
			    	dest : '<%= options.dir.assets %>/js/form/commands_gen.js',
			    },

			    'form-ghr':{
			      src: [
									'src/js/conf/ghr/object-type-map.js',
//									'src/js/conf/ghr/value-maps_en.js',
									'src/js/conf/ghr/value-maps_el.js',
									'src/js/conf/ghr/config_storage.js',
//									'src/js/conf/global/key_labels_en.js',
//									'src/js/conf/global/messages_labels_en.js',
									'src/js/conf/global/key_labels_el.js',
									'src/js/conf/global/messages_labels_el.js',
									'src/js/form-setups/ghr/auth_digital_item.js',
									'src/js/form-setups/ghr/auth_physical_item.js',
									'src/js/form-setups/ghr/subject_chain.js',
									'src/js/form-setups/ghr/auth_person.js',
									'src/js/form-setups/ghr/auth_family.js',
									'src/js/form-setups/ghr/auth_organization.js',
									'src/js/form-setups/ghr/auth_place.js',
									'src/js/form-setups/ghr/auth_manifestation.js',
									'src/js/form-setups/ghr/auth_concept.js',
									'src/js/form-setups/ghr/auth_obj_collection.js',
									'src/js/form-setups/ghr/auth_event.js',
									'src/js/form-setups/ghr/auth_genre.js',
									'src/js/form-setups/ghr/auth_object.js',
									'src/js/form-setups/ghr/auth_general.js',
									'src/js/form-setups/ghr/auth_work.js',
									'src/js/form-setups/ghr/auth-work-man.js',
									'src/js/form-setups/ghr/auth_expression.js',
									'src/js/conf/ghr/form-setups.js',
				          ],
				    	dest : '<%= options.dir.assets %>/js/form/step1_conf_gen.js',
			    },

			    'config-storage-php-ghr': {
			      src: [
			            'src/js/conf/ghr/config_storage.js',
			            'src/js/conf/ghr/config_storage_relations.js',
			            'src/js/conf/global/help_fields.js',
								],
			    	dest : 'target/config_storage_php_gen.js',
			    },



//ORAL HISTORY
					'commands-oralhistory': {
					  src: [
					      'src/js/commands/meta_cmds.js',
								'src/js/commands/init.js',
								'src/js/commands/main.js',
								'src/js/commands/oralhistory/place-dependency.js',
								'src/js/commands/oralhistory/relation-fields.js',
								'src/js/commands/oralhistory/auth-person.js',
								'src/js/commands/oralhistory/auth-family.js',
								'src/js/commands/oralhistory/place.js',
								'src/js/commands/oralhistory/auth-organization.js',
								'src/js/commands/oralhistory/auth-place.js',
								'src/js/commands/oralhistory/auth-manifestation.js',
								'src/js/commands/oralhistory/auth-work.js',
								'src/js/commands/oralhistory/auth-work-expression.js',
								'src/js/commands/oralhistory/auth-obj_collection.js',
								'src/js/commands/oralhistory/auth-event.js',
								'src/js/commands/oralhistory/auth-concept.js',
								'src/js/commands/oralhistory/auth-genre.js',
								'src/js/commands/oralhistory/auth-object.js',
								'src/js/commands/oralhistory/auth-general.js',
								'src/js/commands/oralhistory/auth-expression.js',
								'src/js/commands/oralhistory/auth-person_work.js',
								'src/js/commands/oralhistory/auth-digital_item.js',
								'src/js/commands/oralhistory/auth-physical_item.js',
								'src/js/commands/oralhistory/control-fields.js',
								'src/js/commands/oralhistory/information-fields.js',
								'src/js/commands/oralhistory/link-fields.js',
								'src/js/commands/oralhistory/cataloging-fields.js',
								'src/js/commands/oralhistory/subject-fields-method1.js',
								'src/js/commands/oralhistory/subject-chain.js',
								'src/js/commands/oralhistory/work-dependency.js',
								'src/js/commands/oralhistory/contributor-dependency.js',
								],
						dest : '<%= options.dir.assets %>/js/form/commands_gen.js',
					},

					'form-oralhistory':{
					  src: [
									'src/js/conf/oralhistory/object-type-map.js',
					//				'src/js/conf/oralhistory/value-maps_en.js',
									'src/js/conf/oralhistory/value-maps_el.js',
									'src/js/conf/oralhistory/config_storage.js',
									'src/js/conf/oralhistory/key_labels_el.js',
					//				'src/js/conf/global/key_labels_en.js',
					//				'src/js/conf/global/messages_labels_en.js',
					//			'src/js/conf/global/key_labels_el.js',
					  			'src/js/conf/global/messages_labels_el.js',
									'src/js/form-setups/oralhistory/auth_digital_item.js',
									'src/js/form-setups/oralhistory/auth_physical_item.js',
									'src/js/form-setups/oralhistory/subject_chain.js',
									'src/js/form-setups/oralhistory/auth_person.js',
									'src/js/form-setups/oralhistory/auth_family.js',
									'src/js/form-setups/oralhistory/auth_organization.js',
									'src/js/form-setups/oralhistory/auth_place.js',
									'src/js/form-setups/oralhistory/auth_manifestation.js',
									'src/js/form-setups/oralhistory/auth_concept.js',
									'src/js/form-setups/oralhistory/auth_obj_collection.js',
									'src/js/form-setups/oralhistory/auth_event.js',
									'src/js/form-setups/oralhistory/auth_genre.js',
									'src/js/form-setups/oralhistory/auth_object.js',
									'src/js/form-setups/oralhistory/auth_general.js',
									'src/js/form-setups/oralhistory/auth_work.js',
									'src/js/form-setups/oralhistory/auth-work-man.js',
									'src/js/form-setups/oralhistory/auth_expression.js',
									'src/js/conf/oralhistory/form-setups.js',
					        ],
					  	dest : '<%= options.dir.assets %>/js/form/step1_conf_gen.js',
					},

					'config-storage-php-oralhistory': {
					  src: [
					        'src/js/conf/oralhistory/config_storage.js',
					        'src/js/conf/oralhistory/config_storage_relations.js',
					        'src/js/conf/global/help_fields.js',
								],
						dest : 'target/config_storage_php_gen.js',
					},

//MUSIC
'commands-music': {
  src: [
      'src/js/commands/meta_cmds.js',
			'src/js/commands/init.js',
			'src/js/commands/main.js',
			'src/js/commands/music/place-dependency.js',
			'src/js/commands/music/relation-fields.js',
			'src/js/commands/music/auth-person.js',
			'src/js/commands/music/auth-family.js',
			'src/js/commands/music/place.js',
			'src/js/commands/music/auth-organization.js',
			'src/js/commands/music/auth-place.js',
			'src/js/commands/music/auth-manifestation.js',
			'src/js/commands/music/auth-work.js',
			'src/js/commands/music/auth-work-expression.js',
			'src/js/commands/music/auth-obj_collection.js',
			'src/js/commands/music/auth-event.js',
			'src/js/commands/music/auth-concept.js',
			'src/js/commands/music/auth-genre.js',
			'src/js/commands/music/auth-object.js',
			'src/js/commands/music/auth-general.js',
			'src/js/commands/music/auth-expression.js',
			'src/js/commands/music/auth-person_work.js',
			'src/js/commands/music/auth-digital_item.js',
			'src/js/commands/music/auth-physical_item.js',
			'src/js/commands/music/control-fields.js',
			'src/js/commands/music/information-fields.js',
			'src/js/commands/music/link-fields.js',
			'src/js/commands/music/cataloging-fields.js',
			'src/js/commands/music/subject-fields-method1.js',
			'src/js/commands/music/subject-chain.js',
			'src/js/commands/music/work-dependency.js',
			'src/js/commands/music/contributor-dependency.js',
			],
	dest : '<%= options.dir.assets %>/js/form/commands_gen.js',
},

'form-music':{
  src: [
				'src/js/conf/music/object-type-map.js',
//				'src/js/conf/music/value-maps_en.js',
				'src/js/conf/music/value-maps_el.js',
				'src/js/conf/music/config_storage.js',
//				'src/js/conf/global/key_labels_en.js',
//				'src/js/conf/global/messages_labels_en.js',
				'src/js/conf/music/key_labels_el.js',
				'src/js/conf/global/messages_labels_el.js',
				'src/js/form-setups/music/auth_digital_item.js',
				'src/js/form-setups/music/auth_physical_item.js',
				'src/js/form-setups/music/subject_chain.js',
				'src/js/form-setups/music/auth_person.js',
				'src/js/form-setups/music/auth_family.js',
				'src/js/form-setups/music/auth_organization.js',
				'src/js/form-setups/music/auth_place.js',
				'src/js/form-setups/music/auth_manifestation.js',
				'src/js/form-setups/music/auth_concept.js',
				'src/js/form-setups/music/auth_obj_collection.js',
				'src/js/form-setups/music/auth_event.js',
				'src/js/form-setups/music/auth_genre.js',
				'src/js/form-setups/music/auth_object.js',
				'src/js/form-setups/music/auth_general.js',
				'src/js/form-setups/music/auth_work.js',
				'src/js/form-setups/music/auth-work-man.js',
				'src/js/form-setups/music/auth_expression.js',
				'src/js/conf/music/form-setups.js',
        ],
  	dest : '<%= options.dir.assets %>/js/form/step1_conf_gen.js',
},

'config-storage-php-music': {
  src: [
        'src/js/conf/music/config_storage.js',
        'src/js/conf/music/config_storage_relations.js',
        'src/js/conf/global/help_fields.js',
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
//									'src/js/conf/demo_en/value-maps_el.js',
									'src/js/conf/demo_en/config_storage_en.js',
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
			            'src/js/conf/demo_en/config_storage_relations.js',
			            'src/js/conf/global/help_fields.js',
								],
			    	dest : 'target/config_storage_php_gen.js',
			    },


//BIBFRAME
			    'commands-bibframe': {
			      src: [
			          'src/js/commands/meta_cmds.js',
								'src/js/commands/init.js',
								'src/js/commands/main.js',
								'src/js/commands/bibframe/contributor-dependency.js',
								'src/js/commands/bibframe/place-dependency.js',
								'src/js/commands/bibframe/relation-fields.js',
								'src/js/commands/bibframe/auth-person.js',
								'src/js/commands/bibframe/auth-family.js',
								'src/js/commands/bibframe/place.js',
								'src/js/commands/bibframe/auth-organization.js',
								'src/js/commands/bibframe/auth-place.js',
								'src/js/commands/bibframe/auth-manifestation.js',
								'src/js/commands/bibframe/auth-work.js',
								'src/js/commands/bibframe/auth-work-expression.js',
								'src/js/commands/bibframe/auth-event.js',
								'src/js/commands/bibframe/auth-concept.js',
								'src/js/commands/bibframe/auth-genre.js',
								'src/js/commands/bibframe/auth-object.js',
								'src/js/commands/bibframe/auth-general.js',
								'src/js/commands/bibframe/auth-expression.js',
								'src/js/commands/bibframe/auth-person_work.js',
								'src/js/commands/bibframe/auth-digital_item.js',
								'src/js/commands/bibframe/auth-physical_item.js',
								'src/js/commands/bibframe/control-fields.js',
								'src/js/commands/bibframe/information-fields.js',
								'src/js/commands/bibframe/link-fields.js',
								'src/js/commands/bibframe/cataloging-fields.js',
								'src/js/commands/bibframe/subject-fields-method1.js',
								'src/js/commands/bibframe/subject-chain.js',
								'src/js/commands/bibframe/work-dependency.js',
								],
			    	dest : '<%= options.dir.assets %>/js/form/commands_gen.js',
			    },

			    'form-bibframe':{
			      src: [
									'src/js/conf/bibframe/object-type-map.js',
									'src/js/conf/bibframe/value-maps_en.js',
									'src/js/conf/bibframe/config_storage_en.js',
									'src/js/conf/bibframe/key_labels.js',
//									'src/js/conf/global/key_labels_en.js',
									'src/js/conf/global/messages_labels_en.js',
									'src/js/form-setups/bibframe/auth_digital_item.js',
									'src/js/form-setups/bibframe/auth_physical_item.js',
									'src/js/form-setups/bibframe/subject_chain.js',
									'src/js/form-setups/bibframe/auth_person.js',
									'src/js/form-setups/bibframe/auth_family.js',
									'src/js/form-setups/bibframe/auth_organization.js',
									'src/js/form-setups/bibframe/auth_place.js',
									'src/js/form-setups/bibframe/auth_manifestation.js',
									'src/js/form-setups/bibframe/auth_concept.js',
									'src/js/form-setups/bibframe/auth_event.js',
									'src/js/form-setups/bibframe/auth_genre.js',
									'src/js/form-setups/bibframe/auth_object.js',
									'src/js/form-setups/bibframe/auth_general.js',
									'src/js/form-setups/bibframe/auth_work.js',
									'src/js/form-setups/bibframe/auth-work-man.js',
									'src/js/form-setups/bibframe/auth_expression.js',
									'src/js/form-setups/bibframe/collection.js',
									'src/js/conf/bibframe/form-setups.js',
				          ],
				    	dest : '<%= options.dir.assets %>/js/form/step1_conf_gen.js',
			    },

			    'config-storage-php-bibframe': {
			      src: [
			            'src/js/conf/bibframe/config_storage_en.js',
			            'src/js/conf/bibframe/config_storage_relations.js',
			            'src/js/conf/global/help_fields.js',
								],
			    	dest : 'target/config_storage_php_gen.js',
			    },



//AMELIB
			    'commands-amelib': {
			      src: [
			          'src/js/commands/meta_cmds.js',
								'src/js/commands/init.js',
								'src/js/commands/main.js',
//								'src/js/commands/amelib/work.js',
//								'src/js/commands/amelib/manuscript-work.js',
//								'src/js/commands/amelib/recipes.js',
								'src/js/commands/amelib/place-dependency.js',
								'src/js/commands/amelib/relation-fields.js',
								'src/js/commands/amelib/auth-person.js',
								'src/js/commands/amelib/auth-family.js',
								'src/js/commands/amelib/place.js',
								'src/js/commands/amelib/auth-organization.js',
								'src/js/commands/amelib/auth-place.js',
								'src/js/commands/amelib/auth-manifestation.js',
								'src/js/commands/amelib/auth-work.js',
								'src/js/commands/amelib/auth-work-expression.js',
								'src/js/commands/amelib/auth-obj_collection.js',
								'src/js/commands/amelib/auth-event.js',
								'src/js/commands/amelib/auth-concept.js',
								'src/js/commands/amelib/auth-genre.js',
								'src/js/commands/amelib/auth-object.js',
								'src/js/commands/amelib/auth-general.js',
								'src/js/commands/amelib/auth-expression.js',
								'src/js/commands/amelib/auth-person_work.js',
								'src/js/commands/amelib/auth-digital_item.js',
								'src/js/commands/amelib/auth-physical_item.js',
								'src/js/commands/amelib/control-fields.js',
								'src/js/commands/amelib/information-fields.js',
								'src/js/commands/amelib/link-fields.js',
								'src/js/commands/amelib/cataloging-fields.js',
								'src/js/commands/amelib/subject-fields-method1.js',
								'src/js/commands/amelib/subject-chain.js',
								'src/js/commands/amelib/work-dependency.js',
								'src/js/commands/amelib/contributor-dependency.js',
								],
			    	dest : '<%= options.dir.assets %>/js/form/commands_gen.js',
			    },

			    'form-amelib':{
			      src: [
									'src/js/conf/amelib/object-type-map.js',
//									'src/js/conf/amelib/value-maps_en.js',
									'src/js/conf/amelib/value-maps_el.js',
									'src/js/conf/amelib/config_storage.js',
//									'src/js/conf/global/key_labels_en.js',
//									'src/js/conf/global/messages_labels_en.js',
									'src/js/conf/global/key_labels_el.js',
									'src/js/conf/global/messages_labels_el.js',
//									'src/js/form-setups/1_page.js',
//									'src/js/form-setups/actor.js',
//									'src/js/form-setups/alchemy.js',
//									'src/js/form-setups/artifact0.js',
//									'src/js/form-setups/artifact1.js',
									'src/js/form-setups/amelib/auth_digital_item.js',
									'src/js/form-setups/amelib/auth_physical_item.js',
									'src/js/form-setups/amelib/subject_chain.js',
									'src/js/form-setups/amelib/auth_person.js',
									'src/js/form-setups/amelib/auth_family.js',
									'src/js/form-setups/amelib/auth_organization.js',
									'src/js/form-setups/amelib/auth_place.js',
									'src/js/form-setups/amelib/auth_manifestation.js',
									'src/js/form-setups/amelib/auth_concept.js',
									'src/js/form-setups/amelib/auth_obj_collection.js',
									'src/js/form-setups/amelib/auth_event.js',
									'src/js/form-setups/amelib/auth_genre.js',
									'src/js/form-setups/amelib/auth_object.js',
									'src/js/form-setups/amelib/auth_general.js',
									'src/js/form-setups/amelib/auth_work.js',
									'src/js/form-setups/amelib/auth-work-man.js',
									'src/js/form-setups/amelib/auth_expression.js',
//									'src/js/form-setups/bitstream.js',
//									'src/js/form-setups/book1.js',
//									'src/js/form-setups/book2.js',
									'src/js/form-setups/amelib/collection.js',
//									'src/js/form-setups/manuscript.js',
//									'src/js/form-setups/manuscript_work.js',
//									'src/js/form-setups/periodicals.js',
//									'src/js/form-setups/place.js',
//									'src/js/form-setups/recipe.js',
//									'src/js/form-setups/symbol.js',
//									'src/js/form-setups/web_site.js',
//									'src/js/form-setups/work.js',
									'src/js/conf/amelib/form-setups.js',
				          ],
				    	dest : '<%= options.dir.assets %>/js/form/step1_conf_gen.js',
			    },

			    'config-storage-php-amelib': {
			      src: [
			            'src/js/conf/amelib/config_storage.js',
			            'src/js/conf/amelib/config_storage_relations.js',
			            'src/js/conf/global/help_fields.js',
								],
			    	dest : 'target/config_storage_php_gen.js',
			    },


//SCORP
			    'commands-scorp': {
			      src: [
			          'src/js/commands/meta_cmds.js',
								'src/js/commands/init.js',
								'src/js/commands/main.js',
								'src/js/commands/scorp/place-dependency.js',
								'src/js/commands/scorp/relation-fields.js',
								'src/js/commands/scorp/auth-person.js',
								'src/js/commands/scorp/auth-family.js',
								'src/js/commands/scorp/place.js',
								'src/js/commands/scorp/auth-organization.js',
								'src/js/commands/scorp/auth-place.js',
								'src/js/commands/scorp/auth-manifestation.js',
								'src/js/commands/scorp/auth-work.js',
								'src/js/commands/scorp/auth-work-expression.js',
								'src/js/commands/scorp/auth-obj_collection.js',
								'src/js/commands/scorp/auth-event.js',
								'src/js/commands/scorp/auth-concept.js',
								'src/js/commands/scorp/auth-genre.js',
								'src/js/commands/scorp/auth-object.js',
								'src/js/commands/scorp/auth-general.js',
								'src/js/commands/scorp/auth-expression.js',
								'src/js/commands/scorp/auth-person_work.js',
								'src/js/commands/scorp/auth-digital_item.js',
								'src/js/commands/scorp/auth-physical_item.js',
								'src/js/commands/scorp/control-fields.js',
								'src/js/commands/scorp/information-fields.js',
								'src/js/commands/scorp/link-fields.js',
								'src/js/commands/scorp/cataloging-fields.js',
								'src/js/commands/scorp/subject-fields-method1.js',
								'src/js/commands/scorp/subject-chain.js',
								'src/js/commands/scorp/work-dependency.js',
								'src/js/commands/scorp/contributor-dependency.js',
								'src/js/commands/scorp/lemma.js',
								'src/js/commands/scorp/lemma-category.js',
								'src/js/commands/scorp/web-site-instance.js',
								'src/js/commands/scorp/periodic-publication.js',
								'src/js/commands/scorp/media.js',
								],
			    	dest : '<%= options.dir.assets %>/js/form/commands_gen.js',
			    },

			    'form-scorp':{
			      src: [
									'src/js/conf/scorp/object-type-map.js',
//									'src/js/conf/scorp/value-maps_el.js',
									'src/js/conf/scorp/value-maps_en.js',
									'src/js/conf/scorp/config_storage_en.js',
//									'src/js/conf/scorp/config_storage.js',
//									'src/js/conf/global/key_labels_el.js',
//									'src/js/conf/global/messages_labels_el.js',
									'src/js/conf/global/key_labels_en.js',
									'src/js/conf/global/messages_labels_en.js',
									'src/js/form-setups/scorp/auth_digital_item.js',
									'src/js/form-setups/scorp/auth_physical_item.js',
									'src/js/form-setups/scorp/subject_chain.js',
									'src/js/form-setups/scorp/auth_person.js',
									'src/js/form-setups/scorp/auth_family.js',
									'src/js/form-setups/scorp/auth_organization.js',
									'src/js/form-setups/scorp/auth_place.js',
									'src/js/form-setups/scorp/auth_manifestation.js',
									'src/js/form-setups/scorp/auth_concept.js',
									'src/js/form-setups/scorp/auth_obj_collection.js',
									'src/js/form-setups/scorp/auth_event.js',
									'src/js/form-setups/scorp/auth_genre.js',
									'src/js/form-setups/scorp/auth_object.js',
									'src/js/form-setups/scorp/auth_general.js',
									'src/js/form-setups/scorp/auth_work.js',
									'src/js/form-setups/scorp/auth-work-man.js',
									'src/js/form-setups/scorp/auth_expression.js',
									'src/js/form-setups/scorp/collection.js',
									'src/js/form-setups/scorp/lemma.js',
									'src/js/form-setups/scorp/lemma_category.js',
									'src/js/form-setups/scorp/web_site_instance.js',
									'src/js/form-setups/scorp/periodic_publication.js',
									'src/js/form-setups/scorp/media.js',
									'src/js/conf/scorp/form-setups.js',
				          ],
				    	dest : '<%= options.dir.assets %>/js/form/step1_conf_gen.js',
			    },

			    'config-storage-php-scorp': {
			      src: [
//			            'src/js/conf/scorp/config_storage.js',
									'src/js/conf/scorp/config_storage_en.js',
			            'src/js/conf/scorp/config_storage_relations.js',
			            'src/js/conf/global/help_fields.js',
								],
			    	dest : 'target/config_storage_php_gen.js',
			    },


//DRYLLERAKIS
'commands-dryl': {
  src: [
      'src/js/commands/meta_cmds.js',
			'src/js/commands/init.js',
			'src/js/commands/main.js',
			'src/js/commands/dryl/place-dependency.js',
			'src/js/commands/dryl/contributor-dependency.js',
			'src/js/commands/dryl/relation-fields.js',
			'src/js/commands/dryl/auth-person.js',
			'src/js/commands/dryl/auth-family.js',
			'src/js/commands/dryl/place.js',
			'src/js/commands/dryl/auth-organization.js',
			'src/js/commands/dryl/auth-place.js',
			'src/js/commands/dryl/auth-manifestation.js',
			'src/js/commands/dryl/auth-work.js',
			'src/js/commands/dryl/auth-work-expression.js',
			'src/js/commands/dryl/auth-obj_collection.js',
			'src/js/commands/dryl/auth-event.js',
			'src/js/commands/dryl/auth-concept.js',
			'src/js/commands/dryl/auth-genre.js',
			'src/js/commands/dryl/auth-object.js',
			'src/js/commands/dryl/auth-general.js',
			'src/js/commands/dryl/auth-expression.js',
			'src/js/commands/dryl/auth-person_work.js',
			'src/js/commands/dryl/auth-digital_item.js',
			'src/js/commands/dryl/auth-physical_item.js',
			'src/js/commands/dryl/control-fields.js',
			'src/js/commands/dryl/information-fields.js',
			'src/js/commands/dryl/link-fields.js',
			'src/js/commands/dryl/cataloging-fields.js',
			'src/js/commands/dryl/subject-fields-method1.js',
			'src/js/commands/dryl/subject-chain.js',
			'src/js/commands/dryl/work-dependency.js',
			'src/js/commands/dryl/periodic.js',
			],
	dest : '<%= options.dir.assets %>/js/form/commands_gen.js',
},

'form-dryl':{
  src: [
				'src/js/conf/dryl/object-type-map.js',
				'src/js/conf/dryl/value-maps_el.js',
				'src/js/conf/dryl/config_storage.js',
				'src/js/conf/dryl/key_labels.js',
//			'src/js/conf/global/key_labels_el.js',
				'src/js/conf/global/messages_labels_el.js',
				'src/js/form-setups/dryl/auth_digital_item.js',
				'src/js/form-setups/dryl/auth_physical_item.js',
				'src/js/form-setups/dryl/subject_chain.js',
				'src/js/form-setups/dryl/auth_person.js',
				'src/js/form-setups/dryl/auth_family.js',
				'src/js/form-setups/dryl/auth_organization.js',
				'src/js/form-setups/dryl/auth_place.js',
				'src/js/form-setups/dryl/auth_manifestation.js',
				'src/js/form-setups/dryl/auth_concept.js',
				'src/js/form-setups/dryl/auth_obj_collection.js',
				'src/js/form-setups/dryl/auth_event.js',
				'src/js/form-setups/dryl/auth_genre.js',
				'src/js/form-setups/dryl/auth_object.js',
				'src/js/form-setups/dryl/auth_general.js',
				'src/js/form-setups/dryl/auth_work.js',
				'src/js/form-setups/dryl/auth-work-man.js',
				'src/js/form-setups/dryl/auth_expression.js',
				'src/js/form-setups/dryl/collection.js',
				'src/js/form-setups/dryl/periodic.js',
				'src/js/conf/dryl/form-setups.js',
        ],
  	dest : '<%= options.dir.assets %>/js/form/step1_conf_gen.js',
},

'config-storage-php-dryl': {
  src: [
        'src/js/conf/dryl/config_storage.js',
        'src/js/conf/dryl/config_storage_relations.js',
        'src/js/conf/global/help_fields.js',
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
//	grunt.registerTask('commands', [ 'concat:commands-amelib', 'concat:form-amelib' ]);
//	grunt.registerTask('commands', ['make_commands']);
	grunt.registerTask('theme', [ 'less:theme' ]); //'sync:theme1', 'sync:theme2'
	grunt.registerTask('css', [ 'copy:css','less:archive' ]);
	grunt.registerTask('step1_form', [ 'copy:step1_form' ]);
	grunt.registerTask('workers-js', [ 'copy:workers-js' ]);
	grunt.registerTask('jquery-blockUI', [ 'copy:jquery-blockUI' ]);
	grunt.registerTask('bootstrap', [ 'less:bootstrap' ]);
	grunt.registerTask("clear", [ "clean", "mkdir:target" ]);

	grunt.registerTask('generate-storage-settings', ['_generate-storage-settings','make_commands' ]);
	grunt.registerTask('make', [ 'css','form-controller','theme','make_commands','step1_form','workers-js','jquery-blockUI' ]);//sync:old_js
	grunt.registerTask('devel', [ 'generate-storage-settings','sync', 'make','watch' ]);
	//tasks : [ 'concat:commands-amelib','concat:form-amelib', 'concat:form-controller','copy:step1_form','copy:workers-js','timestamp']



	grunt.registerTask('timestamp', function() {
		grunt.log.subhead(Date());
		//grunt.log.subhead('MAIN_DIR2: ' + grunt.config.get('options.MAIN_DIR'));
	});














};
