console.log("WORK ADD EXISTING VALUES");

c=0;



rg.createItem( OT_MANIFESTATION, {
	'title':'The King in Yellow',
	'context_key':'MANIFESTATION2',
	'publication':{
		'publisher':'PUBLISHER1',
		'pubplace':'PLACE1',
		'year':2001,
		'year_comment':'2000 (MMI)',
	}
});


rg.createItem(OT_WORK, {
	'create_method':'item',
	'title':'The King in Yellow',
	'context_key':'WORK2',

	'relations':[
		{element:"ea:work:authorWork", contextKey:"PERSON1"}
	],

	'expression':'EXPRESSION1',
	'manifestation':['MANIFESTATION2'],
	'subjects':{
		'CHAIN5':['CONCEPT21'],
	}

});


