var relation_elements = {









///////////////////////////////////////////////////////////////////////////////////////////////////////////////
//SUBJECTS
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

	'ea:subj:work': {
    parent_element: 'ea:inferred-chain-link:',
    skip_item_load_remove : true,
  },
  'ea:subj:concept': {
    parent_element: 'ea:inferred-chain-link:',
    skip_item_load_remove : true,
  },
  'ea:subj:event': {
    parent_element: 'ea:inferred-chain-link:',
    skip_item_load_remove : true,
  },
  'ea:subj:form': {
    parent_element: 'ea:inferred-chain-link:',
    skip_item_load_remove : true,
  },
  'ea:subj:general': {
    parent_element: 'ea:inferred-chain-link:',
    skip_item_load_remove : true,
  },
  'ea:subj:object': {
    parent_element: 'ea:inferred-chain-link:',
    skip_item_load_remove : true,
  },
  'ea:subj:object-instance': {
    parent_element: 'ea:inferred-chain-link:',
    skip_item_load_remove : true,
  },
  'ea:subj:person': {
    parent_element: 'ea:inferred-chain-link:',
    skip_item_load_remove : true,
  },
  'ea:subj:place': {
    parent_element: 'ea:inferred-chain-link:',
    skip_item_load_remove : true,
  },

  'ea:subj:work:primary': {
    parent_element: 'ea:inferred-chain-link:',
    skip_item_load_remove : true,
  },
  'ea:subj:concept:primary': {
    parent_element: 'ea:inferred-chain-link:',
    skip_item_load_remove : true,
  },
  'ea:subj:event:primary': {
    parent_element: 'ea:inferred-chain-link:',
    skip_item_load_remove : true,
  },
  'ea:subj:form:primary': {
    parent_element: 'ea:inferred-chain-link:',
    skip_item_load_remove : true,
  },
  'ea:subj:general:primary': {
    parent_element: 'ea:inferred-chain-link:',
    skip_item_load_remove : true,
  },
  'ea:subj:object:primary': {
    parent_element: 'ea:inferred-chain-link:',
    skip_item_load_remove : true,
  },
  'ea:subj:object-instance:primary': {
    parent_element: 'ea:inferred-chain-link:',
    skip_item_load_remove : true,
  },
  'ea:subj:person:primary': {
    parent_element: 'ea:inferred-chain-link:',
    skip_item_load_remove : true,
  },
  'ea:subj:place:primary': {
    parent_element: 'ea:inferred-chain-link:',
    skip_item_load_remove : true,
  },
  'ea:inferred-chain-link:' :{
  	skip_item_load_remove : true,
  },

//	DIGITAL ITEMS
//  'ea:manif:digital-item' : {
//  	skip_item_load_remove : true,
//  },
//  'ea:work:' : {
//  	skip_item_load_remove : true,
//  },
//  'ea:artifact-of:' : {
//  	skip_item_load_remove : true,
//  },
//  'ea:artifact-of:primary' : {
//  	skip_item_load_remove : true,
//  },
//  'ea:item:type' : {
//  	skip_item_load_remove : true,
//  },



  //WORK EXPRESION
	'ea:work:' :{
		reverse_relation: 'ea:workOf:', //'reverse:ea:work:',
	},
	'ea:workOf:' : {
		reverse_relation: 'ea:work:',
	},
	'ea:manifestation:tmp': {
		//'step2_rename':'ea:workOf:',
	},

	'ea:expressionOf:' : {
		reverse_relation: 'ea:expression:',
	},
	'ea:expression:' : {
		reverse_relation: 'ea:expressionOf:',
	},
	'ea:expression:tmp' : {
		//'step2_rename':'ea:expression:',
	},



///////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  'ea:relation:PersonOtherCousins': {
  	directed: false,
  },

  'ea:relation:PersonOtherSibling' : {
  	directed: false,
  	transitive: true,
  },

  'ea:relation:PersonOtherMarriage' :{
  	directed: false,
  },

  'ea:relation:PersonOtherOther' :{
  	directed: false,
  },

//	'ea:relation:PersonAlterWork' :{
//  	directed: false,
//  },

//	'ea:relation:PersonAlterOfficial' :{
//  	directed: false,
//  },

//	'ea:relation:PersonAlterPseudonymShared'  :{
//  	directed: false,
//  },

//	'ea:relation:PersonAlterOther' :{
//  	directed: false,
//  },

//	'ea:relation:PersonAlterWork_alter' :{
//  	directed: false,
//  },

//	'ea:relation:PersonAlterOfficial_alter'  :{
//  	directed: false,
//  },

//	'ea:relation:PersonAlterPseudonymShared_alter' :{
//  	directed: false,
//  },

//	'ea:relation:PersonAlterOther_alter'  :{
//  	directed: false,
//  },

  'ea:relation:Language'  :{
  	directed: false,
  },

	'ea:relation:OrganizationAlterAcronym_name_not':{
  	directed: false,
  },

	'ea:relation:OrganizationAlterOther_name_not' :{
  	directed: false,
  },

	'ea:relation:OrganizationAlterOther' :{
  	directed: false,
  },

	'ea:relation:OrganizationOtherOther' :{
  	directed: false,
  },

	'ea:relation:OrganizationFamilyMeberHas':{
		directed: false,
  },

	'ea:relation:OrganizationFamilyFoundedBy':{
		directed: false,
  },

  'ea:relation:OrganizationFamilyOwnedBy':{
  	directed: false,
  },

  'ea:relation:TermAlterSee_Alternative':{
  	directed: false,
  },

  'ea:relation:TermAlterSee_Variant':{
  	directed: false,
	},

	'ea:relation:TermAlterSee_Other':{
		directed: false,
	},

	'ea:relation:TermAlterSee_Alternative_not_term' :{
		directed: false,
	},

	'ea:relation:TermAlterSee_Variant_not_term' :{
		directed: false,
	},

	'ea:relation:TermAlterSee_Other_not_term':{
		directed: false,
	},

	'ea:relation:TermOtherAcronym' :{
		directed: false,
	},

	'ea:relation:TermOtherOther':{
		directed: false,
	},

	'ea:relation:TermOtherEquivalent':{
		directed: false,
	},

	'ea:relation:equivalentItem':{
	directed: false,
	},

	'ea:relation:accompaniedByItem':{
	directed: false,
	},

	'ea:relation:facsimileOfItem':{
	directed: false,
	},

	'ea:relation:Proximity':{
	directed: false,
	},

	'ea:relation:TermAlterSee_Alternative_not_term':{
	directed: false,
	},

	'ea:relation:TermAlterSee_Other_not_term':{
	directed: false,
	},

	'ea:relation:TermAlterSee_Alternative':{
	directed: false,
	},

	'ea:relation:TermAlterSee_Other':{
	directed: false,
	},

	'ea:relation:OrganizationOtherCompetitor':{
		directed: false,
	},

	'ea:relation:OrganizationOtherAllies':{
		directed: false,
	},


	//***Reverse***//

	'ea:relation:PersonOtherParent': {
  	reverse_relation: 'ea:relation:PersonOtherChild',
  },

  'ea:relation:PersonOtherChild': {
  	reverse_relation: 'ea:relation:PersonOtherParent',
  },

  'ea:relation:PersonOtherNephews': {
	reverse_relation: 'ea:relation:PersonOtherUncles',
  },

 'ea:relation:PersonOtherUncles': {
	reverse_relation: 'ea:relation:PersonOtherNephews',
  },

  'ea:relation:PersonOtherProgenitor': {
  reverse_relation: 'ea:relation:PersonOtherDescendant',
  },

  'ea:relation:PersonOtherDescendant': {
  reverse_relation: 'ea:relation:PersonOtherProgenitor',
  },

	'ea:relation:PersonOrganizationEmployee': {
		reverse_relation: 'ea:relation:OrganizationPersonEmployee',
  },

	'ea:relation:OrganizationPersonEmployee': {
		reverse_relation: 'ea:relation:PersonOrganizationEmployee',
  },

	'ea:relation:PersonOrganizationHead': {
	reverse_relation: 'ea:relation:OrganizationPersonHead',
  },

	'ea:relation:OrganizationPersonHead': {
	reverse_relation: 'ea:relation:PersonOrganizationHead',
	},

	'ea:relation:PersonOrganizationOwner': {
	reverse_relation: 'ea:relation:OrganizationPersonOwnedBy',
  },

	'ea:relation:OrganizationPersonOwnedBy': {
	reverse_relation: 'ea:relation:PersonOrganizationOwner',
	},

	'ea:relation:PersonOrganizationFounderHas': {
	reverse_relation: 'ea:relation:OrganizationPersonFoundedBy',
  },

  'ea:relation:OrganizationPersonFoundedBy': {
  reverse_relation: 'ea:relation:PersonOrganizationFounderHas',
  },

	'ea:relation:PersonOrganizationMemberIs': {
	reverse_relation: 'ea:relation:OrganizationPersonMeberHas',
  },

  'ea:relation:OrganizationPersonMeberHas': {
  reverse_relation: 'ea:relation:PersonOrganizationMemberIs',
  },

	'ea:relation:PersonOrganizationStrain': {
	reverse_relation: 'ea:relation:OrganizationPersonStrain',
  },

	'ea:relation:OrganizationPersonStrain': {
	reverse_relation: 'ea:relation:PersonOrganizationStrain',
	},

	'ea:relation:PersonFamilyMember': {
	reverse_relation: 'ea:relation:FamilyPersonMeberHas'
	},

	'ea:relation:FamilyPersonMeberHas': {
	reverse_relation: 'ea:relation:PersonFamilyMember'
	},

	'ea:relation:PersonFamilyFounder': {
		reverse_relation: 'ea:relation:FamilyPersonFoundedBy'
	},

	'ea:relation:FamilyPersonFoundedBy': {
		reverse_relation: 'ea:relation:PersonFamilyFounder'
	},

	'ea:relation:OrganizationAlterEarlier_name_not' :{
		reverse_relation: 'ea:relation:OrganizationAlterLater_name_not'
  },

	'ea:relation:OrganizationAlterLater_name_not':{
		reverse_relation: 'ea:relation:OrganizationAlterEarlier_name_not'
  },

	'ea:relation:OrganizationAlterEarlier' :{
		reverse_relation: 'ea:relation:OrganizationAlterLater'
  },

	'ea:relation:OrganizationAlterLater':{
		reverse_relation: 'ea:relation:OrganizationAlterEarlier'
  },

	'ea:relation:OrganizationOtherSubordinate':{
		reverse_relation: 'ea:relation:OrganizationOtherLarger'
  },

	'ea:relation:OrganizationOtherLarger':{
		reverse_relation: 'ea:relation:OrganizationOtherSubordinate'
  },

	'ea:relation:TermOtherEarlier':{
		reverse_relation: 'ea:relation:TermOtherLater'
  },

	'ea:relation:TermOtherLater':{
		reverse_relation: 'ea:relation:TermOtherEarlier'
  },

	'ea:relation:TermOtherBroader':{
		reverse_relation: 'ea:relation:TermOtherNarrower'
  },

	'ea:relation:TermOtherNarrower':{
		reverse_relation: 'ea:relation:TermOtherBroader'
  },

	'ea:relation:descriptionOfWork':{
		reverse_relation: 'ea:relation:describedInWork'
  },

	'ea:relation:describedInWork' :{
		reverse_relation: 'ea:relation:descriptionOfWork'
  },

	'ea:relation:analysisOfWork':{
		reverse_relation: 'ea:relation:analysedInWork'
  },

	'ea:relation:analysedInWork':{
		reverse_relation: 'ea:relation:analysisOfWork'
  },

	'ea:relation:commentaryOnWork' :{
		reverse_relation: 'ea:relation:commentaryInWork'
  },

	'ea:relation:commentaryInWork' :{
		reverse_relation: 'ea:relation:commentaryOnWork'
  },

	'ea:relation:critiqueOfWork' :{
		reverse_relation: 'ea:relation:critiquedInWork'
  },

	'ea:relation:critiquedInWork' :{
		reverse_relation: 'ea:relation:critiqueOfWork'
  },

	'ea:relation:evaluationOfWork' :{
		reverse_relation: 'ea:relation:evaluatedInWork'
  },

	'ea:relation:evaluatedInWork' :{
		reverse_relation: 'ea:relation:evaluationOfWork'
  },

	'ea:relation:reviewOfWork' :{
		reverse_relation: 'ea:relation:reviewedInWork'
  },

	'ea:relation:reviewedInWork' :{
		reverse_relation: 'ea:relation:reviewOfWork'
  },

  'ea:relation:descriptionOfItem':{
		reverse_relation: 'ea:relation:analysisOfItem'
  },
	'ea:relation:analysisOfItem':{
		reverse_relation: 'ea:relation:descriptionOfItem'
  },

	'ea:relation:containedInItem':{
	reverse_relation:'ea:relation:containerOfItem'
	},

	'ea:relation:containerOfItem':{
		reverse_relation:'ea:relation:containedInItem'
	},

	'ea:relation:Encloses':{
		reverse_relation:'ea:relation:Enclosed',
	},

	'ea:relation:Enclosed':{
		reverse_relation:'ea:relation:Encloses',
		transitive: true,
		transitive_relation:'ea:relation:Enclosed:inferred',
	},

	'ea:relation:EnclosesPartially':{
		reverse_relation:'ea:relation:EnclosedPartially'
	},

	'ea:relation:EnclosedPartially':{
		reverse_relation:'ea:relation:EnclosesPartially'
	},

	'ea:relation:ProximityEast':{
		reverse_relation:'ea:relation:ProximityWest'
	},

	'ea:relation:ProximityWest':{
		reverse_relation:'ea:relation:ProximityEast'
	},

	'ea:relation:ProximityNorth':{
		reverse_relation:'ea:relation:ProximitySouth'
	},

	'ea:relation:ProximitySouth':{
		reverse_relation:'ea:relation:ProximityNorth'
	},

	'ea:relation:ProximityNorthEast':{
	reverse_relation:'ea:relation:ProximitySouthWest'
	},

	'ea:relation:ProximitySouthWest':{
		reverse_relation:'ea:relation:ProximityNorthEast'
	},

	'ea:relation:ProximityNorthWest':{
		reverse_relation:'ea:relation:ProximitySouthEast'
	},

	'ea:relation:ProximitySouthEast':{
	reverse_relation:'ea:relation:ProximityNorthWest'
	},

	'ea:relation:PersonOrganizationUnknown':{
		reverse_relation:'ea:relation:OrganizationPersonUnknown'
	},

	'ea:relation:OrganizationPersonUnknown':{
		reverse_relation:'ea:relation:PersonOrganizationUnknown'
	},

	'ea:relation:PersonOrganizationAcademic':{
		reverse_relation:'ea:relation:OrganizationPersonAcademic'
	},

	'ea:relation:OrganizationPersonAcademic':{
		reverse_relation:'ea:relation:PersonOrganizationAcademic'
	},

	'ea:relation:PersonOrganizationCommissioned':{
		reverse_relation:'ea:relation:OrganizationPersonCommissioned'
	},

	'ea:relation:OrganizationPersonCommissioned':{
		reverse_relation:'ea:relation:PersonOrganizationCommissioned'
	},


	'ea:relation:PersonOrganizationVicePresident':{
	reverse_relation:'ea:relation:OrganizationPersonVicePresident'
	},

	'ea:relation:OrganizationPersonVicePresident':{
		reverse_relation:'ea:relation:PersonOrganizationVicePresident'
	},

	'ea:relation:PersonOrganizationRegent':{
	reverse_relation:'ea:relation:OrganizationPersonRegent'
	},

	'ea:relation:OrganizationPersonRegent':{
		reverse_relation:'ea:relation:PersonOrganizationRegent'
	},

	'ea:relation:PersonOrganizationUnspecified':{
		reverse_relation:'ea:relation:OrganizationPersonUnspecified'
	},

	'ea:relation:OrganizationPersonUnspecified':{
		reverse_relation:'ea:relation:PersonOrganizationUnspecified'
	},

	'ea:relation:PersonOrganizationArchbishop':{
		reverse_relation:'ea:relation:OrganizationPersonArchbishop'
	},

	'ea:relation:OrganizationPersonArchbishop':{
		reverse_relation:'ea:relation:PersonOrganizationArchbishop'
	},

	'ea:relation:PersonOrganizationParliament':{
		reverse_relation:'ea:relation:OrganizationPersonParliament'
	},

	'ea:relation:OrganizationPersonParliament':{
		reverse_relation:'ea:relation:PersonOrganizationParliament'
	},

	'ea:relation:PersonOrganizationGeneralsecretary':{
		reverse_relation:'ea:relation:OrganizationPersonGeneralsecretary'
	},

	'ea:relation:OrganizationPersonGeneralsecretary':{
		reverse_relation:'ea:relation:PersonOrganizationGeneralsecretary'
	},

	'ea:relation:PersonOrganizationSecretary':{
		reverse_relation:'ea:relation:OrganizationPersonSecretary'
	},

	'ea:relation:OrganizationPersonSecretary':{
		reverse_relation:'ea:relation:PersonOrganizationSecretary'
	},

	'ea:relation:PersonOrganizationMayor':{
		reverse_relation:'ea:relation:OrganizationPersonMayor'
	},

	'ea:relation:OrganizationPersonMayor':{
		reverse_relation:'ea:relation:PersonOrganizationMayor'
	},

	'ea:relation:PersonOrganizationManager' :{
		reverse_relation:'ea:relation:OrganizationPersonManager'
	},

	'ea:relation:OrganizationPersonManager' :{
		reverse_relation:'ea:relation:PersonOrganizationManager'
	},

	'ea:relation:PersonOrganizationCommander' :{
		reverse_relation:'ea:relation:OrganizationPersonCommander'
	},

	'ea:relation:OrganizationPersonCommander' :{
		reverse_relation:'ea:relation:PersonOrganizationCommander'
	},

	'ea:relation:PersonOrganizationTeacher':{
		reverse_relation:'ea:relation:OrganizationPersonTeacher'
	},

	'ea:relation:OrganizationPersonTeacher':{
		reverse_relation:'ea:relation:PersonOrganizationTeacher'
	},

	'ea:relation:PersonOrganizationResearcher':{
		reverse_relation:'ea:relation:OrganizationPersonResearcher'
	},

	'ea:relation:OrganizationPersonResearcher':{
		reverse_relation:'ea:relation:PersonOrganizationResearcher'
	},

	'ea:relation:PersonOrganizationHead':{
		reverse_relation:'ea:relation:OrganizationPersonHead'
	},

	'ea:relation:OrganizationPersonHead':{
		reverse_relation:'ea:relation:PersonOrganizationHead'
	},

	'ea:relation:PersonOrganizationLeader' :{
		reverse_relation:'ea:relation:OrganizationPersonLeader'
	},

	'ea:relation:OrganizationPersonLeader' :{
		reverse_relation:'ea:relation:PersonOrganizationLeader'
	},

	'ea:relation:PersonOrganizationOwnedBy':{
		reverse_relation:'ea:relation:OrganizationPersonOwnedBy'
	},

	'ea:relation:OrganizationPersonOwnedBy':{
		reverse_relation:'ea:relation:PersonOrganizationOwnedBy'
	},

	'ea:relation:PersonOrganizationFoundedBy':{
		reverse_relation:'ea:relation:OrganizationPersonFoundedBy'
	},

	'ea:relation:OrganizationPersonFoundedBy':{
		reverse_relation:'ea:relation:PersonOrganizationFoundedBy'
	},

	'ea:relation:PersonOrganizationMeberHas':{
		reverse_relation:'ea:relation:OrganizationPersonMeberHas'
	},

	'ea:relation:OrganizationPersonMeberHas':{
		reverse_relation:'ea:relation:PersonOrganizationMeberHas'
	},

	'ea:relation:PersonOrganizationShareholder':{
		reverse_relation:'ea:relation:OrganizationPersonShareholder'
	},

	'ea:relation:OrganizationPersonShareholder':{
		reverse_relation:'ea:relation:PersonOrganizationShareholder'
	},

	'ea:relation:PersonOrganizationMetropolitan':{
		reverse_relation:'ea:relation:OrganizationPersonMetropolitan'
	},

	'ea:relation:OrganizationPersonMetropolitan':{
		reverse_relation:'ea:relation:PersonOrganizationMetropolitan'
	},

	'ea:relation:PersonOrganizationPatriarch':{
		reverse_relation:'ea:relation:OrganizationPersonPatriarch'
	},

	'ea:relation:OrganizationPersonPatriarch':{
		reverse_relation:'ea:relation:PersonOrganizationPatriarch'
	},

	'ea:relation:PersonOrganizationRegional':{
		reverse_relation:'ea:relation:OrganizationPersonRegional'
	},

	'ea:relation:OrganizationPersonRegional':{
		reverse_relation:'ea:relation:PersonOrganizationRegional'
	},

	'ea:relation:PersonOrganizationPolitician':{
		reverse_relation:'ea:relation:OrganizationPersonPolitician'
	},

	'ea:relation:OrganizationPersonPolitician':{
		reverse_relation:'ea:relation:PersonOrganizationPolitician'
	},

	'ea:relation:PersonOrganizationPresident':{
		reverse_relation:'ea:relation:OrganizationPersonPresident'
	},

	'ea:relation:OrganizationPersonPresident':{
		reverse_relation:'ea:relation:PersonOrganizationPresident'
	},

	'ea:relation:PersonOrganizationRector' :{
		reverse_relation:'ea:relation:OrganizationPersonRector'
	},

	'ea:relation:OrganizationPersonRector' :{
		reverse_relation:'ea:relation:PersonOrganizationRector'
	},

	'ea:relation:PersonOrganizationPrimeminister':{
		reverse_relation:'ea:relation:OrganizationPersonPrimeminister'
	},

	'ea:relation:OrganizationPersonPrimeminister':{
		reverse_relation:'ea:relation:PersonOrganizationPrimeminister'
	},

	'ea:relation:PersonOrganizationStrain':{
		reverse_relation:'ea:relation:OrganizationPersonStrain'
	},

	'ea:relation:OrganizationPersonStrain':{
		reverse_relation:'ea:relation:PersonOrganizationStrain'
	},

	'ea:relation:PersonOrganizationSoldier':{
		reverse_relation:'ea:relation:OrganizationPersonSoldier'
	},

	'ea:relation:OrganizationPersonSoldier':{
		reverse_relation:'ea:relation:PersonOrganizationSoldier'
	},

	'ea:relation:PersonOrganizationAdvisor':{
		reverse_relation:'ea:relation:OrganizationPersonAdvisor'
	},

	'ea:relation:OrganizationPersonAdvisor':{
		reverse_relation:'ea:relation:PersonOrganizationAdvisor'
	},

	'ea:relation:PersonOrganizationEmployee' :{
		reverse_relation:'ea:relation:OrganizationPersonEmployee'
	},

	'ea:relation:OrganizationPersonEmployee' :{
		reverse_relation:'ea:relation:PersonOrganizationEmployee'
	},

	'ea:relation:PersonOrganizationNoncommissioned':{
		reverse_relation:'ea:relation:OrganizationPersonNoncommissioned'
	},

	'ea:relation:OrganizationPersonNoncommissioned':{
		reverse_relation:'ea:relation:PersonOrganizationNoncommissioned'
	},

	'ea:relation:PersonOrganizationDeputyhead':{
		reverse_relation:'ea:relation:OrganizationPersonDeputyhead'
	},

	'ea:relation:OrganizationPersonDeputyhead':{
		reverse_relation:'ea:relation:PersonOrganizationDeputyhead'
	},

	'ea:relation:PersonOrganizationMinister':{
		reverse_relation:'ea:relation:OrganizationPersonMinister'
	},

	'ea:relation:OrganizationPersonMinister':{
		reverse_relation:'ea:relation:PersonOrganizationMinister'
	},

	'ea:relation:PersonOrganizationDeputyminister':{
		reverse_relation:'ea:relation:OrganizationPersonDeputyminister'
	},

	'ea:relation:OrganizationPersonDeputyminister':{
		reverse_relation:'ea:relation:PersonOrganizationDeputyminister'
	},

	'ea:relation:PersonOrganizationMonarch':{
	reverse_relation:'ea:relation:OrganizationPersonMonarch'
	},

	'ea:relation:OrganizationPersonMonarch':{
	reverse_relation:'ea:relation:PersonOrganizationMonarch'
	},

	'ea:relation:PersonOrganizationCo-founder':{
	reverse_relation:'ea:relation:OrganizationPersonCo-founder'
	},

	'ea:relation:OrganizationPersonCo-founder':{
	reverse_relation:'ea:relation:PersonOrganizationCo-founder'
	},

	'ea:relation:TermAlterSee_Variant_new_not_term':{
		reverse_relation:'ea:relation:TermAlterSee_Variant_old_not_term'
	},

	'ea:relation:TermAlterSee_Variant_old_not_term':{
		reverse_relation:'ea:relation:TermAlterSee_Variant_new_not_term'
	},

	'ea:relation:TermAlterSee_Variant_new':{
		reverse_relation:'ea:relation:TermAlterSee_Variant_old'
	},

	'ea:relation:TermAlterSee_Variant_old':{
		reverse_relation:'ea:relation:TermAlterSee_Variant_new'
	},


	'ea:authPerson:Occupation_Name':{
		reverse_relation:'ea:related_person:occupation'
	},

	'ea:related_person:occupation':{
		reverse_relation:'ea:authPerson:Occupation_Name'
	},

	'ea:auth:Activity_Field':{
		reverse_relation:'ea:related_person:activity'
	},

	'ea:related_person:activity':{
		reverse_relation:'ea:auth:Activity_Field'
	},

	'ea:auth:Commission':{
		reverse_relation:'ea:related_person:commission'
	},

	'ea:related_person:commission':{
		reverse_relation:'ea:auth:Commission'
	},

	'ea:auth:Participation_in_events':{
		reverse_relation:'ea:related_person:participant'
	},

	'ea:related_person:participant':{
		reverse_relation:'ea:auth:Participation_in_events'
	},

	'ea:auth:Organization_Activity_Field':{
		reverse_relation:'ea:related_organization:activity'
	},

	'ea:related_organization:activity':{
		reverse_relation:'ea:auth:Organization_Activity_Field'
	},

	'ea:relation:OrganizationOtherPredecessor':{
		reverse_relation:'ea:relation:OrganizationOtherSuccessor'
	},

	'ea:relation:OrganizationOtherSuccessor':{
		reverse_relation:'ea:relation:OrganizationOtherPredecessor'
	},

	'ea:relation:OrganizationAlterAcronym':{
		reverse_relation:'ea:relation:OrganizationAlter_full_name'
  },

	'ea:relation:OrganizationAlter_full_name':{
		reverse_relation:'ea:relation:OrganizationAlterAcronym'
  },

  'ea:relation:OrganizationAlter_full_name_not':{
		reverse_relation:'ea:relation:OrganizationAlterAcronym_name_not'
  },

  'ea:relation:OrganizationAlterAcronym_name_not':{
		reverse_relation:'ea:relation:OrganizationAlter_full_name_not'
  },

	'ea:relation:containerOfWork':{
		reverse_relation:'ea:relation:containedInWork'
  },

	'ea:relation:containedInWork':{
		reverse_relation:'ea:relation:containerOfWork'
  },

	'ea:relation:OrganizationOtherorganized':{
		reverse_relation:'ea:relation:OrganizationOtherOrganizer'
  },

	'ea:relation:OrganizationOtherOrganizer':{
		reverse_relation:'ea:relation:OrganizationOtherorganized'
  },

	'ea:relation:OrganizationOtherMerged':{
		reverse_relation:'ea:relation:OrganizationOtherMerge'
	},

	'ea:relation:OrganizationOtherMerge':{
		reverse_relation:'ea:relation:OrganizationOtherMerged'
	},

	'ea:relation:OrganizationOtherUnited':{
		reverse_relation:'ea:relation:OrganizationOtherUnite'
	},

	'ea:relation:OrganizationOtherUnite':{
		reverse_relation:'ea:relation:OrganizationOtherUnited'
	},

	'ea:relation:OrganizationOtherOwners':{
		reverse_relation:'ea:relation:OrganizationOtherOwnedBy'
	},

	'ea:relation:OrganizationOtherOwnedBy':{
		reverse_relation:'ea:relation:OrganizationOtherOwners'
	},

	'ea:relation:OrganizationOtherFounders':{
		reverse_relation:'ea:relation:OrganizationOtherFoundedBy'
	},

	'ea:relation:OrganizationOtherFoundedBy':{
		reverse_relation:'ea:relation:OrganizationOtherFounders'
	},

	'ea:relation:OrganizationOtherMeberHas':{
		reverse_relation:'ea:relation:OrganizationOtherMeber'
	},

	'ea:relation:OrganizationOtherMeber':{
		reverse_relation:'ea:relation:OrganizationOtherMeberHas'
	},

	'ea:relation:OrganizationAnnex':{
		reverse_relation:'ea:relation:OrganizationAnnexs'
	},

	'ea:relation:OrganizationAnnexs':{
		reverse_relation:'ea:relation:OrganizationAnnex'
	},

	'ea:relation:OrganizationParticipate':{
		reverse_relation:'ea:relation:OrganizationParticipants'
	},

	'ea:relation:OrganizationParticipants':{
		reverse_relation:'ea:relation:OrganizationParticipate'
	},

	'ea:relation:OrganizationOtherCollaborating':{
		reverse_relation:'ea:relation:OrganizationOtherCooperative'
	},

	'ea:relation:OrganizationOtherCooperative':{
		reverse_relation:'ea:relation:OrganizationOtherCollaborating'
	},

	'ea:relation:OrganizationInstitutions':{
		reverse_relation:'ea:relation:OrganizationInstitution'
	},

	'ea:relation:OrganizationInstitution':{
		reverse_relation:'ea:relation:OrganizationInstitutions'
	},

	'ea:relation:OrganizationPart':{
		reverse_relation:'ea:relation:OrganizationParts'
	},

	'ea:relation:OrganizationParts':{
		reverse_relation:'ea:relation:OrganizationPart'
	},

	'ea:relation:PersonAlterReligion_alter' :{
		reverse_relation:'ea:relation:PersonAlterSecular_alter'
	},

	'ea:relation:PersonAlterSecular_alter' :{
		reverse_relation:'ea:relation:PersonAlterReligion_alter'
	},

	'ea:relation:PersonAlterBeforeMarriage_alter':{
		reverse_relation:'ea:relation:PersonAlterMarried_alter'
	},

	'ea:relation:PersonAlterMarried_alter':{
		reverse_relation:'ea:relation:PersonAlterBeforeMarriage_alter'
	},

	'ea:relation:PersonAlterReal_alter':{
		reverse_relation:'ea:relation:PersonAlterPseudonym_alter'
	},

	'ea:relation:PersonAlterPseudonym_alter':{
		reverse_relation:'ea:relation:PersonAlterReal_alter'
	},

	'ea:relation:PersonAlterReligion' :{
		reverse_relation:'ea:relation:PersonAlterSecular'
	},

	'ea:relation:PersonAlterSecular' :{
		reverse_relation:'ea:relation:PersonAlterReligion'
	},

	'ea:relation:PersonAlterMarried' :{
		reverse_relation:'ea:relation:PersonAlterBeforeMarriage'
	},

	'ea:relation:PersonAlterBeforeMarriage' :{
		reverse_relation:'ea:relation:PersonAlterMarried'
	},

	'ea:relation:PersonAlterReal':{
		reverse_relation:'ea:relation:PersonAlterPseudonym'
	},

	'ea:relation:PersonAlterPseudonym':{
		reverse_relation:'ea:relation:PersonAlterReal'
	},

	'ea:relation:reprintOfManifestation':{
	reverse_relation:'ea:relation:reprintedAs'
	},

	'ea:relation:reprintedAs':{
		reverse_relation:'ea:relation:reprintOfManifestation'
	},

	'ea:relation:containerOfIndependent':{
		reverse_relation:'ea:relation:containedInIndividual'
	},

	'ea:relation:containedInIndividual':{
		reverse_relation:'ea:relation:containerOfIndependent'
	},

	'ea:relation:containerOfArticle':{
		reverse_relation:'ea:relation:containedInWorkArticles'
	},

	'ea:relation:containedInWorkArticles':{
		reverse_relation:'ea:relation:containerOfArticle'
	},

	'ea:relation:containerOfIndividual':{
		reverse_relation:'ea:relation:containedInAggregation'
	},

	'ea:relation:containedInAggregation':{
		reverse_relation:'ea:relation:containerOfIndividual'
	},

	'ea:relation:containerOfDocuments':{
		reverse_relation:'ea:relation:containedInDocuments'
	},

	'ea:relation:containedInDocuments':{
		reverse_relation:'ea:relation:containerOfDocuments'
	},

	'ea:relation:containerOfDependent':{
		reverse_relation:'ea:relation:containedInDependent'
	},

	'ea:relation:containedInDependent':{
		reverse_relation:'ea:relation:containerOfDependent'
	},

	'ea:relation:containerOfSeries':{
		reverse_relation:'ea:relation:containedInSeries'
	},

	'ea:relation:containedInSeries':{
		reverse_relation:'ea:relation:containerOfSeries'
	},

	'ea:relation:containerOfSubseries':{
		reverse_relation:'ea:relation:containedInSubseries'
	},

	'ea:relation:containedInSubseries':{
		reverse_relation:'ea:relation:containerOfSubseries'
	},

	'ea:relation:containerOfMusicTracks':{
		reverse_relation:'ea:relation:containedInMusicTracks'
	},

	'ea:relation:containedInMusicTracks':{
		reverse_relation:'ea:relation:containerOfMusicTracks'
	},

	'ea:relation:containerOfSerialArticles':{
		reverse_relation:'ea:relation:containedInSerialArticles'
	},

	'ea:relation:containedInSerialArticles':{
		reverse_relation:'ea:relation:containerOfSerialArticles'
	},

	'ea:relation:containerOfCorrespondence':{
		reverse_relation:'ea:relation:containedInCorrespondence'
	},

	'ea:relation:containedInCorrespondence':{
		reverse_relation:'ea:relation:containerOfCorrespondence'
	},

	'ea:relation:containerOfLectures':{
		reverse_relation:'ea:relation:containedInLectures'
	},

	'ea:relation:containedInLectures':{
		reverse_relation:'ea:relation:containerOfLectures'
	},

	'ea:relation:containerOfContributions':{
		reverse_relation:'ea:relation:containedInContributions'
	},

	'ea:relation:containedInContributions':{
		reverse_relation:'ea:relation:containerOfContributions'
	},

	'ea:relation:containerOfSpeeches':{
		reverse_relation:'ea:relation:containedInSpeeches'
	},

	'ea:relation:containedInSpeeches':{
		reverse_relation:'ea:relation:containerOfSpeeches'
	},


  'ea:item-of:': {
  	transitive: true,
  }







};
