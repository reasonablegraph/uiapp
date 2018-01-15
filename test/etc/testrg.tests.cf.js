var	 tests = {
		 // assert_work1 : {method:"phpunit", path:"testrg/", file:"ContextTest" }
		// assert_work2 : {method:"phpunit", path:"testrg/", file:"Context2Test" }
	"assert_vertices_c0" : {method:"phpunit", path:"testrg/", file:"VerticesTest" , validationData:"c0" },
	"assert_vertices_c3" : {method:"phpunit", path:"testrg/", file:"VerticesTest" , validationData:"c3" },
	"assert_vertices_work1-full" : {method:"phpunit", path:"testrg/", file:"VerticesTest" , validationData:"work1-full" },
	"assert_vertices_work1-full-edit-manif": {method:"phpunit", path:"testrg/", file:"VerticesTest" , validationData:"work1-full-edit-manif" },
	"assert_edit" : {method:"phpunit", path:"testrg/", file:"VerticesTest", validationData:"edit" },
	"assert_city1" : {method:"phpunit", path:"testrg/", file:"VerticesTest", validationData:"city1" },
	"assert_rel1" : {method:"phpunit", path:"testrg/", file:"VerticesTest", validationData:"rel1" },
	"assert_rel2" : {method:"phpunit", path:"testrg/", file:"VerticesTest", validationData:"rel2" },
	"assert_rel5" : {method:"phpunit", path:"testrg/", file:"VerticesTest", validationData:"rel5" },
	"assert_relations1" : {method:"phpunit", path:"testrg/", file:"VerticesTest" , validationData:"relations1" },
	"assert_bug-count-place": {method:"phpunit", path:"testrg/", file:"VerticesTest" , validationData:"bug-count-place" },



////////////////////////////////////////////////////////////////////
//CI TESTS
////////////////////////////////////////////////////////////////////
	"ci-t1":{ path:"ci", file:"t1"},
	"ci-edit1":{ path:"ci", file:"edit1", phantomEditKey:"WORK1"},
	"ci-edit2":{ path:"ci", file:"edit2", phantomEditKey:"PLACE1"},
	"ci-edit3":{ path:"generic", file:"edit", phantomEditKey:"PERSON2",
		context:{EDIT_NEW_TITLE:"Translator, Marc"}
	},
	"ci-expr1":{ path:"ci", file:"expr1",
		context:{
			"INIT_URLPATH":"/prepo/edit_step1?br=2&rd=auth-expression&sf=1",
		}
	},


	"ci-relations1":{ path:"ci", file:"relations1"},
	"relations-remove-rel1":{path:"ci", file:"relations-remove-rel1",phantomEditKey:"PERSON5",},
	"ci-relations2":{ path:"ci", file:"relations2"},
	"ci-relations2-ed1":{ path:"generic", file:"edit", phantomEditKey:"PERSON1",
		context:{EDIT_NEW_TITLE:"Doe, John Junior"}
	},

////////////////////////////////////////////////////////////////////
//CI ASERTS
////////////////////////////////////////////////////////////////////
	"assert_ci1s1": {method:"phpunit", path:"testrg/", file:"VerticesTest" , validationData:"ci1s1" },
	"assert_ci1s2": {method:"phpunit", path:"testrg/", file:"VerticesTest" , validationData:"ci1s2" },
	"assert_ci1s3": {method:"phpunit", path:"testrg/", file:"VerticesTest" , validationData:"ci1s3" },
	"assert_ci2":   {method:"phpunit", path:"testrg/", file:"VerticesTest" , validationData:"ci2" },
	"assert_ci2s2":  {method:"phpunit", path:"testrg/", file:"VerticesTest" , validationData:"ci2s2" },
	"assert_ci3":   {method:"phpunit", path:"testrg/", file:"VerticesTest" , validationData:"ci3" },
	"assert_ci4s1":   {method:"phpunit", path:"testrg/", file:"VerticesTest" , validationData:"ci4s1" },
	"assert_ci4s2":   {method:"phpunit", path:"testrg/", file:"VerticesTest" , validationData:"ci4s2" },
////////////////////////////////////////////////////////////////////

			"w1":{path:"generic", file:"wem",
				context:{
					CKEY_WORK:"WORK1",
					CKEY_WORK2:"WORK2",
					CKEY_CONCEPT1: "CONCEPT1",CKEY_CONCEPT2: "CONCEPT2",
					RKEY_CHAIN1: "CHAIN1", RKEY_RING11: "CONCEPT1", RKEY_RING12: "CONCEPT2",
					RKEY_CHAIN2: "CHAIN2", RKEY_RING21: "CONCEPT1", RKEY_RING22: "CONCEPT2",

				}
			},

	//////////////////////////////////////////////////////////////////////////////////

	"generic-edit":{path:"generic", file:"edit",  phantomEditKey:"PLACE1"},


	//////////////////////////////////////////////////////////////////////////////////
	//BUGS
	//////////////////////////////////////////////////////////////////////////////////
	"bug1-subjects":{path:null, file:"bug1-subjects"},
	"bug2-readonly-s1":{path:null, file:"bug2-readonly"},
	"bug2-edit1":{ path:"generic", file:"edit", phantomEditKey:"PERSON1",
		context:{EDIT_NEW_TITLE:"Translator, Jane"}
	},



	//////////////////////////////////////////////////////////////////////////////////


	'chain1':{path:"subjects",file:"chain1"},

	"rel1":{path:"relations"},
	"rel2":{path:"relations"},
	"rel3":{path:"relations"},
	"rel5":{path:"relations"},
	 //context:{"RENAME_VALUE":"Doe, Jane"}
	"rel1-rename":{file:"rename",  phantomEditKey:"PERSON1"},

	//context:{"RENAME_VALUE":"Doe, Jane"}
	"rm_vertex_concept": {method:"phpunit", path:"testrg/", file:"DeleteTest" , context:{"DELETE_KEY":"CONCEPT22"} },
	"edit_work1": {path:"edit_work1",  phantomEditKey:"WORK1"}, //urlPathVarName:"WORK1_EDIT_URLPATH"
	"edit_manif": {path:"edit_manif", phantomEditKey:"MANIFESTATION1" },//urlPathVarName:"MANIFESTATION1_EDIT_URLPATH"


	"edit_manif_city1": {path:"edit_manif", file:"edit_manif1", phantomEditKey:"MANIFESTATION1" },
	"edit_manif_city2": {path:"edit_manif", file:"edit_manif1", phantomEditKey:"MANIFESTATION2" },
	"edit_manif_city3": {path:"edit_manif", file:"edit_manif1", phantomEditKey:"MANIFESTATION3" },

	"relations1": {path:"relations"},

	"work1-full": {},   //WORK EXPR MANIF AUTHOR SUBJECTS
	"work-add-existing": {},

	"workspace" : { context:{} },
	"workspace-edit1" : { phantomEditKey:"WORK1"},
	"workspace-edit2" : { phantomEditKey:"CHAIN2"},

	"edit_create_work": {path:"edit", file:"work1"},
	"edit_edit1": { path:"edit", file:"edit1", phantomEditKey:"WORK1"},
	"edit_edit2": { path:"edit", file:"edit2", phantomEditKey:"CHAIN2"},

	"city_t1" : {path:"city", file:"t1"},
	"city_edit1" :{path:"city", file:"edit1", phantomEditKey:"PLACE1"},
	"city_edit2" :{path:"city", file:"edit2", phantomEditKey:"PUBLISHER1"},


	"edit_place1" :{path:"generic", file:"edit",  phantomEditKey:"PLACE1"},
	"edit_place2" :{path:"generic", file:"edit",  phantomEditKey:"PLACE2"},
	"edit_place3" :{path:"generic", file:"edit",  phantomEditKey:"PLACE3"},
	"edit_place4" :{path:"generic", file:"edit",  phantomEditKey:"PLACE4"},
	"edit_place5" :{path:"generic", file:"edit",  phantomEditKey:"PLACE5"},
	"edit_place6" :{path:"generic", file:"edit",  phantomEditKey:"PLACE6"},
	"edit_work1" :{path:"generic", file:"edit",  phantomEditKey:"WORK1"},
	"edit_work2" :{path:"generic", file:"edit",  phantomEditKey:"WORK2"},
	"edit_work3" :{path:"generic", file:"edit",  phantomEditKey:"WORK3"},
	"edit_person1" :{path:"generic", file:"edit",  phantomEditKey:"PERSON1"},
	"edit_person2" :{path:"generic", file:"edit",  phantomEditKey:"PERSON2"},
	"edit_person3" :{path:"generic", file:"edit",  phantomEditKey:"PERSON3"},
	"edit_person4" :{path:"generic", file:"edit",  phantomEditKey:"PERSON4"},
	"edit_person5" :{path:"generic", file:"edit",  phantomEditKey:"PERSON5"},
	"edit_person6" :{path:"generic", file:"edit",  phantomEditKey:"PERSON6"},
	"edit_manistation1" :{path:"generic", file:"edit",  phantomEditKey:"MANIFESTATION1"},
	"edit_manistation2" :{path:"generic", file:"edit",  phantomEditKey:"MANIFESTATION2"},
	"edit_manistation3" :{path:"generic", file:"edit",  phantomEditKey:"MANIFESTATION3"},
	"edit_manistation4" :{path:"generic", file:"edit",  phantomEditKey:"MANIFESTATION4"},
	"edit_manistation5" :{path:"generic", file:"edit",  phantomEditKey:"MANIFESTATION5"},
	"edit_manistation6" :{path:"generic", file:"edit",  phantomEditKey:"MANIFESTATION6"},
	"edit_expresion1" :{path:"generic", file:"edit",  phantomEditKey:"EXPRESSION1"},
	"edit_expresion2" :{path:"generic", file:"edit",  phantomEditKey:"EXPRESSION2"},
	"edit_expresion3" :{path:"generic", file:"edit",  phantomEditKey:"EXPRESSION3"},

	"n1-wem1":{path:"generic", file:"wem",
		context:{
			CKEY_PERSON1:"PERSON1", CKEY_PERSON2:"PERSON2", CKEY_PERSON3:"PERSON3", CKEY_PERSON4:"PERSON4",
			CKEY_PLACE1:"PLACE1",
			CKEY_CONCEPT1:"CONCEPT1",CKEY_CONCEPT2:"CONCEPT2",  CKEY_CONCEPT3:"CONCEPT3",  CKEY_CONCEPT5:"CONCEPT5",
			CKEY_WORK2:"WORK2",  CKEY_WORK3:"WORK3",
			CKEY_MANIFESTATION:"MANIFESTATION1",CKEY_EXPRESSION:"EXPRESSION1", CKEY_WORK:"WORK1",RKEY_EXPRESSION_OF_WORK:"EXPRESSION1",RKEY_MANIFESTATION_OF_WORK:"MANIFESTATION1",
			RKEY_PUBPLACE:"PLACE1",
			RKEY_AUTHOR1:"PERSON1",
			RKEY_AUTHOR2:"PERSON2",
			RKEY_TRANSLATOR:"PERSON3",
			RKEY_EDITOR:"PERSON4",
			RKEY_CHAIN1:"CHAIN1",RKEY_RING11:"CONCEPT1",RKEY_RING12:"CONCEPT2",
			RKEY_CHAIN2:"CHAIN2",RKEY_RING21:"WORK2",//"RKEY_RING22":"CONCEPT3",
			RKEY_CHAIN3:"CHAIN3",RKEY_RING31:"CONCEPT1",RKEY_RING32:"WORK3",
			CKEY_DITEM1:"DITEM1", RKEY_MANIFESTATION_FOR_DITEM1:"MANIFESTATION1",
 }},
 "n1-person1":{path:"generic", file:"wem",
			 context:{
			 CKEY_PERSON5:"PERSON5", RKEY_PERSON5_SIBLING1:"PERSON1",
 }},
 "n1-wem2":{path:"generic", file:"wem",
			 context:{
				 CKEY_MANIFESTATION:"MANIFESTATION2", CKEY_EXPRESSION:"EXPRESSION2", CKEY_WORK:"WORK4", RKEY_EXPRESSION_OF_WORK:"EXPRESSION2", RKEY_MANIFESTATION_OF_WORK:"MANIFESTATION2",
			 CKEY_PLACE1:null, RKEY_PUBPLACE:"PLACE1",
			 RKEY_AUTHOR1:"PERSON5",
 }},
 "n1-wem3":{path:"generic", file:"wem",
			 context:{
			CKEY_CONCEPT1:"CONCEPT9",
			CKEY_CONCEPT2:"CONCEPT10",
			CKEY_WORK:"WORK5",
			RKEY_CHAIN1:"CHAIN7", RKEY_RING11:"CONCEPT9", RKEY_RING12:"CHAIN1", RKEY_RING12_ELEMENT : "ea:subj:concept",
			RKEY_CHAIN2:"CHAIN8", RKEY_RING21:"CHAIN3" , RKEY_RING21_ELEMENT : "ea:subj:concept",
			RKEY_CHAIN3:"CHAIN9", RKEY_RING31:"CHAIN1", RKEY_RING31_ELEMENT: "ea:subj:concept", RKEY_RING32:"CONCEPT10",
	}},

	"ditem-1":{path:"digital_items", file:"di1", },
	"ditem-1-full":{path:"digital_items", file:"di1-full"},


	"assert_ditem-1-full": {method:"phpunit", path:"testrg/", file:"VerticesTest" , validationData:"ditem-1-full" },

	"ditem-2-step1":{path:"digital_items", file:"di2-step1", },
	"ditem-2-step2":{path:"digital_items", file:"di2-step2", phantomEditKey:"MANIFESTATION1"},


	"ditem-3-step1":{path:"digital_items", file:"di3-step1", phantomNewObjectType:"auth-manifestation"},
	"ditem-3-step2":{path:"digital_items", file:"di3-step2", phantomNewObjectType:"digital-item"},
	"ditem-3-step3":{path:"digital_items", file:"di3-step3", phantomNewObjectType:"digital-item"},

	"ditem-4-step1":{path:"digital_items", file:"di4-step1", phantomNewObjectType:"auth-manifestation"},


	"ne-place1_1":{ path:"generic", file:"wem",
			context:{
				CKEY_PLACE1:"PLACE1",
				//WORK1
				CKEY_MANIFESTATION:"MANIFESTATION1", CKEY_EXPRESSION:"EXPRESSION1", CKEY_WORK:"WORK1", RKEY_EXPRESSION_OF_WORK:"EXPRESSION1", RKEY_MANIFESTATION_OF_WORK:"MANIFESTATION1",
				RKEY_PUBPLACE:"PLACE1",
	}},
	"ne-place1_2" :{ path:"generic", file:"wem",
		context: {
			CKEY_PLACE1:"PLACE2",
			CKEY_PERSON1:"PERSON1", RKEY_PERSON1_PLACE_OF_BIRTH:"PLACE1", RKEY_PERSON1_PLACE_OF_DEATH:"PLACE2",
			CKEY_PERSON2:"PERSON2", RKEY_PERSON1_PLACE_OF_DIRTH:"PLACE2",
			//WORK3
			CKEY_MANIFESTATION:"MANIFESTATION3",
			CKEY_CONCEPT1: "CONCEPT1",  CKEY_WORK: "WORK3", RKEY_MANIFESTATION_OF_WORK:"MANIFESTATION3",  RKEY_CHAIN1: "CHAIN1", RKEY_RING11: "CONCEPT1", RKEY_RING12: "PLACE1",
		}
	},
	"ne-place1_3": { path: "generic", file: "wem",
		context:{
			CKEY_MANIFESTATION:"MANIFESTATION2",
			CKEY_CONCEPT1: "CONCEPT3",  CKEY_WORK:"WORK2", RKEY_MANIFESTATION_OF_WORK:"MANIFESTATION2", RKEY_CHAIN1: "CHAIN2", RKEY_RING11: "CONCEPT3", RKEY_RING12: "CHAIN1", RKEY_RING12_ELEMENT: "ea:subj:place",
		}

	},



	"bug-count-place-setup-1":{ path:"generic", file:"wem",
		context:{
			CKEY_PLACE1:"PLACE1", CKEY_CONCEPT1: "CONCEPT1",
			//WORK1
			CKEY_WORK:"WORK1",
			RKEY_CHAIN1:"CHAIN1",RKEY_RING11:"PLACE1", RKEY_RING12:"CONCEPT1",
	}},

	"bug-count-place-setup-2":{ path:"generic", file:"wem",
		context:{
			//WORK1
			CKEY_WORK:"WORK2",
			RKEY_CHAIN1:"CHAIN2", RKEY_RING11:"CHAIN1", RKEY_RING11_ELEMENT : "ea:subj:place",
	}},

	"bug-count-place-remove":{phantomEditKey:"WORK2" },




	//Person
	"ne-person1_1":{ path:"generic", file:"wem",
		context:{
			CKEY_CONCEPT1: "CONCEPT1",CKEY_CONCEPT2: "CONCEPT2",

			CKEY_PERSON1:"PERSON1",
			//WORK1
			CKEY_PLACE1:"PLACE1",
			CKEY_MANIFESTATION:"MANIFESTATION1", CKEY_EXPRESSION:"EXPRESSION1", CKEY_WORK:"WORK1",
			RKEY_EXPRESSION_OF_WORK:"EXPRESSION1", RKEY_MANIFESTATION_OF_WORK:"MANIFESTATION1", RKEY_AUTHOR:"PERSON1", RKEY_PUBPLACE:"PLACE1",
			RKEY_FOR_PERSON1_CHAIN1: "CHAIN2", RKEY_FOR_PERSON1_RING11: "CONCEPT1", RKEY_FOR_PERSON1_RING12:"CONCEPT2",

			CKEY_CONCEPT5: "CONCEPT5",CKEY_CONCEPT6: "CONCEPT6",
			CKEY_CHAIN1:'CHAINA',
			RKEY_FOR_CHAINA_CHAIN1: "CHAIN0", RKEY_FOR_CHAINA_RING11: "CONCEPT5",  RKEY_FOR_CHAINA_RING12:"CONCEPT6",


		}},

	"ne-person1_2":{ path:"generic", file:"wem",
		context:{
			CKEY_PERSON2:"PERSON2",
			//WORK1
			CKEY_MANIFESTATION:"MANIFESTATION2", CKEY_EXPRESSION:"EXPRESSION2", CKEY_WORK:"WORK2",
			RKEY_EXPRESSION_OF_WORK:"EXPRESSION2", RKEY_MANIFESTATION_OF_WORK:"MANIFESTATION2", RKEY_TRANSLATOR:"PERSON2",

			RKEY_PERSON2_SIBLING1:"PERSON1",

			RKEY_FOR_MANIFESTATION2_CHAIN1: "CHAIN11",
			RKEY_FOR_MANIFESTATION2_RING11: "CHAINA", RKEY_FOR_MANIFESTATION2_RING11_ELEMENT: "ea:subj:concept",
	}},


	"ne-work1_1":{ path:"generic", file:"wem",
		context:{
			CKEY_PLACE1:"PLACE1",
			CKEY_PERSON1:"PERSON1",
			CKEY_MANIFESTATION:"MANIFESTATION1", CKEY_MANIFESTATION1:"MANIFESTATION4", CKEY_EXPRESSION:"EXPRESSION1",
			CKEY_WORK:"WORK1",
			RKEY_EXPRESSION_OF_WORK:"EXPRESSION1", RKEY_MANIFESTATION_OF_WORK:"MANIFESTATION1",  RKEY_AUTHOR:"PERSON1", RKEY_PUBPLACE:"PLACE1",
		}
	},
	"ne-work1_2":{ path:"generic", file:"wem",
		context:{
			CKEY_PLACE1:null,
			CKEY_PERSON1:"PERSON2",
			CKEY_MANIFESTATION:"MANIFESTATION2", CKEY_EXPRESSION:"EXPRESSION2",
			CKEY_WORK:"WORK2",
			RKEY_EXPRESSION_OF_WORK:"EXPRESSION2", RKEY_MANIFESTATION_OF_WORK:"MANIFESTATION2", RKEY_AUTHOR:"PERSON2", RKEY_PUBPLACE:"PLACE1",
		}
	},
	"ne-work1_3":{ path:"generic", file:"wem",
		context:{
			CKEY_PLACE1:null,
			CKEY_PERSON1:"PERSON3",
			CKEY_MANIFESTATION:"MANIFESTATION3", CKEY_EXPRESSION:"EXPRESSION3",
			CKEY_WORK:"WORK3",
			RKEY_EXPRESSION_OF_WORK:"EXPRESSION3", RKEY_MANIFESTATION_OF_WORK:"MANIFESTATION3", RKEY_AUTHOR:"PERSON3", RKEY_PUBPLACE:"PLACE1",
		}
	},
	"ne-work1_4":{ path:"generic", file:"wem",
		context:{
			CKEY_CONCEPT5: "CONCEPT1",
			CKEY_MANIFESTATION:"MANIFESTATION5", CKEY_MANIFESTATION1:"MANIFESTATION6",
			CKEY_WORK:"WORK5",
			RKEY_MANIFESTATION_OF_WORK:"MANIFESTATION5", RKEY_MANIFESTATION2_OF_WORK:"MANIFESTATION6",
			RKEY_CHAIN1: "CHAIN1",  RKEY_RING12: "PLACE1",RKEY_RING13: "CONCEPT1"
		}
	},
	//
	// "ne-work1_5":{ path:"generic", file:"wem",
	// 	context:{
	// 		// CKEY_MANIFESTATION1:"MANIFESTATION6",
	// 		// RKEY_MANIFESTATION_OF_WORK:"MANIFESTATION5",
	// 	}
	// },









	"ne-ex1_1":{ path:"generic", file:"wem",
		context:{
			CKEY_CONCEPT1:"CONCEPT1",CKEY_CONCEPT2:"CONCEPT2",CKEY_CONCEPT3:"CONCEPT3",
			CKEY_PLACE1:"PLACE1",CKEY_PLACE2:"PLACE2",
			CKEY_PERSON1:"PERSON1", CKEY_PERSON2:"PUBLISHER1", CKEY_PERSON3:"PERSON3",
			CKEY_MANIFESTATION:"MANIFESTATION1", CKEY_MANIFESTATION1:"MANIFESTATION2", CKEY_EXPRESSION:"EXPRESSION1",
			CKEY_DITEM1:"DITEM1",
			CKEY_WORK:"WORK1",
			RKEY_EXPRESSION_OF_WORK:"EXPRESSION1", RKEY_MANIFESTATION_OF_WORK:"MANIFESTATION1", RKEY_MANIFESTATION1_OF_WORK:"MANIFESTATION2",  RKEY_AUTHOR:"PERSON1",
			RKEY_PUBPLACE:"PLACE1",
			RKEY_PUBLISHER:"PUBLISHER1",
			RKEY_TRANSLATOR:"PERSON3",
	 		RKEY_CHAIN1: "CHAIN1",  RKEY_RING11: "CONCEPT1", RKEY_RING12: "CONCEPT2",
			RKEY_MANIFESTATION_FOR_DITEM1:"MANIFESTATION1"
		}
	},





	// "tmp":{ path:"generic", file:"wem",
	// 	context:{
	// 			CKEY_CONCEPT1: "CONCEPT1",CKEY_CONCEPT2: "CONCEPT2",
	// 			CKEY_CHAIN1:'CHAINA',
	// 			RKEY_FOR_CHAINA_CHAIN1: "CHAIN0", RKEY_FOR_CHAINA_RING11: "CONCEPT1",  RKEY_FOR_CHAINA_RING12:"CONCEPT2",
	// 		// CKEY_CONCEPT1: "CONCEPT1",CKEY_CONCEPT2: "CONCEPT2",
	// 		// CKEY_PERSON:"PERSON1",
	// 		// CKEY_PERSON2:"PERSON2", RKEY_PERSON2_SIBLING1:"PERSON1",
	// 		// RKEY_FOR_PERSON2_CHAIN1: "CHAIN2", RKEY_FOR_PERSON2_RING11: "CONCEPT1", RKEY_FOR_PERSON2_RING12:"CONCEPT2",
	// 	}},

	"gearman1": {method:"phpunit", path:"testrg/", file:"GearmanTest"},

	"graphApi-s1":{ path:null, file:"graph-api-setup"},
	"assert_graphApi-s1": {method:"phpunit", path:"testrg/", file:"VerticesTest" , validationData:"assert_graphApi-s1" },
	"graphApi-s2": {method:"phpunit", path:"testrg/", file:"GraphApiTest"},


	"em":{path:"generic", file:"em"},







};//END-TESTS