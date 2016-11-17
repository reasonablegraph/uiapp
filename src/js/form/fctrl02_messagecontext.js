
function MessageContext(){
  this.infos = [];
  this.warnings = [];
  this.errors = [];
}
MessageContext.prototype.addInfo = function(info){
  this.infos.push(info);
};
MessageContext.prototype.addWarning = function(warn){
  this.warnings.push(warn);
};
MessageContext.prototype.addError = function(err){
  this.errors.push(err);
};

MessageContext.prototype.addErrors = function(errors){
  this.errors = this.errors.concat(errors);
};
MessageContext.prototype.addWarnings = function(warns){
  this.warnings = this.warnings.concat(warns);
};
MessageContext.prototype.addInfos = function(infos){
  this.infos = this.infos.concat(infos);
};
MessageContext.prototype.clear = function(){
  this.infos = [];
  this.warnings  = [];
  this.errors = [];
};
MessageContext.prototype.hasErrors = function(){
  return (this.errors.length > 0);
};
MessageContext.prototype.hasMessages = function(){
  return ((this.errors.length > 0)
  || (this.warnings.length > 0)
  || (this.infos.length > 0)
  );
};


function renderMessageContext(msgContext,rootElement){
  var r = (rootElement) ? rootElement :  jQuery('#jsmessages');
  if (msgContext === undefined || msgContext == null){
    renderMessages(r);
    return "continue";
  }
  return renderMessages(r,msgContext.infos,msgContext.warnings,msgContext.errors);
}

var warning_history = {};
function renderMessages(rootElement,infos,warns,errors){
  var r = rootElement;
  r.empty();
	r.css('border','1px solid gray');
	r.show();
  var c= 0;
  if (errors !== undefined && errors != null && errors.length > 0){
    var ul = jQuery('<ul style="color:red">');
    for (i in errors){
      c++;
      console.log("ERROR: ", errors[i]);
//      var l = jQuery('<span>Error: </span>');
      var l = jQuery('<span>' + messages_labels['error'] + ':</span>');
      var m = jQuery('<span>').text(errors[i]);
      var li = jQuery('<li>');
      l.appendTo(li); m.appendTo(li); li.appendTo(ul);
      ul.appendTo(r);
    }
    rootElement.css('border','1px solid red');
  }

  if (warns !== undefined && warns != null && warns.length > 0){
    var ul = jQuery('<ul style="color:#FF00FF">');
    for (i in warns){
      var warn = warns[i];
      if (warning_history[warn] !== undefined){
        continue;
      }
      warning_history[warn] = null;
      c++;
      var l = jQuery('<span>Warning: </span>');
      var m = jQuery('<span>').text(warn);
      var li = jQuery('<li>');
      l.appendTo(li); m.appendTo(li); li.appendTo(ul);
      ul.appendTo(r);
    }
  }


  if (infos !== undefined && infos != null && infos.length > 0){
    var ul = jQuery('<ul style="color:black">');
    for (i in infos){
      c++;
      var l = jQuery('<span>Info: </span>');
      var m = jQuery('<span>').text(infos[i]);
      var li = jQuery('<li>');
      l.appendTo(li); m.appendTo(li); li.appendTo(ul);
      ul.appendTo(r);
    }
  }

  if (c > 0){
    return "stop";
  }
  return "continue";
}


function showUrlInDialog(url,title){
var el = '<div title="' + title + '"></div>';
var mydialog = null;
//var el = '<div></div>';
var tag = jQuery(el);
jQuery.ajax({
  url: url,
  success: function(data) {
    mydialog = tag.html(data).dialog({
      modal: true,
      "minWidth": 600,
      open: function() {
        jQuery('.ui-widget-overlay').bind('click', function() {
          mydialog.dialog('close');
        });
      },
      buttons: {
        Ok: function() {
          jQuery( this ).dialog( "close" );
        }
      }
    });
    mydialog.dialog('open');
  }
});
};

