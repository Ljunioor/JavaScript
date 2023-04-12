//crie uma função que verifique corretamente o tipo de dado
function verificarDado(dado){
    return Object.prototype.toString.call(dado)
};

const configuracao = {
    widht:800,
    height:600,
    background: '333'
}
console.log(verificarDado(configuracao))

//Crie um objeto quadrdo com a propriedade lados e torne ela imutavel
const quadrado = {};

Object.defineProperties(quadrado, {
    lados:{
        value:4,
        enumerable:true
    }
});

quadrado.lados = 50;
console.log(quadrado)

//previna qualquer mudança no objeto abaixo aquele configuração
Object.freeze(configuracao);
configuracao.height = 454500;
console.log(configuracao.height);

//Liste o nome de todoas as propriedades do protótipo de string e Array
console.log(Object.getOwnPropertyNames(String.prototype))
console.log(Object.getOwnPropertyNames(Array.prototype))