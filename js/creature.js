function Creature (obj) {
  this.name = obj.name;
  this.attack = obj.attack;
  this.defense = obj.defense;
  this.maybeCreature = obj.creature;
  this.mana0 = obj.mana;
  this.health0 = obj.health;
  this.specialHability = obj.specialHability;
  this.health = obj.health;
  this.mana = obj.mana;
}

Creature.prototype.drawAtt = function(where) {
  this.drawHealth(where);
  this.drawMana(where);
  this.drawAttack(where);
  this.drawDefense(where);
}

Creature.prototype.drawHealth = function(where) {
  var healthPosition = where.querySelector(".health");
  healthPosition.querySelector(".text-specs").innerText = this.health;
  this.drawHealthBar(where);
}

Creature.prototype.drawMana = function(where) {
  var manaPosition = where.querySelector(".mana");
  manaPosition.querySelector(".text-specs").innerText = this.mana;
}

Creature.prototype.drawAttack = function(where) {
  var attackPosition = where.querySelector(".attack");
  attackPosition.querySelector(".text-specs").innerText = this.attack;
}

Creature.prototype.drawDefense = function(where) {
  var defensePosition = where.querySelector(".defense");
  defensePosition.querySelector(".text-specs").innerText = this.defense;
}

Creature.prototype.drawHealthBar = function(where) {
  var healthBar = where.querySelector('.actual');
  var currentHealhtLength;
  if (this.name === "") {
    currentHealhtLength = 0;
  } else {
    currentHealhtLength = (this.health / this.health0) * 100;
  }
  healthBar.style.width = currentHealhtLength +"%";
}