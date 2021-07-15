const assert = require('assert');

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA
const exercise1 = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

function formatedBookNames() {
  // escreva seu código aqui
  const arrayResult = books
    .map((book) => (`${book.name} - ${book.genre} - ${book.author.name}`))
  return arrayResult
}

// console.log(formatedBookNames())
assert.deepStrictEqual(formatedBookNames(), exercise1);

/* Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado. */

const exercise2 = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

function nameAndAge() {
  // escreva seu código aqui
  const arrayResult = books
    .map((book) => ({
      age: (book.releaseYear - book.author.birthYear),
      author: book.author.name
      }))
      .sort((booka, bookb) => booka.age - bookb.age);
  return arrayResult
}

// console.log(nameAndAge())
assert.deepStrictEqual(nameAndAge(), exercise2);

// 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
const exercise3 = [
  { 
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: { name: 'George R. R. Martin', birthYear: 1948 },
    releaseYear: 1991
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: { name: 'Frank Herbert', birthYear: 1920 },
    releaseYear: 1965
  }
];

function fantasyOrScienceFiction() {
  // escreva seu código aqui
  const arrayResult = books
    .filter((book) => book.genre === 'Ficção Científica'
    || book.genre === 'Fantasia');
  return arrayResult
}

// console.log(fantasyOrScienceFiction())
assert.deepStrictEqual(fantasyOrScienceFiction(), exercise3);

// 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.
const exercise4 = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954,
  },
];

function oldBooksOrdered() {
  // escreva seu código aqui
  const arrayResult = books.filter((book) => book.releaseYear < 1961).sort((booka, bookb) => booka.releaseYear - bookb.releaseYear)
  return arrayResult
}

// console.log(oldBooksOrdered())
assert.deepStrictEqual(oldBooksOrdered(), exercise4);

// 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const exercise5 = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  const arrayResult = fantasyOrScienceFiction()
    .map((book) => `${book.author.name}`).sort();
  return arrayResult
}

// console.log(fantasyOrScienceFictionAuthors())
assert.deepStrictEqual(fantasyOrScienceFictionAuthors(), exercise5);

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
const exercise6 = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

function oldBooks() {
  // escreva seu código aqui
  const arrayResult = books.filter((book) => book.releaseYear < 1961)
    .map((book) => book.name)
  return arrayResult
}

assert.deepStrictEqual(oldBooks(), exercise6);

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
const exercise7 = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
  const result = books.find((book) => (
    book.author.name
      .split(' ')
      .filter((word) => word
      .endsWith('.')).length === 3
  )).name;
  return result
}

assert.deepStrictEqual(authorWith3DotsOnName(), exercise7);