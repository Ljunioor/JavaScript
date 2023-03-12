function initTab(){
const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');

if(tabMenu.length &&tabContent.length){

    tabContent[0].classList.add('ativo');

    function activeTab(index){
        tabContent.forEach((section) =>{
            section.classList.remove('ativo')
        })

        tabContent[index].classList.add('ativo')
    };
    tabMenu.forEach((itemMenu, index) =>{
        itemMenu.addEventListener('click', function(){
            activeTab(index);
        })
    });
}
}
initTab()

function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';

    if(accordionList.length){

        accordionList[0].classList.add(activeClass);
        accordionList[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion(event){
            this.classList.toggle(activeClass)
            this.nextElementSibling.classList.toggle(activeClass)
        }

        accordionList.forEach((item) => {
            item.addEventListener('click', activeAccordion);
        })
    }
}
initAccordion()

function initScroolSuave (){

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
    });i
}

linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
}
)

}
initScroolSuave();