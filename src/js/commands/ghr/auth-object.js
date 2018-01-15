var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'auth-object.js');

/**********************************************/
/**********  Header object Public *************/
/**********************************************/
cmdCreate('header_object_public',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_type.opts,{
		id:'sect_object_public',
		skey:'sect_object_public',
		label:key_labels['object_header_public'],
		class:'sect_object_level_1',
		level:1,
	})
});

/**********************************************/
/**********  Header object Status *************/
/**********************************************/
cmdCreate('header_object_status',{
	action:'addSection',
	opts:{
		id:'sect_object_status',
		skey:'sect_object_status',
		label:key_labels['status'],
		class:'sect_object_level_1',
		level:1,
		status:'closed',
	}
});

/**********************************************/
/*********  Header Object Control  ***********/
/**********************************************/

cmdCreate('header_object_control_open',{
  "action": "addSection",
  opts : {
    "skey": "object_control",
    "label": key_labels['ea:auth:Object_Header_Control'],
    class:'sect_object_level_2',
    "level": 2
  }
});

/**********************************************/
/*******  Header Object Basic ******************/
/**********************************************/
cmdCreate('header_sect_object_basic',{
    action:'addSection',
    opts:{
      skey:'sect_object_basic',
      label:key_labels['ea:auth:Object_Header_Basic'],
      class:'sect_object_level_2',
      level:2,
    }
});


/**********************************************/
/*******  Header Object Additional *************/
/**********************************************/
cmdCreate('header_sect_object_additional',{
    action:'addSection',
    opts:{
      skey:'sect_object_additional',
      label:key_labels['ea:auth:Object_Header_Additional'],
      class:'sect_object_level_2',
      level:2,
    }
})

/**********************************************/
/*****  Header Object Information ***************/
/**********************************************/
cmdCreate('header_sect_object_information',{
    action:'addSection',
    opts:{
      skey:'sect_object_information',
      label:key_labels['ea:auth:Object_Header_Information'],
      class:'sect_object_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/*****  Header Object Link *********************/
/**********************************************/
cmdCreate('header_sect_object_link',{
    action:'addSection',
    opts:{
      skey:'sect_object_link',
      label:key_labels['ea:auth:Object_Header_Link'],
      class:'sect_object_level_2',
      level:2,
      status:'closed',
    }
});


/****************************************************/
/** Header Object Classification / Cataloging ********/
/****************************************************/
cmdCreate('header_sect_object_cataloging',{
    action:'addSection',
    opts:{
      skey:'sect_object_cataloging',
      label:key_labels['ea:auth:Object_Header_Cataloging'],
      class:'sect_object_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/******  Header Object Relations  **************/
/**********************************************/
cmdCreate('header_sect_object_relations',{
    action:'addSection',
    opts:{
      skey:'sect_object_relations',
      label:key_labels['ea:auth:Object_Header_Relations'],
      class:'sect_object_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/******  Header Object Subject  ****************/
/**********************************************/
cmdCreate('header_sect_object_subjects',{
    action:'addSection',
    opts:{
      skey:'sect_object_subject',
      label:key_labels['ea:auth:Object_Header_Subjects'],
      class:'sect_object_level_2',
      level:2,
    }
});


/****************************************************/
/********** Object Term  ***************************/
/****************************************************/
cmdCreate('object_term',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'dc:title:',//'ea:auth:Object_Term',
      'label':key_labels['ea:auth:Object_Term'],
      'show_help' : true,
      'clear':'left',
    })
});


/****************************************************/
/************* Object Type **************************/
/****************************************************/
cmdCreate.relation({
	'cmd_name':'object_type',
	'object_type':'auth-concept',
	'key' : 'ea:auth:Object_Type',
	'label':key_labels['ea:auth:Object_Type'],
	'search_url':'/prepo/ws/search-subject-concept',
	 'extend_commands' : f_auth_concept_extend,
	 'new_button_label' : 'new concept',
	 'extend_primary_label' : key_labels['ea:auth:Object_Term'],
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



/****************************************************/
/************* Object Place *************************/
/****************************************************/
cmdCreate('object_place',{
  action : 'setupField',
	opts : jQuery.extend({},commands.event_place.opts,{
		'key' : 'ea:auth:Object_Place',
 })
});


/****************************************************/
/************* Object Start Date ********************/
/****************************************************/
cmdCreate('object_start_date',{
  action : 'setupField',
	opts : jQuery.extend({},commands.event_start_date.opts,{
		'key':'ea:auth:Object_Start_Date',
 })
});


/****************************************************/
/************* Object Expiry_Date *******************/
/****************************************************/
cmdCreate('object_expiry_date',{
  action : 'setupField',
	opts : jQuery.extend({},commands.event_expiry_date.opts,{
		 'key':'ea:auth:Object_Expiry_Date',
 })
});


/*****************************************************/
/********** Extented Header object Public ************/
/*****************************************************/
cmdCreate('header_object_public_extented',{
action:'addSection',
opts : jQuery.extend({},commands.header_object_public.opts,{
	skey:'sect_object_public_extented',
  width: 898,
  add_button:false,
})
});


/******************************************************/
/********** Extented Header object Status *************/
/******************************************************/
cmdCreate('header_object_status_extented',{
action:'addSection',
opts : jQuery.extend({},commands.header_object_status.opts,{
	skey:'sect_object_status_extented',
})
});

/*****************************************************/
/********* Extented Header Object Control  ***********/
/*****************************************************/

cmdCreate('header_object_control_open_extented',{
"action": "addSection",
opts : jQuery.extend({},commands.header_object_control_open.opts,{
  "skey": "sect_object_control_extented",
})
});

/*******************************************************/
/******* Extented Header Object Basic ******************/
/*******************************************************/
cmdCreate('header_sect_object_basic_extented',{
  action:'addSection',
  opts : jQuery.extend({},commands.header_sect_object_basic.opts,{
    skey:'sect_object_basic_extented',
  })
});

/******************************************************/
/******* Extented Header Object Additional ************/
/******************************************************/
cmdCreate('header_sect_object_additional_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_object_additional.opts,{
      skey:'sect_object_additional_extented',
    })
});

/*******************************************************/
/***** Extented Header Object Information **************/
/*******************************************************/
cmdCreate('header_sect_object_information_extented',{
  action:'addSection',
  opts : jQuery.extend({},commands.header_sect_object_information.opts,{
    skey:'sect_object_information_extented',
  })
});


/*******************************************************/
/***** Extented Header Object Link *********************/
/*******************************************************/
cmdCreate('header_sect_object_link_extented',{
  action:'addSection',
  opts : jQuery.extend({},commands.header_sect_object_link.opts,{
    skey:'sect_object_link_extented',
  })
});


/*************************************************************/
/** Extented Header Object Classification / Cataloging *******/
/*************************************************************/
cmdCreate('header_sect_object_cataloging_extented',{
  action:'addSection',
  opts : jQuery.extend({},commands.header_sect_object_cataloging.opts,{
    skey:'sect_object_cataloging_extented',
  })
});


/*******************************************************/
/****** Extented Header Object Subject  ****************/
/*******************************************************/
cmdCreate('header_sect_object_subjects_extented',{
  action:'addSection',
  opts : jQuery.extend({},commands.header_sect_object_subjects.opts,{
    skey:'sect_object_subject_extented',
  })
});


