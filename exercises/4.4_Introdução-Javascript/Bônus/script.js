/* 1. (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa. 
  Atenção! Esse exercício já apareceu no processo seletivo de uma grande multinacional!
  Dicas:
    Uma string é um array de caracteres, então cada elemento do array é uma letra.
    O valor de cada numeral romano é:
      | I   | 1    |
      | --- | ---- |
      | IV  | 4    |
      | V   | 5    |
      | IX  | 9    |
      | X   | 10   |
      | XL  | 40   |
      | L   | 50   |
      | XC  | 90   |
      | C   | 100  |
      | CD  | 400  |
      | D   | 500  |
      | CM  | 900  |
      | M   | 1000 |
*/

function algarismConverter(romanArray) {
  let romanObject = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let resultado = 0;
  let arrayNumbers = [];
  for(let key in romanArray) { 
    arrayNumbers[key] = romanObject[romanArray[key]];
    console.log(romanObject[romanArray[key]])
  }
  for (let key in arrayNumbers) {
    if (arrayNumbers[key] < arrayNumbers[key + 1]) {
        arrayNumbers[key + 1] = arrayNumbers[key + 1] - arrayNumbers[key];
    } else {
      resultado += arrayNumbers[key];
    }
  }
  return resultado;
}
console.log(algarismConverter('MMXXI'))

/* Pŕatica */ 
let day = algarismConverter('XXV');
let month = algarismConverter('V');
let year = algarismConverter('MMXXI');
console.log(`Today is ${day} de ${month} de ${year}`)

/* Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função. */

function arrayOfNumbers(vector) {
  let result = [];
  let pares = [];
  for(let key in vector) {
    result = vector[key]
    for (key in result) {
      if (result[key] %2 === 0) {
        pares.push(result[key])
      }
    }
  }
  console.log(pares);
}

arrayOfNumbers([[1, 2], [3,4,5,6], [7,8,9,10]])

/* A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função. Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates... */

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

function arrayofFruits() {
  let fruit
  let repeatTime = 0
  let position = 0
  let fruitObj = {}
  for (let key in basket) {
    for(key in basket) {
      fruit = basket[position]
      if (fruit === basket[key]) {
        repeatTime += 1
        fruitObj[`${fruit}`] = repeatTime
      }
    }
    position += 1
    repeatTime = 0
  }
  console.log(fruitObj)
}
arrayofFruits();