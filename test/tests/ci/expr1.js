console.log("EDIT-EXPRESSION1");
//ADD SUBJECT TO ITEM

/* @var FormControler fc */
var tmp;

fc.getFirstFieldModelByKey('dc:title:').value('Necronomicon METAFRASI');
fc.createFieldModel('ea:test:key1','EXPRESSION1');

var manif = fc.getFirstFieldModelByKey('ea:manifestation:tmp');
manif.value("Νεκρονομικον");
mId = manif.id();
fc.createFieldModel('ea:test:key1','MANIFESTATION1',mId);

fc.getFirstFieldModel('ea:manif:Type',mId).value('BOOK/M');
fc.getFirstFieldModel('ea:manif:Title_Remainder',mId).value('unexisted book');
fc.getFirstFieldModel('ea:status:',mId).value('finish');
fc.getFirstFieldModel('ea:obj-type:',mId).value('auth-manifestation');
fc.getFirstFieldModel('ea:label:',mId).value('empty');

var year_comment = "MM";
var pub1 = fc.getFirstFieldModel('ea:manif:Publication',mId);
pub1.value(year_comment);
var pub1Id = pub1.id();
var year_json = {"y":2000,"d":null,"m":null,"t":year_comment,"prsd":"p","z":"date"};
tpm = fc.createFieldModel('ea:manif:Publication_Date', year_json,pub1Id);
// 	tmp.refItem();
// 	tmp.data({});

// rg.addAttributes({
// 	'ea:auth:NotePublic':['PUBLIC NOTE ##1','PUBLIC NOTE ##2']
// });

//consoleDumpFMA(fc);


rg.formSubmit();



