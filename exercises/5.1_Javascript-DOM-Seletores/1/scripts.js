
// Recupere o elemento que contém o título da página e faça algo com ele, como alterá-lo para o nome do seu filme favorito.
document.getElementById("page-title").innerText = "Harry Potter e o Enigma do Príncipe"

// Agora recupere o segundo parágrafo e use sua criatividade para alterá-lo.
document.getElementById("second-paragraph").innerText = "Harry Potter and the Half-blood prince"

// Por fim, recupere o subtítulo e altere-o também.
document.getElementById("subtitle").innerText = "Título Original"

//Recupere os seus parágrafos via código JavaScript , usando a função getElementsByClassName ;
document.getElementsByClassName("firstParagraph")[0].innerText
document.getElementsByClassName("secondParagraph")[0].innerText

//Altere algum estilo do primeiro deles.
document.getElementsByClassName("firstParagraph")[0].style.backgroundColor = "yellow"

//Recupere o subtítulo pela tag.
document.getElementsByTagName("p")[0].innerText

var paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

document.getElementById("page-title").innerText = "Harry Potter e o Enigma do Príncipe"

var paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

document.getElementById("second-paragraph").innerText = "Harry Potter and the Half-blood prince"

document.getElementById("subtitle").innerText = "Título Original"
