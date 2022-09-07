// Crie um objeto com o seus dados pessoais
    var Leonardo = {
        idade:23,
        estudante:true,
        apreciador:true,
        artista:true,
        
    };
console.log(Leonardo);

//Deve possui pelo menos duas prorpiedades nome e sobrenome
 var Rhayssa = {
    idade: 20,
    estudante:false,
    apreciador:false,
    artista:true,
 };
 console.log(Rhayssa);
 console.log(Rhayssa.idade);

 //Crie um médoto no objeto anterior, que mostre o seu nome completo
Rhayssa.objectNome = 'Rhayssa ';
Rhayssa.sobrenome = 'Maria';


Rhayssa.nomeCompleto =function(){
   return this.objectNome + this.sobrenome;
 }
 console.log(Rhayssa.nomeCompleto())

//Modigique o valor da propriedade preco para 3000
var carro = {
    preco:1000,
    portas:4,
    marca:'Audi',
}
carro.preco = 3000;

console.log(carro.preco);

//Crie um objeto de um cachorro que represente um labrador, preto com 10 anos, que late ao ver um homem

var animal = {
    especie: 'Canis Familiaris',
    raca: 'Labrador',
    idade: '10 Anos',
    color: 'preto',
    hostilComMulheres:false,
    hostilComHomens:true,
    
}
var animal2 = {
    especie:'Felis Catus',
    raca: 'Mestiço/a',
    idade: '2 Anos',
    color: 'Tricolor',
    hostilComMulheres:false,
    hostilComHomens:false,
}
function homemAndando() {
    if (animal.hostilComHomens===true){
        console.log('Corre Negada')
    } else{
        console.log('Ta de boa')
    }
}
function homemAndando2() {
    if (animal2.hostilComMulheres===true){
        console.log('Corre Negada')
    } else{
        console.log('Ta de boa')
    }
}
console.log(`O Jubileu estava andando sobre uma ponte, derepente tropeça sobre uma tabua que estava solta ao ver isso  o Labrador preto toma uma reação que ${ homemAndando2()}`);

console.log(homemAndando());

console.log(homemAndando2());

//Feito com professor
var cachorro = {
    raca: ' labrador',
    cor: ' preto',
    idade: 10,
    latir(pessoa) {
        if(pessoa==='homen') {
            return 'Latir';
        } else {
            return 'Nada';
        }
    }
}
console.log(cachorro.latir('homen'));