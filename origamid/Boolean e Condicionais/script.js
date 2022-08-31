var possuiGraduacao = true;
     
    if (possuiGraduacao) {
        console.log('Possui Grauação');
    }//true
     else {
        console.log('Não possui graduação')
    }//false

    //retorna possui graduação e não executa else

    if (false){
        console.log('Possui Grauação');
    }//false
     else {
        console.log('Não possui graduação')
    }//true

    //retorna  não possui graduação e não executa else

    //Condicionais Else If
    var possuiGraduacao = true;
    var possuiDoutorado = false;

    if (possuiDoutorado) {
        console.log('Possui graduação e doutorado');
    } else if (possuiGraduacao) {
        console.log ('Possui graduação, mas não possui doutorado');
    } else {
        console.log('Não possui graduação');
    }
    //Retorna possui graduação, mas não possui doutorado

    //Truthy and Falsy
    var nome = '';                          //false
    if(nome) {
        console.log(nome)
    } else {
        console.log('Nome não existe');
    }

    //Operador Logico de Negação
    var possuiGraduacao = true;

    if (!possuiGraduacao) {               //virou false
        console.log(possuiGraduacao);
        console.log ('Possui graduação');
        
    }//false 
    else {
        console.log(!possuiGraduacao)
        console.log('Não possui')
    }
    //Inverter o invertido pra verificar
    null
    console.log(!!null)

    //Verificar
    var x = '10';
    console.log( x > 10);
    console.log( x >= 10);
    console.log( x == 10);
    console.log( x === 10);

    //Operadores Lógicos && compara se uma expressão E a outra são verdadeiras
    true && true; //true
    true && false; // false


    if((5 - 5) && (5 + 5)) {
        console.log('Verdadeiro')
    } else {
        console.log('Falso');
    }

    
    if((5 - 10) && (5 + 5)) {
        console.log('Verdadeiro')
    } else {
        console.log('Falso');
    }

    //Operadores Lógicos || OU compara se é verdadeira
    'Gato' || 'Cão' //Gato 1ºtrue
    'Gato' || false //Gato 1ºtrue
    console.log('Gato' || false)

    //Switch
    var corFavorita = 'Preto'

    switch (corFavorita) {
        case 'Azul':
            console.log('olhe para o céu')
            break;
        case 'Vermelho':
            console.log('As rosas são belas')
            break;
        case 'Preto':
            console.log('A cor do desconhecido')
            break;
        
        default:
            console.log('Vai Dormir')
    }