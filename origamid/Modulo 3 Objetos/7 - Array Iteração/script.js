const carro = ['Fusca', 'Fiat', 'Honda'];

/* carro.forEach((item, index, array)=>{
    console.log(item, index, array)
})
 */
//map faz a mesma coisa que forEach

const novaArray =  carro.map((item, index, array) => {
    console.log(item.toUpperCase(), index, array)
    return item
})

console.log(novaArray);
console.log(carro);

const numeros = [2,54,1,2,15,12,4,51,2];
const numerosX2 = numeros.map(n => n * 2 );

console.log(numeros, numerosX2)

//reduce 
const aulas = [10,25,30];

const reduceAulas = aulas.reduce((acumulador, item) =>{
    return acumulador + item;
},0)

console.log(reduceAulas);

//ex numero maior 
const NumeroMaiorReduce = numerosX2.reduce((anterior, item)=>{
    if (anterior > item){
        return anterior
    } else return item
})
console.log(NumeroMaiorReduce);