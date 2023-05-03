/*const doc = fetch('./doc.txt');

console.log(doc)

doc.then(resolucao =>{
    console.log(resolucao);
});

doc.then(resolucao =>{
    resolucao.text().then((body)=>{
        console.log(body);
        const conteudo = document.querySelector('.divClass');
conteudo.innerText = body;
    })
});*/



/*const doc = fetch('https://viacep.com.br/ws/01001000/json/');

console.log(doc)

doc
.then(resolucao =>{
    console.log(resolucao);
});

doc.then(resolucao =>{
    resolucao
    .json()
    .then((body)=>{
        console.log(body);
        const conteudo = document.querySelector('.divClass');
conteudo.innerText = body;
console.log(body.cep);
    })
});*/

//blob() Js n lê

const imagem = fetch('./Cozinha.jpg');

imagem
.then(r => r.clone())
.then(r2 => {
    r2.headers.forEach(console.log)
    return r2.blob()
})
.then(r => {
    const divClass = document.querySelector('.divClass');
    const blobUrl = URL.createObjectURL(r);
    console.log(r);
    const img = document.createElement('img');
    img.src = blobUrl;
    divClass.appendChild(img);
    console.log(img);
})
//status e ok
imagem.then(r=>{
    console.log(r.status)
    console.log(r.type)
    console.log('Aqui')
})