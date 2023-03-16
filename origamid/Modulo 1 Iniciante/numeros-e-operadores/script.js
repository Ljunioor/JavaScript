var idade = 23e2;
console.log(idade)

//Operadores Aritimeticos
var soma = 100 + 50;            //150
var subtracao = 100 - 50;       //50
var multiplicacao = 10 * 50;    //500
var divisao = 100 / 2;          //50
var expoente = 2 **  4;         //16
var modulo = 14 % 5;            //4

//Operadores Aritimeticos (Strings)
var soma ='100' + 50;           //10050
var subtracao   = '100' - 50;   //50
var multiplicacao = '100' * '2' //200
var divisao2 = 'Comprei 10' /2   //NaN (Not a Number)
console.log(divisao2)
console.log(isNaN(divisao2))

//A ordem importa
var somas = 20 * 5 + 2

//Operadores Aritiméticos unários
var incremento = 5;
console.log(incremento++);      //5
console.log (incremento)        //6

var tirando = 5;
console.log(tirando--);         //5
console.log(tirando)

//transformando string em number
var numero = '28'
console.log(+numero)