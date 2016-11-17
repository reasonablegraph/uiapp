var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'auth-concept.js');


// ^(\s*)commands\.
// $1cmdCreate('

// (cmdCreate\('\w*)\s*=\s*\{
// $1',{

// ^\s*};
// });

/**********************************************/
/**********  Header concept Public *************/
/**********************************************/
cmdCreate('header_concept_public',{
	action:'addSection',
	 opts : jQuery.extend({},commands.header_type.opts,{
		id:'sect_concept_public',
		skey:'sect_concept_public',
		label:key_labels['concept_header_public'],
		class:'sect_concept_level_1',
		level:1,
	})
});

/**********************************************/
/**********  Header concept Status *************/
/**********************************************/
cmdCreate('header_concept_status',{
	action:'addSection',
	opts:{
		id:'sect_concept_status',
		skey:'sect_concept_status',
		label:key_labels['status'],
		class:'sect_concept_level_1',
		level:1,
		status:'closed',
	}
});

/**********************************************/
/*********  Header Concept Control  ***********/
/**********************************************/

cmdCreate('header_concept_control_open',{
  "action": "addSection",
  opts :{
    "skey": "concept_control",
    "label": key_labels['ea:auth:Concept_Header_Control'],
    class:'sect_concept_level_2',
    "level": 2
  }
});

/**********************************************/
/*******  Header Concept Basic ****************/
/**********************************************/
cmdCreate('header_sect_concept_basic',{
    action:'addSection',
    opts:{
      skey:'ect_concept_basic',
      label:key_labels['ea:auth:Concept_Header_Basic'],
      class:'sect_concept_level_2',
      level:2,
    }
});



/**********************************************/
/*****  Header Concept Additional *************/
/**********************************************/
cmdCreate('header_sect_concept_additional',{
    action:'addSection',
    opts:{
      skey:'sect_concept_additional',
      label:key_labels['ea:auth:Concept_Header_Additional'],
      class:'sect_concept_level_2',
      level:2,
    }
});


/**********************************************/
/*****  Header Concept Information ************/
/**********************************************/
cmdCreate('header_sect_concept_information',{
    action:'addSection',
    opts:{
      skey:'sect_concept_information',
      label:key_labels['ea:auth:Concept_Header_Information'],
      class:'sect_concept_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/*******  Header Concept Link *****************/
/**********************************************/
cmdCreate('header_sect_concept_link',{
    action:'addSection',
    opts:{
      skey:'sect_concept_link',
      label:key_labels['ea:auth:Concept_Header_Link'],
      class:'sect_concept_level_2',
      level:2,
      status:'closed',
    }
});


/****************************************************/
/** Header Concept Classification / Cataloging ******/
/****************************************************/
cmdCreate('header_sect_concept_cataloging',{
    action:'addSection',
    opts:{
      skey:'sect_concept_cataloging',
      label:key_labels['ea:auth:Concept_Header_Cataloging'],
      class:'sect_concept_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/******  Header Concept Relations  ************/
/**********************************************/
cmdCreate('header_sect_concept_relations',{
    action:'addSection',
    opts:{
      skey:'sect_concept_relations',
      label:key_labels['ea:auth:Concept_Header_Relations'],
      class:'sect_concept_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/******  Header Concept Subject  **************/
/**********************************************/
cmdCreate('header_sect_concept_subjects',{
    action:'addSection',
    opts:{
      skey:'sect_concept_subjects',
      label:key_labels['ea:auth:Concept_Header_Subjects'],
      class:'sect_concept_level_2',
      level:2,
    }
});


/****************************************************/
/********** Concept Term  ***************************/
/****************************************************/
cmdCreate('concept_term',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'dc:title:',//'ea:auth:Concept_Term',
      'label':key_labels['ea:auth:Concept_Term'],
      'show_help' : true,
      'clear':'left',
    })
});


/****************************************************/
/************* Concept Type *************************/
/****************************************************/
cmdCreate.relation({
	'cmd_name':'concept_type',
	'object_type':'auth-concept',
	'key' : 'ea:auth:Concept_Type',
	'label':key_labels['ea:auth:Concept_Type'],
	'search_url':'/prepo/ws/search-subject-concept',
	 'extend_commands' : f_auth_concept_extend,
	 'new_button_label' : 'new concept',
	 'extend_primary_label' : key_labels['ea:auth:ea:auth:Concept_Term'],
	 'time_bounded': true,
	 extend_punctuation : '{{{v}}}\
{{#ea:relation:DateStart}} ({{{v}}}{{^ea:relation:DateEnd}} - ){{/ea:relation:DateEnd}}{{/ea:relation:DateStart}}\
{{#ea:relation:DateEnd}}{{^ea:relation:DateStart}} ({{/ea:relation:DateStart}} - {{{v}}}){{/ea:relation:DateEnd}}',
//	 'search_dialog_commands':['relation_comment'],
});


/****************************************************/
/************* Concept  Place ************************/
/****************************************************/
cmdCreate('concept_place',{
  action : 'setupField',
	opts : jQuery.extend({},commands.event_place.opts,{
		'key' : 'ea:auth:Concept_Place',
 })
});


/****************************************************/
/************* Concept  Start Date *******************/
/****************************************************/
cmdCreate('concept_start_date',{
  action : 'setupField',
	opts : jQuery.extend({},commands.event_start_date.opts,{
		'key':'ea:auth:Concept_Start_Date',
 })
});


/****************************************************/
/************* Concept  Expiry_Date *****************/
/****************************************************/
cmdCreate('concept_expiry_date',{
  action : 'setupField',
	opts : jQuery.extend({},commands.event_expiry_date.opts,{
		 'key':'ea:auth:Concept_Expiry_Date',
 })
});



/* ******************************************************************************* */

/******************************************************/
/********** Extented Header concept Public ************/
/******************************************************/
cmdCreate('header_concept_public_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_concept_public.opts,{
		skey:'sect_concept_public_extented',
	  width: 898,
	  add_button:false,
	})
});

/******************************************************/
/********** Extented Header concept Status ************/
/******************************************************/
cmdCreate('header_concept_status_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_concept_status.opts,{
	  "skey": "sect_concept_status_extented",
	})
});

/******************************************************/
/********* Extented Header Concept Control  ***********/
/******************************************************/

cmdCreate('header_concept_control_open_extented',{
  "action": "addSection",
  opts : jQuery.extend({},commands.header_concept_control_open.opts,{
    "skey": "concept_control_extented",
	})
});

/******************************************************/
/******* Extented Header Concept Basic ****************/
/******************************************************/
cmdCreate('header_sect_concept_basic_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_concept_basic.opts,{
      skey:'ect_concept_basic_extented',
  	})
});


/******************************************************/
/***** Extented Header Concept Additional *************/
/******************************************************/
cmdCreate('header_sect_concept_additional_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_concept_additional.opts,{
      skey:'sect_concept_additional_extented',
  	})
});

/******************************************************/
/***** Extented Header Concept Information ************/
/******************************************************/
cmdCreate('header_sect_concept_information_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_concept_information.opts,{
      skey:'sect_concept_information_extented',
  	})
});


/******************************************************/
/******* Extented Header Concept Link *****************/
/******************************************************/
cmdCreate('header_sect_concept_link_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_concept_link.opts,{
      skey:'sect_concept_link_extented',
  	})
});


/*************************************************************/
/** Extented Header Concept Classification / Cataloging ******/
/*************************************************************/
cmdCreate('header_sect_concept_cataloging_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_concept_cataloging.opts,{
      skey:'sect_concept_cataloging_extented',
  	})
});


/******************************************************/
/****** Extented Header Concept Subject  **************/
/******************************************************/
cmdCreate('header_sect_concept_subjects_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_concept_subjects.opts,{
      skey:'sect_concept_subjects_extented',
  	})
});

