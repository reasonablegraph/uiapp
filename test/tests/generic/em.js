
/* @var FormControler fc */


rg.createItem( OT_MANIFESTATION, {
	'create_method':'item',
	'title':'Manifestation1',
	'context_key':'MANIFESTATION1',
});


rg.createItem(OT_EXPRESSION, {
	'title':'μεταφραση του Manifestation1',
	'context_key':'EXPRESSION1',
	'manifestation':['MANIFESTATION1'],
});



