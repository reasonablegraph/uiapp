var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'link-fields.js');


/****************************************************/
/***** Library of Congress Control Number ***********/
/****************************************************/
cmdCreate('lccn_number',{
    action : 'setupField',
    opts:{
      'key' : 'ea:link:Lccn_Number',
      'label':key_labels['ea:link:Lccn_Number'],
      'show_help' : true,
      extend:true,
      extend_command: 'lccn_number_extend',
      extend_punctuation:'{{{v}}}\
{{#ea:link:Lccn_Canceled}}{{#first}}. - Canceled/Invalid: [{{/first}}{{v}}{{^last}}, {{/last}}{{#last}}]{{/last}} {{/ea:link:Lccn_Canceled}}\
{{#ea:link:Lccn_Url}} - {{{v}}}{{/ea:link:Lccn_Url}}',
    }
});
cmdCreate('lccn_number_extend',{
    action: 'extend',
    opts:{
      label:key_labels['ea:link:Lccn_Number'],
      primary:'lccn_number_simple',
      commands:['lccn_number_simple','lccn_url'],
    }
});
cmdCreate('lccn_number_simple',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:link:Lccn_Number',
      'label':key_labels['ea:link:Lccn_Number2'],
    })
});
cmdCreate('lccn_canceled',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:link:Lccn_Canceled',
      'label':key_labels['ea:link:Lccn_Canceled'],
      'show_help' : true,
      'repeat_style' : 'ordered',
    })
});
cmdCreate('lccn_url',{
    action : 'setupField',
    opts : {
      key : 'ea:link:Lccn_Url',
      label : key_labels['ea:link:Lccn_Url'],
      type : 'url',
      show_help : true,
    }
});


/*******************************/
/*****  Bibliography ***********/
/*******************************/
cmdCreate('bibliography',{
    action : 'setupField',
    opts:{
      'key' : 'ea:link:bibliographyNumber',
      'label':key_labels['ea:link:bibliography'],
      'show_help' : true,
      extend:true,
      extend_command: 'bibliography_extend',
      extend_punctuation:'{{{v}}}\
{{#ea:link:bibliographyInformation}} - {{{ea:link:bibliographyInformation}}}{{/ea:link:bibliographyInformation}}',
    }
});
cmdCreate('bibliography_extend',{
    action: 'extend',
    opts:{
      label:key_labels['ea:link:bibliography'],
      primary:'bibliography_simple',
      commands:['bibliography_simple','bibliography_information'],
    }
});
cmdCreate('bibliography_simple',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:link:bibliographyNumber',
      'label':key_labels['ea:link:bibliographyNumber'],
    })
});
cmdCreate('bibliography_information',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:link:bibliographyInformation',
      'label':key_labels['ea:link:bibliographyInformation'],
      'show_help' : true,
    })
});


/****************************************************/
/***** National Library of Greece Control Number ****/
/****************************************************/
cmdCreate('national_bibliography_number',{
    action : 'setupField',
    opts:{
      'key' : 'ea:link:NationalBibliographyNumber_Number',
      'label':key_labels['ea:link:NationalBibliographyNumber_Number'],
      'show_help' : true,
      extend:true,
      extend_command: 'national_bibliography_number_extend',
      extend_punctuation:'{{{v}}}\
{{#ea:link:NationalBibliographyNumber_Canceled}}{{#first}}. - Canceled/Invalid: [{{/first}}{{v}}{{^last}}, {{/last}}{{#last}}]{{/last}} {{/ea:link:NationalBibliographyNumber_Canceled}}\
{{#ea:link:NationalBibliographyNumber_Url}} - {{{v}}}{{/ea:link:NationalBibliographyNumber_Url}}',
    }
});
cmdCreate('national_bibliography_number_extend',{
    action: 'extend',
    opts:{
      label:key_labels['ea:link:NationalBibliographyNumber_Number'],
      primary:'national_bibliography_number_simple',
      commands:['national_bibliography_number_simple','national_bibliography_url'],
    }
});
cmdCreate('national_bibliography_number_simple',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:link:NationalBibliographyNumber_Number',
      'label':key_labels['ea:link:NationalBibliographyNumber_Number2'],
    })
});
cmdCreate('national_bibliography_canceled',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:link:NationalBibliographyNumber_Canceled',
      'label':key_labels['ea:link:NationalBibliographyNumber_Canceled'],
      'show_help' : true,
      'repeat_style' : 'ordered',
    })
});
cmdCreate('national_bibliography_url',{
    action : 'setupField',
    opts : {
      key : 'ea:link:NationalBibliographyNumber_Url',
      label : key_labels['ea:link:NationalBibliographyNumber_Url'],
      type : 'url',
      show_help : true,
    }
});


/****************************************************/
/********* Other system control number **************/
/****************************************************/
cmdCreate('number_other',{
    action : 'setupField',
    opts:{
      'key' : 'ea:link:Other_Number',
      'label':key_labels['ea:link:Other_Number'],
      'show_help' : true,
      extend:true,
      extend_command: 'number_other_extend',
      extend_punctuation:'{{{v}}}\
{{#ea:link:Other_Canceled}}{{#first}}. - Canceled/Invalid: [{{/first}}{{v}}{{^last}}, {{/last}}{{#last}}]{{/last}} {{/ea:link:Other_Canceled}}\
{{#ea:link:Other_Url}} - {{{v}}}{{/ea:link:Other_Url}}',
    }
});
cmdCreate('number_other_extend',{
    action: 'extend',
    opts:{
      label:key_labels['ea:link:Other_Number'],
      primary:'number_other_simple',
      commands:['number_other_simple','other_url'],
    }
});
cmdCreate('number_other_simple',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:link:Other_Number',
      'label':key_labels['ea:link:Other_Number_Simple'],
    })
});
cmdCreate('other_canceled',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:link:Other_Canceled',
      'label':key_labels['ea:link:Other_Canceled'],
      'show_help' : true,
      'repeat_style' : 'ordered',
    })
});
cmdCreate('other_url',{
    action : 'setupField',
    opts : {
      key : 'ea:link:Other_Url',
      label : key_labels['ea:link:Other_Url'],
      type : 'url',
      show_help : true,
    }
});

/****************************************************/
/**** International Standard Name Identifier(ISNI) **/
/****************************************************/
cmdCreate('isni_number',{
    action : 'setupField',
    opts:{
      'key' : 'ea:link:ISNI_Number',
      'label':key_labels['ea:link:ISNI_Number'],
      'show_help' : true,
      extend:true,
      extend_command: 'isni_number_extend',
      extend_punctuation:'{{{v}}}\
{{#ea:link:ISNI_Canceled}}{{#first}}. - Canceled/Invalid: [{{/first}}{{v}}{{^last}}, {{/last}}{{#last}}]{{/last}} {{/ea:link:ISNI_Canceled}}\
{{#ea:link:ISNI_Url}} - {{{v}}}{{/ea:link:ISNI_Url}}',
    }
});
cmdCreate('isni_number_extend',{
    action: 'extend',
    opts:{
      label:key_labels['ea:link:ISNI_Number'],
      primary:'isni_number_simple',
      commands:['isni_number_simple','isni_url'],
    }
});

cmdCreate('isni_number_simple',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:link:ISNI_Number',
      'label':key_labels['ea:link:ISNI_Number2'],
    })
});

cmdCreate('isni_canceled',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:link:ISNI_Canceled',
      'label':key_labels['ea:link:ISNI_Canceled'],
      'show_help' : true,
      'repeat_style' : 'ordered',
    })
});

cmdCreate('isni_url',{
    action : 'setupField',
    opts : {
      key : 'ea:link:ISNI_Url',
      label : key_labels['ea:link:ISNI_Url'],
      type : 'url',
      show_help : true,
    }
});



/****************************************************/
/********************** GeoNames ********************/
/****************************************************/
cmdCreate('geonames',{
    action : 'setupField',
    opts:{
      'key' : 'ea:link:GeoNames',
      'label':key_labels['ea:link:GeoNames'],
      'show_help' : true,
      extend:true,
      extend_command: 'geonames_extend',
      extend_punctuation:'{{v}}\
{{#ea:link:GeoNames_Url}} - {{v}}{{/ea:link:GeoNames_Url}}',
    }
});
cmdCreate('geonames_extend',{
    action: 'extend',
    opts:{
      label:key_labels['ea:link:GeoNames'],
      primary:'geonames_simple',
      commands:['geonames_simple','geonames_url'],
    }
});

cmdCreate('geonames_simple',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:link:GeoNames',
      'label':key_labels['ea:link:GeoNames_Number'],
    })
});

cmdCreate('geonames_url',{
    action : 'setupField',
    opts : {
      key : 'ea:link:GeoNames_Url',
      label : key_labels['ea:link:GeoNames_Url'],
      type : 'url',
      show_help : true,
    }
});





/****************************************************/
/**** Virtual International Authority File (VIAF) **/
/****************************************************/

cmdCreate('viaf_number',{
    action : 'setupField',
    opts:{
      'key' : 'ea:link:VIAF_Number',
      'label':key_labels['ea:link:VIAF_Number'],
      'show_help' : true,
      extend:true,
      extend_command: 'viaf_number_extend',
      extend_punctuation:'{{{v}}}\
{{#ea:link:VIAF_Canceled}}{{#first}}. - Canceled/Invalid: [{{/first}}{{v}}{{^last}}, {{/last}}{{#last}}]{{/last}} {{/ea:link:VIAF_Canceled}}\
{{#ea:link:VIAF_Url}} - {{{v}}}{{/ea:link:VIAF_Url}}',
    }
});

cmdCreate('viaf_number_extend',{
    action: 'extend',
    opts:{
      label:key_labels['ea:link:VIAF_Number'],
      primary:'viaf_number_simple',
      commands:['viaf_number_simple','viaf_url'],
    }
});

cmdCreate('viaf_number_simple',{
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'ea:link:VIAF_Number',
      'label':key_labels['ea:link:VIAF_Number2'],
    })
});

cmdCreate('viaf_canceled',{
    action : 'setupField',
    opts : jQuery.extend({},opts_multy_text,{
      'key' : 'ea:link:VIAF_Canceled',
      'label':key_labels['ea:link:VIAF_Canceled'],
      'show_help' : true,
      'repeat_style' : 'ordered',
    })
});

cmdCreate('viaf_url',{
    action : 'setupField',
    opts : {
      key : 'ea:link:VIAF_Url',
      label : key_labels['ea:link:VIAF_Url'],
      type : 'url',
      show_help : true,
    }
});

