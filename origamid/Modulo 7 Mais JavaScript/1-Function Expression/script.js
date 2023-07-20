//Function declaration 
function somar(a,b){
    return a + b;
};

console.log(somar(4,2));
somar(4,2);//6

//Function Expression
const somando = function(c,d){
    return c + d;
};
console.log(somando(5,3)); //8;
somando(7,1);// 8

//diferenças declaration uma function aberta assim executa e pode ser chamada em todo o codigo em cima ou embaixo, já a expression que é como const a função tem que ser executada apos a declaração dela;

//Arrow Function
const somando2 = (e, f) => e + f;
console.log("Resultado: ", somando2(9, 0)) ;

//function declaration pode entrar em conflito com funções nativas do objeto window

//IIFE - imediately Invoket Function Expression
var instrumento ='Violão';

(function(){
    var instrumento = 'Guitarra';
    console.log('Eu estou tocando '+instrumento);
})();

console.log(instrumento);//