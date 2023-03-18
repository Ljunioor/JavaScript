/*
const Dom = {
  seletor: 'li',
  funçãoQueMandoFazer(){
    return document.querySelector(this.seletor);
    //cria uma constante que pega o elemento do query Selector(html) escolhendo um objeto no caso daqui (li), então neste ponto quando eu executo a função ela busca o 'li' e ai sim posso manipular ela.
  },
  ativar() {
    const elementoSelecionado = document.querySelector(this.seletor);
    elementoSelecionado.classList.add('Ativar')
  },
  //pra não repetir eu já tenho um metodo que retorna o element 
  ativar2(){
    const elementoSelecionado2 = this.funçãoQueMandoFazer();
    elementoSelecionado2.classList.add('ativar2Abreviado');
  }

}
//exemplo
Dom.funçãoQueMandoFazer().classList.add('teste')

Dom.ativar();

Dom.ativar2() 
*/
 function Dom(seletor) {
  this.pegarElemento = function() {
    return document.querySelector(seletor);
    console.log('pegou')
  },
  this.executa = function(classe) {
    this.pegarElemento().classList.add(classe),
    console.log('executou')
  }
 };
 //função construtora /\

 const ativaLI =new Dom('li');
 const ativaUL = new Dom('ul');

ativaUL.executa('ativei');
ativaLI.executa('aClassequeQuiser');

const ativaLastChildLi = new Dom('li:last-child');
ativaLastChildLi.executa('utilizandoParametros');
 

