console.log("T5");

cPerson(1,{
	'title':'Doe, John',
	'keys':{'main':'PERSON1'}
});

cOrganization(1,{
	'title':'Publisher',
	'keys':{'main':'PUBLISHER1'}
});

cManifestation(1,{
	'keys':{'main':'MANIFESTATION1','publisher':'PUBLISHER1'}
});

cExpression(1,{
	'keys':{'main':'EXPRESSION1'}
});

cWork(1,{
	'keys':{main:'WORK1','author1':'PERSON1','expression1':'EXPRESSION1','manifestation1':'MANIFESTATION1'}
});

addStatus('finish');