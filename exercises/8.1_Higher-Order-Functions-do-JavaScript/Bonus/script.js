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
  return Math.round((Math.random() * (max - min) + min))
}

const setDragonsDamage = () => {
  dragon.damage = getRandomNumber(15, 50)
  console.log(
    `Dano: ${dragon.damage}, Força: ${dragon.strength}`
    )
}

setDragonsDamage()

/* 
2 - Crie uma função que retorna o dano causado pelo warrior.
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
*/ 
const setWarriorsDamage = () => {
  warrior.damage = getRandomNumber(30, (30*2))
  console.log(
    `Dano: ${warrior.damage}`
    )
    return warrior.damage
}

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

const setMageDamage = () => {
  let mana = mage.mana
  mage.damage = getRandomNumber(45, (45*2))
  if (mana < 15) {
    console.log('Não possui mana suficiente')
  } else {
    mana -= 15
  }
  return (mage.mana -= 15)
}

console.log(setMageDamage())

/* 
Parte II
Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions . O objeto será composto por ações do jogo e cada ação é por denifição uma HOF , pois neste caso, são funções que recebem como parâmetro outra função.

1 - Crie a primeira HOF que compõe o objeto gameActions . Ela será a função que simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon . Além disto ela também deve atualizar o valor da chave damage do warrior .
*/
let dragonsHealth = dragon.healthPoints;
let mageHealth = mage.healthPoints;
let warriorHealth = warrior.healthPoints;

warriorTurn = (health, damage) => {
  if (health > 0) {
    health -= damage;
    dragon.healthPoints = health;
    console.log(`Warrior's turn: Dragon's Health = ${health}`);
    mageTurn(health, setMageDamage())
  } else {
    console.log('O dragão foi derrotado')
  }
}

mageTurn = (health, damage) => {
  if (health > 0) {
    health -= damage;
    dragon.healthPoints = health;
    console.log(`Mage's turn: Dragon's Health = ${health}`);
  } else {
    console.log('O dragão foi derrotado')
  }
  return dragon.healthPoints = health;
}

dragonTurn = (health1, health2, damage) => {
  if (health1 > 0) {
    health1 -= damage;
    console.log(`Dragon's Turn: Warrior's health= ${health1}`)
  } else if (health2 > 0) {
    health2 -= damage;
    console.log(`Dragon's Turn: Mage's Healt= ${health2}`)
  }
}

const gameActions = {
  Turn1: console.log(warriorTurn(dragonsHealth, setWarriorsDamage())),
  Turn2: console.log(dragonTurn(warriorHealth, mageHealth, setDragonsDamage())),
};


