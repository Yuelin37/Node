var jobs = {
	setName: function(name) {
		this.name = name;
	}
}

var method = jobs.setName;
method('jobs');
jobs.setName('gates');