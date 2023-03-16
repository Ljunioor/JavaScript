//Arrays valores relacionados

var videoGame = ['Switch', 'PS4', 'Xbox'];

videoGame [0]                               //switch
videoGame[2]                                //Xbox

console.log(videoGame[0])

//Métodos e Propriedades de uma Array

videoGame.pop();                       //remove o ultimo item e retorna ele
videoGame.push('3DS');                 // Adiciona ao final da array
videoGame.length;                       // 3 Strings pq removeu XBOX
console.log(videoGame.length);
console.log(videoGame)

var ultimoItem = videoGame.pop();
console.log(ultimoItem)

//For Loop

for (var numero = 0; numero <= 100; numero++) {
    //executa esse antes da ultima ali (numero++)
    console.log(numero);
}
//3 partes separados por ;  inicio ; condição ; incremento

//While Loop
var i = 0;
while (i < 100) {
    console.log(i);
    i = i+5;
}

//Arrays e Loops
var videoGame = ['Switch', 'PS4', 'Xbox', '3DS'];

for(var item = 0; item < videoGame.length; item++){
    console.log(videoGame[item]);
}
console.log(videoGame.length)

//Break para o loop caso ocorra alguma condição
for (var i = 0; i < videoGame.length;i++) {
    console.log(videoGame[i]);
    if(videoGame[i]==='PS4'){
        break;
    }
}

//forEach metodos de array
var frutas = ['Banana', 'Pera', 'Maça', 'Abacaxi', 'Uva'];

frutas.forEach(function(tantofazonome, index, array) {
    console.log(tantofazonome, index, array)
});
//o argumento item sera atribuido dinamicamente

//Sintaxe confusa

var numero = 0;
var maximo = 50;

for(;numero <= maximo;) {
    console.log(numero);
    numero++;
}
