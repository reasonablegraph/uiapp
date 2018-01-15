var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'auth-place.js');

/**********************************************/
/**********  Header Place Public **************/
/**********************************************/
cmdCreate('header_place_public',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_type.opts,{
		id:'sect_place_public',
		skey:'sect_place_public',
		label:key_labels['place_header_public'],
		class:'sect_place_level_1',
		level:1,
  })
});

/**********************************************/
/**********  Header Place Control *************/
/**********************************************/
cmdCreate('header_place_control',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_type.opts,{
		"skey": "place_control",
		'label':key_labels['place_header_control'],
		class:'sect_place_level_2',
		add_button:false,
		"level": 2
	})
});

/**********************************************/
/**********  Header Place Status **************/
/**********************************************/
cmdCreate('header_place_status',{
	action:'addSection',
	opts:{
		id:'sect_place_status',
		skey:'sect_place_status',
		label:key_labels['status'],
		class:'sect_place_level_1',
		level:1,
		status:'closed',
	}
});




/**********************************************/
/*******  Header Place Basic ******************/
/**********************************************/
cmdCreate('header_sect_place_basic',{
    action:'addSection',
    opts:{
      skey:'sect_place_basic',
      label:key_labels['ea:auth:Place_Header_Basic'],
      class:'sect_place_level_2',
      level:2,
    }
});


/**********************************************/
/*******  HeaderPlace Additional *************/
/**********************************************/
cmdCreate('header_sect_place_additional',{
    action:'addSection',
    opts:{
      skey:'sect_place_additional',
      label:key_labels['ea:auth:Place_Header_Additional'],
      class:'sect_place_level_2',
      level:2,
    }
});


/**********************************************/
/*****  Header Place Information ***************/
/**********************************************/
cmdCreate('header_sect_place_information',{
    action:'addSection',
    opts:{
      skey:'sect_place_information',
      label:key_labels['ea:auth:Place_Header_Information'],
      class:'sect_place_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/*****  Header Place Link *********************/
/**********************************************/
cmdCreate('header_sect_place_link',{
    action:'addSection',
    opts:{
      skey:'sect_place_link',
      label:key_labels['ea:auth:Place_Header_Link'],
      class:'sect_place_level_2',
      level:2,
      status:'closed',
    }
});


/****************************************************/
/** Header Place Classification / Cataloging ********/
/****************************************************/
cmdCreate('header_sect_place_cataloging',{
    action:'addSection',
    opts:{
      skey:'sect_place_cataloging',
      label:key_labels['ea:auth:Place_Header_Cataloging'],
      class:'sect_place_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/******  Header Place Relations  **************/
/**********************************************/
cmdCreate('header_sect_place_relations',{
    action:'addSection',
    opts:{
      skey:'sect_place_relations',
      label:key_labels['ea:auth:Place_Header_Relations'],
      class:'sect_place_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/******  Header Place Subject  ****************/
/**********************************************/
cmdCreate('header_sect_place_subjects',{
    action:'addSection',
    opts:{
      skey:'sect_place_subject',
      label:key_labels['ea:auth:Place_Header_Subjects'],
      class:'sect_place_level_2',
      level:2,
    }
});


/****************************************************/
/********** Place Term  ***************************/
/****************************************************/
cmdCreate('place_term',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'dc:title:',//'ea:auth:Place_Term',
      'label':key_labels['ea:auth:Place_Term'],
      'show_help' : true,
      'clear':'left',
    })
});


/****************************************************/
/************* Place Type ***************************/
/****************************************************/
cmdCreate.relation({
	'cmd_name':'place_type',
	'object_type':'auth-concept',
	'key' : 'ea:auth:Place_Type',
	'label':key_labels['ea:auth:Place_Type'],
	'search_url':'/prepo/ws/search-subject-concept',
	 'extend_commands' : f_auth_concept_extend,
	 'new_button_label' : 'new concept',
	 'extend_primary_label' : key_labels['ea:auth:Place_Term'],
	 'time_bounded': true,
		root_options:{
		 "add_button": true,
		 "repeat_style": "ordered",
		},
	 extend_punctuation : '{{{v}}}\
{{#ea:relation:DateStart}} ({{{v}}}{{^ea:relation:DateEnd}} - ){{/ea:relation:DateEnd}}{{/ea:relation:DateStart}}\
{{#ea:relation:DateEnd}}{{^ea:relation:DateStart}} ({{/ea:relation:DateStart}} - {{{v}}}){{/ea:relation:DateEnd}}',
//	 'search_dialog_commands':['relation_comment'],
});


//cmdCreate('place_type',{
//		action : 'setupField',
//		opts : jQuery.extend({},opts_text,{
//			'key' : 'ea:auth:Place_Type',
//			'label':key_labels['ea:auth:Place_Type'],
//			type : 'select',
//			select_values: place_type_map,
//			width:300,
//		})
//});


/***************************************************/
/************* Place Start Date *******************/
/***************************************************/
cmdCreate('place_start_date',{
  action : 'setupField',
  opts : jQuery.extend({},opts_text,{
		'key':'ea:auth:Place_Start_Date',
    label:key_labels['ea:auth:Event_Start_Date'],
    type : 'date',
    show_help : true,
    one_label: true,
    width:"345px",
  })
});



/***************************************************/
/************* Place Expiry_Date *****************/
/***************************************************/
cmdCreate('place_expiry_date',{
  action : 'setupField',
  opts : jQuery.extend({},opts_text,{
    'key':'ea:auth:Place_Expiry_Date',
    label:key_labels['ea:auth:Event_Expiry_Date'],
    type : 'date',
    show_help : true,
    one_label: true,
    width:"345px",
  })
});


///****************************************************/
///************ Relation Place See Also ***************/
///****************************************************/
//cmdCreate('relation_place_see_also',{
//    action : 'setupField',
//    opts : jQuery.extend({},commands.relation_concept_see_also.opts,{
//    	 'label':key_labels['ea:auth:Place_See_Also'],
//    })
//});
//
//
///****************************************************/
///******* Relation Place Other Language **************/
///****************************************************/
//cmdCreate('relation_place_other_language',{
//    action : 'setupField',
//    opts : jQuery.extend({},commands.relation_person_other_language.opts,{
//      'label':key_labels['ea:auth:Place_Other_Language'],
//    })
//});




///****************************************************/
///*************** Place Language *********************/
///****************************************************/
//
//commands.place_language = {
//		action : 'setupField',
//		opts : jQuery.extend({},opts_text,{
//			'key' : 'ea:place:Language',
//			'label':key_labels['ea:place:Language'],
//			type : 'select',
//      select_values:language_map,
//		})
//	};
//
//
///****************************************************/
///*************** Place City *************************/
///****************************************************/
//
//commands.place_city = {
//		action : 'setupField',
//		opts : jQuery.extend({},opts_text,{
//			'key' : 'ea:place:City',
//			'label':key_labels['ea:place:City'],
//		})
//	};
//
//
///****************************************************/
///*************** Place Region ***********************/
///****************************************************/
//
//commands.place_region = {
//		action : 'setupField',
//		opts : jQuery.extend({},opts_text,{
//			'key' : 'ea:place:Region',
//			'label':key_labels['ea:place:Region'],
//		})
//	};
//
//
///****************************************************/
///*************** Place Country **********************/
///****************************************************/
//
//commands.place_country= {
//		action : 'setupField',
//		opts : jQuery.extend({},opts_text,{
//			'key' : 'ea:place:Country',
//			'label':key_labels['ea:place:Country'],
//			type : 'select',
//      select_values:county_nationality_map,
//		})
//	};
//
//
///****************************************************/
///*************** Place See **************************/
///****************************************************/
//
//commands.place_see = {
//		action : 'setupField',
//		opts : jQuery.extend({},opts_multy_text,{
//			'key' : 'ea:place:See',
//			'label':key_labels['ea:place:See'],
//		})
//	};
//
//
///****************************************************/
///**************  Place Link Entry *******************/
///****************************************************/
//
//commands.place_link_entry_name = {
//		action : 'setupField',
//		opts : jQuery.extend({},opts_multy_text,{
//			'key' : 'ea:place:LinkEntryName',
//			'label':key_labels['placeLinkEntry'],
//			 setupOptions: function(options){
//				 options.lang_select = {
//					  default_lang:language_default,
//					  available_languages: languages_avail,
//				  };
//				  return options;
//			  },
////			extend:true,
////			extend_command: 'place_link_entry_name_extend',
//		})
//	};

//commands.place_link_entry_name_extend = {
//		action: 'extend',
//		opts:{
//		  label:key_labels['placeLinkEntry'],
//			primary:'place_link_entry_name_simple',
//			commands:['place_link_entry_name_simple','place_link_entry_language',],
//		}
//	};
//
//commands.place_link_entry_name_simple = {
//		action : 'setupField',
//		opts : jQuery.extend({},opts_text,{
//			'key' : 'ea:place:LinkEntryName',
//			'label':key_labels['ea:place:LinkEntryName'],
//		})
//	};
//
//commands.place_link_entry_language = {
//		action : 'setupField',
//		opts : jQuery.extend({},opts_text,{
//			'key' : 'ea:place:LinkEntryLanguage',
//			'label':key_labels['ea:place:LinkEntryLanguage'],
//		})
//	};

/*******************************************************/
/**********  Extented Header Place Public **************/
/*******************************************************/
cmdCreate('header_place_public_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_place_public.opts,{
		skey:'sect_place_public_extented',
    width: 898,
    add_button:false,
	})
});


/*******************************************************/
/**********  Extented Header Place Control *************/
/*******************************************************/
cmdCreate('header_place_control_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_place_control.opts,{
		"skey": "place_control_extented",
	})
});
/*******************************************************/
/**********  Extented Header Place Status **************/
/******************************************************/
cmdCreate('header_place_status_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_place_status.opts,{
		skey:'sect_place_status_extented',
	})
});

/*******************************************************/
/*******  Extented Header Place Basic ******************/
/*******************************************************/
cmdCreate('header_sect_place_basic_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_place_basic.opts,{
      skey:'sect_place_basic_extented',
  	})
});

/******************************************************/
/******* Extented Header Place Additional *************/
/******************************************************/
cmdCreate('header_sect_place_additional_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_place_additional.opts,{
      skey:'sect_place_additional_extented',
    })
});

/*******************************************************/
/*****  Extented Header Place Information **************/
/*******************************************************/
cmdCreate('header_sect_place_information_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_place_information.opts,{
      skey:'sect_place_information_extented',
  	})
});

/*******************************************************/
/*****  Extented Header Place Link *********************/
/*******************************************************/
cmdCreate('header_sect_place_link_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_place_link.opts,{
      skey:'sect_place_link_extented',
  	})
});

/*************************************************************/
/** Extented Header Place Classification / Cataloging ********/
/*************************************************************/
cmdCreate('header_sect_place_cataloging_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_place_cataloging.opts,{
      skey:'sect_place_cataloging_extented',
  	})
});
/*******************************************************/
/******  Extented Header Place Subject  ****************/
/*******************************************************/
cmdCreate('header_sect_place_subjects_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_place_subjects.opts,{
      skey:'sect_place_subject_extented',
  	})
});

