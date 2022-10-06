//nomeio 3 propriedades ou metodos de strings
    var nome = 'Leonardo';
   // fixed;
    //length;
   // slice;
    //digita o nome da propriedade + " . " que o nagador sugere o restante

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
//btn.after
//btn.before
//btn.id
//btn.innerHTML

//busque na web um objeto (método) capaz de interagir com o clipboard, clipboar é a parte do seu computador que  lida com CTRL + C e CTRL + V
function myFunction() {
    // Get the text field
    var copyText = document.getElementById("myInput");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Seu texto foi copiado: " + copyText.value);
  }