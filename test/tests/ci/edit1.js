console.log("EDIT-EDIT1");
//ADD SUBJECT TO ITEM

/* @var FormControler fc */

var titleM = fc.getFirstFieldModelByKey('dc:title:');
titleM.value('Necronomicon extended');



rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT31',
	'keys':{'main':'CONCEPT31'}
});

rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT32',
	'keys':{'main':'CONCEPT32'}
});

rg.addAttributes({
	'ea:auth:NotePublic':['PUBLIC NOTE ##1','PUBLIC NOTE ##2']
});


rg.addSubject('CHAIN3',['CONCEPT31', 'CONCEPT32']);

//consoleDumpFMA(fc);


rg.formSubmit();



