var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'main.js');



cmdCreate('hidden_status_finish',
{
  "action": "setupField",
  "opts": {
    "type": "hidden",
    "key": "ea:status:",
    "value": "finish"
  }
});



cmdCreate('obj_type', {
			action : 'setupField',
			opts : {
				key : 'ea:obj-type:',
				label : 'type',
				type : 'select',
				setupOptions: function(options){
					//console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
					//console.log('obj_type params:');
					//console.log('1:',window.form_object_types);
					//console.log('2:',window.form_new_record_flag);
					//console.log('3:',window.form_object_type_default);
					//console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
					options.default_selection = window.form_object_type_default,
					options.select_values = window.form_object_types;
//					options.read_only = (! form_new_record_flag);
					return options;
				},
				on_select:changeFormat,
				show_help : false,
				width:'257px',
				'float':'left',
			}
});


cmdCreate('text_format', {
		action : 'setupField',
		opts : {
			key : 'ea:text-format:',
			label : 'format',
			type : 'select',
			select_values:
			 {
				text:'text',
				html:'html',
			 },
			read_only: false,
			show_help: false,
			width:'120px',
		}
});

cmdCreate('status',{
			action : 'setupField',
			opts : {
				key : 'ea:status:',
				label : key_labels['status_field'],
				type : 'select',
				setupOptions: function(options){
					options.select_values = avail_statuses;
					return options;
				},
				//select_values:avail_statuses,
				// {
					// pending:'pending',
					// incomplete:'incomplete',
					// error:'error',
					// //internal:'internal',
					// private:'private',
					// hidden:'hidden',
					// finish:'finish'
				// },
				read_only:false,
				show_help : false,
				width:'120px',
			}
});

cmdCreate('status_hidden', {
			action : 'setupField',
			opts : {
				key : 'ea:status:',
				label : 'status',
				type : 'select',
				select_values:{
					'hidden':'hidden',
					'pending':'pending',
					'incomplete':'incomplete',
					error:'error',
					'private':'private',
					finish:'finish'
				},
				read_only:false,
				show_help : false,
				width:'120px',
			}
		});

cmdCreate('status_finish', {
			action : 'setupField',
			opts : {
				key : 'ea:status:',
				label : key_labels['status'],
				type : 'select',
				default_selection: 'finish',
				select_values:{
					'finish':'finish',
					'hidden':'hidden',
					'pending':'pending',
					'incomplete':'incomplete',
					'error':'error',
					'private':'private',
				},
				read_only:false,
				show_help : true,
				width:'120px',
			}
		});


  // var languages_avail = {
					// '':'N/A',
					// el:'Ελληνικά',
					// it:'Italian',
					// en:'English',
					// sp:'Spanish',
					// fr:'French',
					// de:'German',
					// sq:'Albanian',
					// bul:'Bulgarian',
					// tur:'Turkish',
					// sr:'Serbian',
			// //		rup:'Aromanian',
					// other:'(Other)'
  // });
//
  // var language_default= 'el';


	cmdCreate('country_code',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'dc:country:iso',
			'label' : 'country code',
			width:'40px',
			'float':'left',
			'clear':'right',
		})
	}),

	cmdCreate('country_code_so',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'dc:country:iso',
			'label' : 'country code',
			width:'40px',
		})
	}),

	cmdCreate('lang',{
			action : 'setupField',
			opts : {
				type:'select',
				show_help : true,
				add_button : true,
				add_button_first :false,
				add_button_br : false,
				add_button_label : 'add',
				one_label : true,
				//br_each : true,
				//br_first : false,
				width : '100px',
				key : 'dc:language:iso',
				label : key_labels['language'],
				setupOptions: function(options){
					options.select_values = languages_avail;
					options.default_selection = language_default;
					return options;
				},
				//select_values: languages_avail,
				//default_selection: language_default,
				default_selection_add_button:null,
				width:'100px',
			  'float':'left',
			  //'clear':'right',
			  //'label-width':190,
			}
		});

cmdCreate('lang1',{
			action : 'setupField',
			opts : {
				type:'select',
				show_help : true,
				add_button : true,
				add_button_first :false,
				add_button_br : false,
				add_button_label : 'add',
				one_label : true,
				//br_each : true,
				//br_first : false,
				width : '100px',
				key : 'dc:language:iso',
				label : 'Language',
				setupOptions: function(options){
					options.select_values = languages_avail;
					options.default_selection = language_default;
					return options;
				},
				//select_values: languages_avail,
				//default_selection: language_default,
				default_selection_add_button:null,
				width:'100px',
			  // 'float':'left',
			  // 'clear':'right',
			  //'label-width':190,
			}
		});

var toggle_status_open = true;
cmdCreate('header_type',{
  		action:'addSection',
  		opts:{
  			skey:'type',
  			label:'TYPE',
  			level:1,
  			add_button:true,
				add_button_label:'toggle',
				'click_handler': function(e){
					e.preventDefault();
					e.stopImmediatePropagation();
					if (toggle_status_open){
							jQuery('h2.hsection').each(function(){ jQuery(this).data('arc_section').hide(); });
							jQuery('h3.hsection').each(function(){ jQuery(this).data('arc_section').hide(); });
							jQuery('h4.hsection').each(function(){ jQuery(this).data('arc_section').hide(); });
							jQuery('#sect_status').each(function(){ jQuery(this).data('arc_section').show(); });
						//jQuery('h4.hsection').each(function(){ jQuery(this).data('arc_section').hide(); });
						//jQuery('#sect_p_collection').each(function(){ jQuery(this).data('arc_section').hide(); });
						//jQuery('#sect_p_info').each(function(){ jQuery(this).data('arc_section').hide(); });
						//jQuery('#sect_info').each(function(){ jQuery(this).data('arc_section').hide(); });
						toggle_status_open = false;
					} else {
							jQuery('h2.hsection').each(function(){ jQuery(this).data('arc_section').show(); });
							jQuery('h3.hsection').each(function(){ jQuery(this).data('arc_section').show(); });
							jQuery('h4.hsection').each(function(){ jQuery(this).data('arc_section').show(); });
							jQuery('#sect_status').each(function(){ jQuery(this).data('arc_section').show(); });
						//jQuery('h4.hsection').each(function(){ jQuery(this).data('arc_section').show(); });
						//jQuery('#sect_p_collection').each(function(){ jQuery(this).data('arc_section').show();  });
						//jQuery('#sect_p_info').each(function(){ jQuery(this).data('arc_section').show();  });
						//jQuery('#sect_info').each(function(){ jQuery(this).data('arc_section').hide();   });
						toggle_status_open = true;
					}
			},
  		}
	});


var specialized_fields_closed = true;
cmdCreate('header_type_2',{
  		action:'addSection',
  		opts:{
  			skey:'type',
  			label:'TYPE',
  			level:1,
  			id:'top_sect',
  			add_button:true,
				add_button_label:key_labels['specialized fields'],
				'click_handler': function(e){
					e.preventDefault();
					e.stopImmediatePropagation();
					if (specialized_fields_closed){
						jQuery('.specialized_sect').show();
						var button_label = jQuery('#top_sect button').text().replace('+', '-');
						jQuery('#top_sect button').text(button_label)
						specialized_fields_closed = false;
					} else {
						jQuery('.specialized_sect').hide();
						var button_label = jQuery('#top_sect button').text().replace('-', '+');
						jQuery('#top_sect button').text(button_label)
						specialized_fields_closed = true;
					}
				},
  		}
	});


cmdCreate('header_collection',{
  		action:'addSection',
  		opts:{
  			id:'sect_p_collection',
  			skey:'collection',
  			label:'Collection',
  			level:2,
  		}
	});


cmdCreate('header_wsite',{
  		action:'addSection',
  		opts:{
  			id:'sect_p_wsite',
  			skey:'wsote',
  			label:'Web Site',
  			level:2,
  		}
	});


cmdCreate('header_serial',{
  		action:'addSection',
  		opts:{
  			id:'sect_p_serial',
  			skey:'serial',
  			label:'Serial',
  			level:2,
  		}
	});




cmdCreate('header_status',{
  		action:'addSection',
  		opts:{
  			id:'sect_status',
  			skey:'status',
  			label:key_labels['status'],
  			level:1,
  			status:'closed',
  		}
	});


cmdCreate('header_public',{
  		action:'addSection',
  		opts:{
  			skey:'public',
  			label:key_labels['public'],
  			level:1,
  		}
	});

	cmdCreate('header_private',{
  		action:'addSection',
  		opts:{
  			skey:'private',
  			label:'PRIVATE',
  			level:1,
  		}
	});

	cmdCreate('header_manifestation',{
  		action:'addSection',
  		opts:{
  			skey:'manifestation',
  			label:'Manifestation',
  			level:2,
  		}
	});

	cmdCreate('header_actor',{
  		action:'addSection',
  		opts:{
  			skey:'manifestation',
  			label:'actor',
  			level:2,
  		}
	});

	cmdCreate('header_actor_c',{
  		action:'addSection',
  		opts:{
  			skey:'actor',
  			label:'actor',
  			level:1,
  		}
	});
 cmdCreate('header_controls_c',{
  		action:'addSection',
  		opts:{
  			skey:'contols',
  			label:'controls',
  			level:1,
  		}
	});
cmdCreate('header_sect_title',{
  		action:'addSection',
  		opts:{
  			skey:'title',
  			label:'Titles & Authors',
  			level:3,
  		}
	});

cmdCreate('header_sect_name',{
  		action:'addSection',
  		opts:{
  			skey:'title',
  			label:'Name & Years',
  			level:3,
  		}
	});


cmdCreate('header_sect_imprint',{
  		action:'addSection',
  		opts:{
  			skey:'imprint',
  			label:'Imprint',
  			level:3,
  		}
	});



//////////////////////////////////////////
cmdCreate('header_sect_edition',{
  		action:'addSection',
  		opts:{
  			skey:'edition_sect',
  			label:'Edition',
  			level:3,
  		}
	});



cmdCreate('header_sect_edition_with_add',{
  		action:'addSection',
  		opts:{
  			skey:'edition_sect_add',
  			label:'Imprint',
  			level:3,
  			set_container: true,
  			//KOUMPI ADD
			  add_button:true,
			  status:'open',
				'click_handler': function(e){
					e.preventDefault();
					e.stopImmediatePropagation();
					var h = jQuery(this).closest('.hsection').data('arc_section').show();
					fc.createFieldModel('ea:publication:statement',null,null);
					fc._renderForm();
			   },
  		}
	});

	cmdCreate('edition_buttons',{
		 action: 'cmdGroup',
		 opts:{
		 	new_container:true,
			commands:['edition_delete_button','clearR'],
		 }
	});



	cmdCreate('edition_delete_button',{
		action:'addButton',
		opts:{
			label:'remove',
			align:'right',
			type:'remove',
			remove_keys:['ea:publication:statement'],
			remove_msg:'do you want to remove edition',
		}
	});



	cmdCreate('header_sect_edition_single',{
	  		action:'addSectionExt',
	  		opts:{
	  			skey: 'edition_sect_single',
	  			add_empty:true,
				skip_on_empty:false,
	  			key: 'ea:publication:statement',
	  			set_container: false,
		  		command:'publication_statement_extend_web',
	  			label:'publication',
	  			level:3,
					//add_button_expand:true,
	  		}
		});



//	cmdCreate('header_edition_manuscript',{
//	  		action:'addSectionExt',
//	  		opts:{
//	  			skey: 'edition_header',
//	  			add_empty:true,
//				skip_on_empty:false,
//	  			key: 'ea:publication:statement',
//	  			set_container: false,
//		  		command:'publication_statement_extend',
//	  			label:'publication',
//	  			level:3,
//					//add_button_expand:true,
//	  		}
//		});



	cmdCreate('header_edition',{
  		action:'addSectionExt',
  		opts:{
  			skey: 'edition_header',
  			add_empty:true,
			skip_on_empty:false,
  			key: 'ea:publication:statement',
  			set_container: false,
	  		command:'publication_statement_extend',
  			label:'publication',
  			level:4,
				//add_button_expand:true,
  		}
	});


		//ea:publication:statement
	cmdCreate('publication_statement', {
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:publication:statement',
			'label' : 'Publication',
			//'default_value_uuid':true,
			'hidden_input':true,
		})
});

//
	cmdCreate('publication_other_info', {
			action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:publication:other-info',
			'label' : key_labels['other-info'],
		})
});

cmdCreate('publication_statement_extend',{
		action: 'extend',
		opts:{
		  label:'Publication',
			primary:'publication_statement',
			commands_primary_is_ref:['publication_statement'],
			commands:[
			'publication_statement',
			'publication_place',
			'publishers_all',
			'date_orgissued',
			'printers_all',
			'printing_place',
			'publication_other_info',
			'edition_buttons'
			],
		}
});

cmdCreate('publication_statement_extend_web',{
		action: 'extend',
		opts:{
		  label:'Publication',
			primary:'publication_statement',
			commands_primary_is_ref:['publication_statement'],
			commands:[
			'publication_statement',
			'publication_place',
			'publishers_all',
			'date_orgissued',
			'publication_other_info',
			'web_site_captured',
			],
		}
});


////////////////////////////////////////////////////////////


cmdCreate('header_sect_subjects_urls',{
  		action:'addSection',
  		opts:{
  			skey:'subjects_urls',
  			label:'Subjects & Urls',
  			level:3,
  		}
	});



cmdCreate('header_sect_info',{
  		action:'addSection',
  		opts:{
  			id: 'sect_info',
  			skey:'info',
  			label:'Info',
  			level:3,
  			status:'open',
  		}
	});



cmdCreate('header_sect_priv_info',{
  		action:'addSection',
  		opts:{
  			id: 'sect_p_info',
  			skey:'priv_info',
  			label:'Info',
  			level:2,
  			status:'open',
  		}
	});


	cmdCreate('header_h3',{
  		action:'addSection',
  		opts:{
  			skey:'h3',
  			label:'h3',
  			level:3,
  		}
	});


// cmdCreate('header_dimensions',{
  		// action:'addSection',
  		// opts:{
  			// skey:'dimensions',
  			// label:'Dimensions',
  			// level:3,
  		// }
	// });



	cmdCreate('origin_comment',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:origin:comment',
			'label' : 'Origin',
			extend:true,
			extend_command: 'comment_simple_extend',
		})
	});

	cmdCreate('status_comment',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:status:comment',
			'label' : 'status',
			extend:true,
			extend_command: 'comment_simple_extend',
		})
	});


	cmdCreate('description_abstract',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'dc:description:abstract',
			'label' : 'abstract',
			extend:true,
//			extend_position:{ my: "center top", at: "center top" },
			extend_command: 'description_extend',
		})
	});



cmdCreate('isis_record_extend',{
		action: 'extend',
		opts:{
		  label:'isis record',
			primary:'isis_record_ta',
			commands:['isis_record_ta'],
		}
	});

cmdCreate('isis_record_ta',{
			action : 'setupField',
			opts : jQuery.extend({},opts_textarea,{
				'key' : 'isis:book:record',
				'label' : 'isis record',
			})
});

cmdCreate('isis_record',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'isis:book:record',
			'label' : 'isis record',
			extend:true,
			extend_command: 'isis_record_extend',
		})
});
















cmdCreate('manuscript_search_dialog',{
		action: 'extend',
		opts:{
			label:null,
			primary:'manuscript_search',
			commands:['manuscript_search',
			],
		}
	});

	cmdCreate('manuscript_search',{
		action : 'setupField',
		opts : {
			'key' : 'tmp:manuscript:search',
			'label' : null,
			'type' : 'manuscript_search',//place_search
			'show_help' : true,
			'ok_button':'#b_w1',
			'new_button':'#b_w2',
			'cancel_button':'#b_w3',
			'remove_button':'#b_w4',
			'close_button':'#b_w5',
			'select_command': 'manuscript_extend',
			'display_handler':createDisplayItem('title:'),
		}
	});

	cmdCreate('manuscript_simple',{
		action : 'setupField',
		opts : {
			'key' : 'tmp:manuscript:search',
			'label' : null,
			'type' : 'text',
			'show_help' : true,
			background_color:'pink',
			//autocomplete_url : '/ws/archive/search-author',
		}
	});

	cmdCreate('manuscript_extend',{
		action: 'extend',
		opts:{
		  label:'χειρόγραφο',
			primary:'manuscript_simple',
			//commands_primary_is_ref:['place_simple'],
			commands:['manuscript_simple','title_uniform','subject','status_hidden'],
		}
	});



cmdCreate('manuscript',{
		action : 'setupField',
		opts : {
			type : 'text',
			key:'ea:manuscript:source',
			//select_key_map:place_type_map,
			//select_key_width:'160px',
			show_help : true,
			autocomplete_url : '/archive/search-manuscript',
			add_button : true,
			add_button_first : false,
			add_button_br : true,
			add_button_label : 'add',
			br_each : true,
			br_first : false,
			one_label: true,
			skip_on_empty:false,
			//width:"517px",
			no_label:false,
			extend:true,
			has_ref_disable:true,
			read_only:true,
			extend_buttons:[
				{ text:'ok',     id:'b_w1',},
				//{ text:'new',    id:'b_w2',},
				{ text:'cancel', id:'b_w3',},
				{ text:'remove', id:'b_w4',},
				{ text:'close',  id:'b_w5',},
			],
			//extend_buttons_cardinality:3,
			extend_position:{ my: "center top", at: "center top" },
			//key : [
			//'ea:manuscript:source',
			//],
			label:key_labels['ea:manuscript:source'],
			extend_command:'manuscript_search_dialog',
			prescribed_select:true,
			}
	});

cmdCreate('content_extend',{
		action: 'extend',
		opts:{
		  label:'content',
			primary:'content_transcription_ta',
			commands:['content_transcription_ta','text_format'],
		}
	});


cmdCreate('content_transcription_ta',{
		action : 'setupField',
		opts : jQuery.extend({},opts_textarea,{
			'key' : 'ea:content:original',
			'label' : key_labels['ea:content:transcription'],
		})
	});

cmdCreate('content_original',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:content:original',
			'label' : key_labels['ea:content:transcription'],
			extend:true,
//			extend_position:{ my: "center top", at: "center top" },
			extend_command: 'content_extend',
		})
	});


 cmdCreate('note_generic',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:note:generic',
			'label' : 'note',
			extend:true,
//			extend_position:{ my: "center top", at: "center top" },
			extend_command: 'note_extend',
		})
	});

 cmdCreate('note_generic_m',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:note:generic',
			'label' : 'note',
			extend:true,
			extend_command: 'note_extend',
			add_button : true,
			add_button_first : false,
			add_button_br : true,
			add_button_label : 'add',
			br_each : true,
			br_first : false,
			one_label: true,
			skip_on_empty:false,
			float:'left',
		})
	});




	cmdCreate('description',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'dc:description:',
			'label' : 'description',
			extend:true,
//			extend_position:{ my: "center top", at: "center top" },
			extend_command: 'description_extend',
		})
	});







	cmdCreate('isbd_series_title_parallel',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'isbd:series:title-parallel',
			'label' : 'paralllel title',
			check_value_exists:true,
		})
	});

	cmdCreate('isbd_series_responsibility_statement',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'isbd:series:responsibility-statement',
			'label' : 'responsibility',
			check_value_exists:true,
		})
	});

	cmdCreate('isbd_series_numbering',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'isbd:series:numbering',
			'label' : 'numbering',
		})
	});
	cmdCreate('isbd_series_other_info',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'isbd:series:other-info',
			'label' : 'other-info',
		})
	});


	cmdCreate('isbd_series_title_proper',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'isbd:series:title-proper',
			'label' : 'series title',
				add_button : true,
				add_button_first : false,
				add_button_br : true,
				add_button_label : 'add',
				br_each : true,
				br_first : false,
				one_label: true,
				skip_on_empty:false,
			check_value_exists:true,
			extend:true,
			extend_command: 'isbd_series_title_proper_extend',
		})
	});

	cmdCreate('isbd_series_title_proper_ta',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'isbd:series:title-proper',
			'label' : 'series title',
			check_value_exists:true,
		})
	});

cmdCreate('isbd_series_title_proper_extend',{
		action: 'extend',
		opts:{
		  label:'series title',
			primary:'isbd_series_title_proper_ta',
			commands:['isbd_series_title_proper_ta',
				'isbd_series_title_parallel','isbd_series_responsibility_statement',
				'isbd_series_numbering','isbd_series_other_info'
			],
		}
	});




	cmdCreate('collection_name',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:collection:name',
			'label' : 'collection name',
			 check_value_exists:true,
		})
	});

	cmdCreate('collection_place',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:collection:place',
			'label' : 'collection place',
			check_value_exists:true,
		})
	});

///////////////////////////////////////////////
		// 'marc:edition:statement'
		// ('marc:edition:remainder'
	cmdCreate('marc_edition_remainder',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'marc:edition:remainder',
			'label' : 'remainder',
		})
	});
	cmdCreate('marc_edition_statement_simple',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'marc:edition:statement',
			'label' : 'edition',
		})
	});

	cmdCreate('marc_edition_statement',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'marc:edition:statement',
			'label' : 'edition',
			extend:true,
			extend_command: 'marc_edition_statement_extend',
		})
	});
	cmdCreate('marc_edition_statement_extend',{
		action: 'extend',
		opts:{
		  label:'edition',
			primary:'marc_edition_statement_simple',
			commands:['marc_edition_statement_simple','marc_edition_remainder'],
		}
	});
///////////////////////////////////////////////




					// var title_keys = [
							// "marc:title-statement:title",
							// "marc:title-statement:remainder",
							// "marc:title-statement:medium",
							// "marc:title-statement:work-section-number",
							// "marc:title-statement:work-section-name",
							// "marc:title-statement:form",
							// "marc:title-statement:inclusive-dates",
							// "marc:title-statement:bulk-dates",
							// "marc:title-statement:version",
							// "marc:title-statement:responsibility",
							// ];//"isbd:title:other-info"
				var title_marc_keys = {
							"marc:title-statement:title":'${a',
							"marc:title-statement:remainder":'${b',
							"marc:title-statement:medium":'${h',
							"marc:title-statement:work-section-name":'${p',
							"marc:title-statement:work-section-number":'${n',
							"marc:title-statement:form":'${k',
							"marc:title-statement:inclusive-dates":'${f',
							"marc:title-statement:bulk-dates":'${g',
							"marc:title-statement:version":'${s',
							"marc:title-statement:responsibility":'${c',
							'ea:issue:no':'${xin',
							'ea:issue:label':'${xil',
				};//"isbd:title:other-info"
				var title_keys = Object.keys(title_marc_keys);
							// "marc:title-statement:title",
							// "marc:title-statement:remainder",
							// "marc:title-statement:medium",
							// "marc:title-statement:work-section-name",
							// "marc:title-statement:work-section-number",
							// "marc:title-statement:form",
							// "marc:title-statement:inclusive-dates",
							// "marc:title-statement:bulk-dates",
							// "marc:title-statement:version",
							// "marc:title-statement:responsibility",
// $a - Title (NR)
// $b - Remainder of title (NR)
// $h - Medium (NR)
// $n - Number of part/section of a work (R)
// $p - Name of part/section of a work (R)
// $k - Form (R)
// $f - Inclusive dates (NR)
// $g - Bulk dates (NR)
// $s - Version (NR)
// $c - Statement of responsibility, etc. (NR)
// $a : $b ; [$h] ; $n ; $p ; $k ; $f ; $g /C

/**
* @param {FormControler} fc form-controler
 */
var fn_generate_title = function(fc){
	//console.log("GENERATE TITLE");


	var title_m = fc.getFirstFieldModel('marc:title-statement:title');
	if (title_m == null){
		//alert("error: missing title model");
		return;
	}
	//console.log('#issue_id',issue_id);
	var obj_type = fc.getFirstFieldModel('ea:obj-type:').value();
	var value_map = {};

	var flag_book = false;
	if (obj_type == 'book2' || obj_type == 'book' || obj_type == 'mprosoura'){
		flag_book = true;
	}


	var title_id = title_m.id();
	var title_v = title_m.value();
	var issue_m = fc.getFirstFieldModel('ea:issue:',title_id);
	var issue_id = issue_m == null ? null : issue_m.id();

	var format_m = fc.getFieldModelOrCreate('marc:title-statement:format-formula',title_id);
	var format = format_m.value();
	//console.log("FORMAT-INIR",format);

	var format_empty =false;
	if (format == null){
		//console.log("EMPTY FORMAT");
		format_empty = true;
	}

	var value_map = {'${a':[title_v]};
	var format_map = {};
	for (i in title_keys){
			var k = title_keys[i];
			//console.log('#0#',k);
			var fms = fc.getFieldModels(k,title_id);
			if (issue_id != null){
				fms = fms.concat(fc.getFieldModels(k,issue_id));
			}
			for (j in fms){
				var m = fms[j];
				var k = m.key();
				var v = m.value();
				if ( pl.trim(v) != null){
					var mykey = title_marc_keys[k];
					//console.log("@@@",k,mykey);
					if (value_map[mykey] === undefined){
						value_map[mykey]=[];
					}
					value_map[mykey].push(v);
					if (format_empty){
						if (format_map[mykey] === undefined){
							format_map[mykey] = 1;
						} else {
							format_map[mykey] += 1;
						}
					}
				}
			}
	}

	//console.log("value_map",value_map);

	if (format_empty){
		format = '${a}';
		if (format_map['${b'] !== undefined){
			format += ': ${b}';
		};
		if (format_map['${h'] !== undefined){
			format += ' [${h}]';
		};
		if (format_map['${n'] !== undefined){
			var n = format_map['${n'];
			for (i=0;i<n;i++){
				i = i ==0 ? '' : i+1;
				format += ' .${n' + i+'}';
			}
		};
		if (format_map['${p'] !== undefined){
			var n = format_map['${p'];
			for (i=0;i<n;i++){
				var j = i ==0 ? '' : i+1;
				format += ' ${p' + j+'}';
			}
		};
		if (format_map['${k'] !== undefined){
			var n = format_map['${k'];
			for (i=0;i<n;i++){
				i = i ==0 ? '' : i+1;
				format += '; ${k' + i +'}';
			}
		};
		if (format_map['${f'] !== undefined){
			format += '; ${f}';
		};
		if (format_map['${g'] !== undefined){
			format += '; ${g}';
		};
		if (format_map['${v'] !== undefined){
			format += '; ${v}';
		};
		if (format_map['${c'] !== undefined){
			format += ' / ${c}';
		};

		if (format_map['${xil'] !== undefined){
			format += ' (${xil})';
		} else if (format_map['${xin'] !== undefined){
			format += ' (${xin})';
		};

	}

	//console.log("FORMAT",format);

	var fv = format;
	jQuery.each(value_map,function(k,values){
		//console.log(k);
		for (i in values){
			i = parseInt(i);
			var value = values[i];
			var mykey = k;
			if (i > 0){
				var j = i+1;
				mykey = ''+k+j;
			}
			mykey = mykey + '}';
		//	console.log('@' + fv + '> '  + mykey + '> ' + value);
		//	console.log('@'+ mykey + '> ' + value);
			fv = fv.replace(mykey,value);
		}
	});

	var m1 = fc.getFieldModelOrCreate('dc:title:',null,fv);
	//var m1 = fc.getFirstFieldModel('dc:title:');
	m1.value(fv);
  format_m.value(format);
};



	var opts_statement_title = jQuery.extend({},opts_text,{
		'key' : 'marc:title-statement:title',
		'label' : 'title',
		'autocomplete_url' : '/ws/archive/search-title',
		'validation':'not_empty',
		check_value_exists:true,
		//width:659,
		setupOptions: function(options){
			options.lang_select = {
				default_lang:language_default,
				available_languages: languages_avail,
			};
			return options;
		},
//		lang_select:{
//				default_lang:language_default,
//				available_languages: languages_avail,
//		},
		//extend_position:{ my: "center top",  at: "center top-50px" },
		extend_position:['top',20],
		extend:true,
		//extend_command: 'title_statement_extend',
		prescribed_select:true,
		extend_buttons:[
			{ text:'close',
				click :function(e,fc,context){
					var my_keys = title_keys;
					my_keys.push('marc:title-statement:format-formula');
					//console.log("MY_KEYS",my_keys);
					fc.populateKeys(my_keys);
					fn_generate_title(fc);
					jQuery(this).dialog("close");
				},
			},
		],
		//lang_select:true,
	});

	cmdCreate('title_statement_title',{
		action : 'setupField',
		opts : jQuery.extend({},opts_statement_title,{
			extend_command: 'title_statement_extend',
		})
	});
	cmdCreate('title_statement_title_serial',{
			action : 'setupField',
			opts : jQuery.extend({},opts_statement_title,{
				extend_command: 'title_statement_extend_serial',
			})
		});


	cmdCreate('title',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'dc:title:',
			'label' : 'title',
			'autocomplete_url' : '/ws/archive/search-title',
			'validation':'not_empty',
			check_value_exists:true,
			//'read_only':true,
			//'disabled':true,
		})
	});

	cmdCreate('title_ro',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'dc:title:',
			'label' : 'title-statement',
			//'validation':'not_empty',
			//check_value_exists:true,
			//'read_only':true,
			'disabled':true,
		})
	});



	cmdCreate('subtitle',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:subtitle:',
			'label' : 'subtitle',
			'autocomplete_url' : '/ws/archive/search-subtitle',
			check_value_exists:true,
		})
	});





	cmdCreate('name',{
		action : 'setupField',
		opts : jQuery.extend({},opts_name,{
			'key' : 'marc:title-statement:title',
			'label' : 'name',
			'autocomplete_url' : '/ws/archive/search-author',
			check_value_exists:true,
		})
	});



	cmdCreate('publisher',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'dc:publisher:',
			'label' : 'publisher',
			'autocomplete_url' : '/archive/search-publisher',
			check_value_exists:true,

		})
	});

	// cmdCreate('publication_place',{
		// action : 'setupField',
		// opts : jQuery.extend({},opts_text,{
			// 'key' : 'ea:publication:place',
			// 'label' : 'publication place',
			// 'autocomplete_url' : '/ws/archive/search-place',
			// check_value_exists:true,
		// })
	// });




	cmdCreate('ea_marc_dates',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:marc:dates',
			'label' : 'dates',
		})
	});


//
	cmdCreate('date_orgissued',{
		action : 'setupField',
		opts : {
			'key' : 'ea:date:orgissued',
			'label' : key_labels['ea:date:orgissued'],
			'type' : 'date',
			'show_help' : true,
			'clear':'left',
			add_button : true,
			add_button_first : false,
			add_button_br : true,
			add_button_label : 'add',
			//br_each : true,
			br_first : false,
			one_label: true,
			skip_on_empty:false,
			no_label:false,
			prescribed_select:true,
			width:'463px'
		}
	});

	cmdCreate('date_orgissued_single',{
			action : 'setupField',
			opts : {
				'key' : 'ea:date:orgissued',
				'label' : key_labels['ea:date:orgissued'],
				'type' : 'date',
				'show_help' : true,
				'clear':'left',
				br_first : false,
				one_label: true,
				skip_on_empty:false,
				no_label:false,
				prescribed_select:true,
			}
		});
	cmdCreate('dating',{
			action : 'setupField',
			opts : {
				'key' : 'ea:dating:',
				'label' : key_labels['ea:dating:'],
				'type' : 'date',
				'dating' : true,
				'show_help' : true,
				'clear':'left',
				add_button : true,
				add_button_first : false,
				add_button_br : true,
				add_button_label : 'add',
				br_first : false,
				one_label: true,
				skip_on_empty:false,
				no_label:false,
				prescribed_select:false,
			}
		});



	cmdCreate('issue',{
		action : 'setupField',
		opts : {
			'key' : 'ea:issue:',
			'label' : key_labels['issue'],
			'type' : 'issue',
			'show_help' : true,
//			'unique_parent_key':'marc:title-statement:title',
			'width' : '303px',
		}
	});



	cmdCreate('ea_date_start',{
		action : 'setupField',
		opts : {
			'key' : 'ea:date:start',
			'label' : key_labels['ea:date:start'],
			'type' : 'date',
			'show_help' : true,
			'width':'465px',
		}
	});

	cmdCreate('ea_date_end',{
		action : 'setupField',
		opts : {
			'key' : 'ea:date:end',
			'label' : key_labels['ea:date:end'],
			'type' : 'date',
			'show_help' : true,
			'width':'465px',
		}
	});




	cmdCreate('ddc',{
		action : 'setupField',
		opts : jQuery.extend({},opts_multy_text,{
			'key' : 'ea:classification:ddc',
			'label' : 'ddc',
			add_button : true,
			add_button_first : false,
			add_button_br : true,
			add_button_label : 'add',
			//br_each : true,
			br_first : false,
			one_label: true,
			skip_on_empty:false,
			advance:true,
			float:'left',
		})
	});

	cmdCreate('inventort_number',{
			action : 'setupField',
			opts : jQuery.extend({},opts_text,{
				key : 'ea:inventory:id',
				label : key_labels['ea:inventory:id'],
				autocomplete_url : '/archive/search-inventory-id',
				check_value_exists:true,
			})
	});

	cmdCreate('material_type',{
			action : 'setupField',
			opts : jQuery.extend({},opts_text,{
				key : 'ea:material:type',
				label : key_labels['ea:material:type'],
				autocomplete_url : '/ws/archive/search-material-type',
				check_value_exists:true,
				add_button : true,
				add_button_first : false,
				add_button_br : true,
				add_button_label : 'add',
				one_label: true,
				//skip_on_empty:false,


			})
	});
	cmdCreate('bookbinding_type',{
			action : 'setupField',
			opts : jQuery.extend({},opts_text,{
				key : 'ea:bookbinding:type',
				label : key_labels['ea:bookbinding:type'],
				autocomplete_url : '/ws/archive/search-bookbinding-type',
				check_value_exists:true,
			})
	});


//ISBN #############################

	cmdCreate('isbn',{
			action : 'setupField',
			opts : jQuery.extend({},opts_multy_text,{
				key : 'dc:identifier:isbn',
				label : 'isbn',
				autocomplete_url : '/ws/archive/search-isbn',
				extend:true,
				extend_command: 'isbn_extend',
				validation:'isbn',
				check_value_exists:true,
				background_color:'pink',
				add_button:true,
				one_label:true,
				repeat_style : 'ordered',
			})
		});



	cmdCreate('isbn_simple',{
			action : 'setupField',
			opts : jQuery.extend({},opts_text,{
				key : 'dc:identifier:isbn',
				label : 'isbn',
				autocomplete_url : '/ws/archive/search-isbn',
				check_value_exists:true,
			})
		});

	cmdCreate('isbn_extend',{
		action: 'extend',
		opts:{
		  label:'isbn',
			primary:'isbn_simple',
			commands:['isbn_simple','comment_simple_no_extend','comment_simple_internal'],
		}
	});
// ISBN #############################

//	cmdCreate('demo1',{
//			action : 'setupField',
//			opts : {
//				key : 'ea:place:See',
//				label : 'DEMO',
//				type : 'text',
//				show_help : false,
//				add_button:true,
//				one_label:true,
//				repeat_style : 'ordered',
//				autocomplete_fn : 'subjects',
//				autocomplete_url : '/ws/archive/search-terms',
//				check_value_exists:true,
//				width : '270px',
//			}
//		});
//





	cmdCreate('url_rel',{
			action : 'setupField',
			opts : {
				key : 'ea:url:related',
				label : key_labels['ea:url:related'],
				type : 'url',
				show_help : true,
				add_button : true,
				add_button_first : false,
				add_button_br : true,
				add_button_label : 'add',
				//width : '640px',
				one_label : true,
				br_each : true,
				br_first : false,
				extend:true,
				extend_command: 'url_extend',
				repeat_style : 'ordered',
			}
	});//"ea:url:related"

	cmdCreate('url_org',{
			action : 'setupField',
			opts : {
				key : 'ea:url:origin',
				label : key_labels['ea:url:origin'],
				type : 'url',
				show_help : true,
				add_button : false,
				add_button_first : false,
				add_button_br : true,
				add_button_label : 'add',
				//width : '640px',
				one_label : true,
				br_each : true,
				br_first : false,
			}
	});//"ea:url:related"



cmdCreate('url',{
			action : 'setupField',
			opts : {
				key : 'ea:url:related',
				label : key_labels['ea:url:related'],
				type : 'url',
				show_help : true,
				add_button : false,
				//add_button_first : false,
				//add_button_br : true,
			//	add_button_label : 'add',
				//width : '640px',
				one_label : true,
				br_each : true,
				br_first : false,
			}
	});//"ea:url:related"


	cmdCreate('issn',{
			action : 'setupField',
			opts : {
				'key' : 'dc:identifier:issn',
				'label' : 'issn',
				'type' : 'text',
				'show_help' : true,
			}
		});

	cmdCreate('subject',{
		action : 'setupField',
		opts : {
			key : 'dc:subject:',
			label : 'subjects',
			type : 'text',
			show_help : false,
			add_button : true,
			add_button_first : false,
			add_button_label : ' add subject ',
			add_button_class : 'add_button_grey',
			autocomplete_fn : 'subjects',
			autocomplete_url : '/ws/archive/search-terms',
			add_button_br : true,
			add_button_first:true,
			check_value_exists:true,
			width : '270px',
			one_label : true,
//			br_each : true,
//			br_first : false,
			skip_on_empty:true,

		}
	});

cmdCreate('header_relations',{
			action:'addSection',
			opts:{
			skey: 'relations',
				set_container: true,
				label:'Relations',
				level:2,
			 }
});


cmdCreate('header_works',{
		action:'addSection',
		opts:{
		skey: 'works',
			set_container: true,
			label:'Works',
			level:2,
		 }
	});

cmdCreate('header_works_with_add',{
		action:'addSection',
		opts:{
		skey: 'works',
			set_container: true,
			label:'Works',
			level:2,
			//KOUMPI ADD WORK
			add_button:true,
			status:'open',
				'click_handler': function(e){
					e.preventDefault();
					e.stopImmediatePropagation();
					var h = jQuery(this).closest('.hsection').data('arc_section').show();
					fc.createFieldModel('ea:work:',null,null);
					fc._renderForm();
			},
		 }
	});

cmdCreate('header_work',{
  		action:'addSectionExt',
  		opts:{
  			skey: 'work',
  			add_empty:false,
				skip_on_empty:false,
  			key: 'ea:work:',
  			set_container: false,
	  		command:'work_extend',
  			label:'Work',
  			level:3,
				add_button_expand:true,
  		}
	});





		cmdCreate('comment_simple_ta',{
			action : 'setupField',
			opts : jQuery.extend({},opts_textarea,{
				'key' : 'tmp:comment:',
				'label' : key_labels['comment'],
			})
		});


	cmdCreate('comment_simple',{
			action : 'setupField',
			opts : {
				'key' : 'ea:comment:',
				'label' : key_labels['ea:comment:'],
				'type' : 'text',
				'show_help' : true,
				extend:true,
				extend_command: 'comment_simple_extend',
			}
		});

	cmdCreate('comment_simple_no_extend',{
			action : 'setupField',
			opts : {
				'key' : 'ea:comment:',
				'label' : key_labels['ea:comment:'],
				'type' : 'text',
				'show_help' : true,
			}
		});


		cmdCreate('comment_simple_extend',{
		action: 'extend',
		opts:{
		  label:key_labels['ea:comment:'],
			primary:'comment_simple_ta',
			commands:['comment_simple_ta'],
		}
	});


	cmdCreate('comment_simple_internal',{
			action : 'setupField',
			opts : {
				'key' : 'ea:comment:internal',
				'label' : key_labels['ea:comment:internal'],
				'type' : 'text',
				'show_help' : true,
			}
		});



		cmdCreate('description_ta',{
			action : 'setupField',
			opts : jQuery.extend({},opts_textarea,{
				'key' : 'tmp:description:',
				'label' : 'description',
			})
		});

cmdCreate('note_ta',{
			action : 'setupField',
			opts : jQuery.extend({},opts_textarea,{
				'key' : 'tmp:note:',
				'label' : 'note',
			})
		});

	cmdCreate('description_extend',{
		action: 'extend',
		opts:{
		  label:'description',
			primary:'description_ta',
			commands:['description_ta'],
		}
	});


	cmdCreate('note_extend',{
		action: 'extend',
		opts:{
		  label:'note',
			primary:'note_ta',
			commands:['note_ta','text_format'],
		}
	});



	cmdCreate('work_ext',{
		action : 'setupField',
			opts : jQuery.extend({},opts_multy_text,{
			'key' : 'ea:work:',
			'label' : 'title',
			'autocomplete_' : '/ws/archive/search-title',
			extend:true,
			extend_command: 'work_extend',
		})
	});

	cmdCreate('work',{
		action : 'setupField',
			opts : jQuery.extend({},opts_text,{
			'key' : 'ea:work:',
			'label' : 'title',
			'autocomplete_url' : '/ws/archive/search-title',
			'validation':'not_empty',
			has_ref_disable:true,
			has_ref_extend:true,
			//extend:true,
			extend_buttons:[
				{ text:'ok',     id:'b_d1',},
				{ text:'remove', id:'b_d2',},
			],
			extend_command: 'work_extend_show',
		})
	});

	cmdCreate('work_simple',{
		action : 'setupField',
			opts : {
			type:'display_item',
			'key' : 'ea:work:',
			'label' : 'title',
			'ok_button':'#b_d1',
			'remove_button':'#b_d2',
			'display_handler':createDisplayItem('title:'),
		}
	});

	cmdCreate('work_extend_show',{
		action: 'extend',
		opts:{
		  label:'work',
			primary:'work_simple',
			commands:['work_simple'],
		}
	});




	cmdCreate('biblionet_show',{
		action:'execJs',
		opts:{
			fn:function(context){
				jQuery('#biblionet1').css('display', 'block');
				jQuery('#libgen1').css('display', 'block');
			}
		}
	});
	cmdCreate('biblionet_hide',{
		action:'execJs',
		opts:{
			fn:function(context){
				jQuery('#biblionet1').css('display', 'none');
				jQuery('#libgen1').css('display', 'none');
			}
		}
	});


	cmdCreate('work_delete_button',{
		action:'addButton',
		opts:{
			label:'remove',
			align:'right',
			type:'remove',
			remove_keys:['ea:work:'],
			remove_msg:'do you want to remove work',
		}
	});

	cmdCreate('clearR',{
		action:'addHtml',
		opts:{
			html:'<span style="clear:right;display:block;"></span>',
		}
	});


	cmdCreate('work_buttons',{
		 action: 'cmdGroup',
		 opts:{
		 	new_container:true,
			commands:['work_delete_button','clearR'],
		 }
	});


	cmdCreate('work_setup',{
		action:'execJs',
		opts:{
			fn:function(context){
//			  console.log("work_setup",context);
//			  var fc = context.fc;
//				fc.populateData();
//				var first_work = false;
//				var works = fc.getFieldModels('ea:work:');
//				var wl = works.length;
//				if (wl == 1){
//					if (!pl.chk(works[0].value())){
//						first_work = true;
//					}
//				}
//				field_data = context.get('setupField');
//				jQuery.each(field_data,function(idx,fd){
//				 // console.log("field_data",idx,fd);
//					if (fd.key == 'ea:work:' && first_work && idx == 0){
//						var model = fd.models[0];
//						var value = model.value();
//						if (!pl.chk(value)){
//							var titles = fc.getFieldModels('dc:title:');
//							if (titles.length > 0){
//								var title = titles[0].value();
//								model.value(title);
//							}
//						}
//					}else if (fd.key == 'dc:contributor:author'){
//						var index = wl -1;
//							var model = fd.models[0];
//							var value = model.value();
//							if (!pl.chk(value)){
//								var values = fc.getFieldModels('dc:contributor:author');
//								if (values.length > index ){
//									var lvalue = values[index].value();
//									model.value(lvalue);
//								}
//							}
//						}
//				});


			}
		}
	});

	cmdCreate('work_extend',{
		action: 'extend',
		opts:{
		  label:'Work',
			primary:'work',
			commands_primary_is_ref:['work'],
			commands:['work','title_uniform','contributors_all','date_orgissued','comment_simple',
			'comment_simple_internal','lang1','subject','status_hidden','work_buttons','work_setup'],
		}
	});


//@DocGroup(module="works", group="js", comment="form: commands.work_extend2")
	cmdCreate('work_extend2',{
		action: 'extend',
		opts:{
		  label:'Work',
			primary:'work',
			commands_primary_is_ref:['work'],
			commands:['work','title_uniform','contributors_all','date_orgissued','comment_simple',
			'comment_simple_internal','lang1','subject','status_hidden','work_setup'],
		}
	});




//@DocGroup(module="works", group="js", comment="form: commands.work_extend3")
	cmdCreate('work_extend3',{
		action: 'extend',
		opts:{
		  label:'Work',
			primary:'work_title_preferred',
			//commands_primary_is_ref:['work'],
			commands:f_auth_work_extend,
		}
	});



cmdCreate('url_extend',{
		action: 'extend',
		opts:{
		  label:key_labels['ea:url:related'],
			primary:'url',
			commands:['url','comment_simple','comment_simple_internal'],
		}
	});


var work_type_map = {
	 'ea:work:':'Work',
};
	// author_type_map = {
			// 'dc:contributor:author': 'Author',//'Συγγραφέας',
			// 'ea:contributor:responsible' : 'Responsible',//'Υπεύθυνος έκδοσης',
			// 'ea:contributor:editor': 'Editor',//'Επιμελητής',
			// //'dc:contributor:editor': 'Συντάκτης',
			// 'ea:contributor:translator' : 'Translator',//'Μεταφραστής',
			// 'dc:contributor:illustrator' : 'Illustrator',
			// 'dc:contributor:advisor' : 'Advisor',
			// 'dc:contributor:other' : 'Contributor other',
	// });
//

//var author_type_map = contributors_printed;
//var contributor_keys = Object.keys(author_type_map);

// var contributor_keys =[
				// 'dc:contributor:author',
				// 'ea:contributor:responsible',
				// 'ea:contributor:editor',
				// 'ea:contributor:translator',
				// 'dc:contributor:illustrator',
				// 'dc:contributor:advisor' ,
				// 'dc:contributor:other',
// ];



	cmdCreate('contributors_author',{
			action : 'setupField',
			opts : {
				type : 'text',
				select_key_map:{
					'dc:contributor:author':'Author',
				},
				//key: ['dc:contributor:author'],
				select_key_width:'160px',
				show_help : true,
				//autocomplete_url : '/ws/archive/search-author',
				add_button : true,
				add_button_first : false,
				add_button_br : true,
				add_button_label : 'add',
				br_each : true,
				br_first : false,
				one_label: true,
				skip_on_empty:true,
				width:518,
				no_label:false,
				extend:true,
				has_ref_disable:true,
				read_only:true,
				extend_buttons:[
					{ text:'ok',     id:'b_d1',},
					{ text:'new',    id:'b_d2',},
					{ text:'cancel', id:'b_d3',},
					{ text:'remove', id:'b_d4',},
					{ text:'close',  id:'b_d5',},
				],
				//extend_buttons_cardinality:3,
				extend_position:{ my: "center top", at: "center top" },
				label:'Contributor',
				extend_command:'contributor_search_dialog_viz',

				}
		});



//	//@DocGroup(module="actor", group="js", comment="contributor form command")
//	cmdCreate('contributors_all',{
//			action : 'setupField',
//			opts : {
//				type : 'text',
//				setupOptions: function(options){
//					options.select_key_map= author_type_map;
//					//options.key =contributor_keys;
//					return options;
//				},
//				//select_key_map:commands.author_type_map,
//				select_key_width:'160px',
//				show_help : true,
//				//autocomplete_url : '/ws/archive/search-author',
//				add_button : true,
//				add_button_first : false,
//				add_button_br : true,
//				add_button_label : 'add',
//				br_each : true,
//				br_first : false,
//				one_label: true,
//				skip_on_empty:true,
//				width:518,
//				no_label:false,
//				extend:true,
//				has_ref_disable:true,
//				read_only:true,
//				extend_buttons:[
//					{ text:'ok',     id:'b_d1',},
//					{ text:'new',    id:'b_d2',},
////					{ text:'family', id:'b_d6',},/*family*/
//					{ text:'cancel', id:'b_d3',},
//					{ text:'remove', id:'b_d4',},
//					{ text:'close',  id:'b_d5',},
//				],
//				//extend_buttons_cardinality:3,
//				extend_position:{ my: "center top", at: "center top" },
//				//key :commands.contributor_keys,
//				 // [
//				// 'dc:contributor:author',
//				// 'ea:contributor:responsible',
//				// 'ea:contributor:editor',
//				// 'dc:contributor:editor',
//				// 'ea:contributor:translator',
//				// 'dc:contributor:illustrator',
//				// 'dc:contributor:advisor',
//				// 'dc:contributor:other',
//				// ],
//				label:'Contributor',
//				//extend_command:'contributor_search_dialog',
//				 extend_punctuation : '{{v}}\
//{{#ea:title:specific}}[{{v}}]{{/ea:title:specific}}',
//				extend_command:{
//				 'dc:contributor:author':'contributor_search_dialog',
//				 'dc:contributor:illustrator':'contributor_search_dialog',
//				 'ea:contributor:responsible':'contributor_search_dialog',
//				 'ea:contributor:editor':'contributor_search_dialog',
//				 'dc:contributor:editor':'contributor_search_dialog',
//         'ea:contributor:translator':'contributor_search_dialog',
//         'dc:contributor:advisor':'contributor_search_dialog',
//         'dc:contributor:other':'contributor_search_dialog',
//				 }
//
//
//				// lang_select:{
//					 // default_lang:language_default,
//					 // available_languages: languages_avail,
//				// },
//					//prescribed_select : true,
//
//				}
//		});


	var relation_type_map = {
//			'ea:issue-of:':'issue of',
			'ea:relation:other':'relation other',
//			'ea:item-of:':'item of',
		};

	var opts_relations_base = {
		type : 'text',
		select_key_width:'160px',
		show_help : true,
		//autocomplete_url : '/archive/search-relation',
		add_button : true,
		add_button_first : false,
		add_button_br : true,
		add_button_label : 'add',
		br_each : true,
		br_first : false,
		one_label: true,
		skip_on_empty:true,
		width:"517px",
		no_label:false,
		extend:true,
		has_ref_disable:true,
		read_only:true,
		//extend_buttons_cardinality:3,
		extend_position:{ my: "center top", at: "center top" },
		};


cmdCreate('relations_all',{
			action : 'setupField',
			opts : jQuery.extend({},opts_relations_base, {
				type : 'text',
				select_key_map:relation_type_map,
				extend_buttons:[
					{ text:'ok',     id:'b_w1',},
					//{ text:'new',    id:'b_w2',},
					{ text:'cancel', id:'b_w3',},
					{ text:'remove', id:'b_w4',},
					{ text:'close',  id:'b_w5',},
				],
				extend_position:{ my: "center top", at: "center top" },
				//key : [
				//'ea:relation:other',
				//],
				label:'Relation',
				extend_command:'relation_search_dialog',
				})
});



cmdCreate.relation({
	'cmd_name':'relations_folder',
	'object_type':'collection',
	'key':{
    "ea:item-of:": "item-of",
  },
	'label':'collection',
	'search_url':'/prepo/ws/search-folder',
	 //'extend_commands' : f_auth_family_extend,
	 //'new_button_label' : 'new family',
	 'extend_primary_label' : 'xxx',
  root_options:{
//  	select_key_width:'280px',
//  	width:"400px",
    "add_button": false,
    "repeat_style": "ordered",
  }
});

//cmdCreate('relations_folder',{
//		action : 'setupField',
//		opts : jQuery.extend({},opts_relations_base, {
//			type : 'text',
//			select_key_map: {
//				'ea:item-of:':'item of',
//			},
//			extend_buttons:[
//				{ text:'ok',     id:'b_w1',},
//				//{ text:'new',    id:'b_w2',},
//				{ text:'cancel', id:'b_w3',},
//				{ text:'remove', id:'b_w4',},
//				{ text:'close',  id:'b_w5',},
//			],
//			extend_position:{ my: "center top", at: "center top" },
//			//key : [
//			//       'ea:item-of:',
//			//],
//			label:'Folder',
//			extend_command:'relation_search_dialog',
//			})
//});




cmdCreate('relations_issue',{
		action : 'setupField',
		opts : jQuery.extend({},opts_relations_base, {
			type : 'text',
			select_key_map: {
				'ea:issue-of:':'issue of',
			},
			extend_buttons:[
				{ text:'ok',     id:'b_w1',},
				//{ text:'new',    id:'b_w2',},
				{ text:'cancel', id:'b_w3',},
				{ text:'remove', id:'b_w4',},
				{ text:'close',  id:'b_w5',},
			],
			extend_position:{ my: "center top", at: "center top" },
			//key : [
			//       'ea:issue-of:',
			//],
			label:'Issue of',
			extend_command:'relation_search_dialog',
			})
});



//@DocGroup(module="works", group="js", comment="form: commands.works_all")
cmdCreate('works_all',{
			action : 'setupField',
			opts : {
				type : 'text',
				//select_key_map:work_type_map,
				select_key_width:'160px',
				show_help : true,
//				autocomplete_url : 'ws/archive/search-work',
				add_button : true,
				add_button_first : false,
				add_button_br : true,
				add_button_label : 'add',
				br_each : true,
				br_first : false,
				one_label: true,
				skip_on_empty:true,
				no_label:false,
				extend:true,
				has_ref_disable:true,
				read_only:true,
				extend_buttons:[
					{ text:'ok',     id:'b_w1',},
					{ text:'new',    id:'b_w2',},
					{ text:'cancel', id:'b_w3',},
					{ text:'remove', id:'b_w4',},
					{ text:'close',  id:'b_w5',},
				],
				//extend_buttons_cardinality:3,
				extend_position:{ my: "center top", at: "center top" },
				repeat_style : 'ordered',
				key : 'ea:work:',
				label:'Work',
				extend_command:'work_search_dialog',
				}
		});


	cmdCreate('contributor_simple',{
		action : 'setupField',
		opts : {
			'key' : 'tmp:contributor:',
			'label' : null,
			'type' : 'name',
			'show_help' : true,
			setupOptions: function(options){
									options.lang_select = {
									default_lang:language_default,
									available_languages: languages_avail,
					};
					return options;
				},
			//autocomplete_url : '/ws/archive/search-author',

		}
	});


	cmdCreate('pages_cardinality',{
		action : 'setupField',
		opts : {
			'key' : 'ea:size:pages',
			'label' : 'Number of Pages',
			'type' : 'text',
			'show_help' : true,
			'width':60,
			'text_align':'right',
			'validation':'digits',
			'float':'left',
		}
	});

	cmdCreate('sheets_cardinality',{
			action : 'setupField',
			opts : {
				'key' : 'ea:size:sheets',
				'label' : 'Sheets',
				'label-width':60,
				'type' : 'text',
				'show_help' : true,
				'width':60,
				'text_align':'right',
				'validation':'digits',
				'float':'left',
			}
		});

//#############################################
//#   PUBLISHER
//#############################################
// publisher_type_map = {
	// 'dc:publisher:':'Publisher',
// });

cmdCreate('publishers_all',{
			action : 'setupField',
			opts : {
				type : 'text',
//				select_key_map:{
//					'dc:publisher:':'Publisher',
//				},
				key: 'dc:publisher:',
			//select_key_map:publisher_type_map,
				select_key_width:'160px',
				show_help : true,
				autocomplete_url : '/ws/archive/search-author',
				add_button : true,
				add_button_first : false,
				add_button_br : true,
				add_button_label : 'add',
				br_each : true,
				br_first : false,
				one_label: true,
				skip_on_empty:false,
				//width:"517px",
				no_label:false,
				extend:true,
				has_ref_disable:true,
				read_only:true,
				extend_buttons:[
					{ text:'ok',     id:'b_w1',},
					{ text:'new',    id:'b_w2',},
					{ text:'cancel', id:'b_w3',},
					{ text:'remove', id:'b_w4',},
					{ text:'close',  id:'b_w5',},
				],
				//extend_buttons_cardinality:3,
				extend_position:{ my: "center top", at: "center top" },
				//key : [
				//'dc:publisher:',
				//],
				label:'Publisher',
				extend_command:'publisher_search_dialog',
				prescribed_select:true,
			}
		});

cmdCreate('printers_all',{
			action : 'setupField',
			opts : {
				type : 'text',
				key: 'ea:publication:printer-name',
			//select_key_map:publisher_type_map,
				select_key_width:'160px',
				show_help : true,
				autocomplete_url : '/ws/archive/search-author',
				add_button : true,
				add_button_first : false,
				add_button_br : true,
				add_button_label : 'add',
				br_each : true,
				br_first : false,
				one_label: true,
				skip_on_empty:false,
				//width:"517px",
				no_label:false,
				extend:true,
				has_ref_disable:true,
				read_only:true,
				extend_buttons:[
					{ text:'ok',     id:'b_w1',},
					{ text:'new',    id:'b_w2',},
					{ text:'cancel', id:'b_w3',},
					{ text:'remove', id:'b_w4',},
					{ text:'close',  id:'b_w5',},
				],
				//extend_buttons_cardinality:3,
				extend_position:{ my: "center top", at: "center top" },
				//key : [
				//'ea:publication:printer-name',
				//],
				label:'Printer',
				extend_command:'publisher_search_dialog',
				prescribed_select:true,
			}
		});



		cmdCreate('publisher_search_dialog',{
		action: 'extend',
		opts:{
			label:null,
			primary:'publisher_search',
			commands:['publisher_search',
			//'author_dialog_buttons_setup'
			],
		}
	});


	cmdCreate('publisher_search',{
		action : 'setupField',
		opts : {
			'key' : 'tmp:publisher:search',
			'label' : null,
			'type' : 'contributor_search',
			'show_help' : true,
			'ok_button':'#b_w1',
			'new_button':'#b_w2',
			'cancel_button':'#b_w3',
			'remove_button':'#b_w4',
			'close_button':'#b_w5',
			'select_command': 'contributor_extend',
			'display_handler':createDisplayItem('name:','other-name:'),
		}
	});


//############################################################3
//############################################################3







//
	// commands.publication_place = {
		// action : 'setupField',
		// opts : jQuery.extend({},opts_text,{
			// 'key' : 'ea:publication:place',
			// 'label' : 'publication place',
			// 'autocomplete_url' : '/ws/archive/search-place',
			// check_value_exists:true,
		// })
	// });

//#############################################
//#############################################
//#############################################
//#############################################
//#############################################
//#   PLACE
//#############################################
//#############################################
//#############################################
//#############################################

// place_type_map = {
	// 'ea:publication:place':'Publication Place',
// });

cmdCreate('publication_place',{
			action : 'setupField',
			opts : {
				type : 'text',
				key:'ea:publication:place',
				//select_key_map:place_type_map,
				//select_key_width:'160px',
				show_help : true,
				autocomplete_url : '/ws/archive/search-place',
				add_button : true,
				add_button_first : false,
				add_button_br : true,
				add_button_label : 'add',
				br_each : true,
				br_first : false,
				one_label: true,
				skip_on_empty:false,
				//width:"517px",
				no_label:false,
				extend:true,
				has_ref_disable:true,
				read_only:true,
				extend_buttons:[
					{ text:'ok',     id:'b_w1',},
					{ text:'new',    id:'b_w2',},
					{ text:'cancel', id:'b_w3',},
					{ text:'remove', id:'b_w4',},
					{ text:'close',  id:'b_w5',},
				],
				//extend_buttons_cardinality:3,
				extend_position:{ my: "center top", at: "center top" },
				//key : [
				//'ea:publication:place',
				//],
				label:'Publication Place',
				extend_command:'place_search_dialog',
				prescribed_select:true,
				}
		});

cmdCreate('printing_place',{
			action : 'setupField',
			opts : {
				type : 'text',
				key:'ea:publication:printing-place',
				//select_key_map:place_type_map,
				//select_key_width:'160px',
				show_help : true,
				autocomplete_url : '/ws/archive/search-place',
				add_button : true,
				add_button_first : false,
				add_button_br : true,
				add_button_label : 'add',
				br_each : true,
				br_first : false,
				one_label: true,
				skip_on_empty:false,
				//width:"517px",
				no_label:false,
				extend:true,
				has_ref_disable:true,
				read_only:true,
				extend_buttons:[
					{ text:'ok',     id:'b_w1',},
					{ text:'new',    id:'b_w2',},
					{ text:'cancel', id:'b_w3',},
					{ text:'remove', id:'b_w4',},
					{ text:'close',  id:'b_w5',},
				],
				//extend_buttons_cardinality:3,
				extend_position:{ my: "center top", at: "center top" },
				//key : [
				//'ea:publication:printing-place',
				//],
				label:'Printing Place',
				extend_command:'place_search_dialog',
				prescribed_select:true,
				}
		});









	cmdCreate('place_search_dialog',{
		action: 'extend',
		opts:{
			label:null,
			primary:'place_search',
			commands:['place_search',
			],
		}
	});


	cmdCreate('place_search',{
		action : 'setupField',
		opts : {
			'key' : 'tmp:place:search',
			'label' : null,
			'type' : 'place_search',
			'show_help' : true,
			'ok_button':'#b_w1',
			'new_button':'#b_w2',
			'cancel_button':'#b_w3',
			'remove_button':'#b_w4',
			'close_button':'#b_w5',
			'select_command': 'place_extend',
			'display_handler':createDisplayItem('title:'),
		}
	});

	cmdCreate('place_simple',{
		action : 'setupField',
		opts : {
			'key' : 'tmp:place:search',
			'label' : null,
			'type' : 'text',
			'show_help' : true,
			background_color:'pink',
			//autocomplete_url : '/ws/archive/search-author',
		}
	});

	cmdCreate('place_extend',{
		action: 'extend',
		opts:{
		  label:'Place',
			primary:'place_simple',
			//commands_primary_is_ref:['place_simple'],
			commands:['place_simple','title_uniform','country_code_so','country','linked_data_url','comment_simple', 'comment_simple_internal','subject','status_hidden'],
		}
	});


//############################################################3
//############################################################3



	cmdCreate('country',{
		action : 'setupField',
		opts : {
			'key' : 'ea:country:name',
			'label' : null,
			'type' : 'text',
			'show_help' : true,
			autocomplete_url : '/ws/archive/search-country',
			check_value_exists:true,
			background_color:'pink',
		}
	});

// cmdCreate('country_r',{
		// action : 'setupField',
		// opts : {
			// 'key' : 'ea:country:name',
			// 'label' : null,
			// 'type' : 'text',
			// 'show_help' : true,
			// autocomplete_url : '/archive/search-country',
			// check_value_exists:true,
			// background_color:'pink',
			// 'size':200,
			// 'float':'left',
			// 'clear':'right',
		// }
	// });

cmdCreate('linked_data_url',{
		action : 'setupField',
		opts : {
			'key' : 'ea:linkeddata:url',
			'label' : null,
			'type' : 'text',
			'show_help' : true,
			//autocomplete_url : '/archive/search-country',
		}
	});






// DIMENSIONS #############################

	cmdCreate('dimensions_simple',{
			action : 'setupField',
			opts : {
				'key' : 'ea:dimensions:dimensions',
				'label' : 'Dimensions',
				'type' : 'text',
				'show_help' : true,
			}
		});
		cmdCreate('dimensions_comment',{
			action : 'setupField',
			opts : {
				'key' : 'ea:dimensions:comment',
				'label' : 'Comment',
				'type' : 'text',
				'show_help' : true,
			}
		});



	cmdCreate('dimensions_1',{
		action : 'setupField',
		opts : {
			'key' : 'ea:dimensions:dimensions',
			'label' : 'Dimensions',
			'type' : 'text',
			'show_help' : true,
			extend:true,
			extend_command: 'dimensions_1_extend',
		}
	});

	cmdCreate('dimensions_1_extend',{
		action: 'extend',
		opts:{
		  label:'Dimensions',
			primary:'dimensions_simple',
			commands:['dimensions_simple','dimensions_comment','comment_simple_internal'],
			//commands:['dimensions_simple','comment_simple_no_extend','comment_simple_internal'],
		}
	});

	///////////////////////////////
// --ea:dimensions:extent
// --ea:dimensions:other-physical-datails
// --ea:dimensions:dimensions
// --ea:dimensions:accompanying-material
// --ea:dimensions:unit-type
// --ea:dimensions:unit-size
// --ea:dimensions:comment



	cmdCreate('dimensions_other_physical_details',{
			action : 'setupField',
			opts : {
				'key' : 'ea:dimensions:other-physical-datails',
				'label' : 'other physical details',
				'type' : 'text',
				'show_help' : true,
			}
		});

	 cmdCreate('dimensions_extent',{
			 action : 'setupField',
			 opts : {
				 'key' : 'ea:dimensions:extent',
				 'label' : 'extent',
				 'type' : 'text',
				 'show_help' : true,
			 }
	 });

	cmdCreate('dimensions_2',{
		action : 'setupField',
		opts : {
			'key' : 'ea:dimensions:extent',
			'label' : 'Dimensions',
			'type' : 'text',
			'show_help' : true,
			'width':500,
			'float':'left',
			'clear':'right',
			'label-width':90,
			extend:true,
			extend_command: 'dimensions_2_extend',
		}
	});

	cmdCreate('dimensions_4',{
			action : 'setupField',
			opts : {
				'key' : 'ea:dimensions:extent',
				'label' : 'Dimensions',
				'type' : 'text',
				'show_help' : true,
				'width':360,
				//'float':'left',
				'clear':'right',
				'label-width':90,
				extend:true,
				extend_command: 'dimensions_2_extend',
			}
		});


	cmdCreate('dimensions_2_extend',{
		action: 'extend',
		opts:{
		  label:'Dimensions',
			primary:'dimensions_extent',
			commands:['dimensions_extent','dimensions_simple','dimensions_other_physical_details','dimensions_comment','comment_simple_internal'],
			//commands:['dimensions_simple','comment_simple_no_extend','comment_simple_internal'],
		}
	});



// DIMENSIONS #############################




cmdCreate('person_titles',{
		action : 'setupField',
		opts : {
			'key' : 'ea:person:name-titles',
			'label' : 'titles & other',
			'type' : 'text',
			'show_help' : true,

		}
	});


//	actor_type_map = {
//		'undefined': 'undefined',
//		'person': 'Person',
//		'collective':'Collective',
//		'collective_name':'Collective Name',
//		'corporate_body':'Corporate Body',
//		'family':'Family',
//	});



	cmdCreate('contributor_type',{
      action : 'setupField',
      opts : {
        key : 'ea:contributor-type:',
        label : 'type',
        type : 'select',
        select_values:actor_type_map,
        read_only:false,
        show_help : true,
        width:'240px',
        'link_to_root':true,
      }
    });


//	cmdCreate('contributor_search',{
//		action : 'setupField',
//		opts : {
//			'key' : 'tmp:contributor:search',
//			'label' : null,
//			'type' : 'contributor_search',
//			'show_help' : true,
//			'ok_button':'#b_d1',
//			'new_button':'#b_d2',
//			'cancel_button':'#b_d3',
//			'remove_button':'#b_d4',
//			'close_button':'#b_d5',
////			'select_command': 'contributor_openWindow',
//			'select_command': 'contributor_extend',
//			'display_handler':createDisplayItem('name:','other-name:'),
//		}
//	});
//
//	cmdCreate('contributor_search4',{
//			action : 'setupField',
//			opts : {
//				'key' : 'tmp:contributor:search',
//				'label' : null,
//				'type' : 'contributor_search',
//				'show_help' : true,
//				'ok_button':'#b_d1',
//				'new_button':'#b_d2',
//				'family_button':'#b_d6',/*family*/
//				'cancel_button':'#b_d3',
//				'remove_button':'#b_d4',
//				'close_button':'#b_d5',
////				'select_command': 'contributor_openWindow',
//				'select_command': 'contributor_extend4',
//				'display_handler':createDisplayItem('name:','other-name:'),
//			}
//		});

	cmdCreate('contributor_search_dialog',{
		action: 'extend',
		opts:{
			label:null,
			primary:'contributor_search',
			commands:['contributor_search',
			//'author_dialog_buttons_setup'

			],
		}
	});

	cmdCreate('contributor_search_dialog4',{
			action: 'extend',
			opts:{
				label:null,
				primary:'contributor_search4',
				commands:['contributor_search4',
				//'author_dialog_buttons_setup'
				],
			}
		});


	//@DocGroup(module="works", group="js", comment="form: commands.work_search")
	cmdCreate('work_search',{
		action : 'setupField',
		opts : {
			//'key' : 'tmp:work:search',
			'key' : 'ea:work:',

			'label' : null,
			'type' : 'work_search',
			'show_help' : true,
			'ok_button':'#b_w1',
			'new_button':'#b_w2',
			'cancel_button':'#b_w3',
			'remove_button':'#b_w4',
			'close_button':'#b_w5',
			'select_command': 'work_extend3',
			'display_handler':createDisplayItem('name:','other-name:'),
		}
	});

	cmdCreate('relation_search',{
			action : 'setupField',
			opts : {
				'key' : 'tmp:relation:search',
				'label' : null,
				'type' : 'relation_search',
				'show_help' : true,
				'ok_button':'#b_w1',
				'new_button':'#b_w2',
				'cancel_button':'#b_w3',
				'remove_button':'#b_w4',
				'close_button':'#b_w5',
				//'select_command': 'relation_extend2',
				'display_handler':createDisplayItem('name:','other-name:'),
			}
		});



	//@DocGroup(module="works", group="js", comment="form: commands.work_search_dialog")
	cmdCreate('work_search_dialog',{
		action: 'extend',
		opts:{
			label:null,
			primary:'work_search',
			commands:['work_search',
			//'author_dialog_buttons_setup'
			],
		}
	});


	cmdCreate('relation_search_dialog',{
			action: 'extend',
			opts:{
				label:null,
				primary:'relation_search',
				commands:['relation_search',
				//'author_dialog_buttons_setup'
				],
			}
		});





	cmdCreate('contributor_extend',{
		action: 'extend',
		opts:{
			label:null,
			primary:'contributor_simple',
			commands:[ //'header_actor_c',
			'contributor_type','contributor_simple','person_titles',
			'name_uniform','ea_date_start', 'ea_date_end', 'comment_simple',
			'comment_simple_internal','subject','status_hidden'
			//'header_controls_c',
			//'author_buttons'
			],
		}
  });

//	cmdCreate('contributor_extend4',{
//			action: 'extend',
//			opts:{
//				label:null,
//				primary:'contributor_simple',
//				commands:[ //'header_actor_c',
//				'contributor_type','contributor_simple','person_titles','subject','status_hidden'
//				//'header_controls_c',
//				//'author_buttons'
//				],
//			}
//	  });
//

	cmdCreate('contributor_openWindow',{
			action: 'openWindow',
			opts:{
				link:'/prepo/edit_step1?br=2&rd=1',
				setupOptions: function(options){
				//options.wpinput = window.wpinput;
				return options;
				},
			},
	  });


	cmdCreate('web_site_url',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:website:url',
			'label' : key_labels['site url'],
		})
	});

	cmdCreate('web_site_url_base',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:website:url-base',
			'label' : key_labels['site url-base'],
		})
	});


cmdCreate('web_site_captured',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:date:captured',
			'label' : 'ts captured',
		})
});


cmdCreate('hr',{
	action:'addHtml',
	opts:{
		html:'<hr/>',
	}
});






//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////


	cmdCreate('name_uniform',{
			action : 'setupField',
			opts : jQuery.extend({},opts_multy_name,{
				key : 'ea:title:uniform',
				label : 'name uniform',
				check_value_exists:true,
				//width:659,
				setupOptions: function(options){
					options.lang_select = {
						default_lang:language_default,
						available_languages: languages_avail,
					};
					return options;
				},
				//autocomplete_url : '/ws/archive/search-author',
			})
		});



	cmdCreate('title_uniform',{
			action : 'setupField',
			opts : jQuery.extend({},opts_multy_text,{
				key : 'ea:title:uniform',
				label : 'title uniform',
				autocomplete_url : '/ws/archive/search-title',
				check_value_exists:true,
				//width : 659,
				setupOptions: function(options){
					options.lang_select = {
						default_lang:language_default,
						available_languages: languages_avail,
					};
					return options;
				},
//
//				lang_select:{
//					default_lang:language_default,
//					available_languages: languages_avail,
//				},
				extend:true,
				extend_command: 'title_uniform_extend',
				prescribed_select:true,
			})
		});

	cmdCreate('title_uniform_simple',{
			action : 'setupField',
			opts : jQuery.extend({},opts_text,{
				key : 'ea:title:uniform',
				label : 'title uniform',
				autocomplete_url : '/ws/archive/search-title',
				check_value_exists:true,
				//width : 659,
				// lang_select:{
					// default_lang:language_default,
					// available_languages: languages_avail,
				// },
			})
		});

	cmdCreate('title_uniform_date_treaty_signing',{
			action : 'setupField',
			opts : jQuery.extend({},opts_text,{
				key : 'marc:title-uniform:date-treaty-signing',
				label : 'Date of treaty signing',
				check_value_exists:true,
			})
	});
	cmdCreate('title_uniform_date_work',{
			action : 'setupField',
			opts : jQuery.extend({},opts_text,{
				key : 'marc:title-uniform:date-work',
				label : 'Date of work',
				check_value_exists:true,
			})
	});
	cmdCreate('title_uniform_info',{
			action : 'setupField',
			opts : jQuery.extend({},opts_text,{
				key : 'marc:title-uniform:info',
				label : 'info',
				check_value_exists:true,
			})
	});

 // marc:title-uniform:date-treaty-signing
 // marc:title-uniform:date-work
 // marc:title-uniform:info



	cmdCreate('title_uniform_extend',{		action: 'extend',
		opts:{
		  label:'title uniform',
			primary:'title_uniform_simple',
			commands:['title_uniform_simple','title_uniform_date_treaty_signing',
			'title_uniform_date_work','title_uniform_info'],
		}
	});





	cmdCreate('title_statement_extend',{		action: 'extend',
		opts:{
		  label:'title',
			primary:'title_simple',
			commands:[
			'title_simple',
			//'title',
			'marc_title_statement_remainder',
			'marc_title_statement_responsibility',
			'marc_title_statement_inclusive_dates',
			'marc_title_statement_bulk_dates',
			'marc_title_statement_medium',
			'marc_title_work_section_name',
			'marc_title_work_section_number',
			'marc_title_form',
			'marc_title_statement_version',
			'isbd_title_other_info',
			'marc_title_format',
			],
		}
	});

	cmdCreate('title_statement_extend_serial',{			action: 'extend',
			opts:{
			  label:'title',
				primary:'title_simple',
				commands:[
				'title_simple',
				//'title',
				'marc_title_statement_remainder',
				'marc_title_statement_responsibility',
				'marc_title_statement_inclusive_dates',
				'marc_title_statement_bulk_dates',
				'marc_title_statement_medium',
				'marc_title_work_section_name',
				'marc_title_work_section_number',
				'marc_title_form',
				'marc_title_statement_version',
				'isbd_title_other_info',
				'issue',
				'marc_title_format',
				],
			}
		});



	cmdCreate('marc_title_statement_remainder',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'marc:title-statement:remainder',
			'label' : 'title remainder',
			'autocomplete_url' : '/ws/archive/search-subtitle',
			check_value_exists:true,
			'unique_parent_key':'marc:title-statement:title',
			// //width:659,
			// //skip_on_empty:true,
			// lang_select:{
					// default_lang:language_default,
					// available_languages: languages_avail,
			// },
		})
	});


 // marc:title-statement:remainder
 // marc:title-statement:responsibility
 // marc:title-statement:inclusive-dates
 // marc:title-statement:bulk-dates
 // marc:title-statement:medium
 // marc:title-statement:work-section-number
 // marc:title-statement:work-section-name
 // marc:title-statement:version


	cmdCreate('title_simple',{
			action : 'setupField',
			opts : jQuery.extend({},opts_text,{
				key : 'marc:title-statement:title',
				label : 'title',
				autocomplete_url : '/ws/archive/search-title',
				check_value_exists:true,
			})
		});

	cmdCreate('marc_title_statement_responsibility',{
			action : 'setupField',
			opts : jQuery.extend({},opts_text,{
				key : 'marc:title-statement:responsibility',
				label : 'Responsibility',
				check_value_exists:true,
			})
	});

	cmdCreate('marc_title_statement_inclusive_dates',{
			action : 'setupField',
			opts : jQuery.extend({},opts_text,{
				key : 'marc:title-statement:inclusive-dates',
				label : 'Inclusive dates',
				//check_value_exists:true,
			})
	});
	cmdCreate('marc_title_statement_bulk_dates',{
			action : 'setupField',
			opts : jQuery.extend({},opts_text,{
				key : 'marc:title-statement:bulk-dates',
				label : 'Bulk dates',
				//check_value_exists:true,
			})
	});
	cmdCreate('marc_title_statement_medium',{
			action : 'setupField',
			opts : jQuery.extend({},opts_text,{
				key : 'marc:title-statement:medium',
				label : 'Medium',
				//check_value_exists:true,
			})
	});
	cmdCreate('marc_title_statement_version',{
			action : 'setupField',
			opts : jQuery.extend({},opts_text,{
				key : 'marc:title-statement:version',
				label : 'Version',
				//check_value_exists:true,
			})
	});

	cmdCreate('marc_title_work_section_name',{
			action : 'setupField',
			opts : jQuery.extend({},opts_text,{
				key : 'marc:title-statement:work-section-name',
				label : 'name of part of a work',
				add_button : true,
				add_button_first : false,
				add_button_br : true,
				add_button_label : 'add',
				br_each : true,
				br_first : false,
				one_label: true,
				skip_on_empty:false,
				//check_value_exists:true,
			})
	});

	cmdCreate('marc_title_work_section_number',{
			action : 'setupField',
			opts : jQuery.extend({},opts_text,{
				key : 'marc:title-statement:work-section-number',
				label : 'number of part of a work',
				add_button : true,
				add_button_first : false,
				add_button_br : true,
				add_button_label : 'add',
				br_each : true,
				br_first : false,
				one_label: true,
				skip_on_empty:false,
				//check_value_exists:true,
			})
	});

	cmdCreate('marc_title_form',{
			action : 'setupField',
			opts : jQuery.extend({},opts_text,{
				key : 'marc:title-statement:form',
				label : 'form',
				add_button : true,
				add_button_first : false,
				add_button_br : true,
				add_button_label : 'add',
				br_each : true,
				br_first : false,
				one_label: true,
				skip_on_empty:false,

				//check_value_exists:true,
			})
	});

	cmdCreate('marc_title_format',{
			action : 'setupField',
			opts : jQuery.extend({},opts_text,{
				key : 'marc:title-statement:format-formula',
				label : 'format',
				//check_value_exists:true,
			})
	});

	cmdCreate('isbd_title_other_info',{
			action : 'setupField',
			opts : jQuery.extend({},opts_text,{
				key : 'isbd:title:other-info',
				label : 'other-info',
				//check_value_exists:true,
			})
	});


// $a - Title (NR)
// $b - Remainder of title (NR)
// $c - Statement of responsibility, etc. (NR)
// $f - Inclusive dates (NR)
// $g - Bulk dates (NR)
// $h - Medium (NR)	$k - Form (R)
// $n - Number of part/section of a work (R)
// $p - Name of part/section of a work (R)


	// commands.title_statement_info',{
			// action : 'setupField',
			// opts : jQuery.extend({},opts_text,{
				// key : 'marc:title-uniform:info',
				// label : 'info',
				// check_value_exists:true,
			// })
	//});




////////////////////////////////////
// ARTIFACT
////////////////////////////////////

// const ea_sn_prefix = 'ea:sn:prefix';
// const ea_sn_suffix = 'ea:sn:suffix';

cmdCreate('sn_prefix',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:sn:prefix',
			'label' : 'sn',
			//'autocomplete_url' : '/ws/archive/search-subtitle',
			check_value_exists:true,
			'float':'left',
			width:'80px',
			'clear':'left',
		})
	});

cmdCreate('sn_prefix_2',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:sn:prefix',
			'label' : 'sn',
			//'autocomplete_url' : '/ws/archive/search-subtitle',
			check_value_exists:true,
			'float':'left',
			width:'80px',
			'clear':'left',
			background_color:'pink',
		})
	});

cmdCreate('sn_suffix',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:sn:suffix',
			'label' : '',
			//'autocomplete_url' : '/ws/archive/search-subtitle',
			check_value_exists:true,
			'float':'left',
			'clear':'right',
			width:'80px',
			'label-width':'1px',
			//display_label:false,
		})
	});

		cmdCreate('date_insert',{
		action : 'setupField',
		opts : {
			'key' : 'ea:date:orgissued',
			'label' : key_labels['ea:date:insert'],
			'type' : 'date',
			'show_help' : true,
//			'clear':'left',
//			prescribed_select:true,
		}
	});




cmdCreate('call_number_part_a',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:call_number:part-a',
			'label' : 'call number',
			//'autocomplete_url' : '/ws/archive/search-subtitle',
			check_value_exists:true,
			'float':'left',
			width:'80px',
			'clear':'left',
			background_color:'pink',
		})
	});

cmdCreate('call_number_ddc',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:call_number:ddc',
			'label' : '',
			//'autocomplete_url' : '/ws/archive/search-subtitle',
			check_value_exists:true,
			'float':'left',
			width:'80px',
			'label-width':'1px',
			background_color:'pink',
			//display_label:false,
		})
	});

cmdCreate('call_number_part_c',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:call_number:part-c',
			'label' : '',
			//'autocomplete_url' : '/ws/archive/search-subtitle',
			check_value_exists:true,
			'float':'left',
			'clear':'right',
			width:'80px',
			'label-width':'1px',
			background_color:'pink',
			//display_label:false,
		})
	});
cmdCreate('call_number_part_d',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:call_number:part-d',
			'label' : '',
			//'autocomplete_url' : '/ws/archive/search-subtitle',
			check_value_exists:true,
			'float':'left',
			'clear':'right',
			width:'80px',
			'label-width':'1px',
			//display_label:false,
		})
	});




// const ea_call_number_prefix = 'ea:call_number:prefix';
	// const ea_call_number_main = 'ea:call_number:main';
	// const ea_call_number_suffix = 'ea:call_number:suffix';

cmdCreate('call_number_prefix',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:call_number:prefix',
			'label' : 'call number',
			//'autocomplete_url' : '/ws/archive/search-subtitle',
			check_value_exists:true,
			'float':'left',
			width:'80px',
			'clear':'left',
			background_color:'pink',
		})
	});

cmdCreate('call_number_main',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:call_number:main',
			'label' : '',
			//'autocomplete_url' : '/ws/archive/search-subtitle',
			check_value_exists:true,
			'float':'left',
			width:'80px',
			'label-width':'1px',
			//display_label:false,
		})
	});

cmdCreate('call_number_suffix',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:call_number:suffix',
			'label' : '',
			//'autocomplete_url' : '/ws/archive/search-subtitle',
			check_value_exists:true,
			'float':'left',
			'clear':'right',
			width:'80px',
			'label-width':'1px',
			//display_label:false,
		})
	});



	cmdCreate('dimensions_3',{
		action : 'setupField',
		opts : {
			'key' : 'dimensions_extent',
			'label' : 'Dimensions',
			'type' : 'text',
			'show_help' : true,
			//'width':500,
			//'float':'left',
			'clear':'left',
			//'label-width':90,
			extend:true,
			extend_command: 'dimensions_2_extend',
		}
	});



// const ea_material_type = 'ea:material:type';
	// const ea_artifact_location = 'ea:artifact:location';
	// const ea_owner = 'ea:owner';

//	cmdCreate('material_type',{
//		action : 'setupField',
//		opts : jQuery.extend({},opts_text,{
//			'key' : 'ea:material:type',
//			'label' : 'material type',
//			check_value_exists:true,
//			'clear':'left',
//		})
//	});

	cmdCreate('artifact_location',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:artifact:location',
			'label' : 'location',
			//'autocomplete_url' : '/ws/archive/search-subtitle',
			check_value_exists:true,
			'clear':'left',
		})
	});

//tmp:parent_item_label:
	cmdCreate('artifact_parent_item_label',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			//'key' : 'tmp:parent_item_label:',
			//'key' : 'ea:artifact-of:',
			'key' : 'ea:artifact-of:primary',
			'label' : key_labels['ea:item:parent_item'],//'parent item',
			'read_only':true,
			//'autocomplete_url' : '/ws/archive/search-subtitle',
			//check_value_exists:true,
			'clear':'left',
			'display_inferred':true,
		})
	});

cmdCreate('owner',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:owner:',
			'label' : 'owner',
			//'autocomplete_url' : '/ws/archive/search-subtitle',
			check_value_exists:true,
			'clear':'left',
		})
	});

cmdCreate('artifact_status',{
			action : 'setupField',
			opts : {
				key : 'ea:artifact:status',
				label : 'status',
				type : 'select',
				select_values:{
					'available':'available',
					'non-available':'non-available',
				},
				read_only:false,
				show_help : false,
				width:'120px',
			}
		});





///////////////////////////////////////////////////
//// MANUSCRIPTS
///////////////////////////////////////////////////





//den pezi sosta..
cmdCreate('header_manuscript_works_with_add',{
		action:'addSection',
		opts:{
		skey: 'works',
			set_container: true,
			label:'Works',
			level:2,
			//KOUMPI ADD WORK
			add_button:true,
			add_button_right:'0px',
			status:'open',
			'click_handler': function(e){
				 console.log("MA WORK CLICK HANDLER");
					e.preventDefault();
					e.stopImmediatePropagation();
					var h = jQuery(this).closest('.hsection').data('arc_section').show();
					fc.createFieldModel('ea:work:',null,null);
					fc._renderForm();
			},

			extend_button : true,
			extend_button_right:'30px',
			extend_button_label: 'connect',
			extend_buttons:[
							{ text:'ok',     id:'b_w1',},
							//{ text:'new',    id:'b_w2',},
							{ text:'cancel', id:'b_w3',},
							{ text:'remove', id:'b_w4',},
							{ text:'close',  id:'b_w5',},
						],
			extend_position:{ my: "center top", at: "center top" },
			extend_command:'work_search_dialog',
			extend_key: 'ea:work:',

		 }
	});

cmdCreate('header_manuscript_work',{
  		action:'addSectionExt',
  		opts:{
  			skey: 'work',
  			add_empty:false,
				skip_on_empty:false,
  			key: 'ea:work:',
  			set_container: false,
	  		command:'work_manuscript_extend',
  			label:'Work',
  			level:3,
				add_button_expand:true,
  		}
	});


cmdCreate('demo1',{
		action : 'setupField',
		opts : {
			key : 'ea:place:See',
			label : 'DEMO',
			type : 'text',
			show_help : false,
			add_button:true,
			one_label:true,
			repeat_style : 'ordered',
			autocomplete_fn : 'subjects',
			autocomplete_url : '/ws/archive/search-terms',
			check_value_exists:true,
			width : '270px',
		}
	});


//@DocGroup(module="actor", group="js", comment="contributor form command")
cmdCreate('contributors_all',{
		action : 'setupField',
		opts : {
			'dev-comment':' function setupOptions',
			type : 'text',
			setupOptions: function(options){
				options.select_key_map= author_type_map;
				//options.key =contributor_keys;
				return options;
			},
			//select_key_map:commands.author_type_map,
			select_key_width:'160px',
			show_help : true,
			//autocomplete_url : '/ws/archive/search-author',
			add_button : true,
			add_button_first : false,
			add_button_br : true,
			add_button_label : 'add',
			br_each : true,
			br_first : false,
			one_label: true,
			skip_on_empty:true,
			width:518,
			no_label:false,
			extend:true,
			has_ref_disable:true,
			read_only:true,
			extend_buttons:[
			  { text:'create',     id:'b_d7',},
				{ text:'ok',     id:'b_d1',},
				{ text:'New',    id:'b_d2',},
				{ text:'cancel', id:'b_d3',},
				{ text:'remove', id:'b_d4',},
				{ text:'close',  id:'b_d5',},
			],
			//extend_buttons_cardinality:3,
			extend_position:{ my: "center top", at: "center top" },
			//key :commands.contributor_keys,
			 // [
			// 'dc:contributor:author',
			// 'ea:contributor:responsible',
			// 'ea:contributor:editor',
			// 'dc:contributor:editor',
			// 'ea:contributor:translator',
			// 'dc:contributor:illustrator',
			// 'dc:contributor:advisor',
			// 'dc:contributor:other',
			// ],
			label:'Contributor',
			//extend_command:'contributor_search_dialog',
			 extend_punctuation : '{{v}}\
{{#ea:title:specific}}[{{v}}]{{/ea:title:specific}}',
			extend_command:{
			 'dc:contributor:author':'contributor_search_dialog',
			 'dc:contributor:illustrator':'contributor_search_dialog',
			 'ea:contributor:responsible':'contributor_search_dialog',
			 'ea:contributor:editor':'contributor_search_dialog',
			 'dc:contributor:editor':'contributor_search_dialog',
       'ea:contributor:translator':'contributor_search_dialog',
       'dc:contributor:advisor':'contributor_search_dialog',
       'dc:contributor:other':'contributor_search_dialog',
			 }


			// lang_select:{
				 // default_lang:language_default,
				 // available_languages: languages_avail,
			// },
				//prescribed_select : true,

			}
	});


cmdCreate('contributor_search',{
	action : 'setupField',
	opts : {
		'key' : 'tmp:contributor:search',
		'label' : null,
		'type' : 'contributor_search',
		'show_help' : true,
		'create_button':'#b_d7',
		'ok_button':'#b_d1',
		'new_button':{
			'actor':'#b_d2',
		},
		'cancel_button':'#b_d3',
		'remove_button':'#b_d4',
		'close_button':'#b_d5',
//		'select_command': 'contributor_openWindow',
		'select_command': {
			'actor':'contributor_extend',
		},
		'display_handler':createDisplayItem('name:','other-name:'),
	}
});

//cmdCreate('hidden_trn_options_family',{
//		action : 'setupField',
//		opts : {
//			type : 'hidden',
//			key : 'trn:options:',
//			value: 'properties',
//			properties: {
//				'title_key':'dc:contributor:author',
//				'object-type':'auth-family'
//			},
//		}
//	});



/* InputContributorSearch  06 */





cmdCreate('title_specific',{
		action : 'setupField',
		opts : {
		'type' : 'text',
		'show_help' : true,
		'key' : 'ea:title:specific',
		'label' : 'title specific',
		}
	});


cmdCreate('title_specific_work',{
	action : 'setupField',
  opts : jQuery.extend({},commands.title_specific.opts,{
  	'label' : key_labels['work_title_specific'],
  })
});

cmdCreate('title_specific_contributor',{
	action : 'setupField',
  opts : jQuery.extend({},commands.title_specific.opts,{
  	'label' : key_labels['contributor_title_specific'],
  	'show_help' : true,
  })
});

cmdCreate('note',{
	action : 'setupField',
  opts : jQuery.extend({},commands.title_specific.opts,{
  	'label' : key_labels['note'],
  	'show_help' : true,
  })
});

cmdCreate('relation_note',{
	action : 'setupField',
  opts : {
  	'type' : 'text',
  	'key' : 'ea:relation_note:',
  	'label' : key_labels['relation_note'],
  	'show_help' : true,
  }
});

cmdCreate('title_specific_place',{
	action : 'setupField',
  opts : jQuery.extend({},commands.title_specific.opts,{
  	'label' : key_labels['place_title_specific'],
  })
});

cmdCreate('title_specific_digital_item',{
	action : 'setupField',
  opts : jQuery.extend({},commands.title_specific.opts,{
  	'label' : key_labels['note_public'],
  })
});




cmdCreate('citation',{
	action : 'setupField',
	opts : {
	'type' : 'text',
	'show_help' : true,
	'key' : 'ea:citation:',
	'label' : key_labels['citation'],
	'strip_html' :true,
	'extend':true,
	'extend_command': 'citation_extend',
	'extend_punctuation':'{{{v}}}',
	}
});


cmdCreate('citation_extend',{
  action: 'extend',
  opts:{
    label: key_labels['citation'],
    primary: 'citation_editor',
    commands:['citation_editor',],
  }
});


cmdCreate('citation_editor',{
  action : 'setupField',
  opts : jQuery.extend({},opts_textarea,{
    'key' : 'ea:citation:',
    'label':key_labels['citation'],
    'default_edit_type':'html',
  })
});




cmdCreate('number_of_page',{
	action : 'setupField',
	opts : {
	'type' : 'text',
	'show_help' : true,
	'key' : 'ea:periodic_publication:number_of_page',
	'label' : key_labels['number_of_page'],
	}
});


cmdCreate('hidden_obj_type_person',{
		action : 'setupField',
		opts : {
			type : 'hidden',
			key : 'ea:obj-type:',
			value: 'auth-person',
		}
	});

	cmdCreate('hidden_obj_type_family',{
			action : 'setupField',
			opts : {
				type : 'hidden',
				key : 'ea:obj-type:',
				value: 'auth-family',
			}
		});

	cmdCreate('hidden_obj_type_organization',{
			action : 'setupField',
			opts : {
				type : 'hidden',
				key : 'ea:obj-type:',
				value: 'auth-organization',
			}
		});

	cmdCreate('hidden_obj_type_work',{
			action : 'setupField',
			opts : {
				type : 'hidden',
				key : 'ea:obj-type:',
				value: 'auth-work',
			}
		});

	cmdCreate('hidden_obj_type_place',{
			action : 'setupField',
			opts : {
				type : 'hidden',
				key : 'ea:obj-type:',
				value: 'auth-place',
			}
		});

	cmdCreate('hidden_obj_type_concept',{
			action : 'setupField',
			opts : {
				type : 'hidden',
				key : 'ea:obj-type:',
				value: 'auth-concept',
			}
		});

	cmdCreate('hidden_obj_type_object_collection',{
			action : 'setupField',
			opts : {
				type : 'hidden',
				key : 'ea:obj-type:',
				value: 'auth-object_collection',
			}
		});

	cmdCreate('hidden_obj_type_event',{
			action : 'setupField',
			opts : {
				type : 'hidden',
				key : 'ea:obj-type:',
				value: 'auth-event',
			}
		});

	cmdCreate('hidden_obj_type_genre',{
			action : 'setupField',
			opts : {
				type : 'hidden',
				key : 'ea:obj-type:',
				value: 'auth-genre',
			}
		});

	cmdCreate('hidden_obj_type_object',{
			action : 'setupField',
			opts : {
				type : 'hidden',
				key : 'ea:obj-type:',
				value: 'auth-object',
			}
		});

	cmdCreate('hidden_obj_type_general',{
			action : 'setupField',
			opts : {
				type : 'hidden',
				key : 'ea:obj-type:',
				value: 'auth-general',
			}
		});


	cmdCreate('hidden_obj_type_subject_chain',{
		action : 'setupField',
		opts : {
			type : 'hidden',
			key : 'ea:obj-type:',
			value: 'subject-chain',
		}
	});


	cmdCreate('hidden_obj_type_digital_item',{
		action : 'setupField',
		opts : {
			type : 'hidden',
			key : 'ea:obj-type:',
			value: 'digital-item',
		}
	});


	cmdCreate('hidden_obj_type_physical_item',{
		action : 'setupField',
		opts : {
			type : 'hidden',
			key : 'ea:obj-type:',
			value: 'physical-item',
		}
	});


	cmdCreate('subject_title',{
			action : 'setupField',
			opts : {
		    'key' : 'ea:subj:title',
	      'label':key_labels['ea:subj:title'],
	      'show_help' : true,

			}
		});

	cmdCreate('extend_header_status',{
			action:'addSection',
			opts:{
				id:'sect_status',
				skey:'status_extend',
				label:'Status',
				level:1,
			}
	});

	cmdCreate('extend_header_public',{
			action:'addSection',
			opts:{
				skey:'public_extend',
				label:'PUBLIC',
				level:1,
			}
	});

	cmdCreate('extend_header_private',{
			action:'addSection',
			opts:{
				skey:'private_extend',
				label:'PRIVATE',
				level:1,
			}
	});

	cmdCreate('hidden_label',{
		action : 'setupField',
		opts : {
			type : 'hidden',
			key : 'ea:label:',
			value: 'empty',
		}
	});


	cmdCreate('hidden_manif_lang',{
		action : 'setupField',
		opts : {
			type : 'hidden',
			key : 'ea:manif:lang',
			value: 'empty',
		}
	});


	cmdCreate('hidden_deprecated_id',{
		action : 'setupField',
		opts : {
			type : 'hidden',
			key : 'ea:deprecated:id',
			value: 'empty',
		}
	});

	cmdCreate('relation_date_start',{
		action : 'setupField',
		opts : {
			'key' : 'ea:relation:DateStart',
			'label' : key_labels['ea:date:start'],
			'type' : 'date',
			'show_help' : true,
			'width':'435px',
		}
	});

	cmdCreate('relation_date_end',{
		action : 'setupField',
		opts : {
			'key' : 'ea:relation:DateEnd',
			'label' : key_labels['ea:date:end'],
			'type' : 'date',
			'show_help' : true,
			'width':'435px',
		}
	});

	cmdCreate('relation_comment',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:relation:Comment',
      'label':key_labels['ea:relation:Comment'],
    })
	});


cmdCreate('validate_subjects', {
	action: 'addValidateFunction',
	opts: {
		fnKey: 'validate_subjects',
		/** @this FormControler */
		fn: function () {
			var fc = this;
			var msgContext = fc.msgContext;
			var subjects = fc.getFieldModelsByKey('ea:subj:');
			console.log(subjects);
			for (var i in subjects) {
				/** @type FieldModel */
				var subject = subjects[i];
				var id = subject.id();
				var childs = fc.getFieldModels(null,id);
				if (subject.isEmpty() && childs.length == 0) {
					console.log("REMOVE SUBJECT ",id,subject.key(),subject.value(),subject.link(),subject);
					fc.removeModelsTree(id);
					fc.removeModel(id);
				} else {
					// console.log("S0", id);
					// console.log("S1", subject);
					// console.log('childs',childs);
					for( var j in childs){
						var sc = childs[j];
						if (sc.key().startsWith('ea:subj:') && sc.value() != null && ! sc.refItem()){
							console.log("ERROR# " + sc.key() + ' # ' + sc.value() + ' # ' + sc.id()) ;
							//alert(sc.id() + ' # ' + sc.key()  + '  #  ' + sc.value());
							msgContext.addError('subject is not connected: ' + sc.value());
						} else {
							//console.log("OK   # " + sc.key() + ' # ' + sc.value() + ' # ' + sc.id()) ;
						}
					}
				}
			}
		},
	}
});

