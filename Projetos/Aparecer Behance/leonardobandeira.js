date = new Date();
console.log(date)

var mes = date.getMonth();
console.log(mes);


var time = date.getTime();
console.log(time + ' time');



const leonardo = document.getElementById('leonardo').classList;

if(mes >= 10){
    console.log('DATA MAIOR')
    //aqui ele remove
    leonardo.remove('desactive')
} else {
    //aqui ele add none
    leonardo.add('desactive')
    console.log('DATA MENOR')
}

//const leonardo = document.getElementsByClassName('leonardo');
    
    
    