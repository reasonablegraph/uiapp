console.log("re1");

rg.createItem( OT_PERSON, {
	'title':'Doe, John',
	'context_key':'PERSON1'
});

rg.createItem(OT_WORK, {
	'create_method':'item',
	'title':'Necronomicon1',
	'context_key':'WORK1',
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
