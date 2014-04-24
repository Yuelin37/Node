function Person (name){
	this.name = name;
}

var jobs = new Person('jobs');


// line 9 and 10 do the same thing as line 5
var jobs = {}; // new Object()
Person.call(jobs, 'jobs');