var list = [];
var	date = new Date('2014-02-20');

var endDate = new Date('2014-03-05');

while (date <= endDate) {
	var tmpDate = new Date(date);
	date.setDate(date.getDate() + 1);
	list.push(tmpDate);
	console.log(tmpDate);
}

console.log(list);