//#PATH:/prepo/edit_step1?br=2&rd=auth-work

console.log("T3: WORK MANIFESTATION METHOD2");


jobs.push(function(context){
	console.log("MANIF");
	var fa = new FieldModelAccessor({});
	var tmp;
	tmp = fa.createFieldModel('dc:title:', 'manif#1');
	tmp = fa.createFieldModel('ea:obj-type:', 'auth-manifestation');
	tmp = fa.createFieldModel('ea:status:', 'finish');
	//consoleDumpFMA(fa);
	return fa.remoteCreateItem(createItemOptions).then(function(data){
		//console.log(JSON.stringify(data));
		context['MANIFESTATION'] = data;
	});
});



jobs.push(function(context){
	console.log("WORK");
	var manif = context['MANIFESTATION'];
	var fa = new FieldModelAccessor({});
	var tmp;
	tmp = fa.createFieldModel('dc:title:', 'work#1');
	tmp = fa.createFieldModel('ea:obj-type:', 'auth-work');
	tmp = fa.createFieldModel('ea:status:', 'finish');
	tmp = fa.createFieldModel('ea:manifestation:tmp',  manif['label']);
	tmp.refItem(manif['item_id']);
	consoleDumpFMA(fa);
	return fa.remoteCreateItem(createItemOptions).then(function(data){
		//console.log(JSON.stringify(data));
		context['data'] = data;
	});
});

//
// //console.log("WORK-EXPRESION-MANIFESTATION");
// jobs.push(function(context){
// 	console.log("WORK");
// 	var fa = new FieldModelAccessor({});
// 	var tmp;
// 	tmp = fa.createFieldModel('dc:title:', 'work#1');
// 	tmp = fa.createFieldModel('ea:obj-type:', 'auth-work');
// 	tmp = fa.createFieldModel('ea:status:', 'finish');
// 	consoleDumpFMA(fa);
// 	// var exp_root = fa.createFieldModel('ea:expression:tmp', 'finish');
// 	// exp_root.data({"sub-root":true,"rel_type":"locked","create_subitem":true});
// 	// exp_id = exp_root.id();
// 	// console.log("EXPRESSION ID:",exp_id);
// 	// tmp = fa.createFieldModel('dc:title:', 'expresion#1',exp_id);
// 	// tmp = fa.createFieldModel('ea:obj-type:', 'auth-expression',exp_id);
// 	// tmp = fa.createFieldModel('ea:status:', 'finish',exp_id);
// 	return fa.remoteCreateItem(createItemOptions).then(function(data){
// 		//console.log(JSON.stringify(data));
// 		context['data'] = data;
// 	});
// });
//

jobs.push(function(context) {
	context['t3_status'] = ['finish'];
});
