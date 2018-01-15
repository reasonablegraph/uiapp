rg.createItem( OT_PERSON, {
	'title':'Translator, John',
	'context_key':'PERSON1'
});


rg.createItem(OT_EXPRESSION, {
	'title':'μεταφραση του Νεκρονομικον',
	'context_key':'EXPRESSION1',
	'relations':[
		{element:"ea:expres:translator", contextKey:"PERSON1"}
	],

});


rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT1',
	'context_key':'CONCEPT1'
});
rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT2',
	'context_key':'CONCEPT2'
});


rg.createItem(OT_WORK, {
	'create_method': 'item',
	'title': 'Necronomicon',
	'context_key': 'WORK1',

	'relations': [],

	'expression': 'EXPRESSION1',
	//'manifestation':['MANIFESTATION1'],
	'subjects': {
		'CHAIN1': ['CONCEPT1', 'CONCEPT2'],
	}
});

