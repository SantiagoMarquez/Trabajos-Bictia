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
    console.log(aux2)

    switch (aux2) {

        case :
        console.log(aux2, "asd123")
        break;

    }

}

for (let letra of letras) {
    letra.addEventListener('click', teclado)
}

// document.getElementById('limpiar').addEventListener('click', () => {
//     localStorage.clear()
//     mensaje.innerHTML = ''
//     mensaje2.innerHTML = ''
// })