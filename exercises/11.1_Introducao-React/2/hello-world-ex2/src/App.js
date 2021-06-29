import React from 'react'
import './App.css';

// Crie um novo projeto utilizando npx create-react-app .

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

/* 
Crie uma lista de tarefas simples que:
Utilize a função Task dentro do componente App .
Leia as tarefas de dentro de um Array.
Use a função map para criar cada item da lista no HTML.
Solução:
*/
const tasks = ['Acordar', 'Tomar café', 'Estudar', 'Almoçar', 'Dormir', 'Ver TV']

class App extends React.Component {
  render() {
    return (
      <ul>{ tasks.map(task => Task(task)) }</ul>
    );
  }
}

export default App;
