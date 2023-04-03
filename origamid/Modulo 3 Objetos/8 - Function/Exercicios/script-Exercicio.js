//retorne a soma total de caractertes dos parágrafos acima utilizando reduce
const section = document.querySelector('section');
console.log(section.textContent.length);

//prof
const parágrafos = document.querySelectorAll('p');

const totalCaracteres = Array.prototype.reduce.call(parágrafos, (acumulador, item)=>{
    return acumulador + item.innerText.length
}, 0);
console.log(totalCaracteres);

//crie uma fução que retorne novos elementos html com os seguinte parametros classse tag e conteudo

function criarElemento(tag, classe, conteudo){
    const elemento = document.createElement(tag);
    //explicando classe ? 'se Classe não existe ele faz : null  se existe ele faz oque ta ali, evita o andefined
    classe ? elemento.classList.toggle(classe) : null;
    elemento ? elemento.innetHTML = conteudo: null;
    return elemento;
};
;
console.log(criarElemento('ul','ativo','Aqui vai o texto'));
console.log(criarElemento());

//Crie uma nova função utilizando a anterior como base essa nova função deverá sempre criar h1 com a classe titulo. porem o parametro conteudo continuará dinamico;

const h1Titulo = criarElemento.bind(null,'h1','titulo');

const cursosJS = h1Titulo('Cursos JS');
const cursosHTML = h1Titulo('Cursos HMTL');

let teste = h1Titulo('teste o texto')
console.log(teste);

