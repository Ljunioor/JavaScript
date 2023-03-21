//Retorne um numero aleatorio entre 1050 e 2000

const aleatorio = Math.floor(Math.random() * (2000 - 1050 ) + 1050)

console.log(aleatorio);

//Retorne o maior numero da lista abaixo
const numeros = '4, 5 , 20 , 8 , 9';
const arrayNumeros = numeros.split(', ');
console.log(arrayNumeros);
const numeroMaximo = Math.max(...arrayNumeros);
console.log(numeroMaximo)

//Crie uma função para limpar os preços e retornrar os numeros com centavos arredondados e depois retorne a soma total

const listaPreco = ['R$ 59,99', 'R$ 100,22', 'R$ 230', 'r$ 9,95445'];

function limparPreco(preco){
    preco = +preco.toUpperCase().replace('R$', '').trim().replace(',','.');
    preco = +preco.toFixed(2);
    return preco;
}

let soma = 0;
listaPreco.forEach((preco) =>{
    soma += limparPreco(preco)
})
console.log(soma.toLocaleString('pt-BR', {style:'currency', currency:'BRL'}));

limparPreco(listaPreco[3]);

