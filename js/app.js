$(document).ready(function() {

	var Lat;
	var Long;

	console.log("SSSTTART")
	var proc = document.getElementById("proc");

	getLocation();

});

function getLocation() {

	console.log("caled")
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		proc.innerHTML = "Geolocation is not supported by this browser.";
	}
}

function showPosition(position) {
	Lat = position.coords.latitude;
	Long = position.coords.longitude;

	proc.innerHTML = "Latitude: " + Lat + "<br>Longitude: " + Long;
}

function getMap() {

	console.log(Lat)
var myCenter=new google.maps.LatLng(Lat, Long);
	var mapProp = {
		center : myCenter,
		zoom : 5,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};


var map = new google.maps.Map(document.getElementById("proc"), mapProp);
var marker=new google.maps.Marker({
  position:myCenter
  });

marker.setMap(map);
	
	google.maps.event.addDomListener(window, 'load', getMap);

}







