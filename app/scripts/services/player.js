'use strict';

angular.module('pyramidApp')
  .factory('Player', function ($http) {
     var player = {
        one : {
          active: true,
          name: 'Player 1',
          character: 'default',
          talk: 'No one can beat me!',
          winner: false
        },
        two : {
          active: false,
          name: 'Player 2',
          character: 'default',
          talk: ' I will take you down!',
          winner: false
        },
        winner: ''
      }

     return {
        new: function() {
          return player;
        }
     }
  });