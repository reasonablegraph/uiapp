var conf = {

	////////////////////////////////////////////////////////////////////
	testSuites: {


	},
	////////////////////////////////////////////////////////////////////

	testCases: {

// CLOSED
	"bug-publisher-rename":{
		tests:[
			"publisher1-step1",
			"publisher1-rename",
			"assert_publisher_rename",
		],
		context:{},
		info:"CLOSED - Manif-place-publisher rename"
	},

//CLOSED
	bug1: { tests:[
		"work1-bug1",
		////"edit_work1_prepare", "edit_work1",
		 "work-add-existing-bug1", //FULL SUBMIT
		 "assert_bug1"
	],
		context:{
		ADD_EDIT_URLS:true
	},
		info:"CLOSED - chain without title"
	}


},//END TEST-CASES


	"validation": {

	},//END VALIDATION


	"validation-data": {

	},//END VALIDATION-DATA


	//DEFAULT VALUES
	conf: {
		phpunit_base_path:"app/tests/",
		testUrlPrefix:"http://laravel.local/",
		testUrlPath:"/prepo/edit_step1?br=2&rd=auth-work&DEFAULT"
	}

}
