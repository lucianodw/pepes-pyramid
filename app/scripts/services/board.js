'use strict';

angular.module('pyramidApp')
  .factory('Board', function ($http) {

     return {
        new: function() {
          return {
            currRow : '',
            activeChips : '', 
            chips : [ 
              [ {chip: true} ],
              [ {chip: true}, {chip: true} ],
              [ {chip: true}, {chip: true}, {chip: true}, {chip: true}],
              [ {chip: true}, {chip: true}, {chip: true}, {chip: true}, {chip: true}, {chip: true} ]
            ],
          };
        },

        setScreen: function(id){
          var screen = {
            goFirst: false,
            gameOver: false,
            computerTurn: false
          }

          screen[id] = true;
          return screen;
        },

        getRowTotal: function(board) {
          var chips = {
                row1: board[0].length, 
                row2: board[1].length, 
                row3: board[2].length, 
                row4: board[3].length
              }

          return chips;          
        },

        getRandRow: function(rowBoard){
          var activeRows = []

          for(var x = 0; x < 4; x++){
            var len = rowBoard[x].length;
            var isActive = (len > 0) ? true : false;

            if(isActive) {
              activeRows.push(x);
            }
          }

          var randLen = activeRows.length;
          var randRow = Math.floor((Math.random()*randLen));
          var row = activeRows[randRow]; 

          return row;
        },

        getCompTurn: function(rowArr){
          var turn;
          switch(rowArr) {
            case '1044':
            case '1202':
            case '1220':
            case '1231':
              turn = {row: 0, chip: 1};
              break;

            case '0110':
            case '0133':
            case '0144':
            case '0200':
            case '0211':
            case '0232':
            case '0245':
            case '1123':
            case '1132':
            case '1201':
            case '1210':
            case '1233':
            case '1244':
              turn = {row: 1, chip: 1};
              break;

            case '0020':
            case '0032':
            case '0043':
            case '0121':
            case '0142':
            case '0212':
            case '0223':
            case '0230':
            case '0241':
            case '1021':
            case '1042':
            case '1120':
            case '1143':
            case '1240':
              turn = {row: 2, chip: 1};
              break;

            case '0002':
            case '0023':
            case '0034':
            case '0045':
            case '0112':
            case '0124':
            case '0146':
            case '0203':
            case '0214':
            case '0221':
            case '1012':
            case '1024':
            case '1033':
            case '1046':
            case '1102':
            case '1134':
            case '1145':
            case '1204':
            case '1213':
              turn = {row: 3, chip: 1};
              break;

            case '0201':
            case '0210':
            case '0244':
            case '1200':
            case '1211':
            case '1245':
              turn = {row: 1, chip: 2};
              break;

            case '0021':
            case '0030':
            case '0042':
            case '0120':
            case '0131':
            case '0143':
            case '0233':
            case '0240':
            case '1020':
            case '1031':
            case '1043':
            case '1121':
            case '1130':
            case '1142':
            case '1232':
            case '1241':
              turn = {row: 2, chip: 2};
              break;

            case '0003':
            case '0012':
            case '0024':
            case '0035':
            case '0046':
            case '0102':
            case '0113':
            case '0125':
            case '0134':
            case '0204':
            case '0215':
            case '1002':
            case '1013':
            case '1025':
            case '1034':
            case '1103':
            case '1112':
            case '1124':
            case '1135':
            case '1146':
            case '1205':
            case '1214':
            case '1223':
              turn = {row: 3, chip: 2};
              break;

            case '0031':
            case '0040':
            case '0130':
            case '0141':
            case '0243':
            case '1030':
            case '1041':
            case '1131':
            case '1140':
            case '1242':
              turn = {row: 2, chip: 3};
              break;

            case '0004':
            case '0013':
            case '0025':
            case '0036':
            case '0103':
            case '0114':
            case '0126':
            case '0135':
            case '0205':
            case '0216':
            case '0234':
            case '1003':
            case '1014':
            case '1026':
            case '1035':
            case '1104':
            case '1113':
            case '1125':
            case '1136':
            case '1206':
            case '1215':
            case '1224':
              turn = {row: 3, chip: 3};
              break;

            case '0041':
            case '0140':
            case '0242':
            case '1040':
            case '1141':
            case '1243':
              turn = {row: 2, chip: 4};
              break;

            case '0005':
            case '0014':
            case '0026':
            case '0104':
            case '0115':
            case '0136':
            case '0206':
            case '0224':
            case '0235':
            case '1004':
            case '1015':
            case '1036':
            case '1105':
            case '1114':
            case '1126':
            case '1216':
            case '1225':
            case '1234':
              turn = {row: 3, chip: 4};
              break;

            case '0006':
            case '0015':
            case '0105':
            case '0116':
            case '0225':
            case '0236':
            case '1005':
            case '1016':
            case '1106':
            case '1115':
            case '1226':
            case '1235':
              turn = {row: 3, chip: 5};
              break;

            case '0016':
            case '0106':
            case '0226':
            case '1006':
            case '1116':
            case '1236':
              turn = {row: 3, chip: 6};
              break;

            default:
              turn = {};
          };

          return turn;
        }
     }
  });