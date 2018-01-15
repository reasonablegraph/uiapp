console.log("remove relations");




// var m1 = fc.getFieldModelOrCreate('dc:title:');
// m1.value('mousaka');

var rels = fc.getFieldModels('ea:relation:PersonOtherSibling');
for (var id in rels){
		var m = rels[id];
		fc.removeModel(m.id());
}

rg.formSubmit();



