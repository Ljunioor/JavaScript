const date = new Date();
console.log(new Date());



var time = date.getTime();
console.log(time + ' time');



const leonardo = document.getElementById('leonardo').classList;

if(date >= 0000){
    console.log('DATA MAIOR')
    //aqui ele remove
    leonardo.remove('desactive')
} else {
    //aqui ele add none
    leonardo.add('desactive')
    console.log('DATA MENOR')
}

//const leonardo = document.getElementsByClassName('leonardo');
    
    
    