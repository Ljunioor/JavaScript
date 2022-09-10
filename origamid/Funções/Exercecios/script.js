// Crie uma função para verificar se um valor é Truthy
function valorTruthy(valor){
    return !!(valor)
}
console.log(valorTruthy(1))

//Crie uma função matemática que retorne o perimetro de um quadrado
function perimetro(lado) {

    return lado + lado + lado + lado

}
console.log( perimetro(37));

//Crie uma função que retorne o seu nome completo 
function nomeCompleto (nome, sobrenome) {
    
    return `${nome} ${sobrenome}`
}
console.log(nomeCompleto('Leonardo', 'Alves'));

//Crie uma função que verifica se o numero é par
function numeroPar(numero) {
    var modulo = numero % 2;
    if (modulo === 0){
        return true;
    } else {
        return false;
    }    
}
console.log(numeroPar(17));

//Crie uma função que retorne o tipo de dado do argumento passado nela (typeof)
function tipoDeDado(dado) {
    return typeof dado;
}

//addEventListener é uma função nativa do JavaScript
//o primeiro parâmetro é o evento que ocorre e seugundo o Callback
//Utilize essa função para mostrar no console o seu nome completo
//Quando o evento 'scroll' ocorrer.
addEventListener('scroll', function(){
    console.log('Leonardo Alves')
})
//Corrija o erro abaixo
/* function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
    function jaVisitei(paisesVisitados) {
        return `Já Visitei ${paisesVisitados} do total de ${totalPaises} países`;
    }
*/
const totalPaises = 193;
function precisoVisitar(paisesVisitados) {
    //return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
     return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

    function jaVisitei(paisesVisitados) {
        return `Já Visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(0))
console.log(jaVisitei(2))