var carro ='Fusca';
function monstrarCarro(){
    var carro ='Fusca';
    console.log(carro)
}
monstrarCarro()

//se vc n delcarar 'var, const ou let ele cria uma variavel global'
// anota em cima 'use strict' linha 1 resolve

//escopo de função e escopo de bloco

//Escopo de bloco

if(true){
    let mes = 'outubro';
    console.log(mes);}

   // console.log(mes)
    //var vasa o bloco

    if(false){
        let mes2 = 'outubro2';
        console.log(mes2);}
    
      //  console.log(mes2)

 //const e let não vaza bloco
 //for Loop 
 
 //assim vaza com var
 for(var i = 0; i<10; i++){
    console.log(`número ${i}`);
 }

 console.log(i*10)

  //assim n vaza

  for(let letra = 0; letra<=10; letra++){
    console.log(`número ${letra}`);
    
 }

 //console.log(letra) da errad pq nao sai o let 

 //diferença de const e let const 1 vez só, let pode modificar

 const data = {
    ano:2022,
    mes:'outubro',
 }
 console.log(data);
 data.ano = 2023;
 data.dia = 04;
 console.log(data);

 let ano;
 ano=2022;
 ano++;
 console.log(ano);