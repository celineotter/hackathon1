

angular.module('chinapp.flashcards', [])

.controller('FlashcardsController', function ($scope, FlashcardData) {

  $scope.hideSound = true;

  //$scope.dataClone = FlashcardData.vocabList.slice(0);
  
  $scope.data = undefined;

  $scope.getData = function (start) { debugger;
    $scope.data = FlashcardData.vocabList.slice(start, start +10);
  };

});