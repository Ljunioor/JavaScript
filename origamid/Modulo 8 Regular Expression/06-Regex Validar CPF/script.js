import validarCPF from "./ValidarCPF.js";

const cpf = document.querySelector('#cpf');



const ValidarCPF = new validarCPF(cpf).iniciar();

