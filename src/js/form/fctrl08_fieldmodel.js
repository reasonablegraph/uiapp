
FieldModel.prototype = new ObservableBase();
FieldModel.prototype.constructor=FieldModel;

/**
 * @constructor
 * @param {number} index
 * @param {string|string[]} key
 * @param {object} value
 * @param {number} link
 * @class
 * @this {FieldModel}
 *
 */
function FieldModel(id, key,value, link, lang, relation, refitem, weight,sid,props,keys, data,inferred){

	this.i = id;
	this.k = key;
	this.v = value;
	this.l = link;
	this.g = lang === undefined ? null : lang;
	//this.r = null;
	//this.r = relation === undefined ? null : relation;
	this.f = refitem === undefined ? null : refitem;
	this.w = weight === undefined ? null : weight;
	this.s = sid === undefined  ? null : sid;
	this.p = props === undefined ? null : props;
	this.ks = keys === undefined ? null : keys;
	this._data = data === undefined ? null : data;
	this.e = inferred  ? true : false;
	ObservableBase.call(this);

}

/**
 * @returns {number}
 */
FieldModel.prototype.id = function(i){
  //return this.i;
  rep = this.i;
  if (i !== undefined){
    this.i = i;
  }
  return rep;

};

/**
 * @returns {string}
 */
FieldModel.prototype.key = function(k){
  rep = this.k;
  if (k !== undefined){
    this.k = k;
  }
  return rep;
};

/**
 * klidia gia ta opia to sigkekrimeno model mporei na pari times (gia select box klp)
 * @param ks
 * @returns {String[]}
 */
FieldModel.prototype.keys = function(ks){
  var rep = this.ks;
  if (ks !== undefined){
    this.ks = ks;
  }
  return rep;
};

/**
 * @returns {number}
 */
FieldModel.prototype.link = function(l){
  rep = this.l;
  if (l !== undefined){
    this.l = l;
  }
  return rep;
};


/**
 * @returns {object}
 */
FieldModel.prototype.value = function(v){
  rep = this.v;
  if (v !== undefined){
    this.v = v;
    //this.v = strTrim(v);
    //console.log("SET",this.i,this.k,v);
    this.notifyObservers('SET_VALUE',{'value':v});
  }
  return rep;
};


FieldModel.prototype.refItem = function(f){
  rep = this.f;
  if (f !== undefined){
    this.f = f;
  }
  return rep;
};

FieldModel.prototype.lang = function(g){
  rep = this.g;
  if (g !== undefined){
    this.g = g;
  }
  return rep;
};

FieldModel.prototype.props = function(p){
  rep = this.p;
  if (p !== undefined){
    this.p = p;
  }
  return rep;
};

FieldModel.prototype.addProperty = function(k,v){
  if (! this.p){
    this.p = {};
  }
  this.p[k] = v;
};


//DATA
FieldModel.prototype.put = function(key,value){
	if (this._data == undefined){  this._data = {};}
	this._data[key]  =value;
}
FieldModel.prototype.get = function(key){
	if (this._data == undefined){  this._data = {};}
	return this._data[key];
}
FieldModel.prototype.data = function(data){
	if (this._data == undefined){  this._data = {};}
	if (data !== undefined){
		this._data = data;
	}
	return this._data;
}

FieldModel.prototype.inferred = function(){
	return this.e;
}


FieldModel.prototype.clear = function(){
  this.value(null);
  this.l = null;
  this.clearServerValues();
};

FieldModel.prototype.clearServerValues = function(){
  this.f = null;
  //this.r = null;
  // if (!this.isSidUUID()){
    // this.s = uuid.v1();
  //}
};


/**
 * @returns {boolean}
 */
FieldModel.prototype.eqField = function(key,link){
  if(this.k == key ){
    if (this.l == link){ return true;};
    if (! pl.chk(this.l) && ! pl.chk(link)){ return true;};
  }
  return false;
};

/**
 *
 * @returns {Boolean}
 */
FieldModel.prototype.isEmpty = function(){
	return (pl.trim(this.v) == null);
};

