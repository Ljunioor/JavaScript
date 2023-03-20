// Objetos Nativos ( estão no JavaScript)
//Objetos do Host (Estão onde ele é executado: browser por exemplo)
//Objetos do usuário 


//Testando se existe !==(diferente de)
console.log(typeof Array.from)
if(typeof Array.from !== "undefined"){
  console.log('Existe')
} else {
  console.log('Não Existe')
}

//Jquery é uma bibliote pra resolver incompativilidades, porem o Js ES6 em diante estão resolvendo sem precisar dela, tornandoo obsoleta


//List 5 Objetos nativos
Object
String
Array
Function
Number

//Liste 5 objetos do browser
Window
File
document
HTMLAllCollection
NodeList

//Dois metodos de propriedades que existem no firefox mas nao existem no chrome

//testando  colocando window(objeto mestre) no console dos dois navegadores e comparando o resultado