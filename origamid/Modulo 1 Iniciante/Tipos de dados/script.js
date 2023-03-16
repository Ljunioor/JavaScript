var nome = 'Leonardo',      //String
    idade = 23,             //Number
    time = null,            //Null
    simbolo = Symbol(),     //Symbol
    possuiFaculdade = true, //Boolean
    novoObjeto = {}         //Object
    corFavorita =           //Undefined
console.log (nome)
console.log ( typeof nome)
console.log ( typeof idade)
console.log ( typeof time) //é um null mas mostra como objeto pra nao quebrar muitos outros codigos antigos
console.log ( typeof simbolo);
console.log ( possuiFaculdade)
console.log (typeof novoObjeto)
console.log ( typeof corFavorita)

var nome ='Leonardo '
    sobrenome = 'Alves';

var nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto)


var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';
console.log (frase)
console.log (typeof frase)

var melhor = 'teste';
var frase1 = 'Esse é o \'melhor\' jogo';
console.log ( frase1)

var gols = 1000;
var frase2 = `Romário fez ${gols *7} gols`;
console.log(frase2)