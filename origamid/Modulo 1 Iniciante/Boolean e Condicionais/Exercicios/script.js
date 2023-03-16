//Verifique se a sua idade é maior do que a de algum parente
//Dependendo do resultado coleque no console 'É maior', É igual
var idadeMinha = 23,
    idadeRha   =20;

var maisVelho = idadeMinha > idadeRha

if (maisVelho) {
    console.log('Minha idade é maior')
} else {
    console.log('Idade da outra pessoa é maior')
}

//Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2 ) && ( 5 - ' ') && ( 5 - 2);
console.log( expressao)

//Verifique se as seguinte variaveis são Truthy ou Falsy
var nome = 'Leonardo';
var idade = 23;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome + ' nome')
console.log(!!idade + ' idade')
console.log(!!possuiDoutorado + ' Doutorado')
console.log(!!empregoFuturo +' Emprego Futuro')
console.log(!!dinheiroNaConta + ' Dinheiro na conta')

//Compare o total de habitantes do Brasil com China (valor em mi)
var Brasil = 207;
var China = 1340;
var maior = Brasil > China

console.log(!!maior)

if (maior) {
    console.log('Brasil tem mais habitantes que a China')
} else {
    console.log('China tem mais habitantes que o brasil')
}

//O que irá aparecer no console?
if (('Gato'=== 'gato') && (5 > 2)) {
    console.log('verdadeiro');
} else {
    console.log ('Falso');
}

//O que irá aparecer no console?
if(('Gato'==='gato') || (5 > 2)) {
    console.log('Gato' && 'Cão');
} else {
    console.log ('Falso')
}