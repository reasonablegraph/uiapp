FormUtil = {




	mapIsEmpty : function(map) {
		for(var key in map) {
			if (map.hasOwnProperty(key)) {
				return false;
			}
		}
		return true;
	},


showModel : function(fieldModel,closeHandler) {
			console.log('FormUtil.showModel');
			var self = fieldModel;
		  //this.populateData(true);
		  if (!closeHandler){
		  	closeHandler = function(){
		  	};
		  }
		 // console.log("ndata",self.ndata);
		  // renderMessages();
		  // var msgContext = new MessageContext();
		  // var gstatus = this.generate(msgContext);
		  // var vstatus = this.validate(msgContext);
		  // if (gstatus == 'messages' || vstatus == 'messages'){
		    // renderMessageContext(msgContext);
		  // }

		  var el = jQuery('<div title="Data Model"></div>');
		  var container = jQuery('<div class="jsform"></div>');
		  container.appendTo(el);
		  var tmp = jQuery('<table class="model_tree"></table>').appendTo(container);
		  var table =jQuery('<tbody></tbody>').appendTo(tmp);
		  var show_all =false;

		  var d1 = function(id,level){
		    //console.log("D1",id,level);
		    var m = self.getFieldModel(id);
		    var id = m.id();
		    var key = m.key();
		    var value = m.value();
		    var lang = m.lang() == null ? '' : m.lang();
		    var link = m.link() == null ? '' : m.link();
		    var props = m.props() == null ? '' : m.props();
		    var data  = m.data() == null ? '' : m.data();
		    var ref = m.f;
		    var sid = m.s == null ? '' : m.s;
		    var inferred = m.inferred();
			//	console.log("LANG",lang);
		    if (! show_all && value == null){
		    	//console.log("SKIP key: " +key  + " value: "+value);
		      return;
		    }
		    if (typeof value == 'object'){
		      value = JSON.stringify(value);
		    }
		    var pad = '';
		    for (i=0;i<level;i++){
		      if (i == level-1){
		        pad +='&#160;&#160;↳';
		      } else {
		        pad +='&#160;&#160;&#160;';
		      }
		    }
		    var tr = jQuery('<tr class="modelviewtr">');
		    jQuery('<td class="modelviewtd1">').text(''+id).appendTo(tr);
		    jQuery('<td class="modelviewtd1">').text(''+link).appendTo(tr);

		    jQuery("<td>").html(pad+key).appendTo(tr);
		    var td_val = jQuery("<td>").appendTo(tr);
		    if (pl.chk(ref)){
		      jQuery('<a target="_blank">').attr('href','/archive/item/' + ref).text(value).appendTo(td_val);
		    } else {
		      td_val.text(value);
		      td_val.appendTo(tr);
		    }
		    //console.log(sid);
		    //if (pl.chk(sid) && (''+sid).indexOf('-') > 0){
		    //	sid = '-';
		    //}
		    //jQuery("<td>").text(''+lang).appendTo(tr);
		    var inferred_txt = (inferred)? 'inf' : '';
		    if (lang != '') {lang = 'l: ' + lang};
		    if (pl.chk(props) && jQuery.isPlainObject(props)){
		     	 props = JSON.stringify(props);
		     	 if (props == '{}'){ props = ''}else { props = 'p:' + props};
		    }
		    if (pl.chk(data) && jQuery.isPlainObject(data)){
		    	 data = JSON.stringify(data);
		    	 if (data == '{}'){ data = ''} else { data = 'd:' + data};
		    }
		    jQuery("<td>").text(''+ inferred_txt + ' ' + lang + ' ' + props + '' + data).appendTo(tr);
		    //jQuery("<td>").text(''+data).appendTo(tr);

		    jQuery("<td>").text(''+sid).appendTo(tr);
		    tr.appendTo(table);
		    var models2 = self.getFieldModels(null,id);
		    jQuery.each(models2,function(idx,m2){
		        d1(m2.id(),(level+1));
		    });
		  };

		  view_fn = function(){
		    table.empty();
		    var keys = {};
		    jQuery.each(self.ndata,function(id,m){
		      if (!pl.chk(m.key())){
		      	console.log(m);
		      	alert("ERROR EMPTY KEY");
		      }
		    	if ( !show_all && m.key().indexOf('tmp') == 0){return;}
		      keys[m.key()] = null;
		    });
		    jQuery.each(keys,function(k,v0){
		      var models = self.getFieldModels(k,null);
		      jQuery.each(models,function(idx,m){
		        d1(m.id(),0);
		      });
		    });
		  };

		  view_fn();
		  //console.log(self.ndata);
		 	if (false){
			  var c = 0 ;
			  for (i in self.ndata){
			    c++;
			    var m = self.ndata[i];
			    if (m.value() !== null){
			      console.log(c,i,m.link(), m.key(),m.value(),m.refItem());
			    }
			  }
			  console.log("total:",c);
		  }

		  var mydialog = el.dialog({
		    modal: true,
		    "minWidth": 1160,
		    open: function() {
		    jQuery('.ui-widget-overlay').bind('click', function() {
		      mydialog.dialog('close');
		      });
		    },
		    close:closeHandler
		    ,buttons: {
		      close: function() {
		        jQuery( this ).dialog( "close" );
		      },
		      all: function(){
		        show_all =  show_all ? false : true;
		        view_fn();
		      },
		    }
		  });
		  mydialog.dialog('open');
		},



	addModelsToForm : function(form,data){
		var c= 0;
		for (i in data){
			v = data[i];
			var key = v.key();
			if (!pl.chk(key) || key.indexOf('tmp') == 0){
				continue;
			}
			var keys = v.keys();

			if (pl.chk(keys)){
				//console.log("KEYS:",keys);
				jQuery.each(keys,function(i,k){
					if(k != key){
						c+=1;
						var ph = jQuery('<input type="hidden">');
						var name = k + '[]';
						ph.attr('name',name);
						var value = {i:null, l:v.link(), v:null, w:null, g:null, r:null, f:null, s:null,p:null,d:null};
						ph.val(JSON.stringify(value));
						ph.appendTo(form);
					}
				});
			}
			//console.log("ADD:",v.id(),v.key(),v.link(), v.value());
			c+=1;
			var ph = jQuery('<input type="hidden">');
			var name = key + '[]';
			ph.attr('name',name);
			var vval = SerializeUtil.serialize(v.value());
			var jdata = v.data();
//			if (v.f){
//				if (vval && jdata['org_value'] === undefined){
//					console.log(vval);
//					jdata['org_value'] = vval;
//					console.log(data);
//				}
//			}
			var value = {i:v.id(), l:v.link(), v:vval, w:c, g:v.g, r:v.r, f:v.f, s:v.s,p:v.p, d:jdata,e:v['e']};

			ph.val(JSON.stringify(value));
			//console.log("APPEND: ",name, ph.val());
			ph.appendTo(form);
		}
	}

}

SerializeUtil = {

		serialize : function(obj){
			if (obj == null){
				return null;
			}

			if((typeof obj === "object") && ('serialize' in obj)){
				return obj.serialize();
			}
			return obj;
		},

		deserialize : function(map){
			if (jQuery.isPlainObject(map) && map['z']){
				if (map['z'] == 'date'){
					return DateValue.deserialize(map);
				}
			}
			return map;
		},


}



ValidationUtil = {

};
ValidationUtil.isWholeNumber =function(s) {
  if (s == null || s== ''){
    return true;
  }
  return String(s).search (/^\d+$/) != -1;
};


ValidationUtil.isYear =function(s) {
    if (s == null || s== '' || s == '?'){
      return true;
    }
    var s = String(s);

    //RANGE
    var ok = s.search(/^[\d]+-[\d]+$/) != -1;
    if (ok){
	  if (s.length > 9 || s.length < 3){
	    return false;
	  }
	  return true;
    }

    //ARI8MOS
    var ok = s.search(/^\-?[\?\du]+$/) != -1;
    if (s.length > 4 || s.length < 1){
       return false;
     }
    return ok;
};

ValidationUtil.isMonth =function(s) {
  if (s == null || s== ''){
      return true;
    }

    //RANGE
    var ok = s.search(/^[\d]+\/[\d]+$/) != -1;
    if (ok){
    	var res = s.split("/");
    	for (i = 0; i < res.length; i++) {
    		var m = parseInt(res[i]);
    		if (m > 12 || m < 1){
    			ok = false;
    		}
    	}
    	return ok;
    }

    //ARI8MOS
    var ok = String(s).search(/^[\d]+$/) != -1;
    if (ok){
      var m = parseInt(s);
      return (m <= 12 && m >= 1);
    }

    return ok;
};

ValidationUtil.isDay =function(s) {
    if (s == null || s== ''){
      return true;
    }

    //RANGE
    var ok = s.search(/^[\d]+\/[\d]+$/) != -1;
    if (ok){
    	var res = s.split("/");
    	for (i = 0; i < res.length; i++) {
    		var m = parseInt(res[i]);
    		if (m > 31 || m < 1){
    			ok = false;
    		}
    	}
    	return ok;
    }

    //ARI8MOS
    var ok = String(s).search(/^[\d]+$/) != -1;
    if (ok){
      var m = parseInt(s);
      return (m <= 31 && m >= 1);
    }
    return ok;
};

ValidationUtil.isIsbn =function(s) {
    if (s == null || s== ''){
      return true;
    }
    var isbn = ISBN.parse(s);
    return (isbn) ? true:false;
};

ValidationUtil.isNotEmpty =function(s) {
    return ! (pl.trim(s) == null);
};


ValidationUtil.doValidation =function(input,validation_fn) {
  if (validation_fn === undefined){
    return true;
  }
  var ok_background_color = 'white';
  //var empty_background_color = 'white';
  input = jQuery(input);
  var s = input.val();
  var ok = validation_fn(s);
  if (ok){
    input.css('background-color',ok_background_color);
  } else {
    input.css('background-color','red');
  }
  return ok;
};

ValidationUtil.setupValidation =function(input,validation_fn) {

  input.keyup(function(){
    ValidationUtil.doValidation(this,validation_fn);
  });

};


var validations_available = {
  isbn:ValidationUtil.isIsbn,
  day:ValidationUtil.isDay,
  year:ValidationUtil.isYear,
  month:ValidationUtil.isMonth,
  digits:ValidationUtil.isWholeNumber,
  not_empty:ValidationUtil.isNotEmpty
};

AutocompleteUtil = {};

AutocompleteUtil.generic = function(element,autocomplete_url,minlen){
  //var select_fn = function(e){};
  //if (check_value_exists){
  select_fn = function(e,ui){
    element.val(ui.item.value);
    element.trigger("change");
  };
  //}

  element.autocomplete({
  'source': autocomplete_url,
  'minLength': minlen,
  'select':select_fn,

  });

};

AutocompleteUtil.subjects = function(element,url,minlen) {
   //console.log("subjects autocomplete",element);
   function split( val ) {
     return val.split( />\s*/ );
   }
   function extractLast( term ) {
     return split( term ).pop();
   }

   jQuery(element)
   // don't navigate away from the field on tab when selecting an item
   .bind( "keydown", function( event ) {
   	if (event.keyCode === jQuery.ui.keyCode.TAB) {
   		var w = jQuery(this).data( "autocomplete" );
   		if ( w !== undefined && w.menu.active ) {
        event.preventDefault();
   		}
   	}
   })
   .autocomplete({
   	 source: function( request, response ) {
       jQuery.getJSON( url, {
         term: extractLast( request.term )
       }, response );
     },
     search: function() {
       // custom minLength
       var term = extractLast( this.value );
       if ( term.length < 2 ) {
         return false;
       }
     },
     focus: function() {
       // prevent value inserted on focus
       return false;
     },
     select: function( event, ui ) {
       var terms = split( this.value );
       // remove the current input
       terms.pop();
       // add the selected item
       terms.push( ui.item.value );
       // add placeholder to get the comma-and-space at the end
       terms.push( "" );
       this.value = terms.join( ">" );

       element.trigger("change");

       return false;
     }
   });
};



InputtLineUtil = {};
InputtLineUtil.createTextInput = function(inputContainer,label,width){
  if (label != null){
    jQuery('<span></span>').text(label +':').appendTo(inputContainer);
  }
  var input = jQuery('<input type="text"/>');
  if (pl.chk(width)){
    input.css('width',width);
  }
  input.appendTo(inputContainer);
  return input;
};

InputtLineUtil.createIntegerInput = function(inputContainer,label,width){
  var input = InputtLineUtil.createTextInput(inputContainer,label,width);
  ValidationUtil.setupValidation(input,ValidationUtil.isWholeNumber);
  return input;
};

InputtLineUtil.createYearInput = function(inputContainer,label,width){
  var input = InputtLineUtil.createTextInput(inputContainer,label,width);
  ValidationUtil.setupValidation(input,ValidationUtil.isYear);
  return input;
};


InputtLineUtil.createMonthInput = function(inputContainer,label,width){
  var input = InputtLineUtil.createTextInput(inputContainer,label,width);
  ValidationUtil.setupValidation(input,ValidationUtil.isMonth);
  return input;
};


InputtLineUtil.createDayInput = function(inputContainer,label,width){
  var input = InputtLineUtil.createTextInput(inputContainer,label,width);
  ValidationUtil.setupValidation(input,ValidationUtil.isDay);
  return input;
};


/**
 * @param {FormControler} fc  FormControler
 */
InputtLineUtil.createSubReader = function(fc,parent_id,key,inputElement){

	/** @type FieldModel */
	var m = fc.getFieldModelOrCreate(key, parent_id, null);
 	//m.data({'link_to_root':true});
	m.put('parent_id',parent_id);


	var m_id = m.id();
  //fc.setReader({
  var reader = {
    id:m_id,
    read: function(){
      var value = inputElement.val();
      //console.log("#READER VALUE",value);
      return [m.key(), value, m_id, parent_id];
    },
    props: function(){
    	return null;
    },
    lang: function(){
    	return null;
    },


  };
  return reader;
};
InputtLineUtil.setupSubReader = function(fc,parent_id,key,inputElement){
  fc.setReader(InputtLineUtil.createSubReader(fc,parent_id,key,inputElement));
};

