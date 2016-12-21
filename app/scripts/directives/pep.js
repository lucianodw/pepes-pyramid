'use strict';

angular.module('pyramidApp')
  .directive('pep', function ($timeout) {
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
               
                //if prev position is 
               if($('.game-row[data-index='+this.currRow+'] .chip-' + x).data('prevPosition')==null){
                  $('.game-row[data-index='+this.currRow+'] .chip-' + x).data('prevPosition',$('.game-row[data-index='+this.currRow+'] .chip-'+this.currChip).position().left);
                }
               

                angular.element('.game-row[data-index='+this.currRow+'] .chip-' + x).addClass('active-chip');
                console.log($('.game-row[data-index='+this.currRow+'] .chip-').position.left);
                $('.game-row[data-index='+this.currRow+'] .chip-' + x).css({
                  'left': $('.game-row[data-index='+this.currRow+'] .chip-'+this.currChip).position().left
                });
               }      
          },
          stop: function(ev, obj){
            
            var row = obj.$container.parent();
            this.currRow = row.attr('data-index');
            var totalChips = row.find('.game-box').length;
            

            if(angular.element('.pep-dpa').length == 0) {

              angular.element('.chip').removeClass('active-chip');
              for(var x = this.currChip; x < totalChips; x++){
               //alert("asdf");
                console.log(this.currChip);
                angular.element('.game-row[data-index='+this.currRow+'] .chip-' + x).addClass('active-chip');
                console.log($('.game-row[data-index='+this.currRow+'] .chip-'+this.currChip).position.left);
                $('.game-row[data-index='+this.currRow+'] .chip-' + x).css({
                  'left': $('.game-row[data-index='+this.currRow+'] .chip-' + x).data('prevPosition')

                });
                $('.game-row[data-index='+this.currRow+'] .chip-' + x).data('prevPosition',null);
                
                //revert the elements back to original position
              }  

            } else {
                angular.element('.active-chip').addClass('explode');
                angular.element('.chip').removeClass('active-chip');
                scope.board.currRow = this.currRow;
                var currChip = this.currChip;
                console.log('explode!');
                $timeout(function(){scope.removeChips(scope.board.currRow, currChip, true);}, 200);
                
              
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