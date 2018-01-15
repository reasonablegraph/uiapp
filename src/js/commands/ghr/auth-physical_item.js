var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'auth-physical_item.js');

/**********************************************/
/**********  Header Physical Public ***********/
/**********************************************/
cmdCreate('header_physical_item_public',{
	action:'addSection',
	 opts : jQuery.extend({},commands.header_type.opts,{
		id:'sect_physical_item_public',
		skey:'sect_physical_item_public',
		label:key_labels['physical_item_header_public'],
		class:'sect_physical_item_level_1',
		level:1,
	})
});


/***  Header physical_item Control  ***/
/**************************************/
cmdCreate('header_physical_item_control_open',{
  "action": "addSection",
  opts :{
    "skey": "physical_item_control",
    "label": key_labels['physical_item_control_fields'],
    class:'sect_physical_item_level_2',
    "level": 2
  }
});


/***  Header physical_item Basic ******/
/**************************************/
cmdCreate('header_physical_item_basic',{
    action:'addSection',
    opts:{
      skey:'physical_item_basic',
      label:key_labels['physical_item_basic_fields'],
      class:'sect_physical_item_level_2',
      level:2,
    }
});


/**  Header Physical_item Characteristics **/
/*******************************************/
cmdCreate('header_physical_item_characteristics',{
    action:'addSection',
    opts:{
      skey:'physical_item_characteristics',
      label:key_labels['physical_item_characteristics_fields'],
      class:'sect_physical_item_level_2',
      level:2,
    }
});



/**  Header physical_item Additional **/
/**************************************/
cmdCreate('header_physical_item_additional',{
    action:'addSection',
    opts:{
      skey:'physical_item_additional',
      label:key_labels['physical_item_additional_fields'],
      class:'sect_physical_item_level_2',
      level:2,
      status:'closed',
    }
});

/***  Header physical_item Access **/
/**********************************/
cmdCreate('header_physical_item_access',{
    action:'addSection',
    opts:{
      skey:'physical_item_access',
      label:key_labels['physical_item_header_access'],
      class:'sect_physical_item_level_2',
      level:2,
      add_button_advanced:true,
      add_button_advanced_label:key_labels['advanced_fields'],
    }
});


/**  Header physical_item Contributor **/
/**************************************/
cmdCreate('header_physical_item_contributor',{
    action:'addSection',
    opts:{
      skey:'physical_item_contributor',
      label:key_labels['physical_item_contributor_field'],
      class:'sect_physical_item_level_2',
      level:2,
      status:'closed',
    }
});


/**  Header physical_item Subjects ****/
/**************************************/
cmdCreate('header_physical_item_subjects',{
    action:'addSection',
    opts:{
      skey:'physical_item_subjects',
      label:key_labels['physical_item_subjects_fields'],
      class:'sect_physical_item_level_2',
      level:2,
      status:'closed',
    }
});


/**  Header physical_item Relations ***/
/**************************************/
cmdCreate('header_physical_item_relations',{
    action:'addSection',
    opts:{
      skey:'physical_item_relations',
      label:key_labels['physical_item_relations_fields'],
      class:'sect_physical_item_level_2',
      level:2,
      status:'closed',
    }
});


/***  Header physical_item Status ****/
/*************************************/

cmdCreate('header_physical_item_status',{
	action:'addSection',
	opts:{
		id:'physical_item_status',
		skey:'sect_physical_item__status',
		"label": key_labels['physical_item_control_status'],
		class:'sect_physical_item_level_2',
		level:2,
		status:'closed',
	}
});


/*** physical_item type **************/
/************************************/
cmdCreate('physical_item_type',{
	action : 'setupField',
	opts : jQuery.extend({},opts_text,{
		'key' : 'ea:item:type',
		'label' : key_labels['ea:item:type'],
		type : 'select',
		select_values: physical_item_type_map,
		width:118,
		float:'left',
	})
});


/*** physical_item barcode************/
/************************************/
cmdCreate('item_barcode',{
		action : 'setupField',
		opts : {
			key:'ea:item:barcode',
			label:key_labels['ea:item:barcode'],
			show_help : true,	
			width:106,
			float:'left',
			} 
});

/*** physical_item classification*****/
/************************************/
cmdCreate('item_classification',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:item:Classification',
      'label':key_labels['ea:item:Classification'],
      'show_help' : true,
      width:150,
      "label-width":"100",
      extend:true,
      extend_command: 'item_classification_extend',
      extend_punctuation:'{{{v}}}\
{{#ea:item:ClassificationPrefix}} - {{{v}}}{{/ea:item:ClassificationPrefix}}{{#ea:item:ClassificationCutter}} - {{{v}}}{{/ea:item:ClassificationCutter}}',
    })
  });

cmdCreate('item_classification_extend',{
    action: 'extend',
    opts:{
      label:key_labels['ea:item:Classification'],
      primary:'item_classification_simple',
      commands:['item_classification_simple','item_classification_prefix','item_classification_cutter'],
    }
  });

cmdCreate('item_classification_simple',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:item:ClassificationNumber',
      'label':key_labels['ea:item:ClassificationNumber'],
    })
  });

cmdCreate('item_classification_prefix',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:item:ClassificationPrefix',
      'label':key_labels['ea:item:ClassificationPrefix'],
      'show_help' : true,
    })
  });

cmdCreate('item_classification_cutter',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:item:ClassificationCutter',
      'label':key_labels['ea:item:ClassificationCutter'],
      'show_help' : true,
    })
  });


/*** physical_item Loan*******/
/*****************************/
cmdCreate('item_loan',{
	action : 'setupField',
	opts : jQuery.extend({},opts_text,{
		'key' : 'ea:item:item_loan',
		'label' : key_labels['ea:item:item_loan'],
		type : 'select',
		select_values: item_loan_map,
		width:660,
		'advanced_field': true,
	})
});




