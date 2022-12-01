const  menu = document.querySelector('.menu');

menu.outerHTML; //todo o html
menu.innerHTML; //html interno
menu.innerText; // texto, sem tags

const h1 = document.querySelector('h1');

console.log(h1.innerHTML);

console.log(h1.innerText);

const animaisLista = document.querySelector('.animais-lista');


//h1.innerHTML = '<p>novo texto</p>';     // coloca dentro
//h1.outerHTML = '<p>novo texto22</p>';//substitui
//console.log(animais.innerHTML);

//console.log(animais.innerText);


//transversing = navegar pelo dom 

console.log(animaisLista.parentElement);// puxa o pai

console.log(animaisLista.parentElement.parentElement); // pai do pai

console.log(animaisLista.previousElementSibling);//elemento acima

console.log(animaisLista.nextElementSibling);//elemento abaixo

console.log(animaisLista.children); //HTMLCollection

console.log(animaisLista.children[0]);//primeiro filho

console.log(animaisLista.children[animaisLista.children.lenght-1]);

//Element (tag HTML) vs Note(qualquer coisa no código ' até os enter')
console.log(animaisLista.childNodes)

//Manupulando Elementos
const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo');

//animaisLista.appendChild(titulo);
//animais.appendChild(titulo);

contato.insertBefore(animais, titulo);

const mapa = contato.querySelector('.mapa');

contato.insertBefore(animais, mapa);

//contato.removeChild(titulo);

contato.replaceChild(mapa, titulo);

//Novos Elementos
const novoh1 = document.createElement('h1');
novoh1.innerText = 'Novo T´titulo do h1';
novoh1.classList.add('titulo');
mapa.appendChild(novoh1);


//Clonar Elementos
//so colocar nomes diferentes não adianta 

const cloneTituloh1 = novoh1.cloneNode(true);

const p = document.querySelector('p');
const faq = document.querySelector('.faq');

// faq.appendChild(h1)//so move

const cloneP = p.cloneNode(true);
faq.appendChild(cloneP)
