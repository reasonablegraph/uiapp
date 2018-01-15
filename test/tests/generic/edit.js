
/* @var FormControler fc */


var titleM = fc.getFirstFieldModelByKey('dc:title:');

var new_title=contextGet('EDIT_NEW_TITLE');
if (!new_title) {
	var title_base = titleM.value().split('‡')[0];
	var nowms = (new Date).getTime();
	new_title = title_base + '‡' + nowms;
	contextSet('EDIT_NEW_TITLE',null);
}
titleM.value(new_title);

rg.addAttributes({'ea:auth:NotePublic':'PUBLIC NOTE ##1'});

rg.formSubmit();


