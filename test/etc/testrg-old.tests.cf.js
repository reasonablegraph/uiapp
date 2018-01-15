var	 tests = {

		"assert_bug1": {method:"phpunit", path:"testrg/", file:"VerticesTest" , validationData:"bug1" },
		"publisher1-step1" : { context:{} },
		"publisher1-rename":{file:"rename", phantomEditKey:"PUBLISHER1", context:{"RENAME_VALUE":"neos publisher"}},
		"assert_publisher_rename" : {method:"phpunit", path:"testrg/", file:"VerticesTest" , validationData:"publisher-rename" },


};//END-TESTS