//export default


export default function initScroolSuave (){

    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

 console.log(linksInternos)    
function scrollToSection(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href)
    //const topo = section.offsetTop;
    //window.scrollTo(0, topo)<!-- metodo antigo-->
    
    //window.scrollTo({
    //    top:topo,
    //    behavior:'smooth',
    //})

    section.scrollIntoView({

        behavior:'smooth',
        block:'start',
    });
}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
}
)

}
