var app = angular.module('mashup', []);

app.controller('mainController', function($scope, $http){
  $scope.init = function(){
    var mapOptions = {
              zoom: 11,
              center: new google.maps.LatLng(60.170833, 24.9375),
              mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    $scope.map = map;
  }

  navigator.geolocation.getCurrentPosition(function (position) {
        $scope.pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        $scope.center = $scope.map.setCenter($scope.pos);
        $scope.lat = position.coords.latitude;
        $scope.lng = position.coords.longitude;

        marker = new google.maps.Marker({
            position: $scope.pos,
            map: $scope.map
        });
        //console.log(pos);
	});

  $http.get({
    url: "https://api.foursquare.com/v2/venues/search?callback=?",
    datatype: "jsonp",
    data: {
      'client_id': '5PHSPJ2ZXMH3JIN1DDOVMIFSLLIS4BOQ4XD2LZE10EFMDH23',
      'client_secret': 'OHNT2TYCCPXLEMBBH3XZ15VP12O5QB2P31FN4LZYRFA0NKU1',
      'v': '20170103',
      'limit': '10'

    }
  });
  google.maps.event.addDomListener(window, 'load', $scope.init);

});
