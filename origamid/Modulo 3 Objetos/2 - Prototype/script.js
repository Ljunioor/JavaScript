function Pessoa(nomePessoa, idadePessoa){
  this.nome = nomePessoa;
  this.idade = idadePessoa
}

const leo = new Pessoa('Leonardo', 20);

var obj = {
  nome: 'leo',
  idade: 24,
}
/* essse de baixo adiciona um metodo no objeto*/  
obj.teste = 'Isso mesmo'
/* igual esse aqui de baixo porem na função */
Pessoa.prototype.andar = function(){
  return 'Pessoa andou';
}

//console.log(obj);

//console.log(Pessoa.prototype);
//console.log(leo.prototype)

// MEtodos nativos do JS e criados 
//nativos Objetc, string, array tem tudo criado ali

const lista = document.querySelectorAll('li');

 console.log(lista) // retorna node list

 const listArray1 = Array.prototype.slice.call(lista);

 console.log(listArray1) // Retorna uma Array

 //metodo novo 

const listArray2 = Array.from(lista);

console.log(listArray2)

//aviso sempre entenda oque esta sendo retornado

const Carro = {
  marca: 'Fusion',
  preço: 71000,
  andar(){
    return true
  }

}
//Objeto
console.log(typeof Carro)

//String
console.log(typeof Carro.marca)

//Number
console.log(typeof Carro.preço)

//function
console.log(typeof Carro.andar)

//Boolean
console.log(typeof Carro.andar())