
rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT11',
	'context_key':'CONCEPT11'
});
rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT22',
	'context_key':'CONCEPT12'
});

rg.createItem(OT_CHAIN, {
	'create_method':'item',
	'title':'chain',
	'context_key':'CHAIN1',
	'subjects':{
		'CHAIN2':['CONCEPT11','CONCEPT12'],
	},

	edit_fn:function(fc,context){
		//consoleRed("EDIT FN");
	}

});

// rg.addJob(function(context) {
// });






