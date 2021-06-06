/* Cor de fundo da tela; */
let body = document.body;
let userSection = document.querySelector('.backgroundSection')
let div = document.createElement('div')
div.classList.add('bgColorContainer')
userSection.appendChild(div)
let rainbowColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

function createColorDivs() {
  for (let index= 0; index < rainbowColors.length; index += 1) {
    let color = document.createElement('div')
    div.appendChild(color);
    color.classList.add('colorPick')
    color.style.backgroundColor = rainbowColors[index];
  };
};
createColorDivs();

const bgButtons = document.querySelector('.bgColorContainer');
bgButtons.addEventListener('click', function(event) {
  body.style.backgroundColor = event.target.style.backgroundColor
})

/*Cor do texto;*/
let textSection = document.querySelector('.textSection');
let textDiv = document.createElement('div');
textDiv.classList.add('txtColorContainer');
textSection.appendChild(textDiv);
let textColors = ['black', 'white'];


function createTextColors() {
  for (let index=0; index < textColors.length; index += 1) {
    let color = document.createElement('div')
    textDiv.appendChild(color)
    color.classList.add('colorPick')
    color.style.backgroundColor = textColors[index];
  };
};
createTextColors();

const textButtons = document.querySelector('.txtColorContainer');
textButtons.addEventListener('click', function(event) {
  let text = document.querySelector('.text')
  text.style.color = event.target.style.backgroundColor
});

/* Tamanho da Fonte */
function createSizeControllers() {
  let sizeController = document.querySelector('.fontSize')
  let divPai = document.createElement('div')
  divPai.classList.add('fontSizeContainer')
  sizeController.appendChild(divPai)
  let div1 = document.createElement('div')
  let div2 = document.createElement('div')
  div1.innerHTML = '+'
  div1.classList.add('colorPick', 'increase')
  div2.innerHTML = '-'
  div2.classList.add('colorPick', 'decrease')
  divPai.appendChild(div1)
  divPai.appendChild(div2)
}

createSizeControllers();

let increase = document.querySelector('.increase')
let decrease = document.querySelector('.decrease')
let fontSize = 12
const fontsizeButtons = document.querySelector('.fontSizeContainer');
fontsizeButtons.addEventListener('click', function(event) {
  let text = document.querySelector('.text');
  if (event.target === increase) {
    text.style.fontSize = (fontSize + 'pt')
    fontSize += 1;
  } if (event.target === decrease) {
    text.style.fontSize = (fontSize + 'pt')
    fontSize -= 1;
  }
})

/*Tipo da fonte (Font family) */
function createFontType() {
  let pai = document.querySelector('.fontFamily')
  pai.addEventListener('click', function(event) {
    let text = document.querySelector('.text');
    text.style.fontFamily = event.target.innerHTML
  })
}
createFontType();

/* Essas preferências devem ser salvas de forma que, ao retornar à página, as preferências que foram previamente configuradas possam ser aplicadas na tela. */
const saveButton = document.querySelector('#salvar')
saveButton.addEventListener('click', function() {
  let bgColor = document.body.style.backgroundColor
  let txtColor = document.querySelector('.text').style.color
  let fontsize = document.querySelector('.text').style.fontSize
  let fontfam = document.querySelector('.text').style.fontFamily
  localStorage.setItem('bgColor', bgColor)
  localStorage.setItem('txtColor', txtColor)
  localStorage.setItem('fontSize', fontsize)
  localStorage.setItem('fontFamily', fontfam)
});

document.body.style.backgroundColor = localStorage.getItem('bgColor');
document.querySelector('.text').style.color = localStorage.getItem('txtColor');
document.querySelector('.text').style.fontSize = localStorage.getItem('fontSize');
document.querySelector('.text').style.fontFamily = localStorage.getItem('fontFamily')