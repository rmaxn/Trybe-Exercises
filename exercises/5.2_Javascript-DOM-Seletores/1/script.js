/* 1. Acesse o elemento elementoOndeVoceEsta. */
document.querySelector("#elementoOndeVoceEsta")

/* 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele. */
document.querySelector("#elementoOndeVoceEsta").parentNode.style.color = "green";

/* 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso? */
document.getElementById("primeiroFilhoDoFilho").innerText = "Este é o primeiro filho do filho."

/* 4. Acesse o primeiroFilho a partir de pai. */
document.querySelector("#pai").firstElementChild

/* 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta. */
document.querySelector("#elementoOndeVoceEsta").previousElementSibling

/* 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta. */
document.querySelector("#elementoOndeVoceEsta").nextSibling

/* 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta. */
document.querySelector("#elementoOndeVoceEsta").nextElementSibling

/* 8. Agora acesse o terceiroFilho a partir de pai. */
document.querySelector("#pai").lastChild.previousElementSibling.previousElementSibling


