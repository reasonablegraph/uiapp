var commands = commands ? commands : {};

/**********************************************/
/*******  Header Obj_collection Basic ****************/
/**********************************************/
commands.header_sect_obj_collection_basic = {
    action:'addSection',
    opts:{
      skey:'title',
      label:key_labels['ea:auth:Obj_collection_Header_Basic'],
      level:2,
    }
};


/**********************************************/
/*****  Header Obj_collection Additional *************/
/**********************************************/
commands.header_sect_obj_collection_additional = {
    action:'addSection',
    opts:{
      skey:'title',
      label:key_labels['ea:auth:Obj_collection_Header_Additional'],
      level:2,
    }
};


/**********************************************/
/*****  Header Obj_collection Information ************/
/**********************************************/
commands.header_sect_obj_collection_information = {
    action:'addSection',
    opts:{
      skey:'sect_obj_collection_information',
      label:key_labels['ea:auth:Obj_collection_Header_Information'],
      level:2,
      status:'closed',
    }
};


/**********************************************/
/*******  Header Obj_collection Link *****************/
/**********************************************/
commands.header_sect_obj_collection_link = {
    action:'addSection',
    opts:{
      skey:'sect_obj_collection_link',
      label:key_labels['ea:auth:Obj_collection_Header_Link'],
      level:2,
      status:'closed',
    }
};


/****************************************************/
/** Header Obj_collection Classification / Cataloging ******/
/****************************************************/
commands.header_sect_obj_collection_cataloging = {
    action:'addSection',
    opts:{
      skey:'sect_obj_collection_cataloging',
      label:key_labels['ea:auth:Obj_collection_Header_Cataloging'],
      level:2,
      status:'closed',
    }
};


/**********************************************/
/******  Header Obj_collection Relations  ************/
/**********************************************/
commands.header_sect_obj_collection_relations= {
    action:'addSection',
    opts:{
      skey:'sect_obj_collection_relations',
      label:key_labels['ea:auth:Obj_collection_Header_Relations'],
      level:2,
      status:'closed',
    }
};


/**********************************************/
/******  Header Obj_collection Subject  **************/
/**********************************************/
commands.header_sect_obj_collection_subjects= {
    action:'addSection',
    opts:{
      skey:'title',
      label:key_labels['ea:auth:Obj_collection_Header_Subjects'],
      level:2,
    }
};


/****************************************************/
/********** Obj_collection Term  ***************************/
/****************************************************/
commands.obj_collection_term = {
    action : 'setupField',
    opts : jQuery.extend({},opts_text,{
      'key' : 'dc:title:',//'ea:auth:Obj_collection_Term',
      'label':key_labels['ea:auth:Obj_collection_Term'],
      'show_help' : true,
      'clear':'left',
    })
  };


/****************************************************/
/******* Relation Obj_collection Other Language ************/
/****************************************************/
commands.relation_obj_collection_other_language = {
    action : 'setupField',
    opts : jQuery.extend({},commands.relation_person_other_language.opts,{
      'label':key_labels['ea:auth:Obj_collection_Other_Language'],
    })
  };






