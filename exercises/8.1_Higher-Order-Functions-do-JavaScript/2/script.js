/* 1. Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id . A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com. */
const newEmployees = () => {
  const employees = {
    id1: generateEmployee('Pedro Guerra'),
    id2: generateEmployee('Luiza Drumond'),
    id3: generateEmployee('Carla Paiva')
  }
  return employees;
};

generateEmployee = (name) => {
  const email = name.toLowerCase().split(' ').join('_')
  return {name, email: `${email}@betrybe.com}`};
}
console.log(newEmployees(generateEmployee));

/* Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */


const sorteio = () => {
  const result = Math.round((Math.random() * 5) + 1);
  return result;
} 
console.log(sorteio())

const check = () => {
  const aposta = Math.round((Math.random() * 5) + 1);
  if (sorteio() === aposta) {
  console.log('Parabéns você ganhou')
} else {
  console.log('Tente novamente')
  } 
} 
check()

/*  3. Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
*/

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const gabarito = (rightAnswers, studentAnswers, checkAnswers = () => {
  let count = 0;
  for (let index = 0; index < studentAnswers.length; index += 1) {
    if (rightAnswers[index] === studentAnswers[index]) {
      count += 1;
    } else if (studentAnswers[index] !== rightAnswers[index] && studentAnswers[index] !== 'N.A') {
      count -= 0.5;
    }
  }
  return count;
})

console.log(gabarito())