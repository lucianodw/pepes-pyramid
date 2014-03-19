'use strict';



angular.module('pyramidApp')
  .controller('MenuCtrl', function ($scope, $rootScope, $location) {
      
      // Initialize Global Variables
      $rootScope.gameMode = false; 
      $rootScope.appActive = true;
      
      // Starts The Game
      $scope.startGame = function(computer){
        $rootScope.gameMode = computer;
        $location.path('/game');
      }

  });