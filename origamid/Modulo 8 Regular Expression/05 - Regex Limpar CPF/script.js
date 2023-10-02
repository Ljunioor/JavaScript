const cpfsLista =document.querySelectorAll('.cpf li');
/*
const arrayCpfs = [...cpfs];
[...em Uma nodeList transforma em array]*/

const  elementsInnerText = ([...element])=> {
 // const arrayElement = Array.from(element);
  return element.map(elemento=>elemento.innerText)
}
console.log(elementsInnerText(cpfsLista));
const resultado = elementsInnerText(cpfsLista);




const limparCPF = (cpf)=> {
  return cpf.replace(/[/\D]/g,'');
};




const construirCPF = (cpf) =>{
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,'$1.$2.$3-$4')
}




const formatarCPFS = (cpfsNomeFechado)=>{
  return cpfsNomeFechado.map(limparCPF).map(construirCPF)
}


console.log(formatarCPFS(resultado));





const substituiCPFS = (cpfElements) =>{
  const cpfAqui =elementsInnerText(cpfElements);
  const cpfFormatados = formatarCPFS(cpfAqui);

  cpfElements.forEach((element , index)=>{
    element.innerText=cpfFormatados[index];
  })

  console.log(cpfFormatados);
};
substituiCPFS(cpfsLista);

/*const cpfsList = document.querySelectorAll('.cpf li');

const elementsInnerText = ([...elements]) => {
  return elements.map(element => element.innerText);
}

const limparCPF = (cpf) => {
  return cpf.replace(/\D/g, '');
}

const construirCPF = (cpf) => {
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

const formatarCPFS = (cpfs) => {
  return cpfs.map(limparCPF).map(construirCPF);
}

const substituiCPFS = (cpfsElements) => {
  const cpfs = elementsInnerText(cpfsElements);
  const cpfsFormatados = formatarCPFS(cpfs);

  cpfsElements.forEach((element, index) => {
    element.innerText = cpfsFormatados[index];
  })
}

substituiCPFS(cpfsList);*/