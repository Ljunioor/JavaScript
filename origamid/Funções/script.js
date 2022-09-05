function areaQuadrado(){
    console.log('Função ativa')
}

areaQuadrado();

function areaQuadrado2(lado) {
    return lado*lado;
}
console.log(areaQuadrado2(30))

function pi() {
    return 3.14;
} 

var total = 5 * pi();
console.log(total);

//Parâmetros e Argumentos

function imc(peso, altura) {
    const imc = peso / (altura * altura);   //Parâmetros
    return  imc;
}
console.log(imc(69, 1.69))              //Argumentos

//Parênteses executa a função
function corFavorita(cor) {
if (cor === 'azul') {
    return 'Você gosta do céu';

} else if (cor === 'verde') {
    return ' Você gosta de natureza'
} else {
    return 'Você não gosta de nada';
}
}
corFavorita(); //retorna 'Você não gosta de nada'
console.log(corFavorita());
console.log(corFavorita('azul'));
console.log(corFavorita('verde'));

// Argumentos podem ser funções
addEventListener ('click', function () {
    console.log('Clicou');  
});
//A função possui dois argumentos
//Primeiro é a string 'click'
//Segundo é uma função anônima

//Pode ou não retornar um valor
function imc2(peso, altura) {
    var imc = peso / (altura * altura)
    console.log(imc);
    
}
imc2(120, 1.85);                        //undefined

console.log(imc2(80, 1.80));            //retorna o imc e undefined pq "carrega ele junto"

//Valores retornados
function terceiraIdade(idade) {

    if(typeof idade !== 'number') {
        return 'Por favor preencha um número'
    }   else if (idade >= 60) {
    console.log('É idoso')
    console.log(idade);
    return true
    } else {
    return false;
    }
}
//Ideal é que uma função retorne só um tipo de dado

console.log(terceiraIdade('testeds'));

//Escopo oque está dentro não sai 
function faltaVisitar(paisesVisitados) {
    var totalPaises = 193;
    return  totalPaises - paisesVisitados ;
}
console.log(faltaVisitar(2))


//Escopo Léxico

var profissao = 'Designer';

function dados() {
    var nome = 'Leonardo';
    var idade = 23;
    function outrosDados() {
        var endereco = 'São Paulo';
        var idade = 23;
        return `${nome}, ${idade}, ${endereco}, ${profissao}`;
    }
    return outrosDados();
}
console.log(dados());               //Retorna 'Leonardo , 23, São Paulo, Designer
//outrosDados(); Retorna um erro (pq ta dentro da função e não busca)

//Hoisting

 //Antes de Executar os codigos o JavaScript sobe todas as variaveis pra cima                //aparece no console
