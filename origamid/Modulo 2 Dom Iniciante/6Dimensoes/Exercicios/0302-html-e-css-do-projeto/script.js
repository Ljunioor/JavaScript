//Verifique a disância da primeira imagem em relação ao topo da página
const img = document.querySelector('img');
const imgTop = img.offsetTop;
console.log(imgTop);

//Retorne a soma da largura de todas as imagens

const imagens = document.querySelectorAll('img');
let soma = 0;
console.log(imagens);

function somaImagens(){
    imagens.forEach((imagem) => {
        console.log(imagem.offsetWidth);
        
        soma = soma + imagem.offsetWidth;
        
    }) ;
    console.log(soma)
}


//função que so carrega após carregar tudo
window.onload = function(){
somaImagens()
}

//Verifique se o minimo da página possuem o minimo recomendadeo para telas com dedo (48px/48px de acordo com o google)

const links = document.querySelectorAll('a');

links.forEach((link) => {
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;

    if(linkWidth>48 && linkHeight>48){
        console.log(link, 'Possui boa acessibilidade')
    } else {
        console.log(link, "Não possui boa acessibilidade")
    }
});

//Se o Browser for menor que 720px adicione a classe smallmobile

const browserSmall = window.matchMedia('(max-width: 720px)') .matches;
if(browserSmall) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
};
