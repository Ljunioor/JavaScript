//Mostre no console cada paragrafo do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos);
paragrafos.forEach(function(item){
console.log(item);
});

//Mostre o texto dos pr[agrafos no console
paragrafos.forEach((item)=>{
    console.log(item.innerText);
    });

//como corrigir os erros abaixo
const imgs =document.querySelectorAll('img');

//imgs.forEach(item,index => {
//    console.log(item, index);
//})
imgs.forEach((item,index) => {
    console.log(item, index);
});

//let i = 0;
//imgs.forEach(=> {
//    console.log(i++);
//});
let i = 0;
imgs.forEach(()=> {
    console.log(i++);
});

//imgs.forEach(() => i++);
imgs.forEach(() => i++);


console.log(i);