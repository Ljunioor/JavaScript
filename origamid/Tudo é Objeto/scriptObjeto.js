//Tudo é objeto
var nome = 'Leonardo';

nome.length;                                    //8
console.log(nome.length)
nome.charAt;
console.log(nome.charAt(1))                     //e
nome.replace('eonardo', ' Odranoel')
console.log(nome.replace('eonardo', ' Odranoel')) //L Odranoel
nome;                                               //Leonardo

var nomeMaiusculo = nome.toLocaleUpperCase();


console.log(nome);

console.log(nomeMaiusculo);

//Numeros
var altura = 1.69;
altura.toString();                              //'1.69'
console.log(altura.toString());

console.log(altura.toFixed());                  //'2'

//Funções
function areaQuadrado(lado) {
    return lado * lado;
} 
console.log(areaQuadrado.toString());

//Elementos do DOM
var btn = document.querySelector('.btn');
btn.classList.add('azul') //adiciona a classe azul
console.log(btn.innerText);                 //'Clique'

btn.addEventListener('click', function() {
    console.log('Clicou')
})

