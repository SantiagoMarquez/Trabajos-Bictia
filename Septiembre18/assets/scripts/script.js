// const letra = document.getElementById('letra')
// const letraB = document.getElementById('letraB')
// const mensaje = document.getElementById('mensaje')
// console.log(letra)

// letra.addEventListener('click', ()=>{
//     mensaje.innerText = letra.innerText
// })

const letras = document.querySelectorAll('.letra')
const mensaje = document.getElementById('mensaje')
// console.log(letras)


const teclado = (e) => {
    const textoTarget = e.target.innerText
    if (textoTarget == "space") {
        mensaje.innerHTML += "&nbsp"
    } else if (textoTarget == "del") {
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

const usuarioEnStorage = JSON.parse(localStorage.getItem('usuarios'))
const nombre = document.getElementById('nombre')
for (let i = 0; i < usuarioEnStorage.length; i += 1) {
    nombre.innerText = usuarioEnStorage[i].nombre
}

const btnList = document.getElementById('btnList');

function lista() {
    console.log(mensaje.innerText)
    const lista = document.getElementById('lista');
    const itemLista = document.createElement('li');
    itemLista.textContent = mensaje.innerText;
    lista.appendChild(itemLista);
}


btnList.onclick = function () {
    lista();
    mensaje.innerHTML = mensaje.innerText.slice(0, -100)

};