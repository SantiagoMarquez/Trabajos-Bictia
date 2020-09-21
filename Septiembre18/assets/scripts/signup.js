const formRegistro = document.getElementById('formRegistro')

let listaDeUsuarioss = [];

formRegistro.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputNombre = document.getElementById('nombre').value
    const inputApellido = document.getElementById('apellido').value
    const inputDireccion = document.getElementById('direccion').value
    const inputTel = document.getElementById('tel').value
    const inputCorreo = document.getElementById('correo').value
    const inputConfCorreo = document.getElementById('confCorreo').value
    const inputContr = document.getElementById('contr').value
    const inputConfContr = document.getElementById('confContr').value

    const usuario = {
        nombre: inputNombre,
        apellido: inputApellido,
        direccion: inputDireccion,
        tel: inputTel,
        correo: inputCorreo,
        confCorreo: inputConfCorreo,
        contr: inputContr,
        confContr: inputConfContr
    }
    guardarEnStorage(usuario)
})

const guardarEnStorage = (usuario) => {
    if (localStorage.getItem('usuarios') == null) {
        listaDeUsuarios.push(usuario)
        const usuariosString = JSON.stringify(listaDeUsuarios)
        localStorage.setItem('usuarios', usuariosString)
    } else {
        listaEnStorage = JSON.parse(localStorage.getItem("usuarios"))
        listaEnStorage.push(usuario)
        const usuariosString = JSON.stringify(listaEnStorage)
        localStorage.setItem('usuarios', usuariosString)
    }
}