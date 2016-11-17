var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'work-dependency.js');


var work_display_fields= [
                          {'key':'ea:work:authorWork', 'label':key_labels['ea:work:authorWork']},
                          {'key':'ea:work:editorWork', 'label':key_labels['ea:work:editorWork']},
                          {'key':'ea:work:producerWork', 'label':key_labels['ea:work:producerWork']},
                          {'key':'ea:work:screenwriterWork', 'label':key_labels['ea:work:screenwriterWork']},
                          {'key':'ea:work:directorWork', 'label':key_labels['ea:work:directorWork']},
                          //{'key':'ea:work:Date', 'label':key_labels['ea:work:Date']},
                          {'key':'ea:work:Place', 'label':key_labels['ea:work:Place']},
                          {'key':'ea:work:Language', 'label':key_labels['ea:work:Language']},
                          {'key':'ea:work:Version', 'label':key_labels['ea:work:Version']},
                          {'key':'ea:subj:', 'label':key_labels['ea:auth:Subject']},
                          {'key':'ea:auth:NotePublic','label':key_labels['note_public']}, 
                          {'key':'ea:authBiographical:Data_Text','label':key_labels['ea:authBiographical_Work:Data_Text']},
                          {'key':'ea:status:', 'label':key_labels['status']},
		];



//cmdCreateRelation(commands, {
cmdCreate.relation({
	'cmd_name' : 'works2_all',

	'key' : 'ea:work:',
	'label' : key_labels['work-expression'],
	'search_url' : '/prepo/ws/search-work-all',
	root_options : {
		"add_button" : true,
		"repeat_style" : "ordered",
	//  	width:"265px",
	},

	extend_punctuation : '{{v}} {{#ea:title:specific}}[{{v}}]{{/ea:title:specific}}',
	//REMOTE VIEW OPTIONAL FIELDS
	'remote_view_type': 'generic',
	'remote_view_display_fields' : work_display_fields,
	'remote_view_exec_cmds' : [ 'title_specific_work' ],
//	
// SINGLE OBJECT TYPE VALUES	
//	'object_type':'auth-work',
//	'extend_primary_key':'dc:title:',
//	'extend_primary_label':'place term',
//	'new_button_label' : 'newX',
//	'extend_commands' : work_extend_commands,
	
//MULTIPLE OBJECT TYPE VALUES	
	'object_type' : {
		'auth-work' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : 'work',
			'new_button_label' : 'New Work',
			'extend_commands' : f_auth_work_extend,
		},
		'auth-expresion' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : 'expresion',
			'new_button_label' : 'New Expression',
			'extend_commands' : f_auth_expression_extend,
		}
	},
	
});





cmdCreate.relation({
	'cmd_name' : 'works2_work',

	'key' : 'ea:work:',
	'label' : 'work',
	'search_url' : '/prepo/ws/search-work',
	root_options : {
		"add_button" : true,
		"repeat_style" : "ordered",
	//  	width:"265px",
	},
	
//MULTIPLE OBJECT TYPE VALUES	
	'object_type' : {
		'auth-work' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : 'work',
			'new_button_label' : 'new work',
			'extend_commands' : f_auth_work_extend,
		},
	},
	
});



cmdCreate.relation({
	'cmd_name' : 'works2_expression',

	'key' : 'ea:expression:',
	'label' : 'expression',
	'search_url' : '/prepo/ws/search-expression',
	root_options : {
		"add_button" : true,
		"repeat_style" : "ordered",
	//  	width:"265px",
	},
	
//MULTIPLE OBJECT TYPE VALUES	
	'object_type' : {
		'auth-expresion' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : 'expresion',
			'new_button_label' : 'new expression',
			'extend_commands' : f_auth_work_extend,
		}
	},
	
});


