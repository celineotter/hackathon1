angular.module('chinapp.map', ['chinapp.services', 'chinapp.mapDirective'])

.controller('MapController', function ($scope, yelpService, $q) {
	$scope.loading = false;
	$scope.noResult = false;
	
	$scope.search = function(location, term) {
		$scope.noResult = false;
		$scope.results = undefined;
		$scope.loading = true;

      $q.all([
        yelpService.search(location, term)
      ]).then(function(results) {

        $scope.loading = false;

        if(results[0][0] === undefined) {
          $scope.noResult = true;

        } else {
          $scope.results = results[0].slice(0, 10);
          /*$scope.addMarkers($scope.results);*/
        }
        $scope.location = '';
        $scope.term = '';
      });
	};





});


