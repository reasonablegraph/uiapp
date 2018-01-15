console.log("publisher1-step1");

//
//rg.createItem(OT_DIGITAL_ITEM, {
//	'create_method':'item',
//	'title':'ITEM_1',
//	'context_key':'ITEM1',
//	attributes:[
//		{element:"ea:item:sublocation", value:"0"},
//		{element:"ea:item:type", value:"pdf"},
//		{element:"ea:item:location", value:"location1"},
//		{element:"ea:item:accessRestrictions", value:"restrictions info"},
//		//{element:"ea:item:reproduction", value:"itemReproductionTable_a"},
//		{element:"ea:edoc:Pages", value:"1"},
//		{element:"ea:edoc:Title", value:"This is a test PDF file"},
//	]
//});


rg.createItem( OT_ORGANIZATION, {
	'title':'Publisher ACME company',
	'context_key':'PUBLISHER1'
});

rg.createItem( OT_PLACE, {
	'title':'SIN CITY',
	'context_key':'PLACE1'
});

rg.createItem( OT_MANIFESTATION, {
	'create_method':'item',
	'title':'Νεκρονομικον',
	'context_key':'MANIFESTATION1',
	'publication':{
	  'publisher':'PUBLISHER1',
	  'pubplace':'PLACE1',
		'year':2000,
		'year_comment':'2000 (MM)',
	}
});
