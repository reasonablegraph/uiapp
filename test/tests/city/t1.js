console.log("CITY T1");


rg.createItem( OT_ORGANIZATION, {
	'title':'Publisher ACME company',
	'context_key':'PUBLISHER1'
});

rg.createItem( OT_PLACE, {
	'title':'SIN CITY',
	'context_key':'PLACE1'
});

rg.createItem( OT_MANIFESTATION, {
	'title':'Νεκρονομικον1',
	'context_key':'MANIFESTATION1',
	'publication':{
		'publisher':'PUBLISHER1',
		'pubplace':'PLACE1',
		'year':2000,
		'year_comment':'2000 (MM)',
	}
});
rg.createItem( OT_MANIFESTATION, {
	'title':'Νεκρονομικον2',
	'context_key':'MANIFESTATION2',
	'publication':{
		'publisher':'PUBLISHER1',
		'pubplace':'PLACE1',
		'year':2000,
		'year_comment':'2000 (MM)',
	}
});
rg.createItem( OT_MANIFESTATION, {
	'title':'Νεκρονομικον3',
	'context_key':'MANIFESTATION3',
	'publication':{
		'publisher':'PUBLISHER1',
		'pubplace':'PLACE1',
		'year':2000,
		'year_comment':'2000 (MM)',
	}
});

rg.createItem(OT_EXPRESSION, {
	'title':'translation of Necronomicon1',
	'context_key':'EXPRESSION1'
});
rg.createItem(OT_EXPRESSION, {
	'title':'translation of Necronomicon2',
	'context_key':'EXPRESSION2'
});
rg.createItem(OT_EXPRESSION, {
	'title':'translation of Necronomicon3',
	'context_key':'EXPRESSION3'
});



rg.createItem(OT_WORK, {
	'create_method':'item',
	'title':'Necronomicon1',
	'context_key':'WORK1',

	'expression':'EXPRESSION1',
	'manifestation':['MANIFESTATION1'],

});

rg.createItem(OT_WORK, {
	'create_method':'item',
	'title':'Necronomicon2',
	'context_key':'WORK2',

	'expression':'EXPRESSION2',
	'manifestation':['MANIFESTATION2'],

});


rg.createItem(OT_WORK, {
	'create_method':'item',
	'title':'Necronomicon3',
	'context_key':'WORK3',

	'expression':'EXPRESSION3',
	'manifestation':['MANIFESTATION3'],

});
