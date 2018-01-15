console.log("WAEMP: WORK AUTHOR  EXPRESION MANIFESTATION PUBLISHER");




rg.createItem( OT_PERSON, {
 	'title':'Doe, John',
	'context_key':'PERSON1'
});

rg.createItem( OT_ORGANIZATION, {
	'title':'Publisher ACME company',
	'context_key':'PUBLISHER1'
});

rg.createItem( OT_PLACE, {
	'title':'SIN CITY',
	'context_key':'PLACE1'
});

rg.createItem( OT_MANIFESTATION, {
	'title':'Νεκρονομικον',
	'context_key':'MANIFESTATION1',
	'publication':{
	  'publisher':'PUBLISHER1',
	  'pubplace':'PLACE1',
		'year':2000,
		'year_comment':'2000 (MM)',
	}
});


//SINDESI TOU ITEM STO MANIFESTATION
rg.createItem(OT_DIGITAL_ITEM, {
	'create_method':'item',
	'title':'ITEM_1',
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


rg.createItem(OT_EXPRESSION, {
	'title':'μεταφραση του Νεκρονομικον',
	'context_key':'EXPRESSION1'
});


rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT1',
	'context_key':'CONCEPT1',
 });
rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT21',
	'context_key':'CONCEPT21'
});
rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT22',
	'context_key':'CONCEPT22'
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
	'subjects':{
		'CHAIN1':['CONCEPT1'],
		'CHAIN2':['CONCEPT21','CONCEPT22'],
	},

	edit_fn:function(fc,context){
		//consoleRed("EDIT FN");
	}

});


rg.addJob(function(context) {
	//if (contextGet('ADD_EDIT_URLS')) {
	// 	var v = context['MANIFESTATION1'];
	// 	context['MANIFESTATION1_EDIT_URLPATH'] = '/prepo/edit_step1?i=' + v['item_id'];
	// 	var work = context['WORK1'];
	// 	context['WORK1_EDIT_URLPATH'] = '/prepo/edit_step1?i=' + work['item_id'];
	//}

});






