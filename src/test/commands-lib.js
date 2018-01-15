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

// var console ={};
// console.log = function(){
// 	var alen = arguments.length;
// 	if (alen == 1){
// 		phantomTask('console.log',arguments[0]);
// 		return;
// 	}
//
// 	var args = [];
// 	for (var i = 0; i < alen; i++) {
// 		args.push(arguments[i]);
// 	}
//
// 	phantomTask('console.log',args);
// }