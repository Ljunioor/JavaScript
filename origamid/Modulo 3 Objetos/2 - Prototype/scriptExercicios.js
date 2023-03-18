//Faça isso ai \/

function Pessoa(nomePessoa, sobrenomePessoa, idadePessoa){
  this.nome = nomePessoa,
  this.sobrenome = sobrenomePessoa,
  this.idade = idadePessoa
};
//console.log(Pessoas)

const Leo = new Pessoa('Leonardo', 'Bandeira', '24 anos');

console.log(Leo)

Pessoa.prototype.nomeCompleto = function(){
  return this.nome +" "+ this.sobrenome;
}

console.log(Leo.nomeCompleto());


//metodos de nodelist
console.log(NodeList.prototype);

//metodos de HTMLCollection

console.log(HTMLAllCollection.prototype)

//metodos de Document

console.log(Document.prototype)

//liste os contrutores dos dados abaixo
const li = document.querySelector('li');

console.log(li.constructor.name)
li//HTMLLIElement

console.log(li.click.constructor.name)
li.click//function

console.log(li.innerText.constructor.name)
li.innerHTML//String

console.log(li.value.constructor.name)
li.value// Number

console.log(li.hidden.constructor.name)
li.hidden//Boolean

console.log(li.offsetLeft.constructor.name)
li.offsetLeft//number

console.log(li.click())
//li.click() undefined

console.log(li.hidden.constructor.name)
//a resposta mesmo sendo Booleana vem em forma de String


