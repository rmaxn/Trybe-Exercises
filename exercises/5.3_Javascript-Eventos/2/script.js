function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

/*
O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Domingo e Segunda-feira.
  - Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . Ex: <li class="day">3</li>
  - Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . Ex: <li class="day holiday">24</li>
  - Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . Ex: <li class="day friday">4</li>

Escreva seu código abaixo:

Exercício adaptado para o mês de Maio de 2021
Array dezDaysList = mayDaysList
Dias de feriado = 1/05
Sextas 7, 14, 21 e 28 
*/

const mayDaysList = [25, 26, 27, 28, 29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function createDaysOfTheMonth() {
  let selectList = document.querySelector('.week-days');
  let firstFriday = 7;
  for(let index=0; index < mayDaysList.length; index+= 1) {
    let li = document.createElement('li')
      li.className = 'day';
      li.innerText = mayDaysList[index];
      selectList.appendChild(li);
    if (mayDaysList[index] === 1) {
        li.classList.add('holiday');
    } if (index >= 6) {
      li.style.color = 'black';
    } if (mayDaysList[index] === firstFriday) {
      li.classList.add('friday');
      firstFriday += 7
    }
  }
}

createDaysOfTheMonth()

/*
2. Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
  - Adicione a este botão a ID "btn-holiday" .
  - Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
function holidays(Feriados) {
  let btn = document.createElement('button');
  btn.id = 'btn-holiday'
  btn.innerText = Feriados
  let buttons = document.querySelector('.buttons-container')
  buttons.appendChild(btn)
}

holidays('Feriados');

/*
3. Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday" .
  - É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .
*/

function changeHolidaysBG() {
  let button = document.querySelector('#btn-holiday');
  let selectDay = document.querySelectorAll('.holiday');
  let backgroundColor = '#eee';
  let newBgColor = 'red';
  let newColor = 'white';
    button.addEventListener('click', function() {
      for(let index= 0; index < selectDay.length; index += 1) {
        if (selectDay[index].style.backgroundColor === newBgColor) {
          selectDay[index].style.backgroundColor = backgroundColor;
          selectDay[index].style.color = 'black '
        } else {
          selectDay[index].style.backgroundColor = newBgColor;
          selectDay[index].style.color = newColor;
        }
      } 
    });
}

changeHolidaysBG()

/* 
4. Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
  - Adicione a este botão o ID "btn-friday" .
  - Adicione este botão como filho/filha da tag <div> com classe "buttons-container" .
*/
function fridays(friday) {
  let btn = document.createElement('button');
  btn.id = 'btn-friday'
  btn.innerText = friday
  let buttons = document.querySelector('.buttons-container')
  buttons.appendChild(btn)
}

fridays('Sexta-Feira');

/*
5. Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
  - É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele retorna à configuração inicial exibindo os dias.
*/

function changeFridayTexts() {
  let button = document.querySelector('#btn-friday');
  let selectDay = document.querySelectorAll('.friday');
  let newText = '#Sextou'
  let fridays = [7, 14, 21, 28]
    button.addEventListener('click', function() {
    for(let index= 0; index < selectDay.length; index += 1) {
      if (selectDay[index].innerHTML !== newText) {
        selectDay[index].innerHTML = newText
      } else {
        selectDay[index].innerHTML = fridays[index]
      }
    } 
  });
}

changeFridayTexts()

/*
6. Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
*/

function zoomIn() {
  let days = document.querySelector('.week-days');
  days.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
    event.target.style.fontWeight = '600';
  })
};

function zoomOut() {
  let days = document.querySelector('.week-days');

  days.addEventListener('mouseout', function(event) {
    event.target.style.fontWeight = '200';
    event.target.style.fontSize = '20px';
  })
};

zoomIn();
zoomOut();

/* 
7. Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks". */
let btnadd = document.querySelector('#btn-add')
function addTask(task) {
  let div = document.querySelector('.my-tasks');
  let input = document.querySelector('#task-input')
  let add = document.createElement('span');
  task = input.value;
  add.innerHTML = `${task}<br/>`;
  div.appendChild(add);
}

btnadd.addEventListener('click', addTask)

/*
8. Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task .
O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks" .
*/
