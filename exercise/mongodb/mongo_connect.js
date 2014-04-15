var mongodb = require('mongodb'),
	server = new mongodb.Server('127.0.0.1', 27017, {});
var client = new mongodb.Db('mtest', server);

client.open(function(err) {
	if (err) throw err;
	client.collection('test_insert', function(err, collection) {
		if (err) throw err;
		console.log('We are now able to perform queries.');
		// collection.insert({
		// 		"title": "I like cake",
		// 		"body": "It is quite good."
		// 	}, {
		// 		safe: true
		// 	},
		// 	function(err, documents) {
		// 		if (err) throw err;
		// 		console.log('Document ID is: ' + documents[0]._id);

		// 	}
		// );

		var _id = new client.bson_serializer
			.ObjectID('534cd7f091dec6881b0b97c8');
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
			"title": "I ate too much cake"
		}).toArray(
			function(err, results) {
				if (err) throw err;
				console.log(results);
			}
		);

		// var _id = new client
		// 	.bson_serializer
		// 	.ObjectID('534cd491a8fd867422d5a455');
		// collection.remove({
		// 	_id: _id
		// }, {
		// 	safe: true
		// }, function(err) {
		// 	if (err) throw err;
		// });


	});
});