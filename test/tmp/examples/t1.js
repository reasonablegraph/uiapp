//#PATH:/prepo/edit_step1?br=2&rd=auth-work
console.log("T1");


m1 = fc.getFieldModelOrCreate('dc:title:');
m1.value('WORK##2');

cJobFormSubmit();

jobs.push(function(context) {
	context['t1_status'] = ['finish'];
});

 jobs.push(function(context) {
 	context['PATH_tex2'] ='/prepo/edit_step1?br=2&rd=auth-work&FROM-T1';
 });


addStatus('finish');
