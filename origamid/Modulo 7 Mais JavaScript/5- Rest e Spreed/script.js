//Parametros
function perimetroForma(lado, totalLados){
    totalLados = totalLados || 4; // significa || ou faça isso 
    return lado* totalLados;
}

function perimetroForma2(lado1, totalLados2 = 4){
    
    const argArray = Array.from(arguments);

    console.log(argArray);
    argArray.forEach(arf=>{
        console.log(arf);
    })
    return lado1* totalLados2;
}


console.log(perimetroForma(11,4));
console.log(perimetroForma(10));
console.log(perimetroForma2(10));

//Parametro Rest
function restParametro (...listaArgumentos){// so faz com os 3 pontos, unico e so deve estar no final, pega todos que nao foram definidos.
    console.log(listaArgumentos);
}
restParametro('reste',4,5,6,5,56,65,65,6,56,56,5,87);

//Operador Spread
const frutas =['Banana', 'Uva', 'Morango'];
const legumes = ['Cenoura', 'Batata'];

const comidas = [...frutas,'Tomate', ...legumes];

console.log(comidas);
//Spread como Argumento
const todosNumeros = [54,45,4,5,62,6,1,541,51,5,564,5,56,4,15,45,1,24,85]
const numeroMaximo = Math.max(...todosNumeros);

console.log(numeroMaximo);

//Tambem serve pra criar um array
const btns = document.querySelectorAll('button');
console.log(btns);

const  btnsArray = Array.from(btns);
console.log(btnsArray);

const btnArraySpred = [...btns];
console.log(btnArraySpred);