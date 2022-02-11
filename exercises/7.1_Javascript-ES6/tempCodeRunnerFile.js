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