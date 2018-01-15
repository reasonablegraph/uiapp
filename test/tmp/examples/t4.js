//#PATH:/prepo/edit_step1?br=2&rd=auth-work

console.log("T4: WORK EXPRESION MANIFESTATION (AUTHOR PUBLISHER) METHOD2");




jobs.push(function(context){
	console.log("PERSON1");
	var fa = new FieldModelAccessor({});
	var tmp;

	tmp = fa.createFieldModel('dc:title:', 'Kostas Maistrelis');
	tmp = fa.createFieldModel('ea:obj-type:', 'auth-person');
	tmp = fa.createFieldModel('ea:status:', 'finish');
	tmp = fa.createFieldModel('ea:auth:Person_DatesAssociated', '2000');

	//consoleDumpFMA(fa);
	return fa.remoteCreateItem(createItemOptions).then(function(data){
		console.log(JSON.stringify(data));
		context['PERSON1'] = data;
	});
});



jobs.push(function(context){
	console.log("ORGANIZATION1");
	var fa = new FieldModelAccessor({});
	var tmp;

	tmp = fa.createFieldModel('dc:title:', 'PUBLISHER1');
	tmp = fa.createFieldModel('ea:obj-type:', 'auth-organization');
	tmp = fa.createFieldModel('ea:status:', 'finish');

	//consoleDumpFMA(fa);
	return fa.remoteCreateItem(createItemOptions).then(function(data){
		console.log(JSON.stringify(data));
		context['ORGANIZATION1'] = data;
	});
});



jobs.push(function(context){
	console.log("MANIF");

	var publisher = context['ORGANIZATION1'];
	var fa = new FieldModelAccessor({});
	var tmp;
	tmp = fa.createFieldModel('dc:title:', 'manif#1');
	tmp = fa.createFieldModel('ea:obj-type:', 'auth-manifestation');
	tmp = fa.createFieldModel('ea:status:', 'finish');


  var publication_root = fa.createFieldModel('ea:manif:Publication', publisher['label']);
	var publication_id  = publication_root.id();
	tmp = fa.createFieldModel('ea:manif:Publisher_Name', publisher['label'],publication_id);
	tmp.refItem(publisher['item_id'])

	consoleDumpFMA(fa);
	return fa.remoteCreateItem(createItemOptions).then(function(data){
		console.log(JSON.stringify(data));
		context['MANIFESTATION'] = data;
	});
});


jobs.push(function(context){
	console.log("EXPRESSION");
	var fa = new FieldModelAccessor({});
	var tmp;
	tmp = fa.createFieldModel('dc:title:', 'expression#1');
	tmp = fa.createFieldModel('ea:obj-type:', 'auth-expression');
	tmp = fa.createFieldModel('ea:status:', 'finish');
	consoleDumpFMA(fa);
	return fa.remoteCreateItem(createItemOptions).then(function(data){
		console.log(JSON.stringify(data));
		context['EXPRESSION'] = data;
	});
});



jobs.push(function(context){
	console.log("WORK");
	var person1 = context['PERSON1'];
	var manif = context['MANIFESTATION'];
	var expression = context['EXPRESSION'];
	var fa = new FieldModelAccessor({});
	var tmp;
	tmp = fa.createFieldModel('dc:title:', 'work#1');
	tmp = fa.createFieldModel('ea:obj-type:', 'auth-work');
	tmp = fa.createFieldModel('ea:status:', 'finish');

	tmp = fa.createFieldModel('ea:work:authorWork',person1['label']);
	tmp.refItem(person1['item_id']);

	tmp = fa.createFieldModel('ea:manifestation:tmp',  manif['label']);
	tmp.refItem(manif['item_id']);

	tmp = fa.createFieldModel('ea:expression:tmp', expression['label']);
	tmp.refItem(expression['item_id']);

	consoleDumpFMA(fa);
	return fa.remoteCreateItem(createItemOptions).then(function(data){
		console.log(JSON.stringify(data));
		context['data'] = data;
	});
});


addStatus('finish');