'use strict';

//      show_help: boolean   (default: false)
//      add_button: boolean  (default: false)
//      add_button_id:    ex: add_title_uniform  (OPTIONAL)
//      add_button_label: ex: add_title  (default: add)
//      add_button_first : topo8eti prota to koumpi default false
//      autocompete_url: url for autocomplete (OPTIONAL);
//      skip_on_empty:  default false
//      :  map me klidia px authors (OPTIONAL);
//      print_label: default true
//      input_br: default true
//      autocomplete_fn: javscript function pou 8a energopiisi to autocomlete (OPTIONAL)
//      append_group: append @group_no (optional)


//  add_button: boolean  (default: false)
//  add_button_label: ex: add_title  (default: add)
//  add_button_first : topo8eti prota to koumpi default false
//  add_button_br: default true
//  label :    ex:  title:uniform:
//  div_id :   (optional)
//  display:   block, inline (default:block)
//  width:   (default:680px)
//  one_label: boolean default: false
//  br_first: br sto proto input default: true
//  br_each: br se ka8e input default: false
//  skip_on_empty:  default false
//  on_select: function event handler
//  select_values:  gia select box times
//  select_key_map map me klidia px authors (OPTIONAL);
//  select_key_width  optional
//  no_label: default false
//  extend: boolean
//  click_handler: function



FormControler.prototype = new FieldModelAccessor();
FormControler.prototype.constructor = FormControler;

/**
 * @property {Object.<number,FieldModel>} ndata
 * @constructor
 * @class
 * @this {FormControler}
 */
function FormControler(rootElement, data, commands, key_labels) {
  FieldModelAccessor.call(this);

  //this.data = data;
  this.commands = commands;
  this.key_labels = key_labels;
  this.rootElement = rootElement;

  //this.rootContainer1 = rootElement;
  this.rootContainer0 = rootElement;
  this.rootContainer1 = null;
  this.rootContainer2 = null;
  this.rootContainer3 = null;
  this.rootContainer4 = null;

  this.rootContainer = rootElement;
  this.flagInitStatus = true;
  this.formOptions = null;
  this.counterFieldId = 0;
  this.counterInternalFieldId = 0;

  this.dialog_show_prev_on_close = true;
  this.extend_windows_stack = new ExtendWindowsStack();
	this.defaultNetErrorHandler = function(jqXHR, textStatus, errorThrown){
		self.unblockUI();
		alert("ERROR ITEM NOT CREATED: " + textStatus);
  }

  //this.tabindex=0;
  this.c1 = 0;
  this.c2 = 0;
  this.c3 = 0;
  this.generate_functions = {};
  this.readers = {};
  this.weight = 0;

  this.ndata = {};
  var self = this;
  //console.log(data);
  ////var maxi = 0;
  var id_translations = {};

  var works = data["ea:work:"];
  if (works !== undefined && works.length == 1 && works[0] == null) {
    delete data['ea:work:']; //aferei to adio work stin arxi
  }
  var myw = 0;
  var ids = {};
  jQuery.each(data, function(k, v) {
    jQuery.each(v, function(i, fv) {
      if (fv === null) {
        fv = {
          v: null,
          g: null,
          r: null,
          f: null,
          w: null,
          s: null,
          p: null,
          d: null,
          e: false
        };
      }
      if (fv.v && jQuery.isPlainObject(fv.v)) {
        fv.v = SerializeUtil.deserialize(fv.v);

      }
      var i = pl.chk(fv.i) ? parseInt(fv.i) : null;
      //console.log(maxi, fv);
      if (i == null) {
        ////i = maxi+1;
        i = newId(self.ndata);
      } else if (ids[i] !== undefined) {
        ////var n = maxi + 1;
        var n = newId(self.ndata);
        console.log("TRANSLATE ID", i, n, k);
        id_translations[i] = n;
        i = n;
      }
      ids[i] = null;

      if (!fv['d']) {
        fv['d'] = {}
      };
      if (!fv['e']) {
        fv['e'] = false
      };


      var lok = pl.chk(fv.l) ? parseInt(fv.l) : null;
      myw += 1;
      self.ndata[i] = new FieldModel(i, k, fv.v, lok, fv.g, fv.r, fv.f, myw, fv.s, fv.p, null, fv.d, fv.e);
      //this.weight++;
      //self.ndata[i] = new FieldModel(i, k, fv.v, lok, fv.g, fv.r, fv.f,this.weight,fv.s,fv.p);
    });
  });

  var c = 0;
  jQuery.each(self.ndata, function(i, m) {
    var lok = null;
    var lin = m.link();
    if (pl.chk(lin)) {
      if (id_translations[lin] !== undefined) {
        lok = id_translations[lin];
        c++;
        console.log("TRANSLATE LINK", lin, lok);
        m.link(lok);
      }
    }
  });


  //ISSUE:NO-LABEL migration
  var ms = this.getFieldModels('ea:issue:');
  //console.log(ms);
  //console.log(ms.length);
  if (ms.length == 1 && ms[0].s == null && ms[0].value() == null) {
    var mns = this.getFieldModels('ea:issue:no');
    var mls = this.getFieldModels('ea:issue:label');
    var no = (mns.length == 1) ? mns[0].value() : null;
    var label = (mls.length == 1) ? mls[0].value() : null;
    if (no != null || label != null) {
      ms[0].value({
        n: no,
        l: label,
        t: null,
        z: 'issue'
      }); //fv ={n:n,l:l,t:t,z:'issue'};
      // console.log(ms[0]);
      if (mns.length == 1) {
        //console.log('DELETE1 ',this.ndata[mns[0].id()]);
        delete this.ndata[mns[0].id()];
      }
      if (mls.length == 1) {
        //console.log('DELETE2 ',this.ndata[mls[0].id()]);
        delete this.ndata[mls[0].id()];
      }
    }
  }
  //console.log("INIT");
  // console.log(this.ndata);

}


// FormControler.prototype.getNextFieldId = function(){
// return this.counterFieldId++;
// };
//
// FormControler.prototype.getNextInternalFieldId = function(){
// return this.counterInternalFieldId++;
// };

// FormControler.prototype.getNextTabIndex= function(){
// return this.tabindex++;
// };

FormControler.prototype.setReader = function(reader) {
  this.readers[reader.id] = reader;
};
FormControler.prototype.getReader = function(fid) {
  return this.readers[fid];
};

//FormControler.prototype.clearReaders = function(){
//  console.log("CLEAR READERS");
//  this.readers.length = 0;
//};


FormControler.prototype.setSData = function(Sdata) {
  this.ndata = {};
  for (i in sdata) {
    s = sdata[i];
    this.ndata[i] = new FieldModel(s.id, s.k, s.v, s.l, s.g, null, s.f, s.w, null, s.p, s.ks, s.d);
  }
}

FormControler.prototype.getSData = function() {

  this.populateData();

  var sdata = {};
  var data = this.ndata;
  for (i in data) {
    var m = data[i];
    //console.log('####',i,m);
    //sdata[i]
    sdata[i] = {
      i: m.i,
      k: m.k,
      v: m.v,
      l: m.l,
      g: m.g,
      f: m.f,
      w: m.w,
      s: m.s,
      p: m.p,
      ks: m.ks,
      d: m._data,
      e: m['e']
    };
  }
  return sdata;
}




/**
 * @memberof FormControler
 */

FormControler.prototype.showModel = function() {
  var self = this;

  this.populateData(true);

  self.consoleDump();

  FormUtil.showModel(self, function() {
    self._renderForm();
  });
  // // console.log("ndata",self.ndata);
  //
  //  // renderMessages();
  //  // var msgContext = new MessageContext();
  //  // var gstatus = this.generate(msgContext);
  //  // var vstatus = this.validate(msgContext);
  //  // if (gstatus == 'messages' || vstatus == 'messages'){
  //    // renderMessageContext(msgContext);
  //  // }
  //
  //  var el = jQuery('<div title="Data Model"></div>');
  //  var container = jQuery('<div class="jsform"></div>');
  //  container.appendTo(el);
  //  var tmp = jQuery('<table></table>').appendTo(container);
  //  var table =jQuery('<tbody></tbody>').appendTo(tmp);
  //  var show_all =false;
  //
  //  var d1 = function(id,level){
  //    //console.log("D1",id,level);
  //    var m = self.getFieldModel(id);
  //    var id = m.id();
  //    var key = m.key();
  //    var value = m.value();
  //    var lang = m.lang() == null ? '' : m.lang();
  //    var link = m.link() == null ? '' : m.link();
  //    var props = m.props() == null ? '' : m.props();
  //    var data  = m.data() == null ? '' : m.data();
  //    var ref = m.f;
  //    var sid = m.s == null ? '' : m.s;
  //
  //  //  console.log("LANG",lang);
  //    if (! show_all && value == null){
  //      //console.log("SKIP key: " +key  + " value: "+value);
  //      return;
  //    }
  //    if (typeof value == 'object'){
  //      value = JSON.stringify(value);
  //    }
  //    var pad = '';
  //    for (i=0;i<level;i++){
  //      if (i == level-1){
  //        pad +='&#160;&#160;↳';
  //      } else {
  //        pad +='&#160;&#160;&#160;';
  //      }
  //    }
  //    var tr = jQuery('<tr class="modelviewtr">');
  //    jQuery('<td class="modelviewtd1">').text(''+id).appendTo(tr);
  //    jQuery('<td class="modelviewtd1">').text(''+link).appendTo(tr);
  //
  //    jQuery("<td>").html(pad+key).appendTo(tr);
  //    var td_val = jQuery("<td>").appendTo(tr);
  //    if (pl.chk(ref)){
  //      jQuery('<a target="_blank">').attr('href','/archive/item/' + ref).text(value).appendTo(td_val);
  //    } else {
  //      td_val.text(value);
  //      td_val.appendTo(tr);
  //    }
  //    //console.log(sid);
  //    //if (pl.chk(sid) && (''+sid).indexOf('-') > 0){
  //    //  sid = '-';
  //    //}
  //    jQuery("<td>").text(''+lang).appendTo(tr);
  //    if (pl.chk(props) && jQuery.isPlainObject(props)){
  //       props = JSON.stringify(props);
  //    }
  //    jQuery("<td>").text(''+props).appendTo(tr);
  //
  //    if (pl.chk(data) && jQuery.isPlainObject(data)){
  //       data = JSON.stringify(data);
  //    }
  //    jQuery("<td>").text(''+data).appendTo(tr);
  //
  //    jQuery("<td>").text(''+sid).appendTo(tr);
  //    tr.appendTo(table);
  //    var models2 = self.getFieldModels(null,id);
  //    jQuery.each(models2,function(idx,m2){
  //        d1(m2.id(),(level+1));
  //    });
  //  };
  //
  //  view_fn = function(){
  //    table.empty();
  //    var keys = {};
  //    jQuery.each(self.ndata,function(id,m){
  //      if (!pl.chk(m.key())){
  //        console.log(m);
  //        alert("ERROR EMPTY KEY");
  //      }
  //      if ( !show_all && m.key().indexOf('tmp') == 0){return;}
  //      keys[m.key()] = null;
  //    });
  //    jQuery.each(keys,function(k,v0){
  //      var models = self.getFieldModels(k,null);
  //      jQuery.each(models,function(idx,m){
  //        d1(m.id(),0);
  //      });
  //    });
  //  };
  //
  //  view_fn();
  //  //console.log(self.ndata);
  //  if (true){
  //    var c = 0 ;
  //    for (i in self.ndata){
  //      c++;
  //      var m = self.ndata[i];
  //      if (m.value() !== null){
  //        console.log(c,i,m.key(),m.link(),m.value(),m.s,m);
  //      }
  //    }
  //    console.log("total:",c);
  //  }
  //
  //  var mydialog = el.dialog({
  //    modal: true,
  //    "minWidth": 940,
  //    open: function() {
  //    jQuery('.ui-widget-overlay').bind('click', function() {
  //      mydialog.dialog('close');
  //      });
  //    },
  //    close:function(){
  //      self._renderForm();
  //      //if (gstatus == 'messages' || vstatus == 'messages'){
  //      //  jQuery('html,body').scrollTop(0);
  //      //}
  //    },buttons: {
  //      close: function() {
  //        jQuery( this ).dialog( "close" );
  //      },
  //      all: function(){
  //        show_all =  show_all ? false : true;
  //        view_fn();
  //      },
  //    }
  //  });
  //  mydialog.dialog('open');
};


FormControler.prototype._showExtend = function(title, cmd, fid, position, buttons, getKey,closeOtherDialogsFlag,beforeCloseHandler) {
	var closeOtherDialogsFlagOk = closeOtherDialogsFlag !== undefined ? closeOtherDialogsFlag : true;
  var beforeCloseHandlerOK = beforeCloseHandler !== undefined ? beforeCloseHandler : function(){};
	console.log("_showExtend",title,cmd,fid,buttons);
	if (closeOtherDialogsFlagOk){  jQuery(".ext_dialog.ui-dialog").each(function(i,e){jQuery(e).remove();}); }
	var self = this;
	var ecmd = this.commands[cmd];
	if (!pl.chk(ecmd)) {
    console.error("CANOT FIND COMMAND: ", cmd);
    return;
  }
  var cmd_opts = ecmd.opts;
  if (pl.chk(cmd_opts) && pl.chk(cmd_opts.label)) {
    title = cmd_opts.label;
  }

  //  if (cmd_opts['with_ref_opts']){
  //    var ref_opts = cmd_opts['with_ref_opts'];
  //    var cmd = ref_opts['command'];
  //    if (cmd){
  //      var ref_cmd_opts = jQuery.extend({},ref_opts,{
  //        'title':title,
  //        'fid':fid,
  //        'position':position,
  //        'getKey':getKey,
  //      });
  //      self.execCMD(cmd, null, ref_cmd_opts);
  //      return;
  //    }
  //  }
  if (cmd_opts['buttons']) {
    buttons = cmd_opts['buttons'];
  }
  if (buttons === undefined || buttons == null) {
    buttons = [{
      text: 'close',
    }];
  }
  //self.populateData();
  self.extend_windows_stack.push(title, cmd, fid, position, buttons, getKey);
  //console.log("@STACK PUSH:");
  var breadcrumb_title = '';
  var sep = '';
  var warr = self.extend_windows_stack.getArray();
  for (i in warr) {
    breadcrumb_title += (sep + warr[i][0]);
    sep = ' > '; //sep = ' ≫ ';//sep = ' → ';
  }


  var context = new CmdContext();

  //console.log(JSON.stringify(buttons,null, 2) );

  for (var i in buttons) {
    var b = buttons[i];
    //console.log("SETUP BUTTON1 ",i,b['text'],b);
    //b['class'] = 'extendb';
    //b['style'] = "display:none";
    //console.log("BUTTON",b);
    if (b['actions']) {
      var actions = b['actions'];
      var button_text = b['text'];
      console.log("button_text",button_text);
      for (var ai in actions) {
        var bact = actions[ai];
        if (bact['name'] == 'remove') {
          var msg = bact['confirm_message'] ? bact['confirm_message'] : 'remove?';
          bact['fn'] = function() {
            var m = self.getFieldModel(fid);
            //console.log("REMOVE",m);
            var rs = confirm(msg);
            if (rs) {
              var rid = m.id();
              self.removeModelsTree(rid);
              self.removeModel(rid);
              // self._renderForm(false);
              jQuery(this).dialog("close");
            }
          }
        } else if (bact['name'] == 'close') {
          bact['fn'] = function() {
            jQuery(this).dialog("close");
          }
       } else if (bact['name'] == 'clickHandler') {

        var myHandler = bact['fn'];
        var createHandler = function(myHandler){
          return function(event) {
            var util_this  = this;
            var util= {};
            util.close = function(){
              jQuery(util_this).dialog("close");
            }
            var tm = fid ? self.getFieldModel(fid) : null;
            myHandler.call(this, event, self, tm,util);
          };
        };
        bact['fn'] = createHandler(myHandler);
      }
        //console.log('button action2',bact);
        actions[ai] = bact;
      }

      var createClickHandler = function(actions,button_text){
        //console.log("createClickHandler",button_text,actions);
        return function(event){
          //console.log('B CLICK',button_text,actions);
          for (var ei in actions) {
            var bact = actions[ei];
            //console.log("EXEC BACT",button_text,ei,bact);
            bact.fn.call(this,event);
          }
        }
      };
      b['actions']=actions;
      b.click = createClickHandler(actions,button_text);
    } else {
      if (b.clickHandler !== undefined) {
        var myHandler = b.clickHandler;
        b.click = function(event) {
          var tm = fid ? self.getFieldModel(fid) : null;
          myHandler.call(this, event, self, tm);
        };
      } else if (b.click === undefined) {
        b.click = function() {
          jQuery(this).dialog("close");
        };
      } else {
        var org_fn = b.click;
        b.click = function(e) {
          org_fn.call(this, e, self, context);
        };
      }
    }
    //console.log("SETUP BUTTON2",i,b['text'],b);
    buttons[i] = b;
  }

  //console.log(JSON.stringify(buttons,null, 2) );
  //console.log(JSON.stringify(bact,null, 2) );
  ////////////////////////////...

  var el = jQuery('<div title="' + breadcrumb_title + '"></div>');

  if (position === undefined || position == null) {
    position = {};
  }
  //console.log("buttons",buttons);
  //console.log("position",position);
  //var orgRootElement = self.rootElement;
  //var org_rootContainer0 = self.rootContainer0;
  var mydialog = el.dialog({
    modal: true,
    dialogClass: "ext_dialog",
    "minWidth": 940,
    position: position,
    hide: {
      effect: "fade",
      duration: 10
    },
    open: function() {
      self.populateData();
	  console.log("create container on dialog open div.jsform");
      var jsmessages = jQuery('<div id="dialogjsmessages"></div>');
      jsmessages.appendTo(el);
      var container = jQuery('<div class="jsform"></div>');
      container.appendTo(el);
      //self.rootContainer0 = container;
      if (pl.chk(cmd)) {
      	//console.log('getKey',getKey);
      	var run_options = {
          'parent_key_fn': getKey,
          'context': context
        };
        if (pl.chk(fid)) {
          run_options['field_id'] = fid;
        };
        self.execCMD(cmd, container, run_options);
      }

      self.displayExtendedColors();

      jQuery('.ui-widget-overlay').bind('click', function() {
        mydialog.dialog('close');
      });
    },
    beforeClose: function(event) {
      jQuery(this).trigger('dialog:beforeClose');//tinyMCE
      self.populateData();
      beforeCloseHandlerOK(event,fid);
    },
    close: function() {
    	//alert("CLOSE");
      console.log("##DIALOG CLOSE##");
      //self.rootContainer0 = org_rootContainer0;
      el.remove();
      //ean den gini render enimeroni ta iparxonta pedia ala den pros8eti..
      //self.populateData();
      //self.displayExtendedColors();
      self._renderForm(false);
      self.openPreviusDialog();
      //      self.extend_windows_stack.pop();
      //      var prev = self.extend_windows_stack.pop();
      ////      //console.log("@STACK POP:",prev);
      //      if (prev){
      //        //console.log("SHOW PREV EXTEND");
      //        self._showExtend(prev[0],prev[1],prev[2],prev[3],prev[4],prev[5]);
      //        //self._showExtend.apply(self,prev);
      //      }
    },
    buttons: buttons,
  });
  mydialog.dialog('open');
};



////////////////////////////////////////////////
////////////////////////////////////////////////
/// ACTIONS
////////////////////////////////////////////////
////////////////////////////////////////////////

FormControler.prototype._act_addHtml = function(container, options) {
  var el = jQuery(options.html);
  container.append(el);
};



FormControler.prototype._act_addButton = function(container, options) {
	console.log('_act_addButton',container,options);
  var self = this;
  var align = options.align;
  var click = options.click === undefined ? null : options.click;
  var label = options.label;
  if (align === undefined) {
    align = 'left';
  }
  var bclass = 'jsbutton_' + align;

  var type = options.type === undefined ? null : options.type;
  var my_click = null;
  if (type == 'remove') {
    var remove_keys = options.remove_keys;
    var remove_msg = options.remove_msg;
    my_click = function(e, context) {
      self.populateData();
      self.generate();
      var fields = context.data.setupField;
      //  _removeKeys(self, fields, remove_keys, remove_msg);
      var model = null;
      for (i in fields) {
        var f = fields[i];
        for (i in remove_keys) {
          if (f.key == remove_keys[i]) {
            model = f.models[0];
            var rs = confirm(remove_msg + ": " + model.value() + "?");
            if (rs != true) {
              return;
            };
            model.value(null);
            var id = model.id();
            self.removeModelsTree(id);
            self.removeModel(id);
            self._renderForm(false);
            break;
          }
        }
      }
      jQuery('div.ui-dialog-content').dialog("close");
    };
  }




  var btn = jQuery('<button tabindex="-1">');
  btn.text(label);
  btn.attr('class', bclass);
  btn.click(function(e) {
    e.preventDefault();
    e.stopImmediatePropagation();
    if (my_click != null) {
      my_click.call(btn, e, options.context);
    }
    if (click != null) {
      click.call(btn, e, options.context);
    }
  });
  container.append(btn);

};


FormControler.prototype._act_openWindow = function(container, options) {
  console.log('_act_openWindow', options);
  var self = this;
  if (options['link'] == undefined) {
    throw new Error("options.link expected");
  }
  var fid = pl.chk(options['field_id']) ? options['field_id'] : null;
  if (fid) {
    var model = self.getFieldModel(fid);
    var v = model.value();
    var link = options.link;
    if (v) {
      link = link.concat('&pn=').concat(encodeURIComponent(v));
    }
    window.open(link, "", "top=200, left=484, width=1000, scrollbars=yes, status=yes, titlebar=no, toolbar=no");

  }

  jQuery('div.ui-dialog-content').dialog("close");

};


/**
 *
 */
FormControler.prototype._act_addSectionExt = function(container, options) {
  //console.log("#1 ADD SECTION EXT",container, options);

  var key = options.key === undefined ? null : options.key;
  var self = this;
  var add_empty = options.add_empty === undefined ? false : options.add_empty;
  var skip_on_empty = options.skip_on_empty === undefined ? false : options.skip_on_empty;
  var link_id = null;
  if (key != null) {
    var models;
    if (add_empty) {
    	models = this.getFieldModelsOrCreate(key, link_id);
    } else {
    	models = this.getFieldModels(key, link_id);
    }
    //var org_rootContainer0 = self.rootContainer0; //alagi rootContainer gia na mporoun na mpoun sections
    jQuery.each(models, function(i, m) {
      if (!skip_on_empty || m.value() != null) {
        m.put("sub-root", true);
        m.put('rel_type', 'locked');
        //m.put('new_type','new_0');
        //'rel_type":"locked","sub-root":true,"new_type":"new_0"
        options.fid = m.id();
        options.set_root_container0 = true;
        //          console.log("#@#### SET rootContainer0");
        //          self.rootContainer0 = container;
        self._act_addSection(container, options);
        //console.log("#@#### RESTORE rootContainer0");
        //self.rootContainer0 = org_rootContainer0;
        //console.log('#10 SECTION EXT:',m);
      }
    });
  }

};

//FormControler.prototype._act_addVSpace = function(container,options){
//  var div = jQuery('<div class="vspace_cmd">');
//}

//FormControler.prototype._act_setSectionRoot = function(container,options){
//};
FormControler.prototype._act_addSection = function(container, options) {
	//console.log("ADD SECTION ",options.skey, container, options);
  var level = options.level === undefined ? null : options.level;
  var label = options.label;
  var cmd = options.command;
  var context = options.context;
  var set_container = options.set_container === undefined ? true : options.set_container;
  var add_button_expand = options.add_button_expand === undefined ? false : options.add_button_expand;
  var add_button = options.add_button === undefined ? false : options.add_button;
  var add_button_label = options.add_button_label === undefined ? 'add' : options.add_button_label;
  var add_button_advanced = options.add_button_advanced === undefined ? false : options.add_button_advanced;
  var add_button_advanced_label = options.add_button_advanced_label === undefined ? 'expand' : options.add_button_advanced_label;
  var specialized_sect = options.specialized_sect === undefined ? false : options.specialized_sect;
  var change_level = options.change_level === undefined ? null : options.change_level;
  var use_current_container_as_root = options.use_current_container_as_root === undefined ? false : options.use_current_container_as_root;
  var el_id = options.id;
  var el_class = options.class;
  var fid = options.fid;
  var self = this;
  var def_status = options.status === undefined ? 'open' : options.status;
  var width = (options.width === undefined) ? null : 'style="width:' + options.width + 'px"';

  var skey = 'tmp:sect_' + options.skey;
  if (pl.chk(fid)) {
    skey = skey + ':' + fid;
  }
  this.skey = skey;
  var model = this.getFieldModelOrCreate(skey, null, def_status);
  var sectionId = model.id();

  var status = model.value();


  //  var container_level = 1;
  //  if (container.data('hsection_level')){
  //    container_level = container.data('hsection_level');
  //    console.log("CONTAINER LEVEL",container_level);
  //  }
  //  if (level == null){
  //    level = container_level;
  //  }

  //console.log("CONTAINER1:",container);
  //  if (change_level != null){
  //    level = container_level + change_level;
  //    console.log("NEW LEVEL",level);
  //  }

  var el = null;
  if (level == 2) {
    el = jQuery('<h3 class="hsection">');
  } else if (level == 3) {
    el = jQuery('<h4 class="hsection">');
  } else if (level == 4) {
    el = jQuery('<h5 class="hsection">');
  } else {
    el = jQuery('<h2 class="hsection"' + width + '>');
  }
  if (pl.chk(el_id)) {
    el.attr('id', el_id);
  }

  if (pl.chk(el_class)) {
    el.attr('class', 'hsection ' + el_class);
  }

  if (specialized_sect) {
    el.addClass('specialized_sect');
  }


  //el.text(label);
  var div = jQuery('<div>');
  div.addClass('fsection');
  div.addClass('fs_' + options.skey);
  div.addClass('level_' + level);
  //div.data('hsection_level',level);

  if (specialized_sect) {
  	div.addClass('specialized_sect');
  }


  //  if (pl.chk(cmd)){
  //    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@1");
  //    if (options['set_root_container0']){
  //      var org_rootContainer0 = self.rootContainer0; //alagi rootContainer gia na mporoun na mpoun sections
  //      console.log("#@#### SET rootContainer0");
  //      self.rootContainer0 = div;
  //    }
  //    //var run_options = pl.chk(fid) ? {'field_id':fid}:null;
  //    var run_options = {'field_id':fid};
  //    this.execCMD(cmd,div,run_options);
  //    console.log("#@#### RESTORE rootContainer0");
  //    self.rootContainer0 = org_rootContainer0;
  //    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@2");
  //  }



  //▲, ▴, ▶, ▸, ►, ▼, ▾, ◀, ◂ & ◄
  var cExpanded = '▼';
  var cCollapsed = '▶';

  var my_class = null;
  var my_char = null;
  if (status == 'open') {
    my_class = 'btn_s_exp';
    my_char = cExpanded;
  } else {
    my_class = 'btn_s_col';
    my_char = cCollapsed;
    div.hide();
  }

  var ec = jQuery('<span class="btn_s">').text(my_char);
  ec.addClass(my_class);
  ec.appendTo(el);
  var title = jQuery('<span>').text(label);
  title.appendTo(el);


  if (add_button) {

    var button = jQuery('<button tabindex="-1"></button>');
    button.text(add_button_label);
    button.addClass('section_button');
    button.addClass('section_button_level_' + level);
    button.click(options.click_handler);
    button.appendTo(el);
  }

  if (add_button_expand) {

    var button = jQuery('<button tabindex="-1">exp</button>');
    button.addClass('section_button');
    button.addClass('section_button_level_' + level);
    if (options.add_button_right) {
      button.css('right', options.extend_button_right);
    }
    button.click(function(e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      self._showExtend(label, cmd, fid);
    });
    button.appendTo(el);
  }

  //   //WORK ON PROGRESS
  //   if (options.extend_button){
  //     var opts = options;
  //     var button = jQuery('<button tabindex="-1"></button>');
  //     button.text(options.extend_button_label);
  //     button.addClass('section_button');
  //     button.addClass('section_button_level_' + level );
  //     if (options.extend_button_right){
  //       button.css('right',options.extend_button_right);
  //     }
  ////     var nfm = self.createFieldModel(opts.extend_key,null,null);
  ////     console.log("NFM",nfm);
  ////     fid = nfm.id();
  //     var buttons = opts.extend_buttons;
  //     var extend_position = opts.extend_position;
  //     var getKey = function(){
  //      alert(opts.extend_key);
  //       return opts.extend_key;
  //     };
  //     var clicExtendHandler = function(e){
  //       e.preventDefault();
  //       e.stopImmediatePropagation();
  //       self._showExtend(opts.label, opts.extend_command,fid,extend_position,buttons,getKey);
  //     };
  //     button.click(clicExtendHandler);
  //     button.appendTo(el);
  //    }


  if (add_button_advanced) {

    var skey_advanced = 'tmp:sect_advanced';
    var def_status_advance = options.status_advanced === undefined ? 'close' : options.status_advanced;
    var model_advanced = this.getFieldModelOrCreate(skey_advanced, sectionId, def_status_advance);
    var status2 = model_advanced.value();
    div.data('advance_state', status2);

    var ad_but_label = '- ';
    if (status2 == 'close') {
      ad_but_label = '+ ';
    }

    var button = jQuery('<button tabindex="-1"></button>');
    button.text(ad_but_label + add_button_advanced_label);
    button.addClass('section_button_advanced');
    button.addClass('section_button');
    button.addClass('section_button_level_' + level);
    button.appendTo(el);

    var createHandler = function(container, btn_label) {
      return function(e) {

        var advanced_field_in_div = container.children('.advanced');
        //              advanced_field_in_div.toggle(150);

        if (advanced_field_in_div.css('display') == 'none') {
          advanced_field_in_div.css('display', 'table');
        } else {
          advanced_field_in_div.css('display', 'none');
        }

        var ad_but_label;
        if (model_advanced.value() == 'close') {
          model_advanced.value('open');
          ad_but_label = '- ' + btn_label;
        } else {
          model_advanced.value('close');
          ad_but_label = '+ ' + btn_label;
        }
        jQuery(this).text(ad_but_label);

        e.preventDefault();
        e.stopImmediatePropagation();
      };
    }
    button.click(createHandler(div, add_button_advanced_label));
  }


var SectionWidget = function(el, model) {
		this.el = el;
		this.model = model;
};
SectionWidget.prototype.show = function() {
		// console.log("SHOW",this.skey);
		ec = this.el.find('.btn_s');
		ec.text(cExpanded);
		this.model.value('open');
		ec.removeClass('btn_s_col');
		ec.addClass('btn_s_exp');
		this.el.next().show(150);
};
SectionWidget.prototype.hide = function() {
		// console.log("HIDE",this.skey);
		ec = this.el.find('.btn_s');
		ec.text(cCollapsed);
		this.model.value('close');
		ec.removeClass('btn_s_exp');
		ec.addClass('btn_s_col');
		this.el.next().hide(150);
};

  el.data('arc_section', new SectionWidget(el, model));


  el.click(function(e) {
    var h = jQuery(this);
    //console.log(h);
    ec = h.find('.btn_s');
    if (ec.hasClass('btn_s_exp')) {
      ec.text(cCollapsed);
      model.value('close');
    } else {
      ec.text(cExpanded);
      model.value('open');
    }
    ec.toggleClass('btn_s_exp');
    ec.toggleClass('btn_s_col');

    h.next().toggle(150);
    return false;
  });

  var myroot;
  //console.log("#1:0",this.rootContainer0);
  //console.log("#1:1",this.rootContainer1);
  //console.log("#1:2",this.rootContainer2);
  //console.log("#1:3",this.rootContainer3);


  if (use_current_container_as_root) {
    myroot = container;
    context.container = div;
  } else if (level == 1) {
    //myroot = this.rootElement;
    myroot = this.rootContainer0;
  } else if (level == 2) {
    myroot = this.rootContainer1;
  } else if (level == 3) {
    myroot = this.rootContainer2;
  } else if (level == 4) {
    myroot = this.rootContainer3;
  } else if (level == 0) {
    myroot = container;
    context.container = div;
  }


  //console.log("MY_ROOT:",options.skey, myroot);
  if (myroot == null) {
    myroot = this.rootContainer0;
  }
  myroot.append(el);
  myroot.append(div);

  if (pl.chk(cmd)) {
    if (options['set_root_container0']) {
      var org_rootContainer0 = self.rootContainer0; //alagi rootContainer gia na mporoun na mpoun sections
      self.rootContainer0 = div;
      self.rootContainer1 = null;
      self.rootContainer2 = null;
      self.rootContainer3 = null;
    }
    //var run_options = pl.chk(fid) ? {'field_id':fid}:null;
    var run_options = {
      'field_id': fid
    };
    this.execCMD(cmd, div, run_options);
    self.rootContainer0 = org_rootContainer0;
  }

  if (level == 1) {
    this.rootContainer1 = div;
  } else if (level == 2) {
    this.rootContainer2 = div;
  } else if (level == 3) {
    this.rootContainer3 = div;
  } else if (level == 4) {
    //this.rootContainer3 = div;
  }

  if (set_container) {
    //console.log("SET CONTAINER",div);
    this.rootContainer = div;
    context.container = div;
  }


  //console.log("####################################2: "  + options.skey);
  //console.log("#2:0",this.rootContainer0);
  //console.log("#2:1",this.rootContainer1);
  //console.log("#2:2",this.rootContainer2);
  //console.log("#2:3",this.rootContainer3);

};


FormControler.prototype._act_cmdGroup = function(container, options) {
  var self = this;
  var commands = options.commands;
  var new_container = options.new_container;
  var my_container = container;
  if (new_container !== undefined && new_container) {
    var el = jQuery('<div class="field">');
    container.append(el);
    my_container = el;
  }
  var execOptions = {
    context: options.context
  };
  jQuery.each(commands, function(i, cmd) {
    self.execCMD(cmd, my_container, execOptions);
  });
};


FormControler.prototype._act_addGenerateFunction = function(container, options) {
  var fnKey = options.fnKey;
  var fn = options.fn;

  this.generate_functions[fnKey] = fn;
};

FormControler.prototype._act_execJs = function(container, options) {
  var fn = options.fn;
  var context = options.context;
  context.fc = this;
  fn(context);
};


FormControler.prototype._act_extend = function(container, options) {
  //console.log("_act_extend",options);
  var fid = pl.chk(options['field_id']) ? options['field_id'] : null;
  var self = this;
  var commands = options.commands;
  var primary = pl.chk(options.primary) ? options.primary : null;
  var link_id = null;
  var parent_key_fn = options.parent_key_fn;
  var skip_extend_commands_if_empty_primary = pl.chk(options.skip_extend_commands_if_empty_primary) ? options.skip_extend_commands_if_empty_primary : false;

  //console.log("ACT_EXTEND", options.label, options.primary );

  //TODO: o root container prepei na ginete push se stiva
  // gia na mporoun na iparxoun nested act_extend
  var org_rootContainer0 = self.rootContainer0; //alagi rootContainer gia na mporoun na mpoun sections
  self.rootContainer0 = container;
  var context = options['context'] !== undefined ? options.context : new CmdContext();
  var execOptions = {
    context: context
  };
  execOptions.parent_key_fn = parent_key_fn;


  var primary_id = null;
    jQuery.each(commands, function(i, cmd) {
    if (cmd == primary) {
      primary_id = fid;
      return false;
    }
  });


  var primary_model = null;
  var empty_refItem = true;
  if (pl.chk(primary_id)) {
    var pm = this.getFieldModel(primary_id);
//    console.log("PM1",pm);
//    console.log("PM2",pm.refItem());
    if (pl.chk(pm.refItem())){
    	empty_refItem = false;
    }
    primary_model = pm;
    if (pl.chk(options.commands_primary_is_ref) && pl.chk(pm.refItem())) {
    	commands = options.commands_primary_is_ref;
    }
  }
  var skip_extend_commands = (empty_refItem && skip_extend_commands_if_empty_primary);

//	console.log('@##################################');
//	console.log('#empty refitem:',empty_refItem);
//	if (pl.chk(commands) && commands.length > 1) {
//		console.log('#commands > 1');
//	}
//	if (primary_model != null) {
//		console.log('#value ', primary_model.value());
//	}
//	console.log('@##################################');

	var display_empty_msg = (skip_extend_commands && pl.chk(commands) && commands.length > 1 && primary_model != null && !pl.chk(primary_model.value()));
	if (display_empty_msg) {
		container.append('<div style="font-size:1em; color:DarkBlue; padding:0.1em 1em 1em 0em">sindeste tin ontotita oste na emfanistoun epipleon pedia</div>');
	}

	jQuery.each(commands, function(i, cmd) {
  	var skip = false;
  	//console.log('### CMD: ',i , cmd);
  	//var efid = (cmd == primary) ? fid : null;
  	var efid = null;
  	if (cmd == primary){
  			efid = fid;
    } else if (skip_extend_commands){
    	//console.log("SKIP ",i);
    	skip = true;
    }
  	if (! skip){
  		delete execOptions['field_id'];
	    delete execOptions['link_id'];

	    link_id = primary_id;
	    if (pl.chk(efid)) {
	      //link_id = efid;
	      execOptions['field_id'] = efid;
	    } else if (pl.chk(link_id)) {
	      execOptions['link_id'] = link_id;
	    }

	    if (context.container !== undefined && context.container != null) {
	    	//console.log("##CHANGE CONTAINER");
	      container = context.container;
	      delete context.container;
	      //self.rootContainer0 = container;
	    }
	    //console.log("EXTEND EXEC",cmd,efid,execOptions,container);
	    self.execCMD(cmd, container, execOptions);
	    //console.log("act_extend", options , contexFt);
	    // if (fid == null & primary != null && primary == cmd){
	    // if (context.new_model !== undefined){
	    // //link_id = context.new_model.id();
	    // }
	    // }
  	}
  });

  //TODO: o root container prepei na ginete pop apo stiva
  self.rootContainer0 = org_rootContainer0;
  //console.log("CONTEXT:",context.data);

};


FormControler.prototype._act_remoteView = function(container, options) {
  //console.log('_act_remoteView',options);
  var self = this;

  var fid = options['field_id'];
  if (!fid) {
    console.log("error: probably view_command is not primary");
    alert("error #17 options['field_id'] missing  (probably view_command is not primary)");
    return;
  }

  var method = options['type'];
  if (!method) {
    method = 'simple';
  }


  var my_root = jQuery('<div class="subitem">');
  my_root.appendTo(container);

  var m = this.getFieldModel(fid);
  var execCmds = null;
  if (options['exec_cmds']) {
    execCmds = function() {
      var parent_id = m.id();
      var cmds = options['exec_cmds'];
      if (cmds['DEFAULT']){
        var ot = m.get('ot');
        if (ot && cmds[ot]){
          cmds = cmds[ot];
        } else {
          cmds = cmds['DEFAULT'];
        }
      }
      var ecmd = null;
      for (i in cmds) {
        var cmd = cmds[i];
        if (jQuery.isPlainObject(cmd)) {
          ecmd = cmd;
        } else {
          ecmd = this.commands[cmd];
        }
        ecmd['opts'] = jQuery.extend({}, ecmd['opts'], {
          'link_id': parent_id,
        });
        self.execCMD(ecmd, my_root);
      }
    }
  } else {
    execCmds = function() {};
  }

  var displayWidget = null;
  var methods = {
    'simple': function(itemFields) {
      displayWidget = new DisplaySimple(self, m, itemFields, my_root, options);
    },
    'generic': function(itemFields) {
      displayWidget = new DisplayGeneric(self, m, itemFields, my_root, options);
    },
  }

  var ref_id = m.refItem();
  if (ref_id) {
    var get_params = 'i=' + ref_id;
    var url = '/prepo/ws/item_metadata';
    jQuery.ajax({
      url: url,
      type: 'GET',
      data: get_params,
      success: function(data, textStatus, jqXHR) {
        var itemFields = FieldModelAccessor.createFromRemoteData(data);
        methods[method](itemFields);
        execCmds();
      },
    });
  } else {
    methods[method](self);
    execCmds();
  }


};

// <div id="r7" class="field">
// <label><a tabindex="-1" href="">Contributor:</a></label>
// <div class="input_wrapper arc_widget arcw_text" key="?????">
// <select style="width: 160px;"><option value="dc:contributor:author" style="width: 160px;">Author</option></select>
// <input type="text" class="input_field" readonly="readonly" style="width: 517px;">
// <div class="extend_button" link="7"><p class="init">⇳</p></div>
// </div>
// <button tabindex="-1" id="b1">add</button>
// <div class="icontainer2"></div>
// </div>
/**
 * @this FormControler
 * @param {Object} container
 * @param {Object} options
 */
FormControler.prototype._act_setupField = function(container, options) {
	//console.log("SET_UP_FIELD",container,options);
  var def_opts = {
    'label': '????',
    'type': 'text',
    'display': 'block',
    'width': 650,
    'one_label': false,
    'br_each': true,
    'br_first': true,
    'add_button': false,
    'add_button_label': 'add',
    'add_button_br': true,
    'add_button_first': false,
    skip_on_empty: false,
    select_key_width: '220px',
    no_label: false,
    'extend': false,
  };

  var self = this;
  var $ = jQuery.noConflict();
  var opts = $.extend(def_opts, options);

  if (opts.select_key_map !== undefined) {
    if (opts.key !== undefined) {
      //console.log(options);
      alert("REPLACE KEY " + opts.key);
    }
    opts.key = Object.keys(opts.select_key_map);
    //console.log("GEN KEY",opts.key);
  } else if (jQuery.isPlainObject(opts.key)) {
    opts.select_key_map = opts.key;
    opts.key = Object.keys(opts.select_key_map);
  }


  var key = opts.key;
  var fid = pl.chk(options.field_id) ? options.field_id : null; //render only this value with this field_id
  var link_id = pl.chk(options.link_id) ? options.link_id : null; //link the result with this field_id
  var context = options.context;

  //console.log("setupField",key, fid, link_id,options);

  var key_is_array = jQuery.isArray(key);
  var vals = pl.chk(key) ? self.getFieldModels(key, link_id) : [];
  var emptyValue = true;
  $.each(vals, function(i, m) {
    if (key_is_array) {
      //console.log("SET3:",key);
      m.keys(key);
    }
    if (pl.chk(m.value())) {
      emptyValue = false;
    }
  });
  //console.log("emptyValue",emptyValue);

  var hide_records = (emptyValue && opts.skip_on_empty);
  opts.hide_records = hide_records;
  if (hide_records && (!(opts.add_button))) {
    return;
  }
  this.c1++;

  var rootId = pl.chk(opts.div_id) ? opts.div_id : 'r' + this.c1;
  var rootE = $('<div>');
  rootE.attr('id', rootId);
  rootE.addClass('field');
  // if (opts.display == 'block'){
  // rootE.addClass('dblock');
  // } else {
  // rootE.addClass('dinline');
  // }

  if (opts.advanced_field) {
    rootE.addClass('advanced');
  }

  //edo 8a mpoun ola ta element, ean iparxoun koumpia tote dimiourgite kenourios
  var inputContainer = rootE;
  if (opts.no_label) {
    inputContainer = $('<div class="icontainer2">');
    rootE.append(inputContainer);
  }

  opts.field_element = rootE;
  var formWidgets = new FormWidgets(this, opts, inputContainer);

  var my_models = [];
  var new_fields = false;
  var field_count = 0;
  var reader_ids = [];
  var widget_ids = [];
  var widgets = [];
  //display inputs for all values (if !empty(fid) only fid value)
  //var im = pl.chk(fid) ? self.getFieldModel(fid) : self.createFieldModel();
  if (pl.chk(fid)) {
    var im = self.getFieldModel(fid);
    var iw = formWidgets.displayInput(0, im, rootE);
    field_count += 1;
    my_models.push(im);
    reader_ids.push(iw.readerId);
    widget_ids.push(iw.id);
    widgets.push(iw);
    new_fields = false;
  } else {
    var models = self.getFieldModels(key, link_id);
    //console.log("###models",models);
    if (models.length == 0) {
      var nm = null;
      if (opts.unique_parent_key) {
        //var parent_key = opts.unique_parent_key;
        var pm = self.getFirstFieldModelByKey(opts.unique_parent_key);
        if (pm != null) {
          var link = pm.id();
          nm = self.getFieldModelOrCreate(key, link, null);
        } else {
          console.log("EEEERRROOORRR#1");
          nm = self.createFieldModel(key, null, link_id);
        }
      } else {
        nm = self.createFieldModel(key, null, link_id);

      }
      var iw = formWidgets.displayInput(0, nm, rootE);
      my_models.push(nm);
      reader_ids.push(iw.readerId);
      widget_ids.push(iw.id);
      widgets.push(iw);
      new_fields = true;
      field_count += 1;
    } else {
      new_fields = false;
      my_models = models;
      $.each(models, function(i, m) {
        iw = formWidgets.displayInput(i, m, rootE);
        reader_ids.push(iw.readerId);
        widget_ids.push(iw.id);
        widgets.push(iw);
        field_count += 1;
      });
    }
  }

  var context_data = {
    key: key,
    link: link_id,
    field: fid,
    root: rootE,
    rootId: rootId,
    models: my_models,
    readersIds: reader_ids,
    widgetsIds: widget_ids,
    // widgets:widgets,
    newFields: new_fields,
    fieldCount: field_count
  };
  context.push('setupField', context_data);

  //APEND TO FORM
  //this.fields.push(rootE);
  container.append(rootE);

  if (opts.advanced_field && rootE.parent().data('advance_state') == 'close') {
    rootE.removeClass('advanced_show');
  } else if (opts.advanced_field && rootE.parent().data('advance_state') == 'open') {
    rootE.addClass('advanced_show');
  }

  for (i in widgets) {
    var w = widgets[i];
    w.onRenderFinish(container);
  }
  widgets = null;
};

////////////////////////////////////////////////
////////////////////////////////////////////////

FormControler.prototype.populateKeys = function(keys) {
  var models = [];
  if (!jQuery.isArray(keys)) {
    keys = [keys];
  }
  var readers = this.readers;
  for (i in readers) {
    var reader = readers[i];
    var rdata = reader.read();
    var key = rdata[0];
    for (var idx in keys) {
      var k = keys[idx];
      if (k == key) {
        var id = rdata[2];
        var lang = null;
        var props = null;
        if (reader.lang !== undefined) {
          lang = reader.lang();
          props = reader.props();
        }
        var m = this.getFieldModel(id);
        if (pl.chk(m)) {
          m.key(key);
          m.value(rdata[1]);
          m.link(rdata[3]);
          m.props(props);
          m.lang(lang);
          models.push(m);
        }
        break;
      }
    }
  }
  return models;
  //  console.log(this.readers);
};

FormControler.prototype.populateData = function() {
  console.log('## POPULATE-DATA ##');
  //this.consoleDump();
  var self = this;
  jQuery.each(self.readers, function(i, reader) {
    var lang = null;
    var props = null;
    if (reader.lang !== undefined) {
      lang = reader.lang();
      props = reader.props();
    }
    var rdata = reader.read();
    var key = rdata[0];
    var id = rdata[2];
    //console.log('radata (key, id)',key,id);
    var m = self.getFieldModel(id);
    if (pl.chk(m)) {
      //console.log("M:",m.id(),m.key(),m.value(),'|',rdata[1],rdata[3]);
      m.key(key);
      m.value(rdata[1]);
      m.link(rdata[3]);
      m.props(props);
      m.lang(lang);
    } else {
      //console.log("canot find fieldModel:", key, id, rdata);
      delete self.readers[id];

    }
  });
};


FormControler.prototype.displayExtendedColors = function() {
  var self = this;
  var extm = {};
  jQuery.each(self.ndata, function(k, m) {
    var value = m.value();
    var link = m.link();
    if (pl.chk(value) && pl.chk(link)) {
      if (!pl.chk(extm[link])) {
        extm[link] = 0;
      }
      extm[link] += 1;
    }
  });

  jQuery.each(extm, function(link, cnt) {
    jQuery(".extend_button[link='" + link + "']").each(function() {
      jQuery(this)
        .css('background-color', '#00FF66')
        .html('<p>' + cnt + '</p>');
    });
  });


};

// //????
// FormControler.prototype.populateForm = function(){
// console.log('## POPULATE-FORM ##');
// var self = this;
// jQuery.each(self.readers,function(i,reader){
// var rdata = reader.read();
// var id = rdata[2];
// var key = rdata[0];
// var link = rdata[3];
// var value = rdata[1];
// var m = self.getFieldModel(id);
// if (m.key() != key){
// throw "ERROR POPULATE FORM KEY NOT MATCH";
// }
// if (m.link() != link){
// throw "ERROR POPULATE FORM LINK NOT MATCH";
// }
// m.value(value);
//
// });
// };



FormControler.prototype.execCMD = function(cmd, container, run_options) {
	//console.log('execCMD',container,cmd);
  //  console.log("execCMD#1",container);
  //  console.log("execCMD#2",this.rootContainer);
  var myc = pl.chk(container) ? container : this.rootContainer;
  var ecmd = null;
  if (jQuery.isPlainObject(cmd)) {
    ecmd = cmd;
  } else {
    ecmd = this.commands[cmd];
  }



  if (!pl.chk(ecmd)) {
    console.error("CANOT FIND COMMAND: ", cmd);
    return;
  }
  if (!pl.chk(ecmd['action'])) {
    console.error("CANOT FIND ACTION FOR: ", cmd);
    return;
  }
  var act = '_act_' + ecmd['action'];
  if (!pl.chk(this[act])) {
    console.error("CANOT FIND method " + act + " FOR CMD: ", cmd);
    return;
  }

  //console.log('command',ecmd);
  if (run_options === undefined) {
    run_options = {};
  }

  if (run_options['context'] === undefined) {
    run_options['context'] = new CmdContext();
  }
  var my_options = jQuery.extend({}, ecmd['opts'], run_options);

  if (my_options.setupOptions !== undefined) {
    my_options = my_options.setupOptions(my_options);
  }
  //console.log("execCMD",my_options);
  my_options['cmd_name'] = cmd;
  this[act](myc, my_options);
  return run_options['context'];
};

FormControler.prototype._renderForm = function(populateData, resetDialogs) {
  // console.log("RENDER FORM# ", populateData);
  var self = this;

  if (populateData === undefined) {
    populateData = true;
  }
  if (resetDialogs === undefined) {
    resetDialogs = false;
  }

  jmessagesEl = jQuery('#jsmessages');
	jmessagesEl.hide();


  if (populateData) {
    this.populateData();
  }

  self.removeModelsObservers();
  self.rootElement.empty();
  this.tabindex = 0;
  this.c1 = 0;
  this.c2 = 0;
  this.c3 = 0;

  this.rootContainer1 = null;
  this.rootContainer2 = null;
  this.rootContainer3 = null;
  this.rootContainer4 = null;

  // this.readers.length = 0;
  delete this.readers;
  this.readers = {};
  jQuery.each(this.formOptions, function(k, v) {
    self.execCMD(v);
  });
  this.displayExtendedColors();

  // var lcmd = null;
  // var ws = self.extend_windows_stack;
  // for (i in ws){
  // console.log(ws[i]);
  // lcmd = ws[i];
  // }

  if (resetDialogs) {
    console.log("#RESET-DIALOGS");
    var prev = self.extend_windows_stack.pop();
    //jQuery('div.ui-dialog-content').dialog("close");
    // console.log("@STACK POP:",prev);
    if (prev) {
      self.closeDialogs();
      // console.log("SHOW PREV EXTEND");
      self._showExtend(prev[0], prev[1], prev[2], prev[3], prev[4], prev[5]);
    }
  }

};

FormControler.prototype.closeDialogs = function() {
  this.dialog_show_prev_on_close = false;
  jQuery('div.ui-dialog-content').dialog("close");
  this.dialog_show_prev_on_close = true;
}

FormControler.prototype.openPreviusDialog = function() {
  if (!this.dialog_show_prev_on_close) {
    return;
  }
  var self = this;
  self.extend_windows_stack.pop();
  var prev = self.extend_windows_stack.pop();
  //console.log("@2STACK POP:",prev);
  if (prev) {
    //console.log("SHOW PREV EXTEND");
    self._showExtend(prev[0], prev[1], prev[2], prev[3], prev[4], prev[5]);
  }

}



/**
 * @return
 */
FormControler.prototype.generate = function() {
  var msgContext = this.msgContext;
  console.log("#GENERATE");
  var self = this;

  var messages = [];

  //TITLE
  var obj_type_model = this.getFirstFieldModel('ea:obj-type:');
  var title_model = this.getFirstFieldModel('dc:title:');
  if (title_model == null && obj_type_model != null) {
    var txt = obj_type_model.value() + ' : ' + uuid.v1();
    title_model = this.createFieldModel('dc:title:', txt);
  }

  var all_editions = this.getFieldModelsByKey('ea:publication:statement');
  jQuery.each(all_editions, function(k1, m1) {
    var id = m1.id();
    var ems = self.getFieldModels(null, id);
    var esval = null;
    jQuery.each(ems, function(k2, m2) {
      var m2k = m2.key();
      var m2v = m2.value();
      var myval = m2v;
      if (m2k == 'ea:date:orgissued' && pl.chk(m2v)) {
        myval = m2v.y;
      }
      if (pl.chk(myval)) {
        esval = (esval == null) ? myval : esval + '; ' + myval;
        m1.value(esval);
      }
    });
    //}
  });

  jQuery.each(self.generate_functions, function(key, fn) {
    console.log("exec genereate_function", key)
    fn.call(self);
  });







  this._renderForm(false);



  if (messages.length > 0) {
    return 'messages';
  }

  return 'finish';
}






FormControler.prototype.generate_old = function() {
  var msgContext = this.msgContext;
  console.log("#GENERATE");
  var self = this;

  var obj_type_model = this.getFirstFieldModel('ea:obj-type:');
  var title_model = this.getFirstFieldModel('dc:title:');
  if (title_model == null && obj_type_model != null) {
    var txt = obj_type_model.value() + ' : ' + uuid.v1();
    title_model = this.createFieldModel('dc:title:', txt);
  }

  var all_editions = this.getFieldModelsByKey('ea:publication:statement');
  jQuery.each(all_editions, function(k1, m1) {
    var id = m1.id();
    var ems = self.getFieldModels(null, id);
    var esval = null;
    jQuery.each(ems, function(k2, m2) {
      var m2k = m2.key();
      var m2v = m2.value();
      var myval = m2v;
      if (m2k == 'ea:date:orgissued' && pl.chk(m2v)) {
        myval = m2v.y;
      }
      if (pl.chk(myval)) {
        esval = (esval == null) ? myval : esval + '; ' + myval;
        m1.value(esval);
      }
    });
    //}
  });

  jQuery.each(self.generate_functions, function(key, fn) {
    console.log("exec genereate_function", key)
    fn.call(self);
  });




  //  jQuery.each(this.ndata, function(i,m){
  //    if (m.get('aggregate_value')){
  //      var childs = self.getFieldModels(null,m.id());
  //      var v = '';
  //      for (i in childs){
  //        v += childs[i].value() + '; ';
  //      }
  //      m.value(v);
  //    }
  //  });

  //jQuery.each(this.ndata, function(i,m){
  //  var data_change_flag = false;




  var all_subjects = this.getFieldModelsByKey('dc:subject:');
  var tags_by_link = {};
  jQuery.each(all_subjects, function(k, v) {
    var val = pl.fullTrim(v.value());
    if (val == null) {
      return;
    }
    var link = v.link();
    if (link == null) {
      link = 0;
    }
    if (tags_by_link[link] === undefined) {
      tags_by_link[link] = {
        's': [], //SINGLE TAGS
        'c': [], //CHAIN  TAGS
      };
    }

    var vtags = [];
    var tmp = val.split('>');
    for (i in tmp) {
      var tag = pl.trim(tmp[i]);
      if (tag == null || tag == '') {
        continue;
      }
      vtags.push(tag);
    }
    if (vtags.length == 1) {
      //if (tags_by_link[link]['s'].indexOf(vtags[0]) == -1){
      tags_by_link[link]['s'].push(vtags[0]);
      //}
    } else {
      tags_by_link[link]['c'].push(vtags);
    }
  });
  //console.log(tags_by_link);


  var generate_subjects = function(link, singles, chains) {
    var messages = [];
    var errors = [];
    var cbuf = {}; //chain bufer
    var sbuf = {}; //single buffer
    var final_tags = []; //final single tags
    var final_chains = []; //final chains
    for (i in singles) {
      var single = singles[i];
      sbuf[single] = null;
    }

    for (var s in sbuf) {
      final_tags.push(s);
    };
    for (var i1 in chains) {
      var c = 0;
      var cc = 0;
      var chain = chains[i1];
      var msg = '';
      var msg_delimiter = '';
      var chain_str = '';
      var chain_str_delimiter = '';
      for (var i2 in chain) {
        var tag = chain[i2];
        chain_str += chain_str_delimiter + tag;
        chain_str_delimiter = '>';
        if (cbuf[tag] === undefined) {
          c += 1;
          cbuf[tag] = null;
          if (sbuf[tag] === undefined) {
            cc += 1;
            msg += msg_delimiter + tag;
            msg_delimiter = ' ,';
            final_tags.push(tag);
          }
        }
      }
      // if (cc>0){
      // msg = 'expand subject (' + chain_str + ' ) to ' + msg;
      // messages.push(msg);
      // //final_chains.push(chain_str);
      // }
      final_chains.push(chain_str);
      //  if (c==0) {
      // var error = 'subject (' +chain_str + ') apears many times';
      // errors.push(error);
      //}
    }


    var ok = true;
    sbuf = {};
    for (i in final_tags) {
      var check = final_tags[i].toLowerCase();
      if (sbuf[check] === undefined) {
        sbuf[check] = null;
      } else {
        ok = false;
        var error = 'subject (' + check + ') apears in multiple forms';
        errors.push(error);
      }
    }

    // console.log("mesages:");
    // for (i in messages){
    // console.log(messages[i]);
    // }
    // console.log("errors:");
    // for (i in errors){
    // console.log(errors[i]);
    // }
    //console.log("ft",final_tags);
    //console.log("fc",final_chains);

    var rep = {
      link: link,
      messages: messages,
      errors: errors,
      singles: final_tags,
      chains: final_chains,
    };
    return rep;
  }; //END GENERATE_SUBJECTS INLINE FUNCTION


  var reps = {};
  var errors = [];
  var messages = [];
  for (link in tags_by_link) {
    var rep = generate_subjects(link, tags_by_link[link]['s'], tags_by_link[link]['c']);
    msgContext.addInfos(rep.messages);
    msgContext.addErrors(rep.errors);
    var messages = messages.concat(rep.messages);
    var errors = errors.concat(rep.errors);
    reps[link] = rep;
  }

  if (errors.length > 0) {
    //renderMessages(messages,null,errors);
    return 'messages';
  }

  for (var link in reps) {
    var rep = reps[link];
    //console.log("#1",rep);
    if (link == 0) {
      link = null;
    }
    var chains = rep.chains;
    var singles = rep.singles;
    //console.log("#1",chains);
    //console.log("#2",singles);
    var cl = chains.length;
    var sl = singles.length;
    var subjects = this.getFieldModels('dc:subject:', link);
    var c = 0;
    var s = 0;
    for (i in subjects) {
      var subject = subjects[i];
      //console.log(i,subject);
      if (c < cl) {
        //console.log("REPLACE SUBJECT ", subject.id(), subject.value(),chains[c]);
        subject.value(chains[c]);
        c++;
      } else if (s < sl) {
        //console.log("REPLACE SUBJECT ", subject.id(), subject.value(),singles[s]);
        subject.value(singles[s]);
        s++;
      } else {
        //console.log("REPLACE SUBJECT ", subject.id(), subject.value(),'_NULL_');
        subject.value(null);
      }
    }
    for (i = s; i < sl; i++) {
      var ns = this.createFieldModel('dc:subject:', singles[i], link);
      //console.log('ADD NEW SUBJECT',singles[i]);
    }
    //
  }

  this._renderForm(false);

  if (messages.length > 0) {
    //renderMessages(messages,null,errors);
    return 'messages';
  }
  //renderMessages();
  return 'finish';
};


FormControler.prototype.setupForm = function(formOptions) {
  if (this.flagInitStatus) {
    this.flagInitStatus = false;
  }
  if (!pl.chk(formOptions)) {
    console.error("setup form without options");
    formOptions = {};
  }
  //console.log(formOptions);

  this.formOptions = formOptions;

  this._renderForm();

  // var tmp = this.ndata[5];
  // console.log(tmp);
  // tmp.value("OOOOOOOOOOOOOOOOOOOOO");
  // console.log("######TEST0",tmp);
  // console.log("######TEST1",tmp instanceof FieldModel);
  // console.log("######TEST2",tmp instanceof ObservableBase);
  // console.log("######TEST3",typeof tmp);
  // console.log("######TEST4",tmp.constructor);
  // console.log("######TEST5",tmp.prototype);
  // console.log("######TEST6",tmp.__proto__);
  //
  //

  // console.log("#############################################################");
  // tmp = new InputBase();
  // console.log("######TEST0",tmp);
  // console.log("######TEST1",tmp instanceof FieldModel);
  // console.log("######TEST2",tmp instanceof ObservableBase);
  // console.log("######TEST3",typeof tmp);
  // console.log("######TEST4",tmp.constructor);
  // console.log("######TEST5",tmp.prototype);
  // console.log("######TEST6",tmp.__proto__);
  //
  // console.log("#############################################################");
  // tmp = new InputBaseWidget();
  // console.log("######TEST0",tmp);
  // console.log("######TEST1",tmp instanceof FieldModel);
  // console.log("######TEST2",tmp instanceof ObservableBase);
  // console.log("######TEST3",typeof tmp);
  // console.log("######TEST4",tmp.constructor);
  // console.log("######TEST5",tmp.prototype);
  // console.log("######TEST6",tmp.__proto__);
  //
  // console.log("#############################################################");
  // tmp = new InputTextArea({ setReader:function(){} },{
  // fid:'1',
  // model:{addObserver:function(){}, value:function(){}},
  // container:jQuery('<div>'),
  // }
  // );
  // console.log("######TEST0",tmp);
  // console.log("######TEST1",tmp instanceof InputTextArea);
  // console.log("######TEST2",tmp instanceof ObservableBase);
  // console.log("######TEST3",typeof tmp);
  // console.log("######TEST4",jQuery.isPlainObject(tmp));
  // console.log("######TEST5",jQuery.isFunction(tmp));
  // console.log("######TEST6",tmp.constructor);
  // console.log("######TEST7",tmp.__proto__);
  // console.log("######TEST8",InputTextArea.prototype);
  // console.log("######TEST9",tmp.prototype);


};



FormControler.prototype.unblockUI = function() {
	if (jQuery['unblockUI'] !== undefined) {
		jQuery.unblockUI();
	}
}

FormControler.prototype.blockUI = function() {
  if (jQuery['blockUI'] !== undefined) {
	  jQuery.blockUI({
		  message: '<div></div>',
		  css: {
			  'padding': '20px',
			  'opacity': '1',
			  'background-image': 'url(/_assets/img/ajax-loader-7.gif)',
			  'background-repeat': 'no-repeat',
			  'background-position': 'center center',
			  'z-index': '200000'
		  }
	  });
  }
}
