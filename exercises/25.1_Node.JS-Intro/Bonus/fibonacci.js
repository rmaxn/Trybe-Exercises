/*
2. Crie um script que exiba o valor dos n primeiros elementos da sequência de fibonacci.
  - A sequência de fibonacci começa com 0 e 1 e os números seguintes são sempre a soma dos dois números anteriores.
  - Armazene o script no arquivo fibonacci.js .
  - Utilize o readline-sync para realizar o input de dados.
  - O script deve ser acionado através do comando npm run fibonacci
  - Adicione o script ao menu criado no exercício 5.
  - Não imprima o valor 0 , uma vez que ele não está incluso na sequência;
  - Quando n = 10 , exatamente 10 elementos devem ser exibidos;
  - Adicione validações para garantir que o valor informado é um inteiro maior que 0.
*/

const readline = require('readline-sync');

function questionUser(callback) {
  const number = readline.questionInt('Digite um número:')
  if (number !== 0) {
    callback(number)
  } else {
    return console.log(`Insira número diferente de '0'`)
  }
}

function fibonnaciSequence(number) {
  let nextNumber = 0
  let firstNumbs = [0, 1]
  for(let key = 0; key < number - 2; key += 1) {
    nextNumber = firstNumbs[key] + firstNumbs[key + 1]
    firstNumbs.push(nextNumber)
  }
  return console.log(firstNumbs)
}

questionUser(fibonnaciSequence)