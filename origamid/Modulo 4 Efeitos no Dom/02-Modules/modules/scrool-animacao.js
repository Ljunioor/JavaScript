export default function initAnimeScroll(){

    const section = document.querySelectorAll('.js-scroll');

if(section.length){

const windowMetade = window.innerHeight * 0.2;

function animaScroll(){
    section.forEach((section)=>{
        const sectionTop = section.getBoundingClientRect().top - windowMetade
        const isSectionVisible = (sectionTop - windowMetade ) < 0;
        
        if(isSectionVisible) {
            section.classList.add('ativo');
            console.log('ativou')
        } else{
            section.classList.remove('ativo');
        }
    })
}

window.addEventListener('scroll', animaScroll);
}

}