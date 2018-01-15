var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'auth-digital_item.js');



/**********************************************/
/**********  Header Digital Public ************/
/**********************************************/
cmdCreate('header_digital_item_public',{
	action:'addSection',
	 opts : jQuery.extend({},commands.header_type.opts,{
		id:'sect_digital_item_public',
		skey:'sect_digital_item_public',
		label:key_labels['digital_item_header_public'],
		class:'sect_digital_item_level_1',
		level:1,
	})
});


/***  Header digital_item Control  ****/
/**************************************/
cmdCreate('header_digital_item_control_open',{
  "action": "addSection",
  opts :{
    "skey": "digital_item_control",
    "label": key_labels['digital_item_control_fields'],
    class:'sect_digital_item_level_2',
    "level": 2
  }
});


/***  Header digital_item Basic *******/
/**************************************/
cmdCreate('header_digital_item_basic',{
    action:'addSection',
    opts:{
      skey:'digital_item_basic',
      label:key_labels['ea:item:basic_fields'],
      class:'sect_digital_item_level_2',
      level:2,
    }
});

/***  Header digital_item Additional **/
/**************************************/
cmdCreate('header_digital_item_additional',{
    action:'addSection',
    opts:{
      skey:'digital_item_additional',
      label:key_labels['ea:item:additional_fields'],
      class:'sect_digital_item_level_2',
      level:2,
      status:'closed',
    }
});

/***  Header digital_item Technical **/
/**************************************/
cmdCreate('header_digital_item_technical',{
    action:'addSection',
    opts:{
      skey:'digital_item_technical',
      label:key_labels['ea:item:technical_fields'],
      class:'sect_digital_item_level_2',
      level:2,
      add_button_advanced:true,
      add_button_advanced_label:key_labels['advanced_fields'],
    }
});

/***  Header digital_item Access **/
/**********************************/
cmdCreate('header_digital_item_access',{
    action:'addSection',
    opts:{
      skey:'digital_item_access',
      label:key_labels['header_digital_item_access'],
      class:'sect_digital_item_level_2',
      level:2,
    }
});



/**  Header digital_item Contributor **/
/**************************************/
cmdCreate('header_digital_item_contributor',{
    action:'addSection',
    opts:{
      skey:'digital_item_contributor',
      label:key_labels['digital_item_contributor_field'],
      class:'sect_digital_item_level_2',
      level:2,
      status:'closed',
    }
});


/**  Header digital_item Subjects ****/
/**************************************/
cmdCreate('header_digital_item_subjects',{
    action:'addSection',
    opts:{
      skey:'digital_item_subjects',
      label:key_labels['digital_item_subjects_fields'],
      class:'sect_digital_item_level_2',
      level:2,
      status:'closed',
    }
});


/**  Header digital_item Relations ***/
/**************************************/
cmdCreate('header_digital_item_relations',{
    action:'addSection',
    opts:{
      skey:'digital_item_relations',
      label:key_labels['digital_item_relations_fields'],
      class:'sect_digital_item_level_2',
      level:2,
      status:'closed',
    }
});


/***  Header digital_item Status *****/
/*************************************/

cmdCreate('header_digital_item_status',{
	action:'addSection',
	opts:{
		id:'digital_item_status',
		skey:'sect_digital_item__status',
		"label": key_labels['digital_item_control_status'],
		class:'sect_digital_item_level_2',
		level:2,
		status:'closed',
	}
});


/***************************************/
/********** digital_item title *********/

cmdCreate('item_title',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'dc:title:',
      'label':key_labels['ea:item:title'],
      'show_help' : true,
    })
});



/*** digital_item control number ****/
/************************************/
cmdCreate('digital_item_control_number',{
    action : 'setupField',
    opts : {
      'key' : 'ea:identifier:id',
      'label':key_labels['ea:control:Control_Number'],
      'label-width' : '110',
      'show_help' : true,
      'width':'100px',
      'read_only': true,
      'float':'left',
    }
  });


/*** digital_item type **************/
/************************************/
cmdCreate('item_type',{
	action : 'setupField',
	opts : jQuery.extend({},opts_text,{
		'key' : 'ea:item:type',
		'label' : key_labels['ea:item:type'],
		type : 'select',
		select_values: item_type_map,
		width:118,
		float:'left',
	})
});


/*** digital_item location **********/
/************************************/
cmdCreate('item_location',{
	action : 'setupField',
	opts : jQuery.extend({},opts_text,{
		'key' : 'ea:item:location',
		'label' : key_labels['ea:item:location'],
		type : 'select',
		select_values: item_location_map,
		width:115,
		'label-width':'100px',
		float:'left',
	})
});

/*** digital_item sublocation********/
/************************************/
cmdCreate('item_sublocation',{
	action : 'setupField',
	opts : jQuery.extend({},opts_text,{
		'key' : 'ea:item:sublocation',
		'label' : key_labels['ea:item:sublocation'],
		type : 'select',
		'read_only' : true,
		select_values: item_sublocation_map,
		width:180,
		'label-width':'90px',
	})
});

/*** digital_item collection*********/
/************************************/
cmdCreate('item_collection',{
	action : 'setupField',
	opts : jQuery.extend({},opts_text,{
		'key' : 'ea:artifact:collection',
		'label' : key_labels['ea:item:collection'],
		type : 'select',
		select_values: item_collection_map,
		width:385,
		float:'left',
	})
});

/*** digital_item copyNumber*********/
/************************************/
cmdCreate('item_copyNumber',{
		action : 'setupField',
		opts : {
			key:'ea:item:copyNumber',
			label:key_labels['ea:item:copyNumber'],
			show_help : true,
			width:87,
			float:'left',
			}
});

/*** digital_item partNumber*********/
/************************************/
cmdCreate('item_partNumber',{
		action : 'setupField',
		opts : {
			key:'ea:item:partNumber',
			label:key_labels['ea:item:partNumber'],
			show_help : true,
			width:100,
			"label-width":"140",
			}
});


/** digital_item access restrictions */
/************************************/
  cmdCreate('item_access_restrictions',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:item:accessRestrictions',
      'label':key_labels['ea:item:accessRestrictions'],
			'default_value' : default_value['item_access_restrictions'],
      'repeat_style' : 'ordered',
    })
  });

/*** digital_item reproduction*******/
/************************************/
cmdCreate('item_reproduction',{
	action : 'setupField',
	opts : jQuery.extend({},opts_text,{
		'key' : 'ea:item:reproduction',
		'label' : key_labels['ea:item:reproduction'],
		type : 'select',
		select_values: item_reproduction_map,
		width:660,
	})
});

/*** digital_item History ************/
/************************************/
cmdCreate('item_history',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:item:history',
      'label':key_labels['ea:item:history'],
      'repeat_style' : 'ordered',
    })
  });

/*** digital_item Binding ***********/
/************************************/
cmdCreate('item_binding',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:item:binding',
      'label':key_labels['ea:item:binding'],
      'repeat_style' : 'ordered',
    })
  });

/*** digital_item Acquisition Method*/
/************************************/
cmdCreate('item_acquisition_method',{
	action : 'setupField',
	opts : jQuery.extend({},opts_text,{
		'key' : 'ea:item:acquisitionMethod',
		'label' : key_labels['ea:item:acquisitionMethod'],
		type : 'select',
		select_values: item_acquisition_method_map,
		width:660,
	})
});

/*** digital_item Acquisition Date***/
/************************************/
cmdCreate('item_acquisition_date',{
  action : 'setupField',
  opts : jQuery.extend({},commands.ea_date_start.opts,{
  	'key' : 'ea:item:acquisitionDate',
  	'label' : key_labels['ea:item:acquisitionDate'],
  	width:435,
  })
});

/*** digital_item Info **************/
/************************************/
cmdCreate('item_info',{
	action : 'setupField',
	opts : jQuery.extend({},opts_text,{
		'key' : 'ea:item:info',
		'label' : key_labels['ea:item:info'],
		extend:true,
		extend_command: 'item_info_extend',
    'advanced_field': true,
	})
});


cmdCreate('item_info_extend',{
action: 'extend',
opts:{
  label: key_labels['ea:item:info'],
	primary:'item_info_simple',
	commands:['item_info_simple'],
}
});

cmdCreate('item_info_simple',{
	action : 'setupField',
	opts : jQuery.extend({},opts_textarea,{
		'key' : 'ea:item:info',
		'label' : key_labels['ea:item:info'],
	})
});


/*** digital_item Description *******/
/************************************/
cmdCreate('item_description',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:item:description',
      'label':key_labels['ea:item:description'],
    })
  });

/*** digital_item Filename **********/
/************************************/
cmdCreate('item_filename',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:item:filename',
      'label':key_labels['ea:item:filename'],
      'advanced_field': true,
    })
  });

/*** digital_item Size **************/
/************************************/
cmdCreate('item_size',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:item:size',
      'label':key_labels['ea:item:size'],
    })
  });

/*** digital_item Software ***********/
/************************************/
cmdCreate('item_software',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:item:software',
      'label':key_labels['ea:item:software'],
      'advanced_field': true,
    })
  });

/*** digital_item Page **************/
/************************************/
cmdCreate('item_page',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:item:page',
      'label':key_labels['ea:item:page'],
    })
  });

/*** digital_item Url public ********/
/************************************/
cmdCreate('url_public',{
  action : 'setupField',
  opts : {
    key : 'ea:item:urlPublic',
    label : key_labels['ea:item:urlPublic'],
    repeat_style : 'ordered',
    type : 'url',
    show_help : true,
    add_button : true,
    add_button_first : false,
    add_button_br : true,
    add_button_label : 'add',
    //width : '650px',
    one_label : true,
    br_each : true,
    br_first : false,
    extend:true,
    extend_command: 'item_electronic_location_extend',
  }
});

cmdCreate('item_electronic_location_extend',{
  action: 'extend',
  opts:{
    label:key_labels['ea:item:urlPublic'],
    primary:'url',
    commands:['url','item_label'],
  }
});

cmdCreate('item_label',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:item:label',
      'label':key_labels['ea:item:label'],
    })
  });

/*** digital_item Url private *******/
/************************************/
cmdCreate('item_url_private',{
  action : 'setupField',
  opts : jQuery.extend({},opts_multy_text,{
    'key' : 'ea:item:urlPrivate',
    'label':key_labels['ea:item:urlPrivate'],
    'repeat_style' : 'ordered',
    type : 'url',
    show_help : true,
    add_button : true,
    add_button_first : false,
    add_button_br : true,
    add_button_label : 'add',
    one_label : true,
    br_each : true,
    br_first : false,
  })
});


/****** Digital Item Manif ********/
/**********************************/
				cmdCreate.relation({
					'cmd_name':'digital_item_manif',
					'object_type':'auth-manifestation',
					'key':['ea:artifact-of:'],
					'label':key_labels['ea:item:parent_item'],
					'search_url':'/prepo/ws/search-manifestation',
//					'extend_commands' :  f_auth_manifestations_extend,
//					'new_button_label' : 'new manifestation',
					'extend_primary_label' : key_labels['ea:item:title'],
					'new_button_style':'visibility: hidden;',
//					'display_inferred':true,
				  root_options:{
				  	select_key_width:'280px',
				  	width:"400px",
//				    "add_button": true,
//				    "repeat_style": "ordered",
				  }
				});

