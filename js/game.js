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
  this.player1FinishTurn = document.querySelector(".turn-player1");
  this.player2FinishTurn = document.querySelector(".turn-player2");
  this.turns =[];
}

Game.prototype.start = function () {
  this.cardsTable = document.getElementsByClassName("card-frame darkgrey-background"); 
  for(i=0; i<this.cardsTable.length; i++){
    this.RandomCard = [habilities[getRandomCard()]];
    generateCards(this.RandomCard,this.cardsTable[i]);
  } 
  // deberia poner esto del draggable como una función
  makeItDraggable(this.player1.playerTable);
  makeItDroppable(this.player1.playerDeck);
  makeItDroppable(this.player1.playerTable);
  makeItDraggable(this.player2.playerTable);
  makeItDroppable(this.player2.playerDeck);
  makeItDroppable(this.player2.playerTable);

  this.intervalId = setInterval(function() {
    this.drawAtt();
  }.bind(this),100)

  this.player1FinishTurn.onclick = function() {
    this.finishTurn(this.player1,this.player2);
   
  }.bind(this);

  this.player2FinishTurn.onclick = function() {
    this.finishTurn(this.player2,this.player1);
  }.bind(this);
}

Game.prototype.finishTurn = function (playerA,playerB) {
  playerA.makeAttack(playerB)
  playerA.minusMana();
  playerB.plusMana();
  playerB.creatureAlive();
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



