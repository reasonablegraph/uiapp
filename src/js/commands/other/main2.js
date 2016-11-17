var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'main2.js');

//@DocGroup(module="actor", group="js", comment="contributor form command")
cmdCreate('contributors_all',{
			action : 'setupField',
			opts : {
				type : 'text',
				setupOptions: function(options){
					options.select_key_map= author_type_map;
					//options.key =contributor_keys;
					return options;
				},
				//select_key_map:commands.author_type_map,
				select_key_width:'160px',
				show_help : true,
				//autocomplete_url : '/ws/archive/search-author',
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
					{ text:'new1',    id:'b_d2',},
					{ text:'family', id:'b_d6',},/*family*/
					{ text:'cancel', id:'b_d3',},
					{ text:'remove', id:'b_d4',},
					{ text:'close',  id:'b_d5',},
				],
				//extend_buttons_cardinality:3,
				extend_position:{ my: "center top", at: "center top" },
				//key :commands.contributor_keys,
				 // [
				// 'dc:contributor:author',
				// 'ea:contributor:responsible',
				// 'ea:contributor:editor',
				// 'dc:contributor:editor',
				// 'ea:contributor:translator',
				// 'dc:contributor:illustrator',
				// 'dc:contributor:advisor',
				// 'dc:contributor:other',
				// ],
				label:'Contributor',
				//extend_command:'contributor_search_dialog',
				 extend_punctuation : '{{v}}\
{{#ea:title:specific}}[{{v}}]{{/ea:title:specific}}',
				extend_command:{
				 'dc:contributor:author':'contributor_search_dialog',
				 'dc:contributor:illustrator':'contributor_search_dialog',
				 'ea:contributor:responsible':'contributor_search_dialog',
				 'ea:contributor:editor':'contributor_search_dialog',
				 'dc:contributor:editor':'contributor_search_dialog',
         'ea:contributor:translator':'contributor_search_dialog',
         'dc:contributor:advisor':'contributor_search_dialog',
         'dc:contributor:other':'contributor_search_dialog',
				 }
				
				
				// lang_select:{
					 // default_lang:language_default,
					 // available_languages: languages_avail,
				// },
					//prescribed_select : true,

				}
});
cmdCreate('contributor_search',{
		action : 'setupField',
		opts : {
			'key' : 'tmp:contributor:search',
			'label' : null,
			'type' : 'contributor_search',
			'show_help' : true,
			'ok_button':'#b_d1',
			'new_button':{
				'actor':'#b_d2',
				'family':'#b_d6',
			},
			'cancel_button':'#b_d3',
			'remove_button':'#b_d4',
			'close_button':'#b_d5',
//			'select_command': 'contributor_openWindow',
			'select_command': {
				'actor':'contributor_extend',
				'family':'contributor_extend4'
			},
			'display_handler':createDisplayItem('name:','other-name:'),
		}
});
cmdCreate('contributor_extend4',{
			action: 'extend',
			opts:{
				label:null,
				primary:'contributor_simple',
				commands:[ //'header_actor_c',
				'contributor_type','contributor_simple','person_titles','subject','status_hidden'
				//'header_controls_c',
				//'author_buttons'
				],
			}
});

	
/* InputContributorSearch  06 */
	
	
	
	
	
	
	
	
	
	
	