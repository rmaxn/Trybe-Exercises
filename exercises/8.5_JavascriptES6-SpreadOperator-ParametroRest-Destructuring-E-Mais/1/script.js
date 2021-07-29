// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Abacaxi', 'Banana'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite Condensado', 'Creme de Leite', 'Chocolate'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  const result = [...fruit, ...additional]
  return result;
};

console.log(fruitSalad(specialFruit, additionalItens));