console.log("ci: t1");
//WORK EXPRESION MANIF  DI SUBJECTS PUBLISHER AUTHOR

/* @var FormControler fc */


rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT21',
	'context_key':'CONCEPT21'
});
rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT22',
	'context_key':'CONCEPT22'
});




rg.createItem(OT_WORK, {
	'create_method':'item',
	'title':'Necronomicon',
	'context_key':'WORK1',

	'subjects':{
		'CHAIN2':['CONCEPT21','CONCEPT22'],
	},

	edit_fn:function(fc,context){
		//consoleRed("EDIT FN");
	}

});


rg.createItem(OT_WORK, {
	'create_method':'item',
	'title':'Voynich manuscript',
	'context_key':'WORK2',
	'subjects':{
		'CHAIN4':['CONCEPT22'],
	},
});



// rg.addJob(function(context) {
// });






