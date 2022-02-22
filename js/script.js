/*
    Assignment #4
    { Hyun-jun Lee }
*/

$(function () {
	// your code here

	navigator.geolocation.getCurrentPosition(success, () => {
		$('#content').html("Please allow me to search your location.");
		console.log("failed to get giolocation");
	});

	function success(position) {

		let oldLati = localStorage.getItem("userLatitude");
		let oldLong = localStorage.getItem("userLongitude");
		let oldAccu = localStorage.getItem("acc");

		let gioLati = position.coords.latitude;
		let gioLong = position.coords.longitude;
		let gioAccu = position.coords.accuracy;

		$("div#locationhere").html("<b>Latitude: </b> " + gioLati + "</br> <b>Longitude: </b> " + gioLong + "<br><b>Old Accuration : " + oldAccu + "</b>");

		console.log(position);

		localStorage.setItem("userLatitude", gioLati);
		localStorage.setItem("userLongitude", gioLong);
		localStorage.setItem("acc", gioAccu);

		if (oldLati || oldLong) {

			$('div#locationhere').html("<b>Old Latitude: </b>" + gioLati + "</br> <b>Old Longitude: </b>" + gioLong + "<br>ㅡ<br><b>New Latitude: </b>" + oldLati + "<br><b>New Longitude: </b>" + oldLong + "<br><b>New Accuration : " + gioAccu + "</b>");

			let distance = calcDistanceBetweenPoints(gioLati, gioLong, oldLati, oldLong) / 1000;
			
			$('div#locationhere').append("<h2>You travled..</h2> <p>You tavled " + distance.toFixed(2) + " km from your last location.</p>");


		} else {
			$('header').append("Welcome to the fun Giolocate website!");
			console.log("First time here");
		}

	};


	// DO NOT EDIT ANY CODE IN THIS FUNCTION DEFINTION
	// function to calculate the distance in metres between two lat/long pairs on Earth
	// Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
	// Aren't those cool variable names? Yah gotta love JavaScript
	function calcDistanceBetweenPoints(lat1, lon1, lat2, lon2) {
		var toRadians = function (num) {
			return num * Math.PI / 180;
		}
		var R = 6371000; // radius of Earth in metres
		var φ1 = toRadians(lat1);
		var φ2 = toRadians(lat2);
		var Δφ = toRadians(lat2 - lat1);
		var Δλ = toRadians(lon2 - lon1);

		var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

		return (R * c);
	}
});
