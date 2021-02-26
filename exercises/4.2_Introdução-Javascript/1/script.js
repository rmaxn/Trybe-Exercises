//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
for (let index = 0; index < numbers.length; index++){
    console.log(numbers[index])
}
//Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
let resultado = 0;
for (let contador = 0; contador < numbers.length; contador++){
    resultado += numbers[contador]
}
    console.log(resultado);
//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let mediaAritmetica = resultado / numbers.length
console.log(mediaAritmetica)
//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (mediaAritmetica > 20) {
    console.log("Resultado maior que 20")
} else {
    console.log("Valor menor ou igual a 20")
}
//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorNumero = 0
for (let calculaMaior = 0; calculaMaior < numbers.length; calculaMaior += 1) {
    if (numbers[calculaMaior] > maiorNumero) {
        maiorNumero = numbers[calculaMaior]
    }
}
console.log(maiorNumero)
//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numerosImpares = 0
for (let index = 0; index < numbers.length; index += 1){
if (numbers[index] % 2 !== 0) {
    numerosImpares += 1
    }
} 
if (numerosImpares === 0) {
    console.log("Nenhum valor ímpar encontrado")
} else {
    console.log(numerosImpares)
    }
//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menorNumero = maiorNumero
for (let calculaMaior = 0; calculaMaior < numbers.length; calculaMaior += 1) {
    if (numbers[calculaMaior] < menorNumero) {
        menorNumero = numbers[calculaMaior]
    }
}
console.log(menorNumero)
//Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
let x = []
for (let index = 0; index <= 25; index += 1) {
    x.push(index);
} console.log(x);
//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
for (let index = 0; index < x.length; index += 1) {
    console.log((x[index] / 2))
}