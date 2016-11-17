

var f_auth_person_work = [
	'header_sect_person_work',
	'person_all',
	'works_all',
	'header_sect_subject',
	'subject_m_extend',
	];



var commands = commands ? commands : {};

/**********************************************/
/*******  Header Event Basic ******************/
/**********************************************/
commands.header_sect_person_work = {
    action:'addSection',
    opts:{
      skey:'title',
      label:key_labels['ea:auth:Person_Work_Header'],
      level:1,
    }
};


/**********************************************/
/***************  Person_all ******************/
/**********************************************/
commands.person_all = {
		action : 'setupField',
		opts : {
			type : 'text',
			//select_key_map:work_type_map,
			select_key_width:'160px',
			show_help : true,
			autocomplete_url : '/archive/search-work',
			add_button : true,
			add_button_first : false,
			add_button_br : true,
			add_button_label : 'add',
			br_each : true,
			br_first : false,
			one_label: true,
			skip_on_empty:true,
			no_label:false,
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
			repeat_style : 'ordered',
			key : 'ea:auth:Person_Name',
			label:'Person',
			extend_command:'person_search_dialog',
			}
	};


commands.person_search_dialog = {
		action: 'extend',
		opts:{
			label:null,
			primary:'person_search',
			commands:['person_search',],
		}
	};


commands.person_search = {
		action : 'setupField',
		opts : {
			//'key' : 'tmp:work:search',
			'key' : 'ea:auth:Person_Name',

			'label' : null,
			'type' : 'work_search',
			'show_help' : true,
			'ok_button':'#b_w1',
			'new_button':'#b_w2',
			'cancel_button':'#b_w3',
			'remove_button':'#b_w4',
			'close_button':'#b_w5',
			'select_command': 'person_extend3',
			'display_handler':createDisplayItem('name:','other-name:'),
		}
	};

commands.person_extend3 = {
		action: 'extend',
		opts:{
		  label:'Person',
			primary:'personal_name_simple',
			commands:f_auth_person_extend,
		}
	};




