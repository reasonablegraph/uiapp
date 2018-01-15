var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'control-fields.js');

/**********************************************/
/**********  Header Control Fields ************/
/**********************************************/
cmdCreate('header_control',{
		action:'addSection',
		opts : jQuery.extend({},commands.header_type.opts,{
			'label':key_labels['ea:control:Header_Control'],
			'status':'closed',
		})
});

cmdCreate('header_control_open',{
		action:'addSection',
		opts : jQuery.extend({},commands.header_type.opts,{
			'label':key_labels['ea:control:Header_Control'],
		})
});

/****************************************************/
/**************  Control Number *********************/
/****************************************************/
cmdCreate('control_number',{
    action : 'setupField',
    opts : {
      'key' : 'ea:identifier:id',
      'label':key_labels['ea:control:Control_Number'],
      'label-width' : '110',
      'show_help' : true,
      'width':'100px',
      'read_only': true,
    }
  });


/****************************************************/
/**************  Latest Transaction *****************/
/****************************************************/
cmdCreate('latest_transaction',{
    action : 'setupField',
    opts : {
      'key' : 'ea:control:Latest_Transaction',
      'label':key_labels['ea:control:Latest_Transaction'],
      'show_help' : true,
      'width':'95px',
      'read_only': true,
      'float':'left',
    }
  });


/****************************************************/
/**************  Persistent *************************/
/****************************************************/
cmdCreate('persistent',{
    action : 'setupField',
    opts : {
      'key' : 'ea:control:persistent',
      'label':key_labels['ea:control:Persistent'],
      'show_help' : true,
      'width':'150px',
    }
  });


/****************************************************/
/**************  Entity type ************************/
/****************************************************/
cmdCreate('entity_type',{
		action:'setupField',
		opts : jQuery.extend({},commands.obj_type.opts,{
			'label':key_labels['ea:control:Entity_Type'],
			width:120,
		})
});


/****************************************************/
/********************  Manif Type *******************/
/****************************************************/
cmdCreate('manif_type',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:manif:Type',
			'label':key_labels['ea:manif:Type'],
			type : 'select',
			select_values:type_manif_map,
			width:120,
			'float':'left',
		})
	});


/****************************************************/
/********************  Work Type *******************/
/****************************************************/
cmdCreate('work_type',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:work:Type',
			'label':key_labels['ea:work:Type'],
			'label-width' : '110',
			type : 'select',
			select_values: type_work_map,
			width:150,
			'float':'left',
		})
	});


/**************************************************/
/********** Extented work Type ***********/
/**************************************************/
cmdCreate('work_type_extented',{
	action : 'setupField',
	opts : jQuery.extend({},commands.work_type.opts,{
		 width: 390,
		 "label-width": "150"
	})
});



/****************************************************/
/** Person-Family-Organiz-Work/Expres  kind Record **/
/****************************************************/
cmdCreate('kind_record',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:control:Kind_Record',
			'label':key_labels['ea:control:Kind_Record'],
			'label-width' : '120',
			type : 'select',
			select_values: authority_kind_record_map,
			width:190,
			'float':'left',
		})
	});


/**************************************************************/
/**  Extented Person-Family-Organiz-Work/Expres  kind Record **/
/**************************************************************/
cmdCreate('kind_record_extented',{
	action : 'setupField',
	opts : jQuery.extend({},commands.kind_record.opts,{
		'label-width' : '150',
	})
});


/****************************************************/
/** Extend Person-Family-Organiz-Work/Expres  kind Record **/
/****************************************************/
cmdCreate('kind_record_extend',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:control:Kind_Record',
			'label':key_labels['ea:control:Kind_Record'],
			'label-width' : '120',
			type : 'select',
			select_values: authority_kind_record_extend_map,
			width:155,
			'float':'left',
		})
	});



/****************************************************/
/*** Concept-Object-Place-Event-Genre  kind Record **/
/****************************************************/
cmdCreate('kind_record_concept',{
		action : 'setupField',
		opts : jQuery.extend({},commands.kind_record.opts,{
			select_values: authority_kind_record_concept_map,
		})
	});


/****************************************************/
/*************** Level Establish ********************/
/****************************************************/
cmdCreate('authority_level_establish',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:control:Level_Establish',
			'label':key_labels['ea:control:Level_Establish'],
			type : 'select',
			select_values: authority_level_establish_map,
			width:140,
			'float':'left',
		})
	});

/****************************************************/
/************* Level Establish Extend ***************/
/****************************************************/
cmdCreate('authority_level_establish_extend',{
	action : 'setupField',
	opts : jQuery.extend({},opts_text,{
		'key' : 'ea:control:Level_Establish',
		'label':key_labels['ea:control:Level_Establish'],
		type : 'select',
		select_values: authority_level_establish_extend_map,
		width:140,
		'float':'left',
	})
});



cmdCreate('controled_subject_true',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:subj:control',
    	type : 'hidden',
			value: '1',
    })
  });

cmdCreate('controled_subject_false',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:subj:control',
    	type : 'hidden',
			value: '0',
    })
  });













