

rg.createItem( OT_PERSON, {
	'title':'Doe,john',
	'context_key':'PERSON1',
});

rg.createItem( OT_PERSON, {
	'title':'Doe, Jane',
	'context_key':'PERSON2',
	'relations':[
		{element:"ea:relation:PersonOtherParent", contextKey:"PERSON1"}
	]
});


