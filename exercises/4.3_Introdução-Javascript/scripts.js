//1
let n = 5
for (let index = 0; index < n; index += 1) {
    let linhaDeAsteriscos = "";
    
    for (let linha = 0; linha < n; linha += 1) {
        linhaDeAsteriscos = linhaDeAsteriscos + "*"
    }

    console.log(linhaDeAsteriscos);
}

// 2
let linhaDeAsteriscos = ""
for (let index = 0; index < n; index += 1) {
        linhaDeAsteriscos = linhaDeAsteriscos + "*"
    console.log(linhaDeAsteriscos);
}
// 3
let asterisco = "*"
let outraLinha = n
for (let index = 0; index < n; index += 1) {
    for(let coluna = 0; coluna <= n; coluna += 1) {
        if (coluna < outraLinha) {
            linhaDeAsteriscos = linhaDeAsteriscos + ' ';
        } else {
            linhaDeAsteriscos = linhaDeAsteriscos + asterisco
        }
    }
        console.log(linhaDeAsteriscos)
        linhaDeAsteriscos = ''
        outraLinha -= 1;
    }