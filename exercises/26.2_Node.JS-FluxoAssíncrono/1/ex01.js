/* Crie uma função que recebe três parâmetros retorna uma Promise .
Caso algum dos parâmetros recebidos não seja um número, rejeite a Promise com o motivo "Informe apenas números" .
Caso todos os parâmetros sejam numéricos, some os dois primeiros e multiplique o resultado pelo terceiro ( (a + b) * c ).
Caso o resultado seja menor que 50, rejeite a Promise com o motivo "Valor muito baixo"
Caso o resultado seja maior que 50, resolva a Promise com o valor obtido. */


function calcNum(a, b, c) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number')
      reject('Informe apenas números');
      const result = (a + b) * c;
      if (result < 50) {
        return reject("Valor muito baixo")
      }

      resolve(result);
  });
}

// Testes
calcNum(2, 7, 10)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
// 90

calcNum(1, 'a', 4)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
// Informe apenas números

calcNum(1, 4, 3)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))
// Valor muito baixo

/* Escreva um código para consumir a função construída no exercício anterior.
Gere um número aleatório de 1 a 100 para cada parâmetro que a função recebe. Para gerar um número aleatório, utilize o seguinte trecho de código: Math.floor(Math.random() * 100 + 1) .
Chame a função do exercício anterior, passando os três números aleatórios como parâmetros.
Utilize then e catch para manipular a Promise retornada pela função:
Caso a Promise seja rejeitada, escreva na tela o motivo da rejeição.
Caso a Promise seja resolvida, escreva na tela o resultado do cálculo. */


function getRandomNumber() {
  return Math.floor(Math.random() * 100 + 1)
}

const a = getRandomNumber()
const b = getRandomNumber()
const c = getRandomNumber()

calcNum(a, b, c)
  .then(resolve => console.log(resolve))
  .catch(error => console.log(error))

/* Realize o download deste arquivo e salve-o como simpsons.json . Utilize o arquivo baixado para realizar os requisitos abaixo.
Você pode utilizar then e catch , async/await ou uma mistura dos dois para escrever seu código. Procure não utilizar callbacks.
Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato id - Nome . Por exemplo: 1 - Homer Simpson .
Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.
Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json , contendo as personagens com id de 1 a 4.
Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz .
Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson no arquivo simpsonFamily.json . */

const fs = require('fs').promises;

fs.readFile('./simpsons.json', 'utf-8')
  .then((content) => {
    return JSON.parse(content)
  })
  .then((simp) => {
    return simp.map(({ id, name}) => `${id} - ${name}`)
  })
  .then((names) => {
    names.forEach((name) => console.log(name))
  });


function getSimsponbyId() {
  const simpson = fs.readFile('./simpsons.json', 'utf8')
  // const findId = simpsons.find((simpson) => simpson.id === id)
  return console.log(simpson)
}

console.log(getSimsponbyId())