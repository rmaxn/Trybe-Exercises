let a = 10;
let b = 18;
let c = 24;
// Adição
let soma = a + b;
    console.log(soma);
// Subtração
let subtracao = a - b;
    console.log(subtracao);
// Multiplicação
let multiplicacao = a * b;
    console.log(multiplicacao);
// Divisão
let divisao = a / b;
    console.log(divisao);
// Módulo
let modulo = a % b;
    console.log(modulo);
// Maior de dois números
if (a < b) {
    console.log("a é maior que b")
} else if (a > b) {
    console.log("a é menor que b")
} else {
    console.log("Operação Inválida")
}
// Maior de três números
if (a > b && a > c) {
    console.log("a é maior que b e a é maior que c")
} else if (b > a && b > c) {
    console.log("b é maior que a e b é maior que c")
} else {
    console.log("c é maior que a e b")
}
// Número negativo, positivo ou zero
if (a>=0) {
    console.log("positive")
} else if (a<=0) {
    console.log("negative")
} else {
    console.log("zero")
}
// Angulos do Triangulo
let anguloA = 45
let anguloB = 90
let anguloC = 45
if (anguloA + anguloB + anguloC === 180) {
    console.log(true)
} else {
    console.log(false)
}
// Peças de Xadrez
let xadrez = "horse"
switch (xadrez.toLowerCase()) {
    case "king":
        console.log("Move uma casa pra qualquer lado");
        break;
    case "queen":
        console.log("Move quantas casas quiser para qualquer lado");
        break;
    case "bishop":
        console.log("Move quantas casas quiser somente para diagonais")
        break;
    case "horse":
        console.log("Move duas casas para frente e em seguida uma casa para o lado esquerdo ou direito")
        break;
    default:
        console.log("Peça Inválida");
        break;
}
// Conceitos de A a F
let nota = 70
let conceito;
if (nota >= 90) {
    conceito = "A";
    console.log(conceito);
} else if (nota >=80) {
    conceito = "B";
    console.log(conceito);
} else if (nota >=70) {
    conceito = "C";
    console.log(conceito)
} else if (nota >=60) {
    conceito = "D";
    console.log(conceito)
} else if (nota >=50) {
    conceito = "E";
    console.log(conceito)
} else if (nota <50) {
    conceito = "F"
    console.log(conceito)
} else {
    console.log("Não Identificado");
}
// True para PAR e False caso contrário
let x = 2
let y = 9
let z = 4
if (x % 2 == 0 || y % 2 == 0 || z % 2 == 0){
    console.log("True")
} else {
    console.log("False")
}
// True para IMPAR e False caso contrário
if (x % 2 != 0 || y % 2 != 0 || z % 2 != 0){
    console.log("True")
} else {
    console.log("False")
}
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
    console.log("Isento de IR")
} else if (salarioSemINSS >= 1903.98 && salarioSemINSS <= 2826.65) {
    IR = salarioSemINSS * 0.075
    reducao = 142.80
    SalarioLiquido = salarioSemINSS - IR - reducao
    console.log("O salário líquido é de " + SalarioLiquido)
} else if (salarioSemINSS >= 2826.66 && salarioSemINSS <= 3751.05) {
    IR = salarioSemINSS * 0.15
    reducao = 354.80
    SalarioLiquido = salarioSemINSS - IR - reducao
    console.log("O salário líquido é de " + SalarioLiquido)
} else if (salarioSemINSS >= 3751.06 && salarioSemINSS <= 4664.68) {
    IR = salarioSemINSS * 0.225
    reducao = 636.13
    SalarioLiquido = salarioSemINSS - IR - reducao
    console.log("O salário líquido é de " + SalarioLiquido)
} else {
    IR = salarioSemINSS * 0.275
    reducao = 869.36
    SalarioLiquido = salarioSemINSS - IR - reducao
    console.log("O salário líquido é de " + SalarioLiquido)
}
    