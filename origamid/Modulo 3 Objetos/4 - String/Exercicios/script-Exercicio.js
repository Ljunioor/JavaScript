//Utilizando foreach no array abaixo, some os valores de taxa e os valores de recebimento

const transacoes = [ 
    {
        descrição:'Taxa do Pão',
        valor: 'R$39',
    },
    {
        descrição:'Taxa do Mercado',
        valor:'R$129',
    },
    {
        descrição:'Recebimento de Cliente',
        valor: 'R$99',
    },
    {
        descrição:'Taxa do Banco',
        valor: 'R$129',
    },
    {
        descrição:'Recebimento de Cliente',
        valor: 'R$49',
    },
];

let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((element)=>{
    const numLimpo = +element.valor.replace('R$','');
    
    if (element.descrição.slice(0,4) === 'Taxa'){
    taxaTotal = taxaTotal + numLimpo}
    else{
        recebimentoTotal = recebimentoTotal + numLimpo
    }
});

console.log(taxaTotal);
console.log(recebimentoTotal);


//Retone uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;ônibus;Bicileta';

const arrayTranspotes = transportes.split(';');
console.log(arrayTranspotes);

//Substitua todos os spans por a

let html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              <ul>`;

html = html.split('span').join('a');

console.log(html)

//retorne o ultimo caractere da frase
const frase = ' Melhor do ano!';
console.log(frase.slice(-1));
//retorne o total de taxas

const transacoes2 = ['Taxa do Banco', '  TAXA DO PÃO', ' taxa do mercado', 'depósito Bancário', 'Tarifa especial'];

let taxasTotal2 = 0;

 transacoes2.forEach((item)=>{
    console.log(item.toLowerCase().trim().slice(0,4))
    if(item ==='taxa');
        taxasTotal2 = taxasTotal2 + 1
    })
    
 
 console.log(taxasTotal2);