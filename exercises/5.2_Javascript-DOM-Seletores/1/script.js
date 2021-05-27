// Parte I
// 1. Acesse o elemento elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta");

// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.querySelector("#elementoOndeVoceEsta").parentNode.style.color = "green";

// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.getElementById("primeiroFilhoDoFilho").innerText = "Este é o primeiro filho do filho.";

// 4. Acesse o primeiroFilho a partir de pai.
document.querySelector("#pai").firstElementChild;

// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").previousElementSibling;

// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").nextSibling;

// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").nextElementSibling;

// 8. Agora acesse o terceiroFilho a partir de pai.
document.querySelector("#pai").lastChild.previousElementSibling.previousElementSibling;

// Parte II
// 1. Crie um irmão para elementoOndeVoceEsta.
const elementDiv = document.createElement('div');
elementDiv.id = 'irmaoDoElementoOndeVoceEsta';
pai.appendChild(elementDiv)

// 2. Crie um filho para elementoOndeVoceEsta.
const divFilho = document.createElement('div');
divFilho.id = 'AgoraRealmenteEOUltimoFilhoDoElementoOndeVoceEsta';
elementoOndeVoceEsta.appendChild(divFilho);

// 3. Crie um filho para primeiroFilhoDoFilho.
let primeiroFilhoDoFilho= document.querySelector('#primeiroFilhoDoFilho')
const divNeto = document.createElement('div');
divNeto.id = 'primeiroFilhoDoFilhoDoElementoOndeVoceEsta';
primeiroFilhoDoFilho.appendChild(divNeto);

// Parte III
// 1. Remova todos os elementos da página, menos pai , elementoOndeVoceEsta e primeiroFilhoDoFilho .
pai.removeChild(pai.childNodes[5]);
pai.removeChild(pai.childNodes[6]);
pai.removeChild(pai.childNodes[7]);
elementoOndeVoceEsta.removeChild(elementoOndeVoceEsta.childNodes[3])
elementoOndeVoceEsta.removeChild(elementoOndeVoceEsta.childNodes[4])
primeiroFilhoDoFilho.removeChild(primeiroFilhoDoFilho.childNodes[1])