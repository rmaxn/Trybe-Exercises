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
