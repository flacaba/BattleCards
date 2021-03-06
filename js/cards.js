var habilities = [{
  name: "Acto de Traición",
  type: "Épica",
  card:"epic",
  creature: false,
  attack: 0,
  defense: 0,
  health: 0,
  mana: 4,
  img:"images/cards/01-rna-91-act-of-treason.jpg",
  explanation:"Ganas el control de la criatura del contrario, y le ataca directamente.",
  specialHability: function(playerA,playerB)  {
    if(playerB.creature.health !== 0) {
      if(playerB.health > playerB.creature.attack) {
        playerB.health = playerB.health - playerB.creature.attack
      } else {
        playerB.health = 0;
      } 
    }
  }
},
{
  name: "Amonestación Legal",
  type: "Normal",
  card:"normal",
  creature: false,
  attack: 0,
  defense: 0,
  health: 0,
  mana: 2,
  img:"images/cards/02-rna-31-arrester-s-admonition.jpg",
  explanation:"Destruye la criatura del adversario",
  specialHability: function(playerA,playerB) {
    playerB.creature.health = 0;
    playerB.creature.defense = 0;
  }
},
{
  name: "Amplifuego",
  type: "Épica. Criatura",
  card:"epic",
  creature: true,
  attack: 60,
  defense: 50,
  health: 300,
  mana: 4,
  img:"images/cards/03-rna-92-amplifire.jpg",
  explanation:"Criatura. Eleva las estadisticas de vida.",
  specialHability: function(playerA,playerB) {
    playerA.heath = playerA.health*1.15;
  }
},
{
  name: "Bestia de Rompehachas",
  type: "Legendaria. Criatura",
  card:"legendary",
  creature: true,
  attack: 100,
  defense: 100,
  health: 300,
  mana: 6,
  img:"images/cards/04-rna-121-axebane-beast.jpg",
  explanation:"Criatura Legendaria.",
  specialHability: function(playerA,playerB) {
  }
},
{
  name: "Despertar de los arcaicos",
  type: "Épica",
  card:"epic",
  creature: false,
  attack: 0,
  defense: 0,
  health: 0,
  mana: 4,
  img:"images/cards/05-rna-61-awaken-the-erstwhile.jpg",
  explanation:"Realiza 400 de daño al oponente directamente.",
  specialHability: function(playerA,playerB) {
    if(playerB.health > 400) {
      playerB.health = playerB.health-400;
    } else {
      playerB.health = 0;
    }
  }
},
{
  name: "Marcar al rojo vivo",
  type: "Normal",
  card:"normal",
  creature: false,
  attack: 50,
  defense: 0,
  health: 0,
  mana: 2,
  img:"images/cards/06-rna-64-bladebrand.jpg",
  explanation:"Inflinge 50 de daño al aponente directamente.",
  specialHability: function(playerA,playerB) {
    if(playerB.health > 50) {
      playerB.health = playerB.health-50;
    } else {
      playerB.health = 0;
    }
  }
},
{
  name: "Lianas de ceniza",
  type: "Legendaria",
  card:"legendary",
  creature: false,
  attack: 500,
  defense: 0,
  health: 0,
  mana: 6,
  img:"images/cards/07-rna-161-cindervines.jpg",
  explanation:"Inflige 500 de daño al aponente directamente.",
  specialHability: function(playerA,playerB) {
    if (playerB.health > 500) {
      playerB.health = playerB.health - 500;
    } else {
      playerB.health = 0;
    }
  }
},
{
  name: "Nodorog de Domri",
  type: "Épica. Criatura",
  card:"epic",
  creature: true,
  attack: 10,
  defense: 100,
  health: 400,
  mana: 4,
  img:"images/cards/08-rna-272-domri-s-nodorog.jpg",
  explanation:"Criatura. Eleva las estadísticas de vida y defensa.",
  specialHability: function(playerA,playerB) {
  }
},
{
  name: "Electrodominación",
  type: "Épica",
  card:"epic",
  creature: false,
  attack: 0,
  defense: 0,
  health: 0,
  mana: 4,
  img:"images/cards/09-rna-99-electrodominance.jpg",
  explanation:"Elimina los puntos de mana de adversario para el siguiente turno.",
  specialHability: function(playerA,playerB) {
    playerB.mana = 0;
  }
},
{
  name: "Pago final",
  type: "Normal",
  card:"normal",
  creature: false,
  attack: 0,
  defense: 0,
  health: 0,
  mana: 2,
  img:"images/cards/10-rna-171-final-payment.jpg",
  explanation:"Eleva en 3 puntos el mana",
  specialHability: function(playerA,playerB) {
    playerA.mana = playerA.mana + 3;
  }
},
{
  name: "Fuente de agonias",
  type: "Legendaria",
  card:"legendary",
  creature: false,
  attack: 0,
  defense: 0,
  health: 0,
  mana: 6,
  img:"images/cards/11-rna-74-font-of-agonies.jpg",
  explanation:"Si el adversario está por debajo del 15% de vida, lo elimina, de otra manera le inflinge un daño el 30% de la vida restante.",
  specialHability: function(playerA,playerB) {
    if(playerB.health < (playerB.health0*0.15)) {
      playerB.health = 0;
    } else {
      playerB.health = playerB.health*0.7;
    }
  }
},
{
  name: "Arynx enfurecido",
  type: "Legendaria. Criatura",
  card:"legendary",
  creature: true,
  attack: 0,
  defense: 0,
  health: 50,
  mana: 6,
  img:"images/cards/12-rna-173-frenzied-arynx.jpg",
  explanation:"Reduce en un 50% la vida restante del adversario.",
  specialHability: function(playerA,playerB) {
    playerB.health = playerB.health*0.5;
  }
},
{
  name: "Portales en llamas",
  type: "Normal",
  card:"normal",
  creature: false,
  attack: 0,
  defense: 0,
  health: 0,
  mana: 2,
  img:"images/cards/13-rna-102-gates-ablaze.jpg",
  explanation:"Reduce en un 10% la defensa",
  specialHability: function(playerA,playerB) {
    playerB.defense = playerB.defense*0.9;
  }
},
{
  name: "Deceso Grotesco",
  type: "Épica",
  card:"epic",
  creature: false,
  attack: 0,
  defense: 0,
  health: 0,
  mana: 4,
  img:"images/cards/14-rna-75-grotesque-demise.jpg",
  explanation:"Elimina permanentemente la defensa del adversario.",
  specialHability: function(playerA,playerB) {
    playerB.defense = 0;
  }
},
{
  name: "Manipulación Masiva",
  type: "Legendaria",
  card:"legendary",
  creature: false,
  attack: 0,
  defense: 0,
  health: 0,
  mana: 6,
  img:"images/cards/15-rna-42-mass-manipulation.jpg",
  explanation:"Las criaturas de adversario le atacan a el mismo - multiplicadas por 2 su ataque.",
  specialHability: function(playerA,playerB) {
    if(playerB.creature.health !== 0) {
      if(playerB.health > (playerB.creature.attack*2)) {
        playerB.health = playerB.health - playerB.creature.attack*2
      } else {
        playerB.health = 0;
      } 
    }
  }
},
{
  name: "Mortificar",
  type: "Legendaria",
  card:"legendary",
  creature: false,
  attack: 0,
  defense: 0,
  health: 0,
  mana: 6,
  img:"images/cards/16-rna-192-mortify.jpg",
  explanation:"Se produce un gran cataclismo que elimina el 75% de la vida del adversario.",
  specialHability: function(playerA,playerB) {
    playerB.health = playerB.health*0.25;
  }
},
{
  name: "Relicario orzhov",
  type: "Normal",
  card:"normal",
  creature: false,
  attack: 0,
  defense: 0,
  health: 0,
  mana: 2,
  img:"images/cards/17-rna-236-orzhov-locket.jpg",
  explanation:"Restaura un 25% de la vida restante.",
  specialHability: function(playerA,playerB) {
    playerA.health = playerA.health*1.25;
  }
},
{
  name: "Sierpe Devastadora",
  type: "Legendaria. Criatura",
  card:"legendary",
  creature: true,
  attack: 600,
  defense: 50,
  health: 10,
  mana: 6,
  img:"images/cards/18-rna-200-ravager-wurm.jpg",
  explanation:"Criatura Devastadora.",
  specialHability: function(playerA,playerB) {
  }
},
{
  name: "Golpe Brutal",
  type: "Normal",
  card:"normal",
  creature: false,
  attack: 100,
  defense: 0,
  health: 0,
  mana: 2,
  img:"images/cards/19-rna-203-savage-smash.jpg",
  explanation:"El adversario recibe un golpe de 100 de daño.",
  specialHability: function(playerA,playerB) {
    if(playerB.health > (100) ){
      playerB.health = playerB.health - 100; 
    } else {
      playerB.health = 0;
    } 
  }
},
{
  name: "Mutilador de chapiteles",
  type: "Legendaria. Criatura",
  card:"legendary",
  creature: true,
  attack: 100,
  defense: 0,
  health: 100,
  mana: 6,
  img:"images/cards/20-rna-86-spire-mangler.jpg",
  explanation:"Elimina a la criatura del oponente y además inflige 100 de daño al adversario.",
  specialHability: function(playerA,playerB) {
    playerB.creature.health = 0;
    playerB.creature.health = 0;
    if(playerB.health > 100) {
      playerB.health = playerB.health - 100;
    } else {
      playerB.health = 0;
    }
  }
},
]