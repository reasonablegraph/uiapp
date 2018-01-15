var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'auth-general.js');

/**********************************************/
/**********  Header general Public *************/
/**********************************************/
cmdCreate('header_general_public',{
	action:'addSection',
	opts:{
		id:'sect_general_public',
		skey:'sect_general_public',
		label:key_labels['public'],
		class:'sect_general_level_1',
		level:1,
	}
});

/**********************************************/
/**********  Header general Status *************/
/**********************************************/
cmdCreate('header_general_status',{
	action:'addSection',
	opts:{
		id:'sect_general_status',
		skey:'sect_general_status',
		label:key_labels['status'],
		class:'sect_general_level_1',
		level:1,
		status:'closed',
	}
});

/**********************************************/
/*********  Header General Control  ***********/
/**********************************************/
cmdCreate('header_general_control_open',{
  "action": "addSection",
  opts : jQuery.extend({},commands.header_type.opts,{
    "skey": "general_control",
    "label": "Πεδία Ελέγχου",
    class:'sect_general_level_1',
    "level": 1
  })
});


/**********************************************/
/*******  Header General Basic ******************/
/**********************************************/
cmdCreate('header_sect_general_basic',{
    action:'addSection',
    opts:{
      skey:'sect_general_basic',
      label:key_labels['ea:auth:General_Header_Basic'],
      class:'sect_general_level_2',
      level:2,
    }
});


/**********************************************/
/*****  Header General Information ***************/
/**********************************************/
cmdCreate('header_sect_general_information',{
    action:'addSection',
    opts:{
      skey:'sect_general_information',
      label:key_labels['ea:auth:General_Header_Information'],
      class:'sect_general_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/*****  Header General Link *********************/
/**********************************************/
cmdCreate('header_sect_general_link',{
    action:'addSection',
    opts:{
      skey:'sect_general_link',
      label:key_labels['ea:auth:General_Header_Link'],
      class:'sect_general_level_2',
      level:2,
      status:'closed',
    }
});


/****************************************************/
/** Header Object Classification / Cataloging ********/
/****************************************************/
cmdCreate('header_sect_general_cataloging',{
    action:'addSection',
    opts:{
      skey:'sect_general_cataloging',
      label:key_labels['ea:auth:General_Header_Cataloging'],
      class:'sect_general_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/******  Header General Relations  **************/
/**********************************************/
cmdCreate('header_sect_general_relations',{
    action:'addSection',
    opts:{
      skey:'sect_general_relations',
      label:key_labels['ea:auth:General_Header_Relations'],
      class:'sect_general_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/******  Header General Subject  ****************/
/**********************************************/
cmdCreate('header_sect_general_subjects',{
    action:'addSection',
    opts:{
      skey:'sect_general_subjects',
      label:key_labels['ea:auth:General_Header_Subjects'],
      class:'sect_general_level_2',
      level:2,
    }
});


/****************************************************/
/********** General Term  ***************************/
/****************************************************/
cmdCreate('general_term',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'dc:title:',//'ea:auth:General_Term',
      'label':key_labels['ea:auth:General_Term'],
      'show_help' : true,
      'clear':'left',
    })
});






