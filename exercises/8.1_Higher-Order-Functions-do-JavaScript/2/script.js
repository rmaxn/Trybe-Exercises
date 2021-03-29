const newEmployees = () => {
  const employees = {
    id1: generateEmployee('Pedro Guerra'),
    id2: generateEmployee('Luiza Drumond'),
    id3: generateEmployee('Carla Paiva')
  }
  return employees;
};

generateEmployee = (name) => {
  const email = name.toLowerCase().split(' ').join('_')
  return {name, email: `${email}@betrybe.com}`};
}
console.log(newEmployees(generateEmployee));
