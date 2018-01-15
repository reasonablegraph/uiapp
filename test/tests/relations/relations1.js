console.log("WAEMP: WORK AUTHOR  EXPRESION MANIFESTATION PUBLISHER");





rg.createItem( OT_PERSON, {
	'title':'Doe, Jane 2',
	'context_key':'PERSON12',
});

rg.createItem( OT_PERSON, {
	'title':'Doe, Jane 1',
	'context_key':'PERSON11',
	'relations':[
		{element:"ea:relation:PersonOtherParent", contextKey:"PERSON12"}
	]

});

//GONIOS
rg.createItem( OT_PERSON, {
	'title':'Doe, Jane',
	'context_key':'PERSON1',
	'relations':[
		{element:"ea:relation:PersonOtherParent", contextKey:"PERSON11"}
	]

});


//PEDI1
rg.createItem( OT_PERSON, {
	'title':'Doe, Janie',
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
	'title':'Doe, jeniffer',
	'context_key':'PERSON4',
	'relations':[
		{element:"ea:relation:PersonOtherSibling", contextKey:"PERSON2"}
	]
});




