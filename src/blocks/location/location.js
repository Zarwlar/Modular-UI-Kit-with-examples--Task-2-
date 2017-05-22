$(function() {
      function initMap() {
      	var uluru = {
      		lat: -25.363,
      		lng: 131.044
      	};
				var maps = document.getElementsByClassName('location__map');
      	var map = new google.maps.Map(maps[0], {
      		zoom: 4,
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
