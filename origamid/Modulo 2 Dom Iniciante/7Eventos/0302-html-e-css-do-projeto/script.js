//addEventListener (acontece quando alguem faz alguma coisa/CallBack)

const img = document.querySelector('img');
console.log(img)

const img2 = document.querySelectorAll('img');
console.log(img2)

img.addEventListener('click', ()=> {
    console.log('clicou');
});

//Callback puxando apenas o nome da função

function callBack() {
    console.log('Essafunção é declarada "callBack"')
}

img.addEventListener('click', callBack );

//O primeiro parametro do callback é o event

function callBackEvent(event){
    console.log(event);
}

img2[1].addEventListener('click', callBackEvent
)

//Event propriedades

//event.currentTarget; /This referente ao proprio item
//event.target; / onde o clique ocorreu
//event.type; / tipo de evento


const imagensLista = document.querySelector('.animais-lista');


function callbackLista(event){
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(event.type);
    
}

imagensLista.addEventListener('click', callbackLista);

//event.preventDefault() previne que algo aconteça

const linkExterno = document.querySelector('a[href^="http"]');

function handLinkExterno(event){
    event.preventDefault();
    console.log(event);
};

linkExterno.addEventListener('click', handLinkExterno);

//Exemplo de cima não deixa que o link externo funcione


//this referencia ao proprio
function handLinkExterno2(event){
   console.log(this);
   console.log(this.getAttribute('href'));
   console.log(event.currentTarget);
    
};

linkExterno.addEventListener('click', handLinkExterno2);

//Varios eventos

const h1 =document.querySelector('h1');
function handleEvent(event){
    console.log(event.type, event);

}

h1.addEventListener('click',handleEvent);
h1.addEventListener('mouseenter',handleEvent);
h1.addEventListener('mousemove',handleEvent); //esse pesa

window.addEventListener('scroll', handleEvent);
window.addEventListener('resize', handleEvent);
window.addEventListener('keydown', handleEvent);

//Keyboard - tipo de evento

function handleKeyboard(event){
    if(event.key === 'f'){
        document.body.classList.toggle('azul')
    }

    console.log(event.key);
};

window.addEventListener('keydown', handleKeyboard);

//forEach loop para varios elementor ( pq o addEventListener so pega em um )

function handleImg(event){
    console.log(event.target.getAttribute('src'));
}

img2.forEach((img) =>{
    img.addEventListener('click', handleImg);
} );