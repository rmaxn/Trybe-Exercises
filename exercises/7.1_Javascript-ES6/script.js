/* Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
  1. Modifique a estrutura da função para que ela seja uma arrow function .
  2. Modifique as concatenações para template literals .
  3. Copie o código abaixo. */

/*
function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true); */

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
  } else {
    let elseScope = 'Não devo ser utilizada fora do meu escopo (else)';
    console.log(`${elseScope}`)
  }
}

testingScope(true)

/* Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort() . Spoiler: É possível realizar uma função que ordene qualquer array de números.
Copie o código abaixo. */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];


const sortArray = array => {
 const sortOddsAndEvens = array.sort((a, b) => a - b);
  return sortOddsAndEvens;
}

const sortedArray = sortArray(oddsAndEvens);
console.log(`Os números ${sortedArray} se encontram ordenados de forma crescente !`);

/*
Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions , template literals e ternary operator .
  1. Crie uma função que receba um número e retorne seu fatorial.
    Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
    Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha usando ternary operator .
*/

const factorial = number => number > 1 ? number * factorial(number - 1) : 1
console.log(factorial(5))

/* Crie uma função que receba uma frase e retorne qual a maior palavra. */

const longestWord = string => {
  let splitString = string.split(' ');
  let counter = 0
  let biggestWorld
  for (let index of splitString) {
    if (index.length > splitString[counter].length) {
      biggestWorld = index
      counter += 1
    }
  }
  return biggestWorld
}

longestWord("Antonio foi no banheiro e não sabemos o que aconteceu")

/* Crie uma página que contenha: 
Um botão ao qual será associado um event listener ;
Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.*/

const button = document.querySelector('.clickCount');
let p = document.createElement('p')
document.body.appendChild(p);
let clickCount = 1
button.addEventListener('click', function() {
  (clickCount === 1) ? p.innerText = `Clicou 1 vez` : p.innerText = `Clicou ${clickCount} vezes`;
  clickCount += 1
})

/* 4. Crie um código JavaScript com a seguinte especificação:
  Não se esqueça de usar template literals

    Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
      Exemplo:
        String determinada: "Tryber x aqui!"
        Parâmetro: "Bebeto"
        Retorno: "Tryber Bebeto aqui!"
    Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
*/

const searchXLetter = (word, string) => {
  let splitString = string.split(' ');
  for (let i of splitString) {
    if (i === 'x') {
      index = splitString.indexOf(i)
      splitString[index] = word
    }
  }
  return splitString.join(' ')
}

console.log(searchXLetter('Bebeto', 'Tryber x Aqui'))

/* Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string. */
let array = ['JavaScript', 'Python', 'CSS', 'HTML']
const concatPhrWSkills = (frase) => {
  let arrayOrdenado = array.sort().join(', ');
  let concat = `${frase} Tudo bem? Minhas cinco principais habilidades são: ${arrayOrdenado}! #GoTrybe`
  return concat
}
console.log(concatPhrWSkills(searchXLetter('Tryber x aqui!', 'Bebeto')))