//Iterable
const frutas = ['Banana', 'Morango', 'Uva'];
const frase = ['Isso é JS'];

fetch('https://pokeapi.co/api/v2/pokemon/')
.then(({headers}) => console.log(headers));

//Loop for of funciona e em array

for(const fruta of frutas){
    console.log(`Fruto: ${fruta}`);
}

const btns = document.querySelectorAll('button');

for(const btn of btns){
    btn.style.color='blue';
    btn.style.backgroundColor = 'tomato';
}
console.log( btns);

const carro = {
    marca: 'Honda',
    ano: 2018,
}

Object.defineProperties(carro, {
    rodas: {
        value: 4,
        enumerable:true,
    }
});

//funciona com objeto
 
for(chave in carro){
    console.log(carro[chave]);
};


//array utilizando o loop de objeto
for(f in frutas){
    console.log(frutas[f]);
}

const btn1 = document.querySelector('button');
const btnStyles = getComputedStyle(btn1);
console.log(btnStyles);

for(const style of btnStyles){
    console.log(`${style}: ${btnStyles[style]}`)
}

//Do / While

let i = 0 ;
do{
    console.log(i++)
} while (i <= 5);


//Exercicio
 const items = document.querySelectorAll('li');
 for(item of items){
    item.classList.add('Ligado');
    console.log(items);
 }


 for(const windowKeys in window){
    console.log(windowKeys + ': ' + window[windowKeys]);
 }
