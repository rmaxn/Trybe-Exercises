// Crie uma função para contar quantos estudantes assistiram às aulas de matemática. Use o objeto criado no exercício 5.

const getNumberOfStudentsMath = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (index in array) {
      if(obj[array[index]].materia === 'Matemática'){
      total += obj[array[index]].numeroEstudantes;
      }
    }
    return total;
  }
  console.log(getNumberOfStudents(allLessons));

// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    for (index in array) {
      if (array[index].professor === name) {
        allLessons.push(array[index].materia)
        allStudent += array[index].numeroEstudantes;
      }
    }
    return { lessons: allLessons, estudantes: allStudent };
  }
  
  const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'));