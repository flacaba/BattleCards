function playerHabilities (obj) {
  this.attack = obj.attack;
  this.defense = obj.defense;
  this.health0 = obj.health;
  this.specialHability = obj.specialHability;
  this.health = obj.health;
  this.mana = obj.mana;
}

playerHabilities.prototype.drawAtt = function(where) {
  this.drawHealth(where);
  this.drawMana(where);
  this.drawAttack(where);
  this.drawDefense(where);
}

playerHabilities.prototype.drawHealth = function(where) {
  var healthPosition = where.querySelector(".health");
  healthPosition.querySelector(".text-specs").innerText = this.health;
}

playerHabilities.prototype.drawMana = function(where) {
  var manaPosition = where.querySelector(".mana");
  manaPosition.querySelector(".text-specs").innerText = this.mana;
}

playerHabilities.prototype.drawAttack = function(where) {
  var attackPosition = where.querySelector(".attack");
  attackPosition.querySelector(".text-specs").innerText = this.attack;
}

playerHabilities.prototype.drawDefense = function(where) {
  var defensePosition = where.querySelector(".defense");
  defensePosition.querySelector(".text-specs").innerText = this.defense;
}