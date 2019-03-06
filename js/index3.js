// var players = localStorage.getItem("playersToPass");
// debugger;
// localStorage.removeItem("playersToPass");

var player1CharacterParent = document.querySelector(".player-character-table");

// console.log(window.location.href.split("myvar=")[1])

var player1 = new Player (characters[0]);
var player2 = new Player (characters[1]);

// hacerlo esto de forma mas profesional
var player1Representation = [player1];
console.log(player1Representation);

function getRandomCard () {
  var maxNumber = habilities.length;
  var i = Math.floor(Math.random()*maxNumber) ;
  return habilities[i];
}



document.addEventListener('DOMContentLoaded', function() {
  // /tengo que arreglar que esto sea un array
  generateCards(player1Representation,player1CharacterParent,false);
});

