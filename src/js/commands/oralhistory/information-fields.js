var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'information-fields.js');

// commands\.
// cmdCreate('

// (cmdCreate\('\w*)\s*=\s*\{
// $1',{

// };
// });


/****************************************************/
/*********** Nonpublic General Note *****************/
/****************************************************/
cmdCreate('nonpublic_general_note',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:auth:NoteNonpublic',
      'label' : key_labels['ea:auth:NoteNonpublic'],
      'type' : 'text',
      'show_help' : true,
      'repeat_style' : 'ordered',
    })
  });


/****************************************************/
/************* Public General Note ******************/
/****************************************************/
cmdCreate('public_general_note',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:auth:NotePublic',
      'label' : key_labels['ea:auth:NotePublic'],
      'type' : 'text',
      'show_help' : true,
      'repeat_style' : 'ordered',
    })
  });


/****************************************************/
/*********** Biographical Data **********************/
/****************************************************/
cmdCreate('biographical_data',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:authBiographical:Data_Text',
      'label':key_labels['ea:authBiographical:Data_Text'],
      'repeat_style' : 'ordered',
      'strip_html': true,
      extend:true,
      extend_command: 'biographical_data_extend',
      extend_punctuation:'{{{v}}}\
{{#ea:url:related}}{{#first}}. - Link:{{/first}} {{{v}}}{{^last}},{{/last}}{{/ea:url:related}}',
    	})
  });


cmdCreate('biographical_data_extend',{
    action: 'extend',
    opts:{
      label:key_labels['ea:authBiographical:Data_Text'],
      primary:'biographical_data_simple',
      commands:['biographical_data_simple','url_rel',],
    }
  });


cmdCreate('biographical_data_simple',{
    action : 'setupField',
    opts : jQuery.extend({},opts_textarea,{
      'key' : 'ea:authBiographical:Data_Text',
      'label':key_labels['ea:authBiographical:Data_Text'],
      'default_edit_type': 'html'
    })
  });


/****************************************************/
/*********** Electronic Location ********************/
/****************************************************/

cmdCreate('electronic_location',{
    action : 'setupField',
    opts : {
      key : 'ea:authElectronic:Location',
      label : key_labels['ea:authElectronic:Location'],
      repeat_style : 'ordered',
      type : 'url',
      show_help : true,
      add_button : true,
      add_button_first : false,
      add_button_br : true,
      add_button_label : 'add',
      //width : '650px',
      one_label : true,
      br_each : true,
      br_first : false,
//      extend:true,
//      extend_command: 'electronic_location_extend',
    }
});

cmdCreate('electronic_location_extend',{
    action: 'extend',
    opts:{
      label:key_labels['ea:authElectronic:Location'],
      primary:'url',
      commands:['url','comment_simple','comment_simple_internal'],
    }
  });

