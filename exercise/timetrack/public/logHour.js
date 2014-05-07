function prtMsg(msg) {
	console.log(msg);
}

function prtLine() {
	console.log("=========================================");
}

$(document).ready(function() {

	$('.datepicker').datepicker({
		autoclose: true,
		todayHighlight: true,
		format: 'yyyy-mm-dd'
	})

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
				console.log(json.items.length);
				$("#itemList").empty();
				$("<h1/>").text(json.title).appendTo($("#itemList"));
				// $( "<div class=\"content\"/>").html( JSON.stringify(json.items) ).appendTo( "body" );
				$("<div class=\"content\"/>").html(json.items.length).appendTo($("#itemList"));

				$.each(json.items, function(key, value) {
					// sum += value;
					$("<div class=\"content\"/>").html(value.id + ': ' + value.itemname).appendTo($("#itemList"));
				});


				var mySelect = $("#itemDL");
				$.each(json.items, function(key, value) {
					mySelect.append(
						$('<option></option>').val(value.id).html(value.itemname)
					);
				});



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


	$("#logHourBtn").on("click", ajaxLogHour);



	function ajaxLogHour(event) {
		$.ajax({
			// the URL for the request
			url: "http://localhost:3000/hour/ajaxadd",

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

});