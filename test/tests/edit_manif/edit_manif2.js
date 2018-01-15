console.log("edit manif1");
// console.log('CONTEXT:');
// console.log(JSON.stringify(context));


var tmp;
//consoleDumpFMA(fc);


rg.createItem(OT_CONCEPT, {
	'title':'CONCEPTS1',
	'keys':{'main':'CONCEPTS1'}
});

// rg.addJob(function(context) {
// var subject_keys=['CONCEPTS1'];  addSubject(fc, 'CHAINM1', subject_keys, context);
// });
rg.addSubject('CHAINM1',['CONCEPTS1']);

rg.formSubmit();



