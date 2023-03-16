//Quando o usuário clicar nos links insternos do site adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. previna o comportamento padrão desses links

const links = document.querySelectorAll('a[href^="#"]');

function handleLink(event){
    event.preventDefault()

    links.forEach((item) => {
        item.classList.remove('ativo');
    })
    event.currentTarget.classList.add('ativo');

}

links.forEach((link) =>{
    link.addEventListener('click', handleLink);
})

//Selecione todos os elementor do site começando a partir do body,  ao clique mostre exatamente quais elementor estão sendo clicacos

//const todosElements = document.querySelectorAll('body')

//function clique(event){
//    event.this;
 //   console.log('Clicou');
//}
//todosElements.addEventListener('click', clique)

const todosElementos = document.querySelectorAll('body *');

function handleElemento(event){
    console.log(event.currentTarget)
}

todosElementos.forEach((elementos) =>{
    elementos.addEventListener('click', handleElemento);
})

//Utilizando o coódigo anterioir, ao inves de mostrar no console remova o elemento que esta sendo clicado, o metodo remove() remove um ellemento

function handleElemento2(event){
    event.currentTarget.remove()
}

todosElementos.forEach((elementos) =>{
    elementos.addEventListener('click', handleElemento2);
})

//se o usuario clicar na tecla 't' aumente todo o texto do site

function clicancia(event){
 if(event.key === 't') {
    document.documentElement.classList.toggle('textomaior')
}
}
    

window.addEventListener('keydown',clicancia);