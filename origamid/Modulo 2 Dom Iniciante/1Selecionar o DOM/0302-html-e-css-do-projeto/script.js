// primeira e mais comum getElementById

const animaisSection = document.getElementById('animais');
const contatoSection = document.getElementById('contato');

//se se slecionar algo que não exista ele retorna null
const naoExiste = document.getElementById('hsuhsuhus')
console.log(naoExiste)

//Classe de Lista ao vivo
const gridSection = document.getElementsByClassName('grid-section');
const contato = document.getElementsByClassName('grid-section contato'); //só os que possuirem as duas classes

//seleciona todos
const ul = document.getElementsByTagName('ul');

//retorna o primeiro elemento
console.log(gridSection[0]);
console.log(gridSection.length)

//Seletor Geral Único

//querySelector : retorna o peimrio elemento que combinar com o seu seletor CSS
const animais = document.querySelector('.animais');

const primeiraLi = document.querySelector('li');
console.log(primeiraLi)

const primeiraUl =document.querySelector('ul');
console.log(primeiraUl);

//links internos
const linksInternos = document.querySelector('[href^="#"]');
console.log(linksInternos);
console.log(linksInternos.href);

//querySelectorAll
const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg)

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section')

//Esse é ao vivo ele adiciona 4 elementos esse novo 
console.log(gridSectionHTML);

//Esse é estatico continua com a mesma quantidade que tinha antes rodar o script
console.log(gridSectionNode);

//Array-Like
gridSectionNode.forEach(function(item, index){
    console.log(item);
});
const arrayGrid = Array.from(gridSectionHTML);
console.log(arrayGrid)

arrayGrid.forEach(function(item){
    console.log(item)
})