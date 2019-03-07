// var player1 = new Player (characters[0]);
// var player2 = new Player (characters[1]);

function Game (objA, objB) {
  this.player1 = new Player(objA);
  this.player2 = new Player(objB);
}

Game.prototype.start = function () {
  this.cardsDeck = document.getElementsByClassName("card-frame darkgrey-background"); 
  for(i=0; i<this.cardsDeck.length; i++){
    this.RandomCard = [habilities[getRandomCard()]];
    generateCards(this.RandomCard,this.cardsDeck[i],true);
  } 
}

