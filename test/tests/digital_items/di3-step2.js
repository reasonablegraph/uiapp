/* @var FormControler fc */

addRelation(fc,'ea:artifact-of:', 'MANIFESTATION1');

setAttribute(fc,'ea:test:key1',	'ITEM1');

setAttribute(fc,"dc:title:","ITEM1.pdf");
setAttribute(fc,"ea:item:type","pdf");
setAttribute(fc,"ea:item:location","location1");
setAttribute(fc,"ea:item:sublocation","0");
setAttribute(fc,"ea:item:accessRestrictions","restrictions info");
setAttribute(fc,"ea:edoc:Pages","1");
setAttribute(fc,"ea:edoc:Title","This is a test PDF file");

//consoleDumpFMA(fc);

rg.formSubmit();