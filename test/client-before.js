//TEST LIBRARY CLIENT SIDE

var rg_counter =0;
var rg = {};


var http_headers = {
	'X-DRUPAL-USERNAME': 'admin',
	'X-DRUPAL-UID': '1',
	'X-DRUPAL-ACCESS': 'admin',
	'X-Drupal-Lang': 'en'
}

var createItemOptions = {
	'headers': http_headers,
}

var isObject = function(a) {
	return (!!a) && (a.constructor === Object);
};

var consoleRed = function (str) {
	console.log('\u001b[31m' + str + '\u001b[39m');
}
var consoleGreen = function (str) {
	console.log('\u001b[32m' + str + '\u001b[39m');
}
var consoleYellow = function (str) {
	console.log('\u001b[33m' + str + '\u001b[39m');
}
var consoleBlue = function (str) {
	console.log('\u001b[34m' + str + '\u001b[39m');
}
var consoleMagenta = function (str) {
	console.log('\u001b[35m' + str + '\u001b[39m');
}

var contextSet = function(key,value){
	context[key] = value;
}
var contextGet = function(key){
	return  (context[key] !== undefined) ?context[key] : null;
}
var contextHas = function(key){
	return  (context[key] !== undefined);
}


const OT_CONCEPT = 'auth-concept';
const OT_EVENT = 'auth-event';
const OT_EXPRESSION = 'auth-expression';
const OT_FAMILY = 'auth-family';
const OT_GENERAL = 'auth-general';
const OT_GENRE = 'auth-genre';
const OT_MANIFESTATION = 'auth-manifestation';
const OT_OBJECT = 'auth-object';
//const OT_'auth-object_collection';
const OT_ORGANIZATION = 'auth-organization';
const OT_PERSON = 'auth-person';
const OT_PLACE = 'auth-place';
const OT_WORK = 'auth-work';
const OT_BITSTREAM = 'bitstream';
//const OT_'collection';
const OT_DIGITAL_ITEM = 'digital-item';
const OT_EUROPEANA = 'europeana';
const OT_LEMMA = 'lemma';
const OT_LEMMA_CATEGORY = 'lemma-category';
const OT_MARC_IMPORT = 'marc-import';
const OT_MEDIA = 'media';
const OT_PERIODIC_PUBLICATION = 'periodic-publication';
const OT_PHYSICAL_ITEM = 'physical-item';
const OT_CHAIN = 'subject-chain';
const OT_WEB_SITE_INSTANCE = 'web-site-instance';




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var clearContextCRKEYS = function(){
	//console.log("clearContextCRKEYS");
	var removed_keys = '';
	var sep ='';
	for (var k in context){
		if (k.substring(0, 4) == "CKEY") {
			removed_keys += (sep + k);
			sep = ' ';
			context[k] = null;
		}
	}
	//console.log("wem CKEYS: " + removed_keys);
	console.log("REMOVE CKEY(S) FROM CONTEXT: " + removed_keys);
	removed_keys = '';
	sep ='';
	for (var k in context){
		if (k.substring(0, 4) == "RKEY") {
			removed_keys += (sep + k);
			sep = ' ';
			context[k] = null;
		}
	}
	//console.log("wem RKEYS: " + removed_keys);
	console.log("REMOVE RKEY(S) FROM CONTEXT: " + removed_keys);
}


addStatus = function (status) {

	jobs.push(function (context) {
		var deferred = jQuery.Deferred();
		console.log('add-status: ' + status);
		context['status'] = [status];
		deferred.resolve("OK");
		return deferred;
	});
};


rg.addJob = function (fn) {
	jobs.push(function (context) {
		var deferred = jQuery.Deferred();
		fn(context);
		deferred.resolve("OK");
		return deferred;
	});
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 * @param  {FieldModelAccessor} fa
 */
consoleDumpFMA = function (fa) {

	var f = function (str) {
		if (!str) {
			return '␀'
		}
		return str;
	}

	var ndata = fa.ndata;
	$c = 0;
	console.log(">============================================================");
	for (i in ndata) {
		$c++;
		var m = ndata[i];
		var props = (m.props());
		if (props &&   ! jQuery.isEmptyObject(props) ) {
			props = 'p:' + JSON.stringify(props);
		} else {
			props = null;
		}

		var data = (m.data());
		if (data &&   ! jQuery.isEmptyObject(data)  ) {
			data = 'd:' + JSON.stringify(data);
		} else {
			data = null;
		}
		var ref = m.refItem();
		if (ref) {
			ref = 'ref: ' + ref
		}
		;
		console.log(m.id(), '|', f(m.link()), '|', m.key(), '|', f(m.value()), '|', f(ref), '|', f(props), f(data));
	}
	console.log("total: ", $c);
	console.log("<============================================================");
};


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var formSubmit1 = function (handler) {

	consoleYellow("FORM-SUBMIT");
	 fc.populateData();
	 fc.generate();
	 fc.removeOrphanModels();
	 var vstatus = fc.validate();
	 console.log("STATUS: " + vstatus );

	var btn=jQuery('.btn_save_fin').first();
	btn.click(handler);
	btn.trigger("click");

}

var formSubmit2 = function (handler) {

	consoleYellow("FORM-SUBMIT");
	fc.populateData();
	fc.generate();
	fc.removeOrphanModels();
	var vstatus = fc.validate();
	console.log("STATUS: " + vstatus );
	//
	// var btn=jQuery('button[name="save_finalize"]');
	// console.log(btn);
	// btn.click(handler);

	var form_org = jQuery('#forms1')[0];
	var form = jQuery(form_org).clone();
	var data = fc.ndata;
	FormUtil.addModelsToForm(form, data);
	jQuery('<input type="hidden">').attr('name', 'SUBITEM').val('FALSE').appendTo(form);
	//var ph = jQuery('<input type="hidden">').attr('name', 'save_finalize').val('save_finalize');
	//ph.appendTo(form);
	//form.submit(handler);
	createItemOptions['successHandler'] = function () {
		console.log("REMOVE FORM");
		form.remove();
		handler({});
	};
	return fc._formRemoteCreateItem(form, createItemOptions);
}





rg.formSubmit = function () {

	jobs.push(function () {
		var deferred = jQuery.Deferred();
		console.log("JOB SUBMIT FORM");
		formSubmit1(function(e){
			//consoleYellow("FORM-SUBMITED");
			//alert("#1#FORM-SUBMITED");
			setTimeout(function(){
				//DEN FTANI EDO GITI TO FORM SUBMIT EXI ALA#I SELIDA
				deferred.resolve("OK");
			}, 4000);

		});
		return deferred;
	});
}


createSubItem = function (fc) {
	console.log("CREATE-SUB-ITEM");
	return fc.remoteCreateItem(createItemOptions);
}


var createItem = function (fc, options) {
	console.log("CREATE-ITEM");
	var form = jQuery('<form>');
	var data = fc.ndata;
	FormUtil.addModelsToForm(form, data);
	jQuery('<input type="hidden">').attr('name', 'save_finalize').val('save_finalize').appendTo(form);
	jQuery('<input type="hidden">').attr('name', 'SUBITEM').val('FALSE').appendTo(form);
	createItemOptions['successHandler'] = function () {
		//console.log("REMOVE FORM");
		form.remove();
	};
	return fc._formRemoteCreateItem(form, createItemOptions);
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var getSubjectKey = function (subject) {
	var ot = subject['ot'];

	if (subject['element']){
		return subject['element'];
	}

	if (ot == 'auth-concept') {
		return 'ea:subj:concept';
	}
	if (ot == 'auth-person') {
		return 'ea:subj:person';
	}
	if (ot == 'auth-organization') {
		return 'ea:subj:person';
	}
	if (ot == 'auth-family') {
		return 'ea:subj:person';
	}
	if (ot == 'auth-object') {
		return 'ea:subj:object';
	}
	if (ot == 'auth-place') {
		return 'ea:subj:place';
	}
	if (ot == 'auth-event') {
		return 'ea:subj:event';
	}
	if (ot == 'auth-work') {
		return 'ea:subj:work';
	}

	throw 'EROR CANOT FIND SUBJECT_PRIMARY KEY FOR OT: ' + ot;
}

var getSubjectPrimaryKey = function (subject) {
	var key = getSubjectKey(subject);
	return (key + ':primary');
}

// consoleRed('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
// var cSubjectChain = function (idx, opts) {
// 	consoleRed('cSubjectChain');
// 	if (!opts) {
// 		opts = {};
// 	}
// 	var title = opts['title'] ? opts['title'] : 'chain';
// 	title = title + '#' + idx;
// 	var keys = opts['keys'] ? opts['keys'] : {};
// 	var main_key = keys['main'] ? keys['main'] : null;
// 	if (!main_key) {
// 		main_key = 'CHAIN' + idx;
// 	}
// 	var subItemFlag = !(opts['create_method'] && opts['create_method'] == 'item')
//
//
// 	var subject1_key = keys['subject1'] ? keys['subject1'] : null;
// 	var subject2_key = keys['subject2'] ? keys['subject2'] : null;
// 	var subject3_key = keys['subject3'] ? keys['subject3'] : null;
// 	var subject4_key = keys['subject4'] ? keys['subject4'] : null;
//
//
// 	jobs.push(function (context) {
// 		console.log("CHAIN" + idx);
// 		var fa = new FieldModelAccessor({});
// 		var tmp;
// 		tmp = fa.createFieldModel('dc:title:', title);
// 		tmp = fa.createFieldModel('ea:obj-type:', 'subject-chain');
// 		tmp = fa.createFieldModel('ea:status:', 'finish');
// 		var subject;
// 		if (subject1_key) {
// 			var subject = context[subject1_key];
// 			tmp = fa.createFieldModel(getSubjectPrimaryKey(subject['ot']), subject['label']);
// 			tmp.refItem(subject['item_id']);
// 		}
// 		if (subject2_key) {
// 			var subject = context[subject2_key];
// 			tmp = fa.createFieldModel(getSubjectKey(subject['ot']), subject['label']);
// 			tmp.refItem(subject['item_id']);
// 		}
// 		if (subject3_key) {
// 			var subject = context[subject3_key];
// 			tmp = fa.createFieldModel(getSubjectKey(subject['ot']), subject['label']);
// 			tmp.refItem(subject['item_id']);
// 		}
// 		if (subject4_key) {
// 			var subject = context[subject4_key];
// 			tmp = fa.createFieldModel(getSubjectKey(subject['ot']), subject['label']);
// 			tmp.refItem(subject['item_id']);
// 		}
// 		consoleDumpFMA(fa);
// 		var thenfn = function (data) {
// 			consoleRed("cSubjectChain:XXX " + main_key);
// 			console.log(JSON.stringify(data));
// 			context[main_key] = data;
// 		};
// 		if (subItemFlag) {
// 			return createSubItem(fa).then(thenfn);
// 		} else {
// 			return createItem(fa).then(thenfn);
// 		}
// 	});
//
//
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 * @param {FieldModelAccessor} fa
 * @param element
 * @param value
 * @returns {FieldModel}
 */
var setAttribute = function(fa,element,value){
	var tmp = fa.getFieldModelOrCreate(element);
	tmp.value(value);
	return tmp;
}

/**
 *
 * @param {FieldModelAccessor} fa
 * @param element
 * @param value
 * @returns {FieldModel}
 */
var addAttribute = function(fa,element,value,parentId) {
	return fa.createFieldModel(element, value,parentId);
}
/**
 *
 * @param {FieldModelAccessor} fa
 * @param {Array} attributes
 * @returns {FieldModelAccessor}
 */
var addAttributes = function(fa,attributes){

	var rel;
	var element;
	var context_key;
	var ob;
	for (var idx  in attributes){
		rel = attributes[idx];
		element = rel['element'];
		var value = rel['value'];
		addAttribute(fa,element,value);
		//tmp = fa.createFieldModel(element, value);
	}
	return fa;
}







var addPublication = function(fa,publisher,pubplace,year,year_comment) {

	var publisher_key = publisher;
	var pubplace_key = pubplace;

	if (publisher_key || pubplace_key||year) {
		var publication_root = fa.createFieldModel('ea:manif:Publication', 'publication');
		var publication_id = publication_root.id();
		if (publisher_key) {
			var publisher = context[publisher_key];
			tmp = fa.createFieldModel('ea:manif:Publisher_Name', publisher['label'], publication_id);
			tmp.refItem(publisher['item_id']);
			tmp.data({
				"create_subitem": true,
				"rel_type": "free",
				"sub-root": true,
				"new_type": "new_0",
				"ot": publisher['ot']
			});
		}
		if (pubplace_key) {
			var pubblace = context[pubplace_key];
			tmp = fa.createFieldModel('ea:manif:Publication_Place', pubblace['label'], publication_id);
			tmp.refItem(pubblace['item_id']);
			tmp.data({
				"create_subitem": true,
				"rel_type": "free",
				"sub-root": true,
				"new_type": "new_0",
				"ot": pubplace_key['ot']
			});
		}
		 if (year){
			var year_comment_ok = (year_comment !== undefined ) ? year_comment : null;
			var year_json = {"y":year,"d":null,"m":null,"t":year_comment_ok,"prsd":"p","z":"date"};
			addAttribute(fa,'ea:manif:Publication_Date',year_json,publication_id);
			//addAttribute(fa,'ea:manif:Publication_Date',JSON.stringify(year_json),publication_id);
		 }
	}


	return fa;

}

/**
 *
 * @param {FieldModelAccessor} fa
 * @param element
 * @param context_key
 * @returns {FieldModel}
 */
var addRelation = function(fa,element,context_key,parentId){
	if ( context[context_key]) {
		ob = context[context_key];
		tmp = fa.createFieldModel(element, ob['label'],parentId);
		tmp.refItem(ob['item_id']);
		tmp.put('rel_type','locked');//XORIS AFTO den ananeonete to text_value sto rename
		return tmp;
	}
	var err_msg = "ERROR CANOT FIND IN CONTEXT NODE WITH KEY: " + context_key;
	console.log(err_msg);
	throw err_msg;
}

/**
 *
 * @param {FieldModelAccessor} fa
 * @param {Array} relations
 * @returns {FieldModelAccessor}
 */
var addRelations = function(fa,relations){

	var rel;
	var element;
	var context_key;
	var ob;
	for (var idx  in relations){
		rel = relations[idx];
		element = rel['element'];
		context_key = rel['contextKey'];
		addRelation(fa,element,context_key);
	}
	return fa;
}


/**
 *
 * @param {FieldModelAccessor} fa
 * @param key1
 * @param {Array} keys
 * @param {*} context
 * @returns {FieldModelAccessor}
 */
var addSubject = function (fa, key1, keys) {
	if (!keys || keys.length == 0) {
		return fa;
	}

	// consoleMagenta("addSubject");
	// consoleMagenta(JSON.stringify(key1));
	// consoleMagenta(JSON.stringify(keys));

	var test_key = key1;
	if (!test_key){
		var main_key = context['MAIN_KEY'];
		if (!main_key) {
			consoleRed("SUBJECT MAIN KEY NOT FOUND");
		}
		var idx = context['SUBJECT_IDX'];
		if (!idx) {
			idx = 1
		}
		;
		var new_idx = idx + 1;
		context['SUBJECT_IDX'] = new_idx;
		test_key = main_key + '@' + idx;
	}

	var subject1_key = keys.shift();
	var subject1_key_element = null;
	if (isObject(subject1_key)){
		subject1_key_element = subject1_key['element'];
		subject1_key = subject1_key['key'];
	}

	var subject_chain;
	var subject;
	if (subject1_key) {
		subject = contextGet(subject1_key);
		if (! subject){
			consoleRed("CANOT FIND SUBJECT VERTEX FROM KEY: " + subject1_key);
		}
		//consoleMagenta(JSON.stringify(subject));
		if (subject1_key_element){
			subject['element'] = subject1_key_element;
		}
		var chain_root = fa.createFieldModel('ea:subj:', subject['label']);
		chain_root.data({"create_subitem": true, 'test_key':test_key});
		var chain_id = chain_root.id();

		tmp = fa.createFieldModel('ea:status:', 'finish', chain_id);
		tmp = fa.createFieldModel('ea:obj-type:', 'subject-chain', chain_id);
		tmp = fa.createFieldModel('ea:test:key1', test_key, chain_id);

		tmp = fa.createFieldModel(getSubjectPrimaryKey(subject), subject['label'], chain_id);
		tmp.refItem(subject['item_id']);
		tmp.data({"sub-root": true, "new_type": "new", "ot": subject['ot']});
		for (var i in keys) {
			var key = keys[i];
			var key_element = null;
			if (isObject(key)){
				key_element = key['element'];
				key = key['key'];
			}
			subject = contextGet(key);
			if (subject) {
				if (key_element){
					subject['element'] = key_element;
				}
				//consoleMagenta(JSON.stringify(subject));
				tmp = fa.createFieldModel(getSubjectKey(subject), subject['label'], chain_id);
				tmp.refItem(subject['item_id']);
				tmp.data({"sub-root": true, "new_type": "new", "ot": subject['ot']});
			} else {
				consoleRed("CANOT FIND SUBJECT KEY: " + key);
			}
		}
	}
	return fa;
}


/**
 * KEYS:  AUTHOR1  EXPRESSION1 MANIFESTATION1
 * @param idx
 * @param opts
 */
rg.createItem = function (obj_type, opts) {
	var idx = rg_counter ++;
	 //consoleMagenta("createItem: " + obj_type  + ' : ' + opts['context_key'] + ' :: ' + JSON.stringify(opts));
	 if (!opts) {
	 	opts={};
	 }

	var append_idx_to_itle = (opts['append_idx_to_itle'] !== undefined) ? opts['append_idx_to_itle'] : false;

	var title = opts['title'] ? opts['title'] : obj_type;
	if (append_idx_to_itle) {
		title = title + '#' + idx;
	}

	var keys = opts['keys'] ? opts['keys'] : {};

	var main_key =opts['context_key'];
	if (!main_key) {
		main_key = keys['main'] ? keys['main'] : null;
	}
	if (!main_key) {
		main_key = 'WORK' + idx;
	}


	var attributes = opts['attributes'] ? opts['attributes']: [];
	var relations = opts['relations'] ? opts['relations'] : [];

	var subItemFlag = !(opts['create_method'] && opts['create_method'] == 'item');


	var fa = (opts['model_accesor']) ? opts['model_accesor'] : new FieldModelAccessor({});


	var job_idx = idx;
	jobs.push(function (context) {
		var idx = job_idx;
		console.log(obj_type + ' : ' + idx );
				var deferred = jQuery.Deferred();

		context['MAIN_KEY']=main_key;

		var item_status = (opts['status']) ? opts['status'] : 'finish';

		fa.addSubItemKey('ea:subj:');

		var tmp;
		tmp = fa.createFieldModel('dc:title:', title);
		tmp = fa.createFieldModel('ea:obj-type:', obj_type);
		tmp = fa.createFieldModel('ea:status:', item_status);
		tmp = fa.createFieldModel('ea:test:key1', main_key);


		addRelations(fa,relations);
		addAttributes(fa,attributes);

		if (opts['expression']){
			var expressions = jQuery.isArray(opts['expression']) ? opts['expression'] : [opts['expression']];
			for (var idx in expressions) {
				addRelation(fa, 'ea:expression:tmp', expressions[idx]);
			}
		}
		if (opts['manifestation']){
			var manifestations = jQuery.isArray(opts['manifestation']) ? opts['manifestation'] : [opts['manifestation']];
			for (var idx in manifestations) {
				addRelation(fa, 'ea:manifestation:tmp', manifestations[idx]);
			}
		}


		if (opts['publication']){
			var publications = jQuery.isArray(opts['publication']) ? opts['publication'] : [opts['publication']];
			for (var idx in publications) {
				var publication = publications[idx];
				var publisher =publication['publisher']?publication['publisher']:null;
				var pubplace = publication['pubplace']?publication['pubplace']:null;
				var year = publication['year']?publication['year']:null;
				var year_comment = publication['year_comment']?publication['year_comment']:null;
				addPublication(fa,publisher,pubplace,year,year_comment);
			}

		}


		if (opts['subjects']){
			var chains = opts['subjects'];
			for (var chain in chains){
				addSubject(fa,chain, chains[chain]);
			}
		}


		if (opts['edit_fn']){
			var fn =opts['edit_fn'];
			fn(fa,context);
		};


		//fa.generate();
		fa.removeOrphanModels();
		var vstatus = fa.validate();
		if (vstatus != 'valid') {
			consoleRed(vstatus);
		}

		consoleDumpFMA(fa);



		var thenfn = function (data) {
			//console.log("createItem jobs finish");
			console.log(JSON.stringify(data));

			//consoleMagenta('EDIT_URLPATH_' + main_key);
			//context['EDIT_URLPATH_' + main_key] = '/prepo/edit_step1?i=' + data['item_id'];

			context[main_key] = data;
			deferred.resolve("OK");
		};

		if (!subItemFlag) {
			var item_context={};
			var item_jobs = [];
			var msgContext = fa.getMessageContext();
			if (msgContext.hasMessages()) {
				msgContext.consoleDump();
			}

			var sc=0;
			var subitems_keys = fa.subitems_keys;
			for (var j in subitems_keys) {
				//consoleYellow(j);
				var smodels = fa.getFieldModels(j, null);
				for (i in smodels) {
					var s = smodels[i];
					//console.log("item_jobs: PROMISE_PUSH:" + s.key());
					var s_key = null;
					var sdata = s.data();
					if (sdata && sdata['test_key'] ){
						s_key = sdata['test_key'];
					}
					item_jobs = item_jobs.concat(fa.remoteCreateSubItemJobs(s, {
						'successHandler':function(data){
							if (! s_key){
								sc+=1;
								s_key = main_key + '@' + sc;
							}

							//consoleMagenta('EDIT_URLPATH_' + s_key);
							//context['EDIT_URLPATH_' + s_key] = '/prepo/edit_step1?i=' + data['item_id'];
							context[s_key] = data;
							console.log("SUB_ITEM CREATED: " + s_key + ' : ' + JSON.stringify(data) );
						},
						'convert_root_to_title': true,
						'set_refitem_to_root': true,
					}));
				}
			}

				item_jobs.push(function(){
					//console.log('createItem job final create');
					createItem(fa).then(thenfn);
				});

				var jc=0;
				var item_sequence = jQuery.Deferred.Sequence(item_jobs);
				item_sequence.reduce(function (fn) {
					if (fn) {
						jc+=1;
						console.log("EXECUTE createItem job: " + jc);
						return jQuery.when(fn(item_context));
					}
				});

		} else {
		  createSubItem(fa).then(thenfn);
		}

		return deferred;
	});


}




// rg.addJob(function(context) {
// 	tmp = fc.getFieldModelOrCreate('ea:auth:NotePublic');
// 	tmp.value('PUBLIC NOTE ##1');
//
// 	var subject_keys = ['CONCEPT31', 'CONCEPT32'];
// 	addSubject(fc, 'CHAIN4', subject_keys, context);
// });

/**
 *
 * @param {*} attributes
 */
rg.addAttributes = function(attributes) {
	rg.addJob(function (context) {
		for (var k in attributes){
			var value = attributes[k];
			var tmp;
			if (jQuery.isArray(value)){
				for (var idx in value){
					tmp = fc.createFieldModel(k);
					tmp.value(value[idx]);
				}
			} else {
				tmp = fc.createFieldModel(k);
				tmp.value(value);
			}
    }
	});
}

/**
 * @param key
 * @param value
 */
rg.addAttribute = function(key, value) {
	rg.addJob(function (context) {
		var tmp = fc.createFieldModel(key);
		tmp.value(value);
	});
}


/**
 *
 * @param {FieldModelAccessor} fa
 * @param element
 * @param context_key
 * @returns {FieldModel}
 */

rg.addRelation = function(element,context_key,parentId) {
	rg.addJob(function (context) {
		addRelation(fc,element,context_key,parentId);
	});
}

/**
 *
 * @param key
 * @param value
 */
rg.setAttribute = function(key, value) {
	rg.addJob(function (context) {
		var tmp = fc.getFieldModelOrCreate(key);
		tmp.value(value);
	});
}

rg.addSubject = function(chainName,subject_keys) {
	rg.addJob(function (context) {
		addSubject(fc, chainName, subject_keys, context);
	});
}
















//########################################################################################################################################
// INITIALIZE TESTING
//########################################################################################################################################
fc.populateData();
//var context = {};
var jobs = [];