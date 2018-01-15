

var cmdCreateFactory = function(commands,src_file) {
	var rep =  function(name, declaration){

			if (jQuery.isPlainObject(name)){
				declaration = name;
				name = declaration['cmd_name'];
			}

			if (commands[name]){
				throw 'command: ' + name + ' allredy exists';
			}
			declaration['x-srcFile'] = src_file;

			commands[name] = declaration;
	};

	rep.relation = function(options){
		//console.log("relation:",options['cmd_name']);
		return cmdCreateRelation(commands,options,src_file);
	}
	return rep;


}


/////////////////////////////////////////////////////////////////////////////////////////////////////////
// RELATIONS
/////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 *
 *
 * cmdCreateRelation(commands, options);
 *
 * // BASIC OPTIONS:
 * 	'cmd_name' : 'works2_all',
 *
 * 	'key' : 'ea:work:',
 * 	'label' : 'work',
 * 	'search_url' : '/prepo/ws/search-work',
 * 	root_options : {
 * 		"add_button" : true,
 * 		"repeat_style" : "ordered",
 * 		width:"265px",
 * 	},
 *
 * 	//REMOTE VIEW OPTIONAL ATTRIBUTES
 * 	remote_view_type: 'generic',
 * 	remote_view_display_fields : [],
 * 	remote_view_exec_cmds: [],
 *
 *
 * // SINGLE OBJECT TYPE VALUES
 * 	'object_type':'auth-work',
 * 	'extend_primary_key':'dc:title:',
 * 	'extend_primary_label':'place term',
 * 	'new_button_label' : 'newX',
 * 	'extend_commands' : work_extend_commands,
 *
 *
 * //MULTIPLE OBJECT TYPE VALUES
 * 	'object_type' : {
 * 		'auth-work' : {
 * 			'extend_primary_key' : 'dc:title:',
 * 			'extend_primary_label' : 'work',
 * 			'new_button_label' : 'new work',
 * 			'extend_commands' : work_extend_commands,
 * 		},
 * 		'auth-expresion' : {
 * 			'extend_primary_key' : 'dc:title:',
 * 			'extend_primary_label' : 'expresion',
 * 			'new_button_label' : 'new expresion',
 * 			'extend_commands' : work_extend_commands,
 * 		}
 * 	},
 *
 */

var cmdCreateRelation = function(commands, soptions,src_file) {
	//console.log("cmdCreateRelation:",soptions['cmd_name']);
	var self = commands;

	var cmd_base = soptions.cmd_name;
	var cmd_with_ref_view = '_rel_' + cmd_base + '_with_ref_view';
	var cmd_search_dialog = '_rel_' + cmd_base + '_search_dialog';
	var cmd_search = '_rel_' + cmd_base + '_search';

	var cmd_view = '_rel_' + cmd_base + '_view';

	if (commands[cmd_base]) {
		throw 'command: ' + cmd_base + ' allredy exists'
	}
	;

	var object_type = soptions.object_type;
	var key = soptions.key;
	var label = soptions.label;
	var search_url = soptions.search_url;
	var extend_primary_label = soptions.extend_primary_label ? soptions.extend_primary_label : label;
	var extend_primary_key = soptions.extend_primary_key ? soptions.extend_primary_key : 'dc:title:';
	var remote_view_type = soptions.remote_view_type ? soptions.remote_view_type : 'generic';
	var remote_view_exec_cmds = soptions.remote_view_exec_cmds ? soptions.remote_view_exec_cmds : [];
	var new_button_flag = (soptions.new_button_flag === undefined) ? true: soptions.new_button_flag;
	var remove_button_flag = soptions.remove_button_flag === undefined ? true : soptions.remove_button_flag;
	var read_only_flag = soptions.read_only === undefined ? true: soptions.read_only;
	var remote_view_display_fields = soptions.remote_view_display_fields ? soptions.remote_view_display_fields : [ {
		'key' : 'ea:auth:NotePublic',//dc:title:',
		'label' : key_labels['note_public'] //key_labels['dc:title:']
	} ];
	var display_inferred = soptions[display_inferred] ? soptions[display_inferred] : false;
	var time_bounded_flag = soptions.time_bounded === undefined ? false: soptions.time_bounded;
	var note_flag = soptions.note === undefined ? false: soptions.note;
	var search_dialog_commands = soptions.search_dialog_commands === undefined ? []: soptions.search_dialog_commands;
	var skip_title_for_new_object = soptions['skip_title_for_new_object'] ? true : false;
	var hide_title_for_new_object = soptions['hide_title_for_new_object'] ? true : false;
	var tmp_title_for_new_object = soptions['tmp_title_for_new_object'] ? soptions['tmp_title_for_new_object'] : null;

	var single_object_type_flag = true;
	if (jQuery.isPlainObject(object_type)) {
		single_object_type_flag = false;
	}

	var default_new_ojbect_dialog_stack_pop_on_create = soptions['new_ojbect_dialog_stack_pop_on_create'] !== undefined ? soptions['new_ojbect_dialog_stack_pop_on_create'] : 1;
	var new_ojbect_dialog_stack_pop_on_create  = default_new_ojbect_dialog_stack_pop_on_create;

	var extend_commands = null;
	var new_buttons = [];
	if (new_button_flag) {

		var createExtendCommands = function(i, object_type, params) {
			var extend_primary_key = params['extend_primary_key'];
			var extend_primary_label = params['extend_primary_label'];
			var input_extend_commands  = params['extend_commands'];
			var default_value  = params['value'] ? params['value'] : null;

			var cmd_extend = '_rel_' + cmd_base + '_extend_' + i;
			var cmd_hidden_obj_type = '_rel_' + cmd_base + '_hidden_ot_' + i;
			var cmd_extend_primary = '_rel_' + cmd_base + '_extend_primary_' + i;
			self[cmd_hidden_obj_type] = {
				"action" : "setupField",
				"opts" : {
					'x-generator' : 'cmdCreateRelation',
					'x-value' : default_value,
					"type" : "hidden",
					"key" : "ea:obj-type:",
					"value" : object_type,
				}
			};

			var extend_commands = null;
			if (input_extend_commands) {
				extend_commands = input_extend_commands.slice();
				for ( var j in extend_commands) {
					if (extend_commands[j] == '__PRIMARY__') {
						extend_commands[j] = cmd_extend_primary;
					}
				}
			} else {
				extend_commands = [ cmd_extend_primary ];
			}
			extend_commands.push(cmd_hidden_obj_type);

			self[cmd_extend] = {
				"action" : "extend",
				"opts" : {
					'x-generator' : 'cmdCreateRelation',
					"label" : label,
					"primary" : cmd_extend_primary,
					"commands" : extend_commands,
				}
			};


			self[cmd_extend_primary] = {
				"action" : "setupField",
				"opts" : {
					'x-generator' : 'cmdCreateRelation',
//					"type" : "text",
					"type" : (skip_title_for_new_object && hide_title_for_new_object ? "hidden" : "text"),
					"value" :  (tmp_title_for_new_object ? tmp_title_for_new_object :  key_labels['tmp_title_for_new_object_'+object_type]),
					"show_help" : true,
					"key" : extend_primary_key,
					"label" : extend_primary_label,
					"clear" : "left",
				}
			};

			var button = {
					button_options : {
						'text' : params['new_button_label'],
						'id' : 'b_new' + i,
						style : 'display:none;'+ (params['new_button_style'] ? params['new_button_style'] : '')
					},
					command: cmd_extend,
			}
			return button;
			//return extend_commands;
		};//END: function createExtendCommands

		if (single_object_type_flag) {
			var button = createExtendCommands(1, object_type, soptions);
			new_buttons.push(button);
		} else {
			var i = 0;
			for (ot in object_type) {
				var params = object_type[ot];
				var button =  createExtendCommands(i, ot, params);
				new_buttons.push(button);
				i+=1;
			}
		}
	} // END: IF NEW BUTTON FLUG

	var init_root_options ={};
	if (soptions.root_options) {
		init_root_options =  soptions.root_options;
	}

	if (jQuery.isPlainObject(key)){
		init_root_options['select_key_width'] ='220px';
		init_root_options['width'] ='428px';
	} else {
		init_root_options['width'] ='650px';
	}

	if (read_only_flag){
		init_root_options['read_only'] = true;
		init_root_options['relation_input_type'] = 'locked';
	} else {
		init_root_options['relation_input_type'] = 'free';
	}

	if (soptions['select_key_width']){
		init_root_options['select_key_width'] =soptions['select_key_width'];
	}
	if (soptions['width']){
		init_root_options['width'] =soptions['width'];
	}

	if (soptions['add_button']){
		init_root_options['add_button'] =soptions['add_button'];
	}

	if (soptions['advanced_field']){
		init_root_options['advanced_field'] =soptions['advanced_field'];
	}

	if (soptions['repeat_style']){
		init_root_options['repeat_style'] =soptions['repeat_style'];
	}
	if (soptions['extend_punctuation']){
		init_root_options['extend_punctuation'] =soptions['extend_punctuation'];
	}
	if (soptions['has_ref_background_color']){
		init_root_options['has_ref_background_color'] =soptions['has_ref_background_color'];
	}
	if (soptions['display_inferred']){
		init_root_options['display_inferred'] =soptions['display_inferred'];
	}


	var root_options = jQuery.extend({
		'key' : key,
		'label' : label,

		type : 'text',
		'create_subitem' : true,
		show_help : true,
		one_label : true,
		// width:"265px",
		extend : true,
		has_ref_disable : true,

		extend_position : {
			my : "center top",
			at : "center top"
		},
		'extend_command' : cmd_search_dialog,
		'extend_command_with_ref' : cmd_with_ref_view,
		'x-generator' : 'cmdCreateRelation',
	},init_root_options);






	if (!root_options['read_only']){
		root_options['has_ref_disable']=false;
		root_options['has_ref_background_color']='#99FF66';
	}

	self[cmd_base] = {
		action : 'setupField',
		opts : root_options,
	};
	if (src_file){
		self[cmd_base]['x-srcFile'] = src_file;
	}



	var cmd_wit_ref_view_buttons = [];


	cmd_wit_ref_view_buttons.push({'text' : 'ok'});
	if (remove_button_flag){
		cmd_wit_ref_view_buttons.push({
				'text' : 'remove',
				'actions' : [ {
					'name' : 'remove',
					'confirm_message' : 'do you want to remove ?'
				}]
		});
	};
	//cmd_wit_ref_view_buttons.push({'text' : 'close'});


	var cmd_with_ref_view_commands = [cmd_view];
	if (time_bounded_flag){
		cmd_with_ref_view_commands.push('relation_date_start');
		cmd_with_ref_view_commands.push('relation_date_end');
	}

	if (note_flag){
		cmd_with_ref_view_commands.push('note');
	}

	Array.prototype.push.apply(cmd_with_ref_view_commands,search_dialog_commands);

	self[cmd_with_ref_view] = {
		'action' : 'extend',
		'opts' : {
			'label' : label,
			'primary' : cmd_view,
			'commands' : cmd_with_ref_view_commands,
			'x-generator' : 'cmdCreateRelation',
			'buttons' : cmd_wit_ref_view_buttons,
		}
	};

	var search_dialog_button = null;
	search_dialog_button = [{
		'text' : 'ok',
		'id' : 'b_w1',
		style : 'display:none'
	}];
	for (i in new_buttons){
		search_dialog_button.push(new_buttons[i]['button_options']);
	}
	search_dialog_button = search_dialog_button.concat([
		 {
			'text' : 'cancel',
			'id' : 'b_w3',
			style : 'display:none'
		}, {
			'text' : 'remove',
			'id' : 'b_w4',
			style : 'display:none'
		}, {
			'text' : 'close',
			'id' : 'b_w5',
			style : 'display:none'
		}, {
			text : 'create',
			id : 'b_w7',
			style : 'display:none'
		}]);

	//var relation_commands = [];
	cmd_search_dialog_commands = [cmd_search];
	if (time_bounded_flag){
		//console.log("TIME BOUNDED ",key);
		cmd_search_dialog_commands.push('relation_date_start');
		cmd_search_dialog_commands.push('relation_date_end');
		//relation_commands.push('relation_date_start');
		//relation_commands.push('relation_date_end');
	}

	if (note_flag){
		cmd_search_dialog_commands.push('note');
	}

	Array.prototype.push.apply(cmd_search_dialog_commands,search_dialog_commands);

	if (cmd_search_dialog_commands.length > 1){
		new_ojbect_dialog_stack_pop_on_create = 0;
	}

	self[cmd_search_dialog] = {
		action : 'extend',
		opts : {
			label : null,
			'x-generator' : 'cmdCreateRelation',
			primary : cmd_search,
			commands : cmd_search_dialog_commands, //FIXME: ADD XXX
			'buttons' : search_dialog_button,
			//'skip_extend_commands_if_empty_primary' : true,
		}
	};

	var key_search = key;
	if (jQuery.isArray(key)){
		key_search = key[0];
	}


	var cmd_search_opts = {
		'x-generator' : 'cmdCreateRelation',
		'key' : 'tmp:' + key_search,
		'label' : label,
		'type' : 'object_search',
		'search_url' : search_url,
		'show_help' : true,
		'ok_button' : '#b_w1',
		'create_button' : '#b_w7',
		'cancel_button' : '#b_w3',
		'remove_button' : '#b_w4',
		'close_button' : '#b_w5',
		'display_command' : cmd_view,
		'new_ojbect_dialog_stack_pop_on_create':new_ojbect_dialog_stack_pop_on_create,
		'skip_title_for_new_object':skip_title_for_new_object,
		//'throw_event_object_search_finish':true,
		//'relation_commands': relation_commands
	};


	if (new_button_flag) {
		var new_button_opt = {};
		var select_command_opt = {};
		for (i in new_buttons){
			var nb = new_buttons[i];
			var key = 'new_' + i;
			new_button_opt[key] = '#' + nb['button_options']['id'];
			select_command_opt[key] = nb['command'];
		}
		cmd_search_opts['new_button'] = new_button_opt;
		cmd_search_opts['select_command'] = select_command_opt;
	}

	self[cmd_search] = {
		action : 'setupField',
		opts : cmd_search_opts
	};

	self[cmd_view] = {
		'action' : 'remoteView',
		'opts' : {
			'x-generator' : 'cmdCreateRelation',
			'type' : remote_view_type,
			'display_fields' : remote_view_display_fields,
			'exec_cmds':remote_view_exec_cmds,
		}
	};

}

// ???
//  controled_subject_false"
// {
// "action": "setupField",
// "opts": {
// "type": "hidden",
// "show_help": true,
// "key": "ea:subj:control",
// "value": "0"
// }
// }

