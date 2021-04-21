/*const appendJoke = (joke) => {
  const li = document.createElement('li');
  const ul = document.querySelector('ul')
  li.innerText = joke;
  ul.appendChild(li)
}

const fetchJoke = () => {
  fetch('https://icanhazdadjoke.com/', informacoesParaFazerARecuperacao)
}

window.onload = () => {
  fetchJoke()
} */

// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then((response) => {
      response.json()
        .then((data) => {
          const piada = data.joke
          const h2 = document.querySelector('h2#jokeContainer')
          h2.innerHTML= piada
      })
  });
}

window.onload = () => fetchJoke(fetch);