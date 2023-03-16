//DOM Document Object Model 

console.log(window)
//window é o objeto global do browser
// varios metodos e propriedades

window.innerHeight; //retorna altura do browser

//window.alert('Ta me tirando');

const href = window.location.href;
console.log(href);

// objetos window>Document-location-...> html>head-body>h1-section...

const h1Selecionado = document.querySelector('h1');

//Node
// Element ex h1Selecionado é o element
h1Selecionado.addEventListener('click', function(){
    console.log('Clicou em', h1Selecionado.innerText);
})
function teste (){
    console.log('Clocou em pela função', h1Selecionado.innerText);
}
h1Selecionado.addEventListener('click', teste);