var player1Table = document.querySelector("#player1Table");
var player2Table = document.querySelector("#player2Table");
var player1CharacterParent = player1Table.querySelector(".player-character-table");
var player2CharacterParent = player2Table.querySelector(".player-character-table");

// console.log(window.location.href.split("myvar=")[1])
// Tengo que hacer la transicion de las variables

var selection1 = characters[0];
var selection2 = characters[1];

document.addEventListener('DOMContentLoaded', function() {
  var game = new Game (selection1,selection2);
  // var player1Representation = [game.player1];
  // var player2Representation = [game.player2];
  // generateCards(player1Representation,player1CharacterParent);
  // generateCards(player2Representation,player2CharacterParent);
  var btnBeginFight = document.querySelector(".start-game");
  btnBeginFight.onclick = function() {
    btnBeginFight.parentNode.classList.add("not-showing")
    // decidir donde tiene que estar start game
   game.start();
  } 
});

