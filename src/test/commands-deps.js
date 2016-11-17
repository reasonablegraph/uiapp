var doDeps = function(){
	
	var nodes = {};
	var deps = [];
	
	
	for ( var fs_name  in formSetups){
		//consoleDump(fs_name);
		var  fs = formSetups[fs_name];
		fs_name_ok = 'form@' +fs_name;
		//consoleDump(fs_name_ok);
		for ( var j  in fs){
			cmd_name = fs[j];
			deps.push({'from':fs_name_ok, 'to':cmd_name, 'label':'form_setup'});
		}
	}
	
	
	for (var cmd_name in commands){
		var cmd = commands[cmd_name];
//		consoleDump('-------------------------------------------------------------');
//		consoleDump(cmd_name);
//		consoleDump(cmd);
//		consoleDump('-------------------------------------------------------------');
		var action =cmd['action'];
		var node = {'action':action};
		nodes[cmd_name]=node;
		
		if (cmd['opts']){
			var opts = cmd['opts'];
			if (opts['type']){
				node['type'] = opts['type'];
			}
			if (opts['key']){
				var my_key = opts['key'];
				if (jQuery.isArray(my_key)){
					node['key'] = '[ARRAY]';
				} else {
					node['key'] = opts['key'];
				}
			}
			if (opts['x-generator']){
				node['x-generator'] = opts['x-generator']; 
			}
			if (cmd['x-srcFile']){
				node['x-srcFile'] = cmd['x-srcFile']; 
			}
			if (opts['commands']){
				var cmd_commands= opts['commands']; 
				for (j in cmd_commands){
					var dep_cmd_name = cmd_commands[j];
					//consoleDump(cmd_name + ' > ' + dep_cmd_name);
					deps.push({'from':cmd_name, 'to':dep_cmd_name});
					}
			}
			
			if (opts['command']){
				var dep_cmd_name= opts['command'];
				deps.push({'from':cmd_name, 'to':dep_cmd_name,'label':'command'});
			}
			
			if (opts['select_command']){
				var dep_cmd_name= opts['select_command'];
				if (jQuery.isPlainObject(dep_cmd_name)){
					var cmd_commands= dep_cmd_name;
					for (j in cmd_commands){
						var dep_cmd_name = cmd_commands[j];
						deps.push({'from':cmd_name, 'to':dep_cmd_name,'label':'select_command: ' + j});
					}
				} else {
					deps.push({'from':cmd_name, 'to':dep_cmd_name,'label':'select_command'});
				}
	
				
			}
			
	
			if (opts['extend_command']){
				var dep_cmd_name= opts['extend_command'];
				if (jQuery.isPlainObject(dep_cmd_name)){
					var cmd_commands= dep_cmd_name;
					for (j in cmd_commands){
						var dep_cmd_name = cmd_commands[j];
						deps.push({'from':cmd_name, 'to':dep_cmd_name,'label':'extend_command: ' + j});
					}
				} else {
					deps.push({'from':cmd_name, 'to':dep_cmd_name,'label':'extend_command'});
				}
			}
			
	
			if (opts['extend_command_with_ref']){
				var dep_cmd_name= opts['extend_command_with_ref'];
				if (jQuery.isPlainObject(dep_cmd_name)){
					var cmd_commands= dep_cmd_name;
					for (j in cmd_commands){
						var dep_cmd_name = cmd_commands[j];
						deps.push({'from':cmd_name, 'to':dep_cmd_name,'label':'extend_command_with_ref: ' + j});
					}
				} else {
					deps.push({'from':cmd_name, 'to':dep_cmd_name,'label':'extend_command_with_ref'});
				}
			}
			
		}
		
	}
	var graph_data={nodes:nodes,arcs:deps};
	phantomTask('dump.depsToDot', graph_data);

}