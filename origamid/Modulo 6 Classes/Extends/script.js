class Veiculo {
    constructor (rodas, combustivel){
        this.rodas = rodas;
        this.combustivel = combustivel
    }
    acelerar(){
        console.log('Acelerou');
    }
}

class Moto extends Veiculo {
    constructor(rodas, combustivel, capacete){
        super(rodas, combustivel) //chamando o construtor da classe pai
        this.capacete = capacete;
    }
    acelerar(){
        super.acelerar();
        console.log("Acelerou rapido");
    }
    empinar(){
        console.log('moto empinou com ' + this.rodas + ' rodas')
    }
}

const honda = new Moto(2, 'gasolina', true);
const civic = new Veiculo (4);