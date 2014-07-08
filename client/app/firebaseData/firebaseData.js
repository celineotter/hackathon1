
angular.module("chinapp.firebaseData", ["firebase"])

.controller("FirebaseDataController", function ($scope, $firebase, $timeout, FlashcardData) {
	$scope.testCard = undefined;

  var firebaseData = new Firebase("https://chinapp.firebaseio.com/data");
  firebaseData.set(FlashcardData.vocabListObj);

  $scope.validateForm = function () {
    if ($scope.testCard.pinyin.indexOf($scope.findChar) === -1) {
      $scope.pinyinFail = true;
    } else {
      $scope.pinyinPass = true;
    }
    if ($scope.testCard.translation.indexOf($scope.findEnglish) === -1) {
      $scope.translationFail = true;
    } else {
      $scope.translationPass = true;    }
  };

  $scope.getData = function (input) {
    $scope.translationFail = false;
    $scope.translationPass = false;
    $scope.pinyinFail = false;
    $scope.pinyinPass = false;
    $scope.showing = false;
    $scope.findChar = "";
    $scope.findEnglish = "";

    var wrapper = function() {
      var cardId;
      if (input === 'reset') {
        return $scope.testCard = undefined;
      } else if (input === undefined) {
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
