//Crie uma arrray  com anos anos que o brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

var brasilVitorias = [1959, 1962, 1970, 1994, 2002];


//Interaja com a array utilizando um loop para mostras no console a seguinte mensagem, 'O brasil ganhou a copa de ${ano}'
for(var i = 0; i < brasilVitorias.length; i++){
    console.log('O Brasil ganhou a copa de ' +brasilVitorias[i]);
}

//Interaja com um loop nas grutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for(fruta = 0; fruta <= frutas.length; fruta++){
    console.log(frutas[fruta]);
    if(frutas[fruta] === 'Pera'){
        break;
    }

}

//Coloque a ultima fruta da array acima em uma variavel sem remover a mesma da array

var ultimaFruta =frutas [frutas.length -1];
console.log(ultimaFruta)