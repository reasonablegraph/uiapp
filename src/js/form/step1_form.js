function setupZ3950(fc){

  jQuery('.z3950').click(function(e){
    console.log("Z3950");

    var getKey = function(){
      return "tmp:search:z3950";
    };
    var pos = {
        my: "center top",
        at: "center top"
    };
    fc._showExtend('z39.50','z3950', null, pos,null,getKey);

  });
}

function setupBiblionet(fc){

  jQuery('#biblionet1').click(function(e){
    console.log("BIBLION");
    var button =  jQuery(this).attr("disabled", "disabled");
    //var isbn = jQuery('#dc_isbn').val();
    e.preventDefault();
    e.stopImmediatePropagation();
    fc.populateData();
    var ms = fc.getFieldModels('dc:identifier:isbn');
    var isbn = (ms.length >= 1)? ms[0].value()  : null;
    if (!pl.chk(isbn)){
      setTimeout(function(){button.removeAttr("disabled");},1200);
      return;
    }
    jQuery.ajax({
        type: 'GET',
        url: "/prepo/ws/biblionet",
        data: {'isbn':isbn},
        async:   false,
        complete: function(){
          setTimeout(function(){button.removeAttr("disabled");},800);
        },
        success: function(data){

          var txt = '<table><tr><td>' +data.title + '<BR>' + data.author +  '<BR>' + data.publisher
          + " " + data.year + '<BR><a href="' + data.url
          + '" target="_blank">biblionet</a><br/> ';
          jQuery.each(data.headers,function(idx,h){
            txt+= h +'<br/>';
          });
          txt += '</td><td><a href="' + data.url
          + '" target="_blank"><img src="' + data.img + '"></a></td></tr></table>';



          jQuery('#result').html(txt);
          var ms = null;

          ms = fc.getFieldModels('dc:title:');
          if (ms.length >= 1 && ms[0].value() == null){
            ms[0].value(data.title);
          }

          ms = fc.getFieldModels('ea:date:orgissued');
          if (ms.length >= 1 && ms[0].value() == null){
            ms[0].value(DateValue.create(data.year));
          }

          ms = fc.getFieldModels('dc:publisher:');
            if (ms.length >= 1 && ms[0].value() == null){
              ms[0].value(data.publisher);
          }

          ms = fc.getFieldModels('dc:contributor:author');
            if (ms.length >= 1 && ms[0].value() == null){
              ms[0].value(data.author);
          }

          ms = fc.getFieldModels('ea:url:related');
          if (ms.length >= 1 && ms[0].value() == null){
            ms[0].value(UrlValue.create(data.url,'biblionet'));
          }



        // var tmp;
        // tmp = jQuery('#dc_title');
        // if (tmp.val() == ''){
          // tmp.val(data.title);
        // }
        // tmp = jQuery('input[name="orgissued_y"]').first();
        // if (tmp.val() == ''){
            // tmp.val(data.year);
        // }
        // tmp = jQuery('#dc_publischer');
        // if (tmp.val() == ''){
            // tmp.val(data.publisher);
        // }
//
        // tmp = jQuery('input[name="dc:contributor:author[]"]').first();
        // if (tmp.val() == ''){
            // tmp.val(data.author);
        // }
//
        // tmp = jQuery('input[name="url1_ea:url:related[]"]').first();
        // if (tmp.val() == ''){
            // tmp.val(data.url);
            // jQuery('input[name="url2_ea:url:related[]"]').first().val('biblionet');
//
        // }

        tmp = jQuery('#thumb1');
        if (tmp.val() == ''){
            tmp.val(data.img);
        }

        //tmp = jQuery('input[name="thumb"]');
        //if (tmp.size() == 0){
        //	  jQuery('#forms1').append('<input type="text" name="thumb" value="' + data.img + '"/>');
        //}


      }
    });


  });

}



function step1(new_record, object_types,data){

	//console.log("STEP1",JSON.stringify(object_types));
  //console.log("STEP1",data);


  new_record_flag = false;
  if (new_record == 1){
    new_record_flag = true;
  }

  var my_object_types = {};
  jQuery.each(object_types.values,function(k,v){
    if (known_object_types[k] !== undefined){
      my_object_types[k] = v;
    } else {
      console.log("SKIP OT",k);
    }
  });


  if (object_types['default'] === undefined){
    alert("undefined default object_type");
  }
  var default_object_type = object_types['default'];
  window.form_object_types = my_object_types;
  window.form_object_type_default = default_object_type;
  window.form_new_record_flag = new_record_flag;
  //window.author_type_map =contributors_printed;
//	window.contributor_keys = Object.keys(contributors_printed);


  if (js_params['formSetups'] !== undefined){
    formSetups = jQuery.extend(formSetups,js_params['formSetups']);
  }

//  tinyMCE.init({});

  //tinyMCE.init({
  tinymce.init({
		entities : '160,nbsp,38,amp,60,lt,62,gt',
		 plugins: [
		           'advlist autolink lists link image charmap print preview anchor',
		           'searchreplace visualblocks code fullscreen',
		           'insertdatetime media table contextmenu paste code',
		         ],
		//mode : "textareas",
		relative_urls : false,
		theme : "modern",
		content_css : "/_assets/css/tinymce_styles.css",
		editor_css : "_assets/css/tinymce_editor.css"

	});





//################# JS Worker ########################//
  var w;

  startWorker = function(){
      if(typeof(Worker) !== "undefined") {
          if(typeof(worker) == "undefined") {
              var url = document.location.href;
              var index = url.indexOf('prepo');
              if (index != -1) {
                workers_url = url.substring(0, index);
                }
              worker = new Worker(workers_url + '_assets/js/form/worker.js');
          }
          worker.onmessage = function(event) {
            document.getElementById("result").innerHTML = event.data;
          };
          worker.postMessage({'cmd': 'Start...', 'msg': 'Go'});
      }else{
          document.getElementById("result").innerHTML = "Sorry! No Web Worker support.";
            }
      };

  stopWorker = function stopWorker() {
    worker.terminate();
    worker = undefined;
        }

//		startWorker();
//		stopWorker();
//###################################################//


  var formSetup = default_form_obj_type  ? formSetups[default_form_obj_type] : formSetups[default_object_type];

//	 console.log("######################");
//	 console.log('1',default_form_obj_type);
//	 console.log('2',default_object_type);
//	 console.log('3',object_types);
//	 console.log('4',object_types['default']);
//	 console.log('5',formSetup);
//	 console.log("######################");

//	commands.author_type_map = contributors_printed;
//	commands.contributor_keys = Object.keys(contributors_printed);
//	console.log("XXX",commands.author_type_map);


  //FIXME: COMMENT THIS
  //console.log(data);
  var fc = new FormControler(jQuery('#step1f'),data,commands,key_labels);

  form_type = fc.getFieldModels('ea:form-type:');
	if ( form_type.length >= 1 && form_type[0].value()!= null){
		if (formSetups[form_type[0].value()] !== undefined ){
			fc.setupForm(formSetups[form_type[0].value()]);
		}else{
			fc.setupForm(formSetup);
		}
	}else{
		fc.setupForm(formSetup);
	}

	window.fc = fc;

  //console.log( "You are running jQuery version: " + jQuery.fn.jquery );
  //test1();

}


function test1(){

  var fa = new FieldModelAccessor({});
  var m1 = fa.createFieldModel('dc:title:', 'manifestation');
  var m2 = fa.createFieldModel('dc:identifier:isbn', 'isbn123');
  var m3 = fa.createFieldModel('ea:status:', 'private');

  var m40 = fa.createFieldModel('ea:subj:', 's3>s4');
  m40.props({'pnctn':'s3>s4'});
  var m42 = fa.createFieldModel('ea:obj-type:', 'auth-general',m40.id());
  var m43 = fa.createFieldModel('ea:note:generic', 'chain subject',m40.id());
  var m44 = fa.createFieldModel('ea:status:', 'finish',m40.id());

  var m50 = fa.createFieldModel('ea:subj:general', 's3',m40.id());
  var m52 = fa.createFieldModel('ea:obj-type:', 'auth-general',m50.id());
  var m53 = fa.createFieldModel('ea:status:', 'finish',m50.id());

  var m60 = fa.createFieldModel('ea:subj:general', 's4',m40.id());
  var m62 = fa.createFieldModel('ea:obj-type:', 'auth-general',m60.id());
  var m63 = fa.createFieldModel('ea:status:', 'finish',m60.id());

  var m70 = fa.createFieldModel('ea:subj:', 's5>s6');
  m70.props({'pnctn':'s5>s6'});
  var m72 = fa.createFieldModel('ea:obj-type:', 'auth-general',m70.id());
  var m73 = fa.createFieldModel('ea:note:generic', 'chain subject',m70.id());
  var m74 = fa.createFieldModel('ea:status:', 'finish',m70.id());

  var m80 = fa.createFieldModel('ea:subj:general', 's5',m70.id());
  var m82 = fa.createFieldModel('ea:obj-type:', 'auth-general',m80.id());
  var m83 = fa.createFieldModel('ea:status:', 'finish',m80.id());

  var m90 = fa.createFieldModel('ea:subj:general', 's6',m70.id());
  var m92 = fa.createFieldModel('ea:obj-type:', 'auth-general',m90.id());
  var m93 = fa.createFieldModel('ea:status:', 'finish',m90.id());

  FormUtil.showModel(fa,function(){

    fa.remoteCreateSubItem(m40,{
      'convert_root_to_title':true,
      'set_refitem_to_root':true,
    }).then(function(){
      FormUtil.showModel(fa,function(){
        console.log("OK");
      });
    });

  });


}








function cSubmitHandler(value){
  return function(e){

     // jQuery.blockUI({
    	//  message: '<div></div>',
    	//  css: {
   	 // 	   'padding': '20px',
     //     'opacity': '1',
     //     'background-image': 'url(/_assets/img/ajax-loader-7.gif)',
     // 		 'background-repeat': 'no-repeat',
     // 	 	 'background-position': 'center center',
    	// 	 }
     // });

//     jQuery.unblockUI();

    console.log("SAVE FINALIZE SUBMIT ");
    var button =  jQuery(this).attr("disabled", "disabled");
    e.preventDefault();
    var msgContext = fc.newMessageContext();

    fc.populateData();
    fn_generate_title(fc);

    //fc.removeOrphanModels();
    fc.generate();
    fc.removeOrphanModels();
    //renderMessages();
    //var gstatus = fc.generate(msgContext);
    var vstatus = fc.validate();
      // if (gstatus == 'messages' || vstatus == 'messages'){
      // }
    var mstatus = renderMessageContext(msgContext);
    if (mstatus == 'stop'){
      jQuery('html,body').scrollTop(0);
      fc.unblockUI();
      setTimeout(function(){button.removeAttr("disabled");},1200);
      return;
    }



    fc.blockUI();

    var s1_jobs = [];

    //console.log("subitems_keys: ",fc.subitems_keys);
//	  fc.subitems_keys['ea:subj:']=null;
    //var subitem_keys = ['ea:work:','ea:subj:','ea:authPersonAssociated:Place_Birth'];
    var subitems_keys = fc.subitems_keys;

    for (var j in subitems_keys){
      //var kk = subitem_keys[j];
      var smodels = fc.getFieldModels(j, null);
      for (i in smodels) {
	      var s = smodels[i];
	      var value = s.value();
	      if (value != null) {
		      console.log("STEP1 PROMISE_PUSH:", s.key(), s.value());
		      s1_jobs = s1_jobs.concat(fc.remoteCreateSubItemJobs(s, {
			      'convert_root_to_title': true,
			      'set_refitem_to_root': true,
		      }));
	      }
      }
    }

	  s1_jobs.push(function(){
	    var deferred = jQuery.Deferred();
    	//console.log("step1 final job");
      //fc.consoleDump();
      var form = jQuery('#forms1')[0];
      var data = fc.ndata;
      FormUtil.addModelsToForm(form, data);
      var bv = button.val();
      var ph = jQuery('<input type="hidden">').attr('name',bv).val(bv);
      ph.appendTo(form);
      console.log('step1_form submit');
      form.submit();
		  deferred.resolve("OK");
	    return deferred;
    });

    var context={};
    var jc= 0;
	  var sequence = jQuery.Deferred.Sequence( s1_jobs );
  	sequence.reduce(function( fn ) {
  		//console.log("REDUCE1",fn);
  		if (fn){
			  jc+=1;
			  console.log("step1 form EXECUTE JOB: " + jc);
  			//console.log("REDUCE2",fn);
  			return jQuery.when(fn(context));
  		}
  	});
    //console.log("#STEP1 FIN");

//    jQuery.when.apply(jQuery, promises).then(function(){
//      console.log("FINAL");
//      //fc.consoleDump();
//      var form = jQuery('#forms1')[0];
//      var data = fc.ndata;
//      FormUtil.addModelsToForm(form, data);
//      var bv = button.val();
//      var ph = jQuery('<input type="hidden">').attr('name',bv).val(bv);
//      ph.appendTo(form);
//      console.log("FORM SUMBIT");
//      form.submit();
//    });
    //finalSubmit();

  };
}

function cSaveHandler(){
  return function(e){

    e.preventDefault();
    e.stopImmediatePropagation();
    //var button =  jQuery(this).attr("disabled", "disabled");

    var sdata=fc.getSData();

    var data = {};
    data['sdata'] = fc.getSData();

    var wfdata = {};

    var submit_id_input = null;
    var form = jQuery(jQuery('#forms1')[0]);
    form.find('input[type=hidden]').each(function(idx,el){
      var inp = jQuery(el);
      var name= inp.attr('name');
      wfdata[name] = inp.val();
      if (name == 'submit_id'){
        submit_id_input = inp;
      }
    });


    data['wfdata'] = wfdata;
    //console.log("save_submit DATA",data);

    var url = '/prepo/save_submit';
     jQuery.ajax({
       type: 'POST',
       dataType:'json',
       url: url ,
       data:JSON.stringify(data),
       success:function(data,  textStatus, jqXHR ){
        // console.log("OK1",textStatus);
        // console.log("OK2",data);
         submit_id_input.val(data['submit_id']);
       },
     });

     alert(messages_labels['temporary_save']);

//
//		var url = '/ws/prepo/save_submit';
//  	 jQuery.ajax({
//  		 type: 'POST',
//  		 dataType:'json',
//       url: url ,
//       data:JSON.stringify(sdata),
//       success:function(data,  textStatus, jqXHR ){
//      	 console.log("OK1",textStatus);
//      	 console.log("OK2",data);
//       },
//  	 });
//


  }
}

jQuery( document ).ready(function() {
  jQuery("button[type='submit']").each(function(){
    var button = jQuery(this);
    var value = button.val();
    //console.log("SETUP SUBMIT:",value);
    if (value == 'next' || value == 'save_finalize'){
      button.click(cSubmitHandler(value));
    } else if (value == 'save'){
      button.click(cSaveHandler());
    }


  });

  var btn = jQuery('.b_tree');
  btn.click(function(e){
    e.preventDefault();
    fc.showModel();
    fc.validate();

  });


  var cls_btn = jQuery('.btn-close');
  cls_btn.click(function(e){
   e.preventDefault();
//   location.replace(cls_btn.val());
   closeForm();
  });


  //setupBiblionet(fc);
  setupZ3950(fc);



});


//	jQuery("[key]").each(function(){
//		console.log(this);
//	});
  //jQuery( "div.jsform" ).accordion({ header: "h2" });
  //fc.show();
