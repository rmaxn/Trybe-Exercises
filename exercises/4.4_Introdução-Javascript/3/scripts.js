let info = {
    personagem: ["Margarida", "Tio Patinhas"],
    origem: ["Pato Donald", "Christmas on Bear Mountain, Dell's Four Color Comics #178"],
    nota: ["Namorada do personagem principal nos quadrinhos do Pato Donald", "O último MacPatinhas",],
    recorrente: "Ambos Recorrentes"
  };

// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
console.log('Bem vinda ' + info.personagem)

// Insira no objeto uma nova propriedade com o nome de chave "recorrente" e o valor "Sim" e, em seguida, imprima o objeto no console.

// Faça um for/in que mostre todas as chaves do objeto.
for (let key in info) {
    console.log(key)
}

// Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
for (let allKeys in info) {
    console.log(info[allKeys])
}

// PARTE II
// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
let arara = "palindromo"
let desenvolvimento = "animal"
function verificaPalindrome(arara, desenvolvimento) {
    if (arara === "palindromo") {
        return true
    } else {
        return false
    }
}
console.log(verificaPalindrome(arara))
console.log(verificaPalindrome(desenvolvimento))

// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let maior = [2, 3, 6, 7, 10, 1]
let maiorNum = 0;
function maiorValor (maior) {
    for (let index in maior) {
        if (maior[maiorNum] < maior[index]) {
            maiorNum = index;
        }
    }
    return(maiorNum)
}
console.log(maiorValor([2, 3, 6, 7, 10, 1]));

// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
let menor =  [2, 4, 6, 7, 10, 0, -3];
let menorNum = 0;
function menorValor (menor) {
    for (let indiceMenor in menor) {
        if (menor[menorNum] > menor[indiceMenor]) {
            menorNum = indiceMenor
        }
    }
    return(menorNum)
}
console.log(menorValor([2, 4, 6, 7, 10, 0, -3]))

// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
function biggestWord(names) {
    let maiorNome = names[0];
    for (let indiceNome in names) {
        if (maiorNome.length < names[indiceNome].length) {
            maiorNome = names[indiceNome];
        }
    }
    return biggestWord;
}
console.log(biggestWord(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); 