//1)

function tipoDeCarro(escolha) {

    if (escolha == "hatch"){
        return "Compra efetuada com sucesso";
    }
    else if (escolha == "sedan"){
        return "Tem certeza que não prefere este modelo?";
    }
    else if (escolha == "motocicleta" ){
        return "Tem certeza que não prefere este modelo?";
    }
    else if (escolha == "caminhonete"){
        return "Tem certeza que não prefere este modelo?";
    }
    else {
        return "Não trabalhamos com este tipo de automóvel aqui";
    }
}

//console.log (tipoDeCarro("sedan"))

//2)
function triangulos() {
    let ladoA = 5;
    let ladoB = 5;
    let ladoC = 5;
    
    if (ladoA == ladoB && ladoC == ladoA) {
        console.log("é um triângulo equilátero");
    }
    else if (ladoA != ladoB && ladoC != ladoA && ladoC != ladoB) {
        console.log("é um triângulo escaleno");
    }
    else {
        console.log("é um triângulo isósceles");
    }
    
}

//triangulos();

//3)
function verificar(numero) {
    if (numero >= 0){
        console.log("Ele é positivo");
    }
    if (numero < 0){
        console.log("Ele é negativo");
    }
}

//verificar(10);