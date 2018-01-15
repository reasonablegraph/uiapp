var commands = commands ? commands : {};
var cmdCreate = cmdCreateFactory(commands,'relation-fields.js');


/***********************************************************/
/*********** Manif Relation Equivalent *********************/
/***********************************************************/
			cmdCreate.relation({
				'cmd_name':'manif_relation_equivalent',
				'object_type':'auth-manifestation',
				'key':relation_equivalent_map,
				'label':key_labels['ea:manif:Relation_Equivalent'],
				//'extend_primary_label':'place term',
				'search_url':'/prepo/ws/search-manifestation',
				 'extend_commands' : f_auth_manifestations_extend,
				 'new_button_label' : 'new manifestation',
				 'extend_primary_label' : key_labels['ea:manif:Title'],
			  root_options:{
			  	select_key_width:'280px',
			  	width:"400px",
			    "add_button": true,
			    "repeat_style": "ordered",
			  }
			});

/***********************************************************/
/*********** Manif Relation Descriptive ********************/
/***********************************************************/
			cmdCreate.relation({
				'cmd_name':'manif_relation_descriptive',
				'object_type':'auth-manifestation',
				'key':relation_descriptive_map,
				'label':key_labels['ea:manif:Relation_Descriptive'],
				'search_url':'/prepo/ws/search-manifestation',
				 'extend_commands' : f_auth_manifestations_extend,
				 'new_button_label' : 'new manifestation',
				 'extend_primary_label' : key_labels['ea:manif:Title'],
			  root_options:{
			  	select_key_width:'280px',
			  	width:"400px",
			    "add_button": true,
			    "repeat_style": "ordered",
			  }
			});

/***********************************************************/
/*********** Manif Relation Whole Part *********************/
/***********************************************************/
			cmdCreate.relation({
				'cmd_name':'manif_relation_wholepart',
				'object_type':'auth-manifestation',
				'key':relation_wholepart_map,
				'label':key_labels['ea:manif:Relation_Wholepart'],
				'search_url':'/prepo/ws/search-manifestation',
				 'extend_commands' : f_auth_manifestations_extend,
				 'new_button_label' : 'new manifestation',
				 'extend_primary_label' : key_labels['ea:manif:Title'],
			  root_options:{
			  	select_key_width:'280px',
			  	width:"400px",
			    "add_button": true,
			    "repeat_style": "ordered",
			  }
			});

/***********************************************************/
/*********** Manif Relation Accompanying *******************/
/***********************************************************/
			cmdCreate.relation({
				'cmd_name':'manif_relation_accompanying',
				'object_type':'auth-manifestation',
				'key':relation_accompanying_map,
				'label':key_labels['ea:manif:Accompanying'],
				'search_url':'/prepo/ws/search-manifestation',
				 'extend_commands' : f_auth_manifestations_extend,
				 'new_button_label' : 'new manifestation',
				 'extend_primary_label' : key_labels['ea:manif:Title'],
			  root_options:{
			  	select_key_width:'280px',
			  	width:"400px",
			    "add_button": true,
			    "repeat_style": "ordered",
			  }
			});

/***********************************************************/
/*********** Work Relation Descriptive *********************/
/***********************************************************/
//					commands.work_relation_descriptive = {
//								action:'setupField',
//								opts : jQuery.extend({},commands.contributors_all.opts,{
//										'label':key_labels['ea:work:Relation_Descriptive'],
//									 	setupOptions: function(options){
//											options.select_key_map= relation_work_descriptive_map;
//											return options;
//										},
//										select_key_width:'280px',
//										width:400,
//										repeat_style: 'ordered',
//								})
//					};

					cmdCreate.relation({
						'cmd_name':'work_relation_descriptive',
						'object_type':'auth-work',
						'key':relation_work_descriptive_map,
						'label':key_labels['ea:work:Relation_Descriptive'],
						//'extend_primary_label':'place term',
						'search_url':'/prepo/ws/search-work',
						 'extend_commands' : f_auth_work_extend,
						 'new_button_label' : 'new work',
						 'extend_primary_label' : key_labels['ea:work:Title_Preferred'],
					  root_options:{
					  	select_key_width:'280px',
					  	width:"400px",
					    "add_button": true,
					    "repeat_style": "ordered",
					  }
					});



/***********************************************************/
/*********** Work Relation Derivative  *********************/
/***********************************************************/
					cmdCreate.relation({
						'cmd_name':'work_relation_derivative',
						'key':relation_work_derivative_map,
						'label':key_labels['ea:work:Relation_Derivative'],
						'search_url':'/prepo/ws/search-work',
					  root_options:{
					  	select_key_width:'280px',
					  	width:"400px",
					    "add_button": true,
					    "repeat_style": "ordered",
					  },
					'object_type' : {
						'auth-work' : {
							'extend_primary_key' : 'dc:title:',//
							'extend_primary_label' : key_labels['ea:work:Title_Preferred'],
							'new_button_label' : 'new work',
							'extend_commands' : f_auth_work_extend,
						},
					},

					});




/***********************************************************/
/*********** Work Relation Whole Part **********************/
/***********************************************************/
					cmdCreate.relation({
						'cmd_name':'work_relation_wholepart',
						'key':relation_work_wholepart_map,
						'label':key_labels['ea:work:Relation_Wholepart'],
						'search_url':'/prepo/ws/search-work',
					  root_options:{
					  	select_key_width:'280px',
					  	width:"400px",
					    "add_button": true,
					    "repeat_style": "ordered",
					  },
					'object_type' : {
						'auth-work' : {
							'extend_primary_key' : 'dc:title:',//
							'extend_primary_label' : key_labels['ea:work:Title_Preferred'],
							'new_button_label' : 'new work',
							'extend_commands' : f_auth_work_extend,
						},
					},

					});


/***********************************************************/
/*********** Work Relation Accompanying ********************/
/***********************************************************/
					cmdCreate.relation({
						'cmd_name':'work_relation_accompanying',
						'key':relation_work_accompanying_map,
						'label':key_labels['ea:work:Relation_Accompanying'],
						'search_url':'/prepo/ws/search-work',
					  root_options:{
					  	select_key_width:'280px',
					  	width:"400px",
					    "add_button": true,
					    "repeat_style": "ordered",
					  },
					'object_type' : {
						'auth-work' : {
							'extend_primary_key' : 'dc:title:',//
							'extend_primary_label' : key_labels['ea:work:Title_Preferred'],
							'new_button_label' : 'new work',
							'extend_commands' : f_auth_work_extend,
						},
					},

					});


/***********************************************************/
/*********** Work Relation Sequential **********************/
/***********************************************************/
					cmdCreate.relation({
						'cmd_name':'work_relation_sequential',
						'key':relation_work_sequential_map,
						'label':key_labels['ea:work:Relation_Sequential'],
						'search_url':'/prepo/ws/search-work',
					  root_options:{
					  	select_key_width:'280px',
					  	width:"400px",
					    "add_button": true,
					    "repeat_style": "ordered",
					  },
					'object_type' : {
						'auth-work' : {
							'extend_primary_key' : 'dc:title:',//
							'extend_primary_label' : key_labels['ea:work:Title_Preferred'],
							'new_button_label' : 'new work',
							'extend_commands' : f_auth_work_extend,
						},
					},

					});



/********************************************************/
/*********** Relation Person See ************************/
/********************************************************/

					cmdCreate.relation({
						'cmd_name':'relation_person_see',
						'object_type':'auth-person',
						'key':relation_person_see_map,
						'label':key_labels['ea:auth:personSee'],
						'search_url':'/prepo/ws/search-person',
						 'extend_commands' : f_auth_person_extend,
						 'new_button_label' : 'new person',
						 'extend_primary_label' : key_labels['ea:auth:Person_Name'],
					  root_options:{
					  	select_key_width:'280px',
					  	width:"400px",
					    "add_button": true,
					    "repeat_style": "ordered",
					  }
					});


/********************************************************/
/*********** Relation Person See Also *******************/
/********************************************************/
					cmdCreate.relation({
						'cmd_name':'relation_person_see_also',
						'object_type':'auth-person',
						'key':relation_person_see_map_alter,
						'label':key_labels['ea:auth:personSeeAlso'],
						'search_url':'/prepo/ws/search-person',
						 'extend_commands' : f_auth_person_extend,
						 'new_button_label' : 'new person',
						 'extend_primary_label' : key_labels['ea:auth:Person_Name'],
					  root_options:{
					  	select_key_width:'280px',
					  	width:"400px",
					    "add_button": true,
					    "repeat_style": "ordered",
					  }
					});


/********************************************************/
/******** Relation Person See Also Person****************/
/********************************************************/
					cmdCreate.relation({
											'cmd_name':'relation_person_see_also_person',
											'object_type':'auth-person',
											'key':relation_person_see_also_person_map,
											'label':key_labels['ea:auth:personSeealsoPerson'],
											'search_url':'/prepo/ws/search-person',
											 'extend_commands' : f_auth_person_extend,
											 'new_button_label' : 'new person',
											 'extend_primary_label' : key_labels['ea:auth:Person_Name'],
										  root_options:{
										  	select_key_width:'280px',
										  	width:"400px",
										    "add_button": true,
										    "repeat_style": "ordered",
							}
					});


/********************************************************/
/******** Relation Person See Also Organization *********/
/********************************************************/
		cmdCreate.relation({
							'cmd_name':'relation_person_see_also_organization',
							'object_type':'auth-organization',
							'key':relation_person_see_also_organization_map,
							'label':key_labels['ea:auth:personSeealsoOrganization'],
							'search_url':'/prepo/ws/search-organization',
							 'extend_commands' : f_auth_organization_extend,
							 'new_button_label' : 'new organization',
							 'extend_primary_label' : key_labels['authOrganization_Name'],
						  root_options:{
						  	select_key_width:'280px',
						  	width:"400px",
						    "add_button": true,
						    "repeat_style": "ordered",
			}
	});

/********************************************************/
/*********** Relation Person See Also Family ************/
/********************************************************/
					cmdCreate.relation({
						'cmd_name':'relation_person_see_also_family',
						'object_type':'auth-family',
						'key':relation_person_see_also_family_map,
						'label':key_labels['ea:auth:personSeealsoFamily'],
						'search_url':'/prepo/ws/search-family',
						 'extend_commands' : f_auth_family_extend,
						 'new_button_label' : 'new family',
						 'extend_primary_label' : key_labels['authFamily'],
					  root_options:{
					  	select_key_width:'280px',
					  	width:"400px",
					    "add_button": true,
					    "repeat_style": "ordered",
		}
});

/********************************************************/
/******* Relation Organization See Also Family **********/
/********************************************************/
					cmdCreate.relation({
						'cmd_name':'relation_organization_see_also_family',
						'object_type':'auth-family',
						'key':relation_organization_see_also_family_map,
						'label':key_labels['ea:auth:OrganizationSeealsoFamily'],
						'search_url':'/prepo/ws/search-family',
						 'extend_commands' : f_auth_family_extend,
						 'new_button_label' : 'new family',
						 'extend_primary_label' : key_labels['authFamily'],
					  root_options:{
					  	select_key_width:'280px',
					  	width:"400px",
					    "add_button": true,
					    "repeat_style": "ordered",
		}
});


/********************************************************/
/******** Relation Family See Also Organization *********/
/********************************************************/
		cmdCreate.relation({
							'cmd_name':'relation_family_see_also_organization',
							'object_type':'auth-organization',
							'key':relation_family_see_also_organization_map,
							'label':key_labels['ea:auth:personSeealsoOrganization'],
							'search_url':'/prepo/ws/search-organization',
							 'extend_commands' : f_auth_organization_extend,
							 'new_button_label' : 'new organization',
							 'extend_primary_label' : key_labels['authOrganization_Name'],
						  root_options:{
						  	select_key_width:'280px',
						  	width:"400px",
						    "add_button": true,
						    "repeat_style": "ordered",
			}
	});




/********************************************************/
/*************** Relation Place Organization ************/
/********************************************************/
				cmdCreate.relation({
									'cmd_name':'relation_place_organization',
									'object_type':'auth-organization',
									'key':relation_place_organization_map,
									'label':key_labels['relation_place_organization'],
									'search_url':'/prepo/ws/search-organization',
									 'extend_commands' : f_auth_organization_extend,
									 'new_button_label' : 'new organization',
									 'extend_primary_label' : key_labels['authOrganization_Name'],
								  root_options:{
								  	select_key_width:'280px',
								  	width:"400px",
								    "add_button": true,
								    "repeat_style": "ordered",
					}
			});


/********************************************************/
/*********** Relation Person Other language *************/
/********************************************************/
					cmdCreate.relation({
						'cmd_name':'relation_person_other_language',
						'object_type':'auth-person',
						'key':relation_person_other_language_map,
						'label':key_labels['ea:auth:personOtherlanguage'],
						'search_url':'/prepo/ws/search-person',
						 'extend_commands' : f_auth_person_extend,
						 'new_button_label' : 'new person',
						 'extend_primary_label' : key_labels['ea:auth:Person_Name'],
					  root_options:{
					  	select_key_width:'280px',
					  	width:"400px",
					    "add_button": true,
					    "repeat_style": "ordered",
		}
});



/********************************************************/
/*********** Relation Family see alter *******************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_see_alter',
	'object_type':'auth-family',
	'key':relation_alter_map,
	'label':key_labels['ea:auth:Family_see'],
	'search_url':'/prepo/ws/search-family',
	 'extend_commands' : f_auth_family_extend,
	 'new_button_label' : 'new family',
	 'extend_primary_label' : key_labels['authFamily'],
  root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});


/********************************************************/
/*********** Relation Person See Also *******************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_family_see_also',
	'object_type':'auth-family',
	'key':relation_name_not_map,
	'label':key_labels['ea:auth:Family_see_also'],
	'search_url':'/prepo/ws/search-family',
	 'extend_commands' : f_auth_family_extend,
	 'new_button_label' : 'new family',
	 'extend_primary_label' : key_labels['authFamily'],
  root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});


/********************************************************/
/********** Relation Family See Also Family *************/
/********************************************************/
					 cmdCreate.relation({
							'cmd_name':'relation_family_see_also_family',
							'object_type':'auth-family',
							'key':relation_person_see_also_person_family_map,
							'label':key_labels['ea:auth:FamilySeeAlsoFamily'],
							'search_url':'/prepo/ws/search-family',
							 'extend_commands' : f_auth_family_extend,
							 'new_button_label' : 'new family',
							 'extend_primary_label' : key_labels['authFamily'],
						  root_options:{
						  	select_key_width:'280px',
						  	width:"400px",
						    "add_button": true,
						    "repeat_style": "ordered",
						}
						});


/********************************************************/
/*********** Relation Family See Also Person ************/
/********************************************************/
						 cmdCreate.relation({
								'cmd_name':'relation_family_see_also_person',
								'object_type':'auth-person',
								'key':relation_family_see_also_person_map,
								'label':key_labels['ea:auth:FamilySeealsoPerson'],
								'search_url':'/prepo/ws/search-person',
								 'extend_commands' : f_auth_person_extend,
								 'new_button_label' : 'new person',
								 'extend_primary_label' : key_labels['ea:auth:Person_Name'],
							  root_options:{
							  	select_key_width:'280px',
							  	width:"400px",
							    "add_button": true,
							    "repeat_style": "ordered",
							}
							});


/****************************************************/
/******* Relation Family Other Language **************/
/****************************************************/
cmdCreate.relation({
	'cmd_name':'relation_family_other_language',
	'object_type':'auth-family',
	'key':relation_person_other_language_map,
	'label':key_labels['ea:auth:Family_Other_Language'],
	'search_url':'/prepo/ws/search-family',
	 'extend_commands' : f_auth_person_extend,
	 'new_button_label' : 'new family',
	 'extend_primary_label' : key_labels['authFamily'],
  root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});




/********************************************************/
/*********** Relation organization see  *****************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_organization_see',
	'object_type':'auth-organization',
	'key':relation_name_not_map,
	'label':key_labels['ea:auth:Family_see_also'],
	'search_url':'/prepo/ws/search-organization',
	 'extend_commands' : f_auth_organization_extend,
	 'new_button_label' : 'new organization',
	 'extend_primary_label' : key_labels['authOrganization_Name'],
  root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});



/********************************************************/
/*********** Relation Family See Also Person ************/
/********************************************************/
cmdCreate.relation({
		'cmd_name':'relation_organization_see_also_person',
		'object_type':'auth-person',
		'key':relation_organization_see_also_person_map,
		'label':key_labels['ea:auth:FamilySeealsoPerson'],
		'search_url':'/prepo/ws/search-person',
		'extend_commands' : f_auth_person_extend,
		'new_button_label' : 'new person',
		'extend_primary_label' : key_labels['ea:auth:Person_Name'],
		root_options:{
						select_key_width:'280px',
						width:"400px",
					  "add_button": true,
					 "repeat_style": "ordered",
								}
});


/********************************************************/
/************ Relation Geographical Location ************/
/********************************************************/
cmdCreate.relation({
						'cmd_name':'relation_geographical_location',
						'object_type':'auth-place',
						'key':relation_organization_place_map,
						'label':key_labels['relation_geographical_location'],
						'search_url':'/prepo/ws/search-place',
						'extend_commands' : f_auth_place_extend,
						'new_button_label' : 'new place',
						'extend_primary_label' : key_labels['ea:auth:Place_Term'],
						root_options:{
								select_key_width:'280px',
								width:"400px",
								"add_button": true,
								"repeat_style": "ordered",
						}
			});


/********************************************************/
/********* Relation organization see alter **************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_organization_see_also',
	'object_type':'auth-organization',
	'key':relation_alter_map,
	'label':key_labels['ea:auth:Organization_see_also'],
	'search_url':'/prepo/ws/search-organization',
	 'extend_commands' : f_auth_organization_extend,
	 'new_button_label' : 'new organization',
	 'extend_primary_label' : key_labels['authOrganization_Name'],
  root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});

/********************************************************/
/***** Relation Organization See Also Organization ******/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_organization_see_also_organization',
	'object_type':'auth-organization',
	'key':relation_organization_see_also_organization_map,
	'label':key_labels['ea:auth:OrganizationSeeAlsoOrganization'],
	'search_url':'/prepo/ws/search-organization',
	 'extend_commands' : f_auth_organization_extend,
	 'new_button_label' : 'new organization',
	 'extend_primary_label' : key_labels['authOrganization_Name'],
	root_options:{
		select_key_width:'280px',
		width:"400px",
		"add_button": true,
		"repeat_style": "ordered",
		}
});

/****************************************************/
/***** Relation Organization Other Language *********/
/****************************************************/
cmdCreate.relation({
	'cmd_name':'relation_organization_other_language',
	'object_type':'auth-organization',
	'key':relation_person_other_language_map,
	'label':key_labels['ea:auth:Organization_Other_Language'],
	'search_url':'/prepo/ws/search-organization',
	 'extend_commands' : f_auth_organization_extend,
	 'new_button_label' : 'new organization',
	 'extend_primary_label' : key_labels['authOrganization_Name'],
  root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});


/*----------------------------Concept-----------------------------*/
/********************************************************/
/********* Relation Concept See Alter *******************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_concept_see_alter',
	'object_type':'auth-concept',
	'key':relation_concept_alter_map_not_term,
	'label':key_labels['ea:auth:conceptSee'],
	'search_url':'/prepo/ws/search-subject-concept',
	 'extend_commands' : f_auth_concept_extend,
	 'new_button_label' : 'new concept',
	 'extend_primary_label' : key_labels['ea:auth:Concept_Term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});

/********************************************************/
/************ Relation Concept See Also *****************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_concept_see_also',
	'object_type':'auth-concept',
	'key':relation_concept_alter_map,
	'label':key_labels['ea:auth:Concept_See_Also'],
	'search_url':'/prepo/ws/search-subject-concept',
	 'extend_commands' : f_auth_concept_extend,
	 'new_button_label' : 'new concept',
	 'extend_primary_label' : key_labels['ea:auth:Concept_Term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});


/********************************************************/
/******** Relation Other Entity See Also ****************/
/********************************************************/

cmdCreate.relation({
	'cmd_name' : 'relation_other_entity_see_also',
	'key':relation_term_other_map,
	'label':key_labels['ea:auth:Relation_Concept_Concept'],
	'search_url' : '/prepo/ws/search-subject-limited',
	root_options : {
		"add_button" : true,
		"repeat_style" : "ordered",
	},

	'object_type' : {
		'auth-concept' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : key_labels['ea:auth:Concept_Term'],
			'new_button_label' : 'new concept',
			'extend_commands' : f_auth_concept_extend,
		},
		'auth-place' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : key_labels['ea:auth:Place_Term'],
			'new_button_label' : 'new place',
			'extend_commands' : f_auth_place_extend,
		},
		'auth-event' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : key_labels['ea:auth:Event_Term'],
			'new_button_label' : 'new event',
			'extend_commands' : f_auth_event_extend,
		},
		'auth-object' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : key_labels['ea:auth:Object_Term'],
			'new_button_label' : 'new object',
			'extend_commands' : f_auth_object_extend,
		},
		'auth-genre' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : key_labels['ea:auth:Genre_Term'],
			'new_button_label' : 'new genre',
			'extend_commands' : f_auth_genre_extend,
		}
	},

});



/********************************************************/
/******** Relation Concept other language   *************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_concept_other_language',
	'object_type':'auth-concept',
	'key':relation_person_other_language_map,
	'label':key_labels['ea:auth:Concept_Other_Language'],
	'search_url':'/prepo/ws/search-subject-concept',
	 'extend_commands' : f_auth_concept_extend,
	 'new_button_label' : 'new concept',
	 'extend_primary_label' : key_labels['ea:auth:Concept_Term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});


/*----------------------------Place-----------------------------*/
/********************************************************/
/********* Relation Place See Alter *******************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_place_see_alter',
	'object_type':'auth-place',
	'key': relation_place_alter_map_not_term,
	'label':key_labels['ea:auth:Place_not_use'],
	'search_url':'/prepo/ws/search-place',
	 'extend_commands' : f_auth_place_extend,
	 'new_button_label' : 'new place',
	 'extend_primary_label' : key_labels['ea:auth:Place_Term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});

/********************************************************/
/************ Relation Place See Also *****************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_place_see_also',
	'object_type':'auth-place',
	'key':relation_place_alter_map,
	'label':key_labels['ea:auth:Place_Αlternatives'],
	'search_url':'/prepo/ws/search-place',
	 'extend_commands' : f_auth_place_extend,
	 'new_button_label' : 'new place',
	 'extend_primary_label' : key_labels['ea:auth:Place_Term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});


/********************************************************/
/************ Relation Place Other **********************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_place_other',
	'object_type':'auth-place',
	'key':relation_place_other_map,
	'label':key_labels['ea:auth:Place_Other'],
	'search_url':'/prepo/ws/search-place',
	 'extend_commands' : f_auth_place_extend,
	 'new_button_label' : 'new place',
	 'extend_primary_label' : key_labels['ea:auth:Place_Term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});




/********************************************************/
/******** Relation Place other language   *************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_place_other_language',
	'object_type':'auth-place',
	'key':relation_person_other_language_map,
	'label':key_labels['ea:auth:Place_Other_Language'],
	'search_url':'/prepo/ws/search-place',
	 'extend_commands' : f_auth_place_extend,
	 'new_button_label' : 'new place',
	 'extend_primary_label' : key_labels['ea:auth:Place_Term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});

/*----------------------------Event-----------------------------*/
/********************************************************/
/********* Relation Event See Alter *******************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_event_see_alter',
	'object_type':'auth-event',
	'key':relation_concept_alter_map_not_term,
	'label':key_labels['ea:auth:Event_not_use'],
	'search_url':'/prepo/ws/search-subject-event',
	 'extend_commands' : f_auth_event_extend,
	 'new_button_label' : 'new event',
	 'extend_primary_label' : key_labels['ea:auth:Event_Term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});

/********************************************************/
/************ Relation Event See Also *****************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_event_see_also',
	'object_type':'auth-event',
	'key':relation_concept_alter_map,
	'label':key_labels['ea:auth:Event_See_Also'],
	'search_url':'/prepo/ws/search-subject-event',
	 'extend_commands' : f_auth_event_extend,
	 'new_button_label' : 'new event',
	 'extend_primary_label' : key_labels['ea:auth:Event_Term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});


/********************************************************/
/******** Relation Event other language   *************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_event_other_language',
	'object_type':'auth-event',
	'key':relation_person_other_language_map,
	'label':key_labels['ea:auth:Event_Other_Language'],
	'search_url':'/prepo/ws/search-subject-event',
	 'extend_commands' : f_auth_event_extend,
	 'new_button_label' : 'new event',
	 'extend_primary_label' : key_labels['ea:auth:Event_Term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});

/*----------------------------Genre-----------------------------*/
/********************************************************/
/********* Relation Genre See Alter *******************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_genre_see_alter',
	'object_type':'auth-genre',
	'key':relation_concept_alter_map_not_term,
	'label':key_labels['ea:auth:Place_not_use'],
	'search_url':'/prepo/ws/search-subject-form',
	 'extend_commands' : f_auth_genre_extend,
	 'new_button_label' : 'new genre',
	 'extend_primary_label' : key_labels['ea:auth:Genre_Term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});

/********************************************************/
/************ Relation Genre See Also *****************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_genre_see_also',
	'object_type':'auth-genre',
	'key':relation_concept_alter_map,
	'label':key_labels['ea:auth:Genre_See_Also'],
	'search_url':'/prepo/ws/search-subject-form',
	 'extend_commands' : f_auth_genre_extend,
	 'new_button_label' : 'new genre',
	 'extend_primary_label' : key_labels['ea:auth:Genre_Term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});


/********************************************************/
/******** Relation Genre other language   *************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_genre_other_language',
	'object_type':'auth-genre',
	'key':relation_person_other_language_map,
	'label':key_labels['ea:auth:Genre_Other_Language'],
	'search_url':'/prepo/ws/search-subject-form',
	 'extend_commands' : f_auth_genre_extend,
	 'new_button_label' : 'new genre',
	 'extend_primary_label' : key_labels['ea:auth:Genre_Term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});

/*----------------------------Object-----------------------------*/
/********************************************************/
/********* Relation Object See Alter *******************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_object_see_alter',
	'object_type':'auth-object',
	'key':relation_concept_alter_map_not_term,
	'label':key_labels['ea:auth:Object_not_use'],
	'search_url':'/prepo/ws/search-subject-object',
	 'extend_commands' : f_auth_object_extend,
	 'new_button_label' : 'new object',
	 'extend_primary_label' : key_labels['ea:auth:Object_Term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});

/********************************************************/
/************ Relation Object See Also *****************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_object_see_also',
	'object_type':'auth-object',
	'key':relation_concept_alter_map,
	'label':key_labels['ea:auth:Object_See_Also'],
	'search_url':'/prepo/ws/search-subject-object',
	 'extend_commands' : f_auth_object_extend,
	 'new_button_label' : 'new object',
	 'extend_primary_label' : key_labels['ea:auth:Object_Term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});


/********************************************************/
/******** Relation Object other language   *************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_object_other_language',
	'object_type':'auth-object',
	'key':relation_person_other_language_map,
	'label':key_labels['ea:auth:Object_Other_Language'],
	'search_url':'/prepo/ws/search-subject-object',
	 'extend_commands' : f_auth_object_extend,
	 'new_button_label' : 'new object',
	 'extend_primary_label' : key_labels['ea:auth:Object_Term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});

/*-------------------------General-Subject ------------------------*/
/********************************************************/
/********* Relation General See Alter *******************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_general_see_alter',
	'object_type':'auth-general',
	'key':relation_concept_alter_map_not_term,
	'label':key_labels['ea:auth:General_not_use'],
	'search_url':'/prepo/ws/search-subject-general',
	 'extend_commands' : general_relation_extend_commands,
	 'new_button_label' : 'new subject',
	 'extend_primary_label' : key_labels['ea:auth:General_Term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});

/********************************************************/
/************ Relation General See Also *****************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_general_see_also',
	'object_type':'auth-general',
	'key':relation_concept_alter_map,
	'label':key_labels['ea:auth:General_See_Also'],
	'search_url':'/prepo/ws/search-subject-general',
	 'extend_commands' : general_relation_extend_commands_see_also,
	 'new_button_label' : 'new subject',
	 'extend_primary_label' : key_labels['ea:auth:General_Term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});

/********************************************************/
/******** Relation General other language   *************/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_general_other_language',
	'object_type':'auth-general',
	'key':relation_person_other_language_map,
	'label':key_labels['ea:auth:General_Other_Language'],
	'search_url':'/prepo/ws/search-subject-general',
	 'extend_commands' : general_relation_extend_commands_see_also,
	 'new_button_label' : 'new subject',
	 'extend_primary_label' : key_labels['ea:auth:General_Term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});
/*-----------------------------------------------------------*/





/***********************************************************/
/*********** Expression Relation Descriptive ***************/
/***********************************************************/
cmdCreate.relation({
	'cmd_name' : 'expres_relation_descriptive',

	'key':relation_expres_descriptive_map,
	'label':key_labels['ea:work:Relation_Descriptive'],
	'search_url' : '/prepo/ws/search-work-all',
	root_options : {
		"add_button" : true,
		"repeat_style" : "ordered",
	},

	'object_type' : {
		'auth-work' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : 'work',
			'new_button_label' : 'new work',
			'extend_commands' : f_auth_work_extend,
		},
		'auth-expression' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : 'expresion',
			'new_button_label' : 'new expression',
			'extend_commands' : f_auth_expression_extend,
		}
	},

});

/***********************************************************/
/*********** xpression Relation Derivative  ****************/
/***********************************************************/
cmdCreate.relation({
	'cmd_name' : 'expres_relation_derivative',

	'key':relation_expres_derivative_map,
	'label':key_labels['ea:work:Relation_Derivative'],
	'search_url' : '/prepo/ws/search-work-all',
	root_options : {
		"add_button" : true,
		"repeat_style" : "ordered",
	},

	'object_type' : {
		'auth-work' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : 'work',
			'new_button_label' : 'new work',
			'extend_commands' : f_auth_work_extend,
		},
		'auth-expression' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : 'expresion',
			'new_button_label' : 'new expression',
			'extend_commands' : f_auth_expression_extend,
		}
	},

});
/***********************************************************/
/*********** Expression Relation Whole Part ****************/
/***********************************************************/
cmdCreate.relation({
	'cmd_name' : 'expres_relation_wholepart',

	'key':relation_expres_wholepart_map,
	'label':key_labels['ea:work:Relation_Wholepart'],
	'search_url' : '/prepo/ws/search-work-all',
	root_options : {
		"add_button" : true,
		"repeat_style" : "ordered",
	},

	'object_type' : {
		'auth-work' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : 'work',
			'new_button_label' : 'new work',
			'extend_commands' : f_auth_work_extend,
		},
		'auth-expression' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : 'expresion',
			'new_button_label' : 'new expression',
			'extend_commands' : f_auth_expression_extend,
		}
	},

});


/***********************************************************/
/*********** Expression Relation Accompanying **************/
/***********************************************************/

cmdCreate.relation({
	'cmd_name' : 'expres_relation_accompanying',
	'key':relation_expres_accompanying_map,
	'label':key_labels['ea:work:Relation_Accompanying'],
	'search_url' : '/prepo/ws/search-work-all',
	root_options : {
		"add_button" : true,
		"repeat_style" : "ordered",
	},

	'object_type' : {
		'auth-work' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : 'work',
			'new_button_label' : 'new work',
			'extend_commands' : f_auth_work_extend,
		},
		'auth-expression' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : 'expresion',
			'new_button_label' : 'new expression',
			'extend_commands' : f_auth_expression_extend,
		}
	},

});

/***********************************************************/
/*********** Work Relation Sequential **********************/
/***********************************************************/


cmdCreate.relation({
	'cmd_name' : 'expres_relation_sequential',

	'key':relation_expres_sequential_map,
	'label':key_labels['ea:work:Relation_Sequential'],
	'search_url' : '/prepo/ws/search-work-all',
	root_options : {
		"add_button" : true,
		"repeat_style" : "ordered",
	},

	'object_type' : {
		'auth-work' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : 'work',
			'new_button_label' : 'new work',
			'extend_commands' : f_auth_work_extend,
		},
		'auth-expression' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : 'expresion',
			'new_button_label' : 'new expression',
			'extend_commands' : f_auth_expression_extend,//expression_commands,
		}
	},

});


/********************************************************/
/******** Relation Subject Chain Related ****************/
/********************************************************/

cmdCreate.relation({
	'cmd_name' : 'relation_subject_chain_related',
	'key':relation_subject_chain_related_other_map,
	'label':key_labels['relation_subject_chain_related'],
	'search_url' : '/prepo/ws/search-subject-chain',
	root_options : {
		"add_button" : true,
		"repeat_style" : "ordered",
	},

	'object_type' : {
		'subject-chain' : {
			'extend_primary_key' : 'dc:title:',
			'extend_primary_label' : key_labels['subject_chain_term'],
			'new_button_label' : 'new subject chain',
			'extend_commands' : subject_chain_related_extend_commands,
		},
	},

});

/**************************************************************/
/********* Relation Subject Chain See Alter *******************/
/**************************************************************/
cmdCreate.relation({
	'cmd_name':'relation_subject_chain_see_alter',
	'object_type':'subject-chain',
	'key':relation_concept_alter_map_not_term,
	'label':key_labels['ea:auth:General_not_use'],
	'search_url':'/prepo/ws/search-subject-chain',
	 'extend_commands' : subject_chain_related_extend_commands,
	 'new_button_label' : 'new subject chain',
	 'extend_primary_label' : key_labels['subject_chain_term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});

/**************************************************************/
/************ Relation Subject Chain See Also *****************/
/**************************************************************/
cmdCreate.relation({
	'cmd_name':'relation_subject_chain_see_also',
	'object_type':'subject-chain',
	'key':relation_concept_alter_map,
	'label':key_labels['relation_subject_chain_see_also'],
	'search_url':'/prepo/ws/search-subject-chain',
	 'extend_commands' : subject_chain_related_extend_commands,
	 'new_button_label' : 'new subject chain',
	 'extend_primary_label' : key_labels['subject_chain_term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});

/********************************************************/
/****** Relation Subject Chain Other language   *********/
/********************************************************/
cmdCreate.relation({
	'cmd_name':'relation_subject_chain_other_language',
	'object_type':'subject-chain',
	'key':relation_person_other_language_map,
	'label':key_labels['relation_subject_chain_other_languages'],
	'search_url':'/prepo/ws/search-subject-chain',
	'new_button_label' : 'new subject chain',
	'extend_commands' : subject_chain_related_extend_commands,
	'extend_primary_label' : key_labels['subject_chain_term'],
	 root_options:{
  	select_key_width:'280px',
  	width:"400px",
    "add_button": true,
    "repeat_style": "ordered",
}
});










/***********************************************************/
/*********** Item Relation Equivalent *********************/
/***********************************************************/
			cmdCreate.relation({
				'cmd_name':'item_relation_equivalent',
//				'object_type':'physical-item', //digital-item
				'key':relation_item_equivalent_map,
				'label':key_labels['ea:item:Relation_Equivalent'],
				'search_url':'/prepo/ws/search-item',
				'new_button_flag':false,
//				 'extend_commands' : f_physical_item_extend,
//				 'new_button_label' : 'new item',
//				 'extend_primary_label' : key_labels['ea:manif:Title'],
			  root_options:{
			  	select_key_width:'280px',
			  	width:"400px",
			    "add_button": true,
			    "repeat_style": "ordered",
			  }
			});

/***********************************************************/
/*********** Item Relation Descriptive ********************/
/***********************************************************/
			cmdCreate.relation({
				'cmd_name':'item_relation_descriptive',
//				'object_type':'physical-item',
				'key':relation_item_descriptive_map,
				'label':key_labels['ea:item:Relation_Descriptive'],
				'search_url':'/prepo/ws/search-item',
				'new_button_flag':false,
//				 'extend_commands' : f_physical_item_extend,
//				 'new_button_label' : 'new item',
//				 'extend_primary_label' : key_labels['ea:manif:Title'],
			  root_options:{
			  	select_key_width:'280px',
			  	width:"400px",
			    "add_button": true,
			    "repeat_style": "ordered",
			  }
			});

/***********************************************************/
/*********** Item Relation Whole Part *********************/
/***********************************************************/
			cmdCreate.relation({
				'cmd_name':'item_relation_wholepart',
//				'object_type':'physical-item',
				'key':relation_item_wholepart_map,
				'label':key_labels['ea:item:Relation_Wholepart'],
				'search_url':'/prepo/ws/search-item',
				'new_button_flag':false,
//				 'extend_commands' : f_auth_manifestations_extend,
//				 'new_button_label' : 'new item',
//				 'extend_primary_label' : key_labels['ea:manif:Title'],
			  root_options:{
			  	select_key_width:'280px',
			  	width:"400px",
			    "add_button": true,
			    "repeat_style": "ordered",
			  }
			});

/***********************************************************/
/*********** Item Relation Accompanying *******************/
/***********************************************************/
			cmdCreate.relation({
				'cmd_name':'item_relation_accompanying',
//				'object_type':'physical-item',
				'key':relation_item_accompanying_map,
				'label':key_labels['ea:item:Accompanying'],
				'search_url':'/prepo/ws/search-item',
				'new_button_flag':false,
//				 'extend_commands' : f_auth_manifestations_extend,
//				 'new_button_label' : 'new item',
//				 'extend_primary_label' : key_labels['ea:manif:Title'],
			  root_options:{
			  	select_key_width:'280px',
			  	width:"400px",
			    "add_button": true,
			    "repeat_style": "ordered",
			  }
			});



















