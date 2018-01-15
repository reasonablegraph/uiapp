var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'subject-chain.js');


/**********************************************/
/****  Header Subject Chain Public  ***********/
/**********************************************/

cmdCreate('header_subject_chain_public',{
  "action": "addSection",
    opts : jQuery.extend({},commands.header_type.opts,{
    "skey": "sect_subject_chain_public",
    "label": key_labels['subject_chain_fields'],
    class:'sect_subject_chain_level_1',
    "level": 1,
  })
});

/**********************************************/
/*****  Header Subject Chain Control  *********/
/**********************************************/
cmdCreate('header_subject_chain_control_open',{
  "action": "addSection",
  opts : {
    "skey": "sect_subject_chain_control",
    "label": key_labels['subject_chain_control_fields'],
    class:'sect_subject_chain_level_2',
    "level": 2
  }
});

/**********************************************/
/****  Header Subject Chain Basic *************/
/**********************************************/
cmdCreate('header_sect_subject_chain_basic',{
    action:'addSection',
    opts:{
      skey:'sect_subject_chain_basic',
      label:key_labels['subject_chain_basic_fields'],
      class:'sect_subject_chain_level_2',
      level:2,
    }
});

/**********************************************/
/***  Header Subject Chain Information ********/
/**********************************************/
cmdCreate('header_sect_subject_chain_information',{
    action:'addSection',
    opts:{
      skey:'sect_subject_chain_information',
      label:key_labels['subject_chain_information_fields'],
      class:'sect_subject_chain_level_2',
      level:2,
      status:'closed',
    }
});

/**********************************************/
/****  Header Subject Chain  Link *************/
/**********************************************/
cmdCreate('header_sect_subject_chain_link',{
    action:'addSection',
    opts:{
      skey:'sect_subject_chain_link',
      label:key_labels['subject_chain_link_fields'],
      class:'sect_subject_chain_level_2',
      level:2,
      status:'closed',
    }
});

/*******************************************************/
/** Header Subject Chain  Classification / Cataloging **/
/*******************************************************/
cmdCreate('header_sect_subject_chain_cataloging',{
    action:'addSection',
    opts:{
      skey:'sect_subject_chain_cataloging',
      label:key_labels['subject_chain_cataloging_fields'],
      class:'sect_subject_chain_level_2',
      level:2,
      status:'closed',
    }
});

/**********************************************/
/****  Header Subject Chain Relations  ********/
/**********************************************/
cmdCreate('header_sect_subject_chain_relations',{
    action:'addSection',
    opts:{
      skey:'sect_subject_chain_relations',
      label:key_labels['subject_chain_relations_fields'],
      class:'sect_subject_chain_level_2',
      level:2,
      status:'closed',
    }
});

/**********************************************/
/*******  Header Subject Chain Status *********/
/**********************************************/
cmdCreate('header_subject_chain_status',{
	action:'addSection',
	opts:{
		id:'sect_subject_chain_status',
		skey:'sect_subject_chain_status',
		label:key_labels['status'],
		class:'sect_subject_chain_level_1',
		level:1,
		status:'closed',
	}
});

/****************************************************/
/********** Subject Chain dc:title  *****************/
/****************************************************/
cmdCreate('subject_chain_title',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'dc:title:',
      'label':key_labels['subject_chain_term'],
      'show_help' : true,
      'clear':'left',
      'read_only':true,
      'width':654,
      extend_punctuation_subject : [
         'ea:subj:general:primary', 'ea:subj:person:primary', 'ea:subj:work:primary', 'ea:subj:object:primary', 'ea:subj:event:primary', 'ea:subj:concept:primary', 'ea:subj:place:primary', 'ea:subj:form:primary', 'ea:subj:general:primary',
         'ea:subj:general', 'ea:subj:person', 'ea:subj:work', 'ea:subj:object', 'ea:subj:event', 'ea:subj:concept', 'ea:subj:place', 'ea:subj:form', 'ea:subj:general' ],
     extend_punctuation_subject_type:'primary',
    })
});

/**********************************************/
/****  Extented Header Subject Chain Public  **/
/**********************************************/
cmdCreate('header_subject_chain_public_extented',{
	"action": "addSection",
  opts : jQuery.extend({},commands.header_subject_chain_public.opts,{
  	"skey": "sect_subject_chain_public_extented",
  	add_button:false,
  	width: 898,
  })
});

/**********************************************/
/****  Extented Header Subject Chain Control **/
/**********************************************/
cmdCreate('header_subject_chain_control_open_extented',{
  "action": "addSection",
  opts : jQuery.extend({},commands.header_subject_chain_control_open.opts,{
  	"skey": "sect_subject_chain_control_extented",
  })
});

/**********************************************/
/**  Extented Header Subject Chain Basic ******/
/**********************************************/
cmdCreate('header_sect_subject_chain_basic_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_subject_chain_basic.opts,{
    	"skey": "sect_subject_chain_basic_extented",
    })
  });

/**********************************************/
/**  Extented Header Subject Chain Informati **/
/**********************************************/
cmdCreate('header_sect_subject_chain_information_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_subject_chain_information.opts,{
    	"skey": "sect_subject_chain_information_extented",
    })
  });

/**********************************************/
/**  Extented Header Subject Chain  Link ******/
/**********************************************/
cmdCreate('header_sect_subject_chain_link_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_subject_chain_link.opts,{
    	"skey": "sect_subject_chain_link_extented",
    })
  });

/*******************************************************/
/** Extented Header Subject Chain Classifi/Cataloging **/
/*******************************************************/
cmdCreate('header_sect_subject_chain_cataloging_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_subject_chain_cataloging.opts,{
    	"skey": "sect_subject_chain_cataloging_extented",
    })
  });

/**********************************************/
/****  Extented Header Subject Chain Status ***/
/**********************************************/
cmdCreate('header_subject_chain_status_extented',{
	action:'addSection',
	 opts : jQuery.extend({},commands.header_subject_chain_status.opts,{
	  	"skey": "sect_subject_chain_status_extented",
	  })
	});

/**********************************************/
/****  Extented Kind Record Subject Chain *****/
/**********************************************/
cmdCreate('kind_record_subject_chain_extented',{
	 "action": "setupField",
	  opts : jQuery.extend({},commands.kind_record.opts,{
	  	"label-width": '150',
	  })
	});

























