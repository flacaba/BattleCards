var characterParent = document.getElementById("characters-display");
var legendaryParent = document.getElementById("legendary-display");
var epicParent = document.getElementById("epic-display");
var normalParent = document.getElementById("normal-display");
var players;

function getPlayer (player) {
  var whichPlayer = document.getElementById(player);
  var whichCharacter = whichPlayer.querySelector(".card-title").innerText;
  var player = characters.filter(function(obj) {
    return obj.name === whichCharacter;
  })
  return player[0];
}

document.addEventListener('DOMContentLoaded', function() {
  generateCards(characters, characterParent,true);
  generateCards(legendaryHabilities, legendaryParent,false);
  generateCards(epicHabilities, epicParent,false);
  generateCards(normalHabilities, normalParent,false);

  var btnBeginGame = document.querySelector(".arena");

  btnBeginGame.onclick = function() {
   players = [getPlayer("player1"),getPlayer("player2")];

   fuckingnumber='hola'

    window.location.href = `index3.html?myvar=${fuckingnumber}`;
  }
});
