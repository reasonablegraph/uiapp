
module.exports = function () {


	var less_custom_functions = {
			trbl: function(less, t,r,b,l,hspace,vspace){
			//var hunit = (less.tree.functions["get-unit"](hspace))['value']['numerator'][0];
			//var vunit = (less.tree.functions["get-unit"](vspace))['value']['numerator'][0];

			var hvalue = hspace ? parseFloat(hspace['value']) : 0.54;
			var vvalue = vspace ? parseFloat(vspace['value']) : 1;
			var hunit  = hspace ? hspace['unit']['numerator'][0] : 'rem';
			var vunit  = vspace ? vspace['unit']['numerator'][0] : 'rem';

			//console.log("hvalue,vvalue,hunit,vunit",hvalue,vvalue,hunit,vunit);

			var tv = t ? parseFloat(t['value']) : 0;
			var rv = r ? parseFloat(r['value']) : 0;
			var bv = b ? parseFloat(b['value']) : 0;
			var lv = l ? parseFloat(l['value']) : 0;

			var nt = tv*vvalue;
			var nr = rv*hvalue;
			var nb = bv*vvalue;
			var nl = lv*hvalue;

			rep =  nt + vunit + ' ' + nr + hunit + ' ' + nb + vunit + ' ' + nl + hunit;
//			console.log("trbl",rep);
			return rep;
		}
	};

	return less_custom_functions;

};