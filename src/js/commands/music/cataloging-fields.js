var commands = commands ? commands : {};

/****************************************************/
/*************** LC Classification Number ***********/
/****************************************************/

commands.lc_classification = {
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:classification:LCClassification_Start',
      'label':key_labels['ea:classification:LCClassification'],
      'show_help' : true,
      'repeat_style' : 'ordered',
      extend:true,
      extend_command: 'lc_classification_extend',
      extend_punctuation:'{{{v}}}\
{{#ea:classification:LCClassification_End}} - {{{v}}}{{/ea:classification:LCClassification_End}}',
    })
  };

commands.lc_classification_extend = {
    action: 'extend',
    opts:{
      label:key_labels['ea:classification:LCClassification'],
      primary:'lc_classification_simple',
      commands:['lc_classification_simple','lc_classification_end'],
    }
  };

commands.lc_classification_simple = {
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:classification:LCClassification_Start',
      'label':key_labels['ea:classification:LCClassification2'],
      'repeat_style' : 'ordered',
    })
  };

commands.lc_classification_end = {
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:classification:LCClassification_End',
      'label':key_labels['ea:classification:LCClassification_End'],
      'show_help' : true,
    })
  };


/****************************************************/
/***** Dewey Decimal Classification Number **********/
/****************************************************/

commands.ddc_number = {
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:classification:DDC_NumberStart',
      'label':key_labels['ea:classification:DDC'],
      'show_help' : true,
      'repeat_style' : 'ordered',
      extend:true,
      extend_command: 'ddc_number_extend',
      extend_punctuation:'{{v}}\
{{#ea:classification:DDC_NumberEnd}} - {{v}}{{/ea:classification:DDC_NumberEnd}}\
{{#ea:classification:DDC_Edition}} .Edition: {{v}}{{/ea:classification:DDC_Edition}}',
    })
  };

commands.ddc_number_extend = {
    action: 'extend',
    opts:{
      label:key_labels['ea:classification:DDC'],
      primary:'ddc_number_simple',
      commands:['ddc_number_simple','ddc_number_end','ddc_edition'],
    }
  };

commands.ddc_number_simple = {
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:classification:DDC_NumberStart',
      'label':key_labels['ea:classification:DDC2'],
      'repeat_style' : 'ordered',
    })
  };

commands.ddc_number_end = {
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:classification:DDC_NumberEnd',
      'label':key_labels['ea:classification:DDC_NumberEnd'],
      'show_help' : true,
    })
  };

commands.ddc_edition = {
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:classification:DDC_Edition',
      'label':key_labels['ea:classification:DDC_Edition'],
      'show_help' : true,
    })
  };


/****************************************************/
/************ Other Classification Number ***********/
/****************************************************/

commands.other_classification = {
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:classification:Other_Number_Start',
      'label':key_labels['ea:classification:Other_Number'],
      'show_help' : true,
      'repeat_style' : 'ordered',
      extend:true,
      extend_command: 'other_classification_extend',
      extend_punctuation:'{{v}}\
{{#ea:classification:Other_Number_End}} - {{v}}{{/ea:classification:Other_Number_End}}',
    })
  };

commands.other_classification_extend = {
    action: 'extend',
    opts:{
      label:key_labels['ea:classification:Other_Number'],
      primary:'other_classification_simple',
      commands:['other_classification_simple','other_classification_end'],
    }
  };

commands.other_classification_simple = {
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:classification:Other_Number_Start',
      'label':key_labels['ea:classification:Other_Number2'],
      'repeat_style' : 'ordered',
    })
  };

commands.other_classification_end = {
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:classification:Other_Number_End',
      'label':key_labels['ea:classification:Other_Number_End'],
      'show_help' : true,
    })
  };





/****************************************************/
/**************** Cataloging Source *****************/
/****************************************************/

commands.cataloging_source_original = {
    action : 'setupField',
    opts:{
      'key' : 'ea:classification:CatalogingSource_Original',
      'label':key_labels['ea:classification:CatalogingSource'],
      'show_help' : true,
//       setupOptions: function(options){
//         options.lang_select = {
//           default_lang:language_default,
//           available_languages: languages_avail,
//         };
//         return options;
//       },
      extend:true,
      extend_command: 'cataloging_source_original_extend',
      extend_punctuation:'Original: {{v}}\
{{#ea:classification:CatalogingSource_Modifying}}{{#first}}. - Modifying: {{/first}}{{v}}{{^last}}, {{/last}}{{/ea:classification:CatalogingSource_Modifying}}\
{{#ea:classification:CatalogingSource_Rules}}. - Rules: {{v}}{{/ea:classification:CatalogingSource_Rules}}',
    }
  };

commands.cataloging_source_original_extend = {
    action: 'extend',
    opts:{
      label:key_labels['ea:classification:CatalogingSource'],
      primary:'cataloging_source_original_simple',
      commands:['cataloging_source_original_simple','cataloging_source_modifying','cataloging_source_rules'],
    }
  };

commands.cataloging_source_original_simple = {
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:classification:CatalogingSource_Original',
      'label':key_labels['ea:classification:CatalogingSource_Original'],
      'default_value' : default_value['cataloging_source_original'],
    })
  };

commands.cataloging_source_modifying = {
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:classification:CatalogingSource_Modifying',
      'label':key_labels['ea:classification:CatalogingSource_Modifying'],
      'show_help' : true,
      'repeat_style' : 'ordered',
    })
  };


commands.cataloging_source_rules = {
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:classification:CatalogingSource_Rules',
      'label':key_labels['ea:classification:CatalogingSource_Rules'],
      'default_value' : default_value['cataloging_source_rules'],
    })
  };


//commands.cataloging_source_language = {
//		action : 'setupField',
//		opts : jQuery.extend({},opts_text,{
//			'key' : 'ea:classification:CatalogingSource_Language',
//			'label':key_labels['ea:classification:CatalogingSource_Language'],
//			'show_help' : true,
//			'type': 'select',
//			'select_values':language_map,
//		})
//	};
