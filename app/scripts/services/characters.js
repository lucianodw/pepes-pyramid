'use strict';

angular.module('pyramidApp')
  .factory('Characters', function ($http) {
     var character = [
      // Default
      {
        id: "1",
        name: "John",
        isComputer: false,
        isSelected: false
      },
      // Man 2 - John
      {
        id: "2",
        name: "Luciano",
        isComputer: false,
        isSelected: false
      },

      // Man 3 - John
      {
        id: "3",
        name: "Chuck",
        isComputer: false,
        isSelected: false
      },

      // Man 1 - John
      {
        id: "pepe",
        name: "Pepe",
        isComputer: true,
        isSelected: false
      },
     ];

     return {
        new: function() {
          return character;
        }
     }
  });