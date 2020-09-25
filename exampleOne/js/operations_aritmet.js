function sumar() {
    //Recibitr unos datos 
    let numeroOne = parseInt(document.getElementById("nOne").value)
    let numeroTwo = parseInt(document.getElementById("nTwo").value)

    //Procesar los datos
    let resultado = parseInt(numeroOne + numeroTwo)

    //Entregar los resultados
    document.getElementById("resultOpretations").innerHTML = resultado
}

function multiplicar() {
    //Recibitr unos datos 
    let numeroOne = parseInt(document.getElementById("nOne").value)
    let numeroTwo = parseInt(document.getElementById("nTwo").value)

    //Procesar los datos
    let resultado = parseInt(numeroOne * numeroTwo)

    //Entregar los resultados
    document.getElementById("resultOpretations").innerHTML = resultado
}

function dividir() {
    //Recibitr unos datos 
    let numeroOne = parseInt(document.getElementById("nOne").value)
    let numeroTwo = parseInt(document.getElementById("nTwo").value)

    //Procesar los datos
    let resultado = parseInt(numeroOne / numeroTwo)

    //Entregar los resultados
    document.getElementById("resultOpretations").innerHTML = resultado
}

function triangulo() {
   
    let base = parseInt(document.getElementById("base").value)
    let altura = parseInt(document.getElementById("altura").value)
    let area;
    area = parseInt(base * altura/2);

    document.getElementById("resulTTriangulo").innerHTML = area
}

function circulo() {
   
    let radio = parseInt(document.getElementById("radio").value);
    let result;
    result = parseFloat(Math.PI * radio + radio);

    document.getElementById("resulTCirculo").innerHTML = result;
}
    