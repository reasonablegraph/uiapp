console.log("ci: t1");
//WORK EXPRESION MANIF  DI SUBJECTS PUBLISHER AUTHOR

/* @var FormControler fc */

rg.createItem( OT_PERSON, {
	'title':'Doe, John',
	'context_key':'PERSON1'
});

rg.createItem( OT_PERSON, {
	'title':'Translator, John',
	'context_key':'PERSON2'
});

rg.createItem( OT_ORGANIZATION, {
	'title':'Publisher ACME company',
	'context_key':'PUBLISHER1'
});

rg.createItem( OT_PLACE, {
	'title':'SIN CITY',
	'context_key':'PLACE1'
});

rg.createItem( OT_MANIFESTATION, {
	'title':'Νεκρονομικον',
	'context_key':'MANIFESTATION1',
	'publication':{
		'publisher':'PUBLISHER1',
		'pubplace':'PLACE1',
		'year':2000,
		'year_comment':'2000 (MM)',
	}
});


//SINDESI TOU ITEM STO MANIFESTATION MESW SPOOL
rg.createItem(OT_DIGITAL_ITEM, {
	'create_method':'item',
	'title':'ITEM_1',
	'context_key':'ITEM1',
	attributes:[
		{element:"ea:item:sublocation", value:"0"},
		{element:"ea:item:type", value:"pdf"},
		{element:"ea:item:location", value:"location1"},
		{element:"ea:item:accessRestrictions", value:"restrictions info"},
		//{element:"ea:item:reproduction", value:"itemReproductionTable_a"},
		{element:"ea:edoc:Pages", value:"1"},
		{element:"ea:edoc:Title", value:"This is a test PDF file"},
	],
	'relations':[
		{element:"ea:artifact-of:", contextKey:"MANIFESTATION1"}
	],

});
rg.createItem(OT_DIGITAL_ITEM, {
	'create_method':'item',
	'title':'ITEM_11',
	'context_key':'ITEM11',
	attributes:[
		{element:"ea:item:sublocation", value:"0"},
		{element:"ea:item:type", value:"pdf"},
		{element:"ea:item:location", value:"location1"},
		{element:"ea:item:accessRestrictions", value:"restrictions info"},
		{element:"ea:edoc:Pages", value:"1"},
		{element:"ea:edoc:Title", value:"This is a test PDF file"},
	],
	'relations':[
		{element:"ea:artifact-of:", contextKey:"MANIFESTATION1"}
	],

});


rg.createItem(OT_DIGITAL_ITEM, {
	'create_method':'item',
	'title':'ITEM_12',
	'context_key':'ITEM12',
	attributes:[
		{element:"ea:item:sublocation", value:"0"},
		{element:"ea:item:type", value:"pdf"},
		{element:"ea:item:location", value:"location1"},
		{element:"ea:item:accessRestrictions", value:"restrictions info"},
		{element:"ea:edoc:Pages", value:"1"},
		{element:"ea:edoc:Title", value:"This is a test PDF file"},
	],
	'relations':[
		{element:"ea:artifact-of:", contextKey:"MANIFESTATION1"}
	],

});

rg.createItem(OT_EXPRESSION, {
	'title':'μεταφραση του Νεκρονομικον',
	'context_key':'EXPRESSION1',
	'relations':[
	         		{element:"ea:expres:translator", contextKey:"PERSON2"}
	 ],

});


rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT1',
	'context_key':'CONCEPT1',
});
rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT21',
	'context_key':'CONCEPT21'
});
rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT22',
	'context_key':'CONCEPT22'
});


rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT31',
	'context_key':'CONCEPT31'
});
rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT32',
	'context_key':'CONCEPT32'
});



rg.createItem(OT_WORK, {
	'create_method':'item',
	'title':'Necronomicon',
	'context_key':'WORK1',

	'relations':[
		{element:"ea:work:authorWork", contextKey:"PERSON1"}
	],

	'expression':'EXPRESSION1',
	'manifestation':['MANIFESTATION1'],
	'subjects':{
		'CHAIN1':['CONCEPT1'],
		'CHAIN2':['CONCEPT21','CONCEPT22'],
	},

	edit_fn:function(fc,context){
		//consoleRed("EDIT FN");
	}

});



rg.createItem( OT_MANIFESTATION, {
	'title':'χειρογραφο Voynich',
	'context_key':'MANIFESTATION2',
	// 'publication':{
	// 	'publisher':'PUBLISHER1',
	// 	'pubplace':'PLACE1',
	// 	'year':2000,
	// 	'year_comment':'2000 (MM)',
	// }
});


rg.createItem(OT_EXPRESSION, {
	'title':'μεταφ χειρογραφου Voynich',
	'context_key':'EXPRESSION2',
	'relations':[
		//{element:"ea:expres:translator", contextKey:"PERSON2"}
	],

});


rg.createItem(OT_WORK, {
	'create_method':'item',
	'expression':'EXPRESSION2',
	'manifestation':['MANIFESTATION2'],
	'title':'Voynich manuscript',
	'context_key':'WORK2',
	'subjects':{
		'CHAIN4':['CONCEPT22'],
	},
});

// rg.addJob(function(context) {
// });


rg.createItem( OT_MANIFESTATION, {
	'title':'Οι περιπέτειες της Αλίκης στη χώρα των θαυμάτων',
	'context_key':'MANIFESTATION3',
	// 'publication':{
	// 	'publisher':'PUBLISHER1',
	// 	'pubplace':'PLACE1',
	// 	'year':2000,
	// 	'year_comment':'2000 (MM)',
	// }
});
rg.createItem(OT_EXPRESSION, {
	'title':'μεταφραση Alices Adventures in Wonderland',
	'context_key':'EXPRESSION3',
	'relations':[
		{element:"ea:expres:translator", contextKey:"PERSON2"}
	],

});
rg.createItem(OT_WORK, {
	'create_method':'item',
	'expression':'EXPRESSION3',
	'manifestation':['MANIFESTATION3'],
	'title':'Alices Adventures in Wonderland',
	'context_key':'WORK3',
	// 'subjects':{
	// 	'CHAIN5':['CONCEPT22'],
	// },
});




rg.createItem( OT_MANIFESTATION, {
	'title':'εκδοση 4',
	'context_key':'MANIFESTATION4',
	 'publication':{
	 	'publisher':'PUBLISHER1',
	 	'pubplace':'PLACE1',
	 	'year':2000,
	 	'year_comment':'2000 (MM)',
	 }
});
rg.createItem(OT_EXPRESSION, {
	'title':'μεταφραση 4',
	'context_key':'EXPRESSION4',
	// 'relations':[
	// 	{element:"ea:expres:translator", contextKey:"PERSON2"}
	// ],

});
rg.createItem(OT_WORK, {
	'create_method':'item',
	'expression':'EXPRESSION4',
	'manifestation':['MANIFESTATION4'],
	'title':'εργο 4',
	'context_key':'WORK4',
	 'subjects':{
	 	'CHAIN6':['CONCEPT31','CONCEPT32'],
	 },
});



///////////////////////////////////////////////////////////
//GONIOS
rg.createItem( OT_PERSON, {
	'title':'Doe, barney',
	'context_key':'PERSON12',
});
//GONIOS
rg.createItem( OT_PERSON, {
	'title':'Doe, barbara',
	'context_key':'PERSON11',
	'relations':[
		{element:"ea:relation:PersonOtherParent", contextKey:"PERSON12"}
	]

});

//GONIOS
rg.createItem( OT_PERSON, {
	'title':'Doe, betsy',
	'context_key':'PERSON10',
	'relations':[
		{element:"ea:relation:PersonOtherParent", contextKey:"PERSON11"}
	]

});

rg.createItem( OT_PERSON, {
	'title':'Doe, Johnny',
	'context_key':'PERSON3',
	'relations':[
		{element:"ea:relation:PersonOtherSibling", contextKey:"PERSON2"},
		{element:"ea:relation:PersonOtherParent", contextKey:"PERSON10"}
	]
});


rg.createItem( OT_PERSON, {
	'title':'Doe, Jeniffer',
	'context_key':'PERSON4',
	'relations':[
		{element:"ea:relation:PersonOtherSibling", contextKey:"PERSON2"}
	]
});

rg.createItem( OT_PERSON, {
	'title':'Doe, Jaida',
	'context_key':'PERSON5',
	'relations':[
		{element:"ea:relation:PersonOtherSibling", contextKey:"PERSON2"}
	]
});
//////////////////////////////////////////////////////////////////////




rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT41',
	'context_key':'CONCEPT41'
});

rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT42',
	'context_key':'CONCEPT42'
});

rg.createItem(OT_CONCEPT, {
	'title':'CONCEPT43',
	'context_key':'CONCEPT43'
});





rg.createItem( OT_PERSON, {
	'title':'Sami, Jan',
	'context_key':'PERSON13',
	'relations':[
	]
});


rg.createItem( OT_PERSON, {
	'title':'Eleven, Joe ',
	'context_key':'PERSON14',
	'relations':[
	]
});

rg.createItem( OT_PERSON, {
	'title':'Twelve, Joe ',
	'context_key':'PERSON15',
	'relations':[
	]
});


rg.createItem( OT_ORGANIZATION, {
	'title':'Publisher company A',
	'context_key':'PUBLISHER2'
});

rg.createItem( OT_PLACE, {
	'title':'CITY TWO',
	'context_key':'PLACE2'
});

rg.createItem( OT_ORGANIZATION, {
	'title':'Publisher company 3',
	'context_key':'PUBLISHER3'
});

rg.createItem( OT_PLACE, {
	'title':'CITY THRE',
	'context_key':'PLACE3'
});



rg.createItem( OT_MANIFESTATION, {
	'title':'εκδοση 5',
	'context_key':'MANIFESTATION5',
	'publication':{
		'publisher':'PUBLISHER2',
		'pubplace':'PLACE2',
		'year':2000,
		'year_comment':'2000 (MM)',
	}
});
rg.createItem( OT_MANIFESTATION, {
	'title':'εκδοση 6',
	'context_key':'MANIFESTATION6',
	'publication':{
		'publisher':'PUBLISHER3',
		'pubplace':'PLACE3',
		'year':2000,
		'year_comment':'2000 (MM)',
	}
});

rg.createItem(OT_EXPRESSION, {
	'title':'μεταφραση 5',
	'context_key':'EXPRESSION5',
	 'relations':[
	 	{element:"ea:expres:translator", contextKey:"PERSON13"}
	],

});




rg.createItem(OT_DIGITAL_ITEM, {
	'create_method':'item',
	'title':'ITEM_3',
	'context_key':'ITEM3',
	attributes:[
		{element:"ea:item:sublocation", value:"0"},
		{element:"ea:item:type", value:"pdf"},
		{element:"ea:item:location", value:"location1"},
		{element:"ea:item:accessRestrictions", value:"restrictions info"},
		{element:"ea:edoc:Pages", value:"1"},
		{element:"ea:edoc:Title", value:"This is a test PDF file"},
	],
	'relations':[
		{element:"ea:artifact-of:", contextKey:"MANIFESTATION5"}
	],

});





rg.createItem(OT_DIGITAL_ITEM, {
	'create_method':'item',
	'title':'ITEM_2',
	'context_key':'ITEM2',
	attributes:[
		{element:"ea:item:sublocation", value:"0"},
		{element:"ea:item:type", value:"pdf"},
		{element:"ea:item:location", value:"location1"},
		{element:"ea:item:accessRestrictions", value:"restrictions info"},
		{element:"ea:edoc:Pages", value:"1"},
		{element:"ea:edoc:Title", value:"This is a test PDF file"},
	],
	'relations':[
		{element:"ea:artifact-of:", contextKey:"MANIFESTATION5"}
	],

});







rg.createItem(OT_WORK, {
	'create_method':'item',
	'title':'εργο 5',
	'expression':'EXPRESSION5',
	'manifestation':['MANIFESTATION5'],//'MANIFESTATION6'
	'context_key':'WORK5',
	'subjects':{
		'CHAIN7':['CONCEPT41','CONCEPT42','CONCEPT43'],
	},
	'relations':[
		{element:"ea:work:authorWork", contextKey:"PERSON14"},
		{element:"ea:work:authorWork", contextKey:"PERSON15"}
	],

});



rg.createItem(OT_DIGITAL_ITEM, {
	'create_method':'item',
	'title':'ITEM_4',
	'context_key':'ITEM4',
	attributes:[
		{element:"ea:item:sublocation", value:"0"},
		{element:"ea:item:type", value:"pdf"},
		{element:"ea:item:location", value:"location1"},
		{element:"ea:item:accessRestrictions", value:"restrictions info"},
		{element:"ea:edoc:Pages", value:"1"},
		{element:"ea:edoc:Title", value:"This is a test PDF file"},
	],
	'relations':[
		{element:"ea:artifact-of:", contextKey:"MANIFESTATION5"}
	],

});






rg.createItem(OT_DIGITAL_ITEM, {
	'create_method':'item',
	'title':'ITEM_5',
	'context_key':'ITEM5',
	attributes:[
		{element:"ea:item:sublocation", value:"0"},
		{element:"ea:item:type", value:"pdf"},
		{element:"ea:item:location", value:"location1"},
		{element:"ea:item:accessRestrictions", value:"restrictions info"},
		{element:"ea:edoc:Pages", value:"1"},
		{element:"ea:edoc:Title", value:"This is a test PDF file"},
	],
	'relations':[
		{element:"ea:artifact-of:", contextKey:"MANIFESTATION6"}
	],

});
