
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

rg.createItem(OT_EXPRESSION, {
	'title':'μεταφραση του Νεκρονομικον',
	'context_key':'EXPRESSION1',
	'relations':[
	],
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
