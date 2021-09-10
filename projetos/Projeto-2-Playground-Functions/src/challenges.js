// Desafio 1
const compareTrue = (value1, value2) => {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
};

console.log(compareTrue(true, true)); // true;
console.log(compareTrue(true, false)); // false;
console.log(compareTrue(false, false)); // false;

// Desafio 2
const calcArea = (base, height) => (base * height) / 2;

console.log(calcArea(10, 50)); // 250
console.log(calcArea(5, 2)); // 5
console.log(calcArea(51, 1)); // 25.5

// Desafio 3
const splitSentence = (string) => string.split(' ');

console.log(splitSentence('go Trybe')); // [ 'go', 'Trybe' ]
console.log(splitSentence('vamo que vamo')); // [ 'vamo', 'que', 'vamo' ]
console.log(splitSentence('foguete')); // [ 'foguete' ]

// Desafio 4
const concatName = (array) => {
  let last = (array.length - 1);
  return (`${array[last]}, ${array[0]}`);
};

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'])); // Paolillo, Lucas
console.log(concatName(['foguete', 'não', 'tem', 'ré'])); // ré, foguete
console.log(concatName(['captain', 'my', 'captain'])); // captain, captain

// Desafio 5
const footballPoints = (wins, ties) => ((wins * 3) + ties);

console.log(footballPoints(14, 8)); // 50
console.log(footballPoints(1, 2)); // 5
console.log(footballPoints(0, 0)); // 0

// Desafio 6
function discoverHigherNumber(array) {
  let maior = 0;
  array.reduce((acc, curr) => {
    if (acc > curr) {
      maior = acc;
    }
    return maior;
  });
  return maior;
}

function highestCount(numbers) {
  let count = 0;
  let maior = discoverHigherNumber(numbers);
  numbers.forEach((number) => {
    if (number === maior) {
      count += 1;
    }
  });
  return count;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7])); // 2
console.log(highestCount([0, 4, 4, 4, 9, 2, 1])); // 1
console.log(highestCount([0, 0, 0])); // 3

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if ((cat1 - mouse) > (cat2 - mouse)) {
    return 'cat2';
  } if ((cat1 - mouse) < (cat2 - mouse)) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbers) {
  const array = ['fizz', 'buzz', 'fizzBuzz', 'bug!'];
  const result = [];
  for (let key of numbers) {
    if ((key % 3 === 0) && (key % 5 === 0)) {
      result.push(array[2]);
    } else if ((key % 3 === 0) && (key % 5 !== 0)) {
      result.push(array[0]);
    } else if ((key % 3 !== 0) && (key % 5 === 0)) {
      result.push(array[1]);
    } else {
      result.push(array[3]);
    }
  }
}

// Desafio 9
function encode(string) {
  let encoded = '';
  let obj = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let key of string) {
    if (obj[key]) {
      encoded += obj[key];
    } else {
      encoded += key;
    }
  }
  return encoded;
}

function decode(string) {
  let decoded = [];
  let obj = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let key of string) {
    if (obj[key]) {
      decoded += obj[key];
    } else {
      decoded += key;
    }
  } return decoded;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
