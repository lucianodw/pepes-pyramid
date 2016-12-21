'use strict';



angular.module('pyramidApp')
  .controller('MenuCtrl', function ($scope, $rootScope, $location, $timeout) {
      
      // Initialize Global Variables
      $rootScope.appActive = true;
      
      // Pick Character
      // $scope.pickCharacter = function(isComputer) {
      //     $rootScope.gameMode = isComputer;
      // }

      // Starts The Game
      $scope.startGame = function(isComputer){
        $rootScope.gameMode = isComputer;
        $scope.animate.menu=false;

        $timeout(function(){
          $location.path('/pregame');
        }, 800);
      }

      $scope.animate = {
        menu: true
      }

  });