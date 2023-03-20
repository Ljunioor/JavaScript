//Metodo String

const comida = 'Pizza';

const feira = new String('Pastel');

console.log(feira.length);

const frase = 'A melhor pastelaria';

console.log(frase[frase.length - 1]);


//charAt caracter no index

console.log(frase.charAt(2));

const linguagem = 'Javascript'

const fraseFinal = frase.concat(linguagem,'Tudo com virgula')

console.log(fraseFinal);

//string.includes(includes procura)

const fruta ='Manga'
const listaFrutas = 'Melancia, Banana, Melancia, Manga'

console.log(fruta.includes('Manga'))

console.log(listaFrutas.includes(fruta, 10/* a partir de qtal letra */ ))

//termina com e começa com  
console.log(fruta.startsWith('Ma'));
console.log(fruta.endsWith('ga'));

//slice cortar

const transacao1 = 'Depósito de clientes';
const transacao2 = 'Depósito de fornecedors';
const transacao3 = 'Taxa';

console.log(transacao1.slice(0,5));

console.log(transacao1.slice(5));
console.log(transacao1.slice(-5));

//Substring corta de acordo com start e end, mas não tem numeros negativos

//indexoff onde esta diretamente o caractere ue estou buscando

console.log(transacao1.indexOf('clie')); //primeiro qu aparece

console.log(transacao1.lastIndexOf('clie')); //Ultimo qu aparece

//padStart e padEnd  preenche

const preco = 'R$ 99,00';

const precos = ['R$ 100,00', 'R$20.000', 'R$100.000'];

console.log(preco.padStart(20, '1'))
//Funciona pra alinhar por exemplo
console.log(String.padStart) //meu navegador não tem
//precos.forEach((element) =>{
  //console.log(precos.padStart(20, ))
//})

//String.repeat fica repetindo a string o numero de vezes que eu pedir

//String.replace tras regexp ou substitui
let listaItens = 'Toalha Carro Cotonete Garrafa Celular';
console.log(listaItens);
console.log(listaItens.replace(/[ ]+/g,', '));
console.log(listaItens.replace('Toalha','Queijo '));

//split divide a string de acordo com padrão  e retorna uma array
const arrayLista = listaItens.split(' ');
console.log(arrayLista);
//Comum pra pegar texto em html 

//String.toLowerCase letraminuscula String.toUperCase tudo maiusculo ( bom pra verificar oque o user digitou)

const sexo1 = 'Feminino';
const sexo2 = 'feminino';
const sexo3 = 'FEMININO';

console.log(sexo1.toUpperCase() === 'FEMININO');

//String.trim(), String.trimStart() remove algo do começo

