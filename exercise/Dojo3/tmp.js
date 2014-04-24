var options = {
	Append: function() {},
	Render: function() {}
};

for (prop in options) {
	console.log(prop);
	console.log(options[prop]);
}