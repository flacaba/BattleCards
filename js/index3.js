// var players = localStorage.getItem("playersToPass");
// debugger;
// localStorage.removeItem("playersToPass");

var player1CharacterParent = document.querySelector(".player1-character-table");
var player2CharacterParent = document.querySelector(".player2-character-table");

// console.log(window.location.href.split("myvar=")[1])

var selection1 = characters[0];
var selection2 = characters[1];

document.addEventListener('DOMContentLoaded', function() {
  var game = new Game (selection1,selection2);
  var player1Representation = [game.player1];
  var player2Representation = [game.player2];
  generateCards(player1Representation,player1CharacterParent,false);
  generateCards(player2Representation,player2CharacterParent,false);
  var btnBeginFight = document.querySelector(".start-game");
  btnBeginFight.onclick = function() {
    // decidir donde tiene que estar start game
   game.start();
  } 
});

