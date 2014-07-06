

angular.module('chinapp.flashcards', [])

.controller('FlashcardsController', function ($scope, FlashcardData) {
  $scope.data = FlashcardData.vocabList;
/*  $scope.hideSound = true;*/
});