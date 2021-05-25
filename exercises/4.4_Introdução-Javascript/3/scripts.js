let a = 10
let b = 18
let c = 24

//Adição
function sum (a, b) {
    return a + b;
}
console.log(sum(a, b))

//Subtração
function subtract (a, b) {
    return a - b;
}
console.log(subtract(a, b))

//Multiplicação
function multiply (a, b) {
    return a * b;
}
console.log(multiply(a, b));

//Divisão
function division (a, b) {
    return a / b;
}
console.log(division (a, b))

//Módulo
function module (a, b) {
    return a % b
}
console.log(module (a, b))

// Maior de Dois números
function maior (a, b) {
    if (a < b) {
        return ("a é maior que b")
    } else if (a > b) {
        return ("a é menor que b")
    } else {
        return ("Operação Inválida")
    }
}
console.log(maior (a, b))

// Maior de três números
function maiorDeTres (a, b, c) {
    if (a > b && a > c) {
        return("a é maior que b e a é maior que c")
    } else if (b > a && b > c) {
        return("b é maior que a e b é maior que c")
    } else {
        return("c é maior que a e b")
    }
}
console.log(maiorDeTres (a, b, c))

// Número negativo, positivo ou zero
function NegPosZeroCase (a) {
    if (a>=0) {
        return("positive")
    } else if (a<=0) {
        return("negative")
    } else {
        return("zero")
    }
}
console.log(NegPosZeroCase (a))

// Angulos do Triangulo
let anguloA = 45
let anguloB = 90
let anguloC = 45
function triAngles (anguloA, anguloB, anguloC) {
    if (anguloA + anguloB + anguloC === 180) {
        return(true)
    } else {
        return(false)
    }
}
console.log(triAngles (anguloA, anguloB, anguloC))

// Peças de Xadrez
let xadrez = "horse"
let king = "Move uma casa pra qualquer lado"
let queen = "Move quantas casas quiser para qualquer lado"
let horse = "Move duas casas para frente e em seguida uma casa para o lado esquerdo ou direito"
let bishop = "Move quantas casas quiser somente para diagonais"
function chess (king, horse, queen, bishop) {
    switch (xadrez.toLowerCase()) {
        case "king":
            return("Move uma casa pra qualquer lado");
            break;
        case "queen":
            return("Move quantas casas quiser para qualquer lado");
            break;
        case "bishop":
            return("Move quantas casas quiser somente para diagonais")
            break;
        case "horse":
            return("Move duas casas para frente e em seguida uma casa para o lado esquerdo ou direito")
            break;
        default:
            return("Peça Inválida");
            break;
    }
}
console.log(chess (king, horse, queen, bishop))

// Conceitos de A a F
let nota = 70
let conceito;
function concepts(nota, conceito) {
    if (nota >= 90) {
        conceito = "A";
        return(conceito);
    } else if (nota >=80) {
        conceito = "B";
        return(conceito);
    } else if (nota >=70) {
        conceito = "C";
        return(conceito)
    } else if (nota >=60) {
        conceito = "D";
        return(conceito)
    } else if (nota >=50) {
        conceito = "E";
        return(conceito)
    } else if (nota <50) {
        conceito = "F"
        return(conceito)
    } else {
        return("Não Identificado");
    }
}
console.log(concepts(nota, conceito))

// True para PAR e False caso contrário
let x = 2
let y = 9
let z = 4
function parOuImpar (x, y, z) {
    if (x % 2 == 0 || y % 2 == 0 || z % 2 == 0){
        return("True")
    } else {
        return("False")
    }
}
console.log(parOuImpar (x, y, z))

// True para IMPAR e False caso contrário
function imparOuPar (x, y, z) {
    if (x % 2 != 0 || y % 2 != 0 || z % 2 != 0){
        return("True")
    } else {
        return("False")
    }
}
console.log(imparOuPar (x, y, z))

// Custo de Produto X Valor de Venda
let valorVenda = 220;
let valorCusto = 150;
let impostoSobreOCusto = valorCusto * 0.2;
let valorCustoTotal = valorCusto + impostoSobreOCusto;
let lucro = valorVenda - valorCustoTotal;
let lucroTotal = lucro * 1000;
    console.log(lucroTotal)
    
// INSS e IR
let salarioBruto = 3500;
let INSS;
let salarioSemINSS
let IR;
let SalarioLiquido
let reducao
function calculaINSSEIR (salarioBruto, INSS, salarioSemINSS, IR, SalarioLiquido, reducao) {
    if (salarioBruto <= 1556.94) {
        INSS = salarioBruto * 0.08
        salarioSemINSS = salarioBruto - INSS
    } else if (salarioBruto > 1556.94 && salarioBruto < 2594.92) {
        INSS = salarioBruto * 0.09
        salarioSemINSS = salarioBruto - INSS
    } else if (salarioBruto > 2594.93 && salarioBruto < 5189.82) {
        INSS = salarioBruto * 0.11
        salarioSemINSS = salarioBruto - INSS
    } else if (salarioBruto > 5189.82 ) {
        INSS = 570,88
        salarioSemINSS = salarioBruto - INSS
    }
    if (salarioSemINSS <= 1903.98) {
        return("Isento de IR")
    } else if (salarioSemINSS >= 1903.98 && salarioSemINSS <= 2826.65) {
        IR = salarioSemINSS * 0.075
        reducao = 142.80
        SalarioLiquido = salarioSemINSS - IR - reducao
        return("O salário líquido é de " + SalarioLiquido)
    } else if (salarioSemINSS >= 2826.66 && salarioSemINSS <= 3751.05) {
        IR = salarioSemINSS * 0.15
        reducao = 354.80
        SalarioLiquido = salarioSemINSS - IR - reducao
        return("O salário líquido é de " + SalarioLiquido)
    } else if (salarioSemINSS >= 3751.06 && salarioSemINSS <= 4664.68) {
        IR = salarioSemINSS * 0.225
        reducao = 636.13
        SalarioLiquido = salarioSemINSS - IR - reducao
        return("O salário líquido é de " + SalarioLiquido)
    } else {
        IR = salarioSemINSS * 0.275
        reducao = 869.36
        SalarioLiquido = salarioSemINSS - IR - reducao
        return("O salário líquido é de " + SalarioLiquido)
    }
}
console.log(calculaINSSEIR (salarioBruto, INSS, salarioSemINSS, IR, SalarioLiquido, reducao))

