

const imagem2 = document.getElementsByClassName('.flex-control-thumbs');
const imagem1 = document.getElementsByClassName('.flex-control-nav');


function flex(){
    if(imagem2 == 0){
        console.log('DATA MAIOR')
        //aqui ele remove
        imagem2.classList.remove('desactive')
    } else {
        //aqui ele add none
        imagem2.classList.add('flex-active');
        console.classList.add('DATA MENOR');
    }
}
console.log(flex())


for(lis = 0; lis <= lis.length; lis++){
    console.log(lis[lis]);
    if(lis[lis] === [1]){
        imagem2.classList.add('flex-active');
        break;
    }

}

function flex2(){
    if(imagem1 == 0){
        console.log('DATA MAIOR')
        //aqui ele remove
        imagem1.classList.remove('desactive')
    } else {
        //aqui ele add none
        imagem1.classList.add('flex-active');
        console.classList.add('DATA MENOR');
    }
}
console.log(flex())


for(lis = 0; lis <= lis.length; lis++){
    console.log(lis[lis]);
    if(lis[lis] === [1]){
        imagem1.classList.add('flex-active');
        break;
    }

}