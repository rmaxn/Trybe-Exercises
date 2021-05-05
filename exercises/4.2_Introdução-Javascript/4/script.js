//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
for (let index of numbers){
    console.log(index)
}

//Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
let resultado = 0;
for (let contador of numbers){
    resultado += contador
}
    console.log(resultado);

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let mediaAritmetica = resultado / numbers.length
console.log(mediaAritmetica)

//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (mediaAritmetica > 20) {
    console.log("Valor maior que 20")
} else {
    console.log("Valor menor ou igual a 20")
}

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorNumero = 0
for (let calculaMaior of numbers) {
    if (calculaMaior > maiorNumero) {
        maiorNumero = calculaMaior
    }
}
console.log(maiorNumero)

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numerosImpares = []
for (let odd of numbers){
if (odd % 2 !== 0) {
    numerosImpares.push(odd)
    }
} 
if (numerosImpares.lenght === 0) {
    console.log("Nenhum valor ímpar encontrado")
} else {
    console.log(`Foram encontrados números ímpares no array: ${numerosImpares}`)
    }

//Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menorNumero = maiorNumero
for (let calculaMaior of numbers) {
    if (calculaMaior < menorNumero) {
        menorNumero = calculaMaior
    }
}
console.log(menorNumero)

//Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
let x = []
for (let index = 0; index <= 25; index += 1) {
    x.push(index);
} console.log(x);

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
for (let index of x) {
    console.log(index / 2)
}