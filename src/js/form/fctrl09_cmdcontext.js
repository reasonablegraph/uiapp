
function CmdContext(){
  this.data = {};
};

CmdContext.prototype.set = function(key,value){
  this.data[key]=value;
};

CmdContext.prototype.push = function(key,value){
  var self =this;
  if (this.data[key] === undefined){
    this.data[key] = [];
  }
  if (jQuery.isArray(value)){
    jQuery.each(value,function(i,v){
      self.data[key].push(v);
    });
  } else {
    this.data[key].push(value);
  }
};

CmdContext.prototype.get = function(key){
  return this.data[key];
};






var newId  = function(kmap){
   // var i=0;
   // while( true ){
     // i+=1;
     // if(kmap[i] === undefined){
       // return i;
     // }
   // }
   var max = 0;
   var i;
   for (k in kmap){
     i = parseInt(k);
     if (i>0 && i > max){
       max = i;
     }
   }
   return max+1;
};



var _removeKeys  = function(fc, fields, remove_keys, remove_msg) {
        //var fields = context.data.setupField;
        for (i in fields){
          var f = fields[i];
          for (i in remove_keys){
            if (f.key == remove_keys[i]){
              model = f.models[0];
              var rs=confirm(remove_msg + ": " + model.value() + "?");
              if (rs != true){
                return;
              };
              model.value(null);
              var id = model.id();
              fc.removeModelsTree(id);
              fc._renderForm(false);
              //fc.removeOrphanModels();
              break;
            }
          }
        }
};
