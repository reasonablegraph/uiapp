
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



rg.createItem( OT_PERSON, {
	'title':'Doe, John',
	'context_key':'PERSON1'
});
rg.createItem( OT_PERSON, {
	'title':'PERSON2',
	'context_key':'PERSON2'
});


rg.createItem( OT_MANIFESTATION, {
	'title':'MANIFESTATION2',
	'context_key':'MANIFESTATION2',
	'relations':[
		{element:"ea:manif:editorVersion", contextKey:"PERSON1"},
		{element:"ea:manif:editorVersion", contextKey:"PERSON2"}
	],
});

// rg.createItem(OT_DIGITAL_ITEM, {
// 	'create_method':'item',
// 	'title':'ITEM_3.pdf',
// 	'context_key':'ITEM3',
// 	attributes:[
// 		{element:"ea:item:sublocation", value:"0"},
// 		{element:"ea:item:type", value:"pdf"},
// 		{element:"ea:item:location", value:"location1"},
// 		{element:"ea:item:accessRestrictions", value:"restrictions info"},
// 		//{element:"ea:item:reproduction", value:"itemReproductionTable_a"},
// 		{element:"ea:edoc:Pages", value:"1"},
// 		{element:"ea:edoc:Title", value:"This is a test PDF file"},
// 	],
// 	'relations':[
// 		{element:"ea:artifact-of:", contextKey:"MANIFESTATION2"}
// 	],
// });
//
// rg.createItem( OT_PERSON, {
// 	'title':'PERSON3',
// 	'context_key':'PERSON3'
// });
//
// rg.createItem(OT_WORK, {
// 	'create_method':'item',
// 	'title':'WORK2',
// 	'context_key':'WORK2',
// 	'relations':[
// 		{element:"ea:work:authorWork", contextKey:"PERSON3"}
// 	],
// 	'manifestation':['MANIFESTATION2'],
// 	edit_fn:function(fc,context){
// 		//consoleRed("EDIT FN");
// 	}
// });




rg.createItem(OT_EXPRESSION, {
	'title':'μεταφραση του Νεκρονομικον',
	'context_key':'EXPRESSION1'
});




rg.createItem(OT_WORK, {
	'create_method':'item',
	'title':'Necronomicon',
	'context_key':'WORK1',

	'relations':[
		{element:"ea:work:authorWork", contextKey:"PERSON1"}
	],

	'expression':'EXPRESSION1',
	'manifestation':['MANIFESTATION1'],

	edit_fn:function(fc,context){
		//consoleRed("EDIT FN");
	}

});



rg.createItem(OT_DIGITAL_ITEM, {
	'create_method':'item',
	'title':'ITEM_2.pdf',
	'context_key':'ITEM2',
	attributes:[
		{element:"ea:item:sublocation", value:"0"},
		{element:"ea:item:type", value:"pdf"},
		{element:"ea:item:location", value:"location1"},
		{element:"ea:item:accessRestrictions", value:"restrictions info"},
		{element:"ea:edoc:Pages", value:"1"},
		{element:"ea:edoc:Title", value:"This is a test PDF file"},
	],
	'relations':[
		{element:"ea:artifact-of:", contextKey:"MANIFESTATION1"}
	],

});

