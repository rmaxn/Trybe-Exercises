const divUm = document.getElementById('divUm');
const divDois = document.getElementById('divDois');
const divTres = document.getElementById('divTres');
const input = document.getElementById('input');
const myWebpage = document.getElementById('mySpotrybefy');

/*
1. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
  1.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
*/
function classSelected(event) {
  let selected = document.querySelector('.tech')
  selected.classList.remove('tech')
  event.target.classList.add('tech')
  input.value = '';
}

divUm.addEventListener('mouseover', classSelected)
divDois.addEventListener('mouseover', classSelected)
divTres.addEventListener('mouseover', classSelected)

/*
2. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
com a classe 'tech'; 
*/

function textChange() {
  let selected = document.querySelector('.tech')
  selected.innerText = input.value;
}

input.addEventListener('keyup', textChange)

/*
3. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
redirecione para alguma página;
  3.1. Que tal redirecionar para seu portifólio?
*/
let link = "https://rmaxn.github.io/portifolio/"
function redirect() {
  let title = document.getElementsByTagName('body')[0]
  let create = document.createElement('a')
  create.href= link
  create.id= 'mySpotrybefy'
  create.style.color = 'white'
  create.innerHTML= `<h3>${myWebpage.innerText}</h3>`
  title.replaceChild(create, myWebpage)
}

myWebpage.addEventListener('click', redirect)

/*
4. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
a cor do mesmo;
*/
function changeColor() {
  myWebpage.style.color = 'red'
}

myWebpage.addEventListener('mouseover', changeColor)

/*
Segue abaixo um exemplo do uso de event.target:
*/

function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

divUm.addEventListener('dblclick', resetText);
// Não precisa passar o parâmetro dentro do addEventListener. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'divUm'.