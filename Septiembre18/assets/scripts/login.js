const login = document.getElementById('loginForm')

login.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("holaa")
    usuariosGuardadosEnStorage()
})

const usuariosGuardadosEnStorage = () => {
    console.log("asdasdad123")
    const usuarioEnStorage = JSON.parse(localStorage.getItem('usuarios'))
    const inputCorreoLog = document.getElementById('correo').value
    const inputContrLog = document.getElementById('contr').value

    console.log(usuarioEnStorage)
    console.log(inputCorreoLog)
    console.log(inputContrLog)
    for (let i = 0; i < usuarioEnStorage.length; i += 1) {
        if (inputCorreoLog == usuarioEnStorage[i].correo && inputContrLog == usuarioEnStorage[i].contr) {
            swal("Exito", "Bienvenido", "success");
            setTimeout(() => {
                window.location = './assets/pages/teclado.html'
            }, 1000)

        } else {
            swal("Error", "Por favor verifique sus datos", "error");
        }
    }
}