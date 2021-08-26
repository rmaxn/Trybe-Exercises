/* Agora a prática
Antes de começar, crie uma nova pasta e, dentro dela, crie um pacote Node.js com o npm init chamado my-scripts . Realize os exercícios dentro desse pacote.

1. Crie um script para calcular o Índice de Massa Corporal(IMC) de uma pessoa.
2. A fórmula para calcular o IMC é peso / altura ^ 2 .
Obs: Lembre-se que a altura é em metros, caso deseje usar em centímetros a conversão para metros será necessária.
3. Comece criando um novo pacote node com npm init e respondendo às perguntas do npm .
4. Por enquanto, não se preocupe em pedir input da pessoa usuária. Utilize valores fixos para peso e altura .
5. Armazene o script no arquivo imc.js . 
7. Chegou a hora de tornar nosso script mais interativo! Vamos adicionar input de quem usa.
Você já utilizou o pacote readline-sync para esse fim. Que tal utilizar o mesmo pacote?
Substitua os valores fixos de peso e altura por dados informados pela pessoa ao responder as perguntas "Qual seu peso?" e "Qual sua altura?" no terminal.
8. Agora temos um problema: peso não é um número inteiro! Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.
O pacote readline-sync possui uma função específica para tratar esses casos. Consulte a documentação do pacote e encontre o método adequado para realizar input de floats .
Encontrou a função? Show! Agora utilize-a para solicitar o input de peso .
9. Vamos sofisticar um pouco mais nosso script. Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra: */

const readline = require('readline-sync');


const imc = () => {
  const peso = readline.questionFloat('Insira o seu peso: ');
  const altura = readline.questionInt('Insira sua altura em cm: ');
  const imcResult = (peso / ((altura/100) ** 2));
  if (imcResult <= 18.5) {
    console.log("Abaixo do peso (magreza)");
  } else if (imcResult > 18.5 && imcResult <= 24.9) {
    console.log("Peso normal");
  } else if (imcResult > 24.9 && imcResult <= 29.9) {
    console.log("Acima do peso (sobrepeso)");
  } else if (imcResult > 29.9 && imcResult <= 34.9) {
    console.log("Obesidade Grau I");
  } else if (imcResult > 34.9 && imcResult <= 39.9) {
    console.log("Obesidade Grau II");
  } else {
    console.log("Obesidade Grau III");
  }
}

const result = imc()


module.exports = result;
