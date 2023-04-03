/* const perimetro = new Function('lado', 'return lado*4');
console.log(perimetro(4));


function darOi(nome, idade){
    console.log('oi '+ nome + idade)
}
darOi();
darOi.call();
darOi.call({},'Leo ', 24);

window.marca = 'Carro';


function descricaoCarro(){
    console.log(this);
    console.log(this.marca +' '+ this.ano);
};
descricaoCarro();
descricaoCarro.call({marca: 'Honda', ano:2015}); */

const carros = ['Ford', 'Fiat', 'VolkWagen'];
const frutas = ['Pera', 'Maça', 'Banana'];

carros.forEach((item)=>{
    console.log(item)
});

frutas.forEach.call(frutas,(item)=>{
    console.log(item)
});

function Dom(seletor){
    this.element = document.querySelector(seletor);
};

Dom.prototype.ativo = function(classe) {
    this.element.classList.add(classe)
};

const ul = new Dom('ul');
console.log(ul);

ul.ativo('ativar');
console.log(ul);

const li = {
    element: document.querySelector('li')
};



ul.ativo('AtivadoSegundaVez');
console.log(ul);
ul.ativo.call(li,'ativo');
console.log(li);

//entendendo call
const frutas2 = ['Uva', 'Maça', 'Banana'];

//Os dois são iguais
Array.prototype.pop.call(frutas2);
frutas2.pop();


console.log(frutas2);

//Array like
const arrayLike = {
    0: 'Item1',
    1: 'Item2',
    2: 'Item3',
    length:3,
};
