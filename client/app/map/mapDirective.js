
angular.module('chinapp.mapDirective', [])

.directive('myBoxmap', function (){
  return {
    restrict: 'E',
    replace: true,
    template: '<div id="map"></div>',
    link: function(scope, element, attrs) {
      var map = L.map('map').setView([37.783468766829, -122.40908861160278], 13);

      L.tileLayer('http://{s}.tiles.mapbox.com/v3/celineotter.inh53j72/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
      }).addTo(map);

      L.marker([37.783568, -122.409132]).addTo(map);
          
      var points = [];		//add markers dynamically
      var updatePoints = function(pts) {
        for (var p in pts) {
          L.marker([pts[p].lat, pts[p].long]).addTo(map).bindPopup(pts[p].message);
        }
      };
      updatePoints(points);

      scope.$watch(attrs.pointsource, function(value) {
        updatePoints(value);
      });
    }
  };
});

















/*    var map = L.map('map').setView([37.783468766829, -122.40908861160278], 13);
    
    L.tileLayer('http://{s}.tiles.mapbox.com/v3/celineotter.inh53j72/{z}/{x}/{y}.png', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      maxZoom: 18
    }).addTo(map);

    var marker = L.marker([37.783568, -122.409132]).addTo(map);
*/

