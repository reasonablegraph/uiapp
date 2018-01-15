
consoleLog('FORM-TEST #START');

var createSubItemOptions = {
	'convert_root_to_title':false,
	'set_refitem_to_root':true,
	'createSubItemUrl':'http://laravel.local/ws/prepo/create_subitem',
	'headers': {
		'X-DRUPAL-USERNAME': 'admin',
		'X-DRUPAL-UID': '1',
		'X-DRUPAL-ACCESS': 'admin',
	}
};

var fa = new FieldModelAccessor({});
var tmp;


var m1 = fa.createFieldModel('ea:sub-node:','n1');
m1.props({'test':'test'});
var root1 = m1.id();
tmp = fa.createFieldModel('dc:title:', 'work2',root1);
tmp = fa.createFieldModel('ea:obj-type:', 'auth-work',root1);
tmp = fa.createFieldModel('ea:status:', 'finish',root1);


var m2 = fa.createFieldModel('ea:sub-node:','n1');
var root2 = m2.id();
tmp = fa.createFieldModel('dc:title:', 'work2',root2);
tmp = fa.createFieldModel('ea:obj-type:', 'auth-work',root2);
tmp = fa.createFieldModel('ea:status:', 'finish',root2);

//tmp = fa.createFieldModel('dc:identifier:isbn', 'isbn123',root1);

var item1 = null;



//
// 3
// 4
// 5
// 6
// 7
// 8
// var request = $.ajax( url, { dataType: "json" } ),
// 	chained = request.then(function( data ) {
// 		return $.ajax( url2, { data: { user: data.userId } } );
// 	});
//
// chained.done(function( data ) {
// 	// data retrieved from url2 as provided by the first request
// });

fa.remoteCreateSubItem(m1,createSubItemOptions).then(function(rep){
		console.log("#DONE1: " ,rep['item_id']);
		fa.remoteCreateSubItem(m1,createSubItemOptions).then(function(rep) {
			console.log("#DONE12 ", rep['item_id']);
		});
});



//phantomTask('phantom.done');