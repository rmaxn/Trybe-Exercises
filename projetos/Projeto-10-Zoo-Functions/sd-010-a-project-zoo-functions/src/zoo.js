/*
eslint no-unused-vars: [
  "error",
  {
    "args": "none",
    "vars": "local",
    "varsIgnorePattern": "data"
  }
]
*/
const { animals } = require('./data');
const data = require('./data');

function animalsByIds(...ids) {
  return animals.filter((animais) => ids.includes(animais.id));
}

function animalsOlderThan(animal, age) {
  let result;
  animals.map(({ name, residents }) => {
    if (name === animal) {
      result = residents.every(({ age: idade }) => idade >= age)
    }
    return false
  })
  return result
}


function employeeByName(employeeName) {
  // seu código aqui
  const employees = data.employees
    .find((employee) => employee
      .firstName === employeeName || employee.lastName === employeeName);
  return employees !== undefined ? employees : {};
}


function createEmployee(personalInfo, associatedWith) {
  // seu código aqui
}

function isManager(id) {
  // seu código aqui
}

function addEmployee(id, firstName, lastName, managers, responsibleFor) {
  // seu código aqui
}

function animalCount(species) {
  // seu código aqui
}

function entryCalculator(entrants) {
  // seu código aqui
}

function animalMap(options) {
  // seu código aqui
}

function schedule(dayName) {
  // seu código aqui
}

function oldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
}

function employeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  animalMap,
  animalsByIds,
  employeeByName,
  employeeCoverage,
  addEmployee,
  isManager,
  animalsOlderThan,
  oldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
