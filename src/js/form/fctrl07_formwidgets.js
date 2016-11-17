
///////////////////////////////////////////////////////////////////////




function FormWidgets(formController, opts,inputContainer){
  this.fc = formController;
  this.inputContainer = inputContainer;
  this.opts  = opts;
  this.c3 = 0;
  this.c5 = 0;
};


FormWidgets.prototype.setupSelectKey = function(skey,model){
    var opts = this.opts;
    var el = jQuery('<select>');
    //inputE.attr('id',id2);
    el.css('width',opts.select_key_width);
    var mymap = null;
    if ( opts['lock_select_key'] &&  model && jQuery.trim(model.value()) != ''){
      var mkey = model.key();
      if (opts.select_key_map[mkey]){
        mymap = {};
        mymap[mkey]=opts.select_key_map[mkey];
      }
    }
    if (!mymap || FormUtil.mapIsEmpty(mymap)){
      mymap = opts.select_key_map;
    }
    jQuery.each(mymap,function(k,v){
      var opte = jQuery('<option>').attr('value',k).text(v);//.css('width',opts.select_key_width);
      el.append(opte);
            //.appendTo(el);
    });
    if (!jQuery.isArray(skey)){
      el.val(skey);
    }
    //el.select2();
    return el;
  };

FormWidgets.prototype.setupButton = function(inputContainer, click_handler, context){
  var opts = this.opts;
  //var inputContainer = this.inputContainer;
  var self = this;
  self.c3 ++;
  var el = jQuery('<button tabindex="-1" class="add_button" >');
  var add_button_class = opts.add_button_class !== undefined ? true : false;
  el.text(opts.add_button_label);

  if(add_button_class){
  	el.attr('class', opts.add_button_class);
  }

  var repeatStyleOrdered = opts['repeat_style'] !== undefined ? opts['repeat_style']: false;
  el.attr('id','b' + self.c3);

  if (pl.chk(click_handler)){
    el.click(click_handler);
  } else {
    el.click(function(e){
      e.preventDefault();
      var ie = self.setupInput(null, { fromAddButton: true, context: context}, inputContainer)[1];
      ie.appendTo(inputContainer);
    });
  }
  return el;
};


  FormWidgets.prototype.setupButton_remove = function(model_id){
  	 var el = jQuery('<div class="remv_button">');
     el.text('Remove');
     el.click(function(e){
    	 if( el.parent().parent().children('.input_wrapper').length > 1 && el.parent().children('.input_field').val()!='' ){
    	 		 var dial = jQuery('<div id="dialog" title="Warning">');
    	 		 dial.text('Are you sure that you want to permanently delete the selected field?');
           e.preventDefault();
           dial.dialog({
             buttons: [{
               text: "Ok",
               click: function() {
              	 					el.parent().remove();
              	 					self.fc.removeModelsTree(model_id);
              	 					self.fc.removeModel(model_id);
              	 					jQuery(this).dialog( "close" );
               				}
              	},
              	{
                 text: "Cancel",
                 click: function() {
              	   jQuery(this).dialog( "close" );
                 }
               }
             ]
          });
    	 }else if(el.parent().parent().children('.input_wrapper').length > 1){
    		  el.parent().remove();
					self.fc.removeModel(model_id);
    	 }
     });
     return el;
   };


FormWidgets.prototype.setupButton_moveUp = function (model_id) {

  var el = jQuery('<div class="moveUp_button">');
  el.text('Move Up');
  el.click(function (e) {
    e.preventDefault();
    self.fc.populateData();
    //            el.parent().insertBefore(el.parent().prev());
    if (self.fc.moveupModel(model_id)) {
      self.fc._renderForm(false, true);
    }

  });
  return el;
};



/**
 * @param {FieldModel} model
 */
FormWidgets.prototype.setupInput = function(model, local_options, inputContainer, index) {

  var self = this;
  var opts = this.opts;
  var key = pl.chk(model) ? model.key() : opts.key;
  var link_id = pl.chk(opts.link_id) ? opts.link_id : null; //link the result with this field_id

  //console.log("###KEY: ", key);
  var repeatStyleOrdered = opts['repeat_style'] !== undefined ? opts['repeat_style']: false;
  var ordered_button = opts['order_button'] !== undefined ? opts['order_button']: true;
  //console.log("setupInput: ");
  //console.log("setupInput: ", inputContainer);

  var context = opts['context'] !== undefined ?  opts['context'] : new CmdContext();
	//console.log("#setupInup",key,opts);
	//console.log("@2 setupInup",key,local_options);

  //console.log("## SETUPINPUT",key,model);

  // if (pl.chk(opts.link)){
    // if( ! pl.chk(link_id)){
      // var parents = self.fc.getFieldModels(opts.link);
      // if (parents.length == 1){
        // pidm = parents[0].id();
        // var link_id = pid;
      // }
    // }
  // }
  if (opts['create_subitem']){

    // jQuery('#step1f').on( "dialog:beforeClose", function() {
    //   //console.log( $( this ));
    //   //alert("dialog:beforeClose CATCH");
    // });

    	if (jQuery.isPlainObject(key)){
  		for (var k in key){
  			this.fc.subitems_keys[k]=null;
  		}
  	}else if (jQuery.isArray(key)){
  		for (var k in key){
  			this.fc.subitems_keys[key[k]]=null;
  		}
  	} else {
  		this.fc.subitems_keys[key]=null;
  	}
  }


  var fromAddButton = false;
  if (local_options !== undefined){
    if (pl.chk(local_options.fromAddButton)){
     fromAddButton = local_options.fromAddButton;
    }
  }


  var $ = jQuery.noConflict();
  var select_key = pl.chk(opts.select_key_map);

   if (!pl.chk(model)){
	   if (opts.unique_parent_key){
		   alert("unique_parent_key not permited");
	   }
	  // console.log("CREATE NEW",key,link_id);
	   model = self.fc.createFieldModel(key,null,link_id);
	   //console.log("CM",model);
   }

	if (opts['create_subitem']) {
		model.put('create_subitem', true);
	}

		var properties = opts.properties;
   if (properties){
  	 model.props(properties);
   }
   var data = opts.data;
   if (data){
  	 model.data(data);
   }
   if (opts.link_to_root){
  	 model.put('link_to_root',true);
   }


  // console.log("TEST1");
   if (jQuery.isArray(key) && ! pl.chk(model.keys())){
	   model.keys(key);
	  // console.log("SET:",model.keys());
   }


    var fid = model.id();
    //var reader = self.fc.getReader(fid);

    var label = opts.label;
    if (label === undefined || label == null){
      label = self.fc.key_labels[key];
    }

    var labelE = $('<label>');

    if (opts.show_help){
      var tmp = $('<a tabindex="-1" href="">');
      tmp.text(label + ':');
      tmp.click(function(e){
        e.preventDefault();
        showUrlInDialog('/prepo/field_help?key=' + key,key);
        return false;
      });
      tmp.appendTo(labelE);
    }else {
      labelE.text(label + ':');
    }

    var inputCE = $('<div class="input_wrapper">');

    //var inputE = null;
    var value = model.value();
    var my_link = pl.chk(link_id) ? link_id : (pl.chk(model.link())) ? model.link() : null;
    //var fid = (pl.chk(v[1]))? v[1] : self.getNextFieldId();


    var getKey = function(){
    	if (jQuery.isArray(key)){
    		//console.log("array key:", key);
    		return key[0];
    	}
      return key;
    };

      if (select_key){
      	//console.log("@@@@ SETUP SELECT KEY",key, model);
        var selectKeyE = this.setupSelectKey(key,model);
        selectKeyE.appendTo(inputCE);
        getKey = function(){
          return selectKeyE.val();
        };
      }


		// var getProps = function(){
				// return {};
		// };
//
		// if (opts.lang_select){
				// var langSelectDiv = jQuery('<select class="lang_select"><option value="el">el</value><option value="en">en</value><option value="it">it</value></select>');
			  // langSelectDiv.appendTo(inputCE);
			  // getProps = function(){
			  	// var lang = langSelectDiv.val();
			  	// return{lang:lang};
			  // };
	  // }


      var fc = self.fc;
      var iw = null;
      if (opts.type == 'text'){
          iw = new InputText(fc,$.extend({},opts,{
          key:key,
          container:inputCE,
          getKey : getKey,
          fid:fid,
          link:my_link,
          model:model,
          inputContainer:inputContainer,
          }));
      }else if (opts.type == 'textarea'){
          //var iw = new InputTextArea(fc,{
          iw = new InputTextArea(fc,$.extend({},opts,{
          key:key,
          container:inputCE,
          getKey : getKey,
          fid:fid,
          link:my_link,
          model:model,
          inputContainer:inputContainer,
          //width:opts.width,
          }));
        } else if (opts.type == 'select') {
          var options = {
            key:key,
            container:inputCE,
            getKey : getKey,
            fid:fid,
            link:my_link,
            model:model,
            width:opts.width,
            inputContainer:inputContainer,
            //select_values:opts.select_values,
            //default_selection:opts.default_selection,
            onSelect:opts['on_select'],
            //read_only:opts.read_only,
          };
          if (fromAddButton & opts.default_selection_add_button !== undefined){
            options.default_selection = opts.default_selection_add_button;
          }
          var myOptions = $.extend({},opts,options);
          iw = new InputSelect(fc,myOptions);
        }else if (opts.type == 'url') {
        //	iw = new InputURL(fc,{
          iw = new InputURL(fc,$.extend({},opts,{
          key:key,
          container:inputCE,
          getKey : getKey,
          fid:fid,
          link:my_link,
          model:model,
          inputContainer:inputContainer,
          }));
        } else if (opts.type == 'date') {
          //iw = new InputDate(fc,{
          iw = new InputDate(fc,$.extend({},opts,{
          key:key,
          container:inputCE,
          getKey : getKey,
          fid:fid,
          link:my_link,
          model:model,
          inputContainer:inputContainer,
          }));
        } else if (opts.type == 'issue'){
          //iw = new InputIssueNo(fc,{
          iw = new InputIssueNo(fc,$.extend({},opts,{
          key:key,
          container:inputCE,
          getKey : getKey,
          fid:fid,
          link:my_link,
          model:model,
          inputContainer:inputContainer,
          }));
        }	else if (opts.type == 'object_search'){
          iw = new InputObjectSearch(fc,$.extend({},opts,{
          key:key,
          container:inputCE,
          getKey : getKey,
          fid:fid,
          link:my_link,
          model:model,
          inputContainer:inputContainer,
          }));
        }	else if (opts.type == 'contributor_search'){
          iw = new InputObjectSearch(fc,$.extend({},opts,{
          key:key,
          container:inputCE,
          getKey : getKey,
          fid:fid,
          link:my_link,
          model:model,
          inputContainer:inputContainer,
          search_url : '/ws/archive/find-contributor',
          }));
        }	else if (opts.type == 'work_search'){
          iw = new InputObjectSearch(fc,$.extend({},opts,{
          key:key,
          container:inputCE,
          getKey : getKey,
          fid:fid,
          link:my_link,
          model:model,
          inputContainer:inputContainer,
          search_url : '/ws/archive/find-work',
          }));
        }	else if (opts.type == 'relation_search'){
            iw = new InputObjectSearch(fc,$.extend({},opts,{
            key:key,
            container:inputCE,
            getKey : getKey,
            fid:fid,
            link:my_link,
            model:model,
            new_button:false,
            inputContainer:inputContainer,
            search_url : '/ws/archive/find-relation',
            }));
        }	else if (opts.type == 'place_search'){
          iw = new InputObjectSearch(fc,$.extend({},opts,{
          key:key,
          container:inputCE,
          getKey : getKey,
          fid:fid,
          link:my_link,
          model:model,
          inputContainer:inputContainer,
          search_url : '/ws/archive/find-place',
          }));
        }	else if (opts.type == 'manuscript_search'){
            iw = new InputObjectSearch(fc,$.extend({},opts,{
            key:key,
            container:inputCE,
            getKey : getKey,
            fid:fid,
            link:my_link,
            model:model,
            inputContainer:inputContainer,
            search_url : '/archive/find-manuscript',
            }));
        }	else if (opts.type == 'material_search'){
            iw = new InputObjectSearch(fc,$.extend({},opts,{
            key:key,
            container:inputCE,
            getKey : getKey,
            fid:fid,
            link:my_link,
            model:model,
            inputContainer:inputContainer,
            search_url : '/archive/find-material',
            }));
        }	else if (opts.type == 'situation_search'){
            iw = new InputObjectSearch(fc,$.extend({},opts,{
            key:key,
            container:inputCE,
            getKey : getKey,
            fid:fid,
            link:my_link,
            model:model,
            inputContainer:inputContainer,
            search_url : '/archive/find-situation',
            }));
        }	else if (opts.type == 'process_search'){
            iw = new InputObjectSearch(fc,$.extend({},opts,{
            key:key,
            container:inputCE,
            getKey : getKey,
            fid:fid,
            link:my_link,
            model:model,
            inputContainer:inputContainer,
            search_url : '/archive/find-process',
            }));
        }	else if (opts.type == 'symbol_search'){
            iw = new InputObjectSearch(fc,$.extend({},opts,{
            key:key,
            container:inputCE,
            getKey : getKey,
            fid:fid,
            link:my_link,
            model:model,
            inputContainer:inputContainer,
            search_url : '/archive/find-symbol',
            }));
        }	else if (opts.type == 'instrument_search'){
            iw = new InputObjectSearch(fc,$.extend({},opts,{
            key:key,
            container:inputCE,
            getKey : getKey,
            fid:fid,
            link:my_link,
            model:model,
            inputContainer:inputContainer,
            search_url : '/archive/find-instrument',
            }));
        }	else if (opts.type == 'display_item'){
          iw = new InputDisplayItem(fc,$.extend({},opts,{
          key:key,
          container:inputCE,
          getKey : getKey,
          fid:fid,
          link:my_link,
          model:model,
          inputContainer:inputContainer,
          }));
        }	else if (opts.type == 'name'){
          iw = new InputName(fc,$.extend({},opts,{
          key:key,
          container:inputCE,
          getKey : getKey,
          fid:fid,
          link:my_link,
          model:model,
          inputContainer:inputContainer,
          }));
        } else if (opts.type == 'hidden'){
          iw = new InputHidden(fc,$.extend({},opts,{
          key:key,
          container:inputCE,
          getKey : getKey,
          fid:fid,
          link:my_link,
          model:model,
          inputContainer:inputContainer,
          }));
        } else if (opts.type == 'empty'){
          iw = new InputEmpty(fc,$.extend({},opts,{
            key:key,
            container:inputCE,
            getKey : getKey,
            fid:fid,
            link:my_link,
            model:model,
            inputContainer:inputContainer,
            }));
        } else if (opts.type == 'z3950'){
          iw = new InputZ3950(fc,$.extend({},opts,{
            key:key,
            container:inputCE,
            getKey : getKey,
            fid:fid,
            link:my_link,
            model:model,
            inputContainer:inputContainer,
            }));
        } else {
         iw = null;
         throw "UNKNOWN INPUT TYPE: " + opts['type'];
      }

//			if (!fromAddButton){
//				iw.setValue(value);
//				alert("FROM");
//			}

      var has_ref_extend = opts.has_ref_extend === undefined ? false : opts.has_ref_extend;

      if (opts.extend || has_ref_extend ){
        var buttons = opts.extend_buttons;
        var extend_position = opts.extend_position;
        var extend_button = iw.setupExtend();
        var clicExtendHandler = function(e){
        	//alert("extend CLICK");
        	//console.log("@@@@@@@@@@@@@@@@@@@@@",self.fc.extend_windows_stack);
        	//TODO: 8a mporoyse na mpi klidi sta values opos ginete me ta section me status
        	//etsi oste otan ginete rendering apo tin arxi na ta emfanizi gia na mporoun na ginoun
        	//nested (ke na min xriazete to close edo)
        	//tora ka8e fora pou patiete to extend oti dialog iparxi klini
        	//jQuery(this).parents(".ui-dialog").each(function(i,e){jQuery(e).remove();}); //(metafer8IKE MESA STIN _showExtend


          e.preventDefault();
          //self.fc.populateData();
          var model = self.fc.getFieldModel(fid);
          var extend_command;
          var opts_extend_command = null;
          if (opts['extend_command_with_ref'] && model.refItem()){
          	opts_extend_command  = opts['extend_command_with_ref'];
          } else {
          	opts_extend_command  = opts['extend_command'];
          }
          if (jQuery.isPlainObject(opts_extend_command)){
            extend_command = opts_extend_command[getKey()];
          } else {
            extend_command = opts_extend_command;
          }
          //self.fc.extend_windows_stack.push([opts.label, extend_command,fid,extend_position,buttons,getKey]);
          self.fc._showExtend(opts.label, extend_command,fid,extend_position,buttons,getKey,true);
        };

        extend_button.click(clicExtendHandler);
        if (opts.read_only !== undefined && opts.read_only){
					inputCE.find("input").first().click(clicExtendHandler);
        }
        //var has_ref_disable = opts.has_ref_disable === undefined ? false : opts.has_ref_disable;
        extend_button.appendTo(inputCE);
      }

      if (index !== 0 && repeatStyleOrdered && ordered_button){
      	inputCE.append(self.setupButton_moveUp(fid));
      	inputCE.append(self.setupButton_remove(fid));
      }

		  var context_data = {
		  	widgetId: iw.id,
		  	readerId: iw.readerId,
	  	};
	  	context.push('setupInput', context_data);
      return [labelE, inputCE,iw];
    };

FormWidgets.prototype.displayInput = function(index, model,rootE){

//	console.log("displayInput");

	var self = this;
    var inputContainer = this.inputContainer;
    var opts = this.opts;
    var els = this.setupInput(model, {}, inputContainer, index);
    var labelE = els[0];
    var inputE = els[1];
    var iw = els[2];
    var repeatStyleOrdered = opts['repeat_style'] !== undefined ? opts['repeat_style']: false;

	var context = opts['context'] !== undefined ?  opts['context'] : new CmdContext();

		//console.log("@@@XX",opts);
    if (opts['float'] !== undefined){
			inputContainer.css('float',opts['float']);
    }
    if (opts['clear'] !== undefined){
			inputContainer.css('clear',opts['clear']);
    }
    if (opts['hidden_input'] !== undefined &&  opts.hidden_input){
			inputContainer.css('display','none');
		}
		if (opts['label-width'] !== undefined){
			var myn = addPxToNumber(opts['label-width']);
			labelE.css('width',myn);
    }
		if (opts['label_display'] !== undefined){
			labelE.css('display',opts['label_display']);
    }
    if (opts['display_label'] === undefined){
    	opts['display_label'] = true;
    }

		var add_button_new_container = true;
    //console.log('#D',index,model);
    //LABEL
    if (! opts.one_label || index == 0){
      //if (! (opts.hide_records) && ! opts.no_label){
      if (! opts.no_label && opts.display_label){
      	//console.log("ADD LABEL",inputContainer);
      	if (! model.inferred() ||(model.inferred() && opts['display_inferred']) ){
      		inputContainer.append(labelE);
      	}
      }
    }
    var click_handler = opts.click_handler;

   // if (repeatStyleOrdered && ! inputContainer.hasClass('icordered')){


    //console.log(index);
    if (repeatStyleOrdered && index == 0){
    	inputContainer = jQuery('<div class="icordered">');

//    	if (opts['select_key_width'] != '220px' ){
//    		var extra_width = parseFloat(opts['select_key_width'] , 10)
//    		extra_width = extra_width + 65;
//    	}else{ extra_width = 65; }
//  	 var new_width = parseFloat(opts['width'], 10) + extra_width;

    	var icordered_width = opts['ordered_width'] !== undefined ?  opts['ordered_width'] : '725px';
    	var icordered_width_px = addPxToNumber(parseFloat(icordered_width, 10));
    	inputContainer.css('width',icordered_width_px);

    	this.inputContainer=inputContainer;
    	rootE.append(inputContainer);
    }

    //BUTON PRIN TO INPUT
    if (index == 0 && opts.add_button && opts.add_button_first){
      if (opts.add_button_br){
        inputContainer = jQuery('<div class="icontainer1">');
        this.inputContainer = inputContainer;
      }
      rootE.append(this.setupButton(inputContainer,click_handler,context));
      if (opts.add_button_br){
        //rootE.append(pl.element('br'));
        rootE.append(inputContainer);
      }
    }


    if (opts.hide_records && ! opts.add_button){
      return;
    }

    //ELEMENT
    if (pl.chk(model.value())  || (! opts.skip_on_empty )  ||
    (index == 0 && opts.add_button && ! opts.add_button_first && opts.skip_on_empty)//buton meta to emty element
    ){
    	if (! model.inferred() ||(model.inferred() && opts['display_inferred']) ){
	      inputE.appendTo(inputContainer);
    	}
    }

    //BR
    if((index == 0 && opts.br_first) || (index>0 && opts.br_each)){
      //inputContainer.append(pl.element('br'));
    }

    //BUTTON META TO INPUT
    if (index == 0 && opts.add_button && ! opts.add_button_first){
    	 if (repeatStyleOrdered){
    		 rootE.append(self.setupButton(inputContainer,click_handler,context));
    	 } else {
		      if (opts.add_button_br){
		        inputContainer = jQuery('<div>');
		        var icclass = opts.one_label ? 'icontainer2': 'icontainer3';
//		        inputContainer.addClass('icontainer1');
		        this.inputContainer = inputContainer;
		      }
		      rootE.append(self.setupButton(inputContainer,click_handler,context));
		      if (opts.add_button_br){
		        //rootE.append(pl.element('br'));
		        rootE.append(inputContainer);
		      }
    	 }
    }

    iw.setupFinish();
    return iw;
  };

