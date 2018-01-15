console.log("edit work 1");

// console.log('CONTEXT:');
// console.log(JSON.stringify(context));
var tmp;


	rg.createItem(OT_CONCEPT, {
		'title':'CONCEPT31',
		'keys':{'main':'CONCEPT31'}
	});

	rg.createItem(OT_CONCEPT, {
		'title':'CONCEPT32',
		'keys':{'main':'CONCEPT32'}
	});


 rg.addJob(function(context) {
 	tmp = fc.getFieldModelOrCreate('ea:auth:NotePublic');
 	tmp.value('PUBLIC NOTE ##1');

 });

 rg.addAttributes({'ea:auth:NotePublic':'PUBLIC NOTE ##2'});


 rg.addSubject('CHAIN4',['CONCEPT31', 'CONCEPT32']);

//consoleDumpFMA(fc);



rg.formSubmit();


