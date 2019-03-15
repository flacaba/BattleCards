
const choosenPlayers = window.location.href.split("myvar=")[1];
const character = choosenPlayers.split("%20").join(" ").split(",")


function getCharacter (whichCharacter) {
  var player = characters.filter(function(obj) {
  return obj.name === whichCharacter;
})
return player[0];
}


var selection1 = getCharacter(character[0]);
var selection2 = getCharacter(character[1]);

document.addEventListener('DOMContentLoaded', function() {
  var game = new Game (selection1,selection2);
  var btnBeginFight = document.querySelector(".start-game");
  btnBeginFight.onclick = function() {
    btnBeginFight.parentNode.classList.add("not-showing")
   game.start();
  } 
});

