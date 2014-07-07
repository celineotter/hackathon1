angular.module('chinapp.map', ['services.yelpService'])

.controller('MapController', function ($scope, yelpService, $q) {
	$scope.loading = false;

	$scope.search = function(location, term) {

		$scope.loading = true;
/*    if (!/\w+/.test(location)) {
      alert('Sorry, a location is required!');
    } else {*/

      /*$scope.refreshMap(location);*/

      $q.all([
        yelpService.search(location, term)
      ]).then(function(results) {
        
        $scope.loading = false;

        $scope.results = results[0].slice(0, 20);
        /*$scope.addMarkers($scope.results);*/
        $scope.location = '';
        $scope.term = '';
      });
   //}

	};
});
