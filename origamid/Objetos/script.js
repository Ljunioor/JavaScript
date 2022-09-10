//Objetos conjunto de variaveis e funções
var pessoa = {
    nome: 'Leonardo',                   //propriedades
    idade: 23,      
    profissao: 'Designer',
    possuiFaculdade:true,
}
var teste = 'todos';
console.log(pessoa.nome);
console.log(pessoa.possuiFaculdade);
console.log(pessoa);
console.log(teste);
console.log(typeof pessoa)

//Métodos    - prpopriedade pode ser uma função 
var quadrado = {
    lados: 4,
    area: function(lado) {
        return lado * lado;
    },
    perimetro: function(lado) {
        return this.lados * lado;
    },
}
console.log(quadrado.lados);                         //4
console.log(quadrado.area(5));                       //25
console.log(quadrado.perimetro(5));                  //20   

//Abreviação de metodo sem : function
var teste = {

}
//utilidade Organizar o codigo
//ex:ja existente
console.log(Math);
console.log(Math.random());
console.table(quadrado)

//criando um objeto
var nome = {}

var menu = {
    width: 800,
    height: 50,
    backgroundColor: '#84E',
    esconder: function(){
        console.log('Dentro do menu')
    },
    metadeHeight() {
        return this.height /2},
    
}
menu.backgroundColor = '#000'

menu.color = ' blue'



var bg = menu.backgroundColor;



console.log(bg);

console.log(menu.esconder())

//Palavra chave this(referencia ao proprio objeto)

//Potótipo e Herança   objeto herda tudo
//testa Object() existe um objeto ja pre escrito