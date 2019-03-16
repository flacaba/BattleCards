var characterParent = document.getElementById("characters-display");
var legendaryParent = document.getElementById("legendary-display");
var epicParent = document.getElementById("epic-display");
var normalParent = document.getElementById("normal-display");
var players;

function getPlayer (player) {
  var whichPlayer = document.getElementById(player);
  return whichCharacter = whichPlayer.querySelector(".card-title").innerText;
}

document.addEventListener('DOMContentLoaded', function() {
  generateCards(characters, characterParent);
  makeItDraggable(characterParent);
  generateCards(legendaryHabilities, legendaryParent);
  generateCards(epicHabilities, epicParent);
  generateCards(normalHabilities, normalParent);

  var btnBeginGame = document.querySelector(".arena");

  btnBeginGame.onclick = function() {
   players = getPlayer("player1") +"," + getPlayer("player2");
   window.location.href = `index2.html?myvar=${players}`;
  }
});
