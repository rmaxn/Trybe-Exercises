/* Crie um "jogo de adivinhação" em que a pessoa ganha se acertar qual foi o número aleatório gerado
O script deve ser executado através do comando npm run sorteio .
Utilize o readline-sync para realizar input de dados.
Armazene o script em sorteio.js .
O número gerado deve ser um inteiro entre 0 e 10.
Caso a pessoa acerte o número, exiba na tela "Parabéns, número correto!".
Caso a pessoa erre o número, exiba na tela "Opa, não foi dessa vez. O número era [número sorteado]".
Ao final, pergunte se a pessoa deseja jogar novamente. Se sim, volte ao começo do script. */

const readline = require('readline-sync');

const sorteio = () => {
  const sorteado = Math.ceil((Math.random() * (10 - 0) + 0));
  const userBet = readline.questionInt("Insira um número de 1 a 10: ");
  if (sorteado === userBet) {
    console.log('Parabéns número correto!');
  } else {
    console.log(`Opa não foi dessa vez, o número era: ${sorteado}`);
  }
  const again = readline.question('Deseja jogar novamente?')
  if (again === "Sim" || again === 'sim') {
    sorteio();
  } else {
    console.log('Até a próxima!')
  }
}

const result = sorteio();

module.exports = result;
