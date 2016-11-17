var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'auth-manifestation.js');

/**********************************************/
/**********  Header Manif Public **************/
/**********************************************/
cmdCreate('header_manifestation_public',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_type.opts,{
		id:'sect_manif_public',
		skey:'sect_manif_public',
		label:key_labels['Header_Manifestation'],
		class:'sect_manif_level_1',
		level:1,
	})
});


/**********************************************/
/**********  Header Manif Control *************/
/**********************************************/
cmdCreate('header_manif_control_open',{
	action:'addSection',
	opts : {
		'label':key_labels['Header_Manifestation_Control'],
		class:'sect_manif_level_2',
		level:2,
	}
});


/**********************************************/
/*******  Header Manifestation Title **********/
/**********************************************/
cmdCreate('header_sect_manifestation_title',{
    action:'addSection',
    opts:{
      skey:'header_sect_manifestation_title',
      label:key_labels['ea:manif:Header_Title'],
      "class":'sect_manif_level_2',
      level:2,
      add_button_advanced:true,
      add_button_advanced_label:key_labels['advanced_fields'],
    }
});


/**********************************************/
/*******  Header Manifestation Basic **********/
/**********************************************/
cmdCreate('header_sect_manifestation_basic',{
    action:'addSection',
    opts:{
      skey:'header_sect_manifestation_basic',
      label:key_labels['ea:manif:Header_Basic'],
      "class":'sect_manif_level_2',
      level:2,
    }
});


/**********************************************/
/****  Header Manifestation Additional ********/
/**********************************************/
cmdCreate('header_sect_manifestation_additional',{
    action:'addSection',
    opts:{
      skey:'header_sect_manifestation_additional',
      label:key_labels['ea:manif:Header_Additional'],
      "class":'sect_manif_level_2',
      level:2,
      add_button_advanced:true,
      add_button_advanced_label:key_labels['advanced_fields'],
    }
});


/**********************************************/
/****  Header Manifestation Specific Fields ***/
/**********************************************/
cmdCreate('header_sect_manifestation_information',{
    action:'addSection',
    opts:{
      skey:'header_sect_manif_information',
      label:key_labels['ea:manif:Header_Information'],
      class:'sect_manif_level_2',
      level:2,
      status:'closed',
    }
});


/*****************************************************/
/** Header Manifestation Classification / Cataloging */
/*****************************************************/
cmdCreate('header_sect_manifestation_cataloging',{
    action:'addSection',
    opts:{
      skey:'sect_manif_cataloging',
      label:key_labels['ea:auth:Manifestation_Header_Cataloging'],
      class:'sect_manif_level_2',
      level:2,
      status:'closed',
    }
});


/*********************************************************/
/***  Header Manifestation Work/Expression contained *****/
/*********************************************************/
cmdCreate('header_sect_manifestation_work_expression',{
    action:'addSection',
    opts:{
      skey:'header_sect_manifestation_work_expression',
      label:key_labels['ea:manif:Header_Work_Manifestation'],
      "class":'sect_manif_level_2',
      level:2,
    }
});


/*********************************************************/
/***  Header Manifestation Digital_item contained ********/
/*********************************************************/
cmdCreate('header_sect_digital_item',{
    action:'addSection',
    opts:{
      skey:'header_sect_manifestation_digital_item',
      label:key_labels['ea:manif:Header_Digital_Item'],
      "class":'sect_manif_level_2',
      level:2,
    }
});

/*********************************************************/
/***  Header Manifestation Expression contained *****/
/*********************************************************/
cmdCreate('header_sect_manifestation_expression',{
    action:'addSection',
    opts:{
      skey:'header_sect_manifestation_expression',
      label:key_labels['ea:manif:Header_Expression'],
      level:2,
    }
});




/*********************************************************/
/*************  Header Manifestation - Contributors ************/
/*********************************************************/
cmdCreate('header_sect_manifestation_contributors',{
    action:'addSection',
    opts:{
      skey:'header_sect_manifestation_contributors',
      label:key_labels['ea:manif:Header_Contributors'],
      "class":'sect_manif_level_2',
      level:2,
    }
});


/*********************************************************/
/***********  Header Manifestation - Subjects ************/
/*********************************************************/
cmdCreate('header_sect_manifestation_subjects',{
    action:'addSection',
    opts:{
      skey:'header_sect_manifestation_subjects',
      label:key_labels['ea:manif:Header_Subjects'],
      "class":'sect_manif_level_2',
      level:2,
    }
});


/*********************************************************/
/***********  Header Manifestation - Relations ***********/
/*********************************************************/
cmdCreate('header_sect_manifestation_relations',{
    action:'addSection',
    opts:{
      skey:'header_sect_manifestation_relations',
      label:key_labels['ea:manif:Header_Relations'],
      "class":'sect_manif_level_2',
      level:2,
      status:'closed',
    }
});


/*********************************************************/
/***********  Header Manifestation - Thumb  **************/
/*********************************************************/
cmdCreate('header_sect_manifestation_thumb',{
    action:'addSection',
    opts:{
      skey:'header_sect_manifestation_thumb',
      label:key_labels['ea:manif:Header_Thumb'],
      "class":'sect_manif_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/**********  Header Manif Status **************/
/**********************************************/
cmdCreate('header_manifestation_status',{
	action:'addSection',
	opts:{
		id:'sect_manif_status',
		skey:'sect_manif_status',
		label:key_labels['status'],
		class:'sect_manif_level_1',
		level:1,
		status:'closed',
	}
});


/* ******************************************************************************* */
/******************************************************/
/****** Extented Header manifestation Public **********/
/******************************************************/
cmdCreate('header_manifestation_public_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_manifestation_public.opts,{
		skey:'sect_manifestation_public_extented',
	  width: 898,
	  add_button:false,
	})
});

/******************************************************/
/********** Extented Header manifestation Status ************/
/******************************************************/
cmdCreate('header_manifestation_status_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_manifestation_status.opts,{
	  "skey": "sect_manifestation_status_extented",
	})
});


/******************************************************/
/********** Extented Header manifestation basic ************/
/******************************************************/
cmdCreate('header_sect_manifestation_basic_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_sect_manifestation_basic.opts,{
	  "skey": "sect_manifestation_basic_extented",
	})
});


/******************************************************/
/********** Extented Header manifestation additional ************/
/******************************************************/
cmdCreate('header_sect_manifestation_additional_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_sect_manifestation_additional.opts,{
	  "skey": "sect_manifestation_additional_extented",
	})
});


/******************************************************/
/** Extented Header manifestation information *********/
/******************************************************/
cmdCreate('header_sect_manifestation_information_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_sect_manifestation_information.opts,{
	  "skey": "sect_manifestation_information_extented",
	})
});


/******************************************************/
/*** Extented Header manifestation work_cataloging ****/
/******************************************************/
cmdCreate('header_sect_manifestation_cataloging_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_sect_manifestation_cataloging.opts,{
	  "skey": "sect_manifestation_cataloging_extented",
	})
});


/******************************************************/
/*** Extented Header manifestation work_expression ****/
/******************************************************/
cmdCreate('header_sect_manifestation_work_expression_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_sect_manifestation_work_expression.opts,{
	  "skey": "sect_manifestation_work_expression_extented",
	})
});


/******************************************************/
/***** Extented Header manifestation contributors *****/
/******************************************************/
cmdCreate('header_sect_manifestation_contributors_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_sect_manifestation_contributors.opts,{
	  "skey": "sect_manifestation_contributors_extented",
	})
});


/******************************************************/
/********** Extented Header manifestation subjects ****/
/******************************************************/
cmdCreate('header_sect_manifestation_subjects_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_sect_manifestation_subjects.opts,{
	  "skey": "sect_manifestation_subjects_extented",
	})
});

/* ******************************************************************************* */


/****************************************************/
/*********** Manif Digital Item *********************/

//			cmdCreate.relation({
//				'cmd_name':'manif_digital_item',
//				'object_type':'digital-item',
//				'key':'ea:manif:digital-item',
//				'label':key_labels['ea:manif:digital-item'],
//				'search_url':'/prepo/ws/search-digital-item',
//				 'extend_commands' : f_auth_manifestations_extend,
//				 'new_button_label' : 'new digital-item',
//				 'extend_primary_label' : key_labels['ea:item:title'],
//			  root_options:{
//			  	select_key_width:'280px',
//			  	width:"400px",
//			    "add_button": true,
//			    "repeat_style": "ordered",
//			  }
//			});


/****************************************************/
/*********** Manif Digital Item *********************/


var digital_item_display_fields = [
{'key':'ea:item:type', 'label':key_labels['ea:item:type']},
{'key':'ea:item:description','label':key_labels['ea:item:description']},
{'key':'ea:item:sublocation','label':key_labels['ea:item:sublocation']},
{'key':'ea:item:size', 'label':key_labels['ea:item:size']},
{'key':'ea:item:page', 'label':key_labels['ea:item:page']},
{'key':'ea:item:partNumber', 'label':key_labels['ea:item:partNumber']},
{'key':'ea:item:info', 'label':key_labels['ea:item:info']},
{'key':'ea:item:accessRestrictions', 'label':key_labels['ea:item:accessRestrictions']},
{'key':'ea:auth:NotePublic', 'label':key_labels['ea:auth:NotePublic']},
//{'key':'ea:item:dedicateeOfItem', 'label':key_labels['ea:item:dedicateeOfItem']},
{'key':'ea:status:', 'label':key_labels['status']},
];

var digital_item_relation_base = {
		'extend_punctuation' : '{{v}} {{#ea:title:specific}}[{{v}}]{{/ea:title:specific}}',
		// REMOTE VIEW OPTIONAL FIELDS
		'remote_view_type' : 'generic',
		'remote_view_display_fields' : digital_item_display_fields,
		'remote_view_exec_cmds' : [ 'title_specific_digital_item' ],
	}

cmdCreate.relation(jQuery.extend({},digital_item_relation_base ,{
					'cmd_name':'manif_digital_item',
					'object_type':'digital-item',
					'key':['ea:manif:digital-item','reverse:ea:artifact-of:'],
					'label':key_labels['ea:manif:digital-item'],
					'search_url':'/prepo/ws/search-digital-item',
					'extend_commands' :  f_digital_item_extend,
					'new_button_label' : 'new digital-item',
					'extend_primary_label' : key_labels['ea:item:title'],
					'display_inferred':true,
				  root_options:{
				  	select_key_width:'280px',
				  	width:"400px",
				    "add_button": true,
				    "repeat_style": "ordered",
				  }
				}));

/****************************************************/
/**************  manifTitle *************************/
/****************************************************/

cmdCreate('manif_title',{
	action : 'setupField',
	opts : jQuery.extend({},opts_text,{
						'key' : 'dc:title:',//'ea:manif:Title_Proper',

						'label' : key_labels['ea:manif:Title'],
						extend : true,
						extend_command : 'manif_title_extend',
						extend_punctuation : '{{v}}\
{{#ea:manif:Title_Medium}} [{{v}}]{{/ea:manif:Title_Medium}}\
{{#ea:manif:Title_Remainder}} : {{v}}{{/ea:manif:Title_Remainder}}\
{{#ea:manif:Title_Responsibility}} / {{v}}{{/ea:manif:Title_Responsibility}}\
{{#ea:manif:Title_PartNumber}}{{#first}}. {{/first}}{{v}}{{^last}}-{{/last}}{{/ea:manif:Title_PartNumber}}\
{{#ea:manif:Title_PartName}}{{#first}}{{^ea:manif:Title_PartNumber}}. {{/ea:manif:Title_PartNumber}}{{/first}}{{#first}}{{#ea:manif:Title_PartNumber}}{{#first}}, {{/first}}{{/ea:manif:Title_PartNumber}}{{/first}}{{v}}{{^last}}-{{/last}}{{/ea:manif:Title_PartName}}',
					})
});


cmdCreate('manif_title_extend',{
    action: 'extend',
    opts:{
      label:key_labels['ea:manif:Title'],
      primary:'title_manif_proper',
      commands:['title_manif_proper','title_manif_medium','title_manif_remainder','title_manif_responsibility','title_manif_partnumber','title_manif_partName'],
    }
});


cmdCreate('title_manif_proper',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'dc:title:',//'ea:manif:Title_Proper',
      'label':key_labels['ea:manif:Title_Proper'],
    })
});

cmdCreate('title_manif_medium',{
    action : 'setupField',
    opts : {
      'key' : 'ea:manif:Title_Medium',
      'label':key_labels['ea:manif:Title_Medium'],
      'show_help' : true,
      'advanced_field': true,
    }
});

cmdCreate('title_manif_remainder',{
    action : 'setupField',
    opts : {
      'key' : 'ea:manif:Title_Remainder',
      'label':key_labels['ea:manif:Title_Remainder'],
      'show_help' : true,
    }
});

cmdCreate('title_manif_responsibility',{
    action : 'setupField',
    opts : {
      'key' : 'ea:manif:Title_Responsibility',
      'label':key_labels['ea:manif:Title_Responsibility'],
      'show_help' : true,
    }
});

cmdCreate('title_manif_partnumber',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:manif:Title_PartNumber',
      'label':key_labels['ea:manif:Title_PartNumber'],
      'show_help' : true,
      repeat_style : 'ordered',
      'advanced_field': true,
    })
  });

cmdCreate('title_manif_partName',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:manif:Title_PartName',
      'label':key_labels['ea:manif:Title_PartName'],
      'show_help' : true,
      repeat_style : 'ordered',
      'advanced_field': true,
    })
  });



/****************************************************/
/************  manif_Additional_Title ***************/
/****************************************************/

cmdCreate('manif_additional_title',{
		action : 'setupField',
		type : 'text',
		opts : jQuery.extend({},opts_multy_text,{
			setupOptions: function(options){
				options.select_key_map= additional_title_map;
				return options;
			},
			select_key_width:'160px',
			width:488,
			show_help : true,
			label : key_labels['ea:manif:Additional_Title'],
			repeat_style : 'ordered',
			extend : true,
			extend_command:{
				 'ea:manif:ParallelTitle':'manif_additional_ParallelTitle_extend',
				 'ea:manif:PortionTitle':'manif_additional_PortionTitle_extend',
				 'ea:manif:OtherTitle':'manif_additional_OtherTitle_extend',
				 'ea:manif:CoverTitle': 'manif_additional_CoverTitle_extend',
				 'ea:manif:AddedTitle': 'manif_additional_AddedTitle_extend',
				 'ea:manif:CaptionTitle': 'manif_additional_CaptionTitle_extend',
				 'ea:manif:RunningTitle': 'manif_additional_RunningTitle_extend',
				 'ea:manif:SpineTitle': 'manif_additional_SpineTitle_extend',
				 'ea:manif:TranslationTitle': 'manif_additional_TranslationTitle_extend',
				 'ea:manif:AbbreviatedTitle': 'manif_abbreviatedtitle_display',
				 'ea:manif:KeyTitle': 'manif_keytitle_display',
				 'ea:manif:FormerTitle': 'manif_additional_FormerTitle_extend'
				 },
			extend_punctuation : '{{{v}}}{{^ea:manif:Additional_Title_Proper}}{{#ea:manif:Additional_Title_Remainder}}: {{/ea:manif:Additional_Title_Remainder}}{{/ea:manif:Additional_Title_Proper}}\
{{#ea:manif:Additional_Title_Proper}}{{{v}}}{{#ea:manif:Additional_Title_Remainder}}: {{/ea:manif:Additional_Title_Remainder}}{{/ea:manif:Additional_Title_Proper}}\
{{#ea:manif:Additional_Title_Remainder}}{{{v}}}{{/ea:manif:Additional_Title_Remainder}}\
{{#ea:manif:Additional_Title_PartNumber}}{{#first}}. {{/first}}{{{v}}}{{^last}}-{{/last}}{{/ea:manif:Additional_Title_PartNumber}}\
{{#ea:manif:Additional_Title_PartName}}{{#first}}{{^ea:manif:Additional_Title_PartNumber}}. {{/ea:manif:Additional_Title_PartNumber}}{{#ea:manif:Additional_Title_PartNumber}}{{#first}}, {{/first}}{{/ea:manif:Additional_Title_PartNumber}}{{/first}}{{{v}}}{{^last}}-{{/last}}{{/ea:manif:Additional_Title_PartName}}'	})
});

	cmdCreate('manif_additional_ParallelTitle_extend',{
	    action: 'extend',
	    opts:{
	      label:key_labels['ea:manif:Additional_Title'],
	      primary:'manif_additional_title_proper',
	      commands:['manif_additional_title_proper','manif_additional_title_remainder','manif_additional_title_partnumber','manif_additional_title_partname'],
	    }
});

	cmdCreate('manif_additional_PortionTitle_extend',{
	    action: 'extend',
	    opts:{
	      label:key_labels['ea:manif:Additional_Title'],
	      primary:'manif_additional_title_proper',
	      commands:['manif_additional_title_proper','manif_additional_title_remainder','manif_additional_title_partnumber','manif_additional_title_partname'],
	    }
});

	cmdCreate('manif_additional_OtherTitle_extend',{
	    action: 'extend',
	    opts:{
	      label:key_labels['ea:manif:Additional_Title'],
	      primary:'manif_additional_title_proper',
	      commands:['manif_additional_title_proper','manif_additional_title_remainder','manif_additional_title_partnumber','manif_additional_title_partname'],
	    }
});

	cmdCreate('manif_additional_CoverTitle_extend',{
	    action: 'extend',
	    opts:{
	      label:key_labels['ea:manif:Additional_Title'],
	      primary:'manif_additional_title_proper',
	      commands:['manif_additional_title_proper','manif_additional_title_remainder','manif_additional_title_partnumber','manif_additional_title_partname'],
	    }
});

	cmdCreate('manif_additional_AddedTitle_extend',{
	    action: 'extend',
	    opts:{
	      label:key_labels['ea:manif:Additional_Title'],
	      primary:'manif_additional_title_proper',
	      commands:['manif_additional_title_proper','manif_additional_title_remainder','manif_additional_title_partnumber','manif_additional_title_partname'],
	    }
});

	cmdCreate('manif_additional_CaptionTitle_extend',{
	    action: 'extend',
	    opts:{
	      label:key_labels['ea:manif:Additional_Title'],
	      primary:'manif_additional_title_proper',
	      commands:['manif_additional_title_proper','manif_additional_title_remainder','manif_additional_title_partnumber','manif_additional_title_partname'],
	    }
});

	cmdCreate('manif_additional_RunningTitle_extend',{
	    action: 'extend',
	    opts:{
	      label:key_labels['ea:manif:Additional_Title'],
	      primary:'manif_additional_title_proper',
	      commands:['manif_additional_title_proper','manif_additional_title_remainder','manif_additional_title_partnumber','manif_additional_title_partname'],
	    }
});

	cmdCreate('manif_additional_SpineTitle_extend',{
	    action: 'extend',
	    opts:{
	      label:key_labels['ea:manif:Additional_Title'],
	      primary:'manif_additional_title_proper',
	      commands:['manif_additional_title_proper','manif_additional_title_remainder','manif_additional_title_partnumber','manif_additional_title_partname'],
	    }
});

	cmdCreate('manif_additional_TranslationTitle_extend',{
	    action: 'extend',
	    opts:{
	      label:key_labels['ea:manif:Additional_Title'],
	      primary:'manif_additional_title_proper',
	      commands:['manif_additional_title_proper','manif_additional_title_remainder','manif_additional_title_partnumber','manif_additional_title_partname'],
	    }
});

	cmdCreate('manif_additional_FormerTitle_extend',{
	    action: 'extend',
	    opts:{
	      label:key_labels['ea:manif:Additional_Title'],
	      primary:'manif_additional_title_proper',
	      commands:['manif_additional_title_proper','manif_additional_title_remainder','manif_additional_title_partnumber','manif_additional_title_partname'],
	    }
});

//	commands.manif_paralleltitle_display = {
//	    action : 'setupField',
//	    opts : {
//	      'key' : 'ea:manif:ParallelTitle',
//	      'label':key_labels['ea:manif:Additional_Title_Display'],
//	      'show_help' : true,
//	    }
//	  }
//
//	commands.manif_portiontitle_display = {
//	    action : 'setupField',
//	    opts : {
//	      'key' : 'ea:manif:PortionTitle',
//	      'label':key_labels['ea:manif:Additional_Title_Display'],
//	      'show_help' : true,
//	    }
//	  }
//
//	commands.manif_othertitle_display = {
//	    action : 'setupField',
//	    opts : {
//	      'key' : 'ea:manif:OtherTitle',
//	      'label':key_labels['ea:manif:Additional_Title_Display'],
//	      'show_help' : true,
//	    }
//	  }
//
//	commands.manif_covertitle_display = {
//	    action : 'setupField',
//	    opts : {
//	      'key' : 'ea:manif:CoverTitle',
//	      'label':key_labels['ea:manif:Additional_Title_Display'],
//	      'show_help' : true,
//	    }
//	  }
//
//	commands.manif_addedtitle_display = {
//	    action : 'setupField',
//	    opts : {
//	      'key' : 'ea:manif:AddedTitle',
//	      'label':key_labels['ea:manif:Additional_Title_Display'],
//	      'show_help' : true,
//	    }
//	  }
//
//	commands.manif_captiontitle_display = {
//	    action : 'setupField',
//	    opts : {
//	      'key' : 'ea:manif:CaptionTitle',
//	      'label':key_labels['ea:manif:Additional_Title_Display'],
//	      'show_help' : true,
//	    }
//	  }
//
//	commands.manif_runningtitle_display = {
//	    action : 'setupField',
//	    opts : {
//	      'key' : 'ea:manif:RunningTitle',
//	      'label':key_labels['ea:manif:Additional_Title_Display'],
//	      'show_help' : true,
//	    }
//	  }
//
//	commands.manif_spinetitle_display = {
//	    action : 'setupField',
//	    opts : {
//	      'key' : 'ea:manif:SpineTitle',
//	      'label':key_labels['ea:manif:Additional_Title_Display'],
//	      'show_help' : true,
//	    }
//	  }
//
//	commands.manif_translationtitle_display = {
//	    action : 'setupField',
//	    opts : {
//	      'key' : 'ea:manif:TranslationTitle',
//	      'label':key_labels['ea:manif:Additional_Title_Display'],
//	      'show_help' : true,
//	    }
//	  }
//
//	commands.manif_abbreviatedtitle_display = {
//	    action : 'setupField',
//	    opts : {
//	      'key' : 'ea:manif:AbbreviatedTitle',
//	      'label':key_labels['ea:manif:AbbreviatedTitle'],
//	      'show_help' : true,
//	    }
//	  }
//
//	commands.manif_keytitle_display = {
//	    action : 'setupField',
//	    opts : {
//	      'key' : 'ea:manif:KeyTitle',
//	      'label':key_labels['ea:manif:KeyTitle'],
//	      'show_help' : true,
//	    }
//	  }
//
//	commands.manif_formertitle_display = {
//	    action : 'setupField',
//	    opts : {
//	      'key' : 'ea:manif:FormerTitle',
//	      'label':key_labels['ea:manif:Additional_Title_Display'],
//	      'show_help' : true,
//	    }
//	  }

	cmdCreate('manif_additional_title_proper',{
	    action : 'setupField',
	    opts : {
	      'key' : 'ea:manif:Additional_Title_Proper',
	      'label':key_labels['ea:manif:Additional_Title_Proper'],
	      'show_help' : true,
	    }
	  });

	cmdCreate('manif_additional_title_remainder',{
	    action : 'setupField',
	    opts : {
	      'key' : 'ea:manif:Additional_Title_Remainder',
	      'label':key_labels['ea:manif:Additional_Title_Remainder'],
	      'show_help' : true,
	    }
	  });

	cmdCreate('manif_additional_title_partnumber',{
	    action : 'setupField',
	    opts : jQuery.extend({},opts_multy_text,{
	      'key' : 'ea:manif:Additional_Title_PartNumber',
	      'label':key_labels['ea:manif:Additional_Title_PartNumber'],
	      'show_help' : true,
	      repeat_style : 'ordered',
	    })
	  });

	cmdCreate('manif_additional_title_partname',{
	    action : 'setupField',
	    opts : jQuery.extend({},opts_multy_text,{
	      'key' : 'ea:manif:Additional_Title_PartName',
	      'label':key_labels['ea:manif:Additional_Title_PartName'],
	      'show_help' : true,
	      repeat_style : 'ordered',
	    })
	  });


/****************************************************/
/*************  manif_description_thumb *************/
/****************************************************/
	cmdCreate('manif_description_thumb',{
	  action : 'setupField',
	  opts : {
	    'key' : 'ea:auth:thumb_description',
	    'label':key_labels['ea:auth:thumb_description'],
	    'show_help' : true,
	  }
	});


/****************************************************/
/**************  manifEdition ***********************/
/****************************************************/

cmdCreate('manif_edition',{
		action : 'setupField',
		opts : jQuery.extend({},opts_multy_text,{
							'key' : 'ea:manif:Edition_Statement',
							'label' : key_labels['ea:manif:Edition'],
							repeat_style : 'ordered',
							extend : true,
							extend_command : 'manif_edition_extend',
							extend_punctuation : '{{{v}}}\
{{#ea:manif:Edition_Remainder}} / {{{v}}}{{/ea:manif:Edition_Remainder}}',
						})
});

cmdCreate('manif_edition_extend',{
    action: 'extend',
    opts:{
      label:key_labels['ea:manif:Edition'],
      primary:'manif_edition_statement',
      commands:['manif_edition_statement','manif_edition_remainder'],
    }
});

//commands.manif_edition_display = {
//    action : 'setupField',
//    opts : {
//      'key' : 'ea:manif:Edition',
//      'label':key_labels['ea:manif:Edition'],
//      'show_help' : true,
//    }
//  };
cmdCreate('manif_edition_statement',{
    action : 'setupField',
    opts : {
      'key' : 'ea:manif:Edition_Statement',
      'label':key_labels['ea:manif:Edition_Statement'],
      'show_help' : true,
    }
});

cmdCreate('manif_edition_remainder',{
    action : 'setupField',
    opts : {
      'key' : 'ea:manif:Edition_Remainder',
      'label':key_labels['ea:manif:Edition_Remainder'],
      'show_help' : true,
    }
});


/****************************************************/
/*************  manifPublications *******************/
/****************************************************/

cmdCreate('manif_publications',{
		action : 'setupField',
		type : 'text',
		opts : jQuery.extend({},opts_multy_text,{
			setupOptions: function(options){
				options.select_key_map= publications_map;
				return options;
			},
			select_key_width:'130px',
			width:518,
			show_help : true,
			label : key_labels['ea:manif:publications'],
			repeat_style : 'ordered',
			extend : true,
			extend_command:{
				 'ea:manif:Publication':'manif_publication_extend',
				 'ea:manif:Distribution':'manif_distribution_extend',
				 'ea:manif:Production':'manif_production_extend',
				 'ea:manif:Manufactur': 'manif_manufactur_extend'
				 },
			set_punctuation_as_value:true,
			extend_punctuation : '{{v}}\
{{#ea:manif:Publication_Place}} {{{v}}}{{^last}};{{/last}}{{#last}}{{#ea:manif:Publisher_Name}}{{#first}}: {{/first}}{{/ea:manif:Publisher_Name}}{{/last}}{{/ea:manif:Publication_Place}}\
{{#ea:manif:Publisher_Name}}{{#first}}{{^ea:manif:Publication_Place}}: {{/ea:manif:Publication_Place}}{{/first}}{{{v}}}{{^last}}-{{/last}}{{#last}}{{#ea:manif:Publication_Date}},{{/ea:manif:Publication_Date}}{{/last}}{{/ea:manif:Publisher_Name}}\
{{#ea:manif:Publication_Date}} {{{v}}} {{/ea:manif:Publication_Date}}\
\
{{#ea:manif:Distribution_Place}} {{{v}}}{{^last}};{{/last}}{{#last}}{{#ea:manif:Distribution_Name}}{{#first}}: {{/first}}{{/ea:manif:Distribution_Name}}{{/last}}{{/ea:manif:Distribution_Place}}\
{{#ea:manif:Distribution_Name}}{{#first}}{{^ea:manif:Distribution_Place}}: {{/ea:manif:Distribution_Place}}{{/first}}{{{v}}}{{^last}}-{{/last}}{{#last}}{{#ea:manif:Distribution_Date}},{{/ea:manif:Distribution_Date}}{{/last}}{{/ea:manif:Distribution_Name}}\
{{#ea:manif:Distribution_Date}} {{{v}}} {{/ea:manif:Distribution_Date}}\
\
{{#ea:manif:Production_Place}} {{{v}}}{{^last}};{{/last}}{{#last}}{{#ea:manif:Production_Name}}{{#first}}: {{/first}}{{/ea:manif:Production_Name}}{{/last}}{{/ea:manif:Production_Place}}\
{{#ea:manif:Production_Name}}{{#first}}{{^ea:manif:Production_Place}}: {{/ea:manif:Production_Place}}{{/first}}{{{v}}}{{^last}}-{{/last}}{{#last}}{{#ea:manif:Production_Date}},{{/ea:manif:Production_Date}}{{/last}}{{/ea:manif:Production_Name}}\
{{#ea:manif:Production_Date}} {{{v}}} {{/ea:manif:Production_Date}}\
\
{{#ea:manif:Manufactur_Place}} {{{v}}}{{^last}};{{/last}}{{#last}}{{#ea:manif:Manufactur_Name}}{{#first}}: {{/first}}{{/ea:manif:Manufactur_Name}}{{/last}}{{/ea:manif:Manufactur_Place}}\
{{#ea:manif:Manufactur_Name}}{{#first}}{{^ea:manif:Manufactur_Place}}: {{/ea:manif:Manufactur_Place}}{{/first}}{{{v}}}{{^last}}-{{/last}}{{#last}}{{#ea:manif:Manufactur_Date}},{{/ea:manif:Manufactur_Date}}{{/last}}{{/ea:manif:Manufactur_Name}}\
{{#ea:manif:Manufactur_Date}} {{{v}}} {{/ea:manif:Manufactur_Date}}\
',
		})
});

	cmdCreate('manif_publication_extend',{
	    action: 'extend',
	    opts:{
	      label:key_labels['ea:manif:Publication'],
	      primary:'manif_publication',
	      commands:['manif_publication','manif_publication_place','manif_publication_name','manif_publication_date'/*,'url_public'*/],
	    }
});

	cmdCreate('manif_distribution_extend',{
	    action: 'extend',
	    opts:{
	      label:key_labels['ea:manif:Distribution'],
	      primary:'manif_distribution',
	      commands:['manif_distribution','manif_distribution_place','manif_distribution_name','manif_distribution_date'],
	    }
});

	cmdCreate('manif_production_extend',{
	    action: 'extend',
	    opts:{
	      label:key_labels['ea:manif:Production'],
	      primary:'manif_production',
	      commands:['manif_production','manif_production_place','manif_production_name','manif_production_date'],
	    }
});

	cmdCreate('manif_manufactur_extend',{
	    action: 'extend',
	    opts:{
	      label:key_labels['ea:manif:Manufactur'],
	      primary:'manif_manufactur',
	      commands:['manif_manufactur','manif_manufactur_place','manif_manufactur_name','manif_manufactur_date'],
	    }
});

	cmdCreate('manif_publication',{
	    action : 'setupField',
	    opts : {
	      'key' : 'ea:manif:Publication',
	      'type' : 'hidden',
//	      'aggregate_value' : true,
	    }
});


	cmdCreate.relation(jQuery.extend({},place_relation_base ,{
		'cmd_name' : 'manif_publication_place',
		'key':'ea:manif:Publication_Place',
		'label':key_labels['ea:manif:Publication_Place'],
	}));

	cmdCreate('manif_publication_date',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      key:'ea:manif:Publication_Date',
      label:key_labels['ea:manif:Publication_Date'],
      type : 'date',
      show_help : true,
      one_label: true,
      width:"345px",
      })
});

//cmdCreate.relation({
//'cmd_name':'manif_publication_place',
//
//'object_type':'auth-place',
//'key':'ea:manif:Publication_Place',
//'label':key_labels['ea:manif:Publication_Place'],
//'extend_primary_label':key_labels['ea:auth:Place_Term'],
//'new_button_label':key_labels['new_place'],
//'search_url':'/prepo/ws/search-place',
//'extend_commands' : f_auth_place_extend,
//	read_only:false,
//	repeat_style : 'ordered',
//	"add_button" : true,
//});

//	cmdCreate('manif_publication_place',{
//	    action : 'setupField',
//	    opts : jQuery.extend({},opts_multy_text,{
//	      'key' : 'ea:manif:Publication_Place',
//	      'label':key_labels['ea:manif:Publication_Place'],
//	      'show_help' : true,
//	      repeat_style : 'ordered',
//	    })
//});

//	cmdCreate('manif_publication_name',{
//	    action : 'setupField',
//	    opts : jQuery.extend({},opts_multy_text,{
//	      'key' : 'ea:manif:Publisher_Name',
//	      'label':key_labels['ea:manif:Publisher_Name'],
//	      'show_help' : true,
//	      repeat_style : 'ordered',
//	    })
//});

	cmdCreate('manif_distribution',{
	    action : 'setupField',
	    opts : {
	      'key' : 'ea:manif:Distribution',
	      'label':key_labels['ea:manif:Distribution'],
	      'show_help' : true,
	      'type' : 'hidden',
	    }
});


	cmdCreate.relation(jQuery.extend({},place_relation_base ,{
		'cmd_name' : 'manif_distribution_place',
		'key':'ea:manif:Distribution_Place',//'ea:manif:Publication_Place',
		'label':key_labels['ea:manif:Distribution_Place'],
	}));



	cmdCreate('manif_distribution_date',{
	    action : 'setupField',
	    opts : jQuery.extend({},opts_text,{
	      key:'ea:manif:Distribution_Date',
	      label:key_labels['ea:manif:Manufactur_Date'],
	      type : 'date',
	      show_help : true,
	      one_label: true,
	      width:"345px",
	      })
});
//	cmdCreate.relation({
//		'cmd_name':'manif_distribution_place',
//		'object_type':'auth-place',
//		'key':'ea:manif:Publication_Place',
//		'label':key_labels['ea:manif:Distribution_Place'],
//		'extend_primary_label':key_labels['ea:auth:Place_Term'],
//		'new_button_label':'new',
//		'search_url':'/prepo/ws/search-place',
//		 'extend_commands' : f_auth_place_extend,
//		 read_only:false,
//		 repeat_style : 'ordered',
//			"add_button" : true,
//	});

//	cmdCreate('manif_distribution_place',{
//	    action : 'setupField',
//	    opts : jQuery.extend({},opts_multy_text,{
//	      'key' : 'ea:manif:Publication_Place',
//	      'label':key_labels['ea:manif:Distribution_Place'],
//	      'show_help' : true,
//	      repeat_style : 'ordered',
//	    })
//});

//	cmdCreate('manif_distribution_name',{
//	    action : 'setupField',
//	    opts : jQuery.extend({},opts_multy_text,{
//	      'key' : 'ea:manif:Publisher_Name',
//	      'label':key_labels['ea:manif:Distribution_Name'],
//	      'show_help' : true,
//	      repeat_style : 'ordered',
//	    })
//});


	cmdCreate('manif_production',{
	    action : 'setupField',
	    opts : {
	      'key' : 'ea:manif:Production',
	      'label':key_labels['ea:manif:Production'],
	      'show_help' : true,
	      'type' : 'hidden',
	    }
});

	cmdCreate.relation(jQuery.extend({},place_relation_base ,{
		'cmd_name' : 'manif_production_place',
		'key':'ea:manif:Production_Place',
		'label':key_labels['ea:manif:Production_Place'],
	}));

	cmdCreate('manif_production_date',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      key:'ea:manif:Production_Date',
      label:key_labels['ea:manif:Manufactur_Date'],
      type : 'date',
      show_help : true,
      one_label: true,
      width:"345px",
      })
});

//	cmdCreate.relation({
//		'cmd_name':'manif_production_place',
//		'object_type':'auth-place',
//		'key':'ea:manif:Publication_Place',
//		'label':key_labels['ea:manif:Production_Place'],
//		'extend_primary_label':key_labels['ea:auth:Place_Term'],
//		'new_button_label':'new',
//		'search_url':'/prepo/ws/search-place',
//		'extend_commands' : f_auth_place_extend,
//		 read_only:false,
//		 repeat_style : 'ordered',
//			"add_button" : true,
//	});

//	cmdCreate('manif_production_place',{
//	    action : 'setupField',
//	    opts : jQuery.extend({},opts_multy_text,{
//	      'key' : 'ea:manif:Publication_Place',
//	      'label':key_labels['ea:manif:Production_Place'],
//	      'show_help' : true,
//	      repeat_style : 'ordered',
//	    })
//});

//	cmdCreate('manif_production_name',{
//	    action : 'setupField',
//	    opts : jQuery.extend({},opts_multy_text,{
//	      'key' : 'ea:manif:Publisher_Name',
//	      'label':key_labels['ea:manif:Production_Name'],
//	      'show_help' : true,
//	      repeat_style : 'ordered',
//	    })
//});

	cmdCreate('manif_manufactur',{
	    action : 'setupField',
	    opts : {
	      'key' : 'ea:manif:Manufactur',
	      'label':key_labels['ea:manif:Manufactur'],
	      'show_help' : true,
	      'type' : 'hidden',
	    }
});

	cmdCreate.relation(jQuery.extend({},place_relation_base ,{
		'cmd_name' : 'manif_manufactur_place',
		'key':'ea:manif:Manufactur_Place',
		'label':key_labels['ea:manif:Manufactur_Place'],
	}));

	cmdCreate('manif_manufactur_date',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      key:'ea:manif:Manufactur_Date',
      label:key_labels['ea:manif:Manufactur_Date'],
      type : 'date',
      show_help : true,
      one_label: true,
      width:"345px",
      })
});

//	cmdCreate.relation({
//		'cmd_name':'manif_manufactur_place',
//		'object_type':'auth-place',
//		'key':'ea:manif:Publication_Place',
//		'label':key_labels['ea:manif:Manufactur_Place'],
//		'extend_primary_label':key_labels['ea:auth:Place_Term'],
//		'new_button_label':'new',
//		'search_url':'/prepo/ws/search-place',
//		 'extend_commands' : f_auth_place_extend,
//	  	read_only:false,
//	  	repeat_style : 'ordered',
//			"add_button" : true,
//	});


//	cmdCreate('manif_manufactur_place',{
//	    action : 'setupField',
//	    opts : jQuery.extend({},opts_multy_text,{
//	      'key' : 'ea:manif:Publication_Place',
//	      'label':key_labels['ea:manif:Manufactur_Place'],
//	      'show_help' : true,
//	      repeat_style : 'ordered',
//	    })
//});

//	cmdCreate('manif_manufactur_name',{
//	    action : 'setupField',
//	    opts : jQuery.extend({},opts_multy_text,{
//	      'key' : 'ea:manif:Publisher_Name',
//	      'label':key_labels['ea:manif:Manufactur_Name'],
//	      'show_help' : true,
//	      repeat_style : 'ordered',
//	    })
//});


	/****************************************************/
	/**************** manifTypeOfDate *******************/
	/****************************************************/

											//TODO

	/****************************************************/
	/************ manifPhysicalDescription **************/
	/****************************************************/

	cmdCreate('manif_physical_description',{
			action : 'setupField',
			opts : jQuery.extend({},opts_multy_text,{
								'key' : 'ea:manif:Physical_Description',
								'label' : key_labels['ea:manif:Physical_Description'],
								repeat_style : 'ordered',
								extend : true,
								extend_command : 'manif_physical_description_extend',
								extend_punctuation : '{{v}}{{#ea:manif:Physical_Description_Extent}}{{#first}},{{/first}}{{/ea:manif:Physical_Description_Extent}} \
{{#ea:manif:Physical_Description_Extent}}{{^first}},{{/first}}{{v}}{{#last}}{{#ea:manif:Physical_Description_Details}} : {{/ea:manif:Physical_Description_Details}}{{/last}}{{/ea:manif:Physical_Description_Extent}}\
{{#ea:manif:Physical_Description_Extent}}{{#last}}{{^ea:manif:Physical_Description_Details}}{{#ea:manif:Physical_Description_Dimensions}}{{#first}} : {{/first}}{{/ea:manif:Physical_Description_Dimensions}}{{/ea:manif:Physical_Description_Details}}{{/last}}{{/ea:manif:Physical_Description_Extent}}\
{{#ea:manif:Physical_Description_Extent}}{{#last}}{{^ea:manif:Physical_Description_Details}}{{^ea:manif:Physical_Description_Dimensions}}{{#ea:manif:Physical_Description_Accompanying}} : {{/ea:manif:Physical_Description_Accompanying}}{{/ea:manif:Physical_Description_Dimensions}}{{/ea:manif:Physical_Description_Details}}{{/last}}{{/ea:manif:Physical_Description_Extent}}\
{{#ea:manif:Physical_Description_Details}}{{v}}{{/ea:manif:Physical_Description_Details}}\
{{#ea:manif:Physical_Description_Dimensions}}{{#first}}{{#ea:manif:Physical_Description_Details}} ; {{/ea:manif:Physical_Description_Details}}{{/first}}{{v}}{{^last}},{{/last}}{{/ea:manif:Physical_Description_Dimensions}}\
{{#ea:manif:Physical_Description_Accompanying}}{{#ea:manif:Physical_Description_Dimensions}}{{#first}} + {{/first}}{{/ea:manif:Physical_Description_Dimensions}}{{^ea:manif:Physical_Description_Dimensions}}{{#ea:manif:Physical_Description_Details}} ; {{/ea:manif:Physical_Description_Details}}{{/ea:manif:Physical_Description_Dimensions}}{{v}}{{/ea:manif:Physical_Description_Accompanying}}',
							})
});

		cmdCreate('manif_physical_description_extend',{
		    action: 'extend',
		    opts:{
		      label:key_labels['ea:manif:Physical_Description'],
		      primary:'manif_physical_description_display',
		      commands:['manif_physical_description_display','manif_physical_description_details','manif_physical_description_dimensions','manif_physical_description_accompanying'],
		    }
});

		cmdCreate('manif_physical_description_display',{
		    action : 'setupField',
		    opts : jQuery.extend({},opts_text,{
		      'key' : 'ea:manif:Physical_Description',
		      'label':key_labels['ea:manif:Physical_Description_Extent'],
		    })
});

		cmdCreate('manif_physical_description_extent',{
		    action : 'setupField',
		    opts : jQuery.extend({},opts_multy_text,{
		      'key' : 'ea:manif:Physical_Description_Extent',
		      'label':key_labels['ea:manif:Physical_Description_Extent'],
		      'show_help' : true,
		      repeat_style : 'ordered',
		    })
});

		cmdCreate('manif_physical_description_details',{
		    action : 'setupField',
		    opts : {
		      'key' : 'ea:manif:Physical_Description_Details',
		      'label':key_labels['ea:manif:Physical_Description_Details'],
		      'show_help' : true,
		    }
});

		cmdCreate('manif_physical_description_dimensions',{
		    action : 'setupField',
		    opts : jQuery.extend({},opts_multy_text,{
		      'key' : 'ea:manif:Physical_Description_Dimensions',
		      'label':key_labels['ea:manif:Physical_Description_Dimensions'],
		      'show_help' : true,
		      repeat_style : 'ordered',
		    })
});

		cmdCreate('manif_physical_description_accompanying',{
		    action : 'setupField',
		    opts : {
		      'key' : 'ea:manif:Physical_Description_Accompanying',
		      'label':key_labels['ea:manif:Physical_Description_Accompanying'],
		      'show_help' : true,
		    }
});


	/****************************************************/
	/**************** manifMediaType ********************/
	/****************************************************/

		cmdCreate('manif_media_type',{
				action : 'setupField',
				opts : jQuery.extend({},opts_multy_text,{
					'key' : 'ea:manif:Media_Type',
					'label':key_labels['ea:manif:Media_Type'],
					type : 'select',
					select_values:media_type_map,
					width:650,
					repeat_style : 'ordered',
					'advanced_field': true,
				})
});


	/****************************************************/
	/**************** manifCarrierType ******************/
	/****************************************************/

			cmdCreate('manif_carrier_type',{
					action : 'setupField',
					opts : jQuery.extend({},opts_multy_text,{
						'key' : 'ea:manif:Carrier_Type',
						'label':key_labels['ea:manif:Carrier_Type'],
						type : 'select',
						width:650,
						select_values:carrier_type_map,
						repeat_style : 'ordered',
						'advanced_field': true,
					})
});


	/****************************************************/
	/**************** manifSeries ***********************/
	/****************************************************/

			cmdCreate('manif_series',{
					action : 'setupField',
					opts : jQuery.extend({},opts_multy_text,{
										'key' : 'ea:manif:Series_Title',
										'label' : key_labels['ea:manif:Series'],
										repeat_style : 'ordered',
										extend : true,
										extend_command : 'manif_series_extend',
										extend_punctuation : '{{v}}\
{{#ea:manif:Series_Remainder}}{{#first}} : {{/first}}{{v}}{{^last}}-{{/last}}{{/ea:manif:Series_Remainder}}\
{{#ea:manif:Series_Responsibility}}{{#first}}{{#ea:manif:Series_Remainder}}{{#first}} / {{/first}}{{/ea:manif:Series_Remainder}}{{^ea:manif:Series_Remainder}} : {{/ea:manif:Series_Remainder}}{{/first}}{{v}}{{^last}}-{{/last}}{{/ea:manif:Series_Responsibility}}\
{{#ea:manif:Series_Volume}}{{#first}} ; {{/first}}{{v}}{{^last}}-{{/last}}{{#last}}.{{/last}}{{/ea:manif:Series_Volume}}\
{{#ea:manif:Series_ISSN}}{{#first}} ISSN: {{/first}}{{v}}{{^last}}-{{/last}}{{/ea:manif:Series_ISSN}}',
									})
});

				cmdCreate('manif_series_extend',{
				    action: 'extend',
				    opts:{
				      label:key_labels['ea:manif:Series'],
				      primary:'manif_series_title',
				      commands:['manif_series_title','manif_series_remainder','manif_series_responsibility','manif_series_volume','manif_series_issn'],
				    }
});

				cmdCreate('manif_series_title',{
				    action : 'setupField',
				    opts : jQuery.extend({},opts_text,{
				      'key' : 'ea:manif:Series_Title',
				      'label':key_labels['ea:manif:Series_Title'],
				    })
});

				cmdCreate('manif_series_remainder',{
				    action : 'setupField',
				    opts : jQuery.extend({},opts_multy_text,{
				      'key' : 'ea:manif:Series_Remainder',
				      'label':key_labels['ea:manif:Series_Remainder'],
				      'show_help' : true,
				      repeat_style : 'ordered',
				    })
});

				cmdCreate('manif_series_responsibility',{
				    action : 'setupField',
				    opts : jQuery.extend({},opts_multy_text,{
				      'key' : 'ea:manif:Series_Responsibility',
				      'label':key_labels['ea:manif:Series_Responsibility'],
				      'show_help' : true,
				      repeat_style : 'ordered',
				    })
});

				cmdCreate('manif_series_volume',{
				    action : 'setupField',
				    opts : jQuery.extend({},opts_multy_text,{
				      'key' : 'ea:manif:Series_Volume',
				      'label':key_labels['ea:manif:Series_Volume'],
				      'show_help' : true,
				      repeat_style : 'ordered',
				    })
});

				cmdCreate('manif_series_issn',{
				    action : 'setupField',
				    opts : jQuery.extend({},opts_multy_text,{
				      'key' : 'ea:manif:Series_ISSN',
				      'label':key_labels['ea:manif:Series_ISSN'],
				      'show_help' : true,
				      repeat_style : 'ordered',
				    })
});


	/****************************************************/
	/****************** manifISBN ***********************/
	/****************************************************/


				cmdCreate('manif_isbn',{
						action : 'setupField',
						type : 'text',
						opts : jQuery.extend({},opts_multy_text,{
							setupOptions: function(options){
								options.select_key_map= isbn_map;
								return options;
							},
							select_key_width:'160px',
							width:488,
							show_help : true,
							label : key_labels['ea:manif:isbn_issn_ismn'],
							repeat_style : 'ordered',
							extend : true,
							extend_command:{
										'ea:manif:ISBN_Number':'manif_isbn_extend',
										'ea:manif:ISSN_Number':'manif_issn_extend',
										'ea:manif:ISMN_Number':'manif_ismn_extend',
								 },
							extend_punctuation : '{{v}}\
{{#ea:manif:ISBN_Terms}} :{{{v}}} {{/ea:manif:ISBN_Terms}}\
{{#ea:manif:ISBN_Qualify}}{{#first}}({{/first}}{{{v}}}{{^last}}, {{/last}}{{#last}}).{{/last}}{{/ea:manif:ISBN_Qualify}}\
{{#ea:manif:ISBN_Canceled}}{{#first}} - {{/first}}{{{v}}} (Canceled){{^last}}, {{/last}} {{/ea:manif:ISBN_Canceled}}\
{{#ea:manif:ISMN_Terms}} :{{{v}}} {{/ea:manif:ISMN_Terms}}\
{{#ea:manif:ISMN_Qualify}}{{#first}}({{/first}}{{{v}}}{{^last}}, {{/last}}{{#last}}).{{/last}}{{/ea:manif:ISMN_Qualify}}\
{{#ea:manif:ISMN_Canceled}}{{#first}} - {{/first}}{{{v}}} (Canceled){{^last}}, {{/last}} {{/ea:manif:ISMN_Canceled}}\
{{#ea:manif:ISSN_Cancelled}}{{#first}} - {{/first}}{{{v}}} (Canceled){{^last}}.{{/last}} {{/ea:manif:ISSN_Cancelled}}\
{{#ea:manif:ISSN_Incorrect}}{{#first}} - {{/first}}{{{v}}} (Incorrect){{^last}}.{{/last}} {{/ea:manif:ISSN_Incorrect}}\
{{#ea:manif:ISSN_LNumber}}{{#first}} - {{/first}}{{{v}}} (Linking Number){{^last}}.{{/last}} {{/ea:manif:ISSN_LNumber}}\
{{#ea:manif:ISSN_LCanceled}}{{#first}} - {{/first}}{{{v}}} (Linking Canceled){{^last}}.{{/last}} {{/ea:manif:ISSN_LCanceled}}',
						})
});
					cmdCreate('manif_isbn_extend',{
					    action: 'extend',
					    opts:{
					      label:key_labels['ea:manif:ISBN'],
					      primary:'manif_isbn_number',
					      commands:['manif_isbn_number','manif_isbn_terms','manif_isbn_qualify','manif_isbn_canceled'],
					    }
});

					cmdCreate('manif_issn_extend',{
					    action: 'extend',
					    opts:{
					      label:key_labels['ea:manif:ISSN'],
					      primary:'manif_issn_number',
					      commands:['manif_issn_number','manif_issn_cancelled','manif_issn_incorrect','manif_issn_lnumber','manif_issn_lcanceled'],
					      }
});

					cmdCreate('manif_ismn_extend',{
					    action: 'extend',
					    opts:{
					      label:key_labels['ea:manif:ISMN'],
					      primary:'manif_ismn_number',
					      commands:['manif_ismn_number','manif_ismn_terms','manif_ismn_qualify','manif_ismn_canceled'],
					    }
});


					cmdCreate('manif_isbn_number',{
					    action : 'setupField',
					    opts : {
					      'key' : 'ea:manif:ISBN_Number',
					      'label':key_labels['ea:manif:ISBN'],
					      'show_help' : true,
					    }
});

					cmdCreate('manif_isbn_terms',{
					    action : 'setupField',
					    opts : jQuery.extend({},opts_text,{
					      'key' : 'ea:manif:ISBN_Terms',
					      'label':key_labels['ea:manif:ISBN_Terms'],
					      'show_help' : true,
					    })
});

					cmdCreate('manif_isbn_qualify',{
					    action : 'setupField',
					    opts : jQuery.extend({},opts_multy_text,{
					      'key' : 'ea:manif:ISBN_Qualify',
					      'label':key_labels['ea:manif:ISBN_Qualify'],
					      'show_help' : true,
					      repeat_style : 'ordered',
					    })
});

					cmdCreate('manif_isbn_canceled',{
					    action : 'setupField',
					    opts : jQuery.extend({},opts_multy_text,{
					      'key' : 'ea:manif:ISBN_Canceled',
					      'label':key_labels['ea:manif:ISBN_Canceled'],
					      'show_help' : true,
					      repeat_style : 'ordered',
					    })
});

					cmdCreate('manif_issn_number',{
					    action : 'setupField',
					    opts : {
					      'key' : 'ea:manif:ISSN_Number',
					      'label':key_labels['ea:manif:ISSN'],
					      'show_help' : true,
					    }
});

					cmdCreate('manif_issn_cancelled',{
					    action : 'setupField',
					    opts : jQuery.extend({},opts_multy_text,{
					      'key' : 'ea:manif:ISSN_Cancelled',
					      'label':key_labels['ea:manif:ISSN_Cancelled'],
					      'show_help' : true,
					      repeat_style : 'ordered',
					    })
});

					cmdCreate('manif_issn_incorrect',{
					    action : 'setupField',
					    opts : jQuery.extend({},opts_multy_text,{
					      'key' : 'ea:manif:ISSN_Incorrect',
					      'label':key_labels['ea:manif:ISSN_Incorrect'],
					      'show_help' : true,
					      repeat_style : 'ordered',
					    })
});

					cmdCreate('manif_issn_lnumber',{
					    action : 'setupField',
					    opts : jQuery.extend({},opts_text,{
					      key:'ea:manif:ISSN_LNumber',
					      label:key_labels['ea:manif:ISSN_LNumber'],
					      show_help : true,
					      })
});

					cmdCreate('manif_issn_lcanceled',{
					    action : 'setupField',
					    opts : jQuery.extend({},opts_multy_text,{
					      'key' : 'ea:manif:ISSN_LCanceled',
					      'label':key_labels['ea:manif:ISSN_LCanceled'],
					      'show_help' : true,
					      repeat_style : 'ordered',
					    })
});

					cmdCreate('manif_ismn_number',{
					    action : 'setupField',
					    opts : {
					      'key' : 'ea:manif:ISMN_Number',
					      'label':key_labels['ea:manif:ISMN'],
					      'show_help' : true,
					    }
});

					cmdCreate('manif_ismn_terms',{
					    action : 'setupField',
					    opts : jQuery.extend({},opts_text,{
					      'key' : 'ea:manif:ISMN_Terms',
					      'label':key_labels['ea:manif:ISMN_Terms'],
					      'show_help' : true,
					    })
});

					cmdCreate('manif_ismn_qualify',{
					    action : 'setupField',
					    opts : jQuery.extend({},opts_multy_text,{
					      'key' : 'ea:manif:ISMN_Qualify',
					      'label':key_labels['ea:manif:ISMN_Qualify'],
					      'show_help' : true,
					      repeat_style : 'ordered',
					    })
});

					cmdCreate('manif_ismn_canceled',{
					    action : 'setupField',
					    opts : jQuery.extend({},opts_multy_text,{
					      'key' : 'ea:manif:ISMN_Canceled',
					      'label':key_labels['ea:manif:ISMN_Canceled'],
					      'show_help' : true,
					      repeat_style : 'ordered',
					    })
});


	/****************************************************/
	/****************** manifnote ***********************/
	/****************************************************/

					cmdCreate('manif_note',{
										action : 'setupField',
										type : 'text',
										opts : jQuery.extend({},opts_multy_text,{
											setupOptions: function(options){
												options.select_key_map= note_map;
												return options;
											},
											select_key_width:'160px',
											width:488,
											show_help : true,
											label : key_labels['ea:manif:note'],
											repeat_style : 'ordered',
										})
});


	/****************************************************/
	/******** manifSerialsNumbering *********************/
	/****************************************************/

					cmdCreate('manif_serials_numbering',{
								  action : 'setupField',
								  opts : jQuery.extend({},opts_multy_text,{
								    'key' : 'ea:manif:Serials_Numbering',
								    'label':key_labels['ea:manif:Serials_Numbering'],
								    'show_help' : true,
								    repeat_style : 'ordered',
								    'advanced_field': true,
								  })
});


	/****************************************************/
	/************* manifCountry_Code ********************/
	/****************************************************/

					cmdCreate('manif_country_code',{
					    action : 'setupField',
					    opts : jQuery.extend({},opts_multy_text,{
					      'key' : 'ea:manif:Country_Code',
					      'label' : key_labels['ea:manif:Country_Code'],
					      'show_help' : true,
					      'type' : 'select',
					      'width': '650',
					      'select_values':county_map,
					      repeat_style : 'ordered',
					      'advanced_field': true,
					    })
});


/****************************************************/
/*****************  manif_url_rel *******************/
/****************************************************/
					cmdCreate('manif_url_rel',{
							action : 'setupField',
							opts : jQuery.extend({},commands.url_rel.opts,{
								repeat_style : 'ordered',
								'advanced_field': true,
								})
});


/****************************************************/
/**************  manifSubject ***********************/
/****************************************************/

					cmdCreate('manif_subject',{
						action : 'setupField',
						opts : jQuery.extend({},opts_text,{
											'key' : 'ea:manif:Subject',
											'label' : key_labels['ea:manif:Subject'],
											extend : true,
											extend_command : 'manif_subject_extend',
											extend_punctuation : '{{v}}',
										})
});

					cmdCreate('manif_subject_extend',{
					    action: 'extend',
					    opts:{
					      label:key_labels['ea:manif:Subject'],
					      primary:'manif_subject_proper',
					      commands:['manif_subject_proper'],
					    }
});


					cmdCreate('manif_subject_proper',{
					    action : 'setupField',
					    opts : jQuery.extend({},opts_multy_text,{
					      'key' : 'ea:manif:Subject',
					      'label':key_labels['ea:manif:Subject'],
					      repeat_style : 'ordered',
					    })
});


/****************************************************/
/**************  manifKeywords **********************/
/****************************************************/

					cmdCreate('manif_keywords',{
					    action : 'setupField',
					    opts : jQuery.extend({},opts_text,{
					      'key' : 'ea:manif:Keywords',
					      'label':key_labels['ea:manif:Keywords'],
					    })
});


/*******************************************************/
/****************  Work / Expression *******************/
/*******************************************************/
cmdCreate('manif_work_expression',{
							action:'setupField',
							opts : jQuery.extend({},commands.publishers_all.opts,{
								'label':key_labels['ea:manif:Work_Expression'],
								repeat_style: 'ordered',
							})
});


/****************************************************/
/*********** Manifestation Availability *************/
/****************************************************/

//			 cmdCreate('manif_availability',{
//						action : 'setupField',
//						opts : jQuery.extend({},opts_multy_text,{
//											'key' : 'ea:manif:availability',
//											'label' : key_labels['ea:manif:availability'],
//											extend : true,
//											extend_command : 'manif_availability_library',
//											repeat_style : 'ordered',
//											extend_punctuation : '{{v}}{{#ea:url:related}}. -Link: {{v}}{{/ea:url:related}}',
//										})
//});

//				cmdCreate('manif_availability_extend',{
//					    action: 'extend',
//					    opts:{
//					      label:key_labels['ea:expres:Note_Citation'],
//					      primary:'manif_availability_library',
//					      commands:['manif_availability_library'/*,'manif_availability_url'*/],
//					    }
//});

				cmdCreate.relation({
					'cmd_name':'manif_availability_library',
					'object_type':'auth-organization',
					'key' : 'ea:manif:availability_library',
		      'label':key_labels['ea:manif:availability_library'],
					'search_url':'/prepo/ws/search-organization',
					 'extend_commands' : f_auth_organization_extend,
					 'new_button_label' : 'new organization',
					 'extend_primary_label' : key_labels['authOrganization_Name'],
					 'repeat_style' : 'ordered',
					 'add_button' : true,
					 'search_dialog_commands':['manif_availability_url'],
					 extend_punctuation : '{{v}}{{#ea:url:related}}. -Link: {{v}}{{/ea:url:related}}',
				});

				cmdCreate('manif_availability_url',{
				    action : 'setupField',
				    opts : jQuery.extend({},commands.url_rel.opts,{
				    	'add_button' : false,
				      'label':key_labels['ea:manif:availability_url'],
				    })
});



