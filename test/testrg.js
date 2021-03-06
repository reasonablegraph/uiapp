//VERSION:1.1

const sh = require('shelljs');
const hs = require('handlebars');
const fs = require('fs');
const Hjson = require('hjson');
// const objectAssign = require('object-assign');
const chalk = require('chalk');
const process = require('process');
const merge = require('deepmerge');
const syncSql = require('sync-sql');
const escapeSQL = require('pg-escape');
const path = require('path');
const vm=require('vm');//LOAD CONFIG
//const _ = require('lodash');


var BASE_PATH = '/opt/ins/dev/jsproject/';
var TESTRG_TESTING_PATH = path.normalize(BASE_PATH + '/test/');
var PHANTOM_PATH = path.normalize(BASE_PATH + '/node_modules/phantomjs/');
var PHANTOM_BIN = path.normalize(PHANTOM_PATH + '/bin/phantomjs');
var PHANTOM_ARGS = '';
//var PHANTOM_ARGS= '--debug=true';
var NODEJS_BIN = 'nodejs';
var NODEJS_ARGS = '';
//var URL_PREFIX="http://laravel.local/";
var CONTEXT_FILE_tn_prefix = "/tmp/context.";
var CONTEXT_FILE = "/tmp/context.json";
var LARAVE_TEST_LOG = "/tmp/laravel-test.log";
var context = {};
var exec_tests = [];
var context_testrg = {};

var PHANTOM_SCRIPT = path.normalize(TESTRG_TESTING_PATH + "/testrg-phantom.js");
var PHPUNIT_CMD = "/laravel_phpunit";
var PHPUNIT_ARGS = '';
var ARTISAN_CMD = '/laravel_artisan';
var ARTISAN_DEFAULT_ARGS = '';
var executePHPUnitFlag = false;
var test_exec_counter = 0;

var args_all = require('minimist')(process.argv.slice(2), {'boolean': true});
var args = args_all['_'];
//console.log(args_all);process.exit(1);



if (args_all['help']) {
	console.log('testrg  test-name');
	console.log('        --list : list test-case');
	console.log('        --dump-config');
	console.log('        --dump-test');
	console.log('        --list-context [key1] [key2] [key...]');
	console.log('        --list-context-ext [key1] [key2] [key...]');
	console.log('        --dump-context [key1] [key2] [key...]');
	console.log('        --laravel : trait test as laravel phpunit');
	console.log('        --from=[integer]');
	console.log('        --to=[integer]');
	console.log('        --write-context-per-phantom-test=false/true');
	console.log('        --skip-rm-initial-context');
	console.log('        --skip-validation');
	console.log('        --stop-on-failure=false/true');
	console.log('        --exit-on-failure=true/false');
	console.log('        --skip-delete-test-vertices');
	console.log('        --skip-check-neigborhood');
	console.log('        --no-clear');
	console.log('        --create-validation-data-file   validation_key');
	console.log('        --create-validation-data');



	process.exit(0);
}
var toArg = args_all['to'] == undefined ? 4000 : args_all['to'];
var fromArg = args_all['from'] == undefined ? 0 : args_all['from'];
var dumpContextFlag = args_all['dump-context'];
var listContextFlag = args_all['list-context'];
var listContextExtFlag = args_all['list-context-ext'];
var listFlag = args_all['list'];
var clearFlag = args_all['clear'] === undefined || args_all['clear'];
var dumpDeclarationFlag = args_all['dump-test'];
var createValidationDataFlag = args_all['create-validation-data'];
var createValidationDataFileFlag = args_all['create-validation-data-file'];
var phpunitFlag = args_all['laravel'];
var skipRMInitialContextFlag = args_all['skip-rm-initial-context'];
var skipValidation = args_all['skip-validation'];
var stopOnFailure = false;
var exitOnFailureFlag = true;
var skipDeleteTestVerticesFlag = args_all['skip-delete-test-vertices'] === undefined ? false : args_all['skip-delete-test-vertices'];
var skipCheckNeigborhoodFlag = args_all['skip-check-neigborhood'] === undefined ? false : args_all['skip-check-neigborhood'];
var dumpConfigFlag = args_all['dump-config'];
var write_context_per_phantom_testFlag = args_all['write-context-per-phantom-test'];

if (args_all['stop-on-failure'] !== undefined) {
	stopOnFailure = (args_all['stop-on-failure'] == 'true');
}
if (args_all['exit-on-failure'] !== undefined) {
	exitOnFailureFlag = (args_all['exit-on-failure'] == 'true');
}
var PWD = sh.pwd();
sh.cd(TESTRG_TESTING_PATH);
//////////////////////////////////////////////////////////////////////////////////////
// var hjsonText = fs.readFileSync('testrg.hjson.js', 'utf8');
// var config = Hjson.parse(hjsonText);
//console.log(config);

dataContext = {
	// fs : fs,
	// path: path,
	// Handlebars : hs,
	// process : process,
	// _:_,
};

vm.runInNewContext(fs.readFileSync('etc/testrg.cf.js'), dataContext);
var config = dataContext['conf'];
vm.runInNewContext(fs.readFileSync('etc/testrg.tests.cf.js'), dataContext);
var tmp = dataContext['tests'];
config['tests']=tmp;
if (dumpConfigFlag){
	console.log(JSON.stringify(config, null, 2));
	process.exit(0);
}
//////////////////////////////////////////////////////////////////////////////////////

var getContext = function (args) {
	if (args === undefined) {
		return context;
	}
	arg_param = args[0];
	var context  = JSON.parse(fs.readFileSync(CONTEXT_FILE));
	var len =args.length;
	if (args.length > 0){
		var c1 = context;
		for (var i = 0; i < len; i++) {
				if (c1) {
					var p = args[i];
					c1 = c1[p];
				}
			}
		context = c1;
	}
	return context;
};

var isArray = function(a) {
	return (!!a) && (a.constructor === Array);
};

var isObject = function(a) {
    return (!!a) && (a.constructor === Object);
};

var dumpContext = function (args) {
	console.log(JSON.stringify(getContext(args), null, 2));
};


if (dumpContextFlag){
	dumpContext(args);
	process.exit(0);
}

if (listContextFlag){
	var context=getContext(args);
	//if (isObject(context) ) {
	if (isArray(context) || isObject(context) ) {
		for (var k in context) {
				console.log(k);
		}
	} else {
		console.log('VALUE: ' + JSON.stringify(context));
	}
	process.exit(0);
}

if (listContextExtFlag){
	var context=getContext(args);
	if (isArray(context) || isObject(context) ) {
		var tmp;
		for (var k in context) {
			console.log(k);
			tmp = context[k];
			if (isArray(tmp) || isObject(tmp)) {
				for (var k1 in tmp) {
					console.log('  ↳ ' + k1);
				}
			}
			// else {
			// 	console.log('  : '  + tmp);
			// }
		}
	} else {
		console.log('VALUE: ' + JSON.stringify(context));
	}
	process.exit(0);
}


var show_cases_list = function ($list_all) {

	var f1 = function(ctc,prefix){
		prefix = (prefix == undefined) ? '':prefix;
		for (var tcn in ctc) {
			var tc_params = ctc[tcn];
			if (tc_params && tc_params['info']) {
				console.log(prefix + ' '+ tcn, ' : ', tc_params['info']);
			} else {
				console.log(prefix + ' ' + tcn);
			}
		}
	};
	console.log("testSuites:");
	f1(config['testSuites'],'S:');
	console.log("");
	console.log("testCases:");
	f1(config['testCases'],'C:');

	if ($list_all !== undefined && $list_all) {
		console.log("");
		console.log("tests:");
		f1(config['tests'],'T:');
	}
};
if (listFlag) {
	show_cases_list(true);
	process.exit(0);
}


if (args.length == 0) {
	if (createValidationDataFileFlag) {
		console.log("ERROR: validation_key required");
		process.exit(1);
	}
	console.log("ERROR: testSuite/testCase/testName required");
	console.log("try:  testrg --help");
	console.log("");
	show_cases_list(false);
	console.log("");
	process.exit(1);
}



if (clearFlag && !dumpDeclarationFlag) {
	sh.exec('clear');
}
//#######################################################################################3
//#######################################################################################3
//#######################################################################################3
//#######################################################################################3
//#######################################################################################3

var consoleRed = function (str) {
	console.log('\u001b[31m' + str + '\u001b[39m');
};
var consoleGreen = function (str) {
	console.log('\u001b[32m' + str + '\u001b[39m');
};
var consoleYellow = function (str) {
	console.log('\u001b[33m' + str + '\u001b[39m');
};
var consoleBlue = function (str) {
	console.log('\u001b[34m' + str + '\u001b[39m');
};
var consoleMagenta = function (str) {
	console.log('\u001b[35m' + str + '\u001b[39m');
};



var getTestFile = function (test_name) {
	//console.log("getTestFile " + test_name);
	var test_config = (config['tests'][test_name]) ? config['tests'][test_name] : {};

	var test_path = (test_config['path']) ? test_config['path'] : '';
	var test_base_file_name = (test_config['file']) ? test_config['file'] : test_name;
	var method = (test_config['method']) ? test_config['method'] : 'phantom';
	if (phpunitFlag) {
		method = 'phpunit';
	}

	//var testing_path =
	var tests_path = null;
	var extension = null;
	if (method == 'phpunit') {
		tests_path = PHPUNIT_BASE_PATH;
		extension = '';
	} else {
		tests_path = TESTRG_TESTING_PATH + '/tests/';
		extension = ".js";
	}


	var test_file = path.normalize(hs.compile("{{TESTS_PATH}}/{{TPATH}}/{{TNAME}}{{EXTENSION}}")({
		'TESTS_PATH': tests_path,
		'TPATH': test_path,
		'TNAME': test_base_file_name,
		'EXTENSION': extension
	}));

	if (method == 'phantom' || method == 'native') {
		if (!sh.test('-f', test_file)) {
			console.log("ERROR: " + test_file + ' NOT FOUND');
			process.exit(1);
		}
	}

	return {'name': test_name, 'file': test_file, 'method': method, 'conf': test_config};
};

var getTestFiles = function (test_index,test_name) {
	//console.log("getTestFiles: "  + test_name);
	var tc_arr;
	var tcs = config['testCases'];
	for (var tc in tcs) {
		if (test_name == tc) {
			var test_case_config = tcs[tc];
			if (test_case_config['context'] !== undefined) {
				var init_context = test_case_config['context'];
				for (var k in init_context) {
					context[k] = init_context[k];
				}
			}
			if (test_case_config['tests']) {
				tc_arr = test_case_config['tests'];
			} else {
				tc_arr = test_case_config;
			}
		}
	}

	rep = [];
	if (tc_arr) {
		consoleGreen("########################################################################################################");
		if (test_index != null){
			consoleGreen("# TEST CASE  : " + test_index + ' : ' + test_name);
		} else {
			consoleGreen("# TEST CASE  : " + test_name);
		}
		consoleGreen("########################################################################################################");

		for (var idx in tc_arr) {
			//rep.push(getTestFile(tc_arr[t]));
			var test_name = tc_arr[idx];
			rep.push(getTestFile(test_name));
		}
		return rep;
	}

	rep.push(getTestFile(test_name));
	return rep;
};


//#######################################################################################
//#######################################################################################
var getValidationDataFileName = function (vdn) {
	if (vdn == null || vdn == '') {
		return null
	}
	var validation_conf_file = './validation/' + vdn + '.json';
	return validation_conf_file;
};

var createValidationData = function (validation_conf_file) {
	if (sh.test('-f', validation_conf_file)) {
		sh.cp(validation_conf_file, validation_conf_file + '.bak');
	}
	var cmd = hs.compile("psql -q -t -f ./sql/conf.sql {{ARC_DB}} > {{VALIDATION_CONF_FILE}}")({
		'ARC_DB': process.env.PGDATABASE,
		'VALIDATION_CONF_FILE': validation_conf_file
	});
	if (sh.exec(cmd).code !== 0) {
		consoleRed('Error: canot create validation data ' + validation_conf_file + ' FAIL');
		return 'error';
	}
	consoleGreen("VALIDATION CONF DATA CREATED: " + validation_conf_file);
	return 'ok';
};


//#######################################################################################
//#######################################################################################
//#######################################################################################
//#######################################################################################
//#######################################################################################

var executePhpUnitTest = function (tn, tf, test_config) {
	if (skipValidation) {
		consoleMagenta("SKIP phpunit-test: " + tn);
		return 'ok';
	}
	executeArtisanCommand("logging:log", '--color=green ' + '"######################################################################################################"');
	executeArtisanCommand("logging:log", '--color=green ' + '"phpunit-test:' + tn + '"');
	executeArtisanCommand("logging:log", '--color=green ' + '"######################################################################################################"');

	var vdn = null;
	var validation_conf_file = null;
	if (test_config['validationData'] && config['validation-data']) {
		vdn = test_config['validationData'];
		validation_conf_file = getValidationDataFileName(vdn);
	}

	if (createValidationDataFlag && validation_conf_file != null) {
		return createValidationData(validation_conf_file);
	}

	if (vdn != null) {
		var validation_json = null;
		if (sh.test('-f', validation_conf_file)) {
			var validation_txt = fs.readFileSync(validation_conf_file, 'utf8');
			validation_json = Hjson.parse(validation_txt);
			var validation_version = validation_json['validation-version'] ? validation_json['validation-version'] : 0;
			context['validation_version'] = validation_version;
			consoleGreen("VALIDATION FILE FOUND:[ " + validation_conf_file + " ]  VALIDATION KEY:[ " + vdn + ' ]');
		}
		if (!validation_json) {
			consoleRed("ERROR: canot find validation for " + vdn + "  : " + validation_conf_file + ' MISSING');
			process.exit(2);
		}
		var final_validation_data = validation_json;
		var conf_validation_data = config['validation-data'];
		var vrules = config['validation-data'][vdn];
		if (vrules) {
			final_validation_data = merge(validation_json, vrules);
		}
		context['validation_data'] = final_validation_data;
	}

	context['PHPUNIT_STOP_ON_FAILURE'] = stopOnFailure;
	context['PHPUNIT_SKIP_NEIGBORHOOD'] = skipCheckNeigborhoodFlag;
	fs.writeFileSync(CONTEXT_FILE, JSON.stringify(context) + '\n');
	executePHPUnitFlag = true;
	var cmd = '"' + PHPUNIT_CMD + '"' + ' ' + PHPUNIT_ARGS + ' ' + '"' + tf + '"';
	console.log(cmd);
	if (sh.exec(cmd).code !== 0) {
		consoleRed('Error: TEST ' + tn + ' (' + tf + ') FAIL');
		return 'error';
	}
	return 'ok';
};


var executeArtisanCommand = function (artisan_command_name, artisan_args) {
	var cmd = '"' + ARTISAN_CMD + '"' + ' ' + ARTISAN_DEFAULT_ARGS + ' ' + '"' + artisan_command_name + '"';
	if (artisan_args) {
		cmd += ( ' ' + artisan_args);
	}
	//console.log(cmd);
	if (sh.exec(cmd).code !== 0) {
		console.log('Error: ARTISAN ' + artisan_command_name + ' FAIL');
		process.exit(1);
	}
	return 'ok';
};


var executePhantomTest = function (tn, tf, test_config) {

	executeArtisanCommand("logging:log", '--color=green ' + '"######################################################################################################"');
	executeArtisanCommand("logging:log", '--color=green ' + '"phantom-test:' + tn + '"');
	executeArtisanCommand("logging:log", '--color=green ' + '"######################################################################################################"');

	let urlPathVarName = 'PATH_' + tn;
	if (test_config['urlPathVarName'] !== undefined) {
		urlPathVarName = test_config['urlPathVarName'];
	}

	let test_path = '';
	let urlPath = null;
	if (test_config['urlPath'] !== undefined) {
		urlPath = test_config['urlPath'];
	}
	if (context[urlPathVarName] !== undefined) {
		urlPath = context[urlPathVarName];
	}


	let getItemIdFromTestKey1 =function(key){
		let SQL = escapeSQL('SELECT item_id from dsd.metadatavalue2 where  element = %L AND text_value = %L', 'ea:test:key1', key);
		//consoleMagenta(SQL);
		let res = syncSql.pgsql({
				database: process.env.PGDATABASE,
			},
			SQL
		);
		if (res['success']) {
			//console.log(res);
			if (res['data']['rowCount'] == 0) {
				let err_msg = "ERROR canot find phantomEditKey: " + key;
				consoleRed(err_msg);
				throw err_msg;
			}
			if (res['data']['rowCount'] > 1) {
				let err_msg = "ERROR  MANY phantomEditKeys: " + key;
				consoleRed(err_msg);
				throw err_msg;
			}
			return res['data']['rows'][0]['item_id'];
		}
	};

	if (test_config['phantomNewObjectType'] !== undefined) {
		let phantomNewOT = test_config['phantomNewObjectType'];
		urlPath = '/prepo/edit_step1?br=2&sf=1&rd=' + phantomNewOT;
	}

	if (test_config['phantomEditKey'] !== undefined) {
		let phantomEditKey = test_config['phantomEditKey'];
		//   /prepo/edit_step1?i=
		let edit_item_id = null;
		if (context[phantomEditKey]) {
			let edit_data = context[phantomEditKey];
			edit_item_id = (edit_data['item_id']) ? edit_data['item_id'] : null;
			console.log("phantomEditKey: " + phantomEditKey + ' FOUND ON CONTEXT : ' + edit_item_id);
		}
		if (!edit_item_id) {
				edit_item_id = getItemIdFromTestKey1();
				console.log("phantomEditKey: " + phantomEditKey + ' FOUND ON DB: ' + edit_item_id);
		}
		if (!edit_item_id) {
			let err_msg = "ERROR canot find phantomEditKey: " + phantomEditKey;
			throw err_msg;
		}
		urlPath = '/prepo/edit_step1?sf=1&i=' + edit_item_id;
	}


	if (!urlPath) {
		urlPath = URL_PATH;
	}

	if (context['INIT_URLPATH']){
		urlPath = context['INIT_URLPATH'];
		context['TEST_INIT_URLPATH'] = urlPath;
		context['INIT_URLPATH'] = null;
	}

	context['TEST_NAME', tn];
	exec_tests.push({'name': tn, 'url': urlPath});

	let url = URL_PREFIX + urlPath;

	// let heapdump = require('heapdump');
	// heapdump.writeSnapshot('/tmp/context-' + Date.now() + '.heapsnapshot');

	let final_context = Object.assign(context, {'TESTRG_URL': url});
	context = final_context;
	fs.writeFileSync(CONTEXT_FILE, JSON.stringify(context) + '\n');
	//sh.exec("cp " + CONTEXT_FILE + " " + CONTEXT_FILE + "." + Date.now());

	//console.log("phantom test: " + tf);
	//let cmd  = '"' + PHANTOM_BIN + '"' + ' ' + PHANTOM_ARGS + ' ' + '"' + PHANTOM_SCRIPT + '"' + ' ' + '"' + url + '"' + ' ' + '"' + tf + '"';
	let cmd = '"' + PHANTOM_BIN + '"' + ' ' + PHANTOM_ARGS + ' ' + '"' + PHANTOM_SCRIPT + '"' + ' ' + '"' + tf + '"';
	if (sh.exec(cmd).code !== 0) {
		console.log('Error: TEST ' + tn + ' (' + tf + '} FAIL');
		process.exit(1);
	}

	return 'ok';
};

var finalMessage = function (status) {
	consoleGreen("######################################################################################################");
	if (status == 'error') {
		consoleRed("# final status: ERROR");
	} else {
		consoleGreen("# final status : OK");
	}
	console.log("# final context: /tmp/testrg.log");
//	console.log("# final context: /tmp/context.log.json");
	if (executePHPUnitFlag) {
		console.log("# final laravel-log: /tmp/laravel-test.log");
	}
	consoleGreen("######################################################################################################");
};


var testDBForContextKeys = function(){
	var SQL = escapeSQL("SELECT text_value as KEY_VALUE ,count(*) from dsd.metadatavalue2 where element='ea:test:key1' group by 1 HAVING count(*) >1");
	var res = syncSql.pgsql({
			database: process.env.PGDATABASE,
		},
		SQL
	);
	var okFlag = false;
	if (res['success']) {
		okFlag = (res['data']['rows'].length == 0);
	}
	if (!okFlag) {
		consoleRed("ERROR NOT UINQUE KEY:  ea:test:key1");
		consoleRed(JSON.stringify(res['data']['rows']));
		console.log(res['data']['rows'].length);
		 finalMessage('error');
		 process.exit(1);
	}

	SQL = escapeSQL(`
	WITH TITEMS1 AS (
		SELECT
		i.item_id,
		i.obj_type,
		i.label,
		--i.jdata,
		--i.title,
		v.text_value AS key
	FROM dsd.item2 i
	JOIN dsd.metadatavalue2 v ON (i.item_id = v.item_id)
	WHERE v.element = 'ea:test:key1' ORDER BY v.text_value
	) 
	SELECT * FROM TITEMS1;  
`);
	res = syncSql.pgsql({
			database: process.env.PGDATABASE,
		},
		SQL
	);
	if (!res['success']) {
		consoleRed("CANOT SYNC DB TEST VERTICES WITH CONTEXT");
	} else {
		var rows = res['data']['rows'];
		for (var i in rows){
			var row=rows[i];
			var key = row['key'];
			if (context[key]){
				if (context[key]['ot'] != row['obj_type'] || context[key]['item_id'] != row['item_id']){
					consoleRed('DB VERTEX DIFER WITH CONTEXT VERTEΧ FOR : ' + key);
					console.log(context[key]);
					console.log(row);
				}
			}
			context[key]={'item_id':row['item_id'], 'ot':row['obj_type'],'label':row['label']};
		}
	}
};



var dumpTest = function(i,tc){
	var tests = getTestFiles(i,tc);
	var decl;
	var idx=0;
	for (j in tests){
		idx+=1;
		test_exec_counter+=1;
		decl=tests[j];
		// var file = null;
		// if (decl['method'] == 'phantom') {
		// 	var path = decl['conf']['path'];
		// 	var file = decl['conf']['file'];
		// 	if (path) {
		// 		file = path + '/' + file;
		// 	}
		// 	file = '   ' + file;
		// }

		consoleGreen(''+ test_exec_counter + ' (' + idx + ')  : ' + decl['name']);
		console.log(JSON.stringify(decl,null,2));
		console.log("##########################################################################################################");
	}
};


var executeTest = function (test_index, test_name) {
	if (dumpDeclarationFlag){
		dumpTest(test_index,test_name);
		return true;
	}


	if (! skipDeleteTestVerticesFlag ){
		executeArtisanCommand('testrg:deleteTestVertices');
	}

	//var tests = getTestFiles(ARG_TEST_NAME);
	let tests = getTestFiles(test_index,test_name);
//console.log(tests);

	let phpunit_has_failures = false;
	let exec_status = 'ok';

	let display_idx =0;
	let idx = 0;
	for (let tn1 in tests) {
		//testDBForContextKeys();
		let tfmap = tests[tn1];
		idx += 1;
		test_exec_counter += 1;

		if (!(test_exec_counter >= fromArg && test_exec_counter <= toArg)) {
			consoleRed("SKIP TEST: " + test_exec_counter);
			continue;
		}

		let tn = tfmap['name'];
		let tf = tfmap['file'];
		let method = tfmap['method'];
		let conf = tfmap['conf'];
		if (conf['context']) {
			context = Object.assign(context, conf['context']);
		}
		let context_phantom = {};

		if (method == 'eval') {
			consoleGreen("######################################################################################################");
			consoleGreen("# EVAL TEST: " + test_exec_counter + ' : ' + tn);
			consoleGreen("######################################################################################################");
			let code = fs.readFileSync(tf, {'encoding': 'utf-8'});
			eval(code);
		} else if (method == 'phpunit') {
			consoleGreen("######################################################################################################");
			consoleGreen("# PHPUNIT TEST: " + test_exec_counter + ' : ' + tn);
			consoleGreen("######################################################################################################");
			let php_exec_status = executePhpUnitTest(tn, tf, conf);
			if (php_exec_status == 'error') {
				exec_status = 'error';
			}
			context_phantom = JSON.parse(fs.readFileSync(CONTEXT_FILE));
			let tmp = Object.assign(context, context_phantom);
			//for (k in context){if (!context[k]){ consoleRed('DELETE '+ k);delete context[k]; } }
			context = tmp;
			let failures = context['PHPUNIT_FAILURES'];
			let has_failures = false;
			if (failures && failures.length > 0) {
				exec_status = 'error';
				has_failures = true;
				consoleRed('PHPUNIT HAS ' + failures.length + ' FAILURES: ');
				consoleRed("######################################################################################################");
				phpunit_has_failures = true;
				firstFlag = true;
				let c = 0;
				for (let idx in failures) {
					c += 1;
					let failure = failures[idx];
					let message = failure['msg'];
					//	if (!firstFlag) { console.log("");}
					console.log('\u001b[31m' + c + ':' + '\u001b[39m' + ' ' + message);
					firstFlag = false;
				}
				consoleRed("######################################################################################################");
			}
			if (php_exec_status == 'error' || has_failures) {
				finalMessage('error');
				if (exitOnFailureFlag) {
					process.exit(1);
				} else {
					console.log('exit-on-failure=false continue');
				}
			}

		} else {
			consoleGreen("######################################################################################################");
			consoleGreen("# REMOTE TEST: " + test_exec_counter + ' : ' + tn);
			consoleGreen("######################################################################################################");
			executePhantomTest(tn, tf, conf);
			context_phantom = JSON.parse(fs.readFileSync(CONTEXT_FILE));

			// elegxos gia timeout
			if (context_phantom['TESTRG_TIMEOUT'] === true) {
				let e = context_phantom['TESTRG_TIMEOUT_ERROR'];
				consoleYellow("TIMEOUT CONFIRMED for url: " + e.url + " with errorCode: " + e.errorCode + " and errorString: " + e.errorString);
				// handle timeout, epistrefoume false wste na 3anatre3i olo to test-case
				return false;
			}

			let tmp = Object.assign(context, context_phantom);
			context = tmp;
			for (k in context) {
				if (!context[k]) {
					delete context[k];
				}
			}
		}
		//context_testrg[tn] = context_phantom;
		if (write_context_per_phantom_testFlag) {
			fs.writeFileSync(CONTEXT_FILE_tn_prefix + '_' + tn + '.json', JSON.stringify(context_phantom) + '\n');
		}
		context['testrg'] = context_testrg;
		testDBForContextKeys();
	}


	context_testrg['exec_tests'] = exec_tests;
	context_testrg['TEST-EXECUTED-COUNT:'] = idx;
	context['testrg'] = context_testrg;


	fs.writeFileSync(CONTEXT_FILE, JSON.stringify(context) + '\n');


//dumpContext();
//	fs.writeFileSync('/tmp/context.log.json', JSON.stringify(context, null, 2));

	if (phpunit_has_failures || exec_status == 'error') {
		finalMessage('error');
		process.exit(1);
	} else {
		finalMessage('ok');
	}

	return true;
};

var initCleanContext = function(init_context){
	sh.rm('-f', CONTEXT_FILE);
	sh.rm('-f', LARAVE_TEST_LOG);
	if (init_context !== undefined && init_context != null){
		context= init_context;
	} else {
		context = {};
	}
	fs.writeFileSync(CONTEXT_FILE, JSON.stringify(context) + '\n');

};



var initDB = function(){

	var ok = false;
	var SQL = escapeSQL(`
		SELECT count(*) FROM dsd.testrg_version WHERE version >= 1;
	`);
	res = syncSql.pgsql({
			database: process.env.PGDATABASE,
		},
		SQL
	);
	if (!res['success']) {
		ok = false;
	} else {
		var count = res['data']['rows'][0]['count'];
		ok = (count > 0);
	}
	if (!ok){
		var cmd = hs.compile("psql -f ./sql/src.sql {{ARC_DB}}")({'ARC_DB': process.env.PGDATABASE});
		var ret = sh.exec(cmd);
		console.log(ret);
		if (ret.code !== 0) {
			consoleRed('Error: canot apply ./sql/src.sql to DB FAIL');
			process.exit();
		}
	}
};

//#######################################################################################3
//#######################################################################################3
//#######################################################################################3
//#######################################################################################3
//#######################################################################################3

initDB();

sh.exec('echo "... --- ... ... --- ..." >  /data/www/laravel/archive/app/storage/logs/laravel.log');




ARG_TEST_NAME = args[0];
if (createValidationDataFileFlag) {
	var vdn = ARG_TEST_NAME;
	var validation_data_file = getValidationDataFileName(vdn);
	var rep = createValidationData(validation_data_file);
	if (rep == 'ok') {
		process.exit(0);
	} else {
		process.exit(1);
	}
}

//console.log("TEST_NAME: " + ARG_TEST_NAME);

PHPUNIT_BASE_PATH = config['conf']['phpunit_base_path'];
URL_PREFIX = config['conf']['testUrlPrefix'];
URL_PATH = config['conf']['testUrlPath'];


var suite_context = null;
var tc_arr = null;
var tss = config['testSuites'];
for (var ts in tss) {
	if (ARG_TEST_NAME == ts) {
		var test_suite_config = tss[ts];
		if (test_suite_config['context'] !== undefined) {
			suite_context = test_suite_config['context'];
		}
		if (test_suite_config['testCases']) {
			tc_arr = test_suite_config['testCases'];
		} else {
			tc_arr = test_suite_config;
		}
	}
}


if (skipRMInitialContextFlag) {
	context = JSON.parse(fs.readFileSync(CONTEXT_FILE));
} else {
	initCleanContext(suite_context);
}



if (tc_arr != null) {
	consoleGreen("##########################################################################################################");
	consoleGreen("# TEST SUITE: " + ARG_TEST_NAME);
	consoleGreen("##########################################################################################################");

	var c = 1;

	for (var i = 0; i < tc_arr.length; i++) {
		if (! dumpDeclarationFlag && c > 1) {
			initCleanContext(suite_context);
		}
		var tc = tc_arr[i];
		var exec_status = executeTest(c, tc);

		// handle failure as restart testCase
		if (!exec_status) {
			consoleRed("execution status for: " + tc + " returned false, rerunning test case ...");
			i = i - 1;
		} else {
			c += 1;
		}
	}

} else {
	// tc_arr = [ARG_TEST_NAME];
	var exec_status = false;

	while (!exec_status) {
		exec_status = executeTest(null, ARG_TEST_NAME);
		if (!exec_status) {
			consoleRed("execution status for: " + ARG_TEST_NAME + " returned false, rerunning test ...");
		}
	}
}

process.exit(0);