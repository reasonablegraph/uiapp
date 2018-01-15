
var key_labels = {
//Auth-Manifestation
'work-expression':'Work – Expression',
'ea:manif:editorVersion':'Version editor',
'ea:manif:authorPreface':'Preface author',
'ea:manif:admissionAuthor':'Admission Author',
'ea:manif:distributor':'Distributor',
'ea:manif:filmDistributor':'Film distributor',
'ea:manif:publisher':'Publisher',
'ea:manif:broadcaster':'Broadcaster',
'ea:manif:manufacturer':'Manufacturer',
'ea:manif:lithographer':'Lithographer',
'ea:manif:etcher':'Etcher',
'ea:manif:bookDesigner':'Book designer',
'ea:manif:printer':'Printer',
'ea:manif:engraver':'Engraver',
'ea:manif:brailleEmbosser':'Braille embosser',
'ea:manif:caster':'Caster',
'ea:manif:collotyper':'Collotyper',
'ea:manif:platemaker':'Platemaker',
'ea:manif:printmaker':'Printmaker',
'Header_Manifestation':'Manifestation Fields',
'Header_Manifestation_Control':'Manifestation - Control Fields',
'ea:manif:Header_Information':'Manifestation -  Information Fields',
'ea:auth:Manifestation_Header_Cataloging':'Manifestation - Cataloging Fields',
'ea:manif:Header_Work_Manifestation':'Work – Expression of Manifestation',
'ea:manif:Header_Digital_Item':'Digital Item',
'ea:manif:Header':'Manifestation',
'ea:manif:Header_Title':'Manifestation - Title Fields',
'ea:manif:Header_Basic':'Manifestation - Basic Fields',
'ea:manif:Header_Additional':'Manifestation - Additional Fields',
'ea:manif:Header_Work_Expression':'Work/Expression contained in Manifestation',
'ea:manif:Header_Contributors':'Manifestation - Contributors',
'ea:manif:Header_Subjects':'Manifestation - Keywords',
'ea:manif:Header_Relations':'Manifestation - Relations',
'ea:manif:Type':'Manifestation type',
'ea:manif:Title':'Title',
'ea:manif:Title_manif':'Manifestation title',
'ea:manif:Title_Proper':'Title proper',
'ea:manif:Title_Medium':'Medium',
'ea:manif:Title_Remainder':'Remainder of title',
'ea:manif:Title_Responsibility':'Statement of responsibility',
'ea:manif:Title_PartNumber':'Number of part/section',
'ea:manif:Title_PartName':'Name of part/section',
'ea:manif:Edition':'Edition',
'ea:manif:Edition_Statement':'Edition statement',
'ea:manif:Edition_Remainder':'Remainder of edition statement',
'ea:manif:AbbreviatedTitle':'Abbreviated title',
'ea:manif:KeyTitle':'Key title',
'ea:manif:Additional_Title':'Additional Title',
'ea:manif:Additional_Title_Display':'Display text',
'ea:manif:Additional_Title_Proper':'Title',
'ea:manif:Additional_Title_Remainder':'Remainder of title',
'ea:manif:Additional_Title_PartNumber':'Number of part/section',
'ea:manif:Additional_Title_PartName':'Name of part/section',
'ea:manif:publications':'Publications',
'ea:manif:Publication':'Publication',
'ea:manif:Publication_Place':'Place of publication',
'ea:manif:Publisher_Name':'Name of Publisher',
'ea:manif:Publication_Date':'Date of publication',
'ea:manif:Distribution':'Distribution',
'ea:manif:Distribution_Place':'Place of Distribution',
'ea:manif:Distribution_Name':'Name of distributor',
'ea:manif:Distribution_Date':'Date of distribution',
'ea:manif:Production':'Production',
'ea:manif:Production_Place':'Place of Production',
'ea:manif:Production_Name':'Name of producer',
'ea:manif:Production_Date':'Date of production',
'ea:manif:Manufactur':'Manufacture',
'ea:manif:Manufactur_Place':'Place of Manufacture',
'ea:manif:Manufactur_Name':'Name of manufacturer',
'ea:manif:Manufactur_Date':'Date of manufacture',
'ea:manif:Physical_Description':'Physical Description',
'ea:manif:Physical_Description_Extent':'Extent',
'ea:manif:Physical_Description_Details':'Other physical details',
'ea:manif:Physical_Description_Dimensions':'Dimensions',
'ea:manif:Physical_Description_Accompanying':'Accompanying material',
'ea:manif:Media_Type':'Media type',
'ea:manif:Carrier_Type':'Carrier type',
'ea:manif:Series':'Series',
'ea:manif:Series_Title':'Series Title',
'ea:manif:Series_Remainder':'Other Title Information',
'ea:manif:Series_Responsibility':'Statement of Responsibility',
'ea:manif:Series_Volume':'Volume Designation',
'ea:manif:Series_ISSN':'ISSN',
'ea:manif:isbn_issn_ismn':'ISBN,ISSN,ISMN',
'ea:manif:ISBN':'ISBN',
'ea:manif:ISBN_Terms':'Terms of availability',
'ea:manif:ISBN_Qualify':'Qualifying information',
'ea:manif:ISBN_Canceled':'Canceled/invalid ISBN',
'ea:manif:ISMN':'ISMN',
'ea:manif:ISMN_Terms':'Terms of availability',
'ea:manif:ISMN_Qualify':'Qualifying information',
'ea:manif:ISMN_Canceled':'Canceled/invalid ISBN',
'ea:manif:ISSN':'ISSN',
'ea:manif:ISSN_Cancelled':'Canceled ISSN',
'ea:manif:ISSN_Incorrect':'Incorrect ISSN',
'ea:manif:ISSN_LNumber':'Linking ISSN',
'ea:manif:ISSN_LCanceled':'Canceled Linking ISSN',
'ea:manif:note':'Notes',
'ea:manif:Serials_Numbering':'Serials numbering',
'ea:manif:Country_Code':'Country of Publishing/Producing',
'ea:manif:Subject':'Subject',
'ea:manif:Keywords':'Keywords',
'ea:manif:Work':'Work',
'ea:manif:Work_Expression':'Work/Expression ',
'ea:manif:Relation_Equivalent':'Equivalent relations',
'ea:manif:Relation_Descriptive':'Descriptive relations',
'ea:manif:Relation_Wholepart':'Whole-Part Relations',
'ea:manif:Accompanying':'Accompanying relations',
'ea:manif:availability_library':'Library availability',
'ea:manif:digital-item':'Digital item',
'Header_Manifestation_scorp':'Book Fields',
'Header_Manifestation_Control_scorp':'Book - Control Fields',
'ea:manif:Header_Information_scorp':'Book -  Information Fields',
'ea:auth:Manifestation_Header_Cataloging_scorp':'Book - Cataloging Fields',
'ea:manif:Header_Work_Manifestation_scorp':'Work – Book',
'ea:manif:Header_scorp':'Book',
'ea:manif:Header_Title_scorp':'Book - Title Fields',
'ea:manif:Header_Basic_scorp':'Book - Basic Fields',
'ea:manif:Header_Additional_scorp':'Book - Additional Fields',
'ea:manif:Header_Work_Expression_scorp':'Work contained in Book',
'ea:manif:Header_Contributors_scorp':'Book - Contributors',
'ea:manif:Header_Subjects_scorp':'Book - Keywords',
'ea:manif:Header_Relations_scorp':'Book - Relations',

// Auth-Expression
'expression_header_public': 'Expression Fields',
'expression_header_Control':'Expression - Control Fields',
'status_expression':'Status',
'ea:expression:Header':'Expression',
'ea:expression:Header_Relation_Expression':'Expression- Relation',
'ea:expres:Header_Basic':'Expression - Basic Fields',
'ea:expres:Relation_Work':'Relation Expression-Work',
'ea:expres:Header_Specific':'Expression - Specific Fields',
'ea:expres:Header_Information':'Expression - Information Fields',
'ea:expres:Header_Contributors':'Expression - Contributors',
'ea:expres:Header_Subjects':'Expression - Subjects',
'ea:expres:title':'Title of Expression',
'ea:expres:Form':'Form of expression',
'ea:expres:Content':'Content type Expression',
'ea:expres:Language':'Language',
'ea:expres:Dates':'Date of expression',
'ea:expres:Version':'Other distinguishing characteristics',
'ea:expres:Note_Content':'Contents',
'ea:expres:Note_Summary':'Summary',
'ea:expres:Note_Citation':'Citation, References, reviews',
'ea:expres:Note_Citation_Sourse':'Name of source',
'ea:expres:Frequency':'Frequency serial',
'ea:expres:Notated_Music':'Format of Notated Music',
'ea:expres:Computer_Character':'Computer File Characteristics',
'ea:expres:Playing_Time':'Playing time for sound, video etc.',
'ea:expres:Symbology':'Symbology tactile material',
'ea:expres:Scale':'Scale',
'ea:expres:Note_Citation_Url':'Terms of availability',
'ea:expres:Url':'URL',
'ea:work:Relation_Descriptive':'Descriptive relations',
'ea:work:Relation_Derivative':'Derivative relations',
'ea:work:Relation_Wholepart':'Whole-Part Relations',
'ea:work:Relation_Accompanying':'Accompanying relations',
'ea:work:Relation_Sequential':'Sequential relations',

//person
'Person_fields':'Person Fields',
'Person_controls_fields':'Person - Control Fields',
'ea:auth:Person_Work_Header':'Person-Work Fields',
'ea:auth:Person_Header_Basic':'Person - Basic Fields',
'ea:auth:Person_Header_Additional':'Person - Additional Fields',
'ea:auth:Person_Header_Information':'Person - Information Fields',
'ea:auth:Person_Header_Link':'Person - Link ',
'ea:auth:Person_Header_Cataloging':'Person - Classification and Cataloging',
'ea:auth:Person_Header_Subjects':'Person - Subjects',
'ea:auth:Person_Header_Keywords':'Person - Keywords',
'ea:auth:Person_Header_Relations':'Person - Relations',
'ea:auth:Person_Entity_Language':'Language term',
'ea:auth:Person_Ind1':'Type of personal name',
'ea:authPerson:AttributesTitle':'Title of person',
'ea:authPersonAssociated:Place_Birth':'Birth place',
'ea:authPersonAssociated:Place_Death':'Death place',
'ea:auth:CountryName':'Associated Country',
'ea:auth:CountryName_assoc':'Associated Country',
'ea:authAssociated:Residence_Place':'Place of residence',
'ea:authAssociated:Residence_Place_Simple':'Place',
'ea:authAssociated:OtherPlace_Place':'Other place',
'ea:auth:Activity_Field':'Field of Activity',
'ea:authPerson:Group_Group':'Associated Group',
'ea:authPerson:Occupation_Name':'Occupation',
'ea:authPerson:Gender_Name':'Gender',
'ea:authAssociated:Language':'Associated Language',
'ea:auth:Nationality':'Nationality',
'ea:authPersonCoded:Dates_Birth':'Person Birth date',
'ea:authPersonCoded:Dates_Death':'Person Death date',
'ea:auth:NoteNonpublic':'Nonpublic General Note',
'ea:auth:NotePublic':'Public General Note',
'ea:authBiographical:Data_Text':'Biographical Data',
'ea:authElectronic:Location':'Electronic Location',
'ea:auth:Address_Address':'Address',
'ea:auth:Address_Address2':'Address',
'ea:auth:Address_City':'City',
'ea:auth:Address_Jurisdiction':'Intermediate jurisdiction',
'ea:auth:Address_Post':'Postal code',
'ea:auth:Address_Mail':'E-mail',
'authPersonSee':'Relation with not use terms (see)',
'ea:authPersonSee:Id':'Personal name (not use)',
'ea:auth:Person_Name':'Personal name',
'ea:auth:Person_Numeration':'Numeration',
'ea:auth:Person_TitlesAssociated':'Titles and other words associated',
'ea:auth:Person_DatesAssociated':'Dates associated with a name',
'ea:auth:Person_FullerName':'Fuller form of name',
'ea:auth:Person_FormSubdivision':'Form subdivision',
'ea:auth:Person_GeneralSubdivision':'General subdivision',
'ea:auth:Person_ChronoSubdivision':'Chronological subdivision',
'ea:auth:Person_GeographicSubdivision':'Geographic subdivision',
'ea:auth:personSee':'Name not use (See)',
'ea:auth:personΑlternativesNames':'Person alternatives names',
'ea:auth:personSeeAlso':'Αlternatives names Person (See Also)',
'ea:auth:personSeealsoPerson':'Relationship with other Person',
'ea:auth:personSeealsoOrganization':'Relationship with Organizations',
'ea:auth:personSeealsoFamily':'Relationship with Family (See Also)',
'ea:auth:personOtherlanguage':'Person in other language',
'ea:auth:Subject':'Subject',
'ea:auth:Keywords':'Keywords',
'ea:auth:Commission':'Commission',
'ea:auth:Citizenship':'Citizenship',
'ea:auth:Participation_in_events':'Participation in events',
'ea:authBiographical_Work:Data_Text':'Information Data',
'ea:auth:person_name_other_lang':'Person name in other language',

//family
'ea:auth:Family_Header_Fields':'Family Fields',
'ea:auth:Family_Header_Basic':'Family - Basic Fields',
'ea:auth:Family_Header_Control': 'Family - Control Fields',
'ea:auth:Family_Header_Additional':'Family - Additional Fields',
'ea:auth:Family_Header_Information':'Family- Information Fields',
'ea:auth:Family_Header_Link':'Family - Link ',
'ea:auth:Family_Header_Cataloging':'Family - Classification and Cataloging',
'ea:auth:Family_Header_Subjects':'Family - Subjects',
'ea:auth:Family_Header_Keywords':'Family - Keywords',
'ea:auth:Family_Header_Relations':'Family - Relations',
'ea:auth:Family_Ind1':'Type of personal name',
'ea:auth:Family_Titles_Place':'Places associated with the family',
'ea:auth:Family_Type':'Type of family',
'ea:auth:family_DatesAssociated':'Dates associated with a family',
'authFamily':'Family name',
'ea:auth:FamilyCodedDates_StartPeriod':'Family Start period',
'ea:auth:FamilyCodedDates_EndPeriod':'Family End period',
'authFamilyInformation':'Family Information',
'ea:auth:FamilyInformation_Type':'Type of family',
'ea:auth:FamilyInformation_Member':'Name of prominent member',
'authFamilyInformation_StartPeriod':'Start period',
'authFamilyInformation_EndPeriod':'End period',
'ea:auth:Family_see_also':'Αlternatives names Family (See Also)',
'ea:auth:Family_see':'Αlternatives names Family',
'ea:auth:FamilySeeAlsoFamily':'Relationship with other Family',
'ea:auth:FamilySeealsoPerson':'Relationship with Person (See Also)',
'ea:auth:Family_Other_Language':'Family in other language',

//organization
'Header_Organization':'Organization Fields',
'ea:control:Header_Organization_Control':'Organization - Control Fields',
'ea:auth:Organization_Header_Basic':'Organization - Basic Fields',
'ea:auth:Organization_Header_Additional':'Organization - Additional Fields',
'ea:auth:Organization_Header_Information':'Organization- Information Fields',
'ea:auth:Organization_Header_Link':'Organization - Link ',
'ea:auth:Organization_Header_Cataloging':'Organization - Classification and Cataloging',
'ea:auth:Organization_Header_Subjects':'Organization - Subjects',
'ea:auth:Organization_Header_Keywords':'Organization - Keywords',
'ea:auth:Organization_Header_Relations':'Organization - Relations',
'ea:auth:Organization_Subdivision':'Subdivision',
'ea:auth:Organization_Addition':'Addition to name or qualifier',
'ea:auth:Organization_Number':'Number of meeting',
'ea:auth:Organization_Date':'Date of meeting',
'ea:auth:Organization_Location':'Location of meeting',
'ea:auth:Organization_Attributes_StartPeriod':'Start period',
'ea:auth:Organization_Attributes_EndPeriod':'End period',
'ea:auth:Organization_see_also':'Αlternatives names Organization',
'ea:auth:OrganizationSeeAlsoOrganization':'Relationship with other Organization',
'ea:auth:Relation_Organization_Family':'Relationship with Family',
'ea:auth:Relation_Organization_Person':'Relationship with Person',
'ea:auth:OrganizationSeealsoFamily':'Relationship with Family',
'authOrganization':'Organization',
'authOrganization_Name':'Organization name',
'ea:auth:Organization_Subordinate_Unit':'Subordinate unit',
'authOrganizationAttributes':'Type of corporate body',
'ea:auth:Organization_Attributes_Type':'Type',
'OrganizationCodedDates_Start_Period':'Organization Start period',
'OrganizationCodedDates_End_Period':'Organization End period',
'ea:auth:Organization_Ind1':'Type of organization',
'ea:auth:Organization_Other_Language':'Organization  in other language',
'organization_Activity_Field':'Organization category',
'ea:authAssociated:Residence_Place_Organization':'Organization headquarters',
'establish_place':'Establish place',
'authOrganization':'Organization',
'authOrganization_Name':'Organization Name',
'ea:auth:Organization_Reopening':'Reopening',
'ea:auth:Organization_Subordinate_Unit':'Subordinate unit',
'authOrganizationAttributes':'Type of organization',

//place
'ea:auth:Place_Term':'Place term',
'ea:auth:Place_Type':'Place type',
'place_header_public': 'Place Fields',
'place_header_control': 'Place - Control Fields',
'ea:auth:Place_Header_Basic':'Place - Basic Fields',
'ea:auth:Place_Header_Additional':'Place - Additional Fields',
'ea:auth:Place_Header_Information':'Place- Information Fields',
'ea:auth:Place_Header_Link':'Place - Link ',
'ea:auth:Place_Header_Cataloging':'Place - Classification and Cataloging',
'ea:auth:Place_Header_Subjects':'Place - Subjects',
'ea:auth:Place_Header_Relations':'Place - Relations',
'ea:auth:PlaceSee':'Name  not use (See)',
'ea:auth:Place_See_Also':'Αlternatives names Place (See Also)',
'ea:auth:Relation_Place_Place':'Relationship with other term',
'ea:auth:Place_See_Also':'Αlternatives names Place (See Also)',
'ea:auth:Place_Other_Language':'Place in other language',
'ea:auth:Place_not_use':'Name not use',
'ea:auth:Place_Αlternatives':'Αlternatives names Place',
'ea:auth:Place_Other':'Relationship with other Place',
'ea:auth:Place_Other_Language':'Place in other language',
'relation_place_organization':'Relationship with Organization',

//concept Fields
'concept_header_public': 'Concept Fields',
'ea:auth:Concept_Type':'Concept Type',
'ea:auth:Concept_Header_Control':'Concept - Control Fields',
'ea:auth:Concept_Term':'Concept term',
'ea:auth:Concept_Header_Basic':'Concept - Basic Fields',
'ea:auth:Concept_Header_Additional':'Concept - Additional Fields',
'ea:auth:Concept_Header_Information':'Concept- Information Fields',
'ea:auth:Concept_Header_Link':'Concept - Link ',
'ea:auth:Concept_Header_Cataloging':'Concept - Classification and Cataloging',
'ea:auth:Concept_Header_Subjects':'Concept - Subjects',
'ea:auth:Concept_Header_Relations':'Concept - Relations',
'ea:auth:conceptSee':'Name  not use',
'ea:auth:Concept_See_Also':'Αlternatives names Concept',
'ea:auth:Relation_Concept_Concept':'Relationship with other term',
'ea:auth:Concept_Other_Language':'Concept in other language',

//event fields
'event_header_public': 'Event Fields',
'ea:auth:Event_Type':'Event type',
'ea:auth:Event_Term':'Event term',
'ea:auth:Event_Header_Basic':'Event - Basic Fields',
'ea:auth:Event_Header_Control':'Event - Control Fields',
'ea:auth:Event_Header_Additional':'Event - Additional Fields',
'ea:auth:Event_Header_Information':'Event- Information Fields',
'ea:auth:Event_Start_Date':'Start date',
'ea:auth:Event_Expiry_Date':'Expiry date',
'ea:auth:Event_Place':'Place',
'ea:auth:Event_Involved':'Involved',
'ea:auth:Event_Header_Link':'Event - Link ',
'ea:auth:Event_Header_Cataloging':'Event - Classification and Cataloging',
'ea:auth:Event_Header_Relations':'Event - Relations',
'ea:auth:Event_Term':'Event term',
'ea:auth:Event_Other_Language':'Event in other language',
'ea:auth:Event_not_use':'Not use name',
'ea:auth:Event_See_Also':'Αlternatives names',

//genre fields
'ea:auth:Genre_Term':'Genre term',
'genre_header_public': 'Genre Fields',
'ea:auth:Genre_Type': 'Genre type',
'ea:auth:Genre_Header_Control':'Genre - Control Fields',
'ea:auth:Genre_Header_Basic':'Genre - Basic Fields',
'ea:auth:Genre_Header_Additional':'Genre - Additional Fields',
'ea:auth:Genre_Header_Information':'Genre- Information Fields',
'ea:auth:Genre_Header_Link':'Genre - Link ',
'ea:auth:Genre_Header_Cataloging':'Genre - Classification and Cataloging',
'ea:auth:Genre_Header_Relations':'Genre - Relations',
'ea:auth:Genre_See_Also':'Αlternatives names',
'ea:auth:Genre_Other_Language':'Genre in other language',

//object Fields
'ea:auth:Object_Term':'Object term',
'ea:auth:Object_Type':'Object type',
'object_header_public': 'Object Fields',
'ea:auth:Object_Header_Control':'Object - Control Fields',
'ea:auth:Object_Header_Basic':'Object - Basic Fields',
'ea:auth:Object_Header_Additional':'Object - Additional Fields',
'ea:auth:Object_Header_Information':'Object- Information Fields',
'ea:auth:Object_Header_Link':'Object - Link ',
'ea:auth:Object_Header_Cataloging':'Object - Classification and Cataloging',
'ea:auth:Object_Header_Relations':'Object - Relations',
'ea:auth:Object_Term':'Object term',
'ea:auth:Object_See_Also':'Αlternatives names',
'ea:auth:Object_not_use':'Not use name',
'ea:auth:Object_Other_Language':'Object in other language',

//subject-chain fields
'subject_chain_primary_subj':'Primary subject',
'subject_chain_secondary_subj':'Subdivisions',
'subject_chain_fields':'Subject Chain Fields',
'subject_chain_control_fields':'Subject Chain - Control Fields',
'subject_chain_basic_fields':'Subject Chain - Basic Fields',
'subject_chain_information_fields':'Subject Chain - Information Fields',
'subject_chain_link_fields':'Subject Chain - Link',
'subject_chain_cataloging_fields':'Subject Chain - Classification and Cataloging',
'subject_chain_relations_fields':'Subject Chain - Relation',
'subject_chain_term':'Subject chain term',
'relation_subject_chain_see_also':'Alternative name',
'relation_subject_chain_other_languages':'Subject chain in other language',

//subject fields
'ea:subj:':'Subjects',
'ea:subj:Header':'Subjects',
'ea:subj:headers':'Subject headings',
'ea:subj:person-work':'Person-Work',
'ea:subj:person':'Person',
'ea:subj:work':'Work',
'ea:subj:object':'Object',
'ea:subj:event':'Event',
'ea:subj:concept':'Concept',
'ea:subj:object-collection':'Object collection',
'ea:subj:place':'Place',
'ea:subj:form':'Genre',
'ea:subj:general':'General',
'ea:subj:title':'Subject title',
'ea:subj:person-work:primary':'Person-Work',
'ea:subj:person:primary':'Πρόσωπο',
'ea:subj:work:primary':'Work',
'ea:subj:object:primary':'Object',
'ea:subj:event:primary':'Event',
'ea:subj:concept:primary':'Concept',
'ea:subj:object-collection:primary':'Object',
'ea:subj:place:primary':'Place',
'ea:subj:form:primary':'Genre',
'ea:subj:general:primary':'General',

//control fields
'ea:control:Header_Control':'CONTROL FIELDS',
'ea:control:Control_Number':'Control Number',
'ea:control:Latest_Transaction':'Latest transaction',
'ea:control:Persistent':'Persistent Record Identifier',
'ea:control:Entity_Type':'Entity Type',
'ea:control:Kind_Record':'Kind of record',
'ea:control:Level_Establish':'Establishment Level',

//link fields
'ea:link:bibliography':'Bibliography',
'ea:link:bibliographyNumber':'Bibliography Number',
'ea:link:bibliographyInformation':'Bibliography Information',
'ea:link:ISNI_Number2':'ISNI Number',
'ea:link:VIAF_Number2':'VIAF Number',
'ea:link:NationalBibliographyNumber_Number2':'NB Number',
'ea:link:NationalBibliographyNumber_Url':'URL ΕΒΕ',
'ea:link:GeoNames':'GeoNames',
'ea:link:GeoNames_Number':'GeoNames Number',
'ea:link:GeoNames_Url':'GeoNames Url',
'ea:link:Lccn_Number':'Library of Congress Control Number',
'ea:link:Lccn_Number2':'LC number',
'ea:link:Lccn_Canceled':'Canceled or invalid number',
'ea:link:NationalBibliographyNumber_Number':'Library of Greece Control Number',
'ea:link:NationalBibliographyNumber_Canceled':'Canceled or invalid number',
'ea:link:Other_Number':'Other System Control Number',
'ea:link:Other_Number_Simple':'Control number',
'ea:link:Other_Canceled':'Canceled or invalid number',
'ea:link:ISNI_Number':'ISNI',
'ea:link:ISNI_Canceled':'Canceled or invalid number',
'ea:link:VIAF_Number':'VIAF',
'ea:link:VIAF_Canceled':'Canceled or invalid number',
'ea:link:Lccn_Url':'Lccn Url',
'ea:link:NationalBibliographyNumber_Url':'National Bibliography Url',
'ea:link:Other_Url':'Other Url',
'ea:link:ISNI_Url':'ISNI Url',
'ea:link:VIAF_Url':'VIAF Url',

//cataloging fields
'ea:classification:CatalogingSource':'Cataloging source',
'ea:classification:CatalogingSource_Original':'Original cataloging agency',
'ea:classification:CatalogingSource_Modifying':'Modifying  agency',
'ea:classification:CatalogingSource_Language':'Language of cataloging',
'ea:classification:CatalogingSource_Rules':'Cataloguing rules',
'ea:classification:LCClassification':'LC Classification Number',
'ea:classification:LCClassification2':'Classification LC',
'ea:classification:LCClassification_Start':'Start Classification number',
'ea:classification:LCClassification_End':'End Classification number',
'ea:classification:DDC2':'Classification Dewey',
'ea:classification:DDC':'DD Classification Number',
'ea:classification:DDC_NumberStart':'Start Classification number',
'ea:classification:DDC_NumberEnd':'End Classification number',
'ea:classification:DDC_Edition':'Edition number',
'ea:classification:Other_Number':'Other Classification Number',
'ea:classification:Other_Number2':'Local Classification',
'ea:classification:Other_Number_Start':'Start Classification number',
'ea:classification:Other_Number_End':'End Classification number',

//general
'status':'Status',
'status_field':'status',
'ea:url:related':'url related',
'ea:date:start':'date start',
'ea:date:end':'date end',
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//work
'ea:work:Type':'Type of Work',
'ea:work:Header':'Work Monograph',
'ea:work:Header_audioCd':'Work Audio CD',
'ea:work:Header_featureFilm':'Work 35mm Feature Film',
'contributor_w':'Creator of Work (RDA 19.2)',
'ea:work:Title_Preferred':'Preferred Title for the Work (RDA 6.2.2)',
'Variant Title':'Variant Title for the Work (RDA 6.2.3)',
'ea:work:Title_Preferred Audio Cd':'Preferred Title for a Musical Work (RDA 6.14.2)',
'Variant Title Audio Cd':'Variant Title for a Musical Work (RDA 6.14.3)',
'ea:work:Form':'Form of Work (RDA 6.3)',
'ea:work:Date':'Date of Work (RDA 6.4)',
'ea:work:Place':'Place of Origin of the Work (RDA 6.5)',
'ea:work:Version':'Other Distinguishing Characteristic (RDA 6.6)',
'NatureOfContent':'Nature of the Content (RDA 7.2)',
'OtherAgentsAssociatedWithaWork':'Other Person, Family or Corp Assoc. (RDA 19.3)',//'Other Person, Family, or Corporate Body Associated (RDA 19.3)',
'OtherAgent':'Other Agent',
'RelationshipDesignator':'Relationship Designator',
'ea:subj:headers':'Subject of the Work (RDA Chapter 23)',
//expression
'Add_Expression':'Add Expression',
'ea:expres:title':'Title of Expression',
'ea:expres:Content':'Content Type (RDA 6.9)',
'ea:expres:Dates':'Date of Expr. (RDA 6.10)',
'ea:expres:Language':'Language of Expression (RDA 6.11)',
'SummaryofContent':'Summary of Content (RDA 7.10)',
'contributor':'Contributor (RDA 20.2)',
//manifestation
'Add_Manifestation':'Add Manifestation / BIBFRAME Instance - Monograph',
'ea:manif:Title_manif':'Title Proper (RDA 2.3.2)',
'ea:manif:Title_Remainder':'Parallel Title Proper (RDA 2.3.3)',
'ea:manif:Title_Responsibility':'Statement of Responsib. (RDA 2.4.2)',
'ea:manif:publications':'Publication Statement (RDA 2.8, 2.9, 2.10)',
'ea:manif:Publication_Place':'Place of Publication (RDA 2.8.2)',
'ea:manif:Publisher_Name':'Publisher \'s Name (RDA 2.8.4)',
'ea:manif:Publication_Date':'Date of Publication (RDA 2.8.6)',
'ea:manif:Distribution_Place':'Place of Distribution (RDA 2.9.2)',
'ea:manif:Distribution_Name':'Distributor’s Name (RDA 2.9.4)',
'ea:manif:Distribution_Date':'Date of Distribution (RDA 2.9.6)',
'ea:manif:Manufactur_Place':'Place of Manufacture (RDA 2.10.2)',
'ea:manif:Manufactur_Name':'Manufacturer’s Name (RDA 2.10.4)',
'ea:manif:Manufactur_Date':'Date (RDA 2.10.6)',
'ea:manif:Production_Place':'Place of Production',
'ea:manif:Production_Name':'Name of producer',
'ea:manif:Production_Date':'Date of production',
'ea:manif:Series':'Series Statement (RDA 2.12)',
'ea:manif:isbn_issn_ismn':'Identifier for the Manif. (RDA 2.15, 2.12.8)',
'ea:manif:ISBN':'Valid ISBN 10',
'ea:manif:ISBN_Terms':'Terms of availability',
'ea:manif:ISBN_Qualify':'Qualifier',
'ea:manif:ISBN_Canceled':'Invalid/Canceled ISBN 10',
'ea:manif:ISSN':'ISSN of Series (RDA 2.12.8)',
'ea:manif:ISSN_Cancelled':'Canceled ISSN',
//subject-chain
'subject_chain_primary_subj':'Primary subject',
'subject_chain_secondary_subj':'Subdivisions',
//place
'new_place':'New Place',
//relator
'relator_header_public': 'Relator Fields',
'relator':'relator',
'authoritative_label':'Authoritative Label',
'relator_label':'Relator Label',
'relator_pref_label':'Relator Pref Label',
'relator_code':'Relator Code',
'notation':'Notation',




};