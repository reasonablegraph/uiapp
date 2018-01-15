console.log("EDIT-EDIT1");
//ADD SUBJECT TO ITEM


/* @var FormControler fc */

var titleM = fc.getFirstFieldModelByKey('dc:title:');
titleM.value('Dalaran');




rg.addAttributes({
	'ea:auth:NotePublic':['PUBLIC NOTE ##1','PUBLIC NOTE ##2']
});


//consoleDumpFMA(fc);


rg.formSubmit();



