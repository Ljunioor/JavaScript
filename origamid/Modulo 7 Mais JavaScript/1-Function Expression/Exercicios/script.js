//Remova o erro

const priceNumber = n => +n.replace('R$', '').replace(',','.');

console.log(priceNumber('R$99,99'));

//Crie uma IIFE e isole o escopo
const nome ='Jessica';
(()=>{
    const nome ='Leonardo';
    console.log(`My Name: ${nome}`);
})(); //IIFE - Immediately Invoked Function Expression
console.log(nome);

//Como podemos utilizar a função abaixo 
       const active = callback => callback();
//Igual a
       function active2(callback2){
        return callback2()
        }
//utilizando
active(function() {
    console.log('ativando função callback');
});

console.log(active);