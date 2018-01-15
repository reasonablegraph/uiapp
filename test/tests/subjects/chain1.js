
rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT11',
	'context_key':'CONCEPT11'
});
rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT22',
	'context_key':'CONCEPT12'
});

rg.createItem(OT_WORK, {
	'create_method':'item',
	'title':'Necronomicon',
	'context_key':'WORK1',
	'subjects':{
		'CHAIN1':['CONCEPT11','CONCEPT12'],
	},

	edit_fn:function(fc,context){
		//consoleRed("EDIT FN");
	}

});

// rg.addJob(function(context) {
// });






