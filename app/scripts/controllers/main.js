'use strict';

angular.module('pyramidApp')
  .controller('MainCtrl', function ($scope, $rootScope, $location, Board, Player) {


// ---------------- TURN SELECTION ----------------
    $scope.chooseTurn = function(){
      $scope.screen = Board.setScreen('goFirst');
    }

    $scope.goFirst = function(){
      $scope.player.one.active = false;
      $scope.player.two.active = true;
      $scope.pepeFirst = true;
      $scope.resetChips();
    }

    $scope.goSecond = function(){
      $scope.player.one.active = true;
      $scope.player.two.active = false;
      $scope.pepeFirst = false;
      $scope.resetChips();
    }


// ---------------- TURN ACTIVATED ----------------
  	$scope.removeChips = function(row, digest) {

      // Switches Active Player
  		$scope.player.one.active = !$scope.player.one.active;
  		$scope.player.two.active = !$scope.player.two.active;

      // New Row - Filters out all 'false' chips
  		$scope.board.chips[row] = _.filter($scope.board.chips[row] , 
  			function(obj){ return obj.chip === true; }
  		);

      // Set Chip Count
   		$scope.chipsRemaining = $scope.getChipTotal();

      // Game Over Trigger
   		if($scope.chipsRemaining === 0) {
   			$scope.screen = Board.setScreen('gameOver');
        $scope.player.winner = ($scope.player.one.active) ? $scope.player.one.name : $scope.player.two.name;
   		} 

      // Computers Turn Trigger
      if($scope.isComputerTurn()){
        $scope.screen = Board.setScreen('computerTurn');
        setTimeout(function(){
          $scope.computerTurn();
        },2000);
      }


      if(digest) { $scope.$digest() }
   	};


// ---------------- COMPUTERS TURN ----------------
    // Returns TRUE if eligible for computers turn
    $scope.isComputerTurn = function(){
      return $scope.settings.computerMode && $scope.player.two.active && !$scope.screen.gameOver;
    }

    $scope.computerTurn = function() {
      $scope.screen.computerTurn = false;
      var rowTotals = Board.getRowTotal($scope.board.chips);
      var rowArr = [rowTotals.row1, rowTotals.row2, rowTotals.row3, rowTotals.row4].join("");
      var turn = Board.getCompTurn(rowArr);

      // If no moves, pick random
      if(turn.row === undefined){
        turn = $scope.getRandTurn();
      }
      console.log('conputers turn');
      // Set Chips to False 
      for(var x = 0; x < turn.chip; x++){
        $scope.board.chips[turn.row][x].chip = false;
      }
       //turn.row is row while turn.chip is column
         //for loop has to be imposed as well so other elements may move as well .

          console.log(turn.chip+"chip and row is "+turn.row+"x is "+x);
          
          if(turn.row==0){
            var lengthOfRow=1;
          }else{
            var lengthOfRow=turn.row*2;
          }
          
          var xx=lengthOfRow-turn.chip;
          //xx++;
          console.log(xx);
         //Finding abosulte position of chips with offest method 
          var position = $('.game-row[data-index='+turn.row+'] .chip-' + xx).offset();
          //Findind absolute positoin of dropable 
          var positionOfDropable = $('.droppable').offset();
          //Absoulte position difference between starting and end positions  
          var AbsoulteDifference =positionOfDropable.left-position.left;
          var temp=turn;
          
          $('.game-row[data-index='+turn.row+'] .chip-'+xx ).animate({
            left: AbsoulteDifference+ 100,
            opacity: 1
          }, 1000, "linear", function() {
              //now play opacity transition 
              console.log(xx+"chip and row is "+turn.row);
            //   $('.game-row[data-index='+temp.row+'] .chip-' + xx).animate({opacity: 0},5000);
                //moved from this has to be restored 
               $scope.removeChips(turn.row, true);
          });

       //this has to be restored 
      
    }


// ---------------- BOARD INFORMATION ----------------
    $scope.getChipTotal = function(){
      var chips = $scope.board.chips[0].length + $scope.board.chips[1].length + $scope.board.chips[2].length + $scope.board.chips[3].length;
      return chips;
    }

    $scope.getRandTurn = function(){
      var randRow = Board.getRandRow($scope.board.chips);

      return {
        row: randRow,
        chip: 1
      }
    }



// ---------------- RESET BOARD ----------------
   	$scope.resetChips = function(){
      $scope.screen = Board.setScreen();
      $scope.board = Board.new();

      $scope.chipsRemaining = 13;
      angular.element('.droppable').removeClass('pep-dpa');
      $scope.removeChips();

   	}


// ---------------- INITIALIZE GAME ----------------
    // Check for active app 
    if($rootScope.appActive === undefined) {
      $location.path('/');
    }
    
    // Creates new Board & Players
    $scope.board = Board.new();
    $scope.player = Player.new();

    // Game Settings
    $scope.settings = {
      computerMode : $rootScope.gameMode
    } 

    // Initialize Turn Selection
    $scope.chooseTurn();

  });