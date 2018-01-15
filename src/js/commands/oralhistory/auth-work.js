var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'auth-work.js');

/**********************************************/
/***********  Public Work  ********************/
/**********************************************/

//cmdCreate('header_public_work',{
//	action:'addSection',
//	opts:{
//		skey:'public',
//		label:key_labels['public'],
//		level:1,
//	}
//});

cmdCreate('header_public_work',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_type.opts,{
		label:key_labels['ea:work:Header'],
		class:'sect_work_level_1',
	})
});


/**********************************************/
/***********  Header Work Control *************/
/**********************************************/

cmdCreate('header_work_control_open',{
	action:'addSection',
  opts:{
    skey:'header_sect_work_control',
    label:key_labels['ea:work:Header_Control'],
    level:2,
    class:'sect_work_level_2',
  }
});


/**********************************************/
/***********  Header Work  ********************/
/**********************************************/
cmdCreate('header_sect_work',{
    action:'addSection',
    opts:{
      skey:'header_sect_work',
      label:key_labels['ea:work:Header'],
      class:'sect_work_level_2',
      level:2,
    }
});


/**********************************************/
/***********  Header Work Basic ***************/
/**********************************************/
cmdCreate('header_sect_work_basic',{
    action:'addSection',
    opts:{
      skey:'header_sect_work_basic',
      label:key_labels['ea:work:Header_Basic'],
      level:2,
      class:'sect_work_level_2',
      add_button_advanced:true,
      add_button_advanced_label:key_labels['advanced_fields'],

    }
});


/**********************************************/
/*********  Header Work Additional ************/
/**********************************************/
cmdCreate('header_sect_work_additional',{
    action:'addSection',
    opts:{
      skey:'header_sect_work_additional',
      label:key_labels['ea:work:Header_Additional'],
      level:2,
      class:'sect_work_level_2',
    }
});


/**********************************************/
/*********  Header Work Additional ************/
/**********************************************/
cmdCreate('header_sect_work_local',{
    action:'addSection',
    opts:{
      skey:'header_sect_work_local',
      label:key_labels['ea:work:Header_Local'],
      level:2,
      class:'sect_work_level_2',
      add_button_advanced:true,
      add_button_advanced_label:key_labels['advanced_fields'],
    }
});


/**********************************************/
/******  Header Work Information  *************/
/**********************************************/
cmdCreate('header_sect_work_information', {
    action:'addSection',
    opts:{
      skey:'header_sect_work_information',
      label:key_labels['ea:work:Header_Information'],
      class:'sect_work_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/**********  Header Work Contributors *********/
/**********************************************/
cmdCreate('header_sect_work_contributors', {
    action:'addSection',
    opts:{
      skey:'header_sect_work_contributors',
      label:key_labels['ea:work:Header_Contributors'],
      class:'sect_work_level_2',
      level:2,
    }
});


/**********************************************/
/**********  Header Work Subject **************/
/**********************************************/
cmdCreate('header_sect_work_subjects', {
    action:'addSection',
    opts:{
      skey:'header_sect_work_subjects',
      label:key_labels['ea:work:Header_Subjects'],
      class:'sect_work_level_3',
      level:3,
    }
});


/**********************************************/
/*******  Header Work Link ********************/
/**********************************************/
cmdCreate('header_sect_work_link',{
    action:'addSection',
    opts:{
      skey:'sect_work_link',
      label:key_labels['ea:work:Header_Link'],
      class:'sect_work_level_2',
      level:2,
      status:'closed',
    }
});


/***************************************************/
/** Header Work Classification / Cataloging ********/
/***************************************************/
cmdCreate('header_sect_work_cataloging',{
    action:'addSection',
    opts:{
      skey:'sect_work_cataloging',
      label:key_labels['ea:auth:Work_Header_Cataloging'],
      class:'sect_work_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/**********  Header Work Relation *************/
/**********************************************/
cmdCreate('header_sect_work_relation', {
    action:'addSection',
    opts:{
      skey:'header_sect_work_relation',
      label:key_labels['ea:work:Header_Relation'],
      class:'sect_work_level_2',
      level:2,
      status:'closed',
    }
});


/***********************************************/
/***********  Header Work Thumb  ***************/
/***********************************************/
cmdCreate('header_sect_work_thumb',{
    action:'addSection',
    opts:{
      skey:'header_sect_work_thumb',
      label:key_labels['ea:work:Header_Thumb'],
  		class:'sect_work_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/**********  Header Work Status ***************/
/**********************************************/
cmdCreate('header_work_status',{
	action:'addSection',
	opts:{
		id:'sect_status',
		skey:'status',
		label:key_labels['status_work'],
		class:'sect_work_level_2',
		level:2,
		status:'closed',
	}
});


/* ******************************************************************************* */

/***************************************************/
/********** Extented Header work Public ************/
/***************************************************/
cmdCreate('header_work_public_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_public_work.opts,{
		skey:'sect_work_public_extented',
	  width: 898,
	  add_button:false,
	})
});

/***************************************************/
/********* Extented Header work Control  ***********/
/***************************************************/

cmdCreate('header_work_control_open_extented',{
  "action": "addSection",
  opts : jQuery.extend({},commands.header_work_control_open.opts,{
    "skey": "sect_work_control_extented",
	})
});


/**********************************************/
/***********  Header Work Basic_extend ********/
/**********************************************/
cmdCreate('header_sect_work_basic_extend', {
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_work_basic.opts,{
      "skey": "sect_work_basic_extented",
  	})
});


/**********************************************/
/********  Header Work Additional_extend ******/
/**********************************************/
cmdCreate('header_sect_work_additional_extend',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_work_additional.opts,{
      "skey": "sect_work_additional_extented",
    })
});


/**********************************************/
/********  Header Work Local_extend ******/
/**********************************************/
cmdCreate('header_sect_work_local_extend',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_work_local.opts,{
      "skey": "sect_work_local_extented",
    })
});


/**********************************************/
/******  Header Work Information_extend  ******/
/**********************************************/
cmdCreate('header_sect_work_information_extend',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_work_information.opts,{
      "skey": "sect_work_information_extented",
  	})
});


/******************************************/
/******  Header Work Link_extend  *********/
/******************************************/
cmdCreate('header_sect_work_link_extend',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_work_link.opts,{
      "skey": "sect_work_link_extented",
  	})
});



/**********************************************/
/******  Header Work Link_extend  ******/
/**********************************************/
cmdCreate('header_sect_work_cataloging_extend',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_work_cataloging.opts,{
      "skey": "sect_work_cataloging_extented",
  	})
});


/**************************************************/
/********** Extented Header work Status ***********/
/**************************************************/
cmdCreate('header_work_status_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_work_status.opts,{
	  "skey": "sect_work_status_extented",
		class:'sect_work_level_1',
		level:1,
	})
});


/**********************************************/
/********  Header Work Contributors_extend ****/
/**********************************************/
cmdCreate('header_sect_work_contributors_extend', {
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_work_contributors.opts,{
  	  "skey": "sect_work_contributors_extented",
  	})
});

/* ******************************************************************************* */


/****************************************************/
/*********** Biographical WORK Data *****************/
/****************************************************/
cmdCreate('biographical_work_data',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:authBiographical:Data_Text',
      'label':key_labels['ea:authBiographical_Work:Data_Text'],
      'repeat_style' : 'ordered',
      'strip_html': true,
      extend:true,
      extend_command: 'biographical_work_data_extend',
      extend_punctuation:'{{{v}}}\
{{#ea:url:related}}{{#first}}. - Link:{{/first}} {{{v}}}{{^last}},{{/last}}{{/ea:url:related}}',
    	})
  });


cmdCreate('biographical_work_data_extend', {
    action: 'extend',
    opts:{
      label:key_labels['ea:authBiographical_Work:Data_Text'],
      primary:'biographical_work_data_simple',
      commands:['biographical_work_data_simple','url_rel',],
    }
  });


cmdCreate('biographical_work_data_simple', {
    action : 'setupField',
    opts : jQuery.extend({},opts_textarea,{
      'key' : 'ea:authBiographical:Data_Text',
      'label':key_labels['ea:authBiographical_Work:Data_Text'],
      'default_edit_type': 'html'
    })
  });





/**********************************************/
/**********  work_title_preferred *************/
/**********************************************/
cmdCreate('work_title_preferred',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'dc:title:',//'ea:work:Title_Preferred',
      'label':key_labels['ea:work:Title_Preferred'],
    })
  });


/**********************************************/
/**********  work_title_partNumber ************/
/**********************************************/
cmdCreate('work_title_partNumber', {
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:work:Title_PartNumber',
      'label':key_labels['ea:work:Title_PartNumber'],
      'show_help' : true,
      repeat_style : 'ordered',
      'advanced_field': true,
    })
  });

/**********************************************/
/**********  work_title_partName **************/
/**********************************************/
cmdCreate('work_title_partName', {
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:work:Title_PartName',
      'label':key_labels['ea:work:Title_PartName'],
      'show_help' : true,
      repeat_style : 'ordered',
      'advanced_field': true,
    })
  });


/**********************************************/
/****************  work_form ******************/
/**********************************************/
//cmdCreate('work_form', {
//    action : 'setupField',
//    opts : jQuery.extend({},opts_multy_text,{
//      'key' : 'ea:work:Form',
//      'label':key_labels['ea:work:Form'],
//      'show_help' : true,
//      repeat_style : 'ordered',
//      'advanced_field': true,
//    })
//  });

cmdCreate.relation({
	'cmd_name':'work_form',
	'object_type':'auth-genre',
	'key' : 'ea:work:Form',
	'label':key_labels['ea:work:Form'],
	'search_url':'/prepo/ws/search-subject-form',
	 'extend_commands' : f_auth_genre_extend,
	 'new_button_label' : 'new genre',
	 'extend_primary_label' : key_labels['ea:auth:Genre_Term'],
	 'advanced_field': true,
});


/**********************************************/
/****************  work_date ******************/
/**********************************************/
cmdCreate('work_date', {
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      key:'ea:work:Date',
      label:key_labels['ea:work:Date'],
      type : 'date',
      show_help : true,
      one_label: true,
      width:"435px",
      repeat_style : 'ordered',
      })
  });


/**********************************************/
/****************  work_place ******************/
/**********************************************/
//cmdCreate('work_place', {
//    action : 'setupField',
//    opts : jQuery.extend({},opts_multy_text,{
//      'key' : 'ea:work:Place',
//      'label':key_labels['ea:work:Place'],
//      'show_help' : true,
//      repeat_style : 'ordered',
//      'advanced_field': true,
//    })
//  });
cmdCreate.relation({
	'cmd_name':'work_place',
	'object_type':'auth-place',
	'key' : 'ea:work:Place',
  'label':key_labels['ea:work:Place'],
	'search_url':'/prepo/ws/search-place',
	'extend_commands' : f_auth_place_extend,
	'new_button_label' : 'new place',
	'extend_primary_label' : key_labels['ea:auth:Place_Term'],
  'show_help' : true,
  'repeat_style' : 'ordered',
	'add_button' : true,
  'advanced_field': true,
});


/****************************************************/
/***************** work_language ********************/
/****************************************************/
cmdCreate('work_language', {
		action : 'setupField',
		opts : jQuery.extend({},opts_multy_text,{
			'key' : 'ea:work:Language',
			'label':key_labels['ea:work:Language'],
			type : 'select',
			select_values: language_map,
			width: 650,
			'float':'left',
			repeat_style : 'ordered',
		})
	});


/****************************************************/
/*************** work TypologyWork ******************/
/****************************************************/
cmdCreate.relation({
	'cmd_name':'work_typology',
	'object_type':'auth-genre',
	'key' : 'ea:work:TypologyWork',
	'label':key_labels['ea:work:TypologyWork'],
	'search_url':'/prepo/ws/search-subject-form',
	 'extend_commands' : f_auth_genre_extend,
	 'new_button_label' : 'new genre',
	 'extend_primary_label' : key_labels['ea:auth:Genre_Term'],
});


/****************************************************/
/************ work PoliticalSupport *****************/
/****************************************************/
cmdCreate.relation({
	'cmd_name':'work_political_support',
	'object_type':'auth-genre',
	'key' : 'ea:work:PoliticalSupport',
	'label':key_labels['ea:work:PoliticalSupport'],
	'search_url':'/prepo/ws/search-subject-form',
	 'extend_commands' : f_auth_genre_extend,
	 'new_button_label' : 'new genre',
	 'extend_primary_label' : key_labels['ea:auth:Genre_Term'],
});


/**********************************************/
/************  work_Chronological  ************/
/**********************************************/
cmdCreate.relation({
	'cmd_name':'work_chronological',
	'object_type':'auth-event',
	'key' : 'ea:work:chronological',
  'label':key_labels['ea:work:chronological'],
	'search_url':'/prepo/ws/search-subject-event',
	'extend_commands' : f_auth_event_extend,
	'new_button_label' : 'new event',
	'extend_primary_label' : key_labels['ea:auth:Event_Term'],
  'show_help' : true,
  'repeat_style' : 'ordered',
	'add_button' : true,
});


/**********************************************/
/**************  work_Geographical ************/
/**********************************************/
cmdCreate.relation({
	'cmd_name':'work_geographical',
	'object_type':'auth-place',
	'key' : 'ea:work:geographical',
  'label':key_labels['ea:work:geographical'],
	'search_url':'/prepo/ws/search-place',
	'extend_commands' : f_auth_place_extend,
	'new_button_label' : 'new place',
	'extend_primary_label' : key_labels['ea:auth:Place_Term'],
  'show_help' : true,
  'repeat_style' : 'ordered',
	'add_button' : true,
});


/**********************************************/
/*************  work_SubjectCategory **********/
/**********************************************/
cmdCreate.relation({
	'cmd_name':'work_subject_category',
	'object_type':'auth-concept',
	'key' : 'ea:work:subjectCategory',
  'label':key_labels['ea:work:subjectCategory'],
	'search_url':'/prepo/ws/search-subject-concept',
	'extend_commands' : f_auth_concept_extend,
	'new_button_label' : 'new concept',
	'extend_primary_label' : key_labels['ea:auth:Concept_Term'],
  'show_help' : true,
  'repeat_style' : 'ordered',
	'add_button' : true,
});


/**********************************************/
/***************  work_version ****************/
/**********************************************/
cmdCreate('work_version', {
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:work:Version',
      'label':key_labels['ea:work:Version'],
      'show_help' : true,
      repeat_style : 'ordered',
      'advanced_field': true,
    })
  });


/**********************************************/
/***********  work_note_nonpublic *************/
/**********************************************/
cmdCreate('work_notenonpublic',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:work:noteNonpublic',
      'label':key_labels['ea:work:noteNonpublic'],
      'show_help' : true,
      repeat_style : 'ordered',
    })
  });


/**********************************************/
/***********  work_note_public ****************/
/**********************************************/
cmdCreate('work_notepublic',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:work:notePublic',
      'label':key_labels['ea:work:notePublic'],
      'show_help' : true,
      repeat_style : 'ordered',
    })
  });


/****************************************************/
/***********  work_biographical_data ****************/
/****************************************************/

cmdCreate('work_biographical_data', {
		action : 'setupField',
		opts : jQuery.extend({},opts_multy_text,{
							'key' : 'ea:work:biographicalData_Text',
							'label' : key_labels['ea:work:biographicalData_Text'],
							repeat_style : 'ordered',
							extend : true,
							extend_command : 'work_biographical_data_extend',
							extend_punctuation : '{{v}}{{#ea:work:biographicalData_URL}}{{#first}} - {{/first}}{{v}}{{^last}},{{/last}}{{/ea:work:biographicalData_URL}}',
						})
	});

cmdCreate('work_biographical_data_extend', {
    action: 'extend',
    opts:{
      label:key_labels['ea:work:biographicalData_Text'],
      primary:'work_biographical_data_text',
      commands:['work_biographical_data_text','work_biographical_data_url'],
    }
  });

cmdCreate('work_biographical_data_text', {
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:work:biographicalData_Text',
      'label':key_labels['ea:work:biographicalData_Text'],
      'show_help' : true,
    })
  });
cmdCreate('work_biographical_data_url', {
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:work:biographicalData_URL',
      'label':key_labels['ea:work:biographicalData_URL'],
      'show_help' : true,
      repeat_style : 'ordered',
    })
  });


/****************************************************/
/*****************  work_url_rel ********************/
/****************************************************/
cmdCreate('work_url_rel', {
		action : 'setupField',
		opts : jQuery.extend({},commands.url_rel.opts,{
			repeat_style : 'ordered',
			})
	});
















//****************************************************/
//****************************************************/
//****************************************************/

/**********************************************/
/**********  Header Work Manifestations *******/
/**********************************************/
cmdCreate('header_sect_work_manifestations',{
    action:'addSection',
    opts:{
      skey:'header_sect_work_manifestations',
      label:key_labels['ea:work:Header'],//key_labels['ea:work:Manifestations'],
      level:3,
    }
});



cmdCreate({
	'cmd_name':'sect_reverse_relations_expression',
  "action": "addSection",
  "opts": {
//    "id": "sect_status",
    "class":'sect_expres_level_1',
    "skey": 'sect_reverse_relations_expression',
    "label": key_labels['Expressions_of_Work'],
    "level": 1,
    //"status": "closed"
  }
});

cmdCreate({
	'cmd_name':'sect_reverse_relations_manifestation',
  "action": "addSection",
  "opts": {
//    "id": "sect_status",
  	"class": "sect_expres_level_1",
    "skey": 'sect_reverse_relations_manifestation',
    "label": key_labels['Manifestation_of_Work'],
    "level": 1,
    //"status": "closed"
  }
});


cmdCreate.relation({
 	'cmd_name' : 'reverse_expressionOf',
// 	'key':'reverse:ea:expressionOf:',
 	'key':'ea:expression:',
  'label': key_labels['ea:expression:Header'],
  'remove_button_flag':false,
  'display_inferred':true,
	 	root_options : {
   		"repeat_style" : "ordered",
   		"order_button" : false,
   		'skip_on_empty':true,
   		'set_value_ref_label':true,
	 	},
});
cmdCreate.relation({
 	'cmd_name' : 'reverse_work',
// 	'key':'reverse:ea:work:',
	'key':'ea:workOf:',
 	"label": key_labels['ea:manif:Header'],
 	'remove_button_flag':false,
 	'display_inferred':true,
	 	root_options : {
	 		'repeat_style' : "ordered",
   		'order_button' : false,
 	 		'skip_on_empty':true,
 	 		'set_value_ref_label':true,
	 	},
});


cmdCreate.relation({
                         	'cmd_name' : 'manifestations_all',

                         	'key' : 'ea:manifestation:tmp',
                        	"label": key_labels['ea:manif:Header'],
                         	'search_url' : '/prepo/ws/search-manifestation',
                         	root_options : {
                         		"add_button" : true,
                         		"repeat_style" : "ordered",
                         	//  	width:"265px",
                         	},

                         	//REMOTE VIEW OPTIONAL FIELDS
                         	//remote_view_type: 'generic',
                         	//remote_view_display_fields : [],
                         	//remote_view_exec_cmds: [],

                         // SINGLE OBJECT TYPE VALUES
                         	'object_type':'auth-manifestation',
                         	'extend_primary_key':'dc:title:',
                         	'extend_primary_label':'title',
                         	'new_button_label' : 'new',
                         	'extend_commands' : f_auth_manifestations_extend,

//                         //MULTIPLE OBJECT TYPE VALUES
//                         	'object_type' : {
//                         		'auth-work' : {
//                         			'extend_primary_key' : 'dc:title:',
//                         			'extend_primary_label' : 'work',
//                         			'new_button_label' : 'new work',
//                         			'extend_commands' : work_extend_commands,
//                         		},
//                         		'auth-expresion' : {
//                         			'extend_primary_key' : 'dc:title:',
//                         			'extend_primary_label' : 'expresion',
//                         			'new_button_label' : 'new expresion',
//                         			'extend_commands' : work_extend_commands,
//                         		}
//                         	},

 });







cmdCreate('header_sect_work_contributors_w',{
  "action": "addSection",
  "opts": {
    "skey": "header_sect_work_contributors_w",
    "label": "Work - Συντελεστές",
    "level": 3
  }
});



cmdCreate('header_sect_work_basic_w', {
  "action": "addSection",
  "opts": {
    "skey": "header_sect_work_basic_w",
    "label": "Work - Βασικά πεδία",
    "level": 2,
    "add_button_advanced": true,
    "add_button_advanced_label": "Εξειδικευμένα Πεδία"
  }
});


cmdCreate('header_sect_work_w', {
  "action": "addSection",
  "opts": {
    "skey": "header_sect_work_w",
    "label": "Work",
    "level": 1
  }
});


cmdCreate('header_sect_manifestation_contributors_w',
{
  "action": "addSection",
  "opts": {
    "skey": "header_sect_manifestation_contributors",
    //'use_current_container_as_root':true,//IMPORTAND
    "label": "Manifestation - Συντελεστές",
    "class":'sect_manif_level_2',
    "level": 2
  }
});


cmdCreate('header_sect_manifestation_title_w',{
  "action": "addSection",
  "opts": {
    "skey": "header_sect_manifestation_title_w",
    "class":'sect_manif_level_2',
    "level": 2,
    //'use_current_container_as_root':true,//IMPORTAND
    "label":key_labels['ea:manif:Header_Title'],
    "add_button_advanced": true,
    "add_button_advanced_label": key_labels['advanced_fields'],
  }
});



//cmdCreate('header_manifestation_sect =
//{
//  "action": "addSection",
//  "opts": {
//    "skey": 'manifestation_sect_add',
//    "label": 'manifestation',
//    "level": 3,
//    "set_container": true,
//    "status": "open",
//  }
//});
//
//
//cmdCreate('header_manifestation_work_statement =
//{
//  "action": "addSectionExt",
//  "opts": {
//    "skey": "work_manifestation_header",
//    "add_empty": true,
//    "skip_on_empty": false,
//    "key": "ea:manifestation:tmp",
//    "set_container": false,
//    "command": 'manifestation_work_extend',
//    "label": "manifestation",
//    "level": 4
//  }
//});

cmdCreate('header_work_manifestation_sect',
{
  "action": "addSectionExt",
  "opts": {
  	"class":'sect_manif_level_1',
    "skey": "header_work_manifestation_sect",
    "add_empty": true,
    "skip_on_empty": false,
    "key": "ea:manifestation:tmp",
    //"set_container": false,
    "set_container": true,
    "command": 'manifestation_work_extend',
    "label": key_labels['Add_Manifestation'],
    "class":'sect_manif_level_1',
    "level": 1,
    "status": "closed"

  }
});

/**************************************************/
/** Extented header work manifestation sect **********/
/**************************************************/
cmdCreate('header_work_manifestation_sect_extented',{
  action: "addSectionExt",
	opts : jQuery.extend({},commands.header_work_manifestation_sect.opts,{
	  "skey": "header_work_manifestation_sec_extented",
	})
});



cmdCreate('manifestation_work_extend',{
  "action": "extend",
  "opts": {
    "label": "manifestation",
    "primary": "manifestation_work_extend_primary",
    "commands_primary_is_ref": ['manifestation_work_extend_primary'],
    "commands": f_auth_manifestation_work
  }
});

cmdCreate('manifestation_work_extend_primary', {
  "action": "setupField",
  "opts": {
  	'create_subitem':true,
  	"type": "text",
    "show_help": true,
    "key": "dc:title:",
    "label": key_labels['ea:manif:Title_manif'],
    "clear": "left"
  }
});

cmdCreate('manifestation_work_extend_ot',{
  "action": "setupField",
  "opts": {
    "type": "hidden",
    "key": "ea:obj-type:",
    "value": "auth-manifestation"
  }
});



cmdCreate('hidden_obj_type_expression', {
  "action": "setupField",
  "opts": {
    "type": "hidden",
    "key": "ea:obj-type:",
    "value": "auth-expression"
  }
});


//cmdCreate('empty1',{
//  "action": "setupField",
//  "opts": {
//    "type": "empty",
//    "key": "tmp:empty1:",
//    'display_label':false,
//  }
//});

cmdCreate('empty1',{
  "action": "addHtml",
  "opts": {
  	'html':'<div style="height:20px"></div>',
  }
});


cmdCreate('empty2',{
  "action": "addHtml",
  "opts": {
  	'html':'<div style="height:120px"></div>',
  }
});



cmdCreate('z3950_search',{
  "action": "setupField",
  "opts": {
  	//'width':'500px',
    "type": "z3950",
    //'type':'text',
  	"key": "tmp:search:z3950",
    "label": "z39.50",
    "search_url": "/ws/prepo/z3950",
    "show_help": true,
    "search_button": "#b_w1",
    "close_button": "#b_w5",
    "ok_button": "#b_d1"
    }
});



cmdCreate('z3950',{
  "action": "extend",
  "opts": {
    "label": null,
    "primary": "z3950_search",
    "commands": [
      "z3950_search"
    ],
    "buttons": [
      {
        "text": "close",
        "id": "b_w5",
      },
      {
        "text": "ok",
        "id": "b_d1",
        "style": "display:none"
      }
    ]
  }
});



