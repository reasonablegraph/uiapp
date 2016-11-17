var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'auth-genre.js');

/**********************************************/
/**********  Header genre Public *************/
/**********************************************/
cmdCreate('header_genre_public',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_type.opts,{
		id:'sect_genre_public',
		skey:'sect_genre_public',
		label:key_labels['genre_header_public'],
		class:'sect_genre_level_1',
		level:1,
	})
});

/**********************************************/
/**********  Header genre Status *************/
/**********************************************/
cmdCreate('header_genre_status',{
	action:'addSection',
	opts:{
		id:'sect_genre_status',
		skey:'sect_genre_status',
		label:key_labels['status'],
		class:'sect_genre_level_1',
		level:1,
		status:'closed',
	}
});


/**********************************************/
/*********  Header Genre Control  ***********/
/**********************************************/

cmdCreate('header_genre_control_open',{
  "action": "addSection",
  opts : {
    "skey": "genre_control",
    "label": key_labels['ea:auth:Genre_Header_Control'],
    class:'sect_genre_level_2',
    "level": 2
  }
});

/**********************************************/
/*******  Header Genre Basic ******************/
/**********************************************/
cmdCreate('header_sect_genre_basic',{
    action:'addSection',
    opts:{
      skey:'sect_genre_basic',
      label:key_labels['ea:auth:Genre_Header_Basic'],
      class:'sect_genre_level_2',
      level:2,
    }
});


/**********************************************/
/*******  Header Genre Additional *************/
/**********************************************/
cmdCreate('header_sect_genre_additional',{
    action:'addSection',
    opts:{
      skey:'sect_genre_additional',
      label:key_labels['ea:auth:Genre_Header_Additional'],
      class:'sect_genre_level_2',
      level:2,
    }
});


/**********************************************/
/*****  Header Genre Information ***************/
/**********************************************/
cmdCreate('header_sect_genre_information',{
    action:'addSection',
    opts:{
      skey:'sect_genre_information',
      label:key_labels['ea:auth:Genre_Header_Information'],
      class:'sect_genre_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/*****  Header Genre Link *********************/
/**********************************************/
cmdCreate('header_sect_genre_link',{
    action:'addSection',
    opts:{
      skey:'sect_genre_link',
      label:key_labels['ea:auth:Genre_Header_Link'],
      class:'sect_genre_level_2',
      level:2,
      status:'closed',
    }
});


/****************************************************/
/** Header Genre Classification / Cataloging ********/
/****************************************************/
cmdCreate('header_sect_genre_cataloging',{
    action:'addSection',
    opts:{
      skey:'sect_genre_cataloging',
      label:key_labels['ea:auth:Genre_Header_Cataloging'],
      class:'sect_genre_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/******  Header Genre Relations  **************/
/**********************************************/
cmdCreate('header_sect_genre_relations',{
    action:'addSection',
    opts:{
      skey:'sect_genre_relations',
      label:key_labels['ea:auth:Genre_Header_Relations'],
      class:'sect_genre_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/******  Header Genre Subject  ****************/
/**********************************************/
cmdCreate('header_sect_genre_subjects',{
    action:'addSection',
    opts:{
      skey:'sect_genre_subjects',
      label:key_labels['ea:auth:Genre_Header_Subjects'],
      class:'sect_genre_level_2',
      level:2,
    }
});


/****************************************************/
/********** Genre Term  ***************************/
/****************************************************/
cmdCreate('genre_term',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'dc:title:',//'ea:auth:Genre_Term',
      'label':key_labels['ea:auth:Genre_Term'],
      'show_help' : true,
      'clear':'left',
    })
});


/****************************************************/
/************* Genre Type ***************************/
/****************************************************/
cmdCreate.relation({
	'cmd_name':'genre_type',
	'object_type':'auth-concept',
	'key' : 'ea:auth:Genre_Type',
	'label':key_labels['ea:auth:Genre_Type'],
	'search_url':'/prepo/ws/search-subject-concept',
	 'extend_commands' : f_auth_concept_extend,
	 'new_button_label' : 'new concept',
	 'extend_primary_label' : key_labels['ea:auth:Genre_Term'],
	 'time_bounded': true,
	 extend_punctuation : '{{{v}}}\
{{#ea:relation:DateStart}} ({{{v}}}{{^ea:relation:DateEnd}} - ){{/ea:relation:DateEnd}}{{/ea:relation:DateStart}}\
{{#ea:relation:DateEnd}}{{^ea:relation:DateStart}} ({{/ea:relation:DateStart}} - {{{v}}}){{/ea:relation:DateEnd}}',
//	 'search_dialog_commands':['relation_comment'],
});



/****************************************************/
/************* Genre Place **************************/
/****************************************************/
cmdCreate('genre_place',{
  action : 'setupField',
	opts : jQuery.extend({},commands.event_place.opts,{
		'key' : 'ea:auth:Genre_Place',
 })
});

/****************************************************/
/************* Genre Start Date *********************/
/****************************************************/
cmdCreate('genre_start_date',{
  action : 'setupField',
	opts : jQuery.extend({},commands.event_start_date.opts,{
		'key':'ea:auth:Genre_Start_Date',
 })
});

/****************************************************/
/************* Genre Expiry_Date ********************/
/****************************************************/
cmdCreate('genre_expiry_date',{
  action : 'setupField',
	opts : jQuery.extend({},commands.event_expiry_date.opts,{
		 'key':'ea:auth:Genre_Expiry_Date',
 })
});

/*****************************************************/
/********** Extented Header genre Public *************/
/*****************************************************/
cmdCreate('header_genre_public_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_genre_public.opts,{
		skey:'sect_genre_public_extented',
	  width: 898,
	  add_button:false,
 })
});

/*****************************************************/
/********** Extented Header genre Status *************/
/*****************************************************/
cmdCreate('header_genre_status_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_genre_status.opts,{
		skey:'sect_genre_status_extented',
	 })
});


/****************************************************/
/********* Extented Header Genre Control  ***********/
/****************************************************/

cmdCreate('header_genre_control_open_extented',{
  "action": "addSection",
  opts : jQuery.extend({},commands.header_genre_control_open.opts,{
    "skey": "genre_control_extented",
  })
});

/******************************************************/
/******* Extented Header Genre Basic ******************/
/******************************************************/
cmdCreate('header_sect_genre_basic_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_genre_basic.opts,{
      skey:'sect_genre_basic_extented',
    })
});


/******************************************************/
/******* Extented Header Genre Additional *************/
/******************************************************/
cmdCreate('header_sect_genre_additional_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_genre_additional.opts,{
      skey:'sect_genre_additional_extented',
    })
});


/******************************************************/
/***** Extented Header Genre Information **************/
/******************************************************/
cmdCreate('header_sect_genre_information_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_genre_information.opts,{
      skey:'sect_genre_information_extented',
    })
});


/******************************************************/
/***** Extented Header Genre Link *********************/
/******************************************************/
cmdCreate('header_sect_genre_link_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_genre_link.opts,{
      skey:'sect_genre_link_extented',
    })
});


/*************************************************************/
/** Extented Header Genre Classification / Cataloging ********/
/*************************************************************/
cmdCreate('header_sect_genre_cataloging_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_genre_cataloging.opts,{
      skey:'sect_genre_cataloging_extented',
    })
});


/******************************************************/
/****** Extented Header Genre Subject  ****************/
/******************************************************/
cmdCreate('header_sect_genre_subjects_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_genre_subjects.opts,{
      skey:'sect_genre_subjects_extented',
    })
});




