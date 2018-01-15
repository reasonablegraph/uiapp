var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'place-dependency.js');


var place_display_fields= [
          		              {'key':'ea:auth:NotePublic','label':key_labels['note_public']}, 
          		              {'key':'ea:authBiographical:Data_Text','label':key_labels['ea:authBiographical_Work:Data_Text']},
          		              {'key':'ea:status:', 'label':key_labels['status']},
          		];


 var place_relation_base = {

 		'search_url' : '/prepo/ws/search-place',
 		"add_button" : true,
 		"repeat_style" : "ordered",
 		'read_only' : false,
 		// has_ref_background_color : '#99FF66'
 		extend_punctuation : '{{v}} {{#ea:title:specific}}[{{v}}]{{/ea:title:specific}}',

 		// REMOTE VIEW OPTIONAL FIELDS
 		'remote_view_type' : 'generic',
 		'remote_view_display_fields' : place_display_fields,
 		'remote_view_exec_cmds' : ['title_specific_place' ],

 		'object_type' : {
 			'auth-place' : {
 				'extend_primary_key' : 'dc:title:',
 				'extend_primary_label' : key_labels['ea:auth:Place_Term'],
 				'new_button_label' : key_labels['new_place'],
 				'extend_commands' : f_auth_place_extend,
 			},
 		}

 	}


 /////////////////////////////////////////////////////////////////////////////////////////////////////


 cmdCreate.relation({
 	'cmd_name':'birth_place2',
 	
 	'object_type':'auth-place',
 	'key':'ea:authPersonAssociated:Place_Birth',
 	'label':key_labels['ea:authPersonAssociated:Place_Birth'],
 	'extend_primary_label':key_labels['ea:auth:Place_Term'],
 	'new_button_label':'new',
 	'search_url':'/prepo/ws/search-place',
 	 'extend_commands' : f_auth_place_extend,
   root_options:{
   	width:"265px",
   	'float':'left',
   	read_only:false,
   }
 });


 cmdCreate.relation({
 	'cmd_name':'death_place2',
 	
 	'object_type':'auth-place',
 	//'new_button_flag':false,
 	
 	'key':'ea:authPersonAssociated:Place_Death',
 	'label':key_labels['ea:authPersonAssociated:Place_Death'],
 	'extend_primary_label':key_labels['ea:auth:Place_Term'],
 	'search_url':'/prepo/ws/search-place',
 	'new_button_label':'new',
 	'extend_commands' : f_auth_place_extend,
   root_options:{
   	width:"265px",
   	read_only:false,
   	
   }
   
 });



//commands.birth_place2 = {
//    action : 'setupField',
//    opts : {
//      type : 'text',
//      key:'ea:authPersonAssociated:Place_Birth',
//      'create_subitem':true,
//      //select_key_map:place_type_map,
//      //select_key_width:'160px',
//      show_help : true,
//      one_label: true,
//      width:"265px",
//      extend:true,
//      has_ref_disable:true,
//      read_only:true,
//      //extend_buttons_cardinality:3,
//      extend_position:{ my: "center top", at: "center top" },
//      //key : [
//      //'ea:publication:place',
//      //],
//      label:key_labels['ea:authPersonAssociated:Place_Birth'],
//      extend_command:'auth_place_search_dialog2',
//      'extend_command_with_ref'  : 'place_with_ref_view',
//      'float':'left',
//      }
//  };
//
//
//commands.death_place2 = {
//    action : 'setupField',
//    opts : {
//      type : 'text',
//      key:'ea:authPersonAssociated:Place_Death',
//      'create_subitem':true,
//      //select_key_map:place_type_map,
//      //select_key_width:'160px',
//      show_help : true,
//      one_label: true,
//      width:"265px",
//      extend:true,
//      has_ref_disable:true,
//      read_only:true,
//      //extend_buttons_cardinality:3,
//      extend_position:{ my: "center top", at: "center top" },
//      //key : [
//      //'ea:publication:place',
//      //],
//      label:key_labels['ea:authPersonAssociated:Place_Death'],
//      extend_command:'auth_place_search_dialog2',
//      'extend_command_with_ref'  : 'place_with_ref_view',
//      'float':'left',
//      }
//  };
//
//
//
//
//
//
//commands.place_with_ref_view = {
//		  'action': 'extend',
//		  'opts': {
//		    'label': 'Place',
//		    'primary': 'place_view',
//		    'commands': [
//		      'place_view'
//		    ],
//		    'buttons': [
//		      {
//		        'text': 'ok'
//		      },
//		      {
//		        'text': 'remove',
//		        'actions': [
//		          {
//		            'name': 'remove',
//		            'confirm_message': 'do you want to remove ?'
//		          },
//		          {
//		            'name': 'close'
//		          }
//		        ]
//		      }
//		    ]
//		  }
//		};
//
//
//
//
//commands.auth_place_search_dialog2 = {
//		action: 'extend',
//		opts:{
//			label:null,
//			primary:'auth_place_search2',
//			commands:['auth_place_search2'],
//			'buttons' : [ {
//				'text' : 'ok',
//				'id' : 'b_w1',
//				style : 'display:none'
//			}, {
//				'text' : 'new',
//				'id' : 'b_w2',
//				style : 'display:none'
//			}, {
//				'text' : 'cancel',
//				'id' : 'b_w3',
//				style : 'display:none'
//			}, {
//				'text' : 'remove',
//				'id' : 'b_w4',
//				style : 'display:none'
//			}, {
//				'text' : 'close',
//				'id' : 'b_w5',
//				style : 'display:none'
//			}, {
//				text : 'create',
//				id : 'b_w7',
//				style : 'display:none'
//			}, ],
//
//		}
//	};
//
//
//commands.auth_place_search2 = {
//		action : 'setupField',
//		opts : {
//			'key' : 'tmp:place:search',
//			'label' : null,
//			'type' : 'object_search',
//			'search_url' : '/prepo/ws/search-place',// /ws/archive/find-place?term=ATR&key=ea%3AauthPersonAssociated%3APlace_Birth
//			'show_help' : true,
//			'create_button' : '#b_w7',
//			'ok_button' : '#b_w1',
//			'new_button' : {
//				'new' : '#b_w2',
//			},
//			'cancel_button' : '#b_w3',
//			'remove_button' : '#b_w4',
//			'close_button' : '#b_w5',
//			'select_command' : {
//				'new' : 'auth_place_extend2',
//			},
//			'display_command':'place_view',
//		}
//	};
//
//
//
//commands.auth_place_extend2 = {
//  "action": "extend",
//  "opts": {
//    "label": "Place",
//    "primary": "place_term_title",
//    "commands": [
//      "extend_header_public",
//      "header_sect_place_basic",
//      "place_term_title",
//      "header_sect_place_information",
//      "nonpublic_general_note",
//      "public_general_note",
//      "biographical_data",
//      "electronic_location",
//      "status",
//      "hidden_obj_type_place",
//      "controled_subject_false"
//    ]
//  }
//};
//
//commands.place_term_title = {
//  "action": "setupField",
//  "opts": {
//    "type": "text",
//    "show_help": true,
//    "key": "dc:title:",
//    "label": "Place term",
//    "clear": "left"
//  }
//};
//
//
//commands.place_view = {
//	  'action': 'remoteView',
//	  'opts': {
//	    'type': 'generic',
//	    'display_fields': [
//	      {
//	        'key': 'dc:title:',
//	        'label': 'title'
//	      }
//	    ]
//	  }
//	};

