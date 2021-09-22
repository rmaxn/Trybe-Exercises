/* Agora, um passo para trás: vamos fazer, passo a passo, uma Promise
1) Primeiramente, instancie uma Promise
Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.
Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!
3) Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"
4) Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.*/

const getRandomNumber = () => Math.floor(Math.random() * (50 - 1) + 1)
const randomNumbers = [];

const produceArray = (array, callback) => {
  array.push(callback)
  return array;
}

const looping = () => {
  while (randomNumbers.length < 10) {
    produceArray(randomNumbers, getRandomNumber())
  }
  return randomNumbers
}

const promise = new Promise((resolve, reject) => {
  const array = looping();
  const sum = array.reduce((acc, curr) => acc + curr);
  if (sum < 100) {
    return reject(sum);
  }
  resolve(sum);
})

/* Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado. */
// .then(sum => `Promise Resolvida, soma: ${sum}`)

/*2) Quando a promise for resolvida com sucesso, retorne um array com 4 itens, sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10. */
.then(sum => [2, 3, 5, 10].map(number => sum / number))
/* 4) Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.*/
.then(array => array.reduce((number, acc) => number + acc, 0))
.then(msg => console.log(msg))

/* 3) Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!" */
.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));

