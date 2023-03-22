const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
//remova o primeiro valor de comidas e coloque um uma variavel  adicione arroz ao final da rray adcione peixe e batata ao inicio


//remova o primeiro
const primeiroValor = comidas.shift();
console.log(comidas);

//remove o ultimo
const ultimoValor = comidas.pop();
console.log(comidas);

//adicione arrroz
comidas.push('Arroz')
console.log(comidas);

//adicione peixe e batata
comidas.unshift('Peixe', 'Batata');
console.log(comidas);

//Arrume em ordem alfabetica
comidas.sort();
console.log(comidas);

//Inverta a ordem

comidas.reverse();
console.log(comidas);

//verifique se Arroz faz partes e depois juliana
console.log(comidas.includes('Arroz'));
console.log(comidas.includes('Juliana'));

//subistituua section por ul e div com li  utilizando split e join

let html = `
            <section>
                <div>Numero</div>
                <div>Numero</div>
                <div>Numero</div>
            </section>`

            html = html.split('section');
            console.log(html);
            html = html.join('ul').split('div').join('li');
            console.log(html);

//remova o ultimo mas antes de remover salve o ultimo;
console.log(comidas);
Array.from(comidas);
console.log(comidas);

const copia = comidas.slice();

copia.pop()
console.log(copia);