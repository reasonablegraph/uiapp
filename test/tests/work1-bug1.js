console.log("work1 bug");


rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT21',
	'context_key':'CONCEPT21'
});
rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT22',
	'context_key':'CONCEPT22'
});



rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT31',
	'keys':{'main':'CONCEPT31'}
});

rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT32',
	'keys':{'main':'CONCEPT32'}
});


rg.createItem(OT_WORK, {
	'create_method':'item',
	'title':'Necronomicon',
	'context_key':'WORK1',

	'subjects':{
		'CHAIN2':['CONCEPT21','CONCEPT22'],
		'CHAIN3':['CONCEPT31','CONCEPT32'],
	}

});


rg.addJob(function(context) {
	//if (contextGet('ADD_EDIT_URLS')) {
		var work = context['WORK1'];
		context['WORK1_EDIT_URLPATH'] = '/prepo/edit_step1?i=' + work['item_id'];
	//}
});



