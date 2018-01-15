var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'auth-expression.js');

/**********************************************/
/**********  Header Expres Public *************/
/**********************************************/
cmdCreate('header_expression_public',{
	action:'addSection',

		opts : jQuery.extend({},commands.header_type.opts,{
		id:'sect_manif_public',
		skey:'sect_manif_public',
		label:key_labels['expression_header_public'],
		class:'sect_expres_level_1',
		level:1,
	})
});


/**********************************************/
/**********  Header Expres Control ************/
/**********************************************/
cmdCreate('header_expression_control_open',{
	action:'addSection',
	opts:{
		'label':key_labels['expression_header_Control'],
		class:'sect_expres_level_2',
		level:2,
	}
});


/**********************************************/
/***********  Header Expression ***************/
/**********************************************/
cmdCreate('header_sect_expression',{
    action:'addSection',
    opts:{
      skey:'sect_expression',
      label:key_labels['ea:expression:Header'],
      class:'sect_expres_level_2',
      level:2,
    }
});


/**********************************************/
/****  Header Relation Expression-Work ********/
/**********************************************/
cmdCreate('header_sect_relation_expression',{
    action:'addSection',
    opts:{
      skey:'header_sect_relation_expression',
      label:key_labels['ea:expression:Header_Relation_Expression'],
      class:'sect_expres_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/*******  Header Expression Basic *************/
/**********************************************/
cmdCreate('header_sect_expres_basic',{
    action:'addSection',
    opts:{
      skey:'sect_expres_basic',
      label:key_labels['ea:expres:Header_Basic'],
      class:'sect_expres_level_2',
      level:2,
      add_button_advanced:true,
      add_button_advanced_label:key_labels['advanced_fields'],
    }
});


/**********************************************/
/****  Header Expression Specific Fields ******/
/**********************************************/
cmdCreate('header_sect_expres_information',{
    action:'addSection',
    opts:{
      skey:'header_sect_expres_information',
      label:key_labels['ea:expres:Header_Information'],
      class:'sect_expres_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/****  Header Expression Specific Fields ******/
/**********************************************/
cmdCreate('header_sect_expres_specific',{
    action:'addSection',
    opts:{
      skey:'header_sect_expres_specific',
      label:key_labels['ea:expres:Header_Specific'],
      class:'sect_expres_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/*******  Header Expression Contributors ******/
/**********************************************/
cmdCreate('header_sect_expres_contributors',{
    action:'addSection',
    opts:{
      skey:'header_sect_expres_contributors',
      label:key_labels['ea:expres:Header_Contributors'],
      class:'sect_expres_level_2',
      level:2,
    }
});


/**********************************************/
/********  Header Expression Subject **********/
/**********************************************/
cmdCreate('header_sect_expres_subjects',{
    action:'addSection',
    opts:{
      skey:'header_sect_expres_subjects',
      label:key_labels['ea:expres:Header_Subjects'],
      class:'sect_expres_level_2',
      level:2,
      status:'closed',
    }
});

/*********************************************************/
/***  Header  Work/Expression contained ******************/
/*********************************************************/
cmdCreate('header_sect_work_expression',{
    action:'addSection',
    opts:{
      skey:'header_sect_work_expression',
      label:key_labels['ea:manif:Header_Work_Expression'],
      "class":'sect_expres_level_2',
      level:2,
    }
});

/**********************************************/
/**********  Header Expres Status *************/
/**********************************************/
cmdCreate('header_expression_status',{
	action:'addSection',
	opts:{
		id:'sect_expres_status',
		skey:'sect_expres_status',
		label:key_labels['status_expression'],
		class:'sect_expres_level_2',
		level:2,
		status:'closed',
	}
});


/* ******************************************************************************* */
/*****************************************************/
/********** Extented Header Expres Public ************/
/*****************************************************/
cmdCreate('header_expression_public_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_expression_public.opts,{
		skey:'sect_expression_public_extented',
	  width: 898,
	  add_button:false,
	})
});


/**********************************************/
/***  Extented Header Expression Basic ********/
/**********************************************/
cmdCreate('header_sect_expres_basic_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_sect_expres_basic.opts,{
		skey:'sect_expression_basic_extented',
	})
});


/**********************************************/
/**  Extented Header Expres Specific Fields ***/
/**********************************************/
cmdCreate('header_sect_expres_specific_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_sect_expres_specific.opts,{
		skey:'sect_expression_specific_extented',
	})
});


/**********************************************/
/**  Extented Header Expression Information ***/
/**********************************************/
cmdCreate('header_sect_expres_information_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_sect_expres_information.opts,{
		skey:'sect_expression_information_extented',
	})
});


/**************************************************/
/***  Extented Header Work/Expression contained ***/
/**************************************************/
cmdCreate('header_sect_work_expression_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_sect_work_expression.opts,{
		skey:'sect_expression_work_expression_extented',
	})
});


/**********************************************/
/*******  Extented Header Expres Status *******/
/**********************************************/
cmdCreate('header_expression_status_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_expression_status.opts,{
		skey:'sect_expression_expression_status_extented',
    class:'sect_expres_level_1',
    level:1,
	})
});
/* ******************************************************************************* */


/**********************************************/
/**********  express_title        *************/
/**********************************************/
cmdCreate('express_title',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'dc:title:',
      'label':key_labels['ea:expres:title'],
    })
});



/****************************************************/
/**************  expresForm *************************/
/****************************************************/

cmdCreate('expres_form',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
		  'key' : 'ea:expres:Form',
		  'label' : key_labels['ea:expres:Form'],
		  'show_help' : true,
		  'advanced_field': true,
		})
});



///////////////////  expres Content  /////////////////
cmdCreate('expres_content',{
  action : 'setupField',
  opts : jQuery.extend({},opts_text,{
    'key': 'ea:expres:Content',
    'label' : key_labels['ea:expres:Content'],
    'show_help': true,
    'type' : 'select',
    'width': '650',
    'select_values':content_type_map,
  })
});


//////////////////  expres Dates ////////////////////
			cmdCreate('expres_date',{
			    action : 'setupField',
			    opts : jQuery.extend({},opts_text,{
			      key:'ea:expres:Dates',
			      label:key_labels['ea:expres:Dates'],
			      type : 'date',
			      show_help : true,
			      one_label: true,
			      width:"435px",
			      })
});


//////////////////  expres Language //////////////////
	cmdCreate('expres_language',{
		action : 'setupField',
		opts : jQuery.extend({},opts_multy_text,{
			'key' : 'ea:expres:Language',
			'label':key_labels['ea:expres:Language'],
			type : 'select',
			select_values: language_map,
			repeat_style : 'ordered',
		})
});


/////////////////  expres NoteContent /////////////////
				cmdCreate('expres_note_content',{
							 action : 'setupField',
							 opts : jQuery.extend({},opts_multy_text,{
							    'key' : 'ea:expres:Note_Content',
							    'label' : key_labels['SummaryofContent'],
							    'show_help' : true,
							    repeat_style : 'ordered',
							 })
});


/****************************************************/
/*****************  expresVersion *******************/
/****************************************************/

			cmdCreate('expres_version',{
			    action : 'setupField',
			    opts : jQuery.extend({},opts_multy_text,{
			      'key' : 'ea:expres:Version',
			      'label' : key_labels['ea:expres:Version'],
			      'show_help' : true,
			      repeat_style: 'ordered',
			    })
});




/****************************************************/
/***************  expresFrequency *******************/
/****************************************************/

			cmdCreate('expres_frequency',{
									action : 'setupField',
									opts : jQuery.extend({},opts_multy_text,{
										setupOptions: function(options){
											options.select_key_map= expres_frequency_map;
											return options;
										},
										label : key_labels['ea:expres:Frequency'],
										select_key_width:'240px',
										type : 'date',
										width:'192',
										show_help : true,
										repeat_style: 'ordered',
									})
});


/****************************************************/
/*************  expresNotatedMusic ******************/
/****************************************************/

			cmdCreate('expres_note_music',{
									 action : 'setupField',
									 opts : jQuery.extend({},opts_text,{
											'key' : 'ea:expres:Notated_Music',
											'label' : key_labels['ea:expres:Notated_Music'],
											'show_help' : true,
										})
});

/****************************************************/
/************  expresComputerCharacter **************/
/****************************************************/

		 cmdCreate('expres_computer_character',{
										action : 'setupField',
										opts : jQuery.extend({},opts_text,{
												'key' : 'ea:expres:Computer_Character',
												'label' : key_labels['ea:expres:Computer_Character'],
												'show_help' : true,
									})
});

/****************************************************/
/*************  expresPlayingTime *******************/
/****************************************************/

		 cmdCreate('expres_playing_time',{
										action : 'setupField',
										opts : jQuery.extend({},opts_multy_text,{
												'key' : 'ea:expres:Playing_Time',
												'label' : key_labels['ea:expres:Playing_Time'],
												'show_help' : true,
												repeat_style : 'ordered',
											})
});


/****************************************************/
/**************  expresSymbology ********************/
/****************************************************/

		cmdCreate('expres_symbology',{
		    action : 'setupField',
		    opts : jQuery.extend({},opts_text,{
		      'key' : 'ea:expres:Symbology',
		      'label' : key_labels['ea:expres:Symbology'],
		      'show_help' : true,
		      'type' : 'select',
		      'width':'660',
		      'select_values':symbology_tactile_material_map,
		    })
});


/****************************************************/
/**************  expresScale ************************/
/****************************************************/

		cmdCreate('expres_computer_scale',{
				action : 'setupField',
				opts : jQuery.extend({},opts_text,{
					'key' : 'ea:expres:Scale',
					'label' : key_labels['ea:expres:Scale'],
					'show_help' : true,
					})
});


/****************************************************/
/*************  expresNoteSummary *******************/
/****************************************************/

			 cmdCreate('expres_note_summary',{
							 action : 'setupField',
							 opts : jQuery.extend({},opts_multy_text,{
									'key' : 'ea:expres:Note_Summary',
									'label' : key_labels['ea:expres:Note_Summary'],
									'show_help' : true,
									repeat_style : 'ordered',
								})
});

/****************************************************/
/*************  expresNoteCitation ******************/
/****************************************************/

			 cmdCreate('expres_note_citation',{
						action : 'setupField',
						opts : jQuery.extend({},opts_multy_text,{
											'key' : 'ea:expres:Note_Citation_Sourse',
											'label' : key_labels['ea:expres:Note_Citation'],
											extend : true,
											extend_command : 'expres_note_citation_extend',
											repeat_style : 'ordered',
											extend_punctuation : '{{v}}{{#ea:url:related}}. -Link: {{v}}{{/ea:url:related}}',
										})
});

				cmdCreate('expres_note_citation_extend',{
					    action: 'extend',
					    opts:{
					      label:key_labels['ea:expres:Note_Citation'],
					      primary:'expres_note_citation_sourse',
					      commands:['expres_note_citation_sourse','expres_note_citation_url'],
					    }
});

				cmdCreate('expres_note_citation_sourse',{
					    action : 'setupField',
					    opts : jQuery.extend({},opts_text,{
					      'key' : 'ea:expres:Note_Citation_Sourse',
					      'label':key_labels['ea:expres:Note_Citation_Sourse'],
					    })
});

				cmdCreate('expres_note_citation_url',{
				    action : 'setupField',
				    opts : jQuery.extend({},commands.url_rel.opts,{
				    	'repeat_style' : 'ordered',
				      'label':key_labels['ea:expres:Note_Citation_Url'],
				    })
});


/*************************************************/
/****************  expresURL *********************/
/*************************************************/
				cmdCreate('expres_url',{
				    action : 'setupField',
				    opts : jQuery.extend({},commands.url_rel.opts,{
				    	'repeat_style' : 'ordered',
				    	'key' : 'ea:expres:Url',
				      'label':key_labels['ea:expres:Url'],
				    })
});








cmdCreate('header_sect_expresion_works',{
	"action": "addSection",
	"opts": {
		"skey": "header_sect_expresion_works",
		"label": "Έργα του Expression",
		"level": 2
	}
});

cmdCreate('header_sect_expresion_manifs',{
	"action": "addSection",
	"opts": {
		"skey": "header_sect_expresion_manifs",
		"label": "Manifestations του Expression",
		class:'sect_expres_level_2',
		"level": 2
	}
});



cmdCreate.relation({
	'cmd_name' : 'works_of_expression',
	'key' : 'ea:expressionOf:',
	'label' : key_labels['ea:manif:Work'],
	'search_url' : '/prepo/ws/search-work',
	root_options : {
		"add_button" : true,
		"repeat_style" : "ordered",
	//  	width:"265px",
//		'set_value_ref_label':true,
	},

	//REMOTE VIEW OPTIONAL FIELDS
	//remote_view_type: 'generic',
	//remote_view_display_fields : [],
	//remote_view_exec_cmds: [],

// SINGLE OBJECT TYPE VALUES
//	'object_type':'auth-work',
//	'extend_primary_key':'dc:title:',
//	'extend_primary_label':'place term',
//	'new_button_label' : 'newX',
//	'extend_commands' : work_extend_commands,

//MULTIPLE OBJECT TYPE VALUES
	'object_type' : {
		'auth-work' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : 'work',
			'new_button_label' : 'new work',
			'extend_commands' : f_auth_work_extend,
		},
	},

});









