var commands = commands ? commands : {};


commands.contributor_extend_viz = {
		action: 'extend',
		opts:{
			label:null,
			primary:'contributor_simple',
			commands:[ //'header_actor_c',
			'contributor_type_viz','contributor_simple','person_titles',
			'name_uniform','ea_date_start', 'ea_date_end', 'comment_simple',
			'comment_simple_internal','subject','status_finish'
			//'header_controls_c',
			//'author_buttons'
			],
		}
  };

commands.contributor_search_dialog_viz = {
		action: 'extend',
		opts:{
			label:null,
			primary:'contributor_search_viz',
			commands:['contributor_search_viz',
			//'author_dialog_buttons_setup'
			],
		}
	};

commands.contributor_search_viz = {
		action : 'setupField',
		opts : {
			'key' : 'tmp:contributor:search',
			'label' : null,
			'type' : 'contributor_search',
			'show_help' : true,
			'ok_button':'#b_d1',
			'new_button':'#b_d2',
			'cancel_button':'#b_d3',
			'remove_button':'#b_d4',
			'close_button':'#b_d5',
			'select_command': 'contributor_extend_viz',
			'display_handler':createDisplayItem('name:','other-name:'),
		}
	};


commands.contributor_type_viz = {
      action : 'setupField',
      opts : {
        key : 'ea:contributor-type:',
        label : 'type',
        type : 'select',
        select_values:{
					'person': 'Person',
					'undefined': 'undefined',
        },
        read_only:false,
        show_help : true,
        width:'240px',
      }
    };



commands.contributors_all_viz = {
			action : 'setupField',
			opts : {
				type : 'text',
				setupOptions: function(options){
					 options.select_key_map = author_type_map;
					 //key :contributor_keys,
					return options;
				},
				//select_key_map: commands.author_type_map,
				select_key_width:'160px',
				show_help : true,
				add_button : true,
				add_button_first : false,
				add_button_br : true,
				add_button_label : 'add',
				br_each : true,
				br_first : false,
				one_label: true,
				skip_on_empty:true,
				width:518,
				no_label:false,
				extend:true,
				has_ref_disable:true,
				read_only:true,
				extend_buttons:[
					{ text:'ok',     id:'b_d1',},
					{ text:'new',    id:'b_d2',},
					{ text:'cancel', id:'b_d3',},
					{ text:'remove', id:'b_d4',},
					{ text:'close',  id:'b_d5',},
				],
				extend_position:{ my: "center top", at: "center top" },
				//key :commands.contributor_keys,
				label:'Contributor',
				extend_command:'contributor_search_dialog_viz',
				}
		};



commands.contributors_recipe = {
		action : 'setupField',
		opts : {
			type : 'text',
			select_key_map:{
				'dc:contributor:author':'Συγγραφέας',
				'marc:contributor:commentatorwt':'Σχολιαστής',
				'ea:contributor:translator':'Mεταφραστής',
			},
			select_key_width:'160px',
			show_help : true,
			//autocomplete_url : '/archive/search-author',
			add_button : true,
			add_button_first : false,
			add_button_br : true,
			add_button_label : 'add',
			br_each : true,
			br_first : false,
			one_label: true,
			skip_on_empty:true,
			width:518,
			no_label:false,
			extend:true,
			has_ref_disable:true,
			read_only:true,
			extend_buttons:[
				{ text:'ok',     id:'b_d1',},
				{ text:'new',    id:'b_d2',},
				{ text:'cancel', id:'b_d3',},
				{ text:'remove', id:'b_d4',},
				{ text:'close',  id:'b_d5',},
			],
			//extend_buttons_cardinality:3,
			extend_position:{ my: "center top", at: "center top" },
			//key :commands.contributor_keys,
			label:'Contributor',
			extend_command:'contributor_search_dialog_viz',

			}
	};







////////////////////////////////////////////////////////
// MATERIAL
////////////////////////////////////////////////////////
commands.material_search_dialog = {
		action: 'extend',
		opts:{
			label:null,
			primary:'material_search',
			commands:['material_search',
			],
		}
	};

	commands.material_search = {
		action : 'setupField',
		opts : {
			'key' : 'tmp:material:search',
			'label':key_labels['ea:material:'],
			'type' : 'material_search',//place_search
			'show_help' : true,
			'ok_button':'#b_w1',
			'new_button':'#b_w2',
			'cancel_button':'#b_w3',
			'remove_button':'#b_w4',
			'close_button':'#b_w5',
			'select_command': 'material_extend',
			'display_handler':createDisplayItem('title:'),
		}
	};

	commands.material_simple = {
		action : 'setupField',
		opts : {
			'key' : 'tmp:material:',
			'label':key_labels['ea:material:'],
			'type' : 'text',
			'show_help' : true,
			background_color:'pink',
			//autocomplete_url : '/archive/search-author',
		}
	};

	commands.material_extend = {
		action: 'extend',
		opts:{
		  label:key_labels['ea:material:'],
			primary:'material_simple',
			//commands_primary_is_ref:['place_simple'],
			commands:['material_simple','title_uniform','subject','status_finish'],
		}
	};



	var material_type_map = {
		 'ea:material:ingredient':'Συστατικό',
		 'ea:material:product':'Προϊόν',
	};

commands.material = {
		action : 'setupField',
		opts : {
			type : 'text',
			select_key_map:material_type_map,
			//key:Object.keys(material_type_map),
			select_key_width:'160px',
			show_help : true,
			autocomplete_url : '/archive/search-material',
			add_button : true,
			add_button_first : false,
			add_button_br : true,
			add_button_label : 'add',
			br_each : true,
			br_first : false,
			one_label: true,
			skip_on_empty:false,
			width:"517px",
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
			label:key_labels['ea:material:'],
			extend_command:'material_search_dialog',
			prescribed_select:true,
			}
	};
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////









////////////////////////////////////////////////////////
//situation
////////////////////////////////////////////////////////
commands.situation_search_dialog = {
		action: 'extend',
		opts:{
			label:null,
			primary:'situation_search',
			commands:['situation_search',
			],
		}
	};

	commands.situation_search = {
		action : 'setupField',
		opts : {
			'key' : 'tmp:situation:search',
			'label' : null,
			'type' : 'situation_search',//place_search
			'show_help' : true,
			'ok_button':'#b_w1',
			'new_button':'#b_w2',
			'cancel_button':'#b_w3',
			'remove_button':'#b_w4',
			'close_button':'#b_w5',
			'select_command': 'situation_extend',
			'display_handler':createDisplayItem('title:'),
		}
	};

	commands.situation_simple = {
		action : 'setupField',
		opts : {
			'key' : 'tmp:situation:search',
			'label' : null,
			'type' : 'text',
			'show_help' : true,
			background_color:'pink',
			//autocomplete_url : '/archive/search-author',
		}
	};

	commands.situation_extend = {
		action: 'extend',
		opts:{
		  label:key_labels['ea:situation:'],
			primary:'situation_simple',
			//commands_primary_is_ref:['place_simple'],
			commands:['situation_simple','title_uniform','subject','status_finish'],
		}
	};



commands.situation = {
		action : 'setupField',
		opts : {
			type : 'text',
			key : [
					'ea:situation:',
					],
			//select_key_map:place_type_map,
			//select_key_width:'160px',
			show_help : true,
			autocomplete_url : '/archive/search-situation',
			add_button : true,
			add_button_first : false,
			add_button_br : true,
			add_button_label : 'add',
			br_each : true,
			br_first : false,
			one_label: true,
			skip_on_empty:false,
			//width:"517px",
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
			label:key_labels['ea:situation:'],
			extend_command:'situation_search_dialog',
			prescribed_select:true,
			}
	};
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////









////////////////////////////////////////////////////////
//process
////////////////////////////////////////////////////////
commands.process_search_dialog = {
		action: 'extend',
		opts:{
			label:null,
			primary:'process_search',
			commands:['process_search',
			],
		}
	};

	commands.process_search = {
		action : 'setupField',
		opts : {
			'key' : 'tmp:process:search',
			'label' : null,
			'type' : 'process_search',
			'show_help' : true,
			'ok_button':'#b_w1',
			'new_button':'#b_w2',
			'cancel_button':'#b_w3',
			'remove_button':'#b_w4',
			'close_button':'#b_w5',
			'select_command': 'process_extend',
			'display_handler':createDisplayItem('title:'),
		}
	};

	commands.process_simple = {
		action : 'setupField',
		opts : {
			'key' : 'tmp:process:search',
			'label' : null,
			'type' : 'text',
			'show_help' : true,
			background_color:'pink',
			//autocomplete_url : '/archive/search-author',
		}
	};

	commands.process_extend = {
		action: 'extend',
		opts:{
		  label:key_labels['ea:process:'],
			primary:'process_simple',
			//commands_primary_is_ref:['place_simple'],
			commands:['process_simple','title_uniform','subject','status_finish'],
		}
	};



commands.process = {
		action : 'setupField',
		opts : {
			type : 'text',
			key : [
					'ea:process:',
					],
			//select_key_map:place_type_map,
			//select_key_width:'160px',
			show_help : true,
			autocomplete_url : '/archive/search-process',
			add_button : true,
			add_button_first : false,
			add_button_br : true,
			add_button_label : 'add',
			br_each : true,
			br_first : false,
			one_label: true,
			skip_on_empty:false,
			//width:"517px",
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
			label:key_labels['ea:process:'],
			extend_command:'process_search_dialog',
			prescribed_select:true,
			}
	};
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////






////////////////////////////////////////////////////////
//Symbol
////////////////////////////////////////////////////////
commands.symbol_search_dialog = {
		action: 'extend',
		opts:{
			label:null,
			primary:'symbol_search',
			commands:['symbol_search',
			],
		}
	};

	commands.symbol_search = {
		action : 'setupField',
		opts : {
			'key' : 'tmp:symbol:search',
			'label' : null,
			'type' : 'symbol_search',
			'show_help' : true,
			'ok_button':'#b_w1',
			'new_button':'#b_w2',
			'cancel_button':'#b_w3',
			'remove_button':'#b_w4',
			'close_button':'#b_w5',
			'select_command': 'symbol_extend',
			'display_handler':createDisplayItem('title:'),
		}
	};

	commands.symbol_simple = {
		action : 'setupField',
		opts : {
			'key' : 'tmp:symbol:search',
			'label' : null,
			'type' : 'text',
			'show_help' : true,
			background_color:'pink',
			//autocomplete_url : '/archive/search-author',
		}
	};

	commands.symbol_extend = {
		action: 'extend',
		opts:{
		  label:key_labels['ea:symbol:'],
			primary:'symbol_simple',
			//commands_primary_is_ref:['place_simple'],
			commands:['symbol_simple','title_uniform','subject','status_finish'],
		}
	};



commands.symbol = {
		action : 'setupField',
		opts : {
			type : 'text',
			key : [
					'ea:symbol:',
					],
			//select_key_map:place_type_map,
			//select_key_width:'160px',
			show_help : true,
			autocomplete_url : '/archive/search-symbol',
			add_button : true,
			add_button_first : false,
			add_button_br : true,
			add_button_label : 'add',
			br_each : true,
			br_first : false,
			one_label: true,
			skip_on_empty:false,
			//width:"517px",
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
			label:key_labels['ea:symbol:'],
			extend_command:'symbol_search_dialog',
			prescribed_select:true,
			}
	};
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////












////////////////////////////////////////////////////////
//Instrument
////////////////////////////////////////////////////////
commands.instrument_search_dialog = {
action: 'extend',
opts:{
label:null,
primary:'instrument_search',
commands:['instrument_search',
],
}
};

commands.instrument_search = {
action : 'setupField',
opts : {
'key' : 'tmp:instrument:search',
'label' : null,
'type' : 'instrument_search',
'show_help' : true,
'ok_button':'#b_w1',
'new_button':'#b_w2',
'cancel_button':'#b_w3',
'remove_button':'#b_w4',
'close_button':'#b_w5',
'select_command': 'instrument_extend',
'display_handler':createDisplayItem('title:'),
}
};

commands.instrument_simple = {
action : 'setupField',
opts : {
'key' : 'tmp:instrument:search',
'label' : null,
'type' : 'text',
'show_help' : true,
background_color:'pink',
//autocomplete_url : '/archive/search-author',
}
};

commands.instrument_extend = {
action: 'extend',
opts:{
label:key_labels['ea:instrument:'],
primary:'instrument_simple',
//commands_primary_is_ref:['place_simple'],
commands:['instrument_simple','title_uniform','subject','status_finish'],
}
};



commands.instrument = {
action : 'setupField',
opts : {
type : 'text',
key : [
'ea:instrument:',
],
//select_key_map:place_type_map,
//select_key_width:'160px',
show_help : true,
autocomplete_url : '/archive/search-instrument',
add_button : true,
add_button_first : false,
add_button_br : true,
add_button_label : 'add',
br_each : true,
br_first : false,
one_label: true,
skip_on_empty:false,
//width:"517px",
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
label:key_labels['ea:instrument:'],
extend_command:'instrument_search_dialog',
prescribed_select:true,
}
};
////////////////////////////////////////////////////////
////////////////////////////////////////////////////////






