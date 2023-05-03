/*const promessa = new Promise(function(resolve, reject){
   let condicao = true;
   if(condicao){
    resolve('faz algo')
   } else{
    reject (Error('Teve erro exeplo'))
   }
})
  
console.log(promessa);

//then() é a força da promessa

promessa.then(function(resolucao){
    console.log(resolucao)
})
*/

//then() aceito, cartch() rejeitado; finally resposta final

const login  = new Promise ((resolve) =>{
    setTimeout(()=>{
        resolve('Usuario Logado')
    },1000)
})
const dados = new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve('Carregou Dados')
    },20000)
})

const carregouTudo = Promise.all([login,dados]);

console.log(carregouTudo);

carregouTudo.then((resolucao)=>{
    console.log(resolucao);
});
//race mostra o primeiro 
const carregouPrimeiro = Promise.race([login,dados]);

console.log(carregouPrimeiro);