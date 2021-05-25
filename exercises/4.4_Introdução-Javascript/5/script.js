/* PARTE II
1 Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for. */

function verificaPalindrome(word) {
  let letterPosition = (word.length - 1)
  let string = word.toLowerCase()
  for (let index in word) {
    if (string[index] === string[letterPosition]) {
    letterPosition -= 1
    }
  } if (letterPosition === -1) {
    console.log(`${true}: ${word} é palíndrome`)
  } else {
    console.log(`${false}: ${word} não é palíndrome`)
  }
}
verificaPalindrome('Arara');
verificaPalindrome('Desenvolvimento')

/* 2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor. */
function maiorValor (maior) {
  let maiorNum = 0;
  let indice = 0
  for (let index in maior) {
    if (maiorNum < maior[index]) {
      indice = index;
      maiorNum = maior[index];
    }
  }
  return(`O maior número é ${maiorNum} seu índice no array é ${indice}`)
}
console.log(maiorValor([2, 3, 6, 7, 10, 1]));

/* 3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor. */
function menorValor (menor) {
  let menorNum = 0;
  let indice = 0;
  for (let index in menor) {
    if (menor[menorNum] > menor[index]) {
      menorNum = menor[index];
      indice = index;
    }
  }
  return(`O menor número é ${menorNum} e seu índice no array é ${indice}`)
}
console.log(menorValor([2, 4, 6, 7, 10, 0, -3]))

/* 4.  Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres. */ 

function biggestName(names) {
  let maiorNome = '';
  for (let index in names) {
    if (maiorNome.length < names[index].length) {
      maiorNome = names[index];
    }
  }
  return console.log(`O maior nome do array é ${maiorNome}`);
}

biggestName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])

/* 5.  Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete. */

function numberRepeated(numbers) {
  let countRepeat = 0;
  let repeatedNumber = 0;
  let repeatsCount = 0;
  for (let key in numbers) {
    let checkNumber = numbers[key];
    for (let key2 in numbers) {
      if (checkNumber === numbers[key2]) {
        countRepeat += 1;
      }
    }
      if (countRepeat > repeatsCount) {
        countRepeat = repeatedNumber;
        repeatsCount = key;
      }
        repeatedNumber = 0;
    }
    console.log(numbers[repeatsCount])
  }

numberRepeated([2, 3, 2, 5, 8, 2, 3])

/* 6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N. */

function sumNumbers(number) {
  let n = number
  for (let index= 0; index < number; index += 1) {
    n += index
  } console.log(n)
}
sumNumbers(5)

/* 7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word. */

function verificaFinal(word, ending) {
  let reverseWord = word.split('').reverse();
  let reverseEnding = ending.split('').reverse();
  let endingLetters = 0
  for (let index= 0; index < word.length; index += 1) {
    if (reverseWord[index] === reverseEnding[index]) {
      endingLetters += 1
    }
  } 
  if (endingLetters === ending.length) {
    return true
  } 
  return false
} 
console.log(verificaFinal('trybe', 'be'))
console.log(verificaFinal('joaofernando', 'fernan'))
