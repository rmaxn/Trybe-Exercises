/* 1 - Dado o código abaixo, complete-o de forma que seja impressa a área dos 3 retângulos. O código deve retornar em sequência 2 , 15 e 54 .
Dica: use spread operator .*/

const assert = require('assert');
const { cp } = require('fs/promises');

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  assert.strictEqual(rectangleArea(...rectangle), rectangle[0] * rectangle[1]); // altere a chamada da funcao rectangleArea
});

rectangles.forEach((rectangle) => {
 console.log(rectangleArea(...rectangle), rectangle[0] * rectangle[1])
}); // 2 15 54

/* 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos. Ou seja:
Dica: use parâmetro rest . */

const sum = (...args) => {
  return args.reduce((acc, curr) => acc + curr, 0)
}

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);

console.log(sum()) // 0
console.log(sum(1)) // 1
console.log(sum(1, 3)) // 4
console.log(sum(1, 2, 3)) // 6
console.log(sum(1, 2, 3, 4)) // 10

/* 3 - Escreva a função personLikes , que dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa, conforme mostrado abaixo:
Dica: use object destructuring. */

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

const personLikes = ({ name, age, likes }) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

assert.strictEqual(personLikes(alex), 'Alex is 26 years old and likes fly fishing.');
assert.strictEqual(personLikes(gunnar), 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.');

console.log(personLikes(alex)) // Alex is 26 years old and likes fly fishing.
console.log(personLikes(gunnar)) // Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.

/* 4 - Escreva uma função filterPeople que, dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20:
Dica: use object destructuring . */ 

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
const filterPeople = (arr) => arr.filter(({ nationality, bornIn }) => 
  nationality === 'Australian' && bornIn >= 1901 && bornIn <= 2001
);

const filteredPeople = filterPeople(people);

assert.deepStrictEqual(filteredPeople[0], { name: 'Nicole', bornIn: 1992, nationality: 'Australian' });
assert.deepStrictEqual(filteredPeople[1], { name: 'Toby', bornIn: 1901, nationality: 'Australian' });

console.log(filteredPeople[0]) // { name: 'Nicole', bornIn: 1992, nationality: 'Australian' }
console.log(filteredPeople[1]) // { name: 'Toby', bornIn: 1901, nationality: 'Australian' }

// 5 - Escreva a função swap , que dado um array de 3 elementos, retorna um novo array com o primeiro e terceiro elementos trocados. Detalhe: você precisa fazer essa função gastando 1 linha só:
// Dica: use array destructuring .

const myList = [1, 2, 3];

// escreva swap abaixo
const swap = ([a, b, c]) => [c, b, a]

const swappedList = swap(myList);

assert.strictEqual(swappedList[0], 3);
assert.strictEqual(swappedList[1], 2);
assert.strictEqual(swappedList[2], 1);

console.log(swappedList[0]) // 3
console.log(swappedList[1]) // 2
console.log(swappedList[2]) // 1

// 6 - Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função toObject que, dada uma lista, retorna um objeto representando o carro:
// Dica: use array destructuring e abbreviation object literal .

const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

// escreva toObject abaixo
const toObject = ([name, brand, year]) => {
  return {
    name,
    brand,
    year,
  }
}

assert.deepStrictEqual(toObject(palio), { name: 'Palio', brand: 'Fiat', year: 2019 });
assert.deepStrictEqual(toObject(shelbyCobra), { name: 'Shelby Cobra', brand: 'Ford', year: 1963 });
assert.deepStrictEqual(toObject(chiron), { name: 'Chiron', brand: 'Bugatti', year: 2016 });

console.log(toObject(palio)) // { name: 'Palio', brand: 'Fiat', year: 2019 }
console.log(toObject(shelbyCobra)) // { name: 'Shelby Cobra', brand: 'Ford', year: 1963 }
console.log(toObject(chiron)) // { name: 'Chiron', brand: 'Bugatti', year: 2016 }

// 7 - Escreva uma função shipLength que, dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:
// Dica: use object destructuring .


const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// escreva shipLength abaixo
const shipLength = ({ name, length, measurementUnit}) =>  `${name} is ${length} ${measurementUnit} long`

assert.strictEqual(shipLength(ships[0]), 'Titanic is 269.1 meters long');
assert.strictEqual(shipLength(ships[1]), 'Queen Mary 2 is 1132 feet long');
assert.strictEqual(shipLength(ships[2]), 'Yamato is 256 meters long');

console.log(shipLength(ships[0])) // Titanic is 269.1 meters long
console.log(shipLength(ships[1])) // Queen Mary 2 is 1132 feet long
console.log(shipLength(ships[2])) // Yamato is 256 meters long

// 8 - Escreva uma função greet que, dado o nome de uma pessoa, retorna uma mensagem de cumprimento:
// Dica: use default params .

// escreva greet abaixo
const greet = (...args) => {
  if (args.length === 1) {
    return `Hi ${args}`
  } else {
    return `${args[1]} ${args[0]}`
  }
}

assert.strictEqual(greet('John'), 'Hi John');
assert.strictEqual(greet('John', 'Good morning'), 'Good morning John');
assert.strictEqual(greet('Isabela', 'Oi'), 'Oi Isabela');

console.log(greet('John')) // Hi John
console.log(greet('John', 'Good morning')) // Good morning John
console.log(greet('Isabela', 'Oi')) // Oi Isabela
