/*
1. Crie um script que realize o fatorial de um número n .
  - O fatorial é a multiplicação de um número por todos os seus antecessores até chegar ao número 1.
  - Armazene o script no arquivo fatorial.js .
  - Utilize o readline-sync para realizar o input de dados.
  - O script deve ser acionado através do comando npm run fatorial
  - Adicione validações para garantir que o valor informado seja um inteiro maior que 0.
*/

const readline = require("readline-sync")

function questionUser(callback) {
  const number = readline.questionInt('Digite um número:')
  if (number !== 0) {
    callback(number)
  } else {
    return console.log(`Insira número diferente de '0'`)
  }
}

function calculaFatorial(number) {
  let result = number
 for(let key = number - 1; key >= 1; key -= 1) {
  result *= key
 }
 return console.log(`O fatorial é ${result}`)
}

questionUser(calculaFatorial);