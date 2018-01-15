var conf = {

	////////////////////////////////////////////////////////////////////
	testSuites: {
		"s1":{
			testCases:["ditem-method-1-full","ci4","ci3","ci1","ci2"],
			info:"continuous integration",
		},

		"digital-item":{
			testCases:["ditem-method-1","ditem-method-2","ditem-method-3",'ditem-method-4'],
			info:"Creation digital-item",
		},

	},
	////////////////////////////////////////////////////////////////////

	testCases: {
		"workspace": {
			tests:[
				"w1",
				//"w2",
			],
			context: {},
			info: "workspace"
		},

		"ditem-method-1-full" :{
			tests:[
				"ditem-1-full",
				"assert_ditem-1-full"
			],
			context: {},
			info: "Digital item method 1  full (spool)"
		},

		"ditem-method-1" :{
			tests:[
							"ditem-1",
						],
			context: {},
			info: "Digital item method 1 (spool)"
		},

		"ditem-method-2" :{
			tests:[
							"ditem-2-step1",
							"ditem-2-step2",
						],
			context: {},
			info: "Edit manif add ditem (created as item)"
		},

		"ditem-method-3" :{
			tests:[
							"ditem-3-step1",
							"ditem-3-step2",
							"ditem-3-step3",
						],
			context: {},
			info: "sindesi ditem mesa apo ti forma tou admin"
		},

		"ditem-method-4" :{
			tests:[
				"ditem-4-step1",
			],
			context: {},
			info: "New manif add ditem (created as popup) [paralagi tis 2]"
		},

////////////////////////////////////////////////////////////////////
//CI
////////////////////////////////////////////////////////////////////
	"ci1" :{
		tests:[
			"ci-relations1",
			"assert_ci2",
			"relations-remove-rel1",
			"assert_ci2s2"
		],
		context:{},
		info:"relations",
	},
		"ci2" :{
			tests:[
				"ci-t1",
				"assert_ci1s1",
				"ci-edit1",
				"assert_ci1s2",
				"ci-edit2",
				"assert_ci1s3",
				"ci-edit3"
			],
			context:{},
			info:"work expresion manif di full + edit work add subject",
		},
		"ci3" :{
			tests:[
				"ci-expr1",
				"assert_ci3",
			],
			context:{},
			info:"",
		},

		"ci4" :{
			tests:[
				"ci-relations2",
				"assert_ci4s1",
				"ci-relations2-ed1",
				"assert_ci4s2",
			],
			context:{},
			info:"",
		},

////////////////////////////////////////////////////////////////////

	"ne1" :{
			tests:[
				"n1-wem1",
				"n1-person1",
				"n1-wem2",
				"n1-wem3",
			],
			context:{},
			info:"neighborhood 1"
	},

	"ne-place1" :{
			tests:[
				"ne-place1_1",
				"ne-place1_2",
				"ne-place1_3",
				"edit_place1",
			],
			context:{},
			info:"neighborhood for city"
	},


	"ne-person1" :{
		tests:[
			"ne-person1_1",
			"ne-person1_2",
//			"ne-place1_3",
//			"edit_place1",
		],
		context:{},
		info:"neighborhood for person"
},

		"ne-work1" :{
			tests:[
				"ne-work1_1",
				"ne-work1_2",
				"ne-work1_3",
				"ne-work1_4",
				//"ne-work1_5",
				//"edit_work1",
			],
			context:{},
			info:"neighborhood for work"
		},

		"ne-ex" :{
			tests:[
				"ne-ex1_1",
			],
			context:{},
			info:"neighborhood for work"
		},

	"rel1":{
		tests:[
			"rel1",
			"rel1-rename",
			"assert_rel1",
		],
		info:"rel1 work->person, rename person"
	},

	"rel2":{
		tests:[
			"rel2",
			"rel1-rename",
			"assert_rel2",
		],
		info:"rel2 2X(work->person), rename person"
	},

	"rel5":{
		tests:[
			"rel5",
			"rel1-rename",
			"assert_rel5"
		],
			info:"rel2 2X(work->person), rename person"
	},

	"city1" :{
		tests:[
			"city_t1",
			"edit_manif_city1",
			"edit_manif_city2",
			"edit_manif_city3",
			"assert_city1",
			"city_edit1",
			"city_edit2"
		],
		info:"city1"
	},

	"edit" :{
		tests:[
			"edit_create_work",
			"edit_edit1",
			"edit_edit2",
			"assert_edit",
		],
		info:"edit test"
	},


	"relations": {
		tests:["relations1", "assert_relations1","relations-remove-rel1","assert_ci2s2"],
			info: "progonoi aderfia"
	},

	"c0": { tests:[
		"work1-full",
		"assert_vertices_c0",
	],
	context:{
	},
		info:"work author expresion subject manifestation publisher"
	},


	"c1": { tests:[
			"work1-full",
			"assert_vertices_work1-full",
			"rm_vertex_concept",
			////"assert_vertices_work2-after-delete",
			],
		  context:{},
			info:"work author expresion subject manifestation publisher"
	},

	"c2": { tests:["work1-full",
								"edit_manif2",
								],
	// 			 info:"work1-full & edit manif work"
	// context:{"ADD_EDIT_URLS":true}
	},


	"c3": { tests:[
									"work1-full",
									 "assert_vertices_work1-full",
										"edit_manif1",//FULL SUBMIT
										"assert_vertices_work1-full-edit-manif",
										"edit_work1",
										"work-add-existing" ,//FULL SUBMIT
										"assert_vertices_c3",
								],
			//context:{ADD_EDIT_URLS:true},
			info:"work1-full & edit manif work & add-work-existing"
		},

	"bug-count-place" : {
		tests:[ "bug-count-place-setup-1",
						"bug-count-place-setup-2",
						"bug-count-place-remove",
						"assert_bug-count-place",
						],
			//context:{},
		info:"bug - count place as subject"
	},

	"bug2-readonly": {
		tests:["bug2-readonly-s1","bug2-edit1"],
		info:"subject-chain is not readonly"
	},

		"gearman": {
			tests:[
				"gearman1",
			],
			context: {},
			info: "gearman"
		},

		"graph-api":{
			tests:["graphApi-s1","assert_graphApi-s1", "graphApi-s2"],
			context: {},
			info: "graph api"
		}



	},//END TEST-CASES



	"validation": {

	},//END VALIDATION

	"validation-data": {
		  // ci1s1:{
		  // 	"vertices":{"CHAIN2":{"label":"ERROR LABEL"}}
		  // }

		"bug-count-place":{
	   	"vertices":{
	   		"PLACE1":{"jdata":{"opac1":{"as_subj":1}}}},
	   	}

//		publisher-rename:{
//			"vertices": {
//				 "MANIFESTATION1":{"label" : "koko lala", "title" : "koko lala title"}
//				},
//		}
	},//END VALIDATION-DATA

	//DEFAULT VALUES
	conf: {
		phpunit_base_path:"app/tests/",
		testUrlPrefix:"http://laravel.local/",
		testUrlPath:"/prepo/edit_step1?br=2&rd=auth-work&sf=1",

	}

}
