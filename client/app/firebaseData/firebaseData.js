
angular.module("chinapp.firebaseData", ["firebase"])

.controller("FirebaseDataController", function ($scope, $firebase, $timeout, FlashcardData) {
	$scope.testCard = undefined;

  var firebaseData = new Firebase("https://chinapp.firebaseio.com/data");
  firebaseData.set(FlashcardData.vocabListObj);

    
  $scope.getData = function (input) {

    var wrapper = function() {
      var cardId;

      if (input === undefined) {
        cardId = Math.floor((Math.random() * 50));
      } else {
        cardId = Math.floor((Math.random() * 10)) + input;
      }

      var dataRef = new Firebase('https://chinapp.firebaseio.com/data/' + cardId);
      dataRef.on('value', function(snapshot) {

        $scope.testCard = snapshot.val();
        $scope.$digest();
      });

    };
    $timeout(wrapper, 100);
    
  };

});
