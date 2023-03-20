//transforme o objeto abaixo em uma ocnstruction function
/*const pessoa = {
    nome: 'nome Pessoa',
    idade: 0,
    andar(){
        console.log(this.nome + 'andou');
    }
}*/
function pessoa(nome, idade) {
this.nomePessoa = nome,
this.idadePessoa = idade +' anos',
this.andar = function(xMetros){
 console.log(this.nomePessoa + ' andou ' + xMetros + ' metros.');
}

};


const João = new pessoa('João', 20);

const Maria = new pessoa('Maria', 25);

const Bruno = new pessoa('Bruno', 25);

//console.log(Maria.andar(20))

function Dom(elementoDom) {
    const elemento = document.querySelectorAll(elementoDom);
    this.elementos = elemento,
    this.adiconaClass = function(classeAdd){
        this.elementos.forEach((element) =>{
            element.classList.add(classeAdd);
        })
    }
    this.removeClas = function(classeR){
        this.elementos.forEach((element) =>{
            element.classList.remove(classeR);
        })
        
    }
};

const selecionaLI = new Dom('li');
selecionaLI.adiconaClass('nomeClass');

selecionaLI.removeClas('ativo')


