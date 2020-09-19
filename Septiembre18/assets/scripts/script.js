// const letra = document.getElementById('letra')
// const letraB = document.getElementById('letraB')
// const mensaje = document.getElementById('mensaje')
// console.log(letra)

// letra.addEventListener('click', ()=>{
//     mensaje.innerText = letra.innerText
// })

const letras = document.querySelectorAll('.letra')
const mensaje = document.getElementById('mensaje')
console.log(letras)


const teclado = (e) => {
    const textoTarget = e.target.innerText
    if (textoTarget == "space") {
        mensaje.innerHTML += "&nbsp"
    } else if (textoTarget == "<--") {
        mensaje.innerHTML = mensaje.innerText.slice(0, -1)
    } else {
        mensaje.innerText += textoTarget
    }
    // console.log(e.target.innerText)
}

// for (let i = 0; i < letras.length; i++) {
//     // console.log(letras[i].innerText())
//     letras[i].addEventListener('click', teclado)
// }

for (let letra of letras) {
    letra.addEventListener('click', teclado)
}