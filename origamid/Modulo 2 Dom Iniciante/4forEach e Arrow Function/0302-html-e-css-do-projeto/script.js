const imgs =document.querySelectorAll('img');
console.log(imgs);

let i = 0;

//forEach cria Arrays

imgs.forEach(function(item, index, array){
   // console.log(i++);
  // console.log(item, index, array);
});

//Array like n é uma array, mas da pra transformar
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

console.log(titulos);//Like a array
console.log(titulosArray);//Array

titulosArray.forEach(function(item){
    console.log(item)
});

//Arrow Functions => remove a palavra function e adiciona flecha ao fim;
let imgsA = imgs;
imgsA.forEach((item)=>{
    console.log(item);
});

//atalhos
//imgs.forEach(() => {console.log(i++)});
imgs.forEach(function(){console.log(i++)});//longo
imgs.forEach(() => console.log(i++));//so pega com uma linha interna

