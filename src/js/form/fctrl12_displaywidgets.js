DisplayBase.prototype = new ObservableBase();
DisplayBase.prototype.constructor=DisplayBase;

function DisplayBase(){
    ObservableBase.call(this);
}

DisplayBase._init = function(fc,m, itemFields, root,options){
  this.id = m.id();
  this.link = m.link();
  this.model = m;
  this.fc = fc;
  this.itemFields = itemFields;
  this.root= root;
  this.options = options;
};


DisplayBase.prototype.ad_field_to_ul = function(ul,key,label){
	console.log("af",key,label);
	var li;
	var fs = this.itemFields.getFieldModels(key);
	if (fs.length > 0){
		for (i in fs) {
			console.log(">",i);
			li = jQuery('<li>');
			jQuery('<span class="dlab">').text(label +':').appendTo(li);
			var an = fs[i].value();
			jQuery('<span class="dval">').text(an).appendTo(li);
//		li.append(jQuery('<span class="dval">').text(an));

			li.appendTo(ul);
		}
	}
};



//---------------------------------------------------------
// DISPLAY SIMPLE
//---------------------------------------------------------
DisplaySimple.prototype = new DisplayBase();
DisplaySimple.prototype.constructor=DisplaySimple;
/**
 * @param {FormControler} fc  FormControler
 * @param {FieldModelAccessor}  itemFields FieldModelAccessor
 */
function DisplaySimple(fc,m, itemFields, root,options){
	DisplayBase.call(this);
	DisplayBase._init.call(this,fc,m, itemFields,root,options);

	var refItem   = m.refItem();
	if (refItem){
		var href = jQuery('<a>');
			href.attr('href','/archive/item/' + refItem);
			href.text(m.value());
			href.appendTo(root);
	} else {
	  	var s = jQuery('<span>');
			s.text(m.value());
			s.appendTo(root);
	}

};


//---------------------------------------------------------
//DISPLAY ACTOR
//---------------------------------------------------------
DisplayGeneric.prototype = new DisplayBase();
DisplayGeneric.prototype.constructor=DisplayGeneric;
/**
 * @param {FormControler} fc  FormControler
 * @param {FieldModelAccessor}  itemFields FieldModelAccessor
 */
function DisplayGeneric(fc,m, itemFields, root,options){
	DisplayBase.call(this);
	DisplayBase._init.call(this,fc,m, itemFields,root,options);

	var m_title = m.value();
	var title_modelFM = itemFields.getFirstFieldModel('dc:title:');
	var title_model = null;
	if (title_modelFM){
		title_model = title_modelFM.value();
	}
	var label = null;
	var jdataFM = itemFields.getFirstFieldModel('tmp:jdata');
	if (jdataFM){
		var jdata = jdataFM.value();
		if (jdata){
			label = jdata['label'];
		}
	}

	var li;
	var item_id   = m.refItem();

	var v_title = label;
	if (! v_title){ v_title = title_model};
	if (! v_title){ v_title = m_title};

	if (v_title){
		var link = jQuery('<a>');
		link.attr('href','/archive/item/' + item_id);
		link.attr('target','_blank');
		var h = jQuery('<h4>');
		h.text(v_title);
		h.appendTo(link);
		link.appendTo(root);
	}


	var ul = jQuery('<ul class="subitem">');
	ul.appendTo(root);

	if (options['display_fields']){
		var conf = options['display_fields'];
		for (i in conf){
			var f = conf[i];
			var key = f['key'];
			var label = f['label'];
			this.ad_field_to_ul(ul,key,label);
		}
	}


};