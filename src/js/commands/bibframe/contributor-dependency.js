var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'contributor-dependency.js');


var person_display_fields= [
//                  {'key':'ea:auth:Person_Numeration','label':'Numeration'},
//		              {'key':'ea:auth:Person_FullerName','label':'fuller name'},
//		              {'key':'ea:title:uniform', 'label':'uniform_name'},
		              {'key':'ea:auth:Person_DatesAssociated','label':key_labels['ea:auth:Person_DatesAssociated']},
		              {'key':'ea:authPersonAssociated:Place_Birth','label':key_labels['ea:authPersonAssociated:Place_Birth']},
		              {'key':'ea:authPersonAssociated:Place_Death','label':key_labels['ea:authPersonAssociated:Place_Death']},
		              {'key':'ea:auth:Organization_Attributes_Type','label':key_labels['authOrganizationAttributes']},
		              {'key':'ea:auth:Nationality','label':key_labels['ea:auth:Nationality']},
		              {'key':'ea:auth:CountryName','label':key_labels['ea:auth:CountryName']},
		              {'key':'ea:auth:FamilyInformation_Type','label':key_labels['authFamilyInformation']},
		              {'key':'ea:authPerson:Gender_Name','label':key_labels['ea:authPerson:Gender_Name']},
		              {'key':'ea:authAssociated:Residence_Place','label':key_labels['ea:authAssociated:Residence_Place']},
		              {'key':'ea:authAssociated:OtherPlace_Place','label':key_labels['ea:authAssociated:OtherPlace_Place']},
		              {'key':'ea:auth:Address_Address','label':key_labels['ea:auth:Address_Address']},
		              {'key':'ea:auth:Activity_Field','label':key_labels['ea:auth:Activity_Field']},
		              {'key':'ea:authPerson:Group_Group','label':key_labels['ea:authPerson:Group_Group']},
		              {'key':'ea:authPerson:Occupation_Name','label':key_labels['ea:authPerson:Occupation_Name']},
		              {'key':'ea:authAssociated:Language','label':key_labels['ea:authAssociated:Language']},
		              {'key':'ea:auth:NotePublic','label':key_labels['note_public']},
		              {'key':'ea:authBiographical:Data_Text','label':key_labels['ea:authBiographical_Work:Data_Text']},
		              {'key':'ea:subj:', 'label':key_labels['ea:auth:Subject']},
		              {'key':'ea:status:', 'label':key_labels['status']},
		];



var contributor_relation_base = {

	'search_url' : '/ws/archive/find-contributor',
	"add_button" : true,
	"repeat_style" : "ordered",
	// has_ref_background_color : '#99FF66'
	extend_punctuation : '{{v}} {{#ea:title:specific}}[{{v}}]{{/ea:title:specific}}',

	'KOKO':'LALA',

	// REMOTE VIEW OPTIONAL FIELDS
	'remote_view_type' : 'generic',
	'remote_view_display_fields' : person_display_fields,
	'remote_view_exec_cmds' : [ 'title_specific_contributor' ],

	// MULTIPLE OBJECT TYPE VALUES
	'object_type' : {
		'auth-person' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : key_labels['ea:auth:Person_Name'],
			'new_button_label' : 'New Person',
			'extend_commands' : f_auth_person_extend,
		},
		'auth-organization' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : key_labels['authOrganization_Name'],
			'new_button_label' : 'New Organization',
			'extend_commands' : f_auth_organization_extend,
		},
		'auth-family' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : key_labels['authFamily'],
			'new_button_label' : 'New Family',
			'extend_commands' : f_auth_family_extend,
		},
	}

}


cmdCreate.relation(jQuery.extend({},contributor_relation_base ,{
	'cmd_name' : 'contributors_1',
	'label' :  key_labels['contributor'],
}));



cmdCreate.relation(jQuery.extend({},contributor_relation_base ,{
	'cmd_name' : 'contributors_m',
	'key': contributor_manif_type_map,
	'label' :  key_labels['contributor'],
}));


cmdCreate.relation(jQuery.extend({},contributor_relation_base ,{
	'cmd_name' : 'contributors_i',
	'key': contributor_item_type_map,
	'label' :  key_labels['contributor'],
}));

cmdCreate.relation(jQuery.extend({},contributor_relation_base ,{
	'cmd_name' : 'contributors_w',
	'key': contributor_work_type_map,
	'label' :  key_labels['contributor_w'],
}));


cmdCreate.relation(jQuery.extend({},contributor_relation_base ,{
	'cmd_name' : 'contributors_e',
	'key': contributor_express_type_map,
	'label' :  key_labels['contributor'],
}));



cmdCreate.relation(jQuery.extend({},contributor_relation_base ,{
	'cmd_name' : 'manif_publication_name',
	'key' : 'ea:manif:Publisher_Name',
	'label':key_labels['ea:manif:Publisher_Name'],
	'read_only':false,
}));


cmdCreate.relation(jQuery.extend({},contributor_relation_base ,{
	'cmd_name' : 'manif_distribution_name',
//  'key' : 'ea:manif:Publisher_Name',
  'key' : 'ea:manif:Distribution_Name',
  'label':key_labels['ea:manif:Distribution_Name'],
	'read_only':false,
}));

cmdCreate.relation(jQuery.extend({},contributor_relation_base ,{
	'cmd_name' : 'manif_manufactur_name',
//'key' : 'ea:manif:Publisher_Name',
  'key' : 'ea:manif:Manufactur_Name',
  'label':key_labels['ea:manif:Manufactur_Name'],
	'read_only':false,
}));

cmdCreate.relation(jQuery.extend({},contributor_relation_base ,{
	'cmd_name' : 'manif_production_name',
//'key' : 'ea:manif:Publisher_Name',
  'key' : 'ea:manif:Production_Name',
  'label':key_labels['ea:manif:Production_Name'],
	'read_only':false,
}));

cmdCreate.relation(jQuery.extend({},contributor_relation_base ,{
	'cmd_name' : 'contributors_event',
	'key': 'ea:auth:Event_Involved',
	'label' :  key_labels['ea:auth:Event_Involved'],
}));

cmdCreate.relation(jQuery.extend({},contributor_relation_base ,{
	'cmd_name' : 'contributors_genre',
	'key': 'ea:auth:Genre_Involved',
	'label' :  key_labels['ea:auth:Event_Involved'],
}));

cmdCreate.relation(jQuery.extend({},contributor_relation_base ,{
	'cmd_name' : 'contributors_object',
	'key': 'ea:auth:Object_Involved',
	'label' :  key_labels['ea:auth:Event_Involved'],
}));


cmdCreate.relation(jQuery.extend({},contributor_relation_base ,{
	'cmd_name' : 'contributors_concept',
	'key': 'ea:auth:Concept_Involved',
	'label' :  key_labels['ea:auth:Event_Involved'],
}));








