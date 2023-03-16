const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight //tamanho do elemento inteiro do scroll

const animaisTop = listaAnimais.offsetTop; //distancia entre elemento e topo da pg



console.log(height);

console.log(animaisTop);

const primeiroh2 = document.querySelector('h2');
const h2Left = primeiroh2.offsetLeft; // distancia esquerda

console.log(h2Left);

//getBoundClientReact() varias dimenções

const rect = primeiroh2.getBoundingClientRect();
console.log(rect)

const h2rect = primeiroh2.getBoundingClientRect();


if(h2rect.top < 0) {
    console.log('passou do elemento')
};

if(window.innerWidth < 600){
    console.log('Menor que 600px')
};

//matchMedia()
const small = window.matchMedia('(max-width: 600px)');

if(small){
    console.log('Usuario mobile');
} else{
    console.log('Usuario desktop')
}




//window
//innerWidth tamanho da janela
console.log(
    window.innerWidth,
    window.innerHeight,
    window.outerHeight,
    window.pageYOffset,
);