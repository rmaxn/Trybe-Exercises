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