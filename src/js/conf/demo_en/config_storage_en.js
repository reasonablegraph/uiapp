var language_default_inherited='_';
var language_default='en';
var languages_avail= {
		"_":"default",
		"":"N/A",
		el:"Ελληνικά",
		it:"Italian",
		en:"English",
		sp:"Spanish",
		fr:"French",
		de:"German",
//		sq:"Albanian",
//		bul:"Bulgarian",
//		tur:"Turkish",
//		sr:"Serbian",
		other:"(Other)"
	};

var contributor_publication_manif_map = {
	'ea:manif:Publisher_Name' : 'Publisher',
	'ea:manif:Distribution_Name' : 'Distributor',
	'ea:manif:Production_Name' : 'Producer',
	'ea:manif:Manufactur_Name' : 'Manufactur',
};

var contributor_manif_type_map = {
	'ea:manif:editorVersion' : 'Version editor',
	'ea:manif:authorPreface' : 'Preface author',
	'ea:manif:admissionAuthor' : 'Admission author',
	'ea:manif:distributor' : 'Distributor',
	'ea:manif:filmDistributor' : 'Film distributor',
	'ea:manif:publisher' : 'Publisher',
	'ea:manif:broadcaster' : 'Broadcaster',
	'ea:manif:manufacturer' : 'Manufacturer',
	'ea:manif:lithographer' : 'Lithographer',
	'ea:manif:etcher' : 'Etcher',
	'ea:manif:bookDesigner' : 'Book designer',
	'ea:manif:printer' : 'Printer',
	'ea:manif:engraver' : 'Engraver',
	'ea:manif:brailleEmbosser' : 'Braille embosser',
	'ea:manif:caster' : 'Caster',
	'ea:manif:collotyper' : 'Collotyper',
	'ea:manif:platemaker' : 'Platemaker',
	'ea:manif:printmaker' : 'Printmaker',
};

var contributor_work_type_map = {
	'ea:work:authorWork' : 'Author',
	'ea:work:sender' : 'Sender',
	'ea:work:landscapeArchitectWork' : 'Landscape Architect',
	'ea:work:architectWork' : ' Architect',
	'ea:work:sculptorWork' : 'Sculptor',
	'ea:work:directorOfPhotographyWork' : 'Director Of Photography',
	'ea:work:organizer' : 'Organizer',
	'ea:work:judgeWork' : 'Judge',
	'ea:work:donor' : 'Donor',
	'ea:work:defendantWork' : 'Defendant',
	'ea:work:plaintiffWork' : 'Plaintiff',
	'ea:work:editorWork' : 'Editor',
	'ea:work:researcher' : 'Researcher',
	'ea:work:productionCompanyWork' : 'Production Company',
	'ea:work:inventorWork' : 'Inventor',
	'ea:work:artistWork' : 'Artist',
	'ea:work:filmmakerWork' : 'Filmmaker',
	'ea:work:interviewerWork' : 'Interviewer',
	'ea:work:librettistWork' : 'Librettist',
	'ea:work:producerWork' : 'Producer',
	'ea:work:filmProducerWork' : 'Film Producer',
	'ea:work:radioProducerWork' : 'RadioProducer',
	'ea:work:televisionProducerWork' : 'TelevisionProducer',
	'ea:work:recipient' : 'Recipient',
	'ea:work:Interviewee' : 'Interviewee',
	'ea:work:programmerWork' : 'Programmer',
	'ea:work:screenwriterWork' : 'Screenwriter',
	'ea:work:directorWork' : 'Director',
	'ea:work:lyricistWork' : 'Lyricist',
	'ea:work:admissionAuthor' : 'Admission Author',
	'ea:work:authorPreface' : 'Author Preface',
	'ea:work:thesisAdvisor' : 'Thesis Advisor',
	'ea:work:congress' : 'Congress',
	'ea:work:co-organizer' : 'Co-organizer',
	'ea:work:composerWork' : 'Compose',
	'ea:work:compilerWork' : 'Compiler',
	'ea:work:designerWork' : 'Designerς',
	'ea:work:honoureeWork' : 'Honouree',
	'ea:work:photographerWork' : 'Photographer',
	'ea:work:cartographerWork' : 'Cartographer',
	'ea:work:choreographerWork' : 'Choreographer',
	'ea:work:courtGovernedWork' : 'Court governed',
	'ea:work:enactingJurisdictionWork' : 'Enacting jurisdiction ',
	'ea:work:jurisdictionGovernedWork' : 'Jurisdiction governed ',
	'ea:work:praesesWork' : 'Praeses ',
	'ea:work:respondentWork' : 'Respondent',
};

var contributor_express_type_map = {
'ea:expres:translator' : 'Translator',
'ea:expres:narrator' : 'Narrator',
'ea:expres:teacher' : 'Teacher',
'ea:expres:arrangerOfMusic' : 'ArrangerOfMusic',
'ea:expres:conductor' : 'Conductor',
'ea:expres:illustrator' : 'Illustrator',
'ea:expres:cinematographer' : 'Cinematographer',
'ea:expres:editor' : 'Editor',
'ea:expres:editorOfCompilation' : 'EditorOfCompilatio',
'ea:expres:singer' : 'Singer',
'ea:expres:performer' : 'Performer',
'ea:expres:artDirector' : 'ArtDirector',
'ea:expres:puppeteer' : 'Puppeteer',
'ea:expres:interviewer' : 'Interviewer',
'ea:expres:transcriber' : 'Transcriber',
'ea:expres:recordingEngineer' : 'RecordingEngineer',
'ea:expres:speaker' : 'Speaker',
'ea:expres:instrumentalist' : 'Instrumentalist',
'ea:expres:storyteller' : 'Storyteller',
'ea:expres:interviewee' : 'Interviewee',
'ea:expres:presenter' : 'Presenter',
'ea:expres:host' : 'Host',
'ea:expres:onScreenPresenter' : 'On Screen Presenter',
'ea:expres:writerOfAddedText' : 'Writer Of Added Text',
'ea:expres:writerOfAddedCommentary' : 'Writer Of Added Commentary',
'ea:expres:writerOfAddedLyrics' : 'Writer Of Added Lyrics',
'ea:expres:composer' : 'Composer',
'ea:expres:composerOfIncidentalMusic' : 'Composer OfIncidentalMusic',
'ea:expres:composerOfMusicForSilentFilm' : 'Composer Of Music For Silent Film',
'ea:expres:composerOfMusicForSoundFilm' : 'Composer Of Music For Sound Film',
'ea:expres:composerOfAdditionalMusic' : 'Composer Of Additional Music',
'ea:expres:productionDesigner' : 'Production Designer',
'ea:expres:commentator' : 'Commentator',
'ea:expres:surveyor' : 'Surveyor',
'ea:expres:dancer' : 'Dancer',
'ea:expres:choreographer' : 'Choreographer',
'ea:expres:photographer' : 'Photographer',
'ea:expres:abridger' : 'Abridger',
'ea:expres:animator' : 'Animator',
'ea:expres:costumeDesigner' : 'Costume designer',
'ea:expres:courtReporter' : 'Court reporter ',
'ea:expres:draftsman' : 'Draftsman',
'ea:expres:moderator' : 'Moderator',
'ea:expres:musicalDirector' : 'Musical director',
'ea:expres:panelist' : 'Panelist',
'ea:expres:recordist' : 'Recordist',
'ea:expres:stageDirector' : 'Stage director',
}


var contributor_item_type_map = {
'ea:item:dedicateeOfItem' : 'Dedicatee Of Item',
'ea:item:inscriberItem' : 'Inscriber',
'ea:item:binderItem' : 'Binder',
'ea:item:illuminatorItem' : 'Illuminator',
'ea:item:donorItem' : 'Donor',
'ea:item:curatorItem' : 'Curator',
'ea:item:depositorItem' : 'Depositor',
'ea:item:collectionRegistrarItem' : 'Collection Registrar',
'ea:item:ownerItem' : 'Owner',
'ea:item:formerOwnerItem' : 'Former Owner',
'ea:item:sellerItem' : 'Seller',
'ea:item:collectorItem' : 'Collector',
'ea:item:honoureeOfItem' : 'Honouree Of Item',
'ea:item:currentOwnerItem' : 'Current Owner',
'ea:item:custodianItem' : 'Custodian',
'ea:item:autographerItem' : 'Autographer',
'ea:item:restorationistItem' : 'Restorationist',
}


var relation_work_derivative_map = {
	'ea:relation:basedOnWork' : 'Based On Work',
	'ea:relation:derivativeWork' : 'Derivative Work',
	'ea:relation:musicalVariationsBasedOnWork' : 'Musical Variations Based On Work',
	'ea:relation:musicalVariationsWork' : 'Musical Variations Work',
	'ea:relation:abridgementOfWork' : 'Abridgement Of Work',
	'ea:relation:abridgedAsWork' : 'Abridged As Work',
	'ea:relation:digestOfWork' : 'Digest Of Work',
	'ea:relation:digestWork' : 'Digest Work',
	'ea:relation:adaptationOfWork' : 'Adaptation Of Work',
	'ea:relation:dramatizationOfWork' : 'Dramatization Of Work',
	'ea:relation:verseAdaptationOfWork' : 'VerseAdaptation Of Work',
	'ea:relation:motionPictureAdaptationOfWork' : 'Motion Picture Adaptation Of Work',
	'ea:relation:novelizationOfWork' : 'Novelization Of Work',
	'ea:relation:televisionAdaptationOfWork' : 'Television Adaptation Of Work',
	'ea:relation:radioAdaptationOfWork' : 'RadioAdaptation Of Work',
	'ea:relation:screenplayBasedOnWork' : 'Screen play Based On Work',
	'ea:relation:radioScriptBasedOnWork' : 'Radio Script Based On Work',
	'ea:relation:videoAdaptationOfWork' : 'Video Adaptation Of Work',
	'ea:relation:musicalTheatreAdaptationOfWork' : 'Musical Theatre Adaptation Of Work ',
	'ea:relation:operaAdaptationOf' : 'Opera Adaptation Of Work',
	'ea:relation:motionPictureScreenplayBasedOnWork' : 'Motion Picture Screen play Based On Work',
	'ea:relation:televisionScreenplayBasedOnWork' : 'Television Screen play Based On Work',
	'ea:relation:videoScreenplayBasedOnWork' : 'Video Screen play Based On Work',
	'ea:relation:adaptedAsWork' : 'Adapted As Work',
	'ea:relation:dramatizedAsWork' : 'Dramatized As Work',
	'ea:relation:verseAdaptationWork' : 'Verse Adaptation Work',
	'ea:relation:adaptedAsAMotionPictureWork' : 'Adapted As a Motion Picture Work',
	'ea:relation:novelizationWork' : 'Novelization Work',
	'ea:relation:adaptedAsATelevisionProgrammeWork' : 'Adapted As a Television Programme Work',
	'ea:relation:adaptedAsARadioProgrammeWork' : 'Adapted As a Radio Programme Work',
	'ea:relation:adaptedAsAScreenplayWork' : 'Adapted As a Screen play Work',
//	'ea:relation:adaptedAsARadioScriptWork' : 'Adapted as a Radio Script Work',
//	'ea:relation:adaptedAsAVideoWork' : 'Adapted as a Video Work',
//	'ea:relation:adaptedAsMusicalTheatreWork' : 'Adapted as musical theatre Work',
//	'ea:relation:adaptedAsOperaWork' : 'Adapted as opera Work',
//	'ea:relation:adaptedAsAMotionPictureScreenplayWork' : 'Adapted as a Motion Picture Screenplay Work',
//	'ea:relation:adaptedAsATelevisionScreenplayWork' : 'Adapted as a Television Screenplay Work',
//	'ea:relation:adaptedAsAVideoScreenplayWork' : 'Adapted as a Video Screenplay Work',
	'ea:relation:freeTranslationOfWork' : 'Free Translation Of Work',
	'ea:relation:freelyTranslatedAsWork' : 'Freely Translated As Work',
//	'ea:relation:musicalSettingOfWork' : 'Musical Setting of Work',
//	'ea:relation:musicalSettingWork' : 'Musical Setting Work',
	'ea:relation:summaryOfWork' : 'Summary Of Work',
	'ea:relation:summaryWork' : 'Summary Work',
//	'ea:relation:choreographyForWork' : 'Choreography for Work',
//	'ea:relation:choreographyWork' : 'Choreography Work',
//	'ea:relation:expandedVersionOfWork' : 'Expanded Version of Work',
//	'ea:relation:expandedAsWork' : 'Expanded as Work',
//	'ea:relation:remakeOfWork' : 'Remake of Work',
//	'ea:relation:remadeAsWork' : 'Remade as Work',
//	'ea:relation:paraphraseOfWork' : 'Paraphrase of Work',
//	'ea:relation:paraphrasedAsWork' : 'Paraphrased as Work',
//	'ea:relation:librettoBasedOnWork' : 'Libretto Based on Work',
//	'ea:relation:basisForLibrettoWork' : 'Basis for Libretto Work',
//	'ea:relation:abstractsForWork' : 'Abstracts for Work',
//	'ea:relation:abstractWork' : 'Abstract Work',
//	'ea:relation:abstractOfWork' : 'Abstract of Work',
//	'ea:relation:abstractedInWork' : 'Abstracted in Work',
//	'ea:relation:indexingForWork' : 'Indexing for Work',
//	'ea:relation:indexedInWork' : 'Indexed in Work',
//	'ea:relation:imitationOfWork' : 'Imitation of Work',
//	'ea:relation:imitatedAsWork' : 'Imitated as Work',
	'ea:relation:parodyOfWork' : 'Parody Of Work',
	'ea:relation:parodiedAsWork' : 'Parodied As Work',
};


var relation_work_descriptive_map = {
	'ea:relation:descriptionOfWork' : 'Description Of Work',
	'ea:relation:describedInWork' : 'Described In Work',
	'ea:relation:analysisOfWork' : 'Analysis Of Work',
	'ea:relation:analysedInWork' : 'Analysed In Work',
	'ea:relation:commentaryOnWork' : 'Commentary On Work',
	'ea:relation:commentaryInWork' : 'Commentary In Work',
	'ea:relation:critiqueOfWork' : 'Critique Of Work',
	'ea:relation:critiquedInWork' : 'Critiqued In Work',
	'ea:relation:evaluationOfWork' : 'Evaluation Of Work',
	'ea:relation:evaluatedInWork' : 'Evaluated In Work',
	'ea:relation:reviewOfWork' : 'Revie wOf Work',
	'ea:relation:reviewedInWork' : 'Reviewed In Work',
};

var relation_work_wholepart_map = {
	'ea:relation:containerOfIndependent' : 'Container Of Independent',
	'ea:relation:containedInIndividual' : 'Contained In Individual',
	'ea:relation:containerOfArticle' : 'Container Of Article',
	'ea:relation:containedInWorkArticles' : 'Contained In Wor kArticles',
	'ea:relation:containerOfIndividual' : 'Container Of Individual',
	'ea:relation:containedInAggregation' : 'Contained In Aggregation',
	'ea:relation:containerOfDocuments' : 'Container Of Documents',
	'ea:relation:containedInDocuments' : 'Contained In Documents',
	'ea:relation:containerOfDependent' : 'Container Of Dependent',
	'ea:relation:containedInDependent' : 'Contained In Dependent',
	'ea:relation:containerOfSeries' : 'Container Of Series',
	'ea:relation:containedInSeries' : 'Contained In Series',
	'ea:relation:containerOfSubseries' : 'Container Of Subseries',
	'ea:relation:containedInSubseries' : 'Contained In Subseries',
	'ea:relation:containerOfMusicTracks' : 'Container Of Music Tracks',
	'ea:relation:containedInMusicTracks' : 'Contained In Music Tracks',
	'ea:relation:containerOfSerialArticles' : 'Container Of Serial Articles',
	'ea:relation:containedInSerialArticles' : 'Contained In Serial Articles',
	'ea:relation:containerOfCorrespondence' : 'Container Of Correspondence',
	'ea:relation:containedInCorrespondence' : 'Contained In Correspondence',
	'ea:relation:containerOfLectures' : 'Container Of Lectures',
	'ea:relation:containedInLectures' : 'Contained In Lectures',
	'ea:relation:containerOfContributions' : 'Container Of Contributions',
	'ea:relation:containedInContributions' : 'Contained In Contributions',
	'ea:relation:containerOfSpeeches' : 'Container Of Speechesς',
	'ea:relation:containedInSpeeches' : 'Contained In Speeches',
};

var relation_work_accompanying_map = {
	'ea:relation:complementedByWork' : 'Complemented By Work',
	'ea:relation:librettoForWork' : 'Libretto For Work',
	'ea:relation:screenplayForWork' : 'Screen play For Work',
	'ea:relation:screenplayForTheMotionPictureWork' : 'Screen play For The Motion Picture Work',
	'ea:relation:screenplayForTheTelevisionProgrammeWork' : 'Screen play For The Television Programme Work',
	'ea:relation:screenplayForTheVideoWork' : 'Screen play For The Video Work',
	'ea:relation:scriptForTheRadioProgrammeWork' : 'Script For The Radio Programme Work',
	'ea:relation:screenplayWork' : 'Screen play Work',
	'ea:relation:augmentedByWork' : 'Augmented By Work',
	'ea:relation:cadenzaWork' : 'Cadenza Work',
	'ea:relation:errataWork' : 'Errata Work',
	'ea:relation:illustrationsWork' : 'Illustrations Work',
	'ea:relation:catalogueWork' : 'Catalogue Work',
	'ea:relation:concordanceWork' : 'Concordance Work',
	'ea:relation:supplementWork' : 'Supplement Work',
	'ea:relation:addendaWork' : 'Addenda Work',
	'ea:relation:appendixWork' : 'Appendix Work',
	'ea:relation:guideWork' : 'Guide Work',
	'ea:relation:findingAidWork' : 'Finding Aid Work',
	'ea:relation:indexWork' : 'Index Work',
	'ea:relation:augmentationOfWork' : 'Augmentation Of Work',
	'ea:relation:cadenzaComposedForWork' : 'Cadenza Composed for Work',
	'ea:relation:errataToWork' : 'Errata To Work',
	'ea:relation:illustrationsForWork' : 'Illustrations For Work',
	'ea:relation:catalogueOfWork' : 'Catalogue Of Work',
	'ea:relation:concordanceToWork' : 'Concordance To Work',
	'ea:relation:supplementToWork' : 'Supplement To Work',
	'ea:relation:addendaToWork' : 'Addenda To Work',
	'ea:relation:appendixToWork' : 'Appendix To Work',
	'ea:relation:guideToWork' : 'Guide To Work',
	'ea:relation:findingAidForWork' : 'Finding Aid for Work',
	'ea:relation:indexToWork' : 'index To Work',
};

var relation_work_sequential_map = {
	'ea:relation:absorptionInPartOfWork' : 'Absorption In Part Of Work',
	'ea:relation:replacementInPartOfWork' : 'Replacement In Part Of Work',
	'ea:relation:supersedesWork' : 'Supersedes Work',
	'ea:relation:supersedesInPartWork' : 'Supersedes In Part Work',
	'ea:relation:replacementOfWork' : 'Replacement Of Work',
	'ea:relation:absorbedByWork' : 'Absorbed By Work',
	'ea:relation:absorptionOfWork' : 'Absorption Of Work',
	'ea:relation:absorbedInPartByWork' : 'Absorbed In Part By Work',
	'ea:relation:succeededByWork' : 'Succeeded By Work',
	'ea:relation:mergedToFormWork' : 'Merged To Form Work',
	'ea:relation:mergedWithToFormWork' : 'Merged With To Form Work',
	'ea:relation:precededByWork' : 'Preceded By Work',
	'ea:relation:continuedByWork' : 'Continued By Work',
	'ea:relation:continuationInPartOfWork' : 'Continuation In Part Of Work',
	'ea:relation:continuedInPartByWork' : 'Continue dIn Part By Workk',
	'ea:relation:continuationOfWork' : 'Continuation Of Work',
	'ea:relation:mergerOfWork' : 'Merger Of Work',
	'ea:relation:separatedFromWork' : 'Separated From Work',
	'ea:relation:prequel' : 'Prequel Work',
	'ea:relation:sequelTo' : 'Sequel to Work',
};

var relation_expres_derivative_map = {
	'ea:relation:dramatizationOfExpression' : 'Dramatization Of Expression',
	'ea:relation:dramatizedAsExpression' : 'Dramatized As Expression',
	'ea:relation:freeTranslationOfExpression' : 'Free Translation Of Expression',
	'ea:relation:expandedAsExpression' : 'Expanded As Expression',
	'ea:relation:expandedVersionOfExpression' : 'Expanded Version Of Expression',
	'ea:relation:abridgementOfExpression' : 'Abridgement Of Expression',
	'ea:relation:abridgedAsExpression' : 'Abridged As Expression',
	'ea:relation:motionPictureAdaptationOfExpression' : 'Motion Picture Adaptation Of Expression',
	'ea:relation:freelyTranslatedAsExpression' : 'Freely Translated As Expression',
	'ea:relation:translationOfExpression' : 'Translation Of Expression',
	'ea:relation:translatedAsExpression' : 'Translated As Expression',
	'ea:relation:musicalSettingOfExpression' : 'Musical Setting Of Expression',
	'ea:relation:musicalSettingExpression' : 'Musical Setting Expression',
	'ea:relation:summaryOfExpression' : 'Summary Of Expression',
	'ea:relation:summaryExpression' : 'Summary Expressionn',
	'ea:relation:adaptationOfExpression' : 'Adaptation Of Expression',
	'ea:relation:novelizationOfExpression' : 'Novelization Of Expression',
	'ea:relation:adaptedAsExpression' : 'Adapted As Expression',
	'ea:relation:novelizationExpression' : 'Novelization Expression',
	'ea:relation:verseAdaptationOfExpression' : 'Verse Adaptation Of Expression',
	'ea:relation:choreographyForExpression' : 'Choreography For Expression',
	'ea:relation:choreographyExpression' : 'Choreography Expression',
};

var relation_expres_descriptive_map = {
	'ea:relation:analysedInExpression' : 'Analysed In Expression',
	'ea:relation:analysisOfExpression' : 'Analysis Of Expression',
	'ea:relation:evaluatedInExpression' : 'Evaluated In Expression',
	'ea:relation:evaluationOfExpression' : 'Evaluation Of Expression',
	'ea:relation:critiquedInExpression' : 'Critiqued In Expression',
	'ea:relation:critiqueOfExpression' : 'Critique Of Expression',
	'ea:relation:describedInExpression' : 'Described In Expression',
	'ea:relation:descriptionOfExpression' : 'Description Of Expression',
	'ea:relation:commentaryOnExpression' : 'Commentary On Expression',
	'ea:relation:commentaryInExpression' : 'Commentary In Expression',
	'ea:relation:reviewOfExpression' : 'Review of Expression',
	'ea:relation:reviewedInExpression' : 'Reviewed in Expression',
};

var relation_expres_wholepart_map = {
	'ea:relation:containedInExpression' : 'Contained In Expression',
	'ea:relation:containerOfExpression' : 'Container Of Expression',
};


var relation_expres_accompanying_map = {
'ea:relation:illustrationsForExpression':'Illustrations For Expression',
'ea:relation:illustrationsExpression':'Illustrations Expression',
'ea:relation:augmentedByExpression':'Augmented By Expression',
'ea:relation:augmentationOfExpression':'Augmentation Of Expression',
'ea:relation:indexExpression':'Index Expression',
'ea:relation:indexToExpression':'Index To Expression',
'ea:relation:catalogueExpression':'Catalogue Expression',
'ea:relation:catalogueOfExpression':'Catalogue Of Expression',
'ea:relation:guideExpression':'Guide Expression',
'ea:relation:guideToExpression':'Guide To Expression',
'ea:relation:appendixExpression':'Appendix Expression',
'ea:relation:appendixToExpression':'Appendix To Expression',
'ea:relation:errataExpression':'Errata Expression',
'ea:relation:errataToExpression':'Errata To Expression',
'ea:relation:addendaToExpression':'Addenda To Expression',
'ea:relation:screenplayForExpression':'Screenplay For Expression',
'ea:relation:screenplayForTheVideoExpression':'Screenplay For The Video Expression',
'ea:relation:screenplayForTheMotionPictureExpression':'Screenplay For The Motion Picture Expression',
'ea:relation:scriptForTheRadioProgrammeExpression':'Script For The Radio Programme Expression',
'ea:relation:screenplayForTheTelevisionProgrammeExpression':'Screenplay For The Television Programme Expression',
'ea:relation:supplementExpression':'Supplement Expression',
'ea:relation:supplementToExpression':'Supplement To Expression',
'ea:relation:complementedByExpression':'Complemented By Expression',
'ea:relation:addendaExpression':'Addenda Expression',
'ea:relation:cadenzaComposedForExpression':'Cadenza Composed For Expression',
'ea:relation:cadenzaExpression':'Cadenza Expression',
'ea:relation:concordanceExpression':'Concordance Expression ',
'ea:relation:concordanceToExpression':'Concordance του Expression ',
'ea:relation:librettoExpression':'Expression Libretto ',
'ea:relation:radioScriptExpression':'Radio Script Expression',
'ea:relation:screenplayExpression':'Screenplay Expression',
'ea:relation:videoScreenplayExpression':'Video Screenplay Expression',
'ea:relation:motionPictureScreenplayExpression':'Motion Picture Screenplay Expression',
'ea:relation:televisionScreenplayExpression':'Television Screenplay Expression',
'ea:relation:findingAidExpression':'Finding Aid Expression ',
'ea:relation:findingAidForExpression':'Finding Aid for Expression ',
'ea:relation:librettoForExpression':'Libretto for Expression ',
};


var relation_expres_sequential_map = {
		'ea:relation:replacedByExpression' : 'Replaced By Expression',
		'ea:relation:replacedInPartByExpression' : 'Replaced In Part By Expression',
		'ea:relation:supersededByExpression' : 'Superseded By Expression',
		'ea:relation:supersededInPartByExpression' : 'Superseded In Part By Expression',
		'ea:relation:supersedesExpression' : 'Supersedes Expression',
		'ea:relation:supersedesInPartExpression' : 'Supersedes In Part Expression',
		'ea:relation:replacementOfExpression' : 'Replacement Of Expression',
		'ea:relation:replacementInPartOfExpression' : 'Replacement In Part Of Expression',
		'ea:relation:absorbedByExpression' : 'Absorbed By Expression',
		'ea:relation:absorptionOfExpression' : 'Absorption Of Expression',
		'ea:relation:absorptionInPartOfExpression' : 'Absorption In Part Of Expression',
		'ea:relation:absorbedInPartByExpression' : 'Absorbed In Part By Expression',
		'ea:relation:succeededByExpression' : 'Succeeded By Expression',
		'ea:relation:mergedToFormExpression' : 'Merged To Form Expression',
		'ea:relation:mergedWithToFormExpression' : 'Merged With... To Form Expressionn',
		'ea:relation:precededByExpression' : 'Preceded By Expression',
		'ea:relation:continuationOfExpression' : 'Continuation Of Expression',
		'ea:relation:continuedByExpression' : 'Continued By Expression',
		'ea:relation:continuedInPartByExpression' : 'Continued In Part By Expression',
		'ea:relation:continuationInPartOfExpression' : 'Continuation In Part Of Expression',
		'ea:relation:mergerOfExpression' : 'Merger Of Expression',
		'ea:relation:separatedFromExpression' : 'Separated From Expression',
		'ea:relation:splitIntoExpression' : 'Split Into Expression',
};

var relation_name_not_map = {
	'ea:relation:OrganizationAlter_full_name_not' : 'Full name',
	'ea:relation:OrganizationAlterEarlier_name_not' : 'Earlier name',
	'ea:relation:OrganizationAlterLater_name_not' : 'Later name',
	'ea:relation:OrganizationAlterAcronym_name_not' : 'Acronym name',
	'ea:relation:OrganizationAlterOther_name_not' : 'Other name',
};

var relation_alter_map = {
	'ea:relation:OrganizationAlter_full_name' : 'Full name',
	'ea:relation:OrganizationAlterEarlier' : 'Earlier name',
	'ea:relation:OrganizationAlterLater' : 'Later name',
	'ea:relation:OrganizationAlterAcronym' : 'Acronym name',
	'ea:relation:OrganizationAlterOther' : 'Other name',
};

var relation_organization_see_also_organization_map = {
	'ea:relation:OrganizationOtherOther' : 'Other Organization',
	'ea:relation:OrganizationOtherCompetitor' : 'Competitor',
	'ea:relation:OrganizationOtherSuccessor' : 'Successor',
	'ea:relation:OrganizationOtherorganized' : 'Organized',
	'ea:relation:OrganizationOtherOrganizer' : 'Organizer',
	'ea:relation:OrganizationOtherUnited' : 'United',
	'ea:relation:OrganizationOtherUnite' : 'Unite',
	'ea:relation:OrganizationOtherSubordinate' : 'Subordinate',
	'ea:relation:OrganizationOtherOwners' : 'Owners',
	'ea:relation:OrganizationOtherOwnedBy' : 'Owned By',
	'ea:relation:OrganizationOtherFounders' : 'Founders',
	'ea:relation:OrganizationOtherFoundedBy' : 'Founded By',
	'ea:relation:OrganizationOtherMeberHas' : 'Meber Has',
	'ea:relation:OrganizationOtherMeber' : 'Meber',
	'ea:relation:OrganizationOtherLarger' : 'Larger Organization',
	'ea:relation:OrganizationAnnex' : 'Annex',
	'ea:relation:OrganizationAnnexs' : 'Annexs',
	'ea:relation:OrganizationOtherPredecessor' : 'Predecessor',
	'ea:relation:OrganizationOtherMerged' : 'Merged',
	'ea:relation:OrganizationOtherMerge' : 'Merge',
	'ea:relation:OrganizationOtherAllies' : 'Allies',
	'ea:relation:OrganizationParticipate' : 'Participate',
	'ea:relation:OrganizationParticipants' : 'Participants',
	'ea:relation:OrganizationOtherCollaborating' : 'Collaborating',
	'ea:relation:OrganizationOtherCooperative' : 'Cooperative',
	'ea:relation:OrganizationInstitutions' : 'Institutions',
	'ea:relation:OrganizationInstitution' : 'Institution',
	'ea:relation:OrganizationPart' : 'Part',
	'ea:relation:OrganizationParts' : 'Parts',
};

var relation_person_see_map = {
	'ea:relation:PersonAlterWork' : 'Given Name',
	'ea:relation:PersonAlterOfficial' : 'Official Name',
	'ea:relation:PersonAlterReligion' : 'Religion Name',
	'ea:relation:PersonAlterPseudonymShared' : 'Pseudonym Shared',
	'ea:relation:PersonAlterSecular' : 'Secular Name',
	'ea:relation:PersonAlterBeforeMarriage' : 'Name Before Marriage',
	'ea:relation:PersonAlterReal' : 'Real Name',
	'ea:relation:PersonAlterMarried' : 'Married Name',
	'ea:relation:PersonAlterPseudonym' : 'Pseudonym',
	'ea:relation:PersonAlterOther' : 'Other Name',
};

var relation_person_see_map_alter = {

	'ea:relation:PersonAlterWork_alter' : 'Given Name',
	'ea:relation:PersonAlterOfficial_alter' : 'Official Name',
	'ea:relation:PersonAlterReligion_alter' : 'Religion Name',
	'ea:relation:PersonAlterPseudonymShared_alter' : 'Pseudonym Shared',
	'ea:relation:PersonAlterSecular_alter' : 'Secular Name',
	'ea:relation:PersonAlterBeforeMarriage_alter' : 'Name Before Marriage',
	'ea:relation:PersonAlterReal_alter' : 'Real Name',
	'ea:relation:PersonAlterMarried_alter' : 'Married Name',
	'ea:relation:PersonAlterPseudonym_alter' : 'Pseudonym',
	'ea:relation:PersonAlterOther_alter' : 'Other Name',
};

var relation_person_see_also_person_map = {
	'ea:relation:PersonOtherSibling' : 'Sibling',
	'ea:relation:PersonOtherNephews' : 'Nephews',
	'ea:relation:PersonOtherParent' : 'Parent',
	'ea:relation:PersonOtherDescendant' : 'Descendant',
	'ea:relation:PersonOtherUncles' : 'Uncles',
	'ea:relation:PersonOtherChild' : 'Child',
	'ea:relation:PersonOtherProgenitor' : 'Progenitor',
	'ea:relation:PersonOtherMarriage' : 'Marriage',
	'ea:relation:PersonOtherCousins' : 'Cousins',
	'ea:relation:PersonOtherOther' : 'Other',
};

var relation_family_see_also_person_map = {
	'ea:relation:FamilyPersonFoundedBy' : 'Founded By',
	'ea:relation:FamilyPersonMeberHas' : 'Has Meber',
};

var relation_person_see_also_person_family_map = {
	'ea:relation:PersonOtherDescendant' : 'Descendant',
	'ea:relation:PersonOtherProgenitor' : 'Progenitor',
	'ea:relation:PersonOtherOther' : 'Other relation',
};

var relation_person_see_also_organization_map = {
	'ea:relation:PersonOrganizationUnknown' : 'Unknown relation type',
	'ea:relation:PersonOrganizationAcademic' : 'Academic',
	'ea:relation:PersonOrganizationCommissioned' : 'Commissioned',
	'ea:relation:PersonOrganizationVicePresident' : 'Vice President',
	'ea:relation:PersonOrganizationRegent' : 'Regent',
	'ea:relation:PersonOrganizationUnspecified' : 'Unspecified relation type',
	'ea:relation:PersonOrganizationLeader' : 'Leader',
	'ea:relation:PersonOrganizationArchbishop' : 'Archbishop',
	'ea:relation:PersonOrganizationParliament' : 'Parliament',
	'ea:relation:PersonOrganizationGeneralsecretary' : 'General secretary',
	'ea:relation:PersonOrganizationSecretary' : 'Secretary',
	'ea:relation:PersonOrganizationMayor' : 'Mayor',
	'ea:relation:PersonOrganizationManager' : 'Manager',
	'ea:relation:PersonOrganizationCommander' : 'Commander',
	'ea:relation:PersonOrganizationTeacher' : 'Teacher',
	'ea:relation:PersonOrganizationResearcher' : 'Researcher',
	'ea:relation:PersonOrganizationHead' : 'Head',
	'ea:relation:PersonOrganizationOwnedBy' : 'Owned By',
	'ea:relation:PersonOrganizationFoundedBy' : 'Founded By',
	'ea:relation:PersonOrganizationMeberHas' : 'Has Meber',
	'ea:relation:PersonOrganizationShareholder' : 'Shareholder',
	'ea:relation:PersonOrganizationMetropolitan' : 'Metropolitan',
	'ea:relation:PersonOrganizationMonarch' : 'Monarch',
	'ea:relation:PersonOrganizationPatriarch' : 'Patriarch',
	'ea:relation:PersonOrganizationRegional' : 'Regional',
	'ea:relation:PersonOrganizationPolitician' : 'Politician',
	'ea:relation:PersonOrganizationPresident' : 'President',
	'ea:relation:PersonOrganizationRector' : 'Rector',
	'ea:relation:PersonOrganizationPrimeminister' : 'Primeminister',
	'ea:relation:PersonOrganizationStrain' : 'Strain',
	'ea:relation:PersonOrganizationSoldier' : 'Soldier',
	'ea:relation:PersonOrganizationAdvisor' : 'Advisor',
	'ea:relation:PersonOrganizationCo-founder' : 'Co-founder',
	'ea:relation:PersonOrganizationEmployee' : 'Employee',
	'ea:relation:PersonOrganizationNoncommissioned' : 'Noncommissioned',
	'ea:relation:PersonOrganizationDeputyhead' : 'Deputyhead',
	'ea:relation:PersonOrganizationMinister' : 'Minister',
	'ea:relation:PersonOrganizationDeputyminister' : 'Deputyminister',
};


var relation_organization_see_also_person_map = {
		'ea:relation:OrganizationPersonUnknown' : 'Unknown relation type',
		'ea:relation:OrganizationPersonAcademic' : 'Academic',
		'ea:relation:OrganizationPersonCommissioned' : 'Commissioned',
		'ea:relation:OrganizationPersonVicePresident' : 'Vice President',
		'ea:relation:OrganizationPersonRegent' : 'Regent',
		'ea:relation:OrganizationPersonUnspecified' : 'Unspecified relation type',
		'ea:relation:OrganizationPersonLeader' : 'Leader',
		'ea:relation:OrganizationPersonArchbishop' : 'Archbishop',
		'ea:relation:OrganizationPersonParliament' : 'Parliament',
		'ea:relation:OrganizationPersonGeneralsecretary' : 'General secretary',
		'ea:relation:OrganizationPersonSecretary' : 'Secretary',
		'ea:relation:OrganizationPersonMayor' : 'Mayor',
		'ea:relation:OrganizationPersonManager' : 'Manager',
		'ea:relation:OrganizationPersonCommander' : 'Commander',
		'ea:relation:OrganizationPersonTeacher' : 'Teacher',
		'ea:relation:OrganizationPersonResearcher' : 'Researcher',
		'ea:relation:OrganizationPersonHead' : 'Head',
		'ea:relation:OrganizationPersonOwnedBy' : 'Owned By',
		'ea:relation:OrganizationPersonFoundedBy' : 'Founded By',
		'ea:relation:OrganizationPersonMeberHas' : 'Has Meber',
		'ea:relation:OrganizationPersonShareholder' : 'Shareholder',
		'ea:relation:OrganizationPersonMetropolitan' : 'Metropolitan',
		'ea:relation:OrganizationPersonMonarch' : 'Monarch',
		'ea:relation:OrganizationPersonPatriarch' : 'Patriarch',
		'ea:relation:OrganizationPersonRegional' : 'Politician',
		'ea:relation:OrganizationPersonPolitician' : 'Politician',
		'ea:relation:OrganizationPersonPresident' : 'President',
		'ea:relation:OrganizationPersonRector' : 'Rector',
		'ea:relation:OrganizationPersonPrimeminister' : 'Primeminister',
		'ea:relation:OrganizationPersonStrain' : 'Strain',
		'ea:relation:OrganizationPersonSoldier' : 'Soldier',
		'ea:relation:OrganizationPersonAdvisor' : 'Advisor',
		'ea:relation:OrganizationPersonCo-founder' : 'Co-founder',
		'ea:relation:OrganizationPersonEmployee' : 'Employee',
		'ea:relation:OrganizationPersonNoncommissioned' : 'Noncommissioned',
		'ea:relation:OrganizationPersonDeputyhead' : 'Deputyhead',
		'ea:relation:OrganizationPersonMinister' : 'Minister',
		'ea:relation:OrganizationPersonDeputyminister' : 'Deputyminister',
};


var relation_organization_see_also_family_map = {
	'ea:relation:OrganizationFamilyMeberHas' : 'Has Meber',
	'ea:relation:OrganizationFamilyFoundedBy' : 'Founded By',
	'ea:relation:OrganizationFamilyOwnedBy' : 'Owned By',
	};

var relation_family_see_also_organization_map = {
		'ea:relation:OrganizationFamilyMeberHas' : 'Has Meber',
		'ea:relation:OrganizationFamilyFoundedBy' : 'Founded By',
		'ea:relation:OrganizationFamilyOwnedBy' : 'Owned By',
		};

var relation_person_see_also_family_map = {
	'ea:relation:PersonFamilyMember' : 'Member',
	'ea:relation:PersonFamilyFounder' : 'Founder',
};

var relation_person_other_language_map = {
	'ea:relation:Language' : 'Term in other Language',
};

var relation_equivalent_map = {
	'ea:relation:reproductionOfManifestation' : 'Reproduction Of Manifestation',
	'ea:relation:reproducedAsManifestation' : 'Reproduced As Manifestation',
	'ea:relation:reprintOfManifestation' : 'Reprint Of Manifestation',
	'ea:relation:reprintedAs' : 'Reprinted As',
	'ea:relation:alsoIssuedAs' : 'Also Issued As Manifestation',
	'ea:relation:electronicReproduction' : 'Electronic Reproduction',
	'ea:relation:electronicReproductionOfManifestation' : 'Electronic Reproduction Of Manifestation',
	'ea:relation:equivalentManifestation' : 'Equivalent Manifestation',
	'ea:relation:facsimileOfManifestation' : 'Facsimile Of Manifestation',
	'ea:relation:facsimile' : 'Facsimile',
	'ea:relation:digitalTransferManifestation' : 'Digital Transfer Manifestation',
	'ea:relation:digitalTransfer' : 'Digital Transfer',
	'ea:relation:mirrorSiteManifestation' : 'Mirror Site Manifestation',
	'ea:relation:preservationFacsimile' : 'Preservation Facsimile',
	'ea:relation:preservationFacsimileOfManifestation' : 'Preservation Facsimile of Manifestation',
};


var relation_descriptive_map = {
	'ea:relation:descriptionOfManifestation' : 'Description Of Manifestation',
	'ea:relation:analysisOfManifestation' : 'Analysis Of Manifestation',
	'ea:relation:commentaryOnManifestation' : 'Commentary On Manifestation',
	'ea:relation:critiqueOfManifestation' : 'Critique Of Manifestation',
	'ea:relation:evaluationOfManifestation' : 'Evaluation Of Manifestation',
	'ea:relation:reviewOfManifestation' : 'Review Of Manifestation',
};

var relation_wholepart_map = {
	'ea:relation:containedInManifestation' : 'Contained In Manifestation',
	'ea:relation:insertedIn' : 'Inserted In',
	'ea:relation:specialIssueOf' : 'Special Issue Of',
	'ea:relation:facsimileContainedIn' : 'Facsimile Contained In',
	'ea:relation:containerOfManifestation' : 'Container Of Manifestation',
	'ea:relation:insert' : 'Insert',
	'ea:relation:specialIssue' : 'Special Issue',
	'ea:relation:facsimileContainerOf' : 'Facsimile Container Of',
};


var relation_accompanying_map = {
	'ea:relation:accompaniedByManifestation' : 'Accompanied By Manifestation',
	'ea:relation:issuedWith' : 'Issued With Manifestation',
	'ea:relation:filmedWithManifestation' : 'Filmed With Manifestation',
	'ea:relation:onDiscWithManifestation' : 'On Disc With Manifestation',
};

var relation_concept_alter_map_not_term = {
	'ea:relation:TermAlterSee_Alternative_not_term' : 'Alternative Name',
	'ea:relation:TermAlterSee_official_not_term' : 'Official Name',
	'ea:relation:TermAlterSee_full_name_not_term' : 'Full Name',
	'ea:relation:TermAlterSee_acronym_not_term' : 'Acronym',
	'ea:relation:TermAlterSee_Variant_not_term' : 'Variant Name',
	'ea:relation:TermAlterSee_Other_not_term' : 'Other Name',
};

var relation_concept_alter_map = {
		'ea:relation:TermAlterSee_Alternative' : 'Alternative Name',
		'ea:relation:TermAlterSee_official' : 'Official Name',
		'ea:relation:TermAlterSee_full_name' : 'Full Name',
		'ea:relation:TermAlterSee_acronym' : 'Acronym',
		'ea:relation:TermAlterSee_Variant' : 'Variant Name',
		'ea:relation:TermAlterSee_Other' : 'Other Name',
	};

var relation_place_alter_map_not_term = {
			'ea:relation:TermAlterSee_Alternative_not_term' : 'Alternative Name',
			'ea:relation:TermAlterSee_Variant_new_not_term' : 'New Name',
			'ea:relation:TermAlterSee_Variant_old_not_term' : 'Old Name',
			'ea:relation:TermAlterSee_Other_not_term' : 'Other Name',
		};

var relation_place_alter_map = {
		'ea:relation:TermAlterSee_Alternative' : 'Alternative Name',
		'ea:relation:TermAlterSee_Variant_new' : 'New Name',
		'ea:relation:TermAlterSee_Variant_old' : 'Old Name',
		'ea:relation:TermAlterSee_Other' : 'Other Name',
		};


var relation_place_organization_map = {
		'ea:relation:PlaceOrganizationMunicipal' : 'Municipal',
		'ea:relation:PlaceOrganizationMunicipal_Unity' : 'Municipal Unity',
		'ea:relation:PlaceOrganizationEducational' : 'Educational',
		'ea:relation:PlaceOrganizationCommunity' : 'Community',
		'ea:relation:PlaceOrganizationState' : 'State',
		'ea:relation:PlaceOrganizationAdministrative' : 'Administrative',
		'ea:relation:PlaceOrganizationRegional' : 'Regional',
		'ea:relation:PlaceOrganizationUnknown' : 'Unknown relation',
};


var relation_place_other_map = {
		'ea:relation:Encloses':'Encloses',
		'ea:relation:Enclosed':'Enclosed',
		'ea:relation:EnclosesPartially':'Encloses Partially',
		'ea:relation:EnclosedPartially':'Enclosed Partially',
		'ea:relation:Proximity':'Proximity',
		'ea:relation:ProximityEast':'Proximity East',
		'ea:relation:ProximityWest':'Proximity West',
		'ea:relation:ProximityNorth':'Proximity North',
		'ea:relation:ProximitySouth':'Proximity South',
		'ea:relation:ProximityNorthEast':'Proximity NorthEast',
		'ea:relation:ProximityNorthWest':'Proximity NorthWest',
		'ea:relation:ProximitySouthEast':'Proximity SouthEast',
		'ea:relation:ProximitySouthWest':'Proximity SouthWest',
};

var relation_term_other_map = {
	'ea:relation:TermOtherEarlier' : 'Earlier Name',
	'ea:relation:TermOtherLater' : 'Later Name',
	'ea:relation:TermOtherBroader' : 'Broader Term',
	'ea:relation:TermOtherNarrower' : 'Narrower Term',
	'ea:relation:TermOtherCategory' : 'Category',
	'ea:relation:TermOtherSubategory' : 'Subategory',
	'ea:relation:TermOtherOther' : 'Other Related Term',
	'ea:relation:TermOtherEquivalent' : 'Equivalent Term',
};

var relation_subject_chain_related_other_map = {
		'ea:relation:SubjectChainRelatedOther' : 'Related Term',
};

var	subject_type_map = {
	'ea:subj:work':'Work',
	'ea:subj:person':'Person/Family/Organization',
	'ea:subj:concept':'Concept',
	'ea:subj:object':'Object',
	'ea:subj:event':'Event',
	'ea:subj:place':'Place',
	'ea:subj:form':'Form',
};


var	primary_subject_type_map = {
	'ea:subj:work:primary':'Work',
	'ea:subj:person:primary':'Person/Family/Organization',
	'ea:subj:concept:primary':'Concept',
	'ea:subj:object:primary':'Object',
	'ea:subj:event:primary':'Event',
	'ea:subj:place:primary':'Place',
	'ea:subj:form:primary':'Form',
};


var	primary_subject_obj_type_map = {
		'ea:subj:work:primary':'auth-work',
		'ea:subj:person:primary':'actor',
		'ea:subj:concept:primary':'auth-concept',
		'ea:subj:object:primary':'auth-object',
		'ea:subj:event:primary':'auth-event',
		'ea:subj:place:primary':'auth-place',
		'ea:subj:form:primary':'auth-genre',
	};

var	subject_obj_type_map = {
		'ea:subj:work':'auth-work',
		'ea:subj:person':'actor',
		'ea:subj:concept':'auth-concept',
		'ea:subj:object':'auth-object',
		'ea:subj:event':'auth-event',
		'ea:subj:place':'auth-place',
		'ea:subj:form':'auth-genre',
	};


var expres_frequency_map = {
		'ea:expres:FrequencyTable_u':'Unknown',
		'ea:expres:FrequencyTable_z':'Other',
		'ea:expres:FrequencyTable_|':'No frequency applies',
		'ea:expres:FrequencyTable_#':'No frequency is determined',
		'ea:expres:FrequencyTable_g':'Biennial',
		'ea:expres:FrequencyTable_b':'Bimonthly',
		'ea:expres:FrequencyTable_c':'Twice a week',
		'ea:expres:FrequencyTable_s':'Twice a month',
		'ea:expres:FrequencyTable_w':'Weekly',
		'ea:expres:FrequencyTable_f':'Biannual',
		'ea:expres:FrequencyTable_a':'Yearly',
		'ea:expres:FrequencyTable_e':'Every two weeks',
		'ea:expres:FrequencyTable_d':'Daily',
		'ea:expres:FrequencyTable_m':'Monthly',
		'ea:expres:FrequencyTable_k':'Continuously updated',
		'ea:expres:FrequencyTable_i':'Three times a week',
		'ea:expres:FrequencyTable_j':'Three times a month',
		'ea:expres:FrequencyTable_t':'Three times a year',
		'ea:expres:FrequencyTable_h':'Three-Year',
		'ea:expres:FrequencyTable_q':'Quarterly',
}


var relation_item_equivalent_map = {
		'ea:relation:equivalentItem' : 'Equivalent Item',
		'ea:relation:reproductionOfItem' : 'Reproduction Of Item',
		'ea:relation:digitalTransferOfItem' : 'DigitalTransfer Of Item',
		'ea:relation:electronicReproductionOfItem' : 'Electronic Reproduction Of Item',
		'ea:relation:facsimileOfItem' : 'Facsimile Of Item',
		'ea:relation:preservationFacsimileOfItem' : 'Preservation Facsimile Of Item',
		'ea:relation:reprintOfItem' : 'Reprint Of Item',
	};

	var relation_item_descriptive_map = {
		'ea:relation:descriptionOfItem' : 'Description Of Item',
		'ea:relation:analysisOfItem' : 'Analysis Of Item',
		'ea:relation:commentaryOnItem' : 'Commentary On Item',
		'ea:relation:critiqueOfItem' : 'Critique Of Item',
		'ea:relation:evaluationOfItem' : 'Evaluation Of Item',
		'ea:relation:reviewOfItem' : 'Review Of Item',
	};

	var relation_item_wholepart_map = {
		'ea:relation:containedInItem' : 'Contained In Item',
		'ea:relation:containerOfItem' : 'Container Of Item',
	};

	var relation_item_accompanying_map = {
		'ea:relation:accompaniedByItem' : 'Accompanied By Item',
		'ea:relation:boundWith' : 'Bound With',
		'ea:relation:filmedWithItem' : 'Filmed With Item',
		'ea:relation:onDiscWithItem' : 'On Disc With Item',
	};


	var lemma_category_relation_map = {
			'ea:category:parent' : 'Parent category',
			'ea:category:child' : 'Child category (subcategory)',
		};



	var item_type_map= {
			'undefined':'Undefined',
			'pdf':'PDF',
			'daisy':'DAISY text',
			'epub':'EPUB',
			'docx':'DOCX',
			'doc':'DOC',
			'mp3':'MP3',
			'wav':'WAV',
			'wma':'WMA',
			'zip':'ZIP',
			'rar':'RAR',
			'7z':'7Z',
			'png':'PNG',
	};

