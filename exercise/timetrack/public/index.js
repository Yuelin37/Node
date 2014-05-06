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
			url: "http://localhost:3000/hour/listws",

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
				$("<div class=\"content\"/>").html(json.hours.length).appendTo($("#itemList"));

				$.each(json.hours, function(key, value) {
					// sum += value;
					$("<div class=\"content\"/>").html(value.id + ': ' + value.num + ' hours spent on item ' + value.item_id + ' on ' + value.loggedFor).appendTo($("#itemList"));
				});

				// console.log(json.itemsInfo);
				// console.log(json.hoursdata);
				// console.log(json.hours);



				var myitem = [];
				var myhour = [];
				var mydate = [];

				// var items = JSON.parse(json.itemsInfo);
				// var hoursdata = JSON.parse(json.hoursdata);
				var items = json.itemsInfo;
				var hoursdata = json.hoursdata;

				for (var o in hoursdata) {
					// console.log(o);

					var tmpitem = hoursdata[o][0];
					myitem.push(tmpitem);

					var tmphour = hoursdata[o][1];
					myhour.push(tmphour);

					var tmpdate = hoursdata[o][2];
					mydate.push(tmpdate);
					// console.log(tmpdate);
				}


				var allDates = [];
				for (var i = 0; i < mydate.length; i++) {
					if (allDates.indexOf(mydate[i]) < 0) {
						allDates.push(mydate[i]);
					}
				}

				allDates = allDates.sort();
				console.log(allDates);
				var startDate = new Date(allDates[0]);
				var endDate = new Date(allDates[allDates.length - 1]);
				allDates = [];
				while (startDate <= endDate) {
					var tmpDate = new Date(startDate);
					startDate.setDate(startDate.getDate() + 1);
					allDates.push(dateToYMD(tmpDate));
					// console.log(tmpDate);
				}
				// console.log(allDates);
				console.log('items: ' + items);

				var finalData = [];
				for (var j = 0; j < items.length; j++) {
					var ex1Hours = [];
					for (var i = 0; i < allDates.length; i++) {
						ex1Hours.push(0);
					}

					for (var i = 0; i < allDates.length; i++) {
						for (var o in hoursdata) {
							if (hoursdata[o][0] == items[j][0]) {
								if (allDates[i] == hoursdata[o][2]) {
									ex1Hours[i] += hoursdata[o][1]
								};
							}
						}
					}
					finalData.push(ex1Hours);
				}
				console.log('finalData: ' + finalData);


				var finalSeries = [];
				for (var i = 0; i < finalData.length; i++) {
					var tempSeries = {
						name: items[i][1],
						data: finalData[i]
					};
					finalSeries.push(tempSeries);
				}
				console.log('****finalSeries****: ' + finalSeries);

				function dateToYMD(date) {
					var d = date.getDate();
					var m = date.getMonth() + 1;
					var y = date.getFullYear();
					return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
				}
				$(function() {
					$('#container').highcharts({
						chart: {
							type: 'column'
						},
						title: {
							text: 'Dailiy Efforts'
						},
						subtitle: {
							text: 'Nothing'
						},
						xAxis: {
							categories: allDates,
							labels: {
								rotation:-45

							}
						},
						yAxis: {
							min: 0,
							title: {
								text: 'Efforts (hours)'
							}
						},
						tooltip: {
							headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
							pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
								'<td style="padding:0"><b>{point.y:.1f} Hours</b></td></tr>',
							footerFormat: '</table>',
							shared: true,
							useHTML: true
						},
						plotOptions: {
							column: {
								pointPadding: 0.2,
								borderWidth: 0
							}
						},
						series: finalSeries
					});
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