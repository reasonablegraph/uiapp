console.log("re1");

rg.createItem( OT_PERSON, {
	'title':'Doe, John',
	'context_key':'PERSON1'
});

rg.createItem(OT_WORK, {
	'create_method':'item',
	'title':'Necronomicon',
	'context_key':'WORK1',

	'relations':[
		{element:"ea:work:authorWork", contextKey:"PERSON1"}
	],

	edit_fn:function(fc,context){
		//consoleRed("EDIT FN");
	}

});
