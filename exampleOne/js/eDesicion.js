function mostrarMensaje() {
    let age = parseInt(document.getElementById('age').value)

    // if (age >= 18) {
    //     mensaje = 'sos mayor de edad'        
    // }else{
    //     mensaje = 'Sos menor de edad'
    // }

    //If con operador terniario
    let mensaje = (age >=18) ? "Sos mayor de edad" : "Sos menir de edad"
    // alert(mensaje)
    document.write(mensaje)
}

function mostrarmensajeDos() {
    let age = parseInt(document.getElementById('age').value)
    let height = parseFloat(document.getElementById('height').value)
    let weight = parseInt(document.getElementById('weight').value)

    const parametroAge = 80
    const parametroHeight = 1.79
    const parametroWeight = 70
    let mensajeDesicion = " "

    // if (age <= parametroAge) {
    //     if (height >= parametroHeight ) {
    //         if (weight == parametroWeight) {
    //             mensajeDesicion  = "apto para realizar el deporte"
    //         } else {
    //             mensajeDesicion = "No Apto. Peso No Valido"
    //         }
    //     } else {
    //         mensajeDesicion = "No Apto. Estatura No Valida"
    //     }
    // } else {
    //     mensajeDesicion = "No Apto. Edad No Valida"
    // }

    //If con operador logico AND (&&)
    if (age <= parametroAge && height >= parametroHeight && weight == parametroWeight) {
        mensajeDesicion = "Apto Para Realizar El eporte"
    } else {
        mensajeDesicion = "No Apto Para Realizar El eporte"
    }

    //If con operador logico OR (||)
    if (age <= parametroAge || height >= parametroHeight || weight == parametroWeight) {
        mensajeDesicion = "Apto Para Realizar El eporte"
    } else {
        mensajeDesicion = "No Apto Para Realizar El eporte"
    }

    alert(mensajeDesicion)
}