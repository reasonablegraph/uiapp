
///////////////////////////////////////////////////////////////////////
//OBSERVABLE
///////////////////////////////////////////////////////////////////////
function ObservableBase(){
  //console.log("OBS");
  //this.observers = {};
  this.observers = [];
}
ObservableBase.prototype.addObserver = function(observer){
  //console.log("SET",key,observer);
  //this.observers[key] =  observer;
  //console.log(observer);


  this.observers.push(observer);
};
/**
 * @param {string} wcwnr
 * @param {object} data
 */
ObservableBase.prototype.notifyObservers = function(event,data){

  //console.log("##OBSERVERS LENGTH", this.observers.length, this.observers);
  jQuery.each(this.observers,function(i,o){
    if (jQuery.isFunction(o)){
      o(event,data);
    } else if ((typeof o == 'object') && o.data !== undefined){
      var widget = o.data('arc_widget');
      if (widget !== undefined){
        widget.notify(event,data);
      }
    }else if ((typeof o == 'object') && jQuery.isFunction(o.notify)){
      var widget = o;
      if (data['value'] != null){
        widget.notify(event,data);
      }
    } else {
    	console.log('###################');
    	console.log(i, o,this.observers);
    	console.log('###################');
      throw "UNKNOWN OBSERVER TYPE";
    }

  });
};



//extend_windows_stack
function ExtendWindowsStack(){
	this.stack = new Array();
}

ExtendWindowsStack.prototype.push = function(title, cmd, fid, position, buttons, getKey){
	console.log("@@@@ STACK PUSH");
	this.stack.push([title, cmd, fid, position, buttons, getKey]);
	this.dump();
}

ExtendWindowsStack.prototype.pop = function(){
	console.log("@@@@ STACK POP");
	this.dump();
	return this.stack.pop();
}

ExtendWindowsStack.prototype.getArray = function(){
	return this.stack;
}
ExtendWindowsStack.prototype.length = function(){
	return this.stack.length;
}
ExtendWindowsStack.prototype.get = function(index){
	return this.stack[i];
}
ExtendWindowsStack.prototype.getTitle = function(index){
	return this.stack[i][0];
}
ExtendWindowsStack.prototype.dump = function(){
	for (i in this.stack){ console.log(i, this.stack[i]) };
	console.log('--------------------------------------');
}




///////////////////////////////////////////////////////////////
//InputBase
///////////////////////////////////////////////////////////////
InputBase.prototype = new ObservableBase();
InputBase.prototype.constructor=InputBase;
function InputBase(){
    ObservableBase.call(this);
}
InputBase.prototype.setupExtend = function(){
    var fid = this.id;
    var opts = this.opts;
    var self = this;
    var id =  fid;
    var el = jQuery('<div class="extend_button"><p class="init">⇳</p></div>');
    el.attr('link',id);
    return el;
    //rootE.append(el);
};

InputBase.prototype.setupFinish = function(){
};

