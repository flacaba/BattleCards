// var player1 = new Player (characters[0]);
// var player2 = new Player (characters[1]);
// var creatures = document.querySelectorAll(".creature");
// var habilitiesDeck = document.querySelectorAll(".habilities-deck");

function Game (objA, objB) {
  this.player1 = new Player(objA,"player1");
  this.player2 = new Player(objB,"player2");
  generateCards([this.player1],this.player1.characterPosition);
  generateCards([this.player2],this.player2.characterPosition);
  this.player1.drawAtt();
  this.player2.drawAtt();
  this.isErrorCreature = false;
  this.error = document.querySelector(".error");
  this.player1FinishTurn = document.querySelector(".turn-player1");
  this.player2FinishTurn = document.querySelector(".turn-player2");
  this.turns =[];
}

Game.prototype.start = function () {
  this.initGame(this.player1.habilitiesTable);
  this.initGame(this.player2.habilitiesTable);
  this.activateDragAndDrop(this.player1);
 
  this.intervalId = setInterval(function() {
    this.drawAtt();
    this.checkIfError(this.player1);
  }.bind(this),100)

  this.player1FinishTurn.onclick = function() {
    this.finishTurn(this.player1,this.player2);
    // poner que se cambien los botones de color
  }.bind(this);

  this.player2FinishTurn.onclick = function() {
    this.finishTurn(this.player2,this.player1);
    // poner que se cambien los botones de color
  }.bind(this);
}

Game.prototype.finishTurn = function (playerA,playerB) {
  playerA.makeAttack(playerB)
  playerA.minusMana();
  playerB.plusMana();
  playerB.creatureAlive();
  playerB.newHabilities();
  playerB.removeCurrentHabilities();
  this.deactivateDragAndDrop(playerA);
  this.activateDragAndDrop(playerB);

}

Game.prototype.drawAtt = function() {
  this.player1.drawAtt();
  this.player2.drawAtt();
  this.player1.isCreature();
  this.player2.isCreature();
  this.player1.isHability1();
  this.player1.isHability2();
  this.player2.isHability1();
  this.player2.isHability2();
}

Game.prototype.initGame = function(where) {
  for(i=0; i<where.length; i++){
    this.RandomCard = [habilities[getRandomCard()]];
    generateCards(this.RandomCard,where[i]);
  } 
}

Game.prototype.activateDragAndDrop = function(player) {
  makeItDraggable(player.habilitiesDeck);
  makeItDroppable(player.playerDeck);
  makeItDroppable(player.habilitiesDeck);
}

Game.prototype.deactivateDragAndDrop = function(player) {
  makeItUndraggable(player.habilitiesDeck);
  makeItUndraggable(player.playerDeck);
  makeItUndroppable(player.playerDeck);
  makeItUndroppable(player.habilitiesDeck);
}

Game.prototype.checkIfError = function (player) {
  this.checkIfCreature(player);
  if(this.isErrorCreature === false) {
    this.checkMana(player);
  }
}

Game.prototype.checkIfCreature = function(player) {
  if (player.creature.name !=="" && player.creature.maybeCreature !== true) {
    this.error.classList.remove("no-display");
    this.error.querySelector("p").innerText ="Insert a correct Creature";
    this.isErrorCreature = true;
  } else {
    this.error.classList.add("no-display");
    this.isErrorCreature = false;
  }
}

Game.prototype.checkMana = function(player) {
  if (player.mana < (player.creature.mana0 + player.hability1.mana + player.hability2.mana)) {
    this.error.classList.remove("no-display");
    this.error.querySelector("p").innerText ="Not enough mana";
  } else {
    this.error.classList.add("no-display");
  }
}




