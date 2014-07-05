angular.module('chinapp', [
  // 'chinapp.maps',
  'chinapp.flashcards',
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
    .otherwise({ redirectTo: '/flashcards' });
})
.run(function ($rootScope) {  //inject your service
});
