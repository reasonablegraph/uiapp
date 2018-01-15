

rg.createItem( OT_PERSON, {
	'title':'Doe, barney',
	'context_key':'PERSON12',
});

rg.createItem( OT_PERSON, {
	'title':'Doe, barbara',
	'context_key':'PERSON11',
	'relations':[
		{element:"ea:relation:PersonOtherParent", contextKey:"PERSON12"}
	]

});

//GONIOS
rg.createItem( OT_PERSON, {
	'title':'Doe, betsy',
	'context_key':'PERSON1',
	'relations':[
		{element:"ea:relation:PersonOtherParent", contextKey:"PERSON11"}
	]

});


//PEDI1
rg.createItem( OT_PERSON, {
	'title':'Doe, Justina',
	'context_key':'PERSON2',
	'relations':[
		{element:"ea:relation:PersonOtherParent", contextKey:"PERSON1"}
	]
});


//PEDI2
rg.createItem( OT_PERSON, {
	'title':'Doe, Johnny',
	'context_key':'PERSON3',
	'relations':[
		{element:"ea:relation:PersonOtherSibling", contextKey:"PERSON2"}
	]
});


//PEDI3
rg.createItem( OT_PERSON, {
	'title':'Doe, Jeniffer',
	'context_key':'PERSON4',
	'relations':[
		{element:"ea:relation:PersonOtherSibling", contextKey:"PERSON2"}
	]
});


//PEDI4
rg.createItem( OT_PERSON, {
	'title':'Doe, Jaida',
	'context_key':'PERSON5',
	'relations':[
		{element:"ea:relation:PersonOtherSibling", contextKey:"PERSON2"}
	]
});

