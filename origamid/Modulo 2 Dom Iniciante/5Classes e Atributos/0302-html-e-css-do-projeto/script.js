//ClassList

const menu = document.querySelector('.menu');

menu.className; //retornar string
console.log(menu.className);
menu.classList; // lista de classes
console.log(menu.classList)
menu.classList.add('ativo'); // adicionou ativo a classes
console.log(menu.classList)
menu.classList.add('ativo', 'mobile'); //add duas classes ou mais
menu.classList.toggle('ativo'); //adiciona/remove a classe
menu.classList.contains('ativo'); //true ou false

if (menu.classList.contains('ativo')){
    menu.classList.add('possui-ativo')
} else {
    menu.classList.add('nao-possui-ativo')
}

menu.classList.replace('ativo', 'inativo'); //substitui por
console.log(menu.classList)

//attributes
const animais = document.querySelector('.animais');
console.log(animais.attributes.class)

//getAttribute e setAttribute
const img = document.querySelector('img');

const srcImg = img.getAttribute('src');

img.setAttribute('alt', 'É uma Raposa');


console.log(srcImg, img);

const possuiAlt =  img.hasAttribute('alt');//verifica

console.log(possuiAlt)

//Read Only vs Writable (leitura vs escrita)

const carro = {
    portas:4,
    andar: function(km){
        console.log(`Andou ${km} km`);
    }
}

console.log(carro.andar(40));
console.log(carro.portas=3);
