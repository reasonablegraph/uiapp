//#PATH:/prepo/edit_step1?br=2&rd=auth-work

console.log("T2: WORK EXPRESION MANIFESTATION METHOD1");


//console.log("WORK-EXPRESION-MANIFESTATION");
jobs.push(function(context){
	console.log("EXPRESSION");
	var fa = new FieldModelAccessor({});
	var tmp;
	tmp = fa.createFieldModel('dc:title:', 'expression#1');
	tmp = fa.createFieldModel('ea:obj-type:', 'auth-expression');
	tmp = fa.createFieldModel('ea:status:', 'finish');
	//consoleDump(fa);
	return fa.remoteCreateItem(createItemOptions).then(function(data){
		//console.log(JSON.stringify(data));
		context['EXPRESSION'] = data;
	});
});



jobs.push(function(context){
	console.log("MANIF");
	var expression = context['EXPRESSION'];
	var fa = new FieldModelAccessor({});
	var tmp;
	tmp = fa.createFieldModel('dc:title:', 'manif#1');
	tmp = fa.createFieldModel('ea:obj-type:', 'auth-manifestation');
	tmp = fa.createFieldModel('ea:status:', 'finish');
	tmp = fa.createFieldModel('ea:work:', expression['label']);
	tmp.refItem(expression['item_id']);
	//consoleDump(fa);
	return fa.remoteCreateItem(createItemOptions).then(function(data){
		//console.log(JSON.stringify(data));
		context['MANIFESTATION'] = data;
	});
});



jobs.push(function(context){
	console.log("WORK");
	var expression = context['EXPRESSION'];
	var fa = new FieldModelAccessor({});
	var tmp;
	tmp = fa.createFieldModel('dc:title:', 'work#1');
	tmp = fa.createFieldModel('ea:obj-type:', 'auth-work');
	tmp = fa.createFieldModel('ea:status:', 'finish');
	tmp = fa.createFieldModel('ea:expression:', expression['label']);
	tmp.refItem(expression['item_id']);
	//consoleDump(fa);
	return fa.remoteCreateItem(createItemOptions).then(function(data){
		//console.log(JSON.stringify(data));
		context['WORK'] = data;
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
// 	consoleDump(fa);
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




// var job2 = function(context){
// 	console.log("WORK2");
// 	console.log(JSON.stringify(context['data']));
// 	var fa = new FieldModelAccessor({});
// 	var tmp;
// 	tmp = fa.createFieldModel('dc:title:', 'work#2');
// 	tmp = fa.createFieldModel('ea:obj-type:', 'auth-work');
// 	tmp = fa.createFieldModel('ea:status:', 'finish');
// 	return fa.remoteCreateItem(createItemOptions).then(function(data){
// 		context['data'] = data;
// 	});
// };

addStatus('finish');

