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
  }.bind(this),100)

  this.player1FinishTurn.onclick = function() {
    this.checkIfError(this.player1);
    if(this.player1.isErrorCreature === false && this.player1.isNotEnoughMana === false) {
      this.finishTurn(this.player1,this.player2);
      this.changeButtonColours();
      window.location ="index3.html#player2Table";
    }
    // poner que se cambien los botones de color
  }.bind(this);

  this.player2FinishTurn.onclick = function() {
      this.checkIfError(this.player2);
      if(this.player2.isErrorCreature === false && this.player2.isNotEnoughMana === false) {
        this.finishTurn(this.player2,this.player1);
        this.changeButtonColours();
        window.location ="index3.html#player1Table";
      }
    
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
  if(player.isErrorCreature === false) {
    this.checkMana(player);
  }
}

Game.prototype.checkIfCreature = function(player) {
  if (player.creature.name !=="" && player.creature.maybeCreature !== true) {
    this.error.classList.remove("no-display");
    this.error.querySelector("p").innerText ="Insert a correct Creature";
    player.isErrorCreature = true;
    
  } else {
    this.error.classList.add("no-display");
    player.isErrorCreature = false;
  }
}

Game.prototype.checkMana = function(player) {
  if (player.mana < (player.creature.mana0 + player.hability1.mana + player.hability2.mana)) {
    this.error.classList.remove("no-display");
    this.error.querySelector("p").innerText ="Not enough mana";
    player.isNotEnoughMana = true;
  } else {
    this.error.classList.add("no-display");
    player.isNotEnoughMana = false;
  }
}

Game.prototype.changeButtonColours = function() {
  if (this.player1FinishTurn.classList.contains("btn-red") === true) {
    this.player1FinishTurn.classList.replace("btn-red","btn-green")
  } else {
    debugger;
    this.player1FinishTurn.classList.replace("btn-green","btn-red");
  }

  if (this.player2FinishTurn.classList.contains("btn-red") === true) {
    debugger;
    this.player2FinishTurn.classList.replace("btn-red","btn-green")
  } else {
    this.player2FinishTurn.classList.replace("btn-green","btn-red");
  }
}




