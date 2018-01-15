var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'auth-person.js');


/**********************************************/
/***********  Header Person Basic *************/
/**********************************************/
cmdCreate('header_sect_person_basic',{
    action:'addSection',
    opts:{
      skey:'sect_person_basic',
      label:key_labels['ea:auth:Person_Header_Basic'],
      class:'sect_person_level_2',
      level:2,
      add_button_advanced:true,
      add_button_advanced_label:key_labels['advanced_fields'],
    }
});


/**********************************************/
/*******  Header Person Additional ************/
/**********************************************/
cmdCreate('header_sect_person_additional',{
    action:'addSection',
    opts:{
      skey:'sect_person_additional',
      label:key_labels['ea:auth:Person_Header_Additional'],
      class:'sect_person_level_2',
      level:2,
      add_button_advanced:true,
      add_button_advanced_label:key_labels['advanced_fields'],
      //status:'closed',
    }
});


/**********************************************/
/**********  Header Person Local **************/
/**********************************************/
cmdCreate('header_sect_person_local',{
    action:'addSection',
    opts:{
      skey:'sect_person_loacal',
      label:key_labels['ea:auth:Person_Header_Local'],
      class:'sect_person_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/*******  Header Person information ***********/
/**********************************************/
cmdCreate('header_sect_person_information',{
    action:'addSection',
    opts:{
      skey:'sect_person_information',
      label:key_labels['ea:auth:Person_Header_Information'],
      class:'sect_person_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/*******  Header Person Link ******************/
/**********************************************/
cmdCreate('header_sect_person_link',{
    action:'addSection',
    opts:{
      skey:'sect_person_link',
      label:key_labels['ea:auth:Person_Header_Link'],
      class:'sect_person_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/** Header Person Classification / Cataloging */
/**********************************************/
cmdCreate('header_sect_person_cataloging',{
    action:'addSection',
    opts:{
      skey:'sect_person_cataloging',
      label:key_labels['ea:auth:Person_Header_Cataloging'],
      class:'sect_person_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/*********  Header Person Control  ************/
/**********************************************/

cmdCreate('header_person_control_open',{
  "action": "addSection",
  	opts : {
    "skey": "person_control",
    "label": key_labels['Person_controls_fields'],
    class:'sect_person_level_2',
    "level": 2
  }
});

/**********************************************/
/*********  Header Person Status  ************/
/**********************************************/

cmdCreate('header_person_status',{
  "action": "addSection",
  "opts": {
    "skey": "person_status",
    "label": key_labels['status'],
    class:'sect_person_level_1',
    "level": 1,
    'status':'closed',
  }
});



/**********************************************/
/*********  Header Person Public  *************/
/**********************************************/

cmdCreate('header_person_public',{
  "action": "addSection",
    opts : jQuery.extend({},commands.header_type.opts,{
    "skey": "sect_person_public",
    "label": key_labels['Person_fields'],
    class:'sect_person_level_1',
    "level": 1
  })
});


/**********************************************/
/*********  Header Person Relations  **********/
/**********************************************/
cmdCreate('header_sect_person_relations',{
    action:'addSection',
    opts:{
      skey:'sect_person_relations',
      label:key_labels['ea:auth:Person_Header_Relations'],
      class:'sect_person_level_2',
      level:2,
      status:'closed',
    }
});


/**********************************************/
/*********  Header Person Subject  ************/
/**********************************************/
cmdCreate('header_sect_person_subjects',{
    action:'addSection',
    opts:{
      skey:'sect_person_subject',
      label:key_labels['ea:auth:Person_Header_Subjects'],
      class:'sect_person_level_2',
      level:2,
      status:'closed',
    }
});


/****************************************************/
/************ Person Entity Language ****************/
/****************************************************/
cmdCreate('entity_language',{
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:auth:Person_Entity_Language',
			'label':key_labels['ea:auth:Person_Entity_Language'],
			type : 'select',
			select_values: language_map,
			width:300,
			float:'left',
		})
});



/****************************************************/
/*************** Person Type ************************/
/****************************************************/
cmdCreate('personal_type',{
    action : 'setupField',
    opts : {
      key : 'ea:auth:Person_Ind1',
      label : key_labels['ea:auth:Person_Ind1'],
      type : 'select',
      select_values:personal_type_map,
      read_only:false,
      show_help : true,
      width:'130px',
     // 'label-width' : '118',
    }
});



/****************************************************/
/*************** Person Type2 ************************/
/****************************************************/
cmdCreate('personal_type2',{
    action : 'setupField',
    opts : {
      key : 'ea:auth:Person_Ind1',
      label : key_labels['ea:auth:Person_Ind1'],
      type : 'select',
      select_values:personal_type_map,
      read_only:false,
      show_help : true,
      width:'72px',
      'label-width' : '118',
    }
});


/****************************************************/
/*************** Person Numeration ******************/
/****************************************************/
cmdCreate('person_numeration',{
    action : 'setupField',
    opts : {
      'key' : 'ea:auth:Person_Numeration',
      'label':key_labels['ea:auth:Person_Numeration'],
      'show_help' : true,
      'advanced_field': true,
    }
});


/****************************************************/
/*************** Person Titles Associated ***********/
/****************************************************/
cmdCreate('person_titles_associated',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:auth:Person_TitlesAssociated',
      'label':key_labels['ea:auth:Person_TitlesAssociated'],
      'show_help' : true,
      'repeat_style' : 'ordered',
      'advanced_field': true,
    })
});


/****************************************************/
/*************** Person Dates Associated ************/
/****************************************************/
cmdCreate('person_dates_associated',{
    action : 'setupField',
    opts : {
      'key' : 'ea:auth:Person_DatesAssociated',
      'label':key_labels['ea:auth:Person_DatesAssociated'],
      'show_help' : true,
    }
});


/****************************************************/
/*************** Person Fuller Name *****************/
/****************************************************/
cmdCreate('person_fuller_name',{
    action : 'setupField',
    opts : {
      'key' : 'ea:auth:Person_FullerName',
      'label':key_labels['ea:auth:Person_FullerName'],
      'show_help' : true,
      'advanced_field': true,
    }
});


/****************************************************/
/**************  authPerson *************************/
/****************************************************/

/*
 * childs: organization_name,family_name
 */
cmdCreate('personal_name',{
	action : 'setupField',
	opts : jQuery
			.extend(
					{},
					opts_text,
					{
						'key' : 'ea:auth:Person_Name',
						'label' : key_labels['ea:auth:Person_Name'],
						extend : true,
						extend_command : 'personal_name_extend',
						extend_punctuation : '{{v}}\
{{#ea:auth:Person_FormSubdivision}}{{#first}} -{{/first}} {{v}}{{^last}},{{/last}}{{/ea:auth:Person_FormSubdivision}}\
{{#ea:auth:Person_GeneralSubdivision}}{{#first}} -{{/first}} {{v}}{{^last}},{{/last}}{{/ea:auth:Person_GeneralSubdivision}}\
{{#ea:auth:Person_ChronoSubdivision}}{{#first}} -{{/first}} {{v}}{{^last}},{{/last}}{{/ea:auth:Person_ChronoSubdivision}}\
{{#ea:auth:Person_GeographicSubdivision}}{{#first}} -{{/first}} {{v}}{{^last}},{{/last}}{{/ea:auth:Person_GeographicSubdivision}}',
					})
});


cmdCreate('personal_name_extend',{
    action: 'extend',
    opts:{
      label:key_labels['ea:auth:Person_Name'],
      primary:'personal_name_simple',
      commands:['personal_name_simple','person_form_subdivision',
                'person_general_subdivision','person_chrono_subdivision','person_geographic_subdivision'],
    }
});


/*
 * childs: organization_name_simple,family_name_simple
 */
cmdCreate('personal_name_simple',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'dc:title:',//'ea:auth:Person_Name',
      'label':key_labels['ea:auth:Person_Name'],
    })
});


cmdCreate('person_form_subdivision',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:auth:Person_FormSubdivision',
      'label':key_labels['ea:auth:Person_FormSubdivision'],
      'show_help' : true,
    })
});

cmdCreate('person_general_subdivision',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:auth:Person_GeneralSubdivision',
      'label':key_labels['ea:auth:Person_GeneralSubdivision'],
      'show_help' : true,
    })
});

cmdCreate('person_chrono_subdivision',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:auth:Person_ChronoSubdivision',
      'label':key_labels['ea:auth:Person_ChronoSubdivision'],
      'show_help' : true,
    })
});

cmdCreate('person_geographic_subdivision',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:auth:Person_GeographicSubdivision',
      'label':key_labels['ea:auth:Person_GeographicSubdivision'],
      'show_help' : true,
    })
});


/****************************************************/
/**************  authPersonAttributes  **************/
/****************************************************/

cmdCreate('title_of_person',{
	action : 'setupField',
	opts : jQuery
			.extend(
					{},
					opts_multy_text,
					{
						'key' : 'ea:authPerson:AttributesTitle',
						'label' : key_labels['ea:authPerson:AttributesTitle'],
						'repeat_style' : 'ordered',
						extend : true,
						extend_command : 'title_of_person_extend',
						prescribed_select : true,
						//extend_punctuation : '{{#v}}{{.}}. - {{/v}}{{#ea:date:start}}Start:{{v}}{{/ea:date:start}}
						extend_punctuation : '{{{v}}}.\
{{#ea:date:start}} - Start: {{{v}}}{{#ea:date:end}}.{{/ea:date:end}}{{/ea:date:start}}\
{{#ea:date:end}} - End: {{{v}}}{{/ea:date:end}}',
					})
});


cmdCreate('title_of_person_extend',{
    action: 'extend',
    opts:{
      label:key_labels['ea:authPerson:AttributesTitle'],
      primary:'title_of_person_simple',
      commands:['title_of_person_simple','person_date_start','person_date_end'],
    }
});


cmdCreate('title_of_person_simple',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:authPerson:AttributesTitle',
      'label':key_labels['ea:authPerson:AttributesTitle'],
    })
});

cmdCreate('person_date_start',{
    action : 'setupField',
    opts : jQuery.extend({},commands.ea_date_start.opts,{
      'width':'465',
    })
});

cmdCreate('person_date_end',{
    action : 'setupField',
    opts : jQuery.extend({},commands.ea_date_end.opts,{
      'width':'465',
    })
});

/****************************************************/
/**************  authPersonAssociatedPlace  *********/
/****************************************************/

cmdCreate('birht_place',{
    action : 'setupField',
    opts : {
      type : 'text',
      key:'ea:authPersonAssociated:Place_Birth',
      //select_key_map:place_type_map,
      //select_key_width:'160px',
      show_help : true,
      one_label: true,
      width:"265px",
      extend:true,
      has_ref_disable:true,
      read_only:true,
      extend_buttons:[
        { text:'ok',     id:'b_w1',},
        { text:'new',    id:'b_w2',},
        { text:'cancel', id:'b_w3',},
        { text:'remove', id:'b_w4',},
        { text:'close',  id:'b_w5',},
      ],
      //extend_buttons_cardinality:3,
      extend_position:{ my: "center top", at: "center top" },
      //key : [
      //'ea:publication:place',
      //],
      label:key_labels['ea:authPersonAssociated:Place_Birth'],
      extend_command:'auth_place_search_dialog',
      'float':'left',
      }
});


cmdCreate('death_place',{
    action : 'setupField',
    opts : {
      type : 'text',
      key:'ea:authPersonAssociated:Place_Death',
      //select_key_map:place_type_map,
      //select_key_width:'160px',
      show_help : true,
      width:"265px",
//			display_label:false,
      extend:true,
      has_ref_disable:true,
      read_only:true,
      label:key_labels['ea:authPersonAssociated:Place_Death'],
      extend_buttons:[
        { text:'ok',     id:'b_w1',},
        { text:'new',    id:'b_w2',},
        { text:'cancel', id:'b_w3',},
        { text:'remove', id:'b_w4',},
        { text:'close',  id:'b_w5',},
      ],
      //extend_buttons_cardinality:3,
      extend_position:{ my: "center top", at: "center top" },
      //key : [
      //'ea:publication:place',
      //],
      extend_command:'auth_place_search_dialog',
      'float':'left',
      'clear':'right',
      }
});


/****************************************************/
/**************  authPlaceExtend  *******************/
/****************************************************/

cmdCreate('auth_place_search_dialog',{
		action: 'extend',
		opts:{
			label:null,
			primary:'auth_place_search',
			commands:['auth_place_search'],
		}
});


	cmdCreate('auth_place_search',{
		action : 'setupField',
		opts : {
			'key' : 'tmp:place:search',
			'label' : null,
			'type' : 'place_search',
			'show_help' : true,
			'ok_button':'#b_w1',
			'new_button':'#b_w2',
			'cancel_button':'#b_w3',
			'remove_button':'#b_w4',
			'close_button':'#b_w5',
			'select_command': 'auth_place_extend',
			'display_handler':createDisplayItem('title:'),
		}
});

	cmdCreate('auth_place_extend',{
		action: 'extend',
		opts:{
		  label:'Place',
			primary:'title_simple',
			commands:f_auth_place_extend,
		}
});


/****************************************************/
/**************  authAssociatedCountry  *************/
/****************************************************/

cmdCreate('country_name',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:auth:CountryName',
      'label':key_labels['ea:auth:CountryName_assoc'],
      'repeat_style' : 'ordered',
      extend:true,
      extend_command: 'country_name_extend',
      extend_punctuation : '{{{v}}}\
{{#ea:date:start}} ({{{v}}}{{^ea:date:end}} - ){{/ea:date:end}}{{/ea:date:start}}\
{{#ea:date:end}}{{^ea:date:start}} ({{/ea:date:start}} - {{{v}}}){{/ea:date:end}}',
    })
});


cmdCreate('country_name_extend',{
    action: 'extend',
    opts:{
      label:key_labels['ea:auth:CountryName'],
      primary:'country_name_simple',
      commands:['country_name_simple','person_date_start','person_date_end',],
    }
});


cmdCreate('country_name_simple',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:auth:CountryName',
      'label':key_labels['ea:auth:CountryName'],
      type : 'select',
      select_values:county_map,
      width:'240px',
      show_help : true,
    })
});


/****************************************************/
/********** Place of residence/headquarters *********/
/****************************************************/
//
//cmdCreate('place_of_residence2',{
//    action : 'setupField',
//    opts : jQuery.extend({},opts_multy_text,{
//      'key' : 'ea:authAssociated:Residence_Place',
//      'label':key_labels['ea:authAssociated:Residence_Place'],
//      'repeat_style' : 'ordered',
//      extend:true,
//      'advanced_field': true,
//      extend_command: 'place_of_residence_extend',
////      extend_punctuation : '{{v}}.\
////{{#ea:date:start}} - Start: {{v}}{{#ea:date:end}}.{{/ea:date:end}}{{/ea:date:start}}\
////{{#ea:date:end}} - End: {{v}}{{/ea:date:end}}',
//      extend_punctuation : '{{{v}}}\
//{{#ea:date:start}} ({{{v}}}{{^ea:date:end}} - ){{/ea:date:end}}{{/ea:date:start}}\
//{{#ea:date:end}}{{^ea:date:start}} ({{/ea:date:start}} - {{{v}}}){{/ea:date:end}}',
//      })
//});
//
//
//cmdCreate('place_of_residence_extend',{
//    action: 'extend',
//    opts:{
//      label:key_labels['ea:authPersonAssociated:CountryName'],
//      primary:'place_of_residence_simple',
//      commands:['place_of_residence_simple','person_date_start','person_date_end',],
//    }
//});
//
//
//cmdCreate('place_of_residence_simple',{
//    action : 'setupField',
//    opts : jQuery.extend({},opts_text,{
//      'key' : 'ea:authAssociated:Residence_Place',
//      'label':key_labels['ea:authAssociated:Residence_Place_Simple'],
//    })
//});

cmdCreate.relation({
	'cmd_name':'place_of_residence',
	'object_type':'auth-place',
	'key' : 'ea:authAssociated:Residence_Place',
	'label':key_labels['ea:authAssociated:Residence_Place'],
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
/*********** Other associated place *****************/
/****************************************************/

//cmdCreate('other_place',{
//    action : 'setupField',
//    opts : jQuery.extend({},opts_multy_text,{
//      'key' : 'ea:authAssociated:OtherPlace_Place',
//      'label':key_labels['ea:authAssociated:OtherPlace_Place'],
//      'repeat_style' : 'ordered',
//      autocomplete_url : '/ws/archive/search-place',
//      extend:true,
//      extend_command: 'other_place_extend',
////      extend_punctuation : '{{v}}.\
////{{#ea:date:start}} - Start: {{v}}{{#ea:date:end}}.{{/ea:date:end}}{{/ea:date:start}}\
////{{#ea:date:end}} - End: {{v}}{{/ea:date:end}}',
//      extend_punctuation : '{{{v}}}\
//{{#ea:date:start}} ({{{v}}}{{^ea:date:end}} - ){{/ea:date:end}}{{/ea:date:start}}\
//{{#ea:date:end}}{{^ea:date:start}} ({{/ea:date:start}} - {{{v}}}){{/ea:date:end}}',
//      advanced_field: true,
//      })
//});
//
//
//cmdCreate('other_place_extend',{
//    action: 'extend',
//    opts:{
//      label:key_labels['ea:authAssociated:OtherPlace_Place2'],
//      primary:'other_place_simple',
//      commands:['other_place_simple','person_date_start','person_date_end',],
//    }
//});
//
//
//cmdCreate('other_place_simple',{
//    action : 'setupField',
//    opts : jQuery.extend({},opts_text,{
//      'key' : 'ea:authAssociated:OtherPlace_Place',
//      'label':key_labels['ea:authAssociated:OtherPlace_Place2'],
//       autocomplete_url : '/ws/archive/search-place',
//    })
//});


cmdCreate.relation({
	'cmd_name':'other_place',
	'object_type':'auth-place',
	'key' : 'ea:authAssociated:OtherPlace_Place',
	'label':key_labels['ea:authAssociated:OtherPlace_Place'],
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
/*********** Field of Activity *****************/
/****************************************************/

//cmdCreate('field_of_activity',{
//    action : 'setupField',
//    opts : jQuery.extend({},opts_multy_text,{
//      'key' : 'ea:auth:Activity_Field',
//      'label':key_labels['ea:auth:Activity_Field'],
//      'repeat_style' : 'ordered',
//      extend:true,
//      extend_command: 'field_of_activity_extend',
////      extend_punctuation : '{{v}}.\
////{{#ea:date:start}} - Start: {{v}}{{#ea:date:end}}.{{/ea:date:end}}{{/ea:date:start}}\
////{{#ea:date:end}} - End: {{v}}{{/ea:date:end}}',
//      extend_punctuation : '{{{v}}}\
//{{#ea:date:start}} ({{{v}}}{{^ea:date:end}} - ){{/ea:date:end}}{{/ea:date:start}}\
//{{#ea:date:end}}{{^ea:date:start}} ({{/ea:date:start}} - {{{v}}}){{/ea:date:end}}',
//})
//});
//
//
//cmdCreate('field_of_activity_extend',{
//    action: 'extend',
//    opts:{
//      label:key_labels['ea:auth:Activity_Field2'],
//      primary:'field_of_activity_simple',
//      commands:['field_of_activity_simple','person_date_start','person_date_end',],
//    }
//});
//
//
//cmdCreate('field_of_activity_simple',{
//    action : 'setupField',
//    opts : jQuery.extend({},opts_text,{
//      'key' : 'ea:auth:Activity_Field',
//      'label':key_labels['ea:auth:Activity_Field2'],
//    })
//});


cmdCreate.relation({
	'cmd_name':'field_of_activity',
	'object_type':'auth-concept',
	'key' : 'ea:auth:Activity_Field',
	'label':key_labels['ea:auth:Activity_Field'],
	'search_url':'/prepo/ws/search-subject-concept',
	 'extend_commands' : f_auth_concept_extend,
	 'new_button_label' : 'new concept',
	 'extend_primary_label' : key_labels['ea:auth:Concept_Term'],
	 'repeat_style' : 'ordered',
	 'add_button' : true,
//	 'advanced_field': true,
//	 'time_bounded': true,
	 'note': true,
	 extend_punctuation : '{{{v}}}{{#ea:title:specific}}[{{{ea:title:specific}}}]{{/ea:title:specific}}',
//	 'search_dialog_commands':['relation_comment'],
});


cmdCreate.relation({
	'cmd_name':'relation_civil_war',
	'object_type':'auth-concept',
	'key' : 'ea:auth:Relation_Civil_War',
	'label':key_labels['ea:auth:Relation_Civil_War'],
	'search_url':'/prepo/ws/search-subject-concept',
	 'extend_commands' : f_auth_concept_extend,
	 'new_button_label' : 'new concept',
	 'extend_primary_label' : key_labels['ea:auth:Concept_Term'],
	 'repeat_style' : 'ordered',
	 'add_button' : true,
	 'note': true,
	 extend_punctuation : '{{{v}}}{{#ea:title:specific}}[{{{ea:title:specific}}}]{{/ea:title:specific}}',
});


/****************************************************/
/*********** Participation in events ****************/
/****************************************************/
cmdCreate.relation({
	'cmd_name':'participation_in_events',
	'object_type':'auth-concept',
	'key' : 'ea:auth:Participation_in_events',
	'label':key_labels['ea:auth:Participation_in_events'],
	'search_url':'/prepo/ws/search-subject-concept',
	 'extend_commands' : f_auth_concept_extend,
	 'new_button_label' : 'new concept',
	 'extend_primary_label' : key_labels['ea:auth:Concept_Term'],
	 'repeat_style' : 'ordered',
	 'add_button' : true,
	 'time_bounded': true,
	 'note': true,
	 extend_punctuation : '{{{v}}}\
{{#ea:relation:DateStart}} ({{{v}}}{{^ea:relation:DateEnd}} - ){{/ea:relation:DateEnd}}{{/ea:relation:DateStart}}\
{{#ea:relation:DateEnd}}{{^ea:relation:DateStart}} ({{/ea:relation:DateStart}} - {{{v}}}){{/ea:relation:DateEnd}}\
{{#ea:title:specific}}[{{ea:title:specific}}]{{/ea:title:specific}}',
});


/****************************************************/
/*********** Participation in events ****************/
/****************************************************/
cmdCreate.relation({
	'cmd_name':'personal_course_leftist',
	'object_type':'auth-concept',
	'key' : 'ea:auth:personalCourseLeftist',
	'label':key_labels['ea:auth:personalCourseLeftist'],
	'search_url':'/prepo/ws/search-subject-concept',
	 'extend_commands' : f_auth_concept_extend,
	 'new_button_label' : 'new concept',
	 'extend_primary_label' : key_labels['ea:auth:Concept_Term'],
	 'repeat_style' : 'ordered',
	 'add_button' : true,
	 'time_bounded': true,
	 'note': true,
	 extend_punctuation : '{{{v}}}\
{{#ea:relation:DateStart}} ({{{v}}}{{^ea:relation:DateEnd}} - ){{/ea:relation:DateEnd}}{{/ea:relation:DateStart}}\
{{#ea:relation:DateEnd}}{{^ea:relation:DateStart}} ({{/ea:relation:DateStart}} - {{{v}}}){{/ea:relation:DateEnd}}\
{{#ea:title:specific}}[{{ea:title:specific}}]{{/ea:title:specific}}',
});


/****************************************************/
/*********** Participation in events ****************/
/****************************************************/
cmdCreate.relation({
	'cmd_name':'participation_nationalists',
	'object_type':'auth-concept',
	'key' : 'ea:auth:participationNationalists',
	'label':key_labels['ea:auth:participationNationalists'],
	'search_url':'/prepo/ws/search-subject-concept',
	 'extend_commands' : f_auth_concept_extend,
	 'new_button_label' : 'new concept',
	 'extend_primary_label' : key_labels['ea:auth:Concept_Term'],
	 'repeat_style' : 'ordered',
	 'add_button' : true,
	 'time_bounded': true,
	 'note': true,
	 extend_punctuation : '{{{v}}}\
{{#ea:relation:DateStart}} ({{{v}}}{{^ea:relation:DateEnd}} - ){{/ea:relation:DateEnd}}{{/ea:relation:DateStart}}\
{{#ea:relation:DateEnd}}{{^ea:relation:DateStart}} ({{/ea:relation:DateStart}} - {{{v}}}){{/ea:relation:DateEnd}}\
{{#ea:title:specific}}[{{ea:title:specific}}]{{/ea:title:specific}}',
});




/****************************************************/
/*********** Field of Commission ********************/
/****************************************************/

//cmdCreate('commission',{
//    action : 'setupField',
//    opts : jQuery.extend({},opts_multy_text,{
//      'key' : 'ea:auth:Commission',
//      'label':key_labels['ea:auth:Commission'],
//      'repeat_style' : 'ordered',
//      extend:true,
//      extend_command: 'commission_extend',
////      extend_punctuation : '{{v}}.\
////{{#ea:date:start}} - Start: {{v}}{{#ea:date:end}}.{{/ea:date:end}}{{/ea:date:start}}\
////{{#ea:date:end}} - End: {{v}}{{/ea:date:end}}',
//      extend_punctuation : '{{{v}}}\
//{{#ea:date:start}} ({{{v}}}{{^ea:date:end}} - ){{/ea:date:end}}{{/ea:date:start}}\
//{{#ea:date:end}}{{^ea:date:start}} ({{/ea:date:start}} - {{{v}}}){{/ea:date:end}}',
//      advanced_field: true,
//})
//});
//
//
//cmdCreate('commission_extend',{
//    action: 'extend',
//    opts:{
//      label:key_labels['ea:auth:Activity_Field2'],
//      primary:'commission_simple',
//      commands:['commission_simple','person_date_start','person_date_end',],
//    }
//});
//
//
//cmdCreate('commission_simple',{
//    action : 'setupField',
//    opts : jQuery.extend({},opts_text,{
//      'key' : 'ea:auth:Commission',
//      'label':key_labels['ea:auth:Commission'],
//    })
//});


cmdCreate.relation({
	'cmd_name':'commission',
	'object_type':'auth-concept',
	'key' : 'ea:auth:Commission',
	'label':key_labels['ea:auth:Commission'],
	'search_url':'/prepo/ws/search-subject-concept',
	 'extend_commands' : f_auth_concept_extend,
	 'new_button_label' : 'new concept',
	 'extend_primary_label' : key_labels['ea:auth:Concept_Term'],
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
/*********** Associated Group ***********************/
/****************************************************/

cmdCreate('associated_group',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:authPerson:Group_Group',
      'label':key_labels['ea:authPerson:Group_Group'],
      'repeat_style' : 'ordered',
      extend:true,
      extend_command: 'associated_group_extend',
//      extend_punctuation : '{{v}}.\
//{{#ea:date:start}} - Start: {{v}}{{#ea:date:end}}.{{/ea:date:end}}{{/ea:date:start}}\
//{{#ea:date:end}} - End: {{v}}{{/ea:date:end}}',
      extend_punctuation : '{{{v}}}\
{{#ea:date:start}} ({{{v}}}{{^ea:date:end}} - ){{/ea:date:end}}{{/ea:date:start}}\
{{#ea:date:end}}{{^ea:date:start}} ({{/ea:date:start}} - {{{v}}}){{/ea:date:end}}',
      advanced_field: true,})
});


cmdCreate('associated_group_extend',{
    action: 'extend',
    opts:{
      label:key_labels['ea:authPerson:Group_Group2'],
      primary:'associated_group_simple',
      commands:['associated_group_simple','person_date_start','person_date_end',],
    }
});


cmdCreate('associated_group_simple',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:authPerson:Group_Group',
      'label':key_labels['ea:authPerson:Group_Group2'],
    })
});


/****************************************************/
/*********** Address *******************************/
/****************************************************/

cmdCreate('address',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:auth:Address_Address',
      'label':key_labels['ea:auth:Address_Address'],
      'repeat_style' : 'ordered',
      extend:true,
      extend_command: 'address_extend',
      extend_punctuation:'{{{v}}}\
{{#ea:auth:Address_City}} - {{{v}}}{{/ea:auth:Address_City}}\
{{#ea:auth:Address_Jurisdiction}} - {{{v}}}{{/ea:auth:Address_Jurisdiction}}\
{{#ea:auth:CountryName}} - {{{v}}}{{/ea:auth:CountryName}}\
{{#ea:auth:Address_Post}} - {{{v}}}{{/ea:auth:Address_Post}}\
{{#ea:auth:Address_Mail}}{{#first}} - email: {{/first}} {{{v}}}{{^last}}, {{/last}} {{/ea:auth:Address_Mail}}\
{{#ea:date:start}} ({{{v}}}{{^ea:date:end}} - ){{/ea:date:end}}{{/ea:date:start}}\
{{#ea:date:end}}{{^ea:date:start}} ({{/ea:date:start}} - {{{v}}}){{/ea:date:end}}',
      advanced_field: true,
      })
});

//extend_punctuation : '{{v}}\
//	{{#ea:date:start}} ({{v}}{{^ea:date:end}} - ){{/ea:date:end}}{{/ea:date:start}}\
//	{{#ea:date:end}}{{^ea:date:start}} ({{/ea:date:start}} - {{v}}){{/ea:date:end}}',





cmdCreate('address_extend',{
    action: 'extend',
    opts:{
      label:key_labels['ea:auth:Address_Address2'],
      primary:'address_simple',
      commands:['address_simple','city','jurisdiction','country_name_simple','postal_code','mail_address','person_date_start','person_date_end',],
    }
});


cmdCreate('address_simple',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:auth:Address_Address',
      'label':key_labels['ea:auth:Address_Address2'],
    })
});

cmdCreate('city',{
    action : 'setupField',
    opts : {
      'key' : 'ea:auth:Address_City',
      'label':key_labels['ea:auth:Address_City'],
      'show_help' : true,
      autocomplete_url : '/ws/archive/search-place',
    }
});

cmdCreate('jurisdiction',{
    action : 'setupField',
    opts : {
      'key' : 'ea:auth:Address_Jurisdiction',
      'label':key_labels['ea:auth:Address_Jurisdiction'],
      'show_help' : true,
      autocomplete_url : '/ws/archive/search-place',
    }
});

cmdCreate('postal_code',{
    action : 'setupField',
    opts : {
      'key' : 'ea:auth:Address_Post',
      'label':key_labels['ea:auth:Address_Post'],
      'show_help' : true,
    }
});

cmdCreate('mail_address',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:auth:Address_Mail',
      'label':key_labels['ea:auth:Address_Mail'],
      'show_help' : true,
      'repeat_style' : 'ordered',
    })
});


/****************************************************/
/*********** Occupation ***********************/
/****************************************************/

//cmdCreate('occupation',{
//    action : 'setupField',
//    opts : jQuery.extend({},opts_multy_text,{
//      'key' : 'ea:authPerson:Occupation_Name',
//      'label':key_labels['ea:authPerson:Occupation_Name'],
//      'repeat_style' : 'ordered',
//      extend:true,
//      extend_command: 'occupation_extend',
////      extend_punctuation:'{{v}}.\
////{{#ea:date:start}} - Start: {{v}}{{#ea:date:end}}.{{/ea:date:end}}{{/ea:date:start}}\
////{{#ea:date:end}} - End: {{v}}{{/ea:date:end}}',
//      extend_punctuation : '{{{v}}}\
//{{#ea:date:start}} ({{{v}}}{{^ea:date:end}} - ){{/ea:date:end}}{{/ea:date:start}}\
//{{#ea:date:end}}{{^ea:date:start}} ({{/ea:date:start}} - {{{v}}}){{/ea:date:end}}',
//      })
//});
//
//
//cmdCreate('occupation_extend',{
//    action: 'extend',
//    opts:{
//      label:key_labels['ea:authPerson:Occupation_Name'],
//      primary:'occupation_simple',
//      commands:['occupation_simple','person_date_start','person_date_end',],
//    }
//});
//
//
//cmdCreate('occupation_simple',{
//    action : 'setupField',
//    opts : jQuery.extend({},opts_text,{
//      'key' : 'ea:authPerson:Occupation_Name',
//      'label':key_labels['ea:authPerson:Occupation_Name'],
//    })
//});

cmdCreate.relation({
	'cmd_name':'occupation',
	'object_type':'auth-concept',
	'key' : 'ea:authPerson:Occupation_Name',
	'label':key_labels['ea:authPerson:Occupation_Name'],
	'search_url':'/prepo/ws/search-subject-concept',
	 'extend_commands' : f_auth_concept_extend,
	 'new_button_label' : 'new concept',
	 'extend_primary_label' : key_labels['ea:auth:Concept_Term'],
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
/*********** Gender *********************************/
/****************************************************/

cmdCreate('gender',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:authPerson:Gender_Name',
      'label':key_labels['ea:authPerson:Gender_Name'],
      'repeat_style' : 'ordered',
      extend:true,
      extend_command: 'gender_extend',
//      extend_punctuation:'{{v}}.\
//{{#ea:date:start}} - Start: {{v}}{{#ea:date:end}}.{{/ea:date:end}}{{/ea:date:start}}\
//{{#ea:date:end}} - End: {{v}}{{/ea:date:end}}',
      extend_punctuation : '{{{v}}}\
{{#ea:date:start}} ({{{v}}}{{^ea:date:end}} - ){{/ea:date:end}}{{/ea:date:start}}\
{{#ea:date:end}}{{^ea:date:start}} ({{/ea:date:start}} - {{{v}}}){{/ea:date:end}}',
      advanced_field: true,
    })
});


cmdCreate('gender_extend',{
    action: 'extend',
    opts:{
      label:key_labels['ea:authPerson:Gender_Name'],
      primary:'gender_simple',
      commands:['gender_simple','person_date_start','person_date_end',],
    }
});


cmdCreate('gender_simple',{
  action : 'setupField',
  opts : jQuery.extend({},opts_text,{
    'key' : 'ea:authPerson:Gender_Name',
    'label' : key_labels['ea:authPerson:Gender_Name'],
    'show_help' : true,
    'type' : 'select',
    'select_values':gender_map,
  })
});



/****************************************************/
/*********** Associated Language ********************/
/****************************************************/

cmdCreate('associated_language',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:authAssociated:Language',
      'label' : key_labels['ea:authAssociated:Language'],
      'show_help' : true,
      'type' : 'select',
      'select_values':language_map,
      'repeat_style' : 'ordered',
      'advanced_field': true,
    })
});


/****************************************************/
/*********** Nationality ****************************/
/****************************************************/

//cmdCreate('nationality',{
//    action : 'setupField',
//    opts : jQuery.extend({},opts_multy_text,{
//      'key' : 'ea:auth:Nationality',
//      'label' : key_labels['ea:auth:Nationality'],
//      'show_help' : true,
//      'type' : 'select',
//      'select_values':nationality_map,
//      'repeat_style' : 'ordered',
//    })
//});

cmdCreate.relation({
	'cmd_name':'nationality',
	'object_type':'auth-concept',
	'key' : 'ea:auth:Nationality',
	'label':key_labels['ea:auth:Nationality'],
	'search_url':'/prepo/ws/search-subject-concept',
	 'extend_commands' : f_auth_concept_extend,
	 'new_button_label' : 'new concept',
	 'extend_primary_label' : key_labels['ea:auth:Concept_Term'],
	 'repeat_style' : 'ordered',
	 'add_button' : true,
	 'advanced_field': true,
	 'time_bounded': true,
//	 'search_dialog_commands':['relation_comment'],
});


/****************************************************/
/*********** Citizenship ****************************/
/****************************************************/
cmdCreate.relation({
	'cmd_name':'citizenship',
	'object_type':'auth-concept',
	'key' : 'ea:auth:Citizenship',
	'label':key_labels['ea:auth:Citizenship'],
	'search_url':'/prepo/ws/search-subject-concept',
	 'extend_commands' : f_auth_concept_extend,
	 'new_button_label' : 'new concept',
	 'extend_primary_label' : key_labels['ea:auth:Concept_Term'],
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
/*********** Person Coded Dates *********************/
/****************************************************/

/*
 * childs: organization_start_period
 */
cmdCreate('date_birth',{
    action : 'setupField',
    opts : {
      key:'ea:authPersonCoded:Dates_Birth',
      label:key_labels['ea:authPersonCoded:Dates_Birth'],
      type : 'date',
      show_help : true,
      one_label: true,
      width:"345px",

      }
});

/*
 * childs: organization_end_period
 */
cmdCreate('date_death',{
    action : 'setupField',
    opts : {
      key:'ea:authPersonCoded:Dates_Death',
      label:key_labels['ea:authPersonCoded:Dates_Death'],
      type : 'date',
      show_help : true,
      one_label: true,
      width:"345px",
      }
});


/*******************************************************/
/**********  Extented Header Person Public *************/
/*******************************************************/
cmdCreate('header_person_public_extented',{
  "action": "addSection",
  opts : jQuery.extend({},commands.header_person_public.opts,{
    "skey": "sect_person_extented",
    width: 898,
    add_button:false,
  })
});

/*******************************************************/
/*********  Extented Header Person Control  ************/
/*******************************************************/
cmdCreate('header_person_control_open_extented',{
  "action": "addSection",
  opts : jQuery.extend({},commands.header_person_control_open.opts,{
    "skey": "sect_person_control_extented",
  })
});

/******************************************************/
/***********  Extented Header Person Basic ************/
/******************************************************/
cmdCreate('header_sect_person_basic_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_person_basic.opts,{
      skey:'sect_person_basic_extented',
    })
  });


/*******************************************************/
/*******  Extented Header Person Additional ************/
/*******************************************************/
cmdCreate('header_sect_person_additional_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_person_additional.opts,{
      skey:'sect_person_additional_extented',
    })
  });


/*******************************************************/
/*******  Extented Header Person information ***********/
/*******************************************************/
cmdCreate('header_sect_person_information_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_person_information.opts,{
      skey:'sect_person_information_extented',
    })
  });

/*******************************************************/
/*******  Extented Header Person Link ******************/
/*******************************************************/
cmdCreate('header_sect_person_link_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_person_link.opts,{
      skey:'sect_person_link_extented',
    })
  });

/*******************************************************/
/** Extented Header Person Classification / Cataloging */
/*******************************************************/
cmdCreate('header_sect_person_cataloging_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_person_cataloging.opts,{
      skey:'sect_person_cataloging_extented',
    })
  });

/*******************************************************/
/*********  Extented Header Person Subject  ************/
/*******************************************************/
cmdCreate('header_sect_person_subjects_extented',{
    action:'addSection',
    opts : jQuery.extend({},commands.header_sect_person_subjects.opts,{
      skey:'sect_person_subject_extented',
    })
  });

/******************************************************/
/*********  Extented Header Person Status  ************/
/******************************************************/
cmdCreate('header_person_status_extented',{
  "action": "addSection",
  opts : jQuery.extend({},commands.header_person_status.opts,{
    "skey": "person_status_extented",
  })
});















