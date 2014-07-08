angular.module('chinapp', [
  'chinapp.map',
  'chinapp.flashcards',
  'chinapp.services',
  'chinapp.firebaseData',
  'ngRoute'
])
.config(function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/',{
      templateUrl: 'app/flashcards/flashcards.html',
      controller: 'FlashcardsController'
    })
    .when('/flashcards',{
      templateUrl: 'app/flashcards/flashcards.html',
      controller: 'FlashcardsController'
    })
    .when('/map', {
      templateUrl: 'app/map/map.html',
      controller: 'MapController'
    })
    .when('/testData', {
      templateUrl: 'app/firebaseData/firebaseData.html',
      controller: 'FirebaseDataController'
    })
    .otherwise({ redirectTo: '/flashcards' });
})
.run(function ($rootScope) {  //inject your service
});
