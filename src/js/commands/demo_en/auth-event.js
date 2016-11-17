var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'auth-event.js');

/**********************************************/
/**********  Header event Public **************/
/**********************************************/
cmdCreate('header_event_public',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_type.opts,{
		id:'sect_event_public',
		skey:'sect_event_public',
		label:key_labels['event_header_public'],
		class:'sect_event_level_1',
		level:1,
	})
});

/**********************************************/
/**********  Header event Status **************/
/**********************************************/
cmdCreate('header_event_status',{
	action:'addSection',
	opts:{
		id:'sect_event_status',
		skey:'sect_event_status',
		label:key_labels['status'],
		class:'sect_event_level_1',
		level:1,
		status:'closed',
	}
});

/**********************************************/
/*********  Header Event Control  ************/
/**********************************************/

cmdCreate('header_event_control_open',{
  "action": "addSection",
  opts :{
    "skey": "event_control",
    "label": key_labels['ea:auth:Event_Header_Control'],
    class:'sect_event_level_2',
    "level": 2
  }
});

/**********************************************/
/*******  Header Event Basic ******************/
/**********************************************/
cmdCreate('header_sect_event_basic',{
    action:'addSection',
    opts:{
      skey:'sect_event_basic',
      label:key_labels['ea:auth:Event_Header_Basic'],
      class:'sect_event_level_2',
      level:2,
    }
});


/**********************************************/
/*******  Header Event Additional *************/
/**********************************************/
cmdCreate('header_sect_event_additional',{
    action:'addSection',
    opts:{
      skey:'sect_event_additional',
      label:key_labels['ea:auth:Event_Header_Additional'],
      class:'sect_event_level_2',
      level:2,
    }
});


/**********************************************/
/*****  Header Event Information ***************/
/**********************************************/
cmdCreate('header_sect_event_information',{
    action:'addSection',
    opts:{
      skey:'sect_event_information',
      label:key_labels['ea:auth:Event_Header_Information'],
      class:'sect_event_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/*****  Header Event Link *********************/
/**********************************************/
cmdCreate('header_sect_event_link',{
    action:'addSection',
    opts:{
      skey:'sect_event_link',
      label:key_labels['ea:auth:Event_Header_Link'],
      class:'sect_event_level_2',
      level:2,
      status:'closed',
    }
});


/****************************************************/
/** Header Event Classification / Cataloging ********/
/****************************************************/
cmdCreate('header_sect_event_cataloging',{
    action:'addSection',
    opts:{
      skey:'sect_event_cataloging',
      label:key_labels['ea:auth:Event_Header_Cataloging'],
      class:'sect_event_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/******  Header Event Relations  **************/
/**********************************************/
cmdCreate('header_sect_event_relations',{
    action:'addSection',
    opts:{
      skey:'sect_event_relations',
      label:key_labels['ea:auth:Event_Header_Relations'],
      class:'sect_event_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/******  Header Event Subject  ****************/
/**********************************************/
cmdCreate('header_sect_event_subjects',{
    action:'addSection',
    opts:{
      skey:'sect_event_subjects',
      label:key_labels['ea:auth:Event_Header_Subjects'],
      class:'sect_event_level_2',
      level:2,
    }
});


/****************************************************/
/********** Event Term  ***************************/
/****************************************************/
cmdCreate('event_term',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'dc:title:',//'ea:auth:Event_Term',
      'label':key_labels['ea:auth:Event_Term'],
      'show_help' : true,
      'clear':'left',
    })
});



/****************************************************/
/************* Event Type ***************************/
/****************************************************/

cmdCreate.relation({
	'cmd_name':'event_type',
	'object_type':'auth-concept',
	'key' : 'ea:auth:Event_Type',
	'label':key_labels['ea:auth:Event_Type'],
	'search_url':'/prepo/ws/search-type-event',
	 'extend_commands' : f_auth_concept_extend,
	 'new_button_label' : 'new concept',
	 'extend_primary_label' : key_labels['ea:auth:Concept_Term'],
	 'time_bounded': true,
	 extend_punctuation : '{{{v}}}\
{{#ea:relation:DateStart}} ({{{v}}}{{^ea:relation:DateEnd}} - ){{/ea:relation:DateEnd}}{{/ea:relation:DateStart}}\
{{#ea:relation:DateEnd}}{{^ea:relation:DateStart}} ({{/ea:relation:DateStart}} - {{{v}}}){{/ea:relation:DateEnd}}',
//	 'search_dialog_commands':['relation_comment'],
});


/****************************************************/
/************* Event Place **************************/
/****************************************************/

cmdCreate.relation({
	'cmd_name':'event_place',
	'object_type':'auth-place',
	'key' : 'ea:auth:Event_Place',
	'label':key_labels['ea:auth:Event_Place'],
	'search_url':'/prepo/ws/search-place',
	 'extend_commands' : f_auth_place_extend,
	 'new_button_label' : 'new place',
	 'extend_primary_label' : key_labels['ea:auth:Place_Term'],
	 'add_button' : true,
	 'repeat_style' : "ordered",
});


/****************************************************/
/************* Event Start Date *********************/
/****************************************************/
cmdCreate('event_start_date',{
  action : 'setupField',
  opts : jQuery.extend({},opts_text,{
    'key':'ea:auth:Event_Start_Date',
    label:key_labels['ea:auth:Event_Start_Date'],
    type : 'date',
    show_help : true,
    one_label: true,
    width:"345px",
  })
});


/****************************************************/
/************* Event Expiry_Date ********************/
/****************************************************/
cmdCreate('event_expiry_date',{
  action : 'setupField',
  opts : jQuery.extend({},opts_text,{
    'key':'ea:auth:Event_Expiry_Date',
    label:key_labels['ea:auth:Event_Expiry_Date'],
    type : 'date',
    show_help : true,
    one_label: true,
    width:"345px",
  })
});


/******************************************************/
/**********  Extented Header event Public **************/
/******************************************************/
cmdCreate('header_event_public_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_event_public.opts,{
		skey:'sect_event_public_extented',
	  width: 898,
	  add_button:false,
	})
	});

/******************************************************/
/********** Extented Header event Status **************/
/******************************************************/
cmdCreate('header_event_status_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_event_status.opts,{
		skey:'sect_event_status_extented',
	})
});

/******************************************************/
/********* Extented Header Event Control  ************/
/******************************************************/

cmdCreate('header_event_control_open_extented',{
  "action": "addSection",
  opts : jQuery.extend({},commands.header_event_control_open.opts,{
    "skey": "event_control_extented",
  })
});

/******************************************************/
/******* Extented Header Event Basic ******************/
/******************************************************/
cmdCreate('header_sect_event_basic_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_event_basic.opts,{
      skey:'sect_event_basic_extented',
    })
});


/******************************************************/
/******* Extented Header Event Additional *************/
/******************************************************/
cmdCreate('header_sect_event_additional_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_event_additional.opts,{
      skey:'sect_event_additional_extented',
    })
});

/******************************************************/
/***** Extented Header Event Information ***************/
/******************************************************/
cmdCreate('header_sect_event_information_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_event_information.opts,{
      skey:'sect_event_information_extented',
    })
});


/******************************************************/
/***** Extented Header Event Link *********************/
/******************************************************/
cmdCreate('header_sect_event_link_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_event_link.opts,{
      skey:'sect_event_link_extented',
    })
});


/**************************************************************/
/**  Extented Header Event Classification / Cataloging ********/
/**************************************************************/
cmdCreate('header_sect_event_cataloging_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_event_cataloging.opts,{
      skey:'sect_event_cataloging_extented',
    })
});


/******************************************************/
/****** Extented Header Event Subject  ****************/
/******************************************************/
cmdCreate('header_sect_event_subjects_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_event_subjects.opts,{
      skey:'sect_event_subjects_extented',
    })
});






