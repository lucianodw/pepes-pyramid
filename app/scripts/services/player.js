'use strict';

angular.module('pyramidApp')
  .factory('Player', function ($http) {
     var player = {
        one : {
          active: true,
          name: 'Player 1'
        },
        two : {
          active: false,
          name: 'Player 2'
        },
        winner: ''
      }

     return {
        new: function() {
          return player;
        }
     }
  });