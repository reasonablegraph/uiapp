console.log("re1");

rg.createItem( OT_PERSON, {
	'title':'Doe, John',
	'context_key':'PERSON1'
});


rg.createItem( OT_MANIFESTATION, {
	'title':'Νεκρονομικον',
	'context_key':'MANIFESTATION1',
	'publication':{
		'year':2000,
		'year_comment':'2000 (MM)',
	}
});

rg.createItem(OT_EXPRESSION, {
	'title':'μεταφραση του Νεκρονομικον',
	'context_key':'EXPRESSION1'

});


rg.createItem(OT_WORK, {
	'create_method':'item',
	'title':'Necronomicon1',
	'context_key':'WORK1',
	'expression':'EXPRESSION1',
	'manifestation':['MANIFESTATION1'],
	'relations':[
		{element:"ea:work:authorWork", contextKey:"PERSON1"}
	],
});

rg.createItem(OT_WORK, {
	'create_method':'item',
	'title':'Necronomicon2',
	'context_key':'WORK2',
	'relations':[
		{element:"ea:work:authorWork", contextKey:"PERSON1"}
	],
});

rg.createItem(OT_WORK, {
	'create_method':'item',
	'title':'Necronomicon3',
	'context_key':'WORK3',
	'relations':[
		{element:"ea:work:authorWork", contextKey:"PERSON1"}
	],
});

rg.createItem(OT_WORK, {
	'create_method':'item',
	'title':'Necronomicon4',
	'context_key':'WORK4',
	'relations':[
		{element:"ea:work:authorWork", contextKey:"PERSON1"}
	],
});

rg.createItem(OT_WORK, {
	'create_method':'item',
	'title':'Necronomicon5',
	'context_key':'WORK5',
	'relations':[
		{element:"ea:work:authorWork", contextKey:"PERSON1"}
	],
});


