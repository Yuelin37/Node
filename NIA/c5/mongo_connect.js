var mongodb = require('mongodb'),
	server = new mongodb.Server('127.0.0.1', 27017, {});
var client = new mongodb.Db('mtest', server);

client.open(function(err) {
	if (err) throw err;
	client.collection('test_insertabd', function(err, collection) {
		if (err) throw err;
		console.log('We are now able to perform queries.');
		collection.insert({
				"title": "I like cake",
				"body": "It is quite good."
			}, {
				safe: true
			},
			function(err, documents) {
				if (err) throw err;
				console.log('Document ID is: ' + documents[0]._id);
			}
		);
		var _id = new client.bson_serializer
			.ObjectID('4e650d344ac74b5a01000001');
		collection.update({
				_id: _id
			}, {
				$set: {
					"title": "I ate too much cake"
				}
			}, {
				safe: true
			},
			function(err) {
				if (err) throw err;
			}
		);

		collection.find({
			"title": "I like cake"
		}).toArray(
			function(err, results) {
				if (err) throw err;
				console.log(results);
			}
		);
		// client.close();
	});
});