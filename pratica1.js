//1)
let numero = -10;
if (numero < 0){
    console.log ("O valor número é um Número negativo.");
}
if (numero >= 0){
    console.log ("O valor número é um Número positivo.");
}

//2)
function nomeFuncao(valorA, valorB, valorC) {
    let soma = valorA + valorC;
    if (soma > valorB){
        console.log( valorA + "+" + valorC + "=" + soma);
    }
    else {
        console.log ("soma dos valores A e C é igual a " + soma + " valor de b é igual a " + valorB)
    }
}
//nomeFuncao (4, 10, 4);

//3)
function horarioFront(turno) {
    switch(turno){
        case "matutino":
            console.log("Bom Dia!");
            break;
        case "vespertino":
            console.log("Boa Tarde!");
            break;
        case "noturno":
            console.log("Boa Noite!");
            break;
        default :
            console.log( "Valor Inválido!");
    }
}

// horarioFront("noturno")