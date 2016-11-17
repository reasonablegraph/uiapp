module.exports = function (grunt) {

	var phantomjs = require('grunt-lib-phantomjs').init(grunt);

  // Handle any number of namespaced events like so.
  phantomjs.on('console.ok', function(msg) {
    grunt.log.writeln(msg);
  });

  phantomjs.on('console.log', function(ob) {
  	console.log(ob);
  })
  ;
  phantomjs.on('console.dump', function(ob) {
//  	if (typeof ob == 'string'){
//  		console.log(ob);
//  		return;
//  	}
  	var out = JSON.stringify(ob, undefined, 2);
  	out = out.replace(/\\n/g,"\n")
  	.replace(/\\t/g,"\t")
  	.replace(/"function \(/g,'function (')
  	.replace(/\n\s*}"\n/g,"\n\t\t} //END FUNCTION\n");
  	console.log(out);
  });

  // Create some kind of "all done" event.
  phantomjs.on('phantom.done', function() {
    phantomjs.halt();
  });

  // Built-in error handlers.
  phantomjs.on('fail.load', function(url) {
    phantomjs.halt();
    grunt.warn('PhantomJS unable to load URL.');
  });

  phantomjs.on('fail.timeout', function() {
    phantomjs.halt();
    grunt.warn('PhantomJS timed out.');
  });

  return phantomjs;
};
