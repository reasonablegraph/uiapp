
/**
 *
 * @constructor
 * @class
 *
 */
function FieldModelAccessor(data){

	/**
	 * @name ndata
	 * @type {FieldModel[]}
	 *
	 */
	this.ndata = data;
	this.defaultNetErrorHandler = null;
	this.msgContext = new MessageContext();
	this.validate_functions = {};
	this.subitems_keys = {};

}

/**
 *
 * @param key
 * @param link
 * @param defaultValue
 *
 */
FieldModelAccessor.prototype.getFieldModelsOrCreate = function(key,link,defaultValue){
    var defVal = defaultValue === undefined ? null : defaultValue;
    var models = this.getFieldModels(key,link);
    if (models.length == 0){
      var nm = this.createFieldModel(key,defVal,link);
      return [nm];
    }
    return models;
};

/**
 *
 * FieldModel
 *
 * @param key
 * @param link
 * @param defaultValue
 * @return {FieldModel}
 *
 */
FieldModelAccessor.prototype.getFieldModelOrCreate = function(key,link,defaultValue){
  var defVal = defaultValue === undefined ? null : defaultValue;
  var models = this.getFieldModels(key,link);
  var l = models.length;
  if (l == 1){
      return models[0];
  };
  if (l == 0) {
    return this.createFieldModel(key,defVal,link);
  }

  console.error("error: getFieldModelOrCreate found many values key:" + key + " link: " + link);
  return models[0];
 // throw "getFieldModelOrCreate found many values key:" + key + " link: " + link;
};


/**
 *
 * @param keyPrefix
 * @returns {Array}
 */
FieldModelAccessor.prototype.getFieldModelsWithKeyPrefix = function(keyPrefix){
  var rep = [];
  if (!jQuery.isArray(keyPrefix)){
    keyPrefix = [keyPrefix];
  }
  jQuery.each(this.ndata, function(i,m){
    jQuery.each(keyPrefix, function(idx,k){
      if (m.key().indexOf(k) !== -1){
        rep.push(m);
        return false;
      }
    });
  });
  return rep;
};



/**
 * @returns {FieldModel} or null
 */
FieldModelAccessor.prototype.getFirstFieldModelByKey = function(key){
    if (! pl.chk(key)){
      throw 'ERROR getFieldModelsByKey(null)';
    }
    for (var i in this.ndata){
        if (this.ndata[i].key() == key){
        	return this.ndata[i];
        }
    }
    return null;
};

/**
 * @returns {FieldModel} or null
 */
FieldModelAccessor.prototype.getFirstFieldModel = function(key,link){
	var rep = this.getFieldModels(key,link);
	if (rep.length > 0){
		return rep[0];
	}
	return null;
};
/**
 * @returns {FieldModel[]}
 */
FieldModelAccessor.prototype.getFieldModels = function(key,link){
    var rep = [];
    if (! pl.chk(key) && ! pl.chk(link)){
      console.log('ERROR getFieldModels(null,null)');
      return rep;
    }
    if (jQuery.isArray(key)){
      jQuery.each(this.ndata, function(i,m){
        jQuery.each(key, function(idx,k){
          if (m.eqField(k,link)){
            rep.push(m);
            return false;
          }
        });
      });
    } else {
      if (! pl.chk(key)){
        jQuery.each(this.ndata, function(i,m){
          if (pl.chk(m.link()) && m.link() == link ){
            rep.push(m);
          }
        });
      } else {
        jQuery.each(this.ndata, function(i,m){
          if (m.eqField(key,link)){
            rep.push(m);
          }
        });
      }
    }
    return rep;
};


/**
 * @returns {FieldModel[]}
 */
FieldModelAccessor.prototype.getRootFieldModels = function(){
	var rep = [];
  jQuery.each(this.ndata, function(i,m){
         if (m.link() == null){
            rep.push(m);
          }
  });
  return rep;
};

/**
 *
 * @param key
 * @returns {Array}
 */
FieldModelAccessor.prototype.getFieldModelsByKey = function(key){
    if (! pl.chk(key)){
      throw 'ERROR getFieldModelsByKey(null)';
    }
    var rep = [];
    if (jQuery.isArray(key)){
      jQuery.each(this.ndata, function(i,m){
        jQuery.each(key, function(idx,k){
          if (m.key() == k){
            rep.push(m);
            return false;
          }
        });
      });
    } else {
        jQuery.each(this.ndata, function(i,m){
          if (m.key() == key){
            rep.push(m);
          }
        });
    }
    return rep;
};

/**
 * @returns {FieldModelAccessor}
 */
FieldModelAccessor.createFromRemoteData = function(data,options) {
  var ndata = {};
  var c = 0;
  var w = 0;
  for (key in data) {
    for (i in data[key]) {
      var arr = data[key][i];
      var tv = arr[0];
      //arr[0] text_value arr[5] jsonValue
      var jv = arr[5];
      if (pl.chk(jv) && pl.chk(jv['json'])) {
        value = jv['json'];
      } else {
        value = tv;
      }
      var link = arr[8];
      //var weight = arr[7];
      var weight = ++w;
      var id = ++c;
      //id, key,value, link, lang, relation, refitem, weight,sid
      var fm = new FieldModel(id, key, value, link, arr[1], arr[3], arr[4], weight, arr[2]);
      ndata[id] = fm;
      //console.log(id,key,fm);
    }
  }
  var rep = new FieldModelAccessor(ndata);
  return rep;
};


/**
 * @return {FieldModel}
 * @param {Number} fid
 */
FieldModelAccessor.prototype.getFieldModel = function(fid){
  var rep =  this.ndata[fid];
  //if (!pl.chk(rep)){
  //	console.error("getFieldModel, no model for id: ",fid);
  //}
  if (rep === undefined){
    return null;
  }
  return rep;
};



/**
 * @return {Number}
 */
FieldModelAccessor.prototype.newId = function(){
  //return ++this.counterFieldId;
  return newId(this.ndata);
};

/**
 *
 * @returns {Number}
 */
FieldModelAccessor.prototype.newWeight = function(){
  return ++this.weight;
};
/**
 * @param {string|string[]} key
 * @return {FieldModel}
 */
FieldModelAccessor.prototype.createFieldModel = function(key,value,link){
//	if (jQuery.type(key) !== 'string'){
//		console.log("KEY:",key);
//	}

	if (!key){
		console.error('createFieldModel: error key missing');
		console.log('caller:');
		console.log(arguments.callee.caller.toString());
		throw 'key missing';
	}
	//var c = (key.indexOf('tmp') == 0) ? 'i' + this.counterInternalFieldId++ : this.counterFieldId++;
    var c = 0;
    if (key.indexOf('tmp') == 0) {
      c= 'i' + this.counterInternalFieldId++ ;
    } else {
      //this.counterFieldId++;
      c = this.newId();
    }
		if (link === undefined){
			link = null;
		}
		if (value === undefined){
			value = null;
		}

    //console.log("##",key,c);
    var fm = new FieldModel(c,key,value,link);
    fm.w = this.newWeight();

    //console.log("TEST2");
    if (jQuery.isArray(key) && ! pl.chk(fm.keys())){
 	   fm.keys(key);
 	   //console.log("SET2:",fm.keys());
    }
    this.ndata[c] = fm;
    return fm;
};

/**
 *
 * @param id
 */
FieldModelAccessor.prototype.removeModelsObservers = function(id){
	//console.log('removeModelsObservers');
	for (i in this.ndata){
		//console.log("DEL",i);
		var m = this.ndata[i];
		if (m.observers !== undefined){
			for (io in m.observers){
				jQuery(m.observers[io]).remove();
				//delete m.observers[io];
			}
    	m.observers.length = [];
    	m.observers = [];
		}
	}
};


/**
 *
 * @param id
 */
FieldModelAccessor.prototype.removeModel = function(id){
  //console.log("#DELETE MODEL# ",id);
  delete this.ndata[id];
};


FieldModelAccessor.prototype.moveupModel = function(id){
	//console.log("#MOVE UP MODEL# ",id);
	var m = this.ndata[id];
  var k = m.keys() || m.key();
	var l = m.link();
	var models = this.getFieldModels(k,l);
	var p = null;
	for (i in models){
		var cm =  models[i];
		//console.log(":",cm);
		if (cm.id() == id && p){
			var id1 = cm.id();
			var id2 = p.id();
			console.log("##:",id1,id2);

			var c1 = this.getFieldModels(null, id1);
			var c2 = this.getFieldModels(null, id2);
			for (j in c1){
				c1[j].link(id2);
			}
			for (j in c2){
				c2[j].link(id1);
			}
			cm.id(id2);
			p.id(id1);
			this.ndata[p.id()] = p;
			this.ndata[cm.id()] = cm;
			//this.consoleDump();
			return id2;
			//break;
		}
		p = cm;
	}

	return null;
	//this.consoleDump();
};



/**
 *
 * @param id
 */
FieldModelAccessor.prototype.removeModelsTree = function(id){// removeObserversFlag
	//var removeObserversFlagOk = removeObserversFlag ? removeObserversFlag : false;
	//var fullFlagOk = fullFlag ? fullFlag : false;
	//console.log("#REMOVE MODELS TREE:",id);
	var stack = [];
  var models = this.getFieldModels(null,id);
  for (i in models){
  	var m = models[i];
    var id = m.id();
    stack.push(id);
//    if (removeObserversFlagOk){
//     if (m.observers !== undefined){
//    	 console.log("@R1");
//    	 for (i in m.observers){
//    		 console.log("@R2");
//				 jQuery(m.observers[i]).remove();
//				 // delete m.observers[i];
//    	 }
//    	 m.observers.length = [];
//    	 m.observers = [];
//     }
//    }
    //console.log("#DELETE2#",id, m.key(), m.value());
    delete this.ndata[id];
    //console.log("DELETE MODEL",id);
  }
  for (i in stack){
    this.removeModelsTree(stack[i]);
  }
};


/**
 *
 * @param models
 */
FieldModelAccessor.prototype.removeModels = function(models){
	//var fullFlagOk = fullFlag ? fullFlag : false;
	//console.log('#removeModels#',fullFlagOk);
  var stack = [];
  for (i in models){
    var m = models[i];
    var id = m.id();
    stack.push(id);
    //console.log("#DELETE1#",m);
   //console.log("#DELETE1#",id, m.key(), m.value());
    delete this.ndata[id];
   }
  for (i in stack){
    this.removeModelsTree(stack[i],true);
  }
};


///**
// * @return {FieldModel[]}
// * @param {Number} id
// */
//FieldModelAccessor.prototype.getModelsTree = function(fid){
//	var ndata = this.ndata;
//	/** @type FormControler */
//	var self = this;
//	/** @type FieldModel */
//	var model = ndata[fid];
//	 if (! model){
//		throw " FieldModelAccessor.getTree  canot find model from " + fid;
//	 }
//	 model.link(null);
//	 var tree = [];
//	 f1 = function(root){
//		 tree.push(root);
//		 var link = root.id();
//		 var cmodels = self.getFieldModels(null, link);
//		 for (i in cmodels){
//			 f1(cmodels[i]);
//		 }
//	 };
//	 f1(model);
//	 return tree;
//}

///**
// * @return {FieldModel[]}
// * @param {Number} id
// */
//FieldModelAccessor.prototype.getModelsTrees = function(fid){
//
//	if (flag_remove_parent === undefined){
//		flag_remove_parent = true;
//	}
//
//	/** @type FormControler */
//	var self = this;
//	/** @type FieldModel */
//	var model = this.ndata[fid];
//	 if (! model){
//		throw " FieldModelAccessor.getTree  canot find model from " + fid;
//	 }
//	 model.link(null);
//	 var tree = [];
//	 self.traverseNode(model,function(node){
//		 tree.push(node);
//	 });
//	 return tree;
//}
//
/**
 * @return {FieldModel[]}
 * @param {Number} id
 */
FieldModelAccessor.prototype.getSubTree = function(model){
	//model.link(null);
	 var tree = [];
	 this.traverseNode(model,function(node){
		 tree.push(node);
	 });
	 return tree;
}


/**
 *
 * @returns {Object.<number, FieldModel>}
 */
FieldModelAccessor.prototype.getModelsAll = function(){
	return this.ndata;
}


/**
 *
 * @param handler
 */
FieldModelAccessor.prototype.traverseTree = function(handler){
	/** @type FormControler */
	var self = this;
	var ndata = this.ndata;
	for (i in ndata){
		if (ndata[i].link()==null){
			self.traverseNode(ndata[i],handler);
		}
	}
}

FieldModelAccessor.prototype.traverseNode = function(node,handler){
	/** @type FormControler */
	var self = this;
	node.put('level',1);
	f1 = function(root){
		var level = root.get('level') +1;
		 handler(root);
		 var link = root.id();
		 var cmodels = self.getFieldModels(null, link);
		 for (i in cmodels){
			 var n = cmodels[i];
			 n.put('level',level);
			 f1(n);
		 }
	 };
	 f1(node);
}

/**
 * @returns {Void}
 */
FieldModelAccessor.prototype.removeOrphanModels = function(){
  //console.log("#REMOVE ORPHAN MODELS#");
  var dc = 0;
  var deleteFlag = false;
  do {
    deleteFlag = false;
    for (i in this.ndata){
      m = this.ndata[i];
      //console.log(m.key(),m.value());
//      if (m.value() == null){
//         if (m.key() == 'ea:work:'){
//           delete this.ndata[i];
//         }
//        continue;
//      }
      var link = m.link();
      if (pl.chk(link)){
        var parent = this.getFieldModel(link);
        if (parent == null || parent.value() == null){
          dc +=1;
          deleteFlag = true;
          //console.log('ODELETE', m);
          //m.value(null);
          delete this.ndata[i];
        }
      }
    }
  } while(deleteFlag);
  if (dc >0){
      //console.log("##2 RENDER..");
      this._renderForm(false);
  }
};


/**
*
* @param rootModel
* @param options
*/
FieldModelAccessor.prototype.remoteCreateSubItem = function(rootModel,options){
	//console.log('remoteCreateSubItem',rootModel);
	var context={};
	var remote_jobs = this.remoteCreateSubItemJobs(rootModel,options);
	var sequence = jQuery.Deferred.Sequence( remote_jobs );
	return sequence.reduce(function( fn ) {
		//console.log("REDUCE");
		//return fn();
		return jQuery.when(fn(context));
	});
};


/**
 *
 * @param rootModel
 * @param options
 */
FieldModelAccessor.prototype.remoteCreateSubItemJobs = function(rootModel,options){
	//console.log('remoteCreateSubItem',rootModel.id(),rootModel.key(),rootModel.value());
	var obj_types=[];
	var tmp = {};

	var value = jQuery.trim(rootModel.value());
	if(! value ){
		return;
	} ;

	this.traverseNode(rootModel, function(node){
		//console.log("T:",node.get('level'),node.id(),node.key(),node.value());
		if (node.key()=='ea:obj-type:'){
			var level = node.get('level');
			if (!tmp[level]){
				tmp[level] = [];
			}
			tmp[level].push(node);
			//console.log("@PUSH: ", node.key(), node.value());
		}
	});
	keys = [];
	for (k in tmp){
    keys.push(k);
	}
	keys.sort();
	for (i in keys){
		var k = keys[i];
		for (j in tmp[k]){
			obj_types.push(tmp[k][j]);
		}
	}

	var self = this;
	var createJob = function(ot){
		return function(){
			var root = self.getFieldModel(ot.link());
			return self._remoteCreateSubItem(root,options);
		}
	};
	var jobs = [];
	var ot;
	while(ot = obj_types.pop()){
		jobs.push(createJob(ot));
	}
	return jobs;



}


FieldModelAccessor.prototype._remoteCreateSubItem = function(rootModel,options){
	if (!rootModel || rootModel == null){
		throw('createSubItem: empty rootModel');//operation aborted
	}

	var self = this;
	var root = rootModel;
	var root_id = root.id();
	//console.log("CI: ",root_id,root.key(),root.value());
	var data = self.getSubTree(root);

	if (options == undefined){
		options = {};
	}

	var status = self.getFirstFieldModel('ea:status:',root_id);
	if (status && status.value() == 'incomplete'){
		console.log("SKIP incomplete record",root_id,root.key(),root.value());
		return;
	}


//	if (options['async'] === undefined){
//		options['async']= true;
//	}
	var successHandler = options['successHandler'];
	var errorHandler = options['errorHandler'];
	//for (i in data) { var m = data[i]; console.log("#1",m.id(),m.link(),m.key(),m.value());}
	data.shift();

	var rename_keys = false;
	if (options['rename_keys']){
		rename_keys  = options['rename_keys'];
	}

	for(i in data){//put childs to root level
		var m = data[i];
		if (m.link() == root_id){
			if (m.get('link_to_root')){
				//alert("link_to_root: "+ root_id);
				m.link(root_id);
			} else if (m.get('parent_id')){
				parent_id = m.get('parent_id');
				m.link(parent_id);
				//m.addProperty('pid',parent_id);
			} else {
				m.link(null);
			}
		}
		if (rename_keys){
			for (k in rename_keys){
				if (m.key() == k){ m.key(rename_keys[k]); }
				break;
			}
		}
	}

	if (options['convert_root_to_title']){

		//var nroot = new FieldModel(self.newId(), 'dc:title:', root.value(), null, root.lang(), null, root.refItem(), null, null, root.props(), root.keys());
		var nroot = new FieldModel(self.newId(), 'dc:title:', root.value(), null, root.lang(), null, null, null, null, root.props(), root.keys());
		data.unshift(nroot);
	}
	if ( options['add_nodes'] ) {
		var nodes = options['add_nodes'];
		for (i in nodes){
			data.unshift(nodes[i]);
		}
	}

	//console.log(">>>>>>>",options);
	var sucessFn = null;
	if (options['set_refitem_to_root']) {
		sucessFn = function(sdata, textStatus, jqXHR) {
			root.refItem(sdata['item_id']);
			if (sdata['ot']) {
				root.put('ot', sdata['ot']);
			}
			//console.log("SET REF ITEM",sdata['item_id'],root.id(),root.key(),root.value(),root.refItem());
			self.removeModels(data);
		}
	}


	return this._remoteCreateItem(data,options,sucessFn);

};

FieldModelAccessor.prototype.remoteCreateItem = function(options){
	//console.log("remoteCreateItem");
	return this._remoteCreateItem(this.ndata,options);
}

FieldModelAccessor.prototype._remoteCreateItem = function(data,options,sucessFn){
	var form = jQuery('<form>');
	FormUtil.addModelsToForm(form, data);
	return this._formRemoteCreateItem(form,options,sucessFn);
}

FieldModelAccessor.prototype._formRemoteCreateItem = function(form,options,sucessFn){
	//console.log('_formRemoteCreateItem');
	if (! options){
		options = {};
	}
	var url = '/ws/prepo/create_subitem';
	if (options['createSubItemUrl']){
		url = options['createSubItemUrl'];
	}

	var self = this;
	var successHandler = options['successHandler'];
	var errorHandler = options['errorHandler'];

	 // console.log(">FORM DATA:");
	 // console.log(form.serialize());
	 // console.log("<FORM DATA");

	ajaxOpts = {
		type: 'POST',
		url: url ,
		data:form.serialize(),
		dataType:'json',
		// 'async' : options['async'],
		error:function(jqXHR, textStatus, errorThrown) {
			console.log("SUBITEM ERROR: ",textStatus, errorThrown);
			if(errorHandler) {
				errorHandler(jqXHR, textStatus, errorThrown);
			} else if (self.defaultNetErrorHandler){
				self.defaultNetErrorHandler(jqXHR, textStatus, errorThrown);
			} else {
				alert("ERROR ITEM NOT CREATED: " + textStatus);
			}
		},
		success:function(sdata,  textStatus, jqXHR ) {
			//console.log("##SUBITEM SUCCESS#: ",options['idx']);
			//console.log(JSON.stringify(sdata));
			if (sucessFn){
				//console.log("##SUCESSFN");
				sucessFn(sdata, textStatus, jqXHR);
			}
			if (successHandler) {
				//console.log("##SUCESSHANDLER");
				successHandler(sdata, textStatus, jqXHR);
			}
			return sdata;
		}
	};

	if (options['headers']){
		ajaxOpts['headers'] = options['headers'];
	}


	return jQuery.ajax(ajaxOpts);

}



/**
 *
 * @returns {MessageContext}
 */
FieldModelAccessor.prototype.validateSubitems = function(rootModel,messageContext) {
	var self = this;
	var msgContext = messageContext ? messageContext : this.msgContext;
	//console.log("####SUBITEM####: ", rootModel);
	var subItemRoots = this.subItemRootModels(rootModel);
	for (var i in subItemRoots){
		var rm = subItemRoots[i];
		var rmkey = rm.key();
		//console.log("#1 ",rmkey);
		//if (rmkey == 'ea:manifestation:tmp' || rmkey =='ea:expression:tmp' || rmkey == 'ea:subj:'){
		if (rmkey == 'ea:manifestation:tmp' || rmkey =='ea:expression:tmp'  || rmkey == 'ea:subj:' ){
			//console.log("#SKIP ",rmkey);
			continue;
		}
		//console.log("@@@@@@@@@@@@@@@@@@: ", rm.id(),rm.key(),rm.value());
		if (jQuery.trim(rm.value())) {
			var path = '';
			if (rm.link()) {
				var pm = self.getFieldModel(rm.link());
				if (pm) {
					if (pm.link()) {
						path += '../ ';
					}
					path += pm.value();
					path += ' / ';
				}
			}
			path += rm.value();
			//console.log('ERROR SUBITEM:',rm.id(),rm.key(),rm.value(),rm);
			msgContext.addError('UNCONNECTED OBJECT: ' + path);
		}
	}
	return msgContext;
}

/**
 * validate (iparxei 3exoristi generate)
 */
FieldModelAccessor.prototype.validate = function() {
	var msgContext = this.msgContext;
	var self = this;
	//console.log("VALIDATE");
	var title_model = this.getFirstFieldModel('dc:title:');
	if (title_model == null) {
		//    msgContext.addError("Missing Title model");
		msgContext.addError(messages_labels['missing_title_model']);
	} else {
		var title = title_model.value();
		if (!pl.chk(title)) {
			//      msgContext.addError("Missing Title");
			msgContext.addError(messages_labels['missing_title']);
		}
	}


	this.validateSubitems();
	//msgContext.addError('DEVEL ERROR');

	//console.log('VALIDATE FUNCTIONS');
	jQuery.each(self.validate_functions, function(key, fn) {
		console.log("exec validate_function", key);
		fn.call(self);
	});


	if (false) {
		//TODO: na gini pluguble me commands opos to generate ke na mpoun eki oi contributors
		// var contributors1 = this.getFieldModelsWithKeyPrefix('dc:contributor:','ea:contributor:');
		// console.log("@1",contributors1);
		var contributors_keys = Object.keys(contributors_printed);
		//console.log("@2",contributors_keys);
		var contributors = [];
		for (i in contributors_keys) {
			var ck = contributors_keys[i];
			var tmps = this.getFieldModelsByKey(ck);
			contributors = contributors.concat(tmps);
		}
		// console.log("@3",contributors);
		// throw "DEBUG ERROR";
		for (i in contributors) {
			var c = contributors[i];
			var name = c.value();
			//console.log("@1",i,name,c);
			if (name != null && !pl.chk(c.refItem())) {
				//console.log("@2",i,name,c);
				id = c.id();
				var ct = this.getFirstFieldModel('ea:contributor-type:', id);
				var pt = this.getFirstFieldModel('ea:name:_type', id);
				//console.log("ct",ct.value());
				// console.log("pt",pt);
				if (ct == null || !pl.chk(ct.value()) || ct.value() == 'undefined') {
					//error
					msgContext.addWarning('please add contributor type to contributor [ ' + name + ' ]');
				} else if (ct.value() == 'person' && pt.value() == 'surname_first' && name.indexOf(",") === -1) {
					//error
					msgContext.addWarning('contributor [ ' + name + "] has type 'Person (Surname fist)' but comma not found");
				} else if (ct.value() != 'person' && name.indexOf(",") !== -1) {
					msgContext.addWarning('contributor [ ' + name + "] with comma in name found in different type than 'Person'");
				}
			}
		}
	}



	//   msgContext.addWarning('DEBUG');

	// foreach ($this->values as $key => $kvalues) {
	// foreach ($kvalues as $k => $v) {
	// $link_id = $v[8];
	// if (! empty($link_id)){
	// $parent = $this->getValuebyClientId($link_id);
	// if ($parent == null){
	// $record_id = $v[6];
	// $this->deleteByRecordId($record_id);
	// }
	// }
	// }
	// }

	if (msgContext.hasMessages()) {
		return 'messages';
	}

	return 'valid';
};




/**
 * epistrefei ta not connected
 * @param rootModel
 * @returns {Array}
 */
FieldModelAccessor.prototype.subItemRootModels = function (rootModel) {
	var self = this;
	var subitems_keys = this.subitems_keys;
	var roots = [];
	var models = (rootModel) ? this.getSubTree(rootModel) : this.getModelsAll();
	for (var id in models) {
		var m = models[id];
		//console.log('CHK1', m.id(), m.key(), m.value(), m.refItem());
		var key = m.key();
		//if (inSubitemKeys(key) && jQuery.trim(m.value()) && !m.refItem()) {
		//if (m.get('create_subitem') && jQuery.trim(m.value()) && !m.refItem()) {
		//sub-root":true //create_subitem
		if (m.get('sub-root') && !m.refItem()) {
			console.log('SUBITEM_ROOT', m.id(), m.key(), m.value(), m.refItem());
			roots.push(m);
		}
	}
	return roots;
}

FieldModelAccessor.prototype.addSubItemKey = function(key) {
	if (jQuery.isPlainObject(key)){
		for (var k in key){
			this.subitems_keys[k]=null;
		}
	}else if (jQuery.isArray(key)){
		for (var k in key){
			this.subitems_keys[key[k]]=null;
		}
	} else {
		this.subitems_keys[key]=null;
	}
}

FieldModelAccessor.prototype.subItemRootModelsOLD = function () {
	//console.log("subItemRootModels");
	var self = this;
	var subitems_keys = this.subitems_keys;
	var roots = [];
	for (var j in subitems_keys) {
		var smodels = fc.getFieldModelsByKey(j);
		//console.log("KEY",j);
		for (var i in smodels) {
			//var tmp = {}; //gia ton deftero tropo
			var rootModel = smodels[i];
			console.log("M:",j,rootModel.value(),rootModel.link(),rootModel.refItem());
			var value = jQuery.trim(rootModel.value());
			if (value) {

				if (!rootModel.refItem()) { //entopizi ola osa  den ine sindedemena
					//console.log("#RM: ", rootModel.id(), rootModel.key(), rootModel.value());
					roots.push(rootModel);
				}

				if (false) {
					//entopizi mono afta pou exoun childs me object type gia dimiourgia neou komvou
					self.traverseNode(rootModel, function (node) {
						//console.log("T:",node.get('level'),node.id(),node.key(),node.value(),node);
						if (node.key() == 'ea:obj-type:') {
							var level = node.get('level');
							if (!tmp[level]) {
								tmp[level] = [];
							}
							tmp[level].push(node);
							//console.log("@PUSH1: ", node.key(), node.value());
						}
					});
					keys = [];
					for (k in tmp) {
						keys.push(k);
					}
					keys.sort();
					for (var ii in keys) {
						var kk = keys[ii];
						for (var jj in tmp[kk]) {
							//console.log("@PUSH2: ", ii,kk,jj);
							roots.push(self.getFieldModel((tmp[kk][jj]).link()));
						}
					}
				}

			}
		}
	}
	return roots;

}

FieldModelAccessor.prototype._act_addValidateFunction = function(container, options) {
	var fnKey = options.fnKey;
	var fn = options.fn;

	this.validate_functions[fnKey] = fn;
};

/**
 *
 * @returns {MessageContext}
 */
FieldModelAccessor.prototype.newMessageContext = function() {
	this.msgContext = new MessageContext();
	return this.msgContext;
};

/**
 *
 * @returns {MessageContext}
 */
FieldModelAccessor.prototype.getMessageContext = function() {
	return this.msgContext;
};




FieldModelAccessor.prototype.consoleDump = function(){
	$c = 0;
	console.log(">============================================================");
	for (i in this.ndata){
		$c++;
		var m = this.ndata[i];
		//console.log(m.id(),m.link(),m.key(),m.value(),m.refItem());
		//console.log(m.id(),m.link(),m.key(),m.value(),m.refItem(),m.props());
		//console.log(m.id(),m.link(),m.key(),m.value(),m.refItem(),m.data());
		console.log(m.id(),m.link(),m.key(),m.value(),m.refItem(),m.props(),m.data());
	}
	console.log("total: ", $c);
	console.log("<============================================================");
};
