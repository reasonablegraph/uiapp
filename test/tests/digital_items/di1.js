
/* @var FormControler fc */

rg.createItem( OT_MANIFESTATION, {
	'create_method':'item',
	'title':'Νεκρονομικον',
	'context_key':'MANIFESTATION1',
});


//SINDESI TOU ITEM STO MANIFESTATION MESO SPOOL
rg.createItem(OT_DIGITAL_ITEM, {
	'create_method':'item',
	'title':'ITEM_1.pdf',
	'context_key':'ITEM1',
	attributes:[
		{element:"ea:item:sublocation", value:"0"},
		{element:"ea:item:type", value:"pdf"},
		{element:"ea:item:location", value:"location1"},
		{element:"ea:item:accessRestrictions", value:"restrictions info"},
		//{element:"ea:item:reproduction", value:"itemReproductionTable_a"},
		{element:"ea:edoc:Pages", value:"1"},
		{element:"ea:edoc:Title", value:"This is a test PDF file"},
	],
	'relations':[
		{element:"ea:artifact-of:", contextKey:"MANIFESTATION1"}
	],

});