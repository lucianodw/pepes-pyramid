'use strict';

angular.module('pyramidApp')
  .controller('PregameCtrl', function ($scope, $rootScope, $location, $timeout, Player, Characters) {

    $scope.init= function(){
      $scope.animate = {};
      $scope.animate.init = true;
      $scope.animate.characters = true;

      $scope.player = Player.new();
      $scope.characters = Characters.new();
      $scope.player.one.talk = 'Please select a character.'
    };


    $scope.selectCharacter = function(charId, index) {


      var activePlayer = ($scope.player.one.active) ? 'one' : 'two';

      $scope.player[activePlayer].character = $scope.characters[index];
      $scope.characters[index].isSelected = true;

      if(activePlayer == 'two') {
        $scope.animate.characters = false;
        $scope.startGame();
        return;
      }

      // Switches Active Player
      $scope.player.one.active = !$scope.player.one.active;
      $scope.player.two.active = !$scope.player.two.active;

    };

    $scope.startGame = function() {
        $scope.animate.startGame = true;
        $rootScope.player = $scope.player;

        $rootScope.computerMode = ($scope.player.one.character.isComputer || $scope.player.two.character.isComputer) ? true : false;
        

        console.log($rootScope.player);
        $timeout(function(){
          $location.path('/game');
        }, 800);
    }


    // ---------------- INITIALIZE GAME ----------------
    // Check for active app 
    if($rootScope.appActive === undefined) {
      $location.path('/');
    }

    $scope.init();


  });