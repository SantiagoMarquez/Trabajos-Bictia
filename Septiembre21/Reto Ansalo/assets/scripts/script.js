const letras = document.querySelectorAll('.letra')
const mensaje = document.getElementById('mensaje')

// console.log(letras, "letras")
// console.log(mensaje, "mensaje")

const arrayLetras = []
const arrayNumeros = []

const teclado = (e) => {
    const textoTarget = e.target.innerText
    // console.log(textoTarget, "target")

    const aux = textoTarget.toString()
    const aux2 = aux.split(" ", 1)

    //A
    if (jQuery.isEmptyObject(arrayLetras) == true && aux2 != "A") {
        swal("Error!", "Por favor ingrese la letra A", "error");

    } else if (jQuery.isEmptyObject(arrayLetras) == true && aux2 == "A") {
        mensaje.innerText += aux2
        arrayLetras.push(aux2)
    }
    //B
    else if (arrayLetras[arrayLetras.length - 1] == "A" && aux2 != "B") {
        swal("Error!", "Por favor ingrese la letra B", "error");
    } else if (arrayLetras[arrayLetras.length - 1] == "A" && aux2 == "B") {
        mensaje.innerText += aux2
        arrayLetras.push(aux2)
    }
    //C
    else if (arrayLetras[arrayLetras.length - 1] == "B" && aux2 != "C") {
        swal("Error!", "Por favor ingrese la letra C", "error");
    } else if (arrayLetras[arrayLetras.length - 1] == "B" && aux2 == "C") {
        mensaje.innerText += aux2
        arrayLetras.push(aux2)
    }
    //D
    else if (arrayLetras[arrayLetras.length - 1] == "C" && aux2 != "D") {
        swal("Error!", "Por favor ingrese la letra D", "error");
    } else if (arrayLetras[arrayLetras.length - 1] == "C" && aux2 == "D") {
        mensaje.innerText += aux2
        arrayLetras.push(aux2)
    }
    //E
    else if (arrayLetras[arrayLetras.length - 1] == "D" && aux2 != "E") {
        swal("Error!", "Por favor ingrese la letra E", "error");
    } else if (arrayLetras[arrayLetras.length - 1] == "D" && aux2 == "E") {
        mensaje.innerText += aux2
        arrayLetras.push(aux2)
    }
    //F
    else if (arrayLetras[arrayLetras.length - 1] == "E" && aux2 != "F") {
        swal("Error!", "Por favor ingrese la letra F", "error");
    } else if (arrayLetras[arrayLetras.length - 1] == "E" && aux2 == "F") {
        mensaje.innerText += aux2
        arrayLetras.push(aux2)
    }
    //G
    else if (arrayLetras[arrayLetras.length - 1] == "F" && aux2 != "G") {
        swal("Error!", "Por favor ingrese la letra G", "error");
    } else if (arrayLetras[arrayLetras.length - 1] == "F" && aux2 == "G") {
        mensaje.innerText += aux2
        arrayLetras.push(aux2)
    }
    //H
    else if (arrayLetras[arrayLetras.length - 1] == "G" && aux2 != "H") {
        swal("Error!", "Por favor ingrese la letra H", "error");
    } else if (arrayLetras[arrayLetras.length - 1] == "G" && aux2 == "H") {
        mensaje.innerText += aux2
        arrayLetras.push(aux2)
    }
    //I
    else if (arrayLetras[arrayLetras.length - 1] == "H" && aux2 != "I") {
        swal("Error!", "Por favor ingrese la letra I", "error");
    } else if (arrayLetras[arrayLetras.length - 1] == "H" && aux2 == "I") {
        mensaje.innerText += aux2
        arrayLetras.push(aux2)
    }
    //J
    else if (arrayLetras[arrayLetras.length - 1] == "I" && aux2 != "J") {
        swal("Error!", "Por favor ingrese la letra J", "error");
    } else if (arrayLetras[arrayLetras.length - 1] == "I" && aux2 == "J") {
        mensaje.innerText += aux2
        arrayLetras.push(aux2)
    }
    //1
    else if (arrayLetras[arrayLetras.length - 1] == "J" && aux2 != "A" && jQuery.isEmptyObject(arrayNumeros) == true) {
        swal("Error!", "Por favor ingrese el numero 1", "error");
    } else if (arrayLetras[arrayLetras.length - 1] == "J" && aux2 == "A" && jQuery.isEmptyObject(arrayNumeros) == true) {
        mensaje2.innerText += "1"
        arrayNumeros.push("1")
    }
    //2
    else if (arrayNumeros[arrayNumeros.length - 1] == "1" && aux2 != "B") {
        swal("Error!", "Por favor ingrese el numero 2", "error");
    } else if (arrayNumeros[arrayNumeros.length - 1] == "1" && aux2 == "B") {
        mensaje2.innerText += "2"
        arrayNumeros.push("2")
    }
    //3
    else if (arrayNumeros[arrayNumeros.length - 1] == "2" && aux2 != "C") {
        swal("Error!", "Por favor ingrese el numero 3", "error");
    } else if (arrayNumeros[arrayNumeros.length - 1] == "2" && aux2 == "C") {
        mensaje2.innerText += "3"
        arrayNumeros.push("3")
    }
    //4
    else if (arrayNumeros[arrayNumeros.length - 1] == "3" && aux2 != "D") {
        swal("Error!", "Por favor ingrese el numero 4", "error");
    } else if (arrayNumeros[arrayNumeros.length - 1] == "3" && aux2 == "D") {
        mensaje2.innerText += "4"
        arrayNumeros.push("4")
    }
    //5
    else if (arrayNumeros[arrayNumeros.length - 1] == "4" && aux2 != "E") {
        swal("Error!", "Por favor ingrese el numero 5", "error");
    } else if (arrayNumeros[arrayNumeros.length - 1] == "4" && aux2 == "E") {
        mensaje2.innerText += "5"
        arrayNumeros.push("5")
    }
    //6
    else if (arrayNumeros[arrayNumeros.length - 1] == "5" && aux2 != "F") {
        swal("Error!", "Por favor ingrese el numero 6", "error");
    } else if (arrayNumeros[arrayNumeros.length - 1] == "5" && aux2 == "F") {
        mensaje2.innerText += "6"
        arrayNumeros.push("6")
    }
    //7
    else if (arrayNumeros[arrayNumeros.length - 1] == "6" && aux2 != "G") {
        swal("Error!", "Por favor ingrese el numero 7", "error");
    } else if (arrayNumeros[arrayNumeros.length - 1] == "6" && aux2 == "G") {
        mensaje2.innerText += "7"
        arrayNumeros.push("7")
    }
    //8
    else if (arrayNumeros[arrayNumeros.length - 1] == "7" && aux2 != "H") {
        swal("Error!", "Por favor ingrese el numero 8", "error");
    } else if (arrayNumeros[arrayNumeros.length - 1] == "7" && aux2 == "H") {
        mensaje2.innerText += "8"
        arrayNumeros.push("8")
    }
    //9
    else if (arrayNumeros[arrayNumeros.length - 1] == "8" && aux2 != "I") {
        swal("Error!", "Por favor ingrese el numero 9", "error");
    } else if (arrayNumeros[arrayNumeros.length - 1] == "8" && aux2 == "I") {
        mensaje2.innerText += "9"
        arrayNumeros.push("9")
    }
    //0 
    else if (arrayNumeros[arrayNumeros.length - 1] == "9" && aux2 != "J") {
        swal("Error!", "Por favor ingrese el numero 0", "error");
    } else if (arrayNumeros[arrayNumeros.length - 1] == "9" && aux2 == "J") {
        mensaje2.innerText += "0"
        arrayNumeros.push("0")
        swal("Felicidades!", "Terminaste", "success");
    }
}

for (let letra of letras) {
    letra.addEventListener('click', teclado)
}

document.getElementById('limpiar').addEventListener('click', () => {
    localStorage.clear()
    mensaje.innerHTML = ''
    mensaje2.innerHTML = ''
    arrayLetras.length = 0
    arrayNumeros.length = 0
})