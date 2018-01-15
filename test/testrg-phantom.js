/*global phantom:true*/

'use strict';

var TEST_TIMEOUT=88000; //68 sec

var http_headers = {
	'X-Drupal-Username': 'admin',
	'X-Drupal-Uid': '1',
	'X-Drupal-Access': 'admin',
	'X-DRUPAL-LANG' : 'en',
	'X-ARCFE' : 'testrg'
}

var fs = require('fs');


console.log('start');



var system = require('system');
var args = system.args;

if (args.length === 1) {
	console.log('ERROR: test name required');
  phantom.exit();
}
//var url = args[1];
var testFile = args[1];

var consoleRed =function(str) {
	console.log('\u001b[31m' + str + '\u001b[39m');
}
var consoleGreen =function(str) {
	console.log('\u001b[32m' + str + '\u001b[39m');
}
var consoleYellow =function(str) {
	console.log('\u001b[33m' + str + '\u001b[39m');
}
var consoleBlue =function(str) {
	console.log('\u001b[34m' + str + '\u001b[39m');
}
var consoleMagenta =function(str) {
	console.log('\u001b[35m' + str + '\u001b[39m');
}



var context_file_in = '/tmp/context.json';
var context_file_out = '/tmp/context.json';
//var context_file_out = '/tmp/context_phantom.json';
var context = {};

var saveContext = function(context) {
	 // console.log("SAVE CONTEXT: " + context_file_out);
	 // console.log(JSON.stringify(context));
	fs.write(context_file_out, JSON.stringify(context) + '\n');
};

if(fs.isFile(context_file_in)) {
 //console.log("PHANTOM READ CONTEXT");
 	var content = fs.read(context_file_in);
  //console.log(content);
 	context=JSON.parse(content);
  //console.log(JSON.stringify(context));
}


if (!context['TESTRG_URL']){
	console.log("ERROR: CANOT FIND URL IN CONTEXT");
	phantom.exit();
}
var url = context['TESTRG_URL'];
//console.log(' url: ',url);
console.log('test: ',testFile);


function waitFor(testFx, onReady, timeOutMillis) {
	var maxtimeOutMillis = timeOutMillis ? timeOutMillis : TEST_TIMEOUT,
		start = new Date().getTime(),
		condition = false,
		interval = setInterval(function() {
			if ( (new Date().getTime() - start < maxtimeOutMillis) && !condition ) {
				// If not time-out yet and condition not yet fulfilled
				condition = (typeof(testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
			} else {
				if(!condition) {
					// If condition still not fulfilled (timeout but condition is 'false')
					consoleRed("'waitFor()' timeout: " + maxtimeOutMillis + " reached");
					phantom.exit(1);
				} else {
					// Condition fulfilled (timeout and/or condition is 'true')
					consoleGreen("'waitFor()' finished in " + (new Date().getTime() - start) + "ms.");
					typeof(onReady) === "string" ? eval(onReady) : onReady(); //< Do what it's supposed to do once the condition is fulfilled
					clearInterval(interval); //< Stop this interval
				}
			}
		}, 250); //< repeat check every 250ms
};



var page = require('webpage').create();
page.customHeaders = http_headers;


var urlChangeFlag = false;
page.onUrlChanged = function(targetUrl) {
	//console.log('URL CHANGE: ' + targetUrl);
	if (targetUrl != url && targetUrl != 'about:blank') {
		urlChangeFlag = true;
		consoleYellow('New URL: ' + targetUrl);
	}
};

page.onAlert = function(msg) {
	consoleRed('ALERT: ' + msg);
};

page.onResourceRequested = function (request) {
	// console.log("REQUEST");
	// console.log("---------------------------------------------------");
	// console.log(JSON.stringify(request, undefined, 4));
	// console.log("---------------------------------------------------");
	var id = request['id'];
	var method = request['method'];
	var url = request['url'];
	//consoleYellow('REQUEST: ' + id + ' : ' + method + ' : ' + url);
	if (!(url.indexOf('_assets')>=0) && (! (url.indexOf('.js',url.length-3) !== -1))){
		consoleYellow('REQUEST: ' + id + ' : ' + method + ' : ' + url);
	}

};

page.onResourceReceived = function(response) {
		 var id = response['id'];
		 var contentType = response['contentType'];
		  var status = response['status'];
		  var statusText = response['statusText'];
			var url =response['url'];
			//consoleYellow('RESPONSE: ' + id);
			if (status != '200') {
				consoleYellow('RESPNSE: ' + id + ' : ' + status + ' (' + statusText + ') : ' + contentType + ' : ' + url);
				//console.log('Receive ' + JSON.stringify(response, undefined, 4));
			}
};

page.onError = function (msg, trace) {
	consoleRed('PHANTOM error  (testrg-phantom.js):' + msg);
	trace.forEach(function(item) {
		console.log('  ', item.file, ':', item.line);
	});
};

page.onConsoleMessage = function(msg) {
	console.log('PT: ',msg);
	// var arr=['PT: '];
	// var i, ilen;
	// for (i = 0, ilen = arguments.length; i < ilen; ++i) {
	// 	//arr.push(arguments[i]);
	// 	console.log('#1', JSON.stringify(arguments[i]));
	// 	arr.push(JSON.stringify(arguments[i]));
	//
	// }
	// console.log.apply(console,arr);

};

// network timeout handling
page.settings.resourceTimeout = 10000; // 10 seconds
page.onResourceTimeout = function(e) {
	consoleYellow("TIMEOUT DETECTED for url: " + e.url + " with errorCode: " + e.errorCode + " and errorString: " + e.errorString);

	// store timeout-error in context
	context['TESTRG_TIMEOUT'] = true;
	context['TESTRG_TIMEOUT_ERROR'] = {
		errorCode: e.errorCode,
		errorString: e.errorString,
		url: e.url
	};
	saveContext(context);

	phantom.exit(); // edw prepei na kanoyme exit me status 0 giati se allh periptwsh de synexizei to execution sto testrg.js
};


// page init
// page.onInitialized = function() {
// };


console.log("TRY TO OPEN url: " + url);
page.open(url, function(status) {
	console.log("Status: " + status);

	if (status === "success") {
		//page.render('example.png');
		var tmp = 'var context=' + JSON.stringify(context)+';\n';
		fs.write('/tmp/context.js', tmp);
		page.injectJs('/tmp/context.js');
		page.injectJs('client-before.js');
		page.injectJs(testFile);
		page.injectJs('client-after.js');


		waitFor(function() {
			if (urlChangeFlag){
				consoleYellow('waitFor finish from urlChangeFlag');
				urlChangeFlag = false;
				return true;
			}
			// Check in the page if a specific element is now visible
			var finishFlag = page.evaluate(function() {
				return (window['TEST_JOBS_FINISH_FLAG']);
			});
			if (finishFlag) {
				var context = page.evaluate(function() {
					return context;
				});
				saveContext(context);
			}

			return finishFlag;
		}, function() {
			console.log("DONE");
			phantom.exit();
		});



	} else {
		console.log("ERROR OPENING url: " + url);
		phantom.exit();
	}
});
