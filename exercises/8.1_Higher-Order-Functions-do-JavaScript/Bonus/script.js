const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

/* 
Parte I - Game Actions Simulator
Nestes exercícios você irá implementar HOFs que simulam um turno de batalha em um jogo. Você irá criar funções que calculam dano, atualizam status, e ao final, retornam os resultados da rodada.
Para os próximos exercícios copie o código abaixo.

1 - Crie uma função que retorna o dano do dragão.
O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
*/
const getRandomNumber = (min, max) => {
  return Math.floor((Math.random() * (max - min) + min))
}

const setDragonsDamage = (dragon) => {
  const minDmg = 15;
  const { strength } = dragon;
  const dragonDmg = getRandomNumber(minDmg, strength);
  return dragonDmg;
}

/* 
2 - Crie uma função que retorna o dano causado pelo warrior.
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
*/ 

const setWarriorsDamage = (warrior) => {
  const { weaponDmg } = warrior;
  const minDmg = warrior.strength;
  const maxDmg = minDmg * weaponDmg;
  const warriorDamage = getRandomNumber(minDmg, maxDmg);
  return warriorDamage;
};

/* 
3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};
*/

const setMageDamage = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg * 2;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    const mageDamage = getRandomNumber(minDmg, maxDmg);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};


/* 
Parte II
Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função.

1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .
*/

warriorTurn = (warrior) => {
  const warriorDamage = setWarriorsDamage(warrior);
  return warriorDamage;
};

mageTurn = (mage) => {
  const mageMana = mage.mana;
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    const mageDamage = setMageDamage(mage);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};


dragonsTurn = (dragon) => {
  const dragonDmg = setDragonsDamage(dragon);
  return dragonDmg;
};

const gameActions = {
  warriorTurn: (warriorTurn) => {
    const warriorDamage = warriorTurn(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageTurn) => {
    const mageTurnStats = mageTurn(mage);
    const mageDamage = mageTurnStats.damageDealt.damageDealt;
    const { manaSpent } = mageTurnStats;
    mage.damage = mageDamage;
    mage.mana -= manaSpent;
    dragon.healthPoints -= mageDamage;
    if (dragon.healthPoints <= 0) {
      console.log('Dragão foi derrotado')
    }
  },
  dragonsTurn: (dragonsTurn) => {
    const dragonDamage = dragonsTurn(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
    if (mage.healthPoints <= 0) {
      console.log(`O Mago morreu`)
    } else if (warrior.healthPoints <= 0) {
      console.log(`O Warrior morreu`)
    }
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorTurn);
gameActions.mageTurn(mageTurn);
gameActions.dragonsTurn(dragonsTurn);
console.log(gameActions.turnResults());
