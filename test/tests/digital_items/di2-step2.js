/* @var FormControler fc */

//EDIT MANIF
//SINDESI TOU ITEM MESA APO TI FORM TOY MANIF (SEARCH ITEM)
rg.addJob(function(){
	addRelation(fc,'ea:manif:digital-item', 'ITEM1');
	addRelation(fc,'ea:manif:digital-item', 'ITEM2');

	// addRelation(fc,'reverse:ea:artifact-of:', 'ITEM1');
	// addRelation(fc,'reverse:ea:artifact-of:', 'ITEM2');

	consoleDumpFMA(fc);
});


rg.formSubmit();