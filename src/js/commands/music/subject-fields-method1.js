var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'subject-fields-method1.js');


// (cmdCreate\('\w*)\s*=\s*\{
// $1',{

/** ******************************************* */
/** ********* Header Subject ***************** */
/** ******************************************* */
cmdCreate('header_sect_subject',{
	action : 'addSection',
	opts : {
		skey : 'title',
		label : key_labels['ea:subj:Header'],
		level : 1,
	}
});

/** ******************************************** */
/** *********** Subject Keywords ************** */
/** ******************************************** */

cmdCreate('auth_keywords',{
	action : 'setupField',
	opts : jQuery.extend({}, opts_text, {
		'key' : 'ea:auth:Keywords',
		'label' : key_labels['ea:auth:Keywords'],
	})
});

/** ******************************************** */
/** ************ Subject_all ***************** */
/** ******************************************** */

cmdCreate('subject_all',{
	action : 'setupField',
	opts : jQuery.extend({}, opts_multy_text, {
		'key' : 'ea:subj:',
		'label' : key_labels['ea:subj:headers'],
		'create_subitem':true,
		'show_help' : true,
		'repeat_style' : 'ordered',
		'read_only':true,
		extend : true,
		extend_command : 'subject_all_extend',
		extend_command_with_ref : 'subject_all_extend_with_ref',
		extend_position : {
			my : "center top",
			at : "center top"
		},
		extend_punctuation_subject : [ 'ea:subj:general', 'ea:subj:person', 'ea:subj:work', 'ea:subj:object', 'ea:subj:event', 'ea:subj:concept', 'ea:subj:place', 'ea:subj:form'],
	})
});

cmdCreate('subject_all_extend_with_ref',{
	action : 'extend',
	opts : {
		label : key_labels['ea:manif:Subject'],
		primary : 'subject_view',
		commands : [ 'subject_view' ],
		buttons : [ {
			text : 'ok'
		}, {
			text : 'remove',
			'actions' : [ {
				'name' : 'remove',
				'confirm_message' : 'do you want to remove this subject ?'
			}, {
				'name' : 'close'
			} ]
		}, ],
	},
});

cmdCreate('subject_view',{
	'action' : 'remoteView',
	opts : {
		'type' : 'generic',
		'display_fields' : [ {
			'key' : 'ea:subj:general',
			'label' : 'test name'
		} ],
	}
});


cmdCreate('subject_all_extend',{
	action : 'extend',
	opts : {
		label : key_labels['ea:manif:Subject'],
		primary : 'subject_all_simple',
		commands : [ 'subject_all_simple', 'subject_primary_list_chain', 'subject_list', 'hidden_status_finish', 'hidden_obj_type_subject_chain' ],
		buttons : [
		// { text:'create',
		// clickHandler:function(event,fc,m){
		// console.log(m);
		// fc.remoteCreateSubItem(m,{
		// 'convert_root_to_title':true,
		// 'set_refitem_to_root':true,
		// });
		// jQuery(this).dialog("close");
		// }},
		{
			text : 'ok'
		}, ],
	},
});

cmdCreate('subject_all_simple',{
	action : 'setupField',
	opts : jQuery.extend({}, opts_text, {
		type : 'hidden',
		'key' : 'ea:subj:',
		'create_subitem':true,
		'label' : key_labels['ea:manif:Subject'],
		'show_help' : true,
	})
});

cmdCreate('subject_list',{
  "action": "setupField",
  "opts": {
    "read_only": true,
    "type": "text",
//  	'setupOptions' : function(options) {
//  		alert("SETUP-OPTIONS");
//  		options.select_key_map = subject_type_map;
//  		return options;
//  	},
  	'select_key_map':subject_type_map,
    "select_key_width": "160px",
    "width": 490,
    "show_help": true,
    "no_label": false,
    "extend": true,
    "has_ref_disable": true,
    "autocomplete_url": "/ws/archive/search-terms",
    "extend_position": {
      "my": "center top",
      "at": "center top"
    },
    "label": key_labels['subject_chain_secondary_subj'],
//    "label-width": '100',

    "extend_punctuation": "{{v}}{{#ea:title:specific}} [{{v}}]{{/ea:title:specific}}",
    "add_button": true,
    "add_button_first": false,
    "add_button_label": "add",
    "one_label": true,
    "br_each": true,
    "br_first": false,
    "extend_command": {
      "ea:subj:person": "subject_list_search_dialog_p",
      "ea:subj:work": "subject_list_search_dialog_w",
      "ea:subj:object": "subject_list_search_dialog_ob",
      "ea:subj:event": "subject_list_search_dialog_e",
      "ea:subj:concept": "subject_list_search_dialog_c",
      "ea:subj:place": "subject_list_search_dialog_pl",
      "ea:subj:form": "subject_list_search_dialog_fr",
      "ea:subj:general": "subject_list_search_dialog_g"
    },
    "repeat_style": "ordered"
  }
});


cmdCreate('subject_list_search_default_view',{
	  'action': 'remoteView',
	  'opts': {
	    'type': 'generic',
	    'display_fields': [
//	      {
//	        'key': 'dc:title:',
//	        'label': 'title'
//	      }
	    ]
	  }
	});




/** ******************************************** */
/** ***** Subject_Primatry_List_Chain ********** */
/** ******************************************** */
cmdCreate('subject_primary_list_chain',{
  "action": "setupField",
  opts : jQuery.extend({},commands.subject_list.opts,{
  	"select_key_map":primary_subject_type_map,
  	"extend_command": {
      "ea:subj:person:primary": "subject_list_search_dialog_p",
      "ea:subj:work:primary": "subject_list_search_dialog_w",
      "ea:subj:object:primary": "subject_list_search_dialog_ob",
      "ea:subj:event:primary": "subject_list_search_dialog_e",
      "ea:subj:concept:primary": "subject_list_search_dialog_c",
      "ea:subj:place:primary": "subject_list_search_dialog_pl",
      "ea:subj:form:primary": "subject_list_search_dialog_fr",
      "ea:subj:general:primary": "subject_list_search_dialog_g"
    },
  	"label": key_labels['subject_chain_primary_subj'],
  	"label-width": '150',
  	"width":490,
  	"add_button": false,
    "repeat_style": false,
  })
});


/** ******************************************** */
/** *********** Subject_List_Chain ************* */
/** ******************************************** */
cmdCreate('subject_list_chain',{
  "action": "setupField",
  opts : jQuery.extend({},commands.subject_list.opts,{
  	"label-width": '150',
  	"label": key_labels['subject_chain_secondary_subj'],
  	"width":490,
  })
});




/* ================================Object================================ */
cmdCreate('subject_list_search_dialog_ob',{
	action : 'extend',
	opts : {
		label : null,
		primary : 'subject_list_search_ob',
		commands : [ 'subject_list_search_ob', ],
		buttons : [
               {
                 "text": "create",
                 "id": "b_d7",
                 "style": "display:none"
               },
              {
			text : 'ok',
			id : 'b_d1',
			style : 'display:none'
		}, {
			text : 'New Object',
			id : 'b_d11',
			style : 'display:none'
		}, {
			text : 'cancel',
			id : 'b_d3',
			style : 'display:none'
		}, {
			text : 'remove',
			id : 'b_d4',
			style : 'display:none'
		}, {
			text : 'close',
			id : 'b_d5',
			style : 'display:none'
		}, ]

	}
});

cmdCreate('subject_list_search_ob',{
	action : 'setupField',
	opts : {
		'key' : 'tmp:subject:search',
		'label' : null,
		'type' : 'object_search',
		'search_url' : '/prepo/ws/search-subject-all',
		'show_help' : true,
		'create_button' : '#b_d7',
		'ok_button' : '#b_d1',
		'new_button' : {
			'new' : '#b_d11',
		},

		'cancel_button' : '#b_d3',
		'remove_button' : '#b_d4',
		'close_button' : '#b_d5',


		'select_command' : {
			'new' : 'subject_list_object',
		},
		//'display_handler' : createDisplayItem('name:', 'other-name:'),
		'display_command':'subject_list_search_default_view',
	}
});

cmdCreate('subject_list_object',{
	action : 'extend',
	opts : {
		label : null,
		primary : 'object_term',
		commands : f_auth_object_extend_subj,
	}
});

/* ================================Work================================ */
cmdCreate('subject_list_search_dialog_w',{
	action : 'extend',
	opts : {
		label : null,
		primary : 'subject_list_search_w',
		commands : [ 'subject_list_search_w', ],
		buttons : [
    {
      "text": "create",
      "id": "b_d7",
      "style": "display:none"
    },
		{
			text : 'ok',
			id : 'b_d1',
			style : 'display:none'
		},
		 {
			text : 'New Work',
			id : 'b_d10',
			style : 'display:none'
		},
		{
			text : 'cancel',
			id : 'b_d3',
			style : 'display:none'
		}, {
			text : 'remove',
			id : 'b_d4',
			style : 'display:none'
		}, {
			text : 'close',
			id : 'b_d5',
			style : 'display:none'
		}, ]

	}
});

cmdCreate('subject_list_search_w',{
	action : 'setupField',
	opts : {
		'key' : 'tmp:subject:search',
		'label' : null,
		'type' : 'object_search',
		'search_url' : '/prepo/ws/search-subject-all',
		'show_help' : true,
		'create_button' : '#b_d7',
		'ok_button' : '#b_d1',
		'new_button' : {
			'new' : '#b_d10',
		},
		'cancel_button' : '#b_d3',
		'remove_button' : '#b_d4',
		'close_button' : '#b_d5',
		'select_command' : {
			'new' : 'subject_list_work',
		},
		'display_command':'subject_work_view',
	}
});

cmdCreate('subject_work_view',{
	  'action': 'remoteView',
	  'opts': {
	    'type': 'generic',
	    'display_fields': [
	      {
	        'key': 'dc:title:',
	        'label': 'title'
	      }
	    ]
	  }
	});

cmdCreate('subject_list_work',{
	action : 'extend',
	opts : {
		label : null,
		primary : 'work_title_preferred',
		commands : f_auth_work_extend_subj,
	}
});

/* ================================Person================================ */
cmdCreate('subject_list_search_dialog_p',{
	action : 'extend',
	opts : {
		label : null,
		primary : 'subject_list_search_p',
		commands : [ 'subject_list_search_p', ],
		buttons : [
    {
      "text": "create",
      "id": "b_d7",
      "style": "display:none"
    },
		{
			text : 'ok',
			id : 'b_d1',
			style : 'display:none'
		},
	  {
			text : 'New Person',
			id : 'b_d2',
			style : 'display:none'
		}, {
			text : 'New Family',
			id : 'b_d6',
			style : 'display:none'
		}, {
			text : 'New Organization',
			id : 'b_d8',
			style : 'display:none'
		},
		{
			text : 'cancel',
			id : 'b_d3',
			style : 'display:none'
		}, {
			text : 'remove',
			id : 'b_d4',
			style : 'display:none'
		}, {
			text : 'close',
			id : 'b_d5',
			style : 'display:none'
		}, ]

	}
});

cmdCreate('subject_list_search_p',{
	action : 'setupField',
	opts : {
		'key' : 'tmp:subject:search',
		'label' : null,
		'type' : 'object_search',
		'search_url' : '/prepo/ws/search-subject-all',
		'show_help' : true,
		'create_button' : '#b_d7',
		'ok_button' : '#b_d1',
		'new_button' : {
			'new' : '#b_d2',
			'new2' : '#b_d6',
			'new3' : '#b_d8',
		},
		'cancel_button' : '#b_d3',
		'remove_button' : '#b_d4',
		'close_button' : '#b_d5',
		'select_command' : {
			'new' : 'subject_list_person',
			'new2' : 'subject_list_family',
			'new3' : 'subject_list_organization',
		// 'new4':'subject_list_extend_person2',
		},
		//'display_handler' : createDisplayItem('name:', 'other-name:'),
		'display_command':'subject_list_search_default_view',
	}
});

cmdCreate('subject_list_person',{
	action : 'extend',
	opts : {
		label : null,
		primary : 'personal_name_simple',
		commands : f_auth_person_extend_subj,
	}
});

cmdCreate('subject_list_family',{
	action : 'extend',
	opts : {
		label : null,
		primary : 'family_name_simple',
		commands : f_auth_family_extend_subj,
	}
});

cmdCreate('subject_list_organization',{
	action : 'extend',
	opts : {
		label : null,
		primary : 'organization_name',
		commands : f_auth_organization_extend_subj,
	}
});

/* ================================Concept================================ */
cmdCreate('subject_list_search_dialog_c',{
	action : 'extend',
	opts : {
		label : null,
		primary : 'subject_list_search_c',
		commands : [ 'subject_list_search_c', ],

		"buttons": [
                {
                  "text": "create",
                  "id": "b_d7",
                  "style": "display:none"
                },
                {
                  "text": "ok",
                  "id": "b_d1",
                  "style": "display:none"
                },
                {
                	text : 'New Concept',
                	id : 'b_d13',
                	style : 'display:none'
                },
                {
                	text : 'New Object collection',
                	id : 'b_d14',
                	style : 'display:none'
                },
                {
                  "text": "cancel",
                  "id": "b_d3",
                  "style": "display:none"
                },
                {
                  "text": "remove",
                  "id": "b_d4",
                  "style": "display:none"
                },
                {
                  "text": "close",
                  "id": "b_d5",
                  "style": "display:none"
                }
              ]



	}
});

cmdCreate('subject_list_search_c',{
	action : 'setupField',
	opts : {
		'key' : 'tmp:subject:search',
		'label' : null,
		'type' : 'object_search',
		'search_url' : '/prepo/ws/search-subject-all',
		'show_help' : true,
		'create_button' : '#b_d7',
		'ok_button' : '#b_d1',
		'new_button' : {
			'new' : '#b_d13',
//			'new4' : '#b_d14',
		},
		'cancel_button' : '#b_d3',
		'remove_button' : '#b_d4',
		'close_button' : '#b_d5',
		'select_command' : {
			'new' : 'subject_list_concept',
			// 'new2':'subject_list_extend_concept2',
			// 'new3':'subject_list_extend_concept2',
//			'new4' : 'subject_list_obj_collection',
		},
		//'display_handler' : createDisplayItem('name:', 'other-name:'),
		'display_command':'subject_list_search_default_view',
	}
});

cmdCreate('subject_list_concept',{
	action : 'extend',
	opts : {
		label : null,
		primary : 'concept_term',
		commands :  f_auth_concept_extend_subj,//['header_concept_public_extented'],
	}
});

cmdCreate('subject_list_obj_collection',{
	action : 'extend',
	opts : {
		label : null,
		primary : 'obj_collection_term',
		commands : f_auth_obj_collection_extend,
	}
});

/* ================================Place================================ */
cmdCreate('subject_list_search_dialog_pl',{
	action : 'extend',
	opts : {
		label : null,
		primary : 'subject_list_search_pl',
		commands : [ 'subject_list_search_pl', ],
		"buttons": [
                {
                  "text": "create",
                  "id": "b_d7",
                  "style": "display:none"
                },
                {
                  "text": "ok",
                  "id": "b_d1",
                  "style": "display:none"
                },

                {
                	text : 'New Place',
                	id : 'b_d15',
                	style : 'display:none'
                },


                {
                  "text": "cancel",
                  "id": "b_d3",
                  "style": "display:none"
                },
                {
                  "text": "remove",
                  "id": "b_d4",
                  "style": "display:none"
                },
                {
                  "text": "close",
                  "id": "b_d5",
                  "style": "display:none"
                }
              ]

	}
});

cmdCreate('subject_list_search_pl',{
	action : 'setupField',
	opts : {
		'key' : 'tmp:subject:search',
		'label' : null,
		'type' : 'object_search',
		'search_url' : '/prepo/ws/search-subject-all',
		'show_help' : true,
		'create_button' : '#b_d7',
		'ok_button' : '#b_d1',
		'new_button' : {
			'new' : '#b_d15',
		},
		'cancel_button' : '#b_d3',
		'remove_button' : '#b_d4',
		'close_button' : '#b_d5',
		'select_command' : {
			'new' : 'subject_list_place',
		// 'new2':'subject_list_extend_place2',
		// 'new3':'subject_list_extend_place2',
		// 'new4':'subject_list_extend_place2',
		},
		//'display_handler' : createDisplayItem('name:', 'other-name:'),
		'display_command':'subject_person_view',
	}
});

cmdCreate('subject_person_view',{
	  'action': 'remoteView',
	  'opts': {
	    'type': 'generic',
	    'display_fields': [
	      {
	        'key': 'dc:title:',
	        'label': 'title'
	      }
	    ]
	  }
	});


cmdCreate('subject_list_place',{
	action : 'extend',
	opts : {
		label : null,
		primary : 'place_term',
		commands : f_auth_place_extend_subj,
	}
});

/* ================================Event================================ */
cmdCreate('subject_list_search_dialog_e',{
	action : 'extend',
	opts : {
		label : null,
		primary : 'subject_list_search_e',
		commands : [ 'subject_list_search_e', ],
		"buttons": [
                {
                  "text": "create",
                  "id": "b_d7",
                  "style": "display:none"
                },
                {
                  "text": "ok",
                  "id": "b_d1",
                  "style": "display:none"
                },
                {
                  "text": "New Event",
                	'id' : 'b_d12',
                  "style": "display:none"
                },
                {
                  "text": "cancel",
                  "id": "b_d3",
                  "style": "display:none"
                },
                {
                  "text": "remove",
                  "id": "b_d4",
                  "style": "display:none"
                },
                {
                  "text": "close",
                  "id": "b_d5",
                  "style": "display:none"
                }
              ]
	}
});

cmdCreate('subject_list_search_e',{
	action : 'setupField',
	opts : {
		'key' : 'tmp:subject:search',
		'label' : null,
		'type' : 'object_search',
		'search_url' : '/prepo/ws/search-subject-all',
		'show_help' : true,
		'create_button' : '#b_d7',
		'ok_button' : '#b_d1',
		'new_button' : {
			'new' : '#b_d12',
		},
		'cancel_button' : '#b_d3',
		'remove_button' : '#b_d4',
		'close_button' : '#b_d5',
		'select_command' : {
			'new' : 'subject_list_event',
		// 'new2':'subject_list_extend_event2',
		// 'new3':'subject_list_extend_event2',
		// 'new4':'subject_list_extend_event2',
		},
		//'display_handler' : createDisplayItem('name:', 'other-name:'),
		'display_command':'subject_list_search_default_view',
	}
});

cmdCreate('subject_list_event',{
	action : 'extend',
	opts : {
		label : null,
		primary : 'event_term',
		commands : f_auth_event_extend_subj,
	}
});

/* ================================Form================================ */
cmdCreate('subject_list_search_dialog_fr',{
	action : 'extend',
	opts : {
		label : null,
		primary : 'subject_list_search_fr',
		commands : [ 'subject_list_search_fr', ],
		"buttons": [
                {
                  "text": "create",
                  "id": "b_d7",
                  "style": "display:none"
                },
                {
                  "text": "ok",
                  "id": "b_d1",
                  "style": "display:none"
                },
                {
                	text : 'New Genre',
                	id : 'b_d16',
                	style : 'display:none'
                },
                {
                  "text": "cancel",
                  "id": "b_d3",
                  "style": "display:none"
                },
                {
                  "text": "remove",
                  "id": "b_d4",
                  "style": "display:none"
                },
                {
                  "text": "close",
                  "id": "b_d5",
                  "style": "display:none"
                }
              ]


	}
});

cmdCreate('subject_list_search_fr',{
	action : 'setupField',
	opts : {
		'key' : 'tmp:subject:search',
		'label' : null,
		'type' : 'object_search',
		'search_url' : '/prepo/ws/search-subject-all',
		'show_help' : true,
		'create_button' : '#b_d7',
		'ok_button' : '#b_d1',
		'new_button' : {
			'new' : '#b_d16',
		},
		'cancel_button' : '#b_d3',
		'remove_button' : '#b_d4',
		'close_button' : '#b_d5',
		'select_command' : {
			'new' : 'subject_list_form',
		},
		'display_command':'subject_list_search_default_view',
	}
});

cmdCreate('subject_list_form',{
	action : 'extend',
	opts : {
		label : null,
		primary : 'genre_term',
		commands : f_auth_genre_extend_subj,
	}
});

/* ============================= General=================================== */
cmdCreate('subject_list_search_dialog_g',{
	action : 'extend',
	opts : {
		label : null,
		primary : 'subject_list_search_g',
		commands : [ 'subject_list_search_g', ],

		"buttons": [
                {
                  "text": "create",
                  "id": "b_d7",
                  "style": "display:none"
                },
                {
                  "text": "ok",
                  "id": "b_d1",
                  "style": "display:none"
                },
                {
                	text : 'New General',
                	id : 'b_d17',
                	style : 'display:none'
                },
                {
                  "text": "cancel",
                  "id": "b_d3",
                  "style": "display:none"
                },
                {
                  "text": "remove",
                  "id": "b_d4",
                  "style": "display:none"
                },
                {
                  "text": "close",
                  "id": "b_d5",
                  "style": "display:none"
                }
              ]


	}
});

cmdCreate('subject_list_search_g',{
	action : 'setupField',
	opts : {
		'key' : 'tmp:subject:search',
		'label' : null,
		'type' : 'object_search',
		'search_url' : '/prepo/ws/search-subject-all',
		'show_help' : true,
		'create_button' : '#b_d7',
		'ok_button' : '#b_d1',
		'new_button' : {
			'new' : '#b_d17',
		},
		'cancel_button' : '#b_d3',
		'remove_button' : '#b_d4',
		'close_button' : '#b_d5',
		'select_command' : {
			'new' : 'subject_list_general',
		},
		'display_command':'subject_list_search_default_view',
	}


});

cmdCreate('subject_list_general',{
	action : 'extend',
	opts : {
		label : null,
		primary : 'general_term',
		commands : f_auth_general_extend,
	}
});
/* ================================================================ */


cmdCreate('subject_js',{
		action:'execJs',
		opts:{
			fn:function(context){
				/** @type FormControler */
				var fc = context.fc;
				var subjects = fc.getFieldModels('ea:subj:');
				jQuery.each(subjects,function(i,subj){
					var sid = subj.id();
					var childs = fc.getFieldModels(null, sid);
					jQuery.each(childs,function(i,c){
						if (c.key().match('^ea:subj:') && ! c.refItem()){
							var cid = c.id();
							var cl = fc.getFieldModels(null, cid).length;
							if (cl == 0){
								c.value(null);
							}
						}
					});

				});
			}
		}
	});
