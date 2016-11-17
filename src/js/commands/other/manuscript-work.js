var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'manuscript-work.js');

//commands\.
//cmdCreate('

//(cmdCreate\('\w*)\s*=\s*\{
//$1',{

//};
//});



//////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//  add to config:
//  'header_manuscript_sect_work_with_add','header_manuscript_work_statement','generate_work_statement',
//
//
// DEPENDS: main.js work.js
//////////////////////////////////////////////////////////////////////////////////////////////////////
cmdCreate('manuscript_work',{
		action : 'setupField',
			opts : jQuery.extend({},opts_text,{
			'key' : 'ea:work:',
			'label' : 'title',
			'autocomplete_url' : '/archive/search-title',
			'validation':'not_empty',
			has_ref_disable:true,
			has_ref_extend:true,
			extend:false,
			setupOptions: function(options){
				options.lang_select = {
					default_lang:language_default,
					available_languages: languages_avail,
				}
				return options;
			},
			extend_buttons:[
				{ text:'ok',     id:'b_d1',},
				{ text:'remove', id:'b_d2',},
			],
			extend_command: 'work_extend_show',
		})
});
cmdCreate('work_manuscript_extend',{
		action: 'extend',
		opts:{
		  label:'Work',
			primary:'manuscript_work',
			commands_primary_is_ref:['manuscript_work'],
			commands:['manuscript_work','title_uniform','contributors_author','date_orgissued','note_generic_m',
			'comment_simple_internal','lang1','subject','status_finish','work_buttons','work_setup'],
		}
});
cmdCreate('works_manuscript_all',{
		action : 'setupField',
		opts : {
			type : 'text',
			select_key_map:{
				'ea:work:':'Work',
			},
			select_key_width:'160px',
			show_help : true,
			autocomplete_url : '/archive/search-work',
			add_button : false,
			//add_button_first : false,
			//add_button_br : true,
			//add_button_label : 'add',
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
			//key : [
			//'ea:work:',
			//],
			label:'Work',
			extend_command:'manuscript_work_search_dialog',
			}
});
cmdCreate('manuscript_work_search_dialog',{
		action: 'extend',
		opts:{
			label:null,
			primary:'manuscript_work_search',
			commands:['manuscript_work_search',
			//'author_dialog_buttons_setup'
			],
		}
});
cmdCreate('manuscript_work_search',{
		action : 'setupField',
		opts : {
			//'key' : 'tmp:work:search',
			'key' : 'ea:work:',

			'label' : null,
			'type' : 'work_search',
			'show_help' : true,
			'ok_button':'#b_w1',
			'new_button':'#b_w2',
			'cancel_button':'#b_w3',
			'remove_button':'#b_w4',
			'close_button':'#b_w5',
			'select_command': 'work_manuscript_extend',
			'display_handler':createDisplayItem('name:','other-name:'),
		}
});





////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
cmdCreate('header_manuscript_sect_work_with_add',{
		action:'addSection',
		opts:{
			skey:'work_sect_add',
			label:'Work',
			level:3,
			set_container: true,
			//KOUMPI ADD
		  add_button:true,
		  status:'open',
			'click_handler': function(e){
				e.preventDefault();
				e.stopImmediatePropagation();
				//var h = jQuery(this).closest('.hsection').data('arc_section').show();
				fc.createFieldModel('ea:work:statement',null,null);
				fc._renderForm();
		   },
		}
});
cmdCreate('header_manuscript_work_statement',{
		action:'addSectionExt',
		opts:{
			skey: 'work_statement_header',
			add_empty:true,
			skip_on_empty:false,
			key: 'ea:work:statement',
			set_container: false,
			command:'work_manuscript_statement_extend',
			label:'work',
			level:4,
			//add_button_expand:true,
		}
});
cmdCreate('work_manuscript_statement_extend',{
		action: 'extend',
		opts:{
		  label:'Work',
			primary:'work_statement',
			commands_primary_is_ref:['work_statement'],
			commands:[
			'work_statement',
			'work_title',
			'works_manuscript_all',
			'note_generic',
			'lang1',
			],
		}
});

