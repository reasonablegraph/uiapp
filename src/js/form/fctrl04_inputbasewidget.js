
///////////////////////////////////////////////////////////////
//InputBaseWidget
///////////////////////////////////////////////////////////////
InputBaseWidget.prototype = new InputBase();
InputBaseWidget.prototype.constructor=InputBaseWidget;
function InputBaseWidget(){
  InputBase.call(this);
}
//InputBaseWidget.prototype._init = function(fc,options){  //enalaktika
InputBaseWidget._init = function(fc,options){
  this.getKey = options.getKey;
  this.id = options.fid;
  this.link = options.link;
  this.model = options.model;
  this.fc = fc;
  this.inputCE = options.container;
  this.inputCE.data('arc_widget',this);
  this.inputCE.addClass("arc_widget");
  this.key = options.key;
  this.inputCE.attr('key',this.key);
  //console.log(this.key);

  var self = this;
	this.readerId = this.id;
  if (pl.chk(this.id)){
    this.model.addObserver(this.inputCE);
    //this.model.addObserver(this);
  }  else {
  	console.log("EMPTY WIDGET ID?");
  }
  //else {	alert("NULL ID");}
  return options;
};

//InputBaseWidget.prototype._setupReader = function(){ //enalaktika
InputBaseWidget._setupReader = function(){
	var self = this;
  if (this.readerId == null){
  	console.log("_setupReader WITHOUT readerID");
  	return;
  }
  this.fc.setReader({
    id: self.readerId,
    read: function(){
      return self.getValue();
    },
    props: function(){
     return self.getProps();
    },
    lang: function(){
     return self.getLang();
    },

  });
  this.readModel();
	//console.log('_setupReader',this.model.id());
};

InputBaseWidget._setupPropsSelect = function(options){
	var self = this;
	this.langSelectOVerlay = null;
	this.langSelectE  = null;
	this.spanLang = null;

	if (options.copy_bnt){
		bnt_label = options.copy_bnt['label'];
		fn_copy = options.copy_bnt['click_handler'];
		var inputCE = this.inputCE;
		var copy_button = jQuery('<div class="copy_button"><p class="init">'+bnt_label+'</p></div>');
		copy_button.appendTo(inputCE);
		copy_button.click(fn_copy);
//		var fn_copy = function(e3){
//		e3.preventDefault();
//		e3.stopPropagation();
//		text_value = inputCE.find("input").first().val();
//		inputCE.closest("#step1f").find('[key="ea:manifestation:tmp"]').find("input").val(text_value);
//	};
	}

	if (options.lang_select || options.prescribed_select){
		var def_lang = language_default;

		var display_lang_flag = (options.lang_select !== undefined );
		var display_skip_flag = (options.skip_select !== undefined );
		var display_prsc_flag = (options.prescribed_select !== undefined );
		if (display_lang_flag){
			def_lang = options.lang_select['default_lang'];
		}
		var mlang = this.model.lang();
		if (!pl.chk(mlang)){
			this.model.lang(def_lang);
		} else {
			def_lang = mlang;
		}
		var def_props = this.model.props();
		if (def_props == null){
			var def_val = this.model.value();
			if (jQuery.isPlainObject(def_val) && def_val['prsd'] !== undefined){
				def_props = {'prsd':def_val['prsd']};
			}
		}
		var props_default_selection = '0';
		var props_prescr_default_selection = 'p';
		if (pl.chk(def_props)){
			if( pl.chk(def_props['skip'])){
				props_default_selection = def_props['skip'];
			}
			if( pl.chk(def_props['prsd'])){
				props_prescr_default_selection = def_props['prsd'];
			}
		}
		//

		//console.log("@@@@1",def_lang);
		var select_values = {language_default:language_default};
		if (display_lang_flag){
			select_values = options.lang_select['available_languages'];
		}
		var sopts = {
			select_values: select_values,
			default_selection:def_lang,
			size:8,
		};
		var myClickHandler = function(e1){
			self.langSelectOVerlay  = jQuery('<div class="pcont-overlay">');
			var langSelectOVerlay = self.langSelectOVerlay;
			langSelectOVerlay.click(function(e){
					e.preventDefault();
					e.stopPropagation();
					langSelectOVerlay.remove();
					pcont.hide();
					langSelectDiv.click(myClickHandler);
			});
			jQuery('body').append(langSelectOVerlay);
			e1.preventDefault();
			e1.stopPropagation();
			langSelectDiv.off('click');
			pcont.show();
			langSelectOVerlay.show();
			//ExpandSelect(self.langSelectE.get(0));
		};


//		langSelectOVerlay.hide();

		dist_right = options.lang_select['dist_right'];

		if (dist_right == false){
			satrs_style = 'style="right:0px"';
			var langSelectDiv = jQuery('<div class="satrs" '+ satrs_style +'>');
		}else{
			var langSelectDiv = jQuery('<div class="satrs">');
		}

//		var langSelectDiv = jQuery('<div class="satrs">');
		this.spanLang = jQuery('<p class="satrslab">');
		var spanLang = this.spanLang;

		var vv = def_lang;
		if (! display_lang_flag){
			vv = props_prescr_default_selection;
		}
		var	ev = jQuery('<p>' + vv  + '</p>');
		if (props_default_selection == 0){
			 ev.css('text-decoration','none');
		} else {
			 ev.css('text-decoration','underline');
		}
		var v2 = props_default_selection;
		var v3 = props_prescr_default_selection;
		if (v2 == 0 && v3 == 'p'){
				 ev.css('text-decoration','none');
		} else if  (v2 != 0 && v3 == 'p'){
				 ev.css('text-decoration','underline');
		} else if  (v2 == 0 && v3 == 'n'){
				 ev.css('text-decoration','line-through');
		} else if  (v2 != 0 && v3 == 'n'){
				 ev.css('text-decoration','underline line-through');
		}
		spanLang.append(ev);
		spanLang.appendTo(langSelectDiv);
		langSelectDiv.appendTo(this.inputCE);

		this.langSelectE = createSelectElement(sopts);
		var langSelectE = this.langSelectE;
		var fn1 = function(e2){
				//console.log("CHANGE");
				e2.preventDefault();
				e2.stopPropagation();
				self.langSelectOVerlay.remove();
				pcont.hide();
				langSelectDiv.click(myClickHandler);

				var v1 = langSelectE.val();
				var v2 = skipSelectE.val();
				var v3 = prescribedSelectE.val();
				//alert(v1);
				var v0 = display_lang_flag?v1:v3;
				var v = jQuery('<p>' + v0  + '</p>');
				if (v2 == 0 && v3 == 'p'){
					 v.css('text-decoration','none');
				} else if  (v2 != 0 && v3 == 'p'){
					 v.css('text-decoration','underline');
				} else if  (v2 == 0 && v3 == 'n'){
					 v.css('text-decoration','line-through');
				} else if  (v2 != 0 && v3 == 'n'){
					 v.css('text-decoration','underline line-through');
				}
				//console.log(v.css('text-decoration'));

				spanLang.empty();
				spanLang.append(v);
		};
		var fn2 = function(e3){
			e3.preventDefault();
			e3.stopPropagation();
		};

		langSelectE.change(fn1);
		langSelectE.click(fn2);

		this.skipSelectE = createSelectElement({
			select_values: {0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,11:11,12:12,13:13,14:14,15:15,16:16,17:17,18:18,19:19,20:20,21:21,22:22},
			default_selection:props_default_selection,
			size:8,
		});
		var  skipSelectE = this.skipSelectE;
		skipSelectE.change(fn1);
		skipSelectE.click(fn2);


		this.prescribedSelectE = createSelectElement({
			select_values: {
				'p':'prescribed',
				'n':'non prescr'
			},
			default_selection:props_prescr_default_selection,
			size:8,
		});
		var prescribedSelectE = this.prescribedSelectE;
		prescribedSelectE.change(fn1);
		prescribedSelectE.click(fn2);

		var pcont = jQuery('<div class="pcont">');
		if (display_lang_flag){
			pcont.addClass("ls");
			langSelectE.addClass('langselect');
			langSelectE.appendTo(pcont);
			langSelectE.val(def_lang);
		}
		if (display_skip_flag){
			pcont.addClass("ss");
			this.skipSelectE.appendTo(pcont);
		}
		if (display_prsc_flag){
			pcont.addClass("ps");
			this.prescribedSelectE.appendTo(pcont);
		}
		pcont.appendTo(langSelectDiv);
		pcont.hide();

		langSelectDiv.click(myClickHandler);


		this._getLang = function(){
			return langSelectE.val();
		};

		this._getProps = function(){
			var rep ={};
			var skip = skipSelectE.val();
			if (pl.chk(skip)){
				rep['skip'] = skip;
			}
			var prescribed = prescribedSelectE.val();
			if (pl.chk(prescribed)){
				rep['prsd'] = prescribed;
			}
			return rep;
		};

	} else {
		this._getLang = function(){
				return this.model.lang();
		};
		this._getProps = function(){
			return this.model.props();
		};
	}

};

InputBaseWidget.prototype.notify = function(event,data){
  var self = this;
  if (event == 'SET_VALUE'){
  	//console.log("@SET VALUE@ ", self.model.id());
	  self.readModel();
        //var inputValue = self.getValue()[1];
        //var modelValue = data['value'];
        //if (inputValue != modelValue && inputValue !== modelValue){
        // if (JSON.stringify(inputValue) !=  JSON.stringify(modelValue)){
        //   console.log("#1 SET  FROM EVENT: ",inputValue,'<>',modelValue);
        //   self.readModel();
        // }
      }
};

InputBaseWidget.prototype.onRenderFinish = function(container){

};

InputBaseWidget.prototype.getValue = function(){
  throw "getValue NOT IMPLEMENTED";
};
InputBaseWidget.prototype.getProps = function(){
	return null;
};
InputBaseWidget.prototype.getLang = function(){
	return null;
};

InputBaseWidget.prototype.readModel  = function(){
  throw "readModel NOT IMPLEMENTED";
};
///////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////
