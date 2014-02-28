'use strict';



angular.module('pyramidApp')
  .controller('MenuCtrl', function ($scope, $rootScope, $location) {
      $rootScope.gameMode = false;
      $rootScope.appActive = true;
      console.log($rootScope.appActive);
      $scope.startGame = function(computer){
        $rootScope.gameMode = computer;
        $location.path('/game');
      }

  }).directive('pep2', function () {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        angular.element(elem).pep({
          constrainTo: 'window'
        });
      }
    }
  });