function phantomTask() {
  var args = [].slice.call(arguments);
  alert(JSON.stringify(args));
}

function consoleDump(obj){
	phantomTask('console.dump',obj);
}

function consoleLog(obj){
	phantomTask('console.log',obj);
}


