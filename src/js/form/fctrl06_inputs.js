///////////////////////////////////////////////////////////////////////
//WIDGET   InputIssueNo  αριθμος:☐☐☐☐ label:☐☐☐☐☐ comment:☐☐☐☐☐
///////////////////////////////////////////////////////////////////////



InputIssueNo.prototype = new InputBaseWidget();
InputIssueNo.prototype.constructor = InputDate;
function InputIssueNo(fc, options) {
	InputBaseWidget.call(this);
	InputBaseWidget._init.call(this, fc, options);
	var inputCE = options.container;
	inputCE.addClass('arcw_issue');
	var self = this;

	var width = (options.width === undefined) ? 340 : options.width;

	this.inputNE = InputtLineUtil.createIntegerInput(inputCE, key_labels['issue_number'], 80);
	this.inputLE = InputtLineUtil.createTextInput(inputCE, key_labels['issue_label'], 150);
	this.inputTE = InputtLineUtil.createTextInput(inputCE, key_labels['issue_comment'], width);

	InputBaseWidget._setupReader.call(this);

	// SUBREADERS
	var parent_id = this.id;
	InputtLineUtil.setupSubReader(fc, parent_id, 'ea:issue:no', this.inputNE);
	InputtLineUtil.setupSubReader(fc, parent_id, 'ea:issue:label', this.inputLE);
	InputtLineUtil.setupSubReader(fc, parent_id, 'ea:issue:comment', this.inputTE);
}
InputIssueNo.prototype.getValue = function() {
	n = this.inputNE.val();
	l = this.inputLE.val();
	t = this.inputTE.val();
	var fv = null;
	if (pl.chk(n) || pl.chk(l) || pl.chk(t)) {
		fv = {
			n : n,
			l : l,
			t : t,
			z : 'issue'
		};
	}
	return [ this.getKey(), fv, this.id, this.link ];
};

InputIssueNo.prototype.readModel = function() {
	var v = this.model.value();
	if (v == null)
		return;

	// console.log("INPUT-TEXT READMODEL ",v, v.n,v.l,v.t);

	this.inputNE.val(v.n);
	this.inputLE.val(v.l);
	this.inputTE.val(v.t);
};

// /////////////////////////////////////////////////////////////////////
// WIDGET InputDate
// /////////////////////////////////////////////////////////////////////
InputDate.prototype = new InputBaseWidget();
InputDate.prototype.constructor = InputDate;
function InputDate(fc, options) {

	InputBaseWidget.call(this);
	InputBaseWidget._init.call(this, fc, options);
	var inputCE = options.container;
	inputCE.addClass('arcw_date');
	var self = this;

	var width = (options.width === undefined) ? 470 : options.width;

	this.inputYE = InputtLineUtil.createYearInput(inputCE, 'y', 67);
	this.inputME = InputtLineUtil.createMonthInput(inputCE, ' m', 37);
	this.inputDE = InputtLineUtil.createDayInput(inputCE, 'd', 24);
	this.inputTE = InputtLineUtil.createTextInput(inputCE, 'c', width);

	if (options.dating) {
		this.inputME.css('visibility', 'hidden');
		this.inputME.prev().css('visibility', 'hidden');
		this.inputDE.css('visibility', 'hidden');
		this.inputDE.prev().css('visibility', 'hidden');
	}

	// this._getProps = function(){
	// var rep ={};
	// var prescribed = self.prescribedSelectE.val();
	// if (pl.chk(prescribed)){
	// rep['prsd'] = prescribed;
	// }
	// console.log("DATE GETPROPS",rep);
	// return rep;
	// };

	InputBaseWidget._setupPropsSelect.call(this, options);
	InputBaseWidget._setupReader.call(this);

	// //SUBREADERS
	// var parent_id = this.id;
	// InputtLineUtil.setupSubReader(fc,parent_id,'ea:date:_year',this.inputYE);
	// InputtLineUtil.setupSubReader(fc,parent_id,'ea:date:_month',this.inputME);
	// InputtLineUtil.setupSubReader(fc,parent_id,'ea:date:_day',this.inputDE);
	// InputtLineUtil.setupSubReader(fc,parent_id,'ea:date:_comment',this.inputTE);
}
InputDate.prototype.getValue = function() {
	var y = this.inputYE.val();
	var m = this.inputME.val();
	var d = this.inputDE.val();
	var t = this.inputTE.val();
	var p = 'p';
	if (this.prescribedSelectE !== undefined) {
		p = this.prescribedSelectE.val();
	}
	var fv = DateValue.create(y, m, d, t, p);
	return [ this.getKey(), fv, this.id, this.link ];
};

InputDate.prototype.getProps = function() {
	return this._getProps();
	// var rep ={};
	// var prescribed = this.prescribedSelectE.val();
	// if (pl.chk(prescribed)){
	// rep['prsd'] = prescribed;
	// }
	// return rep;

};

InputDate.prototype.readModel = function() {
	var v = this.model.value();
	if (v == null)
		return;
	this.inputYE.val(v.y);
	this.inputME.val(v.m);
	this.inputDE.val(v.d);
	this.inputTE.val(v.t);
	var p = v.prsd;
	if (!pl.chk(p)) {
		p = 'p';
	}
	if (this.prescribedSelectE !== undefined) {
		this.prescribedSelectE.val(p);
	}
};

function DateValue(y, m, d, t, p) {
	this.y = y;
	this.d = d;
	this.m = m;
	this.t = t;
	this.prsd = p;
	this.z = 'date';
}

DateValue.create = function(y, m, d, t, p) {
	y = pl.fullTrim(y);
	m = pl.fullTrim(m);
	d = pl.fullTrim(d);
	t = pl.fullTrim(t);
	if (y == null && m == null && d == null && t == null) {
		return null;
	}
	var pok = (p === undefined) ? 'p' : p;
	return new DateValue(y, m, d, t, pok);
};

DateValue.prototype.hvalue = function() {
	var rep = '';

	if (this.t) {
		rep = this.t;
	} else {
		if (this.d) {
			rep = rep + this.d + '/';
		}
		if (this.m) {
			rep = rep + this.m + '/';
		} else if (!this.m && this.d) {
			rep = rep + ' /';
		}
		if (this.y) {
			rep = rep + this.y;
		}
	}

	return rep;
};

DateValue.prototype.serialize = function() {
	return {
		y : this.y,
		m : this.m,
		d : this.d,
		t : this.t,
		p : this.prsd,
		z : this.z
	};
};

DateValue.deserialize = function(map) {
	return DateValue.create(map.y, map.m, map.d, map.t, map.p);
};

// /////////////////////////////////////////////////////////////////////
// WIDGET InputURL
// /////////////////////////////////////////////////////////////////////
InputURL.prototype = new InputBaseWidget();
InputURL.prototype.constructor = InputURL;
function InputURL(fc, options) {

	InputBaseWidget.call(this);
	InputBaseWidget._init.call(this, fc, options);
	var inputCE = options.container;
	inputCE.addClass('arcw_url');
	var self = this;

	this.inputUE = InputtLineUtil.createTextInput(inputCE, 'u', 280);
	this.inputDE = InputtLineUtil.createTextInput(inputCE, 'd', 336);

	InputBaseWidget._setupReader.call(this);

	// SUBREADERS
	// var parent_id = this.id;
	// InputtLineUtil.setupSubReader(fc,parent_id,'ea:date:_year',this.inputYE);
	// InputtLineUtil.setupSubReader(fc,parent_id,'ea:date:_month',this.inputME);

};
InputURL.prototype.getValue = function() {
	u = this.inputUE.val();
	d = this.inputDE.val();
	var fv = UrlValue.create(u, d);
	return [ this.getKey(), fv, this.id, this.link ];
};
InputURL.prototype.readModel = function() {
	var v = this.model.value();
	if (v == null)
		return;
	this.inputUE.val(v.u);
	this.inputDE.val(v.d);
};

function UrlValue(u, d) {
	this.u = u;
	this.d = d;
	this.z = 'url';
}

UrlValue.create = function(u, d) {
	u = pl.fullTrim(u);
	d = pl.fullTrim(d);
	if (u == null && d == null) {
		return null;
	}
	return new UrlValue(u, d);
};

UrlValue.prototype.hvalue = function() {
	var rep = '';
	if (this.d) {
		rep = this.d;
	} else if (this.u) {
		rep = this.u;
	}
	return rep;
};

// /////////////////////////////////////////////////////////////////////
// WIDGET InputSelect
// /////////////////////////////////////////////////////////////////////
InputSelect.prototype = new InputBaseWidget();
InputSelect.prototype.constructor = InputSelect;
function InputSelect(fc, options) {
	InputBaseWidget.call(this);
	InputBaseWidget._init.call(this, fc, options);
	var inputCE = options.container;
	inputCE.addClass('arcw_select');

	var key = options.key;
	var width = options.width;
	var select_values = options.select_values;
	this.default_selection = options.default_selection; // === undefined ? null:
																											// options.default_selection;
	var onSelect = pl.chk(options.onSelect) ? options.onSelect : null;
	var readOnly = options.read_only === undefined ? false : options.read_only;

	this.select_values = select_values;

	// var inputE = jQuery('<select>');
	// //this.inputE = inputE;
	// if (readOnly){
	// inputE.attr("disabled", "disabled");
	// //inputE.attr("readonly", "readonly");
	// }
	// //inputE.attr('id',id2);
	// //inputE.attr('name',key);
	// inputE.css('width',width);
	// jQuery.each(select_values,function(k,v){
	// //if (v == null){ v = '';};
	// var option = jQuery('<option>').attr('value',k).text(v).appendTo(inputE);
	// // if (pl.chk(default_selection) && k == default_selection){
	// // option.attr('selected','selected');
	// // }
	// });
	// if (pl.chk(onSelect)){
	// inputE.change(onSelect);
	// }
	// if (pl.chk(this.default_selection)){
	// console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
	// console.log(this.default_selection,inputE);
	// console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
	// inputE.val(this.default_selection);
	// }
	// //inputE.select2({width:'copy'});
	//
	//

	var inputE = createSelectElement(options);
	// if (pl.chk(this.default_selection)){
	// inputE.val(this.default_selection);
	// }
	this.inputE = inputE;

	inputE.appendTo(inputCE);
	// InputBaseWidget._setupPropsSelect.call(this,options);

	InputBaseWidget._setupReader.call(this);
	// this._setupReader(); //enalaktika
};
InputSelect.prototype.getValue = function() {
	return [ this.getKey(), this.inputE.val(), this.id, this.link ];
};
InputSelect.prototype.readModel = function() {
	var value = this.model.value();
	if (value == 'undefined') {
		value = null;
	}
	if (value == null && pl.chk(this.default_selection)) {
		this.inputE.val(this.default_selection);
	} else {
		this.inputE.val(value);
	}
};

InputSelect.prototype.getProps = function() {
	// console.log('select.getProps');
	var cval = this.inputE.val();
	var self = this;
	return {
		'selected_value' : self.select_values[cval],
	};
};

// /////////////////////////////////////////////////////////////////////
// WIDGET InputText
// /////////////////////////////////////////////////////////////////////
InputText.prototype = new InputBaseWidget();
InputText.prototype.constructor = InputText;

function InputText(fc, options) {
	// console.log("_INPUTTEXT",options);
	InputBaseWidget.call(this);
	InputBaseWidget._init.call(this, fc, options);
	var inputCE = options.container;
	inputCE.addClass('arcw_text');

	var self = this;

	var key = options.key;
	var width = options.width;
	var autocomplete_url = options.autocomplete_url;
	var autocomplete_fn = options.autocomplete_fn;
	var text_align = (options.text_align === undefined) ? null : options.text_align;
	var validation = options.validation;
	var has_ref_disable = options.has_ref_disable === undefined ? false : options.has_ref_disable;
	var check_value_exists = options.check_value_exists === undefined ? false : options.check_value_exists;
	var readOnly = options.read_only === undefined ? false : options.read_only;

	this.strip_html = (options && options.strip_html) && pl.isHtml(this.model.value());

	// printf('tmp2.autocomplete({ source: "%s", minLength: 2});
	// ',$autocomplete_url);
	this.set_value_ref_label = options.set_value_ref_label === undefined ? false : options.set_value_ref_label;

	var inputE = jQuery('<input type="text" class="input_field"/>');
	this.inputE = inputE;
	if (readOnly) {
		// inputE.attr("disabled", "disabled");
		inputE.attr("readonly", "readonly");
	}

	if (options.disabled) {
		inputE.attr("disabled", "disabled");
	}

	if (this.strip_html) {
		if (this.model.value()) {
			this.rawHtml = this.model.value();
		}
		inputE.attr("readonly", "readonly");
	}

	if (options['default_value_uuid']) {
		if (this.model.value() == null) {
			this.model.value(uuid.v1());
		}
	}

	if (options['default_value']) {
		if (this.model.value() == null) {
			this.model.value(options['default_value']);
		}
	}

	if (options['relation_input_type']) {
		this.model.put('rel_type', options['relation_input_type']);
	}

	if (options.background_color !== undefined) {
		inputE.css("background-color", options.background_color);
	}

	if (options['has_ref_background_color'] && this.model.refItem()) {
		inputE.css("background-color", options['has_ref_background_color']);
	}

	if (options.on_input !== undefined) {
		// console.log("on_input1",options.on_input);
		// console.log("on_input2",options.on_input.fn);
		var fn = options.on_input.fn;
		var min_length = options.on_input.min_length;
		var txt_send = '';
		var txt = '';
		// var d_send = new Date().getTime();
		inputE.on('input', function(e) {
			if (inputE.val().length >= min_length) {
				setTimeout(function() {
					txt = inputE.val();
					// console.log("#2",txt);
					setTimeout(function() {
						// console.log("#3",txt);
						if (txt != txt_send) { // && txt.length > 2
							// var ddiff = (new Date().getTime()) - d_send;
							// var diff = txt.length - txt_send.length;
							// console.log("#4",'<' + txt + '>',diff,ddiff);
							txt_send = txt;
							fn(txt);
						}
					}, 500);
				}, 600);
			}
		});

	}

	if (check_value_exists) {
		inputE.change(function(e) {
			var element = jQuery(this);
			var val = element.val().trim();
			var vl = val.length;
			if (key == 'dc:subject:' && val.substring(vl - 1, vl) == '>') {
				val = val.substring(0, vl - 1);
			}
			if (val != null) {
				jQuery.ajax({
					type : 'GET',
					url : '/ws/prepo/check-value-exists',
					data : {
						term : val,
						e : key
					},
				}).done(function(data) {
					// console.log("#2",data);
					cnt = data['count'];
					if (cnt == 0) {
						element.css('background-color', '#FFFF99');
					} else {
						element.css('background-color', '#A9CCED');
					}
				});
			}
		});
	}

	var ref_item = this.model.refItem();
	if (pl.chk(ref_item) && has_ref_disable) {
		inputE.prop('disabled', true);
	}
	// inputE.attr('id',id2);
	// inputE.attr('name', key);
	inputE.css('width', width);
	if (text_align != null) {
		inputE.css('text-align', text_align);
	}
	if (pl.chk(autocomplete_url)) {
		var fn = pl.chk(autocomplete_fn) ? autocomplete_fn : 'generic';
		AutocompleteUtil[fn](inputE, autocomplete_url, 2);
	}

	var value_model = {};
	var inputPSE = null;

	// if (this.model.get('ref_label')){
	// this.model.value(this.model.get('ref_label'));
	// }

	if (options.extend_punctuation) {
		var normalizev = function(v, props) {
			if ((typeof v === "object") && ('hvalue' in v)) {
				// console.log('#hvalue');
				v = v.hvalue();
			} else if (props && props['selected_value']) {
				v = props['selected_value'];
			}
			return v;
		}

		var vl = null;
		if (!options.set_punctuation_as_value) {
			vl = pl.trim(this.model.value());
		}
		if (vl == null) {
			vl = '';
		}
		var vprops = this.model.props();
		vprops = vprops == null ? {} : vprops;
		vl = normalizev(vl, vprops);

		value_model['v'] = [ vl ];
		var nonEmpty = false;
		var childs = fc.getFieldModels(null, this.model.id());
		for (i in childs) {
			var c = childs[i];
			if (!c.isEmpty()) {
				nonEmpty = true;
				var props = c.props();
				// var v = normalizev(props['pnctn'] ? props['pnctn']: c.value(),
				// props);
				var v = normalizev((props != null && props['pnctn']) ? props['pnctn'] : c.value(), props);

				// if ( 'hvalue' in v){
				// console.log('#hvalue');
				// v = v.hvalue();
				// }
				k = c.key();
				if (!value_model[k]) {
					value_model[k] = [ {
						v : v,
						first : true,
						last : false
					} ];
				} else {
					value_model[k].push({
						v : v,
						first : false,
						last : false
					});
				}
				// vl = vl + ' - ' + v;
			}
		}
		if (nonEmpty) {

			// if ( (typeof v === "object")){
			for (i in value_model) {
				vm = value_model[i];
				vm[vm.length - 1].last = true;
				// model['items'][ model['items'].length - 1 ].last = true;
			}
			// }

			vl = Mustache.render(options.extend_punctuation, value_model);
			inputPSE = inputE.clone();
			// console.log("PUNCTUATION SET VALUE",vl);
			if (options.set_punctuation_as_value) {
				this.model.value(vl);
			}
			inputPSE.val(vl);
			inputPSE.attr("readonly", "readonly");
			inputPSE.attr("disabled", "disabled");
			vprops['pnctn'] = vl;
			this.model.props(vprops);
		} else if (vprops && vprops['selected_value']) {
			inputPSE = inputE.clone();
			inputPSE.val(vl);
			inputPSE.attr("readonly", "readonly");
			inputPSE.attr("disabled", "disabled");
		} else {
			delete vprops['pnctn'];
		}

	}

	if (options.extend_punctuation_subject) {
		var normalizev = function(v, props) {
			if ((typeof v === "object") && ('hvalue' in v)) {
				// console.log('#hvalue');
				v = v.hvalue();
			} else if (props && props['selected_value']) {
				v = props['selected_value'];
			}
			return v;
		}

		// var vl = pl.trim(this.model.value());
		// if (vl == null){
		// vl = '';
		// }
		var vl = '';
		var vprops = this.model.props();
		vprops = vprops == null ? {} : vprops;
		vl = normalizev(vl, vprops);

		value_model['v'] = [ vl ];
		var nonEmpty = false;
		var childs = [];
		if (options.extend_punctuation_subject_type == 'primary') {
			childs = fc.getFieldModelsByKey(options.extend_punctuation_subject);
		} else {
			childs = fc.getFieldModels(null, this.model.id());
		}
		if (childs.length > 0) {
			sep = '';
			for (i in childs) {
				var c = childs[i];
				if (!c.isEmpty() && c.key() != 'ea:obj-type:' && c.key() != 'ea:status:') {
					nonEmpty = true;
					var props = c.props();
					var v = normalizev(c.value(), props);
					k = c.key();
					vl = vl + sep + v;
					sep = ' -- ';
				}
			}
			inputE.val(vl);
			if (vl != '') {
				inputE.attr("readonly", "readonly");
				inputE.attr("disabled", "disabled");
			}
			vprops['pnctn'] = vl;
			this.model.value(vl);
			this.model.props(vprops);
		}
	}

	if (inputPSE != null) {
		inputPSE.appendTo(inputCE);
	} else {
		// PRIN: InputBaseWidget._setupPropsSelect.call(this,options);
		inputE.appendTo(inputCE);
	}
	if (this.input2E) {
		this.input2E.appendTo(inputCE);
	}
	;
	// META:
	InputBaseWidget._setupPropsSelect.call(this, options);

	if (pl.chk(validation)) {
		var validation_fn = validations_available[validation];
		if (jQuery.isFunction(validation_fn)) {
			this.validation_fn = validation_fn;
			ValidationUtil.setupValidation(inputE, validation_fn);
		}
	}

	InputBaseWidget._setupReader.call(this);
	// this._setupReader(); //enalaktika

};

InputText.prototype.getProps = function() {
	return this._getProps();
};
InputText.prototype.getLang = function() {
	return this._getLang();
};

// InputText.prototype.setLang = function(lang){
// if (pl.chk(this.langSelectE)){
// this.langSelectE.val(lang);
// // //this.spanLang.text(lang);
// }
// };

InputText.prototype.getValue = function() {
	var vl;
	if (this.strip_html) {
		vl = this.rawHtml;
	} else {
		vl = this.getRawValue();
	}
	// ean iparxi original value tis alazi to text (meso setText me8odo)
	// den xrisimopiite
	if (this.ob_value !== undefined) {
		this.ob_value.setText(vl);
		vl = this.ob_value;
	}
	return [ this.getKey(), vl, this.id, this.link ];
};

InputText.prototype.readModel = function() {
	if (this.set_value_ref_label) {
		var value = this.model.get('ref_label');
	} else {
		var value = this.model.value();
	}
	// var lang = this.model.lang();
	// this.setLang(lang);
	if (this.strip_html) {
		this.inputE.val(pl.stripHtml(value));
	} else {
		this.setRawValue(value);
	}
	ValidationUtil.doValidation(this.inputE, this.validation_fn);
};

InputText.prototype.getRawValue = function() {
	var vl = pl.trim(this.inputE.val());
	if (vl != null) {
		vl = vl.replace(/¶/g, "\n");
	}
	// prepei na thimamai tn pragmatikh
	return vl;
};

InputText.prototype.setRawValue = function(value) {
	value = pl.trim(value);
	if (value != null) {
		// ean to value ine object kei exi getText me8odo
		// perni apo eki to value kai apo8ikevi to original value
		// den xrisimopiite
		if (value.getText !== undefined && jQuery.isFunction(value.getText)) {
			this.ob_value = value;
			value = value.getText();
		}
		value = value.replace(/(\r\n|\n|\r)/g, "¶");
	}
	this.inputE.val(value);
	// console.log("SET_RAWVALUE",value, "##" + this.inputE.val() + "##");
};

// /////////////////////////////////////////////////////////////////////
// WIDGET InputTextArea
// /////////////////////////////////////////////////////////////////////
InputTextArea.prototype = new InputBaseWidget();
InputTextArea.prototype.constructor = InputTextArea;
function InputTextArea(fc, options) {
	InputBaseWidget.call(this);
	InputBaseWidget._init.call(this, fc, options);
	var model = this.model;

	var inputCE = options.container;
	var key = options.key;
	var width = options.width;
	this.teid = uuid.v1();

	inputCE.addClass('textarea-container');

	var persisted_edit_type = this.model.get('edit_type');
	this.edit_type = persisted_edit_type ? persisted_edit_type : options['default_edit_type'];

	this.model.put('edit_type', this.edit_type);
	this.inputE = pl.element('textarea', {
		id : this.teid
	}, {
		width : pl.pixelify(width)
	});
	this.inputE.appendTo(inputCE);

	if (this.edit_type) {

		var createEditOptionElement = function() {
			var optionArray = [ {
				valueText : 'html',
				displayText : 'Html Edit'
			}, {
				valueText : 'text',
				displayText : 'Text Edit'
			}, {
				valueText : 'text_br',
				displayText : 'Text Edit (break line)'
			} ];

			var optionElement = pl.generateSelectElement(optionArray);
			optionElement.addClass('select-stretched');
			return optionElement;
		}

		var toggleEditType = function(evt) {
			var optionElementValue = evt.target.value
			this.edit_type = optionElementValue;
			this.model.put('edit_type', optionElementValue);
			if (optionElementValue === 'html') {
				tinyMCE.EditorManager.execCommand('mceAddEditor', false, this.teid);
			} else {
				tinyMCE.EditorManager.execCommand('mceRemoveEditor', false, this.teid);
			}
		}
		var optionElement = createEditOptionElement();
		optionElement.val(this.edit_type);
		inputCE.append(optionElement);
		optionElement.on('change', {
			width : width
		}, toggleEditType.bind(this));
		tinyMCE.on('AddEditor', function(obj) {
			obj.editor.on('postRender', function() {
				var tinymceContainer = this.getContainer();

				if(!window['focusFix']){
						jQuery('body').on('focusin', function(e) {
							if (jQuery(e.target).closest(".mce-window").length) {
								e.stopImmediatePropagation();
							}
						});
						window['focusFix'] = true;
				}

				if (width) {
					tinymceContainer.style["width"] = pl.pixelify(width);
				}
			})
		});
		jQuery('.ui-dialog-content').on('dialog:beforeClose',  { teid : this.teid },  function(evt) {
			//console.log("mceRemoveEditor");
			tinyMCE.EditorManager.execCommand('mceRemoveEditor', false, evt.data.teid);
		});
	}
	InputBaseWidget._setupReader.call(this);
};

InputTextArea.prototype.getValue = function() {
	var vl = this.inputE.val();
	vl = pl.trim(vl);
	return [ this.getKey(), vl, this.id, this.link ];
};

InputTextArea.prototype.readModel = function() {
	var value = this.model.value();
	if (value != null) {
		value = value.replace(/⌋/g, "\n");
	}
	this.inputE.val(value);
};

InputTextArea.prototype.onRenderFinish = function(container) {
	if (this.edit_type === 'html') {
		tinyMCE.EditorManager.execCommand('mceAddEditor', false, this.teid);
	}
}

// /////////////////////////////////////////////////////////////////////
// WIDGET InputDisplayItem
// /////////////////////////////////////////////////////////////////////
// XRISIMOPIITE MONO SE PALIES ILOPIISIS
InputDisplayItem.prototype = new InputBaseWidget();
InputDisplayItem.prototype.constructor = InputDisplayItem;
function InputDisplayItem(fc, options) {
	InputBaseWidget.call(this);
	InputBaseWidget._init.call(this, fc, options);
	this.field_element = options.field_element;
	this.display_handler = options.display_handler;
	this.display_command = options.display_command;
	var okb = jQuery(options.ok_button);
	var reb = jQuery(options.remove_button);
	// this.button_ok = okb;
	// this.button_remove = reb;
	var self = this;

	// REMOVE
	reb.unbind('click');
	reb.click(function(e) {
		self.model.clear();
		self.remove(true);
		// console.log(self.model);
		// this.fc._renderForm(false);
	});

	this.pinput = new InputText(fc, options);
	this._displayItemFromServer();

};

InputDisplayItem.prototype.getValue = function() {
	return this.pinput.getValue();
};
InputDisplayItem.prototype.readModel = function() {
	return this.pinput.readModel();
};

// InputDisplayItem.prototype.setupFinish = function(){
// };

InputDisplayItem.prototype.remove = function(confirmFlag) {
	if (confirmFlag === undefined) {
		confirmFlag = true;
	}
	var rs = true;
	if (confirmFlag) {
		// rs=confirm("do you want to remove actor: " + this.pinput.getRawValue() +
		// "?");
		rs = confirm("do you want to remove ?");
	}
	if (rs) {
		this.fc.removeModelsTree(this.model.id());
		this.fc._renderForm(false);
		jQuery('div.ui-dialog-content').dialog("close");
	}
};

InputDisplayItem.prototype._displayItemFromServer = function(set_name_flag) {
	console.log("_displayItemFromServer");
	var self = this;
	if (set_name_flag === undefined) {
		set_name_flag = false;
	}
	var ref_id = self.model.f;
	// console.log("#1",ref_id);
	if (!pl.chk(ref_id)) {
		return;
	}
	var get_params = 'i=' + ref_id;
	var url = '/prepo/ws/item_metadata';
	jQuery.ajax({
		url : url,
		type : 'GET',
		data : get_params,
		success : function(data, textStatus, jqXHR) {
			self.field_element.empty();
			var itemFields = FieldModelAccessor.createFromRemoteData(data);
			if (set_name_flag) {
				var v_name_model = itemFields.getFirstFieldModel('dc:title:');
				if (v_name_model != null) {
					self.pinput.setRawValue(v_name_model.value());
				}
				// var v_name = itemFields.getFieldModels('dc:title:')[0].value();
				// self.pinput.setRawValue(v_name);
			}

			if (self.display_command) {
				var run_options = {
					'field_id' : self.model.id()
				};
				var tmp_context = self.fc.execCMD(self.display_command, self.field_element, run_options);
			} else if (self.display_handler) {
				// console.log("EXEC DISPLAY HANDLER #1#");
				var display_handler_this = {
					fc : self.fc,
					parent_model : self.model,
				}
				var my_root = self.display_handler.call(display_handler_this, ref_id, itemFields);
				my_root.appendTo(self.field_element);
			} else {
				self.field_element.append(jQuery("<pre>").text(JSON.stringify(data, null, 2)));
			}
		},
	});

};

// /////////////////////////////////////////////////////////////////////
// WIDGET InputObjectSearch
// /////////////////////////////////////////////////////////////////////
InputObjectSearch.prototype = new InputBaseWidget();
InputObjectSearch.prototype.constructor = InputObjectSearch;
function InputObjectSearch(fc, options) {

	InputBaseWidget.call(this);
	InputBaseWidget._init.call(this, fc, options);
	//this.model.put('STATE','INIT');

	// console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");
	// var mid = this.model.id();
	// var tmp_submodels = fc.getFieldModels(null, mid);
	// console.log(options);
	// console.log("id       : ",mid);
	// console.log("key      : ",this.model.key());
	// console.log("value    : ",this.model.value());
	// console.log("state    : ",this.model.get('STATE'));
	// console.log("submodels: ",tmp_submodels);
	// console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@");

	this.model.put("sub-root", true);
	var self = this;
	var select_command = options.select_command;
	if (!jQuery.isPlainObject(select_command)) {
		select_command = {
			'default' : select_command
		};
	}

	var field_element = options.field_element;
	var search_url = options.search_url;
	var new_button_flag = (options.new_button !== undefined);
	var key = options.key;

	this.key = key;

	this.skip_title_for_new_object = options['skip_title_for_new_object'] ? true : false;
	this.select_command = select_command;
	this.field_element = field_element;
	this.display_handler = options.display_handler;
	this.display_command = options.display_command;
	this.new_ojbect_dialog_stack_pop_on_create = options['new_ojbect_dialog_stack_pop_on_create'] !== undefined ? options['new_ojbect_dialog_stack_pop_on_create'] : 1;
	// this.throw_event_object_search_finish =
	// pl.chk(options['throw_event_object_search_finish']) ?
	// options['throw_event_object_search_finish']: false;
	// this.exec_select_command_after = options.exec_select_command_after;
	this.relation_commands = options['relation_commands'] ? options['relation_commands'] : null;

	if (options['value']) {
		this.model.value(options['value']);
	}

	if (options['new_button']) {
		for (k in options.new_button) {
			var id = options.new_button[k];
			jQuery(id).show();
		}
	}

	var identifier_id = this.fc.getFieldModels('ea:identifier:id');
	var item_id =  (identifier_id.length > 0) ? identifier_id[0].value() : null ;

	var search = function(sv) {
		console.log("SEARCH", sv);
		// self.button_ok.hide();
		// if(new_button_flag){
		// self.button_new.show();
		// }
		// self.button_cancel.show();
		// self.button_close.hide();
		// self.button_remove.hide();


		jQuery.ajax({
			url : search_url, // '/ws/archive/find-contributor',
			data : {
				term : sv,
				key : key,
				item_id : item_id
			},
			success : function(data, textStatus, jqXHR) {
				self.listE.empty();
				// console.log('SUCCESS_DATA:',data);
				var setupClick = function(self, ref_id, name) {
					return function(e) {
						e.preventDefault();
						if (ref_id != null) {
							var fc =self.fc;
							console.log("SEARCH ref_id != null");
							self.model.f = ref_id;
							// self.model.addProperty('ref_name',name);
							var subNode = fc.getFirstFieldModel('ea:sub-node:',self.model.id());
							if (subNode){
								var subNodeId = subNode.id();
								//console.log("REMOVE MODELS TREE",subNodeId,subNode);
								fc.removeModelsTree(subNodeId);
								fc.removeModel(subNodeId);
							}
							self.button_ok.show();
							if (new_button_flag) {
								for (k in self.button_new) {
									self.button_new[k].hide();
								}
								;
							}
							self.button_cancel.show();
							self.button_close.hide();
							self.button_remove.hide();
							self._displayActorFromServer(true);
						} else {
							// console.log("SEARCH ref_id == null");
							self.button_ok.show();
							if (new_button_flag) {
								for (k in self.button_new) {
									self.button_new[k].hide();
								}
								;
							}
							self.button_cancel.show();
							self.button_close.hide();
							self.button_remove.hide();
							//console.log("#2 execSELECT_COMMAND");
							self.model.value(name);
							self.execSELECT_COMMAND();
						}
					};
				};

				for (i in data) {
					value = data[i].value;
					// console.log("V:",value);
					if (value) {
						var li = jQuery("<li>");
						var ref_id = value[0];
						var name = value[1];
						var cnt = value[2];
						var cnt2 = value[3];
						var obj_type = value[4];
						var item = null;
						var text = name;

						if (cnt !== undefined && cnt !== null) {
							text += " (" + cnt + ")";
							if (cnt2 > 0) {
								text += "(" + cnt2 + ")";
							}
						}

						item = jQuery('<a>').text(text);
						item.click(setupClick(self, ref_id, name));
						li.append(item);

						if (obj_type !== undefined && obj_type !== null) {
							obj_type_text = " [" + obj_type + "]";
							item2 = jQuery('<span class="arcw_li_obj">').text(obj_type_text);
							li.append(item2);
						}

						li.addClass('arcw_li_res');

						if (ref_id != null) {
							var ins = jQuery('<a target="_blanc" style="color:blue">');
							ins.click(setupClick(self, ref_id, name));
							ins.text("[" + "Insert" + "]");
							li.append(ins)
						}

						if (ref_id != null) {
							var ln = jQuery('<a target="_blanc" style="color:blue">');
							ln.attr("href", '/archive/item/' + ref_id);
							ln.text("[" + "Opac" + "]");
							li.append(ln);
						}

						self.listE.append(li);
					}
				}

			}
		});
	};

	var inputCE = options.container;
	inputCE.addClass('arcw_contributor_search');
	var re = jQuery('<div>');
	options.container = re;
	options.on_input = {
		min_length : 2,
		fn : function(txt) {
			search(txt);
		}
	};
	this.pinput = new InputText(fc, options);

	var okb = jQuery(options.ok_button);
	var neb = {};
	if (jQuery.isPlainObject(options.new_button)) {
		for (k in options.new_button) {
			neb[k] = jQuery(options.new_button[k]);
		}
	} else {
		neb['default'] = jQuery(options.new_button);
	}

	var cab = jQuery(options.cancel_button);
	var reb = jQuery(options.remove_button);
	var clb = jQuery(options.close_button);
	//var crb = jQuery(options.create_button);

	this.button_ok = okb;
	this.button_new = neb;
	this.button_cancel = cab;
	this.button_remove = reb;
	this.button_close = clb;
	//this.button_create = crb;

	//this.button_create.hide();
	this.button_ok.hide();
	this.button_cancel.show();
	this.button_close.hide();
	this.button_remove.hide();

	// jQuery('div.ui-dialog-content').dialog( "close" );

	// OK
	okb.click(function(e) {
		//alert("IS: OK");
		// jQuery(this).dialog("close");
	});

	// REMOVE
	reb.unbind('click');
	reb.click(function(e) {
		//alert("IS: REMOVE");
		// console.log("REMOVE");
		self.model.clear();
		self.remove(true);
		// console.log(self.model);
		// this.fc._renderForm(false);
	});


	// CANCEL
	cab.unbind('click');
	cab.click(function(e) {
		console.log("CANCEL");
		// var ov = self.pinput.getRawValue();
		self.model.clearServerValues();
		self.remove(false);
		// self.model.value(ov);
		// self.fc._renderForm(false);
	});

	if (new_button_flag) {
		// NEW
		var createNewButtonHandler = function(key) {
			return function(e) {
				console.log("#NEW#");
//				//self.button_create.show();
//				// self.button_ok.show(); //OK BUTTON
//				self.button_ok.hide();
//				for (k in self.button_new) {
//					self.button_new[k].hide();
//				}
//				;
//				self.button_cancel.show();
//				self.button_close.hide();
//				self.button_remove.hide();
				self.execSELECT_COMMAND(key,true);
			};
		}
		for (k in neb) {
			// neb[k].find('span').text('new');
			neb[k].unbind('click');
			neb[k].click(createNewButtonHandler(k));
		}
	}

	this.initialSearch = true;
	this.execFlag = false;
	var mid = this.model.id();
	var submodels = fc.getFieldModels(null, mid);
	if (this.model.f != null) { // EAN IPARXI STON SERVER
		//console.log("@@@: InputObjectSearch INIT with refItem");
		//self.button_create.hide();
		//self.button_ok.css('display','block');

		self.button_ok.show();
		for (k in self.button_new) { self.button_new[k].hide(); }
		self.button_cancel.hide();
		self.button_close.hide();
		self.button_remove.show();

		this.execFlag = false;
		this._displayActorFromServer();
		return;
	} else if (submodels.length > 0) {// EAN EXI DEDOMENA IDI STO DENTRO
		//alert("#InputObjectSearch INIT with submodels");
		//console.log("@@@: InputObjectSearch INIT with submodels");
		var model_data = self.model.data();
		var new_type = (model_data['new_type'])? model_data['new_type'] : false;
		self.initialSearch = false;
		self.button_ok.hide();
		for (k in self.button_new) {
			if (new_type ){
				if (k == new_type){
					// var btext = self.button_new[k].text();
					// self.button_new[k].text(btext.replace("new", "edit"));
					self.button_new[k].show();
				} else {
					self.button_new[k].hide();
				}
			} else {
				self.button_new[k].show();
			}
		}
		self.button_cancel.hide();
		self.button_close.show();
		if (pl.chk(self.model.value())){  self.button_remove.show(); } else { self.button_remove.hide(); }
		this.execFlag = false;
	} else {
		//console.log("@@@: InputObjectSearch INIT default");
		self.button_ok.hide();
		for (k in self.button_new) { self.button_new[k].show(); }
		self.button_close.show();
		self.button_cancel.hide();
		if (pl.chk(self.model.value())){  self.button_remove.show(); } else { self.button_remove.hide(); }
	}

	//alert("InputObjectSearch INIT");
	//SEARCH
	//////////////////////////////////////////////////////////////////////////
	var searchButton = jQuery('<button tabindex="-1">search</button>');
	searchButton.click(function(e) {
		var rv = pl.fullTrim(self.pinput.getRawValue());
		// if (rv == null) { .//NA MPEI OPTION AN 8a PSAXNEI ADIA?
		// return;
		// }
		search(self.pinput.getRawValue());
	});

	// options.container = re;
	// this.pinput = new InputText(fc,options);
	// console.log('##1#',this.pinput);
	re.append(searchButton);
	inputCE.append(re);

	this.listE = jQuery("<ul>");
	re.append(this.listE);
	// for (var i=0;i<42;i++){
	// this.listE.append(jQuery('<br/>'));
	// }

	var rv = self.pinput.getRawValue();
	if (rv == undefined) {
		rv = this.model.value();
	}

	if (self.initialSearch) {
		//console.log("initital-search");
		search(rv);
	}

};
InputObjectSearch.prototype.getValue = function() {

	// window.wpinput=this.pinput.getValue(); /* sim */

	return this.pinput.getValue();

};
InputObjectSearch.prototype.readModel = function() {
	return this.pinput.readModel();
};

InputObjectSearch.prototype.setupFinish = function() {
	//console.log("InputObjectSearch.setupFinish");
	if (!this.execFlag) {
		return;
	}
	this.execSELECT_COMMAND(this.key);

};

InputObjectSearch.prototype.remove = function(confirmFlag) {
	if (confirmFlag === undefined) {
		confirmFlag = true;
	}
	var rs = true;
	if (confirmFlag) {
		// rs=confirm("do you want to remove actor: " + this.pinput.getRawValue() +
		// "?");
		rs = confirm("do you want to remove ?");
	}
	if (rs) {
		this.fc.removeModelsTree(this.model.id());
		this.fc._renderForm(false);
		jQuery('div.ui-dialog-content').dialog("close");
	}
};

InputObjectSearch.prototype.execSELECT_COMMAND = function(key,newFlag) {
	//key to klidi tou "select_command"  OXI tou modelou

	var skip_title_for_new_object = this.skip_title_for_new_object;

	if (newFlag !== undefined && newFlag){

	}

	console.log("execSELECT_COMMAND:: ", key);
	var select_command = null;
	if (key != undefined) {
		console.log("execSELECT_COMMAND#1");
		select_command = this.select_command[key];
		this.model.put('new_type', key);
		console.log('select_command', key, select_command);
	} else {
		console.log("execSELECT_COMMAND#2");
		if (this.model.get('new_type') != undefined) {
			// alert('execSELECT_COMMAND:: EMPTY KEY');
			key = this.model.get('new_type');
			select_command = this.select_command[key];
		} else {
			console.log("execSELECT_COMMAND#3");
			alert('SC?');
			commands.default_inputbox_extend = {
				action : 'extend',
				opts : {
					label : null,
					primary : 'default_inputbox',
					// commands : [ 'default_inputbox', 'personal_type' ],
					commands : [ 'default_inputbox', ],
				}
			};

			commands.default_inputbox = {
				action : 'setupField',
				opts : jQuery.extend({}, opts_text, {
					'key' : 'tmp:k1',
					'label' : key_labels[this.model.key()],
					'show_help' : true,
					float : 'left',
				})
			};

			this.select_command['default_inputbox'] = 'default_inputbox_extend';
			select_command = this.select_command['default_inputbox'];
			this.model.put('new_type', 'default_inputbox');

			// console.log('value:', this.model.value());
			// console.log('key:', this.model.key());
			// console.log('commands:', this.select_command);

		}

	}



	this.fc.populateData();
	this.field_element.empty();
//	var run_options = {
//		'field_id' : this.id
//	};
//	console.log('exec')
//	var context = this.fc.execCMD(select_command, this.field_element, run_options);


  var self = this;
		var buttons = [
		{
		text : 'create',
		'actions' : [
		{
			'name' : 'clickHandler',
			'info':'create',
			'fn': function(event, fc, model,util){
				console.log("CLICK HANDLER FN");
				var mctx = new MessageContext();
				fc.populateData();
				/** @type FieldModel */
				var root = model;
				var root_id = root.id();
				var parent_id = root.link();
				var parent_model = fc.getFieldModel(parent_id);

				if (!pl.chk(root.value())){
					if (skip_title_for_new_object){
						var new_value = key_labels[parent_model.key()];
						parent_model.value(new_value);
						root.value(new_value);
					}else{
						mctx.addError('missing object title');
					}
				} else {
					parent_model.value(root.value());
				}
				fc.validateSubitems(root,mctx);
				if (mctx.hasErrors()){
					//console.log("dialog ERRORS");
					var msgElement = jQuery('#dialogjsmessages');
					renderMessageContext(mctx,msgElement);
					//alert("form has errors operation aborted");
					return;
				}

				//console.log(" ⛒ PROPELER START ⛒");
				fc.blockUI();
				//root.put('STATE','CREATE_START');
				fc.remoteCreateSubItem(root, {
						'convert_root_to_title' : true,
						'set_refitem_to_root' : true,
						successHandler : function(data, textStatus, jqXHR) {
							//console.log(" ⛒ PROPELER STOP ⛒");
							fc.unblockUI();
							//root.put('STATE','CREATE_FINISH');
							console.log("SUCCESS",data);
							var new_item_id = data['item_id'];
							var label = data['label'] ? data['label'] : root.value();
							//console.log("NEW ITEM ID " ,new_item_id);
							parent_model.refItem(new_item_id);
							parent_model.value(label);
							if (data['ot']){
								parent_model.put('ot',data['ot']);
							}
							fc.removeModelsTree(root_id);
							fc.removeModel(root_id);
							self.readModel();
							//console.log("PARENT: ",parent_model.id(),parent_model.refItem(),parent_model.value(),parent_model);
							var pc = self.new_ojbect_dialog_stack_pop_on_create;
							util.close();
							for (i=0;i<pc;i++) {
								fc.extend_windows_stack.pop();
							}
							//jQuery(".ext_dialog.ui-dialog").each(function(i,e){jQuery(e).remove();});
						}
					});

					//util.close();
			}
		},
		],
	},
	{
		text: 'close',
		'actions': [{
			'info':'close',
			'name' : 'clickHandler',
			'fn': function(event, fc, model,util) {
				var parent_model = self.model;
				fc.populateData();
				parent_model.value(model.value());
				var pc = self.new_ojbect_dialog_stack_pop_on_create;
				util.close();
				for (i=0;i<pc;i++) {
					fc.extend_windows_stack.pop();
				}
			}
		}]
	}
	];
//	  var getKey = function(){
//	    return "tmp:k:k1";
//	  };
	var pos = {
	  my : "center top",
	  at : "center top"
	};
	var new_key = 'ea:sub-node:';
	var parent_model = self.model;
	var nm = fc.getFirstFieldModel(new_key,this.id);
	if (! nm){  nm = fc.createFieldModel(new_key,parent_model.value(),this.id); }
	//console.log("ID: "  + nm.id());
	//this.model.put('STATE','NEW_DIALOG');
	//(title, cmd, fid, position, buttons, getKey,closeOtherDialogsFlag,beforeCloseHandler)
	var beforeCloseHandler = function(event,fid){
		// console.log('beforeCloseHandler fid:',fid);
		// console.log('beforeCloseHandler event:',event);
		//alert(parent_model.value() + " | " + nm.value());
		var ov = parent_model.value();
		var nv = nm.value();
		if (! nv || jQuery.trim(nv) == ''){
			nv = 'empty';
		}
		console.log('XXXX0A',parent_model.id(),parent_model.key(),parent_model.value());
		console.log('XXXX0B',nm.id(),nm.key(),nm.value());
		if (ov != nv) {
			//alert('XX: ' + ov + " | " + nv);
			console.log('XXXX1',parent_model.id(),parent_model.key(),parent_model.value());
			//fc.populateData();
			parent_model.value(nv);
			//fc.populateData();
			console.log('XXXX2',parent_model.id(),parent_model.key(),parent_model.value());
		}

		//console.log('XXXX3',parent_model.id(),parent_model.key(),parent_model.value());
		//alert(parent_model.value() + " | " + nm.value());
	}

	fc._showExtend('new',select_command, nm.id(), pos, buttons,null,true,beforeCloseHandler);


};

InputObjectSearch.prototype._displayActorFromServer = function(set_name_flag) {
	console.log("InputObjectSearch._displayActorFromServer");
	var self = this;
	if (set_name_flag === undefined) {
		set_name_flag = false;
	}
	var ref_id = self.model.f;
	if (!pl.chk(ref_id)) {
		return;
	}
	var get_params = 'i=' + ref_id;
	var url = '/prepo/ws/item_metadata';
	jQuery.ajax({
		url : url,
		type : 'GET',
		data : get_params,
		success : function(data, textStatus, jqXHR) {

			self.field_element.empty();
			var actorFields = FieldModelAccessor.createFromRemoteData(data);
			if (set_name_flag) {
				var title = null;
				var jdataModel = actorFields.getFirstFieldModel('tmp:jdata');
				if (jdataModel){
					var jdata = jdataModel.value();
					console.log('jdata',jdata);
					if (jdata['label']){
						title = jdata['label'];
					}
				}
				if (! title) {
					var titleModel = actorFields.getFirstFieldModel('dc:title:');
					if (titleModel){
						title = titleModel.value();
					}
				}
				if (title) {
					self.pinput.setRawValue(title);
				}
			}

			var ot = null;
			var otModel = actorFields.getFirstFieldModel('ea:obj-type:');
			if (otModel){
				self.pinput.model.put('ot',otModel.value());
			}


			if (self.display_command) {
				var run_options = {
					'field_id' : self.model.id()
				};
				var tmp_context = self.fc.execCMD(self.display_command, self.field_element, run_options);
			} else if (self.display_handler) {
				var display_handler_this = {
					fc : self.fc,
					parent_model : self.model,
				}
				var my_root = self.display_handler.call(display_handler_this, ref_id, actorFields);
				my_root.appendTo(self.field_element);
			} else {
				self.field_element.append(jQuery("<pre>").text(JSON.stringify(data, null, 2)));
			}

		},
	});

};

// /////////////////////////////////////////////////////////////////////
// WIDGET InputName
// /////////////////////////////////////////////////////////////////////
// DEN XRISIMOPIITE TO NameValue
NameValue.prototype.constructor = NameValue;
function NameValue(t, n) {
	this.t = t;
	this.n = n;
	this.z = 'name';
}

NameValue.create = function(t, n) {
	t = pl.fullTrim(t);
	n = pl.fullTrim(n);
	if (t == null && n == null) {
		return null;
	}
	return new NameValue(t, n);
};

NameValue.prototype.getText = function() {
	return this.n;
};

NameValue.prototype.setText = function(n) {
	this.n = n;
};

InputName.prototype = new InputBaseWidget();
InputName.prototype.constructor = InputName;
function InputName(fc, options) {

	InputBaseWidget.call(this);
	InputBaseWidget._init.call(this, fc, options);

	var inputCE = options.container;
	inputCE.addClass('arcw_name');
	var self = this;
	var re = jQuery('<div>');

	var types_map = {
		'undefined' : 'undefined',
		'surname_first' : 'Surname first',
		'givenname_first' : 'Given name first',
		'mononym' : 'Mononym',
		'unknown_order' : 'Unknown order',
	};

	var sel = jQuery('<select>');
	jQuery.each(types_map, function(k, v) {
		var opte = jQuery('<option>').attr('value', k).text(v);
		sel.append(opte);
	});
	re.append(sel);
	this.selectE = sel;
	this.inputN = InputtLineUtil.createTextInput(re, null, 520);
	inputCE.append(re);

	InputBaseWidget._setupPropsSelect.call(this, options);
	InputBaseWidget._setupReader.call(this);

	// //SUBREADERS
	var parent_id = this.id;
	InputtLineUtil.setupSubReader(fc, parent_id, 'ea:name:_type', this.selectE);

};

InputName.prototype.getProps = function() {
	return this._getProps();
};
InputName.prototype.getLang = function() {
	return this._getLang();
};

InputName.prototype.getValue = function() {
	// var fv = new NameValue(this.selectE.val(),this.inputN.val());
	var fv = this.inputN.val();
	return [ this.getKey(), fv, this.id, this.link ];
};
InputName.prototype.readModel = function() {
	// READ SUBMODEL
	var type = null;
	var models = this.fc.getFieldModels('ea:name:_type', this.id);
	if (models.length == 1) {
		type = models[0].value();
	}
	if (type != null) {
		this.selectE.val(type);
	}
	var v = this.model.value();
	if (v == null)
		return;
	if (typeof v == 'object') {
		this.selectE.val(v.t);
		this.inputN.val(v.n);
	} else {
		this.inputN.val(v);
	}

};

// /////////////////////////////////////////////////////////////////////
// WIDGET InputHidden
// /////////////////////////////////////////////////////////////////////

InputHidden.prototype = new InputBaseWidget();
InputHidden.prototype.constructor = InputHidden;
function InputHidden(fc, options) {

	InputBaseWidget.call(this);
	InputBaseWidget._init.call(this, fc, options);

	var key = options.key;
	var value = options.value;

	var inputContainer = options.inputContainer;
	var inputCE = options.container;

	inputContainer.css('display', 'none');
	inputCE.css('display', 'none');

	// var self = this;

	var inputE = jQuery('<input type="hidden" />');
	this.inputE = inputE;
	inputE.appendTo(inputCE);

	InputBaseWidget._setupPropsSelect.call(this, options);
	InputBaseWidget._setupReader.call(this);

	if (options.aggregate_value) {
		this.model.put('aggregate_value', true);
	}

	this.model.value(value);
	// var properties = options.properties;
	// if (properties){
	// this.model.props(properties);
	// }

};

InputHidden.prototype.getProps = function() {
	return this._getProps();
};
InputHidden.prototype.getLang = function() {
	return this._getLang();
};

InputHidden.prototype.getValue = function() {
	var fv = this.inputE.val();
	return [ this.getKey(), fv, this.id, this.link ];
};

InputHidden.prototype.readModel = function() {
	this.inputE.val(this.model.value());
};

InputHidden.prototype.setupFinish = function() {
};

// /////////////////////////////////////////////////////////////////////
// WIDGET InputEmpty
// /////////////////////////////////////////////////////////////////////

InputEmpty.prototype = new InputBaseWidget();
InputEmpty.prototype.constructor = InputEmpty;
function InputEmpty(fc, options) {

	InputBaseWidget.call(this);
	InputBaseWidget._init.call(this, fc, options);

	var key = options.key;
	var value = options.value;

	var inputContainer = options.inputContainer;
	var inputCE = options.container;

	// var self = this;

	var inputE = jQuery('<span>&nbsp;</span>');
	inputE.appendTo(inputCE);

	InputBaseWidget._setupPropsSelect.call(this, options);
	InputBaseWidget._setupReader.call(this);

};

InputEmpty.prototype.getProps = function() {
	return this._getProps();
};
InputEmpty.prototype.getLang = function() {
	return this._getLang();
};

InputEmpty.prototype.getValue = function() {
	return null;
};

InputEmpty.prototype.readModel = function() {
};

InputEmpty.prototype.setupFinish = function() {
};

// /////////////////////////////////////////////////////////////////////
// WIDGET InputZ3950
// /////////////////////////////////////////////////////////////////////

InputZ3950.prototype = new InputBaseWidget();
InputZ3950.prototype.constructor = InputZ3950;
function InputZ3950(fc, options) {

	InputBaseWidget.call(this);
	InputBaseWidget._init.call(this, fc, options);

	var self = this;
	var search_url = options.search_url;
	var inputCE = options.container;

	this.field_element = options.field_element;
	this.display_handler = options.display_handler;
	this.selected_record = null;

	// var key = options.key;
	// var value = options.value;
	// var inputContainer = options.inputContainer;

	var setupClick = function(self, rec) {
		return function(e) {
			e.preventDefault();
			console.log("Z3950 CLICK", rec['title']);
			self.selected_record = rec;

			self.field_element.empty();
			// self.field_element.append(jQuery("<pre>").text(JSON.stringify(rec,
			// null, 2) ));
			var my_root = jQuery('<div class="subitem">');

			// main title
			var h = jQuery('<h4>');
			h.text(rec['title']);
			h.appendTo(my_root);

			// my_root.append(jQuery("<pre>").text(rec['marc_pretty']));
			// my_root.append(jQuery("<pre>").text(JSON.stringify(rec['marc_fields'],
			// null, 2)));

			var marc_arr = []; //2nd
			var ul = jQuery('<ul class="subitem">');
			for ( var index in rec['marc_fields']) {
				if (rec['marc_fields'].hasOwnProperty(index)) {
					var marcRow = rec['marc_fields'][index];
					for ( var tag in marcRow) {
						if (marcRow.hasOwnProperty(tag)) {
							var li = jQuery('<li>');
							jQuery('<span class="dlab">').text(tag).appendTo(li);
							if (typeof marcRow[tag] === 'string') {
								marc_arr[tag]= marcRow[tag]; //2nd
								// empty indicators
								var ind = "<span class='marc-ind'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class='marc-field' key='"+tag+"'>";
								jQuery('<span class="dval-mono">').html(ind + marcRow[tag] + "</span>").appendTo(li);
							} else if (typeof marcRow[tag] === 'object') {
								var ind1 = "&nbsp;";
								var ind2 = "&nbsp;";
								var htmlText = "";
								for ( var code in marcRow[tag]) {
									if (marcRow[tag].hasOwnProperty(code)) {
										marc_arr[tag+code]= marcRow[tag][code]; //2nd
										if (code === "ind1") {
											ind1 = marcRow[tag][code];
										} else if (code === "ind2") {
											ind2 = marcRow[tag][code];
										} else {
											htmlText = htmlText + "<span class='marc-code'>&nbsp;&Dagger;" + code + "&nbsp;</span><span class='marc-field' key='"+tag+code+"'>" + marcRow[tag][code] + "</span>";
										}
									}
								}
								var ind = "<span class='marc-ind'>&nbsp;&nbsp;" + ind1 + ind2 + "&nbsp;&nbsp;</span><span class='marc-field' >";
								jQuery('<span class="dval-mono">').html(ind + htmlText + "</span>").appendTo(li);
							}
							li.appendTo(ul);
						}
					}
				}
			}
			ul.appendTo(my_root);


		/////////////////////////////////////////////////////////////////////////////////////////
			var marc_mapping = {
				  "010a": "ea:manif:ISBN_Number",
				  "200a": "dc:title:",
				  "200f": "ea:manif:Title_Responsibility",
				  "200g": "ea:manif:Title_Remainder",
				  "200e": "ea:manif:Title_Remainder",
				  "200i": "ea:manif:Title_PartName",
				  "200h": "ea:manif:Title_PartNumber",
				  "205a": "ea:manif:Edition_Remainder",
				  "215a": "ea:manif:pages",
				  "225a": "ea:manif:book_series_title",
				  "300": "ea:auth:NotePublic",
				  //periodic
				  "326a": "ea:periodic:frequency",
				  "207a": "ea:periodic:issues_time_range",
				  "200d": "ea:manif:Series_Title",
				  "200x": "ea:periodic:ISSN_Number",
				};

			var import_button = jQuery('<button class="import_button" type="button">Import</button>');
			var fn_import = function(e){
				e.preventDefault();
				body = my_root.closest('.page-prepo-edit-step1');
				jQuery.each( marc_mapping , function( key, value ) {
					if (( key in marc_arr )){
						body.find('[key="'+ value +'"]').find("input").val(marc_arr[key]);
					}
				});
				body.find('[key="ea:manifestation:tmp"]').find("input").val(marc_arr["200a"]);
				jQuery('div.ui-dialog-content').dialog("close");

				//e.preventDefault();
				//body = my_root.closest('.page-prepo-edit-step1');
				//jQuery.each( marc_mapping , function( key, value ) {
				//	text_value = my_root.find('[key="'+ key +'"]').text();
				//	body.find('[key="'+ value +'"]').find("input").val(text_value);
				//});
				//text_value = my_root.find('[key="200a"]').text();
				//body.find('[key="ea:manifestation:tmp"]').find("input").val(text_value);
				//jQuery('div.ui-dialog-content').dialog("close");
			};
			import_button.click(fn_import);
			import_button.appendTo(my_root);
			////////////////////////////////////////////////////////////////////////////////////////

			var copyButton = jQuery('<form action="/prepo/z3950/copycatalog" method="POST" target="_blank" >' + '<input type="hidden" name="data" value=\'' + JSON.stringify(rec) + '\'/>' + '<input type="submit" value="Copy tab">' + '</form>');
			copyButton.appendTo(my_root);

			my_root.appendTo(self.field_element);
			self.button_ok.show();
		};
	};

	var search = function(sv) {
		// console.log("Z3950 SEARCH", sv);

		jQuery.ajax({
			url : search_url,
			data : {
				term : sv
			},
			success : function(data, textStatus, jqXHR) {
				self.listE.empty();
				// console.log(data);
				if (!data['records']) {
					return;
				}

				var records = data['records'];
				for ( var idx in records) {
					var li = jQuery("<li>");
					li.addClass('arcw_li_res');

					var rec = records[idx];
					var title = rec['title'];
					// console.log(rec);

					var item = jQuery('<a>').text(title);
					item.click(setupClick(self, rec));

					li.append(item);
					self.listE.append(li);
				}
			}
		});
	};

	inputCE.addClass('arcw_contributor_search');
	var re = jQuery('<div>');
	options.container = re;
	options.on_input = {
		min_length : 2,
		fn : function(txt) {
			search(txt);
		}
	};
	this.pinput = new InputText(fc, options);

	var searchButton = jQuery('<button tabindex="-1">search</button>');
	searchButton.click(function(e) {
		var rv = pl.fullTrim(self.pinput.getRawValue());
		if (rv === null) {
			return;
		}
		search(self.pinput.getRawValue());
	});
	re.append(searchButton);
	inputCE.append(re);

	// jQuery("<hr/>").appendTo(inputCE);
	var div2 = jQuery("<div>");
	div2.appendTo(inputCE);
	options.container = div2;
	this.listE = jQuery("<ul>");
	this.listE.appendTo(div2);

	var okb = jQuery(options.ok_button);
	this.button_ok = okb;
	okb.click(function(e) {
		// console.log('ok clicked');
		if (self.selected_record !== null) {
			// console.log('selected record: ' + self.selected_record['title']);
			var model_title = fc.getFirstFieldModel('dc:title:');
			// console.log("current title is:", model_title, "value:",
			// model_title.value());
			if (model_title.value() === null) {
				// console.log("setting title...");
				model_title.value(self.selected_record['title']);
			}
		}
	});

	InputBaseWidget._setupPropsSelect.call(this, options);
	InputBaseWidget._setupReader.call(this);

};

InputZ3950.prototype.getProps = function() {
	return this._getProps();
};

InputZ3950.prototype.getLang = function() {
	return this._getLang();
};

InputZ3950.prototype.setupFinish = function() {
};

InputZ3950.prototype.getValue = function() {
	return this.pinput.getValue();
};

InputZ3950.prototype.readModel = function() {
	return this.pinput.readModel();
};
