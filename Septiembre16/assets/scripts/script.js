// Light color
////////////////////////////////
const btnLight = document.getElementById('light')
btnLight.addEventListener('click', () => {
    const container = document.getElementById('container')
    // document.getElementById('mostrarColor1').innerText = "light"
    // container.classList.remove('dark')
    // container.classList.remove('pink')
    // container.classList.remove('premium')
    container.className = "container"
    localStorage.setItem('tema', "light")
})

// Dark color
////////////////////////////////
const btnDark = document.getElementById('dark')
btnDark.addEventListener('click', () => {
    const container = document.getElementById('container')
    // document.getElementById('mostrarColor2').innerText = "dark"
    // container.classList.remove('light')
    // container.classList.add('dark')
    // container.classList.remove('pink')
    // container.classList.remove('premium')
    container.className = "container dark"
    localStorage.setItem('tema', "dark")
})

// Pink color
////////////////////////////////
const btnPink = document.getElementById('pink')
btnPink.addEventListener('click', () => {
    const container = document.getElementById('container')
    // document.getElementById('mostrarColor3').innerText = "pink"
    // container.classList.remove('light')
    // container.classList.remove('dark')
    // container.classList.add('pink')
    // container.classList.remove('premium')
    container.className = "container pink"
    localStorage.setItem('tema', "pink")
})

// Premium color
////////////////////////////////
const btnPremium = document.getElementById('premium')
btnPremium.addEventListener('click', () => {
    const container = document.getElementById('container')
    // document.getElementById('mostrarColor4').innerText = "premium"
    // container.classList.remove('light')
    // container.classList.remove('dark')
    // container.classList.remove('pink')
    // container.classList.add('premium')
    container.className = "container premium"
    localStorage.setItem('tema', "premium")
})

// Traer colores
/////////////////////////////////


const traerColor = () => {
    const colorGuardadoEnStorage = localStorage.getItem("colorDark")
    document.getElementById('mostrarColor').innerText = colorGuardadoEnStorage
}

const temaEnStorage = () => {
    const temaGuardado = localStorage.getItem('tema')
    if (temaGuardado == "dark") {
        document.getElementById('container').classList.add('dark')
        document.getElementById('mostrarColor2').innerText = temaGuardado
        // window.location.reload()
        console.log(temaGuardado, "tema dark")
    } else if (temaGuardado == "pink") {
        document.getElementById('container').classList.add('pink')
        document.getElementById('mostrarColor3').innerText = temaGuardado
        // window.location.reload()
        console.log(temaGuardado, "tema pink")
    } else if (temaGuardado == "premium") {
        document.getElementById('container').classList.add('premium')
        document.getElementById('mostrarColor4').innerText = temaGuardado
        // window.location.reload()
        console.log(temaGuardado, "tema premium")
    } else if (temaGuardado == "light") {
        // document.getElementById('container').classList.remove('dark')
        // document.getElementById('container').classList.remove('pink')
        // document.getElementById('container').classList.remove('premium')
        document.getElementById('container').className = "container"
        document.getElementById('mostrarColor1').innerText = temaGuardado
        // window.location.reload()
        console.log(temaGuardado, "tema light")
    }
}
temaEnStorage()


// usuario
////////////////////////////////
const usuario = document.getElementById('usuario')

usuario.addEventListener('click', () => {
    const nombreUsuario = prompt('Escribe tu nombre')
    localStorage.setItem("usuarioStorage", nombreUsuario)
    window.location.reload()
})

const traerUsuarioStorage = () => {
    const usarioGuardadoEnStorage = localStorage.getItem('usuarioStorage')
    document.getElementById('mostrarUsuario').innerText = usarioGuardadoEnStorage

    console.log(usarioGuardadoEnStorage, " Este es el usuario")

}

traerUsuarioStorage()