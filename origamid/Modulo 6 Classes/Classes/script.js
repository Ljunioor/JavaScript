/*function Button (text, background){
    this.texto = text;
    this.bg = background;
}

Button.prototype.criandoElement = function(){
    const buttonElement = document.createElement('button');
    buttonElement.innerText = this.texto;
    buttonElement.style.background = this.bg;
    
    return buttonElement;
}

const blueButton = new Button('Comprar', 'blue');

console.log(blueButton.criandoElement());

*/
class Button {
    constructor(texto, background, color) {
        this.text = texto;
        this.bg = background;
        this.cor = color;
    }
    //metodo 1 que é uma função
    element(){
        const criandoElement = document.createElement('button');
        criandoElement.innerText = this.text;
        criandoElement.style.background = this.bg;
        criandoElement.style.color = this.cor;
        return criandoElement;
    }
    //metodo 2  que tambem é uma função
    colocarElement(target){
        const targetElement = document.querySelector(target);
        targetElement.appendChild(this.element())
        console.log(this)
        return targetElement
    }
    //metodo 3
    static blueButton(text){
        return new Button (text, 'blue', 'white');
    }

}
const botaoAzul = Button.blueButton();
console.log(botaoAzul)

/*
const blueButton = new Button('Comprar', 'blue', 'white');

console.log(blueButton.colocarElement('body'));
*/
/*
class Button {
    constructor(options){
        this.options = options;
    }
    //metodo
    static createButton(text, bacground){
        const buttonElement = document.createElement('button');
        buttonElement.innerText = text;
        buttonElement.style.background = bacground;
        return buttonElement
    }
}
const botaoRed = {
    
        backgroundColor: 'red',
        color: 'white',
        text:'Botão Vermelho',
    
    
};


const redButton = new Button(botaoRed)

console.log(redButton);

const redButtonStatic = Button.createButton('Click','blue');
console.log(redButtonStatic);
   */