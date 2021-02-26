let nota = 88
if (nota >= 80) {
    var resultado="aprovado(a)"
console.log("Parabéns, você foi aprovado(a)")
} else if (nota < 80 && nota >= 60) {
    resultado = "lista"
console.log("Você está na lista de espera")
} else {
    resultado = "reprovado(a)"
    console.log("Você foi reprovado(a)")
}

let status = resultado;
switch (status) {
    case "aprovado(a)":
        console.log("Parabéns, você foi aprovado(a)");
        break;
    
    case "lista":
        console.log("Você está na lista de espera");
        break;
    
    case "reprovado(a)":
        console.log("Você foi reprovado(a)")
        break;
    
    default:
        console.log("não se aplica");
}