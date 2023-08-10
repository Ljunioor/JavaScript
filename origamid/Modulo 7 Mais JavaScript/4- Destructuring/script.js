//destructuring
const carro = {
    marca: 'Ford',
    ano: 2018,
    modelo:'Fiesta'

}

//acessando normal
console.log(carro.marca);
console.log(carro.ano);
console.log(carro.modelo);

//destructuring
const {marca, ano, modelo} = carro;

console.log(marca);
console.log(ano);
console.log(modelo);

//Argumento desestruturado
function handleKeyboard(event){
    const keyPressed= event.key;
    console.log(event);
    console.log(keyPressed);
}

document.addEventListener('keyup', handleKeyboard);

//Estrair todos os estilos computados
const btn = document.querySelector('button');
const btnStyles = window.getComputedStyle(btn);
console.log(btn);
console.log(btn.styles);
console.log(btnStyles);
console.log(btnStyles.backgroundColor);

const {backgroundColor, margin , color, padding, border} = btnStyles;
console.log(backgroundColor, margin, color, padding, border);

//troque valores de variaveis
let cursoAtivo ='JavaScript';
let cursoInativo ='HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];
console.log(cursoAtivo, cursoInativo);