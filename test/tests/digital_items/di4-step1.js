/* @var FormControler fc */

//SINDESI TOU ITEM MESA APO TI FORM TOY MANIF (CREATE ITEM)
rg.createItem(OT_DIGITAL_ITEM, {
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
	],

});


rg.addJob(function(){
	setAttribute(fc,'dc:title:','Νεκρονομικον');
	setAttribute(fc,'ea:test:key1',	'MANIFESTATION1');
	addRelation(fc,'ea:manif:digital-item', 'ITEM1');
});

rg.formSubmit();