/* Para os exercícios a seguir, use o seguinte código. */
const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */

const newTurn = (object, shift, value) => {
  object[`${shift}`] = value
  console.log(lesson2)
}

newTurn(lesson2, 'turno', 'manhã');

/* Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro. */

const keys = (object) => Object.keys(object);
console.log(keys(lesson1));

/* Crie uma função para mostrar o tamanho de um objeto. */
const objectSize = (object) => console.log(Object.keys(object).length);
objectSize(lesson3);

/* Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro. */
const values = (object) => console.log(Object.values(object));
values(lesson1)

/* Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte: */
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons)

/* Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas. */
const sumStudents = (object) => {
  const students = Object.values(object);
  let lesson1Students = students[0].numeroEstudantes
  let lesson2Students = students[1].numeroEstudantes
  let lesson3Students = students[2].numeroEstudantes
  return (lesson1Students + lesson2Students + lesson3Students)
}

console.log(sumStudents(allLessons))

/* 7. Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
  console.log(getValueByNumber(lesson1, 0));
  // Output: 'Matématica' */

const getValueByNumber = (object, position) => {
  console.log(Object.values(object)[position])
}
getValueByNumber(lesson1, 0) // Matemática

/* 8. Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. Exemplo:
  console.log(verifyPair(lesson3, 'turno', 'noite'));
  // Output: true,
  console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
  // Output: false */

const verifyPair = (object, key, value) => {
  let pairs = Object.entries(object)
  for(let index= 0; index < pairs.length; index += 1) {
    if (key === pairs[index][0] && value === pairs[index][1]) {
      return true
    }
  }
  return false
}

console.log(verifyPair(lesson3, 'turno', 'noite')) // true
console.log(verifyPair(lesson3, 'materia', 'Maria Clara')) // false

/* Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5: */

const sumStudentsByDiscipline = (matter) => {
  const discipline = Object.values(allLessons)
  let sum = 0
  for(let key of discipline) {
    // console.log(key.materia)
    if (key.materia === matter) {
    sum += key.numeroEstudantes
    }
  }
  return sum
}
console.log(sumStudentsByDiscipline('História')) // 20
console.log(sumStudentsByDiscipline('Matemática')) // 30
