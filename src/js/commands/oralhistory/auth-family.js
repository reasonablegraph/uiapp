var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'auth-family.js');

/**********************************************/
/**********  Header Family Public *************/
/**********************************************/
cmdCreate('header_family_public',{
  "action": "addSection",
    opts : jQuery.extend({},commands.header_type.opts,{
    "skey": "sect_family_public",
    "label": key_labels['ea:auth:Family_Header_Fields'],
    class:'sect_family_level_1',
    "level": 1
  })
});


/**********************************************/
/**********  Header Family Control ************/
/**********************************************/
cmdCreate('header_family_control',{
  "action": "addSection",
  	opts : {
    "skey": "family_control",
    "label": key_labels['ea:auth:Family_Header_Control'],
    class:'sect_family_level_2',
    "level": 2
  }
});


/**********************************************/
/**********  Header Family Status *************/
/**********************************************/
cmdCreate('header_family_status',{
	action:'addSection',
	opts:{
		id:'sect_family_status',
		skey:'sect_family_status',
		label:key_labels['status'],
		class:'sect_family_level_1',
		level:1,
		status:'closed',
	}
});

/**********************************************/
/***********  Header Family Basic *************/
/**********************************************/
cmdCreate('header_sect_family_basic',{
    action:'addSection',
    opts:{
      skey:'sect_family_basic',
      label:key_labels['ea:auth:Family_Header_Basic'],
      class:'sect_family_level_2',
      level:2,
      add_button_advanced:true,
      add_button_advanced_label:key_labels['advanced_fields'],
    }
});


/**********************************************/
/*******  Header Family Additional ************/
/**********************************************/
cmdCreate('header_sect_family_additional',{
    action:'addSection',
    opts:{
      skey:'sect_family_additional',
      label:key_labels['ea:auth:Family_Header_Additional'],
      class:'sect_family_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/*******  Header Family information ***********/
/**********************************************/
cmdCreate('header_sect_family_information',{
    action:'addSection',
    opts:{
      skey:'sect_family_information',
      label:key_labels['ea:auth:Family_Header_Information'],
      class:'sect_family_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/*******  Header Family Link ******************/
/**********************************************/
cmdCreate('header_sect_family_link',{
    action:'addSection',
    opts:{
      skey:'sect_family_link',
      label:key_labels['ea:auth:Family_Header_Link'],
      class:'sect_family_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/** Header Family Classification / Cataloging */
/**********************************************/
cmdCreate('header_sect_family_cataloging',{
    action:'addSection',
    opts:{
      skey:'sect_family_cataloging',
      label:key_labels['ea:auth:Family_Header_Cataloging'],
      class:'sect_family_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/*********  Header Family Relations  **********/
/**********************************************/
cmdCreate('header_sect_family_relations',{
    action:'addSection',
    opts:{
      skey:'sect_family_relations',
      label:key_labels['ea:auth:Family_Header_Relations'],
      class:'sect_family_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/*********  Header Family Subject  ************/
/**********************************************/
cmdCreate('header_sect_family_subjects',{
    action:'addSection',
    opts:{
      skey:'sect_family_subject',
      label:key_labels['ea:auth:Family_Header_Subjects'],
      class:'sect_family_level_2',
      level:2,
      status:'closed',
    }
});


/****************************************************/
/**************  Family Name Simple *****************/
/****************************************************/

cmdCreate('family_name_simple',{
		action : 'setupField',
		opts : jQuery.extend({},commands.personal_name_simple.opts,{
			'label':key_labels['authFamily'],
			'clear':'left',
		})
});


/****************************************************/
/*************  Family Titles Place *****************/
/****************************************************/
cmdCreate('family_titles_place',{
		action : 'setupField',
		opts : jQuery.extend({},opts_multy_text,{
			'key' : 'ea:auth:Family_Titles_Place',
			'label':key_labels['ea:auth:Family_Titles_Place'],
			'repeat_style' : 'ordered',
			'advanced_field': true,
		})
});


/****************************************************/
/*************  Family Type *************************/
/****************************************************/
cmdCreate('family_type',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:auth:Family_Type',
			'label':key_labels['ea:auth:Family_Type'],
			'advanced_field': true,
		})
});


/****************************************************/
/*************** Family Dates Associated ************/
/****************************************************/
cmdCreate('family_dates_associated',{
    action : 'setupField',
  	opts : jQuery.extend({},commands.person_dates_associated.opts,{
      'label':key_labels['ea:auth:family_DatesAssociated'],
      'show_help' : true,
      'advanced_field': true,
    })
});


/****************************************************/
/*********** Family Associated Language *************/
/****************************************************/

cmdCreate('family_associated_language',{
    action : 'setupField',
    opts : jQuery.extend({},commands.associated_language.opts,{
      'advanced_field': false,
    })
});



/****************************************************/
/*********** Family Other associated place **********/
/****************************************************/
//cmdCreate('family_other_place',{
//  action : 'setupField',
//  opts : jQuery.extend({},commands.other_place.opts,{
//    'advanced_field': false,
//  })
//});

cmdCreate.relation({
	'cmd_name':'family_other_place',
	'object_type':'auth-place',
	'key' : 'ea:authAssociated:OtherPlace_Place',
	'label':key_labels['ea:authAssociated:OtherPlace_Place'],
	'search_url':'/prepo/ws/search-place',
	 'extend_commands' : f_auth_place_extend,
	 'new_button_label' : 'new place',
	 'extend_primary_label' : key_labels['ea:auth:Place_Term'],
	 'repeat_style' : 'ordered',
	 'add_button' : true,
});


/****************************************************/
/*********** Family Participation in events *********/
/****************************************************/
cmdCreate('family_participation_in_events',{
  action : 'setupField',
  opts : jQuery.extend({},commands.participation_in_events.opts,{
    'advanced_field': false,
  })
});


/****************************************************/
/***********  Family Information ********************/
/****************************************************/

cmdCreate('family_information',{
		action : 'setupField',
		opts : jQuery.extend({},opts_multy_text,{
			'key' : 'ea:auth:FamilyInformation_Type',
			'label':key_labels['authFamilyInformation'],
			'repeat_style' : 'ordered',
			extend:true,
			extend_command: 'family_information_extend',
			extend_punctuation : '{{{v}}}\
{{#ea:auth:FamilyInformation_Member}}{{#first}}. - Μέλη: {{/first}}{{{v}}}, {{/ea:auth:FamilyInformation_Member}}\
{{#ea:auth:FamilyCodedDates_StartPeriod}} {{{v}}}{{/ea:auth:FamilyCodedDates_StartPeriod}}\
{{#ea:auth:FamilyCodedDates_EndPeriod}} - {{{v}}}{{/ea:auth:FamilyCodedDates_EndPeriod}}',
		})
});

cmdCreate('family_information_extend',{
		action: 'extend',
		opts:{
			'label':key_labels['authFamilyInformation'],
			'primary':'family_information_simple',
			'commands':['family_information_simple','family_information_member','information_start_period','information_end_period'],
		}
});

cmdCreate('family_information_simple',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:auth:FamilyInformation_Type',
			'label':key_labels['ea:auth:FamilyInformation_Type'],
		})
});

cmdCreate('family_information_member',{
		action : 'setupField',
		opts : jQuery.extend({},opts_multy_text,{
			'key' : 'ea:auth:FamilyInformation_Member',
			'label':key_labels['ea:auth:FamilyInformation_Member'],
			'repeat_style' : 'ordered',
		})
});

cmdCreate('information_start_period',{
		action : 'setupField',
		opts : {
			key:'ea:auth:FamilyCodedDates_StartPeriod',
			label:key_labels['authFamilyInformation_StartPeriod'],
			type : 'date',
			show_help : true,
			one_label: true,
			width:"345px",
			}
});

cmdCreate('information_end_period',{
		action : 'setupField',
		opts : {
			key:'ea:auth:FamilyCodedDates_EndPeriod',
			label:key_labels['authFamilyInformation_EndPeriod'],
			type : 'date',
			show_help : true,
			one_label: true,
			width:"345px",
			}
});


/***************************************************/
/*********** Family Coded Dates *********************/
/****************************************************/
cmdCreate('date_start_period',{
		action : 'setupField',
	 	opts : jQuery.extend({},commands.date_birth.opts,{
			label:key_labels['ea:auth:FamilyCodedDates_StartPeriod'],
			})
});

cmdCreate('date_end_period',{
		action : 'setupField',
	 	opts : jQuery.extend({},commands.date_death.opts,{
			label:key_labels['ea:auth:FamilyCodedDates_EndPeriod'],
			})
});


/**********************************************/
/**********  Extented Family Public *************/
/**********************************************/
cmdCreate('header_family_public_extented',{
  "action": "addSection",
  opts : jQuery.extend({},commands.header_family_public.opts,{
    "skey": "sect_family_extented",
    width: 898,
    add_button:false,
  })
});

/**********************************************/
/*********  Extented Family Control ***********/
/**********************************************/
cmdCreate('header_family_control_extented',{
  "action": "addSection",
  opts : jQuery.extend({},commands.header_family_control.opts,{
    "skey": "family_control_extented",
  })
});

/**********************************************/
/*****  Extented Header Family Basic **********/
/**********************************************/
cmdCreate('header_sect_family_basic_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_family_basic.opts,{
      skey:'sect_family_basic_extented',
    })
});

/**********************************************/
/****  Extented Header Family Additional ******/
/**********************************************/
cmdCreate('header_sect_family_additional_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_family_additional.opts,{
      skey:'sect_family_additional_extented',
    })
});

/**********************************************/
/****  Extented Header Family information *****/
/**********************************************/
cmdCreate('header_sect_family_information_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_sect_family_information.opts,{
		skey:'sect_family_information_extented',
	})
});

/**********************************************/
/******  Extented Header Family Link **********/
/**********************************************/
cmdCreate('header_sect_family_link_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_sect_family_link.opts,{
		skey:'sect_family_link_extented',
	})
});

/**********************************************/
/**  Extented Header Family Classific *********/
/**********************************************/
cmdCreate('header_sect_family_cataloging_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_sect_family_cataloging.opts,{
		skey:'sect_family_cataloging_extented',
	})
});

/**********************************************/
/****  Extented Header Family Subject **********/
/**********************************************/
cmdCreate('header_sect_family_subjects_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_sect_family_subjects.opts,{
		skey:'sect_family_subjects_extented',
	})
});

/**********************************************/
/****  Extented Header Family Status **********/
/**********************************************/
cmdCreate('header_family_status_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_family_status.opts,{
		skey:'sect_family_status_extented',
	})
});

/**************************************************************/
/************************ General *****************************/
/**************************************************************/
cmdCreate('family_general',{
		action: 'extend',
		opts:{
			label:null,
			primary:'family_name',
			commands:[
			'header_public',
			'header_actor',
			'country_name',
			'other_place',
			'family_information',
			'associated_language',
			'nationality',
			'date_start_period',
			'date_end_period',
			'nonpublic_general_note',
			'public_general_note',
			'biographical_data',
			'electronic_location',
			'lccn_number',
			'national_bibliography_number',
			'isni_number',
			'viaf_number',
			'cataloging_source_original',
			'lc_classification',
			'ddc_number',
			'header_sect_relations',
			'person_see_id',
			'header_private',
			'comment_simple_internal',
			'status_comment',
			'header_status',
			'status',
			],
		}
});


///****************************************************/
///**************  authFamily *************************/
///****************************************************/
//commands.family_name = {
//		action : 'setupField',
//		opts : jQuery.extend({},commands.personal_name.opts,{
//			'label':key_labels['authFamily'],
//			extend:true,
//			extend_command: 'family_name_extend',
//			extend_punctuation : '{{v}}\
//{{#ea:auth:Person_Numeration}} {{v}}{{/ea:auth:Person_Numeration}}\
//{{#ea:auth:Person_TitlesAssociated}}, {{v}}{{/ea:auth:Person_TitlesAssociated}}\
//{{#ea:auth:Person_DatesAssociated}} ({{v}}){{/ea:auth:Person_DatesAssociated}}\
//{{#ea:auth:Person_FullerName}} ({{v}}){{/ea:auth:Person_FullerName}}\
//{{#ea:auth:Person_FormSubdivision}}{{#first}} -{{/first}} {{v}}{{^last}},{{/last}}{{/ea:auth:Person_FormSubdivision}}\
//{{#ea:auth:Person_GeneralSubdivision}}{{#first}} -{{/first}} {{v}}{{^last}},{{/last}}{{/ea:auth:Person_GeneralSubdivision}}\
//{{#ea:auth:Person_ChronoSubdivision}}{{#first}} -{{/first}} {{v}}{{^last}},{{/last}}{{/ea:auth:Person_ChronoSubdivision}}\
//{{#ea:auth:Person_GeographicSubdivision}}{{#first}} -{{/first}} {{v}}{{^last}},{{/last}}{{/ea:auth:Person_GeographicSubdivision}}',
//		})
//	};
//
//commands.family_name_extend = {
//		action: 'extend',
//		opts:{
//		  label:key_labels['authFamily'],
//			primary:'family_name_simple',
//			commands:['personal_type','family_name_simple','person_numeration','person_titles_associated','person_dates_associated','person_fuller_name','person_form_subdivision',
//			          'person_general_subdivision','person_chrono_subdivision','person_geographic_subdivision'],
//		}
//	};


