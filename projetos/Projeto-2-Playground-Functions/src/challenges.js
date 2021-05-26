// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let phrase = string.split(' ');
  return phrase;
}

// Desafio 4
function concatName(array) {
  let lastItem = (array.length - 1);
  return (`${array[lastItem]}, ${array[0]}`);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((wins * 3) + ties);
}

// Desafio 6
let count = 0;
function discoverHigherNumber(maior, array) {
  for (let key in array) {
    if (array[key] > maior) {
      maior = array[key];
    }
  }
  return maior;
}

function highestCount(numbers) {
  let maior = discoverHigherNumber(0, numbers);
  for (let key in numbers) {
    if (numbers[key] === maior) {
      count += 1;
    }
  }
  return count;
}
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
function fizz(numbers) {
  if (numbers % 3 === 0 && numbers % 5 !== 0) {
    return 'fizz';
  } if (numbers % 3 !== 0 && numbers % 5 === 0) {
    return 'buzz';
  }
  return 'bug';
}

function fizzBuzz(numbers) {
  let array = [];
  for (let key in numbers) {
    if (numbers[key] % 3 === 0 && numbers[key] % 5 === 0) {
      array.push('fizzBuzz');
    } else {
      array.push(fizz(numbers[key]));
    }
  }
  return array;
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
