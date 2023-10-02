export default class ValidarCPF {
    constructor(element){
        this.element = element;
    }

    limpar(cpf){
        return String(cpf).replace(/\D/g, '');
    }

    construir(cpf){
        return String(cpf).replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
    }

    formatar(cpf){
        const cpfLimpo = this.limpar(cpf);
        return this.construir(cpfLimpo);
    }

    validar(cpf){
        const matchCPF = String(cpf).match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
        return (matchCPF && matchCPF[0] === cpf);
    }

    validarNaMudança(cpfElement){
        if(this.validar(cpfElement.value)){
            cpfElement.value = this.formatar(cpfElement.value);
        } else {
            // Trate o caso em que o CPF não é válido
        }
    }

    adicionarEvento(){
        this.element.addEventListener('change', () => {
            this.validarNaMudança(this.element);
        });
    }

    iniciar(){
        this.adicionarEvento();
        return this;
    }
}
