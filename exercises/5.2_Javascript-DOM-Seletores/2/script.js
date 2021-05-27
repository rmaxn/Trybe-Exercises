// Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
let h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM '
document.body.appendChild(h1);

// Adicione a tag div com a classe main-content como filho da tag body ;
let main = document.createElement('div');
main.classList.add('main-content');
document.body.appendChild(main)

// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let center = document.createElement('div');
center.classList.add('center-content');
main.appendChild(center);

// Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let p = document.createElement('p');
center.appendChild(p);

// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let left = document.createElement('div');
left.classList.add('left-content');
main.appendChild(left);

// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let right = document.createElement('div');
right.classList.add('right-content');
main.appendChild(right);

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let img = document.createElement('img');
img.src = "https://picsum.photos/200.jpg";
img.classList.add('small-image');
left.appendChild(img);

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let list = document.createElement('ul');
let number = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez']
for(let i=0; i < number.length; i += 1) {
  let numero = number[i];
  let li = document.createElement('li')
  li.innerText = numero;
  list.appendChild(li)
  li.style.color = "white"
}
right.appendChild(list);

// Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.

let h3 = ['Tagh3(1)', 'Tagh3(2)', 'Tagh3(3)'];
for(let i=0; i < h3.length; i += 1) {
  let tagh3 = h3[i];
  let h3Tag = document.createElement('h3');
  h3Tag.innerText = tagh3;
  // Adicione a classe description nas 3 tags h3 criadas;
  h3Tag.className = 'description'
  main.appendChild(h3Tag)
}

/* Agora que você criou muita coisa, vamos fazer algumas alterações e remoções: 
  Adicione a classe title na tag h1 criada; */
  h1.className = 'title';

// Remova o div criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild();
  main.removeChild(left);

// Centralize o div criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto do div ;
right.style.marginRight = 'auto';

// Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
center.style.backgroundColor = 'green';

// Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
list.removeChild(list.childNodes[8])
list.removeChild(list.childNodes[8])
/* OBS: Como a lista é dinâmica ela atualizava portanto o itém 9 e o 10 eram o último item da lista nas duas remoções. */