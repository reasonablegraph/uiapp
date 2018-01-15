console.log("WEM");

// cat tests/generic/wem.js|grep RKEY_|awk -F 'CKEY_' '{print $2}'|awk -F "'" '{ print $1 }'|awk -F "\"" '{ print $1 }'|sort |uniq
// cat tests/generic/wem.js|grep RKEY_|awk -F 'RKEY_' '{print $2}'|awk -F "'" '{ print $1 }'|awk -F "\"" '{ print $1 }'|sort |uniq


//# CKEYS: (CKEY_)
//---------------------------------------------------------------------------------------
// WORK WORK1 WORK2 WORK3
// CONCEPT?
// DITEM?
// EXPRESSION EXPRESSION?
// GENRE?
// MANIFESTATION MANIFESTATION?
// OBJECT?
// PERSON?
// PLACE?
// CHAIN1 CHAIN2 CHAIN3

//# RKEYS: (RKEY_)
//---------------------------------------------------------------------------------------
// AUTHOR AUTHOR1 AUTHOR2 AUTHOR3
//
// EXPRESSION_OF_WORK1 EXPRESSION_OF_WORK11 EXPRESSION_OF_WORK21 EXPRESSION_OF_WORK31
// MANIFESTATION_FOR_DITEM1
// MANIFESTATION_OF_WORK1 MANIFESTATION_OF_WORK11 MANIFESTATION_OF_WORK21 MANIFESTATION_OF_WORK31
// PUBLISHER?
// PUBPLACE?
// EDITOR?
// RING11 RING12 RING13
// RING21 RING22 RING23
// RING31 RING32 RING33
// RKEY_PERSON?_PLACE_OF_BIRTH
// RKEY_PERSON?_PLACE_OF_DEATH
// RKEY_PERSON?_SIBLING RKEY_PERSON?_SIBLING1 RKEY_PERSON?_SIBLING2
// RKEY_PERSON?_PARENT RKEY_PERSON?_PARENT1 RKEY_PERSON?_PARENT2
// TRANSLATOR?


contextForceGet = function(key){
	if (!context[key]){
		consoleRed("CANOT FIND IN CONTEXT VALUE FOR KEY: " + key);
		return null;
	}
	return context[key];
}

var cfAddSubjects = function(opts, ckey){
	if (!ckey){
		extra='';
	} else {
		extra = 'FOR_' + ckey + '_';
	}

	if (! opts['subjects']){
		opts['subjects']={};
	}

	for (i=1;i<=6;i++) {
		var subjects = opts['subjects'];
		var _RKEY = 'RKEY_' + extra + 'CHAIN' +i;
		if (context[_RKEY]) {
			var key_chain = context[_RKEY];
			subjects[key_chain] = [];
			var _RKEY = 'RKEY_' + extra + 'RING'+i+'1';
			if (context[_RKEY]) {
				subjects[key_chain].push({key: contextGet(_RKEY), element: contextGet(_RKEY + '_ELEMENT')});
			}
			var _RKEY = 'RKEY_' + extra + 'RING' +i+'2';
			if (context[_RKEY]) {
				subjects[key_chain].push({key: contextGet(_RKEY), element: contextGet(_RKEY + '_ELEMENT')});
			}
			var _RKEY = 'RKEY_' + extra + 'RING'+i+'3';
			if (context[_RKEY]) {
				subjects[key_chain].push({key: contextGet(_RKEY), element: contextGet(_RKEY + '_ELEMENT')});
			}
		}
	}
};


var cfAddPersonRelations = function(opts, idx){
	var _KEY1=  'RKEY_PERSON' + idx +'_SIBLING';
	var _KEY11= 'RKEY_PERSON' + idx +'_SIBLING1';
	var _KEY12= 'RKEY_PERSON' + idx +'_SIBLING2';
	if (context['_SIBLING' + idx]){
		opts['relations'].push({element: "ea:relation:PersonOtherSibling", contextKey: context[_KEY1]});
	}
	if (context[_KEY11]){
		opts['relations'].push({element: "ea:relation:PersonOtherSibling", contextKey: context[_KEY11]});
	}
	if (context[_KEY12]){
		opts['relations'].push({element: "ea:relation:PersonOtherSibling", contextKey: context[_KEY12]});
	}

	var _KEY1=  'RKEY_PERSON' + idx +'_PARENT';
	var _KEY11= 'RKEY_PERSON' + idx +'_PARENT1';
	var _KEY12= 'RKEY_PERSON' + idx +'_PARENT2';
	if (context[_KEY1]){
		opts['relations'].push({element: "ea:relation:PersonOtherParent", contextKey: context[_KEY1]});
	}
	if (context[_KEY11]){
		opts['relations'].push({element: "ea:relation:PersonOtherParent", contextKey: context[_KEY11]});
	}
	if (context[_KEY12]){
		opts['relations'].push({element: "ea:relation:PersonOtherParent", contextKey: context[_KEY12]});
	}



	var _KEY1='RKEY_PERSON' + idx +'_PLACE_OF_BIRTH';
	if (context[_KEY1]){
		opts['relations'].push({element: "ea:authPersonAssociated:Place_Birth", contextKey: context[_KEY1]});
	}

	var _KEY1='RKEY_PERSON' + idx +'_PLACE_OF_DEATH';
	if (context[_KEY1]){
		opts['relations'].push({element: "ea:authPersonAssociated:Place_Death", contextKey: context[_KEY1]});
	}


};
///////////////////////////////////////////////////////////////////////////////////////////////////

strStartsWith = function(str,needle)  {
	return (str.indexOf(needle) == 0);
};

var _doWork = function(CKEY) {
	//consoleRed('CKEY::' + CKEY + " :: "  + context[CKEY]);
	console.log('CKEY: ' + CKEY + " | "  + context[CKEY]);

	if (strStartsWith(CKEY,'CKEY_CONCEPT')) {
		var opts= {
			'title': contextForceGet(CKEY),
			'context_key': contextForceGet(CKEY),
		};
		rg.createItem(OT_CONCEPT,opts);
	}

	if (strStartsWith(CKEY,'CKEY_PERSON')) {
		var opts = {
			'create_method': 'item',
			'title': context[CKEY],
			'context_key': context[CKEY],
			'relations': [],
		};
		var found = CKEY.match(/CKEY_PERSON(\d+)/);
		if (found) {
			var index = found[1];
			cfAddPersonRelations(opts, index);
		}
		cfAddSubjects(opts,context[CKEY]);
		rg.createItem(OT_PERSON, opts);
	}

	if (strStartsWith(CKEY,'CKEY_CHAIN')) {
		var opts = {
			//'create_method': 'item',
			'title': context[CKEY],
			'context_key': context[CKEY],
			'relations': [],
		};
		//var found = CKEY.match(/CKEY_CHAIN(\d+)/);
		cfAddSubjects(opts,context[CKEY]);
		rg.createItem(OT_CHAIN, opts);
	}


	if (strStartsWith(CKEY,'CKEY_PLACE')) {
		var opts = {
			'create_method': 'item',
			'title': context[CKEY],
			'context_key': context[CKEY],
			'relations': [],
		};
		cfAddSubjects(opts,context[CKEY]);
		rg.createItem(OT_PLACE, opts);
	}

	if (strStartsWith(CKEY,'CKEY_OBJECT')) {
		var opts = {
			'title': context[CKEY],
			'context_key': context[CKEY],
			'relations': [],
		};
		rg.createItem(OT_OBJECT, opts);
	}

	if (strStartsWith(CKEY,'CKEY_GENRE')) {
		var opts = {
			'title': context[CKEY],
			'context_key': context[CKEY],
			'relations': [],
		};
		rg.createItem(OT_GENRE, opts);
	}

	if (strStartsWith(CKEY,'CKEY_MANIFESTATION')) {
		var index = '';
		var found = CKEY.match(/CKEY_MANIFESTATION(\d+)/);
		if (found) { index = found[1]; }
		var opts = {
			'create_method': 'item',
			'title': context[CKEY],
			'context_key': context[CKEY],
			'publication': {
				'publisher': contextGet("RKEY_PUBLISHER"+index),
				'pubplace': contextGet("RKEY_PUBPLACE"+index),
				'year': 2000,
				'year_comment': '2000 (MM)',
			},
			'relations': [],
			'subjects': [],
		};
		if (context['RKEY_EDITOR'+index]) {
			opts['relations'].push({element: "ea:manif:editorVersion", contextKey: context['RKEY_EDITOR'+index]});
		}
		cfAddSubjects(opts,context[CKEY]);
		rg.createItem(OT_MANIFESTATION, opts);
	}





	if (strStartsWith(CKEY,'CKEY_DITEM')) {
		var index = '';
		var found = CKEY.match(/CKEY_DITEM(\d+)/);
		if (found) { index = found[1]; }

			var opts = {
				'create_method': 'item',
				'title': context["CKEY_DITEM" +index],
				'context_key': context["CKEY_DITEM"+index],
				attributes: [
					{element: "ea:item:sublocation", value: "0"},
					{element: "ea:item:type", value: "pdf"},
					{element: "ea:item:location", value: "location1"},
					{element: "ea:item:accessRestrictions", value: "restrictions info"},
					//{element:"ea:item:reproduction", value:"itemReproductionTable_a"},
					{element: "ea:edoc:Pages", value: "1"},
					{element: "ea:edoc:Title", value: "This is a test PDF file"},
				],
				'relations': [
					{element: "ea:artifact-of:", contextKey: contextGet("RKEY_MANIFESTATION_FOR_DITEM"+index)}
				],

			};
			cfAddSubjects(opts,context[CKEY]);
			rg.createItem(OT_DIGITAL_ITEM, opts);
	}


	if (strStartsWith(CKEY,'CKEY_EXPRESSION')) {
		var index = '';
		var found = CKEY.match(/CKEY_EXPRESSION(\d+)/);
		if (found) { index = found[1]; }
		var opts = {
			'create_method': 'item',
			'title': context["CKEY_EXPRESSION"+index],
			'context_key': context["CKEY_EXPRESSION"+index],
			'relations': [],
			'subjects': [],
		};
		//cfAddSubjects(opts);
		if (context["RKEY_TRANSLATOR"+index]) {
			opts['relations'].push({element: "ea:expres:translator", contextKey: context['RKEY_TRANSLATOR'+index]});
		}
		if (context["RKEY_TRANSLATOR"+index+"1"]) {
			opts['relations'].push({element: "ea:expres:translator", contextKey: context['RKEY_TRANSLATOR'+index+"1"]});
		}
		if (context["RKEY_TRANSLATOR"+index+"2"]) {
			opts['relations'].push({element: "ea:expres:translator", contextKey: context['RKEY_TRANSLATOR'+index+"2"]});
		}
		cfAddSubjects(opts,context[CKEY]);
		rg.createItem(OT_EXPRESSION, opts);
	}



// //GIA XRISI SAN SUBJECT
	if (CKEY === 'CKEY_WORK1') {
		var opts = {
			'create_method': 'item',
			'title': context["CKEY_WORK1"],
			'context_key': context["CKEY_WORK1"],
			'expression': context["RKEY_EXPRESSION_OF_WORK11"],
			'manifestation': context['RKEY_MANIFESTATION_OF_WORK11'],
			'relations': [],
		};
		rg.createItem(OT_WORK, opts);
	}

	if (CKEY === 'CKEY_WORK2') {
		var opts = {
			'create_method': 'item',
			'title': context["CKEY_WORK2"],
			'context_key': context["CKEY_WORK2"],
			'expression': context["RKEY_EXPRESSION_OF_WORK21"],
			'manifestation': context['RKEY_MANIFESTATION_OF_WORK21'],
			'relations': [],
		};
		//consoleMagenta(JSON.stringify(opts, null, 2));
		rg.createItem(OT_WORK, opts);
	}
	if (CKEY === 'CKEY_WORK3') {
		var opts = {
			'create_method': 'item',
			'title': context["CKEY_WORK3"],
			'context_key': context["CKEY_WORK3"],
			'expression': context["RKEY_EXPRESSION_OF_WORK31"],
			'manifestation': context['RKEY_MANIFESTATION_OF_WORK31'],
			'relations': [],
		};
		//consoleMagenta(JSON.stringify(opts, null, 2));
		rg.createItem(OT_WORK, opts);
	}
//
//
	if (CKEY === 'CKEY_WORK') {
		var opts = {
			'create_method': 'item',
			'title': context["CKEY_WORK"],
			'context_key': context["CKEY_WORK"],
			'expression': context["RKEY_EXPRESSION_OF_WORK"],
			//'manifestation': context['RKEY_MANIFESTATION_OF_WORK1'],
			'relations': [],
			subjects: {},
		};

		var manifs=[];
		if (context['RKEY_MANIFESTATION_OF_WORK']){
			manifs.push(context['RKEY_MANIFESTATION_OF_WORK']);
		}
		opts['manifestation']=manifs;


		if (context['RKEY_MANIFESTATION1_OF_WORK']){
			opts['relations'].push({element: "ea:workOf:", contextKey: context["RKEY_MANIFESTATION1_OF_WORK"]});
		}
		if (context['RKEY_MANIFESTATION2_OF_WORK']){
			opts['relations'].push({element: "ea:workOf:", contextKey: context["RKEY_MANIFESTATION2_OF_WORK"]});
		}


		// var expressions=[];
		// if (context['RKEY_EXPRESSION_OF_WORK']){
		// 	manifs.push(context['RKEY_EXPRESSION_OF_WORK']);
		// }
		// opts['expression']=expressions;



		cfAddSubjects(opts);

		if (context['RKEY_AUTHOR']) {
			opts['relations'].push({element: "ea:work:authorWork", contextKey: context['RKEY_AUTHOR']});
		}
		if (context['RKEY_AUTHOR1']) {
			opts['relations'].push({element: "ea:work:authorWork", contextKey: context['RKEY_AUTHOR1']});
		}
		if (context['RKEY_AUTHOR2']) {
			opts['relations'].push({element: "ea:work:authorWork", contextKey: context['RKEY_AUTHOR2']});
		}
		if (context['RKEY_AUTHOR3']) {
			opts['relations'].push({element: "ea:work:authorWork", contextKey: context['RKEY_AUTHOR3']});
		}

		//consoleMagenta(JSON.stringify(opts, null, 2));
		rg.createItem(OT_WORK, opts);
	}

}




for (k in context){
	if (k.substr(0,5) == "CKEY_" && context[k]){
		_doWork(k);
		context[k]=null;
	}
}

//clearContextCRKEYS();