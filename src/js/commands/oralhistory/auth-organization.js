var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'auth-organization.js');

/**********************************************/
/*******  Header Organization Public **********/
/**********************************************/
cmdCreate('header_organization_public',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_type.opts,{
		id:'sect_organiz_public',
		skey:'sect_organiz_public',
		label:key_labels['Header_Organization'],
		class:'sect_organization_level_1',
		level:1,
	})
});

/**********************************************/
/*********  Header Organization Control *******/
/**********************************************/
cmdCreate('header_organization_control',{
	action:'addSection',
	opts : {
		 skey:'sect_organiz_control',
		'label':key_labels['ea:control:Header_Organization_Control'],
		class:'sect_organization_level_2',
		level:2,
	}
});

/**********************************************/
/*******  Header Organization Status **********/
/**********************************************/
cmdCreate('header_organization_status',{
	action:'addSection',
	opts:{
		id:'sect_organiz_status',
		skey:'sect_organiz_status',
		label:key_labels['status'],
		class:'sect_organization_level_1',
		level:1,
		status:'closed',
	}
});

/**********************************************/
/*******  Header Organization Basic ***********/
/**********************************************/
cmdCreate('header_sect_organization_basic',{
    action:'addSection',
    opts:{
      skey:'sect_organiz_basic',
      label:key_labels['ea:auth:Organization_Header_Basic'],
      class:'sect_organization_level_2',
      level:2,
      add_button_advanced:true,
      add_button_advanced_label:key_labels['advanced_fields'],
    }
});


/**********************************************/
/*****  Header Organization Additional ********/
/**********************************************/
cmdCreate('header_sect_organization_additional',{
    action:'addSection',
    opts:{
      skey:'sect_organization_additional',
      label:key_labels['ea:auth:Organization_Header_Additional'],
      class:'sect_organization_level_2',
      level:2,
      add_button_advanced:true,
      add_button_advanced_label:key_labels['advanced_fields'],
    }
});


/**********************************************/
/*******  Header Organization Local ***********/
/**********************************************/
cmdCreate('header_sect_organization_local',{
    action:'addSection',
    opts:{
      skey:'sect_organization_local',
      label:key_labels['ea:auth:Organization_Header_Local'],
      class:'sect_organization_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/*****  Header Organization information *******/
/**********************************************/
cmdCreate('header_sect_organization_information',{
    action:'addSection',
    opts:{
      skey:'sect_organization_information',
      label:key_labels['ea:auth:Organization_Header_Information'],
      class:'sect_organization_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/*******  Header Organization Link ************/
/**********************************************/
cmdCreate('header_sect_organization_link',{
    action:'addSection',
    opts:{
      skey:'sect_organization_link',
      label:key_labels['ea:auth:Organization_Header_Link'],
      class:'sect_organization_level_2',
      level:2,
      status:'closed',
    }
});


/****************************************************/
/** Header Organization Classification / Cataloging */
/****************************************************/
cmdCreate('header_sect_organization_cataloging',{
    action:'addSection',
    opts:{
      skey:'sect_organization_cataloging',
      label:key_labels['ea:auth:Organization_Header_Cataloging'],
      class:'sect_organization_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/******  Header Organization Relations  *******/
/**********************************************/
cmdCreate('header_sect_organization_relations',{
    action:'addSection',
    opts:{
      skey:'sect_organization_relations',
      label:key_labels['ea:auth:Organization_Header_Relations'],
      class:'sect_organization_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/******  Header Organization Subject  *********/
/**********************************************/
cmdCreate('header_sect_organization_subjects',{
    action:'addSection',
    opts:{
      skey:'sect_organization_subject',
      label:key_labels['ea:auth:Organization_Header_Subjects'],
      class:'sect_organization_level_2',
      level:2,
      status:'closed',
    }
});


/****************************************************/
/****** Organization Entity Language ****************/
/****************************************************/
cmdCreate('organization_entity_language',{
		action : 'setupField',
		opts : jQuery.extend({},commands.entity_language.opts,{
			width:180,
		})
});


/****************************************************/
/************ Organization Type *********************/
/****************************************************/
cmdCreate('organization_type',{
    action : 'setupField',
    opts : {
      key : 'ea:auth:Organization_Ind1',
      label : key_labels['ea:auth:Organization_Ind1'],
      type : 'select',
      select_values:organization_name_map,
      read_only:false,
      show_help : true,
      'label-width':'100',
      width:'350px',
    }
});


/****************************************************/
/************ Organization Name *********************/
/****************************************************/
cmdCreate('organization_name',{
		action : 'setupField',
		opts : jQuery.extend({},commands.personal_name_simple.opts,{
			'label':key_labels['authOrganization_Name'],
		})
});


/****************************************************/
/********** Organization Subdivision ****************/
/****************************************************/
cmdCreate('organization_subdivision',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:auth:Organization_Subdivision',
      'label':key_labels['ea:auth:Organization_Subdivision'],
      'show_help' : true,
      'repeat_style' : 'ordered',
    })
});


/****************************************************/
/********** Organization Addition *******************/
/****************************************************/
cmdCreate('organization_addition',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:auth:Organization_Addition',
      'label':key_labels['ea:auth:Organization_Addition'],
      'show_help' : true,
      'repeat_style' : 'ordered',
      'advanced_field': true,
    })
});


/****************************************************/
/********** Organization Number of meeting **********/
/****************************************************/
cmdCreate('organization_number',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:auth:Organization_Number',
      'label':key_labels['ea:auth:Organization_Number'],
      'show_help' : true,
      'advanced_field': true,
    })
});


/****************************************************/
/********** Organization Date of meeting ************/
/****************************************************/
cmdCreate('organization_date',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:auth:Organization_Date',
      'label':key_labels['ea:auth:Organization_Date'],
      'show_help' : true,
      'advanced_field': true,
    })
});


/****************************************************/
/********** Organization Location of meeting ********/
/****************************************************/
cmdCreate('organization_location',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:auth:Organization_Location',
      'label':key_labels['ea:auth:Organization_Location'],
      'show_help' : true,
      'advanced_field': true,
    })
});


/***************************************************/
/********** Type of corporate body *****************/
/***************************************************/
cmdCreate('organization_attributes_type',{
    action : 'setupField',
    opts : {
      key : 'ea:auth:Organization_Attributes_Type',
      label : key_labels['authOrganizationAttributes'],
      type : 'select',
      select_values:organization_type_map,
      read_only:false,
      show_help : true,
      width:'350px',
    }
});


//cmdCreate('organization_attributes_type',{
//		action : 'setupField',
//		opts : jQuery.extend({},opts_multy_text,{
//			'key' : 'ea:auth:Organization_Attributes_Type',
//			'label':key_labels['authOrganizationAttributes'],
//			'repeat_style' : 'ordered',
//			extend:true,
//			extend_command: 'organization_attributes_extend',
//			extend_punctuation : '{{{v}}}\
//{{#ea:auth:Organization_Attributes_StartPeriod}} - {{{v}}}{{#ea:auth:Organization_Attributes_EndPeriod}}{{/ea:auth:Organization_Attributes_EndPeriod}}{{/ea:auth:Organization_Attributes_StartPeriod}}\
//{{#ea:auth:Organization_Attributes_EndPeriod}} - {{{v}}}{{/ea:auth:Organization_Attributes_EndPeriod}}',
//		})
//});
//
//
//cmdCreate('organization_attributes_extend',{
//		action: 'extend',
//		opts:{
//		  label:key_labels['authOrganizationAttributes'],
//		  primary:'organization_attributes_simple',
//			commands:['organization_attributes_simple','organization_attributes_start','organization_attributes_end',],
//		}
//});
//
//
//cmdCreate('organization_attributes_simple',{
//		action : 'setupField',
//		opts : jQuery.extend({},opts_text,{
//			'key' : 'ea:auth:Organization_Attributes_Type',
//			'label':key_labels['authOrganizationAttributes'],
//		})
//});
//
//

cmdCreate('organization_attributes_start',{
		action : 'setupField',
		opts : {
			key:'ea:auth:Organization_Attributes_StartPeriod',
			label:key_labels['ea:auth:Organization_Attributes_StartPeriod'],
			type : 'date',
			show_help : true,
			one_label: true,
			width:"345px",
			}
});


cmdCreate('organization_attributes_end',{
		action : 'setupField',
		opts : {
			key:'ea:auth:Organization_Attributes_EndPeriod',
			label:key_labels['ea:auth:Organization_Attributes_EndPeriod'],
			type : 'date',
			show_help : true,
			one_label: true,
			width:"345px",
			}
});


cmdCreate('organization_reopening',{
	action : 'setupField',
	opts : {
		key:'ea:auth:Organization_Reopening',
		label:key_labels['ea:auth:Organization_Reopening'],
		type : 'date',
		show_help : true,
		one_label: true,
		width:"345px",
		advanced_field: true,
		}
});

/*********************************************/
/********** Establish Place ******************/
/*********************************************/
cmdCreate.relation({
	'cmd_name':'establish_place',
	'object_type':'auth-place',
	'key' : 'ea:auth:OrganizationEstablishPlace',
	'label':key_labels['establish_place'],
	'search_url':'/prepo/ws/search-place',
	 'extend_commands' : f_auth_place_extend,
	 'new_button_label' : 'new place',
	 'extend_primary_label' : key_labels['ea:auth:Place_Term'],
	 'repeat_style' : 'ordered',
	 'add_button' : true,
	 'advanced_field': true,
	 'time_bounded': true,
	 extend_punctuation : '{{{v}}}\
{{#ea:relation:DateStart}} ({{{v}}}{{^ea:relation:DateEnd}} - ){{/ea:relation:DateEnd}}{{/ea:relation:DateStart}}\
{{#ea:relation:DateEnd}}{{^ea:relation:DateStart}} ({{/ea:relation:DateStart}} - {{{v}}}){{/ea:relation:DateEnd}}',
//	 'search_dialog_commands':['relation_comment'],
});


/*********************************************/
/********** Place of Organization ************/
/*********************************************/
cmdCreate.relation({
	'cmd_name':'place_of_organization',
	'object_type':'auth-place',
	'key' : 'ea:auth:ResidencePlaceOrganization',
	'label':key_labels['ea:authAssociated:Residence_Place_Organization'],
	'search_url':'/prepo/ws/search-place',
	 'extend_commands' : f_auth_place_extend,
	 'new_button_label' : 'new place',
	 'extend_primary_label' : key_labels['ea:auth:Place_Term'],
	 'repeat_style' : 'ordered',
	 'add_button' : true,
	 'advanced_field': true,
	 'time_bounded': true,
	 extend_punctuation : '{{{v}}}\
{{#ea:relation:DateStart}} ({{{v}}}{{^ea:relation:DateEnd}} - ){{/ea:relation:DateEnd}}{{/ea:relation:DateStart}}\
{{#ea:relation:DateEnd}}{{^ea:relation:DateStart}} ({{/ea:relation:DateStart}} - {{{v}}}){{/ea:relation:DateEnd}}',
//	 'search_dialog_commands':['relation_comment'],
});


/****************************************************/
/******* Organization Field of Activity *************/
/****************************************************/
//cmdCreate('organization_field_of_activity',{
//		action : 'setupField',
//		opts : jQuery.extend({},commands.field_of_activity.opts,{
//			'label':key_labels['organization_Activity_Field'],
//			'advanced_field': false,
//		})
//});
cmdCreate.relation({
	'cmd_name':'organization_field_of_activity',
	'object_type':'auth-concept',
	'key' : 'ea:auth:Organization_Activity_Field',
	'label':key_labels['organization_Activity_Field'],
	'search_url':'/prepo/ws/search-subject-concept',
	 'extend_commands' : f_auth_concept_extend,
	 'new_button_label' : 'new concept',
	 'extend_primary_label' : key_labels['ea:auth:Concept_Term'],
	 'repeat_style' : 'ordered',
	 'add_button' : true,
	 'time_bounded': true,
	 extend_punctuation : '{{{v}}}\
{{#ea:relation:DateStart}} ({{{v}}}{{^ea:relation:DateEnd}} - ){{/ea:relation:DateEnd}}{{/ea:relation:DateStart}}\
{{#ea:relation:DateEnd}}{{^ea:relation:DateStart}} ({{/ea:relation:DateStart}} - {{{v}}}){{/ea:relation:DateEnd}}',
//	 'search_dialog_commands':['relation_comment'],
});


/* ***************************************************
 		*************  auth organization *****************
 		*************************************************/

cmdCreate('organization_name2',{
		action : 'setupField',
		opts : jQuery.extend({},commands.personal_name.opts,{
			'label':key_labels['authOrganization'],
			extend_command: 'organization_name_extend',
			extend_punctuation : '{{v}}\
{{#ea:auth:Organization_Subordinate_Unit}} -{{v}}{{/ea:auth:Organization_Subordinate_Unit}}\
{{#ea:auth:Person_FormSubdivision}}{{#first}} -{{/first}} {{v}}{{^last}},{{/last}}{{/ea:auth:Person_FormSubdivision}}\
{{#ea:auth:Person_GeneralSubdivision}}{{#first}} -{{/first}} {{v}}{{^last}},{{/last}}{{/ea:auth:Person_GeneralSubdivision}}\
{{#ea:auth:Person_ChronoSubdivision}}{{#first}} -{{/first}} {{v}}{{^last}},{{/last}}{{/ea:auth:Person_ChronoSubdivision}}\
{{#ea:auth:Person_GeographicSubdivision}}{{#first}} -{{/first}} {{v}}{{^last}},{{/last}}{{/ea:auth:Person_GeographicSubdivision}}',
		})
});

cmdCreate('organization_name_extend',{
		action: 'extend',
		opts:{
		  label:key_labels['authOrganization'],
			primary:'organization_subordinate_unit',
			commands:['organization_subordinate_unit','person_form_subdivision','person_general_subdivision','person_chrono_subdivision','person_geographic_subdivision'],
		}
});


cmdCreate('organization_subordinate_unit',{
		action : 'setupField',
		opts : jQuery.extend({},opts_multy_text,{
			'key' : 'ea:auth:Organization_Subordinate_Unit',
			'label':key_labels['ea:auth:Organization_Subordinate_Unit'],
			'show_help' : true,
		})
});


/*******************************************************/
/*******  Extented Header Organization Public **********/
/*******************************************************/
cmdCreate('header_organization_public_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_organization_public.opts,{
		skey:'sect_organiz_public_extented',
    width: 898,
    add_button:false,
	})
})

/******************************************************/
/********* Extented Header Organization Control *******/
/******************************************************/
cmdCreate('header_organization_control_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_organization_control.opts,{
		 skey:'sect_organiz_control_extented',
	})
})

/******************************************************/
/******* Extented Header Organization Status **********/
/******************************************************/
cmdCreate('header_organization_status_extented',{
	action:'addSection',
	opts : jQuery.extend({},commands.header_organization_status.opts,{
		skey:'sect_organiz_status_extented',
	})
})

/******************************************************/
/******* Extented Header Organization Basic ***********/
/******************************************************/
cmdCreate('header_sect_organization_basic_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_organization_basic.opts,{
      skey:'sect_organiz_basic_extented',
  	})
})


/******************************************************/
/***** Extented Header Organization Additional ********/
/******************************************************/
cmdCreate('header_sect_organization_additional_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_organization_additional.opts,{
      skey:'sect_organization_additional_extented',
  	})
})


/******************************************************/
/***** Extented Header Organization information *******/
/******************************************************/
cmdCreate('header_sect_organization_information_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_organization_information.opts,{
      skey:'sect_organization_information_extented',
  	})
})


/******************************************************/
/******* Extented Header Organization Link ************/
/******************************************************/
cmdCreate('header_sect_organization_link_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_organization_link.opts,{
      skey:'sect_organization_link_extented',
  	})
})

/*************************************************************/
/** Extented Header Organization Classification / Cataloging */
/*************************************************************/
cmdCreate('header_sect_organization_cataloging_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_organization_cataloging.opts,{
      skey:'sect_organization_cataloging_extented',
  	})
})


/******************************************************/
/****** Extented Header Organization Subject  *********/
/******************************************************/
cmdCreate('header_sect_organization_subjects_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_organization_subjects.opts,{
      skey:'sect_organization_subject_extented',
  	})
})





