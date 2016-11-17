
var i = 0;

function timedCount() {
		i = i + 1;
		postMessage(i);
		setTimeout("timedCount()",500);
}

self.onmessage = function(event) {
		var data = event.data;
		self.postMessage('WORKER: '+ data.cmd +' '+ data.msg);
		setTimeout("timedCount()",3000);
};