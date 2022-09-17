date = new Date();
console.log(date)

var mes = date.getMonth() + 1;
console.log(mes);


const leonardo = document.getElementById('leonardo').classList;

if(mes <= 10){
    console.log('DATA MAIOR')
    //aqui ele remove
    leonardo.add('desactive')
} else {
    //aqui ele add none
    leonardo.remove('desactive')
    console.log('DATA MENOR')
}

//const leonardo = document.getElementsByClassName('leonardo');