//Adicone a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a');


itensMenu.forEach((item) =>{
    item.classList.add('ativo');
});
console.log(itensMenu)
//Remova a classe ativo  de todos os itens e mantenha apenas o primeiro

itensMenu.forEach(function(item){
    item.classList.remove('ativo');
})
itensMenu[0].classList.add('ativo');
console.log(itensMenu)

//Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach(function(img){
    const possuiAtributo = img.hasAttribute('alt');
    console.log(possuiAtributo);
    
})
console.log(imgs)

//modifique o href do link externo do menu
const link = document.querySelector('a[href^="http"]');

link.setAttribute('href', 'https://www.google.com/');

console.log(link);