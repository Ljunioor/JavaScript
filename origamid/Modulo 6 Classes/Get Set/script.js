/*const button = {
    get element(){
        return this._element;
    },
    set element(tipo){
    this._element = document.createElement(tipo);
    }
}

button.element = 'button'; // set
button.element; // get (<button></button>)
*/

const button = {
    get tamanho(){
        return this._numero || 100;
    },
    set tamanho(valor){
        this._numero = valor * 100;
    }
}
console.log('tamanho: ', button.tamanho = 200, button.tamanho);

const frutas = {
    lista: [],
    set nova (fruta){
        this.lista.push(fruta);
    }
};
frutas.nova = 'Manga';
frutas.nova = 'Pêra';

console.log(frutas.lista);

class Button {
    constructor(text, color){
        this.texto = text;
        this.cor = color;
    }
    get element(){
        const type = this._elementType || 'button'
        const buttonElement = document.createElement(type);
        buttonElement.innerText = this.texto;
        buttonElement.style.color = this.cor;
        return buttonElement;
    }
    set element(type){
        this._elementType = type
    }
}
const blueButton = new Button('comprar', 'blue');