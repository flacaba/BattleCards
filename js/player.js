function Player (obj,name) {
  this.name = obj.name;
  this.type = obj.type;
  this.card = obj.card;
  this.attack = obj.attack;
  this.defense = obj.defense;
  this.health0 = obj.health;
  this.mana0 = obj.mana;
  this.img = obj.img;
  this.explanation = obj.explanation;
  this.specialHability = obj.specialHability;
  this.health = obj.health;
  this.mana = obj.mana;
  this.playerDeck = document.getElementById(name + "Deck");
  this.playerTable = document.getElementById(name + "Table");
  this.characterPosition = this.playerTable.querySelector(".player-character-table");
  this.characterProperties = this.playerTable.querySelector(".player-character-properties");
  this.creaturePosition = this.playerDeck.querySelector(".creature");
  this.creatureProperties = this.playerDeck.querySelector(".creature-properties");
  this.hability1Position = this.playerDeck.querySelector(".hability1");
  this.hability2Position = this.playerDeck.querySelector(".hability2");
  this.hability1Properties = this.playerDeck.querySelector(".hability1-properties");
  this.hability2Properties = this.playerDeck.querySelector(".hability2-properties");
  this.previousCreature = "";
  this.creature;
  this.hability1;
  this.hability2;  
}

Player.prototype.isCreature = function() {
  
  if (this.creaturePosition.querySelector(".card-title") === null) {
    this.creature = new Creature(empty);
    this.previousCreature = "";

  } else {    
    if(this.previousCreature.name !== "") {
      var creatureName = this.creaturePosition.querySelector(".card-title").innerText;
      var currentCreature = habilities.filter(function(obj){
        return obj.name === creatureName;
      })
      this.creature = new Creature(currentCreature[0]);
    }
  
  }
  
  this.creature.drawAtt(this.creatureProperties);
}

Player.prototype.isHability1 = function() {
  
  if (this.hability1Position.querySelector(".card-title") === null) {
    this.hability1 = new playerHabilities(empty);

  } else {
    var habilityName = this.hability1Position.querySelector(".card-title").innerText;
    var currentHability1 = habilities.filter(function(obj){
      return obj.name === habilityName;
    })
    this.hability1 = new playerHabilities(currentHability1[0]);
  }
  
  this.hability1.drawAtt(this.hability1Properties);
}

Player.prototype.isHability2 = function() {
  
  if (this.hability2Position.querySelector(".card-title") === null) {
    this.hability2 = new playerHabilities(empty);

  } else {
    var habilityName = this.hability2Position.querySelector(".card-title").innerText;
    var currentHability2 = habilities.filter(function(obj){
      return obj.name === habilityName;
    })
    this.hability2 = new playerHabilities(currentHability2[0]);
  }
  
  this.hability2.drawAtt(this.hability2Properties);
}

Player.prototype.drawAtt = function() {
  this.drawHealth(this.characterProperties);
  this.drawMana(this.characterProperties);
  this.drawAttack(this.characterProperties);
  this.drawDefense(this.characterProperties);
}

Player.prototype.drawHealth = function(where) {
  var healthPosition = where.querySelector(".health");
  healthPosition.querySelector(".text-specs").innerText = this.health;
  this.drawHealthBar(healthPosition);
  
}

Player.prototype.drawMana = function(where) {
  var manaPosition = where.querySelector(".mana");
  manaPosition.querySelector(".text-specs").innerText = this.mana;
  this.drawManaBar(manaPosition);
}

Player.prototype.drawAttack = function(where) {
  var attackPosition = where.querySelector(".attack");
  attackPosition.querySelector(".text-specs").innerText = this.attack;
}

Player.prototype.drawDefense = function(where) {
  var defensePosition = where.querySelector(".defense");
  defensePosition.querySelector(".text-specs").innerText = this.defense;
}

Player.prototype.drawHealthBar = function(where) {
  var healthBar = where.querySelector(".actual");
  var currentHealthLength = (this.health/this.health0)*100;
  healthBar.setAttribute ("width",currentHealthLength +"%");
}

Player.prototype.drawManaBar = function(where) {
  var healthBar = where.querySelector(".actual");
  var currentManaLength = (this.mana/this.mana0)*100;
  healthBar.setAttribute ("width",currentManaLength +"%");
}

Player.prototype.attack = function(opponent) {

}
