console.log("EDIT-EDIT1");


rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT21',
	'keys':{'main':'CONCEPT21'}
});

rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT22',
	'keys':{'main':'CONCEPT22'}
});

rg.addAttributes({
	'ea:auth:NotePublic':['PUBLIC NOTE ##1','PUBLIC NOTE ##2']
});


rg.addSubject('CHAIN2',['CONCEPT21', 'CONCEPT22']);

//consoleDumpFMA(fc);


rg.formSubmit();



