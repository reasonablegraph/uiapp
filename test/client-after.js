console.log("-----------------------------------------------------------------------------------------------------------");

window['TEST_JOBS_FINISH_FLAG'] = false;
jobs.push(function(context){
	clearContextCRKEYS();
	console.log("-----------------------------------------------------------------------------------------------------------");
	window['TEST_JOBS_FINISH_FLAG'] = true;
});

var jobslen = jobs.length;

c=0;
sequence = jQuery.Deferred.Sequence( jobs );
sequence.reduce(function( fn ) {
	//console.log("REDUCE1");
	if (fn){
		c+=1;
		if (c < jobslen) {
			console.log("");
			consoleGreen("EXECUTE JOB: " + c);
			console.log("-----------------------------------------------------------------------------------------------------------");
		}
		//console.log("REDUCE",fn);
		return jQuery.when(fn(context));
	}
});

