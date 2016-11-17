
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
    var readOnly = options.read_only === undefined ? false : options.read_only;
		var size=options.size === undefined ? null : options.size;

    var inputE = jQuery('<select>');
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
    //inputE.select2({width:'copy'});
    return inputE;
}
