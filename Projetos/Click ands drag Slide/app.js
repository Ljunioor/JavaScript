let slider = document.querySelector('.slider');
let innerSlider = document.querySelector('.slider-inner');

let pressed = false;
let startx;
let x;


//quando pressionado mouse true. marca o local, e troca cursor para grabbing mãozinha agarrando
slider.addEventListener('mousedown', (e)=>{
    pressed = true;
    startx = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = 'grabbing'
    console.log(innerSlider.offsetLeft);
});


//Mouse normal fora do slider
slider.addEventListener('mouseenter', ()=>{
    slider.style.cursor = 'grab'
});

//na janela pressionar estará falso
window.addEventListener('mouseup', ()=>{
    pressed = false;
});

//Movimento
slider.addEventListener('mousemove', (e)=>{
    if(!pressed) return;
    e.preventDefault();

    x = e.offsetX;
    //essse aqui movimenta \/ com base no X menos oque vc arrasta
    innerSlider.style.left = `${x - startx}px`;

    checkboundary()
})

//Aqui confirma se não passa pra fora da tela
function checkboundary(){
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    // teste se funciona console.log(outer)
    // teste se funciona console.log(inner)

    if(parseInt(innerSlider.style.left) >0){
        innerSlider.style.left = '0px';
    } else if(inner.right < outer.right){
        innerSlider.style.left = `-${inner.width - outer.width}px`
    }
}

checkboundary()