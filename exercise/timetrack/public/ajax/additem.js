function prtMsg(msg) {
	console.log(msg);
}

function prtLine() {
	console.log("=========================================");
}

$(document).ready(function() {
	refreshItemList();

	function refreshItemList() {
		// Using the core $.ajax() method
		$.ajax({
			// the URL for the request
			url: "http://localhost:3000/item/ws",

			// the data to send (will be converted to a query string)
			data: {
				// id: 123
			},

			// whether this is a POST or GET request
			type: "GET",

			// the type of data we expect back
			dataType: "json",

			// code to run if the request succeeds;
			// the response is passed to the function
			success: function(json) {
				$("#itemList").empty();
				$("<h1/>").text(json.title).appendTo($("#itemList"));
				// $( "<div class=\"content\"/>").html( JSON.stringify(json.items) ).appendTo( "body" );
				$("<div class=\"content\"/>").html(json.items.length).appendTo($("#itemList"));

				$.each(json.items, function(key, value) {
					// sum += value;
					$("<div class=\"content\"/>").html(value.id + ': ' + value.itemname).appendTo($("#itemList"));
				});

				console.log(json.items);



			},

			// code to run if the request fails; the raw request and
			// status codes are passed to the function
			error: function(xhr, status, errorThrown) {
				alert("Sorry, there was a problem!");
				console.log("Error: " + errorThrown);
				console.log("Status: " + status);
				console.dir(xhr);
			},

			// code to run regardless of success or failure
			complete: function(xhr, status) {
				// alert( "The request is complete!" );
			}

		});
	}

	function test(event) {
		event.preventDefault();
		console.log("hello");
		console.log($("#myForm").serialize());
	}
	// Multiple events, same handler
	// $("input").on("click", test);

	// Switching handlers using the `$.fn.one` method
	$("p").one("click", test);

	function firstClick() {
		console.log("You just clicked this for the first time!");
		// Now set up the new handler for subsequent clicks;
		// omit this step if no further click responses are needed
		$(this).click(function() {
			console.log("You have clicked this before!");
		});
	}



	// Binding a named function
	function ajaxAddItem(event) {
		$.ajax({
			// the URL for the request
			url: "http://localhost:3000/item/ajaxadd",

			// the data to send (will be converted to a query string)
			data: {
				// id: 123
				postData: $("#myForm").serializeArray()
				// postData: $("#myForm").serialize()
			},

			// whether this is a POST or GET request
			type: "POST",

			// the type of data we expect back
			dataType: "json",

			// code to run if the request succeeds;
			// the response is passed to the function
			success: function(json) {
				// $("<h1/>").text(json.title).appendTo("body");
				// // $( "<div class=\"content\"/>").html( JSON.stringify(json.items) ).appendTo( "body" );
				// $("<div class=\"content\"/>").html(json.items.length).appendTo("body");

				// $.each(json.items, function(key, value) {
				// 	// sum += value;
				// 	$("<div class=\"content\"/>").html(value.id + ': ' + value.itemname).appendTo("body");
				// });
				refreshItemList();

				console.log("success...");



			},

			// code to run if the request fails; the raw request and
			// status codes are passed to the function
			error: function(xhr, status, errorThrown) {
				alert("Sorry, there was a problem!");
				console.log("Error: " + errorThrown);
				console.log("Status: " + status);
				console.dir(xhr);
			},

			// code to run regardless of success or failure
			complete: function(xhr, status) {
				// alert( "The request is complete!" );
			}

		});

	}

	$("#ajaxAddItemBtn").on("click", ajaxAddItem);

	// Using validation to check for the presence of an input
	$("#myForm").submit(function(event) {
		alert("Hello...");
		// if .required's value's length is zero
		if ($(".required").val().length === 0) {
			// usually show some kind of error message here
			// this prevents the form from submitting
			return false;
		} else {
			// run $.ajax here
			event.preventDefault();
		}
	});
});