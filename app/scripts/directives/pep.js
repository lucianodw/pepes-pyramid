'use strict';

angular.module('pyramidApp')
  .directive('pep', function () {
    return {
      restrict: 'A',
      link: function (scope, elem, attrs) {
        angular.element(elem).pep({
          activeClass :'active',
          revert: true,
          drag: function(ev, obj){
            var row = obj.$container.parent();
            this.currRow = row.attr('data-index');
            var totalChips = row.find('.game-box').length;

            angular.element('.chip').removeClass('active-chip');
              for(var x = this.currChip; x < totalChips; x++){
                angular.element('.game-row[data-index='+this.currRow+'] .chip-' + x).addClass('active-chip');
              }
          },
          stop: function(ev, obj){
            var row = obj.$container.parent();
            this.currRow = row.attr('data-index');
            var totalChips = row.find('.game-box').length;
            

            if(angular.element('.pep-dpa').length == 0) {
              angular.element('.chip').removeClass('active-chip');
            } else {

                angular.element('.chip').removeClass('active-chip');
                for(var x = this.currChip; x < totalChips; x++){
                    angular.element('.game-row[data-index='+this.currRow+'] .chip-' + x).addClass('active-chip');
                    scope.board.chips[this.currRow][x].chip = false;
                    console.log(scope.offsetDirection);
                }

              scope.board.currRow = this.currRow;
              scope.board.activeChips = angular.element('.active-chip');
              scope.removeChips(scope.board.currRow, true);
              
              }


          },
          revertIf: function(){ return angular.element('.pep-dpa').length == 0;},
          initiate: function(ev, obj){
            this.currChip = obj.$el.attr('data-index');

            var resetChips = _.map(scope.board.chips[this.currRow], function(obj){ return {chip : true }});
            scope.board.chips[this.currRow] = resetChips;
          },
          axis: 'x',
          revertAfter: 'stop',
          currChip : "",
          currRow : "",
          cssEaseDuration: 100,
          droppable: '.droppable',
          useCSSTranslation: false
        });

      }
    }
  });