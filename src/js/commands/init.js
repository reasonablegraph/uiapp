
// console.log("@######################");
// console.log('def',   object_types['default']);
// console.log('known', known_object_types);
// console.log('given', object_types['values']);
// console.log('final', my_object_types);
// console.log("@######################");
//
//ok

var createDisplayItem = function(title_label,tile_uniform_label){
	//console.log("CREATE-DISPLAY-ITEM",title_label,tile_uniform_label);
	if (tile_uniform_label === undefined){
		tile_uniform_label = 'uniform-title:';
	}
	if (title_label === undefined){
		title_label = 'title:';
	}

	return function(item_id, itemFields){

		//console.log("@@DISPLAY-HANDLER",item_id);

		var my_root = jQuery('<div class="subitem">');
		//	console.log(itemFields.ndata);
//		jQuery.each(itemFields.ndata,function(idx,item){
//			console.log("display-item: ", item);
//		});

		var v_title = '???';
		var v_title_model = itemFields.getFirstFieldModel('dc:title:');
		if (v_title_model != null){
			v_title = v_title_model.value();
		}
		var li;

		var link = jQuery('<a>');
		link.attr('href','/archive/item/' + item_id);
		link.attr('target','_blank');
		var h = jQuery('<h4>');
		h.text(v_title);
		h.appendTo(link);
		link.appendTo(my_root);


		var display_field = function(key,label){
			var li;
			var fs = itemFields.getFieldModels(key);
			if (fs.length > 0){
				for (i in fs) {
					li = jQuery('<li>');
					jQuery('<span class="dlab">').text(label).appendTo(li);
					var an = fs[i].value();
					jQuery('<span class="dval">').text(an).appendTo(li);
					li.appendTo(ul);
				}
			}
		};

		var ul = jQuery('<ul class="subitem">');

		 li = jQuery('<li>');
		 jQuery('<span class="dlab">').text(title_label).appendTo(li);
		 jQuery('<span class="dval">').text(v_title).appendTo(li);
		 li.appendTo(ul);

		display_field('ea:title:uniform',tile_uniform_label);
		display_field('dc:contributor:author','author:');
		display_field('ea:status:','status:');
		ul.appendTo(my_root);


		var parent_model = this.parent_model;
		var parent_id = parent_model.id();
		var cmd = {
			action : 'setupField',
			opts : {
				'type' : 'text',
				'show_help' : false,
				'key' : 'ea:title:specific',
				'label' : 'title specific',
				'link_id': parent_id,
				}
			};
		this.fc.execCMD(cmd,my_root);
		return my_root;
	};
};


	var opts_text = {
			'type' : 'text',
			'show_help' : true,
	};
	var opts_name = {
			'type' : 'name',
			'show_help' : true,
	};


	var opts_textarea = {
			'type' : 'textarea',
			'show_help' : true,
	};


	var opts_multy_text = {
				type:'text',
				show_help : true,
				add_button : true,
				add_button_first : false,
				add_button_br : true,
				add_button_label : 'add',
				one_label : true,
				br_each : true,
				br_first : false,
				width : '650px',
		};

var opts_multy_name = {
				type:'name',
				show_help : true,
				add_button : true,
				add_button_first : false,
				add_button_br : true,
				add_button_label : 'add',
				one_label : true,
				br_each : true,
				br_first : false,
				width : '650px',
	};

	var opts_multy_select = {
				type:'select',
				show_help : true,
				add_button : true,
				add_button_first : false,
				add_button_br : true,
				add_button_label : 'add',
				one_label : true,
				br_each : true,
				br_first : false,
				width : '650px',
		};




var changeFormat = function(e){
		fc.setupForm(formSetups[jQuery(this).val()]);
};


var commands = {};
var cmds = commands;
