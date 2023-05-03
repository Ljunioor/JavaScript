//Utilizando a API https://viacep.com.br/ws/${CEP}/json/ crie um formulario onde o usuario pode digitar o cep e o endereço completo é retornado ao clicar em buscar
const inputCep = document.getElementById('cep');
const btnCep = document.getElementById('btnCep');
const resultadoCep=document.querySelector('.resultadoCep')

console.log(inputCep, btnCep,resultadoCep);
btnCep.addEventListener('click', clicou);

function clicou(event) {
    event.preventDefault();
    var cep = inputCep.value;
    buscaCep(cep)

function buscaCep(cep){
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
.then(response => response.text())
.then(response=>{
    resultadoCep.innerText  = response
})
}
}

//Utilizando a API https://blockchain.info/ticker retorne no DOM o valor de compra da bitcoin and reais atualize este valor a cada 30 seg
 const btc = document.querySelector('.btc')
function fetchBtc(){
    fetch('https://blockchain.info/ticker')
    .then(response => response.json())
    .then(btcJason=>{
        console.log(btcJason.BRL.buy);
        btc.innerText =('R$ '  +btcJason.BRL.buy).replace('.', ',');
    })

}
setInterval((fetchBtc),10000);

//utilizando a API https://api.chucknorris.io/jokes/random retorne uma piada randomica do chucknorris, toda vez que clicar em proxima.
const h1 = document.querySelector('.piada');
const proxima = document.querySelector('.proxima');

proxima.addEventListener('click',puxarPiada);

 function puxarPiada(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(reponse=>reponse.json())
    .then(piada=> {
        h1.innerText = piada.value;
        console.log(piada)
    })

    }
puxarPiada();

