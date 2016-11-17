var commands = commands ? commands : {};


commands.work_statement = {
		action : 'setupField',
		opts : jQuery.extend({},opts_text,{
			'key' : 'ea:work:statement',
			'label' : 'Work statement',
			//'default_value_uuid':true,
			'hidden_input':true,
		})
};


commands.work_title = {
		action : 'setupField',
		opts : {
			'key' : 'ea:work:title',
			'label':key_labels['ea:work:title'],
			'type' : 'text',
			'show_help' : false,
			//background_color:'pink',
			//autocomplete_url : '/archive/search-author',
		}
	};




commands.generate_work_statement = {
	action:'addGenerateFunction',
	opts:{
		fnKey:'work_statement',
		/** @this FormControler */
		fn:function(){
		  var self = this;

			var all_statements = this.getFieldModelsByKey('ea:work:statement');
			jQuery.each(all_statements, function(k1,m1){
					var id = m1.id();
					var ems = self.getFieldModels(null,id);
					var c = 0;
					jQuery.each(ems, function(k2,m2){
						console.log(m2);
					if (m2.key() == 'dc:language:iso'){
						return true;
					}
					if (m2.value()!=null){
						c+=1;
					}
				});
				if (c >0){
					m1.value(c);
				} else {
					m1.value(null);
				}
			});
		},
	}

};
