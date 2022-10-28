//Retorne no console todas as imagens do site

const img = document.querySelectorAll('img');
console.log(img);

//Retorne apenas as imagens que comessaram com a palavra imagem 
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

//Selecione todos os links internos (onde o href começa com #)
const linkInterno = document.querySelectorAll('[href^="#"')
console.log(linkInterno)

//Selecione o primeiro h2 dentro de .animais-descrição
const h2Animais = document.querySelector('.animais-descricao h2'); 

const animais = document.querySelector('.animais-descricao'); 

console.log(h2Animais);
console.log(animais)

//Selecione o ultimo p do site

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[--paragrafos.length])