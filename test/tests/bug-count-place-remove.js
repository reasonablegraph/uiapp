console.log("bug-count-place-remove");

/* @var FormControler fc */

var model = fc.getFirstFieldModelByKey('ea:subj:');
//consoleRed(JSON.stringify(model.value()));

fc.removeModel(model.id());
rg.formSubmit();





