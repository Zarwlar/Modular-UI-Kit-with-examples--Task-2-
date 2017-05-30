$(function () {
	function initMap() {
		var maps = document.getElementsByClassName('location__map'),
			coord = maps[0].dataset;
		var uluru = {
			lat: Number(coord.lat),
			lng: Number(coord.lng)
		};

		var map = new google.maps.Map(maps[0], {
			zoom: 14,
			center: uluru
		});
		var marker = new google.maps.Marker({
			position: map.getCenter(),
			icon: './img/location__marker.png',
			map: map
		});
	}

	initMap();
})