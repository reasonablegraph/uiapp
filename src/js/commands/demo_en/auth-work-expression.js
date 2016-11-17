var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'auth-work-expression.js');


//cmdCreate('header_work_expression_sect =
cmdCreate('header_work_expression_sect',
{
  "action": "addSectionExt",
  "opts": {
  	"class":'sect_expres_level_1',
    "skey": "header_work_expression_sect",
    "add_empty": true,
    "skip_on_empty": false,
  	//@@@ 'key': 'ea:expressionOf:tmp',
    'key' : 'ea:expression:tmp',
  	//'key' : 'reverse:ea:expressionOf:',
    "set_container": true,
    "command": 'expression_work_extend',
    "label": key_labels['Add_Expression'],
    "level": 1,
    "status": "closed"
  }
});

/**************************************************/
/** Extented header work expression sect **********/
/**************************************************/
cmdCreate('header_work_expression_sect_extented',{
  action: "addSectionExt",
	opts : jQuery.extend({},commands.header_work_expression_sect.opts,{
	  "skey": "header_work_expression_sec_extented",
	})
});


//cmdCreate('expression_work_extend = {
cmdCreate('expression_work_extend',{
  "action": "extend",
  "opts": {
    "label": "expression",
    "primary": "expression_work_extend_primary",
    "commands_primary_is_ref": ['expression_work_extend_primary'],
    "commands": f_auth_expression_work
  }
});

cmdCreate('expression_work_extend_primary' , {
  "action": "setupField",
  "opts": {
  	'create_subitem':true,
  	"type": "text",
    "show_help": true,
    "key": "dc:title:",
    "label": key_labels['ea:expres:title'],
    "clear": "left"
  }
});

cmdCreate('expression_work_extend_ot',  {
  "action": "setupField",
  "opts": {
    "type": "hidden",
    "key": "ea:obj-type:",
    "value": "auth-expression"
  }
});