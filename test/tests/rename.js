

console.log("rename");

var rename_value="RENAMED";

if (contextHas('RENAME_VALUE')) {
	rename_value=contextGet('RENAME_VALUE');
}

//consoleDumpFMA(fc);

var m1 = fc.getFieldModelOrCreate('dc:title:');
m1.value(rename_value);


rg.formSubmit();



