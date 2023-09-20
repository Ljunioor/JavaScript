/*Regex faz busca e substituição*/

const frase = 'JavaScript';

const fraseNova = frase.replace(/a/, 'b');

console.log(fraseNova, frase)

// O Regex pega com base na tabela unicode
 /*
 /./g   Pega menos quebra de linha,
 /\./g Pega todos os pontos,
 /[.]/g Pega todos os pontos 
 /Ju[nl]ho/ Pega 'Julho ou Junho'
 /[A-Z a-z 0-9]/g  Pega todas as letras (A-Z a-z), números (0 -9 )

 /[a]/g pega todos os a

 // assim usa, dentro dele passa oque quer 
 /a/   pega o primeiro a 
 /a/g  apos ele são as flags 

/\w/g Seleciona qualquer caractere alfanumerico
/\W/g Seleciona qualquer caracter não alfanumerico
/\d/g Seleciona todos os digitos
/\D/g Seleciona tudo que ão é digito
/\s/g Seleciona tudo oque for quebra de linha, espaço, ou line 

/e{4}/g Seleciona 4 e seguidos em todo os lugares
/e{2,4}/g Seleciona a partir de 2 a 4 

/[\S\s/]/g Seleciona tudo 

/\w{1,} Seleciona todas as palavras 

/i+/g Seleciona de um a todos i como um objeto só

 Aqui no VisualCode tem ele com o CTRL + f 


 * Pode ou nao ter 

 /ai* /g vai selecionar todos os a e ai quer tiver
 a ai aiiiiii
 /regexp?/g Seleciona regex e P é opcional

 /tamanho|guaraviton/g Seleciona um ou outro 

 /\bpropor\b/g Seleciona propor e não proporcionalmente...

 /^\w+/gm Seleciona a priemira palavra de varias linhas por causa da flag m
 /\w+^/gm pega a ultima palavra de cada linha 

 /\n/g Seleciona o final de uma linha o charset que pula linha 

 /\u00A9/g Seleciona um unicode



 https://regexr.com/ e nesse site varios testes 
escreve em cima o texto no meio e  bastidores embaixo*/