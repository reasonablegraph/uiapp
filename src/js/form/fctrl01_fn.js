
function addPxToNumber(size){
	if (size == null) return null;
	size = String(size);
	//if (pl.strEndsWith(size,'px')){return size;}
	if (size.match(/\d$/)){
		return size + 'px';
	}
	return size;
}

function createSelectElement( options ){
	  var width = options.width === undefined ? null: options.width;
	  var select_values = options.select_values;
    var default_selection = options.default_selection === undefined ? null: options.default_selection;
    var onSelect = options.onSelect === undefined  ? null : options.onSelect;
    var selectReady = options.select_ready === undefined  ? null : options.select_ready;
    var select_id = options.select_id === undefined  ? null : options.select_id;

    var readOnly = options.read_only === undefined ? false : options.read_only;
		var size=options.size === undefined ? null : options.size;

    var inputE = jQuery('<select>');

    if (select_id){
    inputE.attr('id', select_id);
    }

    if (readOnly){
       inputE.attr("disabled", "disabled");
       //inputE.attr("readonly", "readonly");
    }
    if (options.disabled){
       inputE.attr("disabled", "disabled");
    }

    if (size){
       inputE.attr("size", size);
    }


    if (pl.chk(width)){
     	inputE.css('width',addPxToNumber(width));
    }
    jQuery.each(select_values,function(k,v){
    	// if (!pl.chk(k)){
    		// k='_';
    	// }
    	//console.log("#ADD",'['+ k +']', '['+ v +']');
      var option = jQuery('<option>').attr('value',k).text(v).appendTo(inputE);
      // if (pl.chk(default_selection) && k == default_selection){
       // option.attr('selected','selected');
      // }
    });
    if (pl.chk(onSelect)){
       inputE.change(onSelect);
    }

    if (pl.chk(default_selection)){
    	//console.log("DEFAULT:",default_selection);
      inputE.val(default_selection);
    }

    if (pl.chk(selectReady)){
    	inputE.ready(selectReady);
     }

    //inputE.select2({width:'copy'});
    return inputE;
}
