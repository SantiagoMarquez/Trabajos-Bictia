// const arrayFrutas = ['banano', 'fresa', 'limon', 'maracuya']
// console.log(arrayFrutas)
// console.log(typeof arrayFrutas)

// localStorage.setItem('frutas', arrayFrutas)

// const frutasEnStorage = localStorage.getItem('frutas')
// console.log(frutasEnStorage)
// console.log(typeof frutasEnStorage)

// const frutasArray = frutasEnStorage.split(',')
// console.log(frutasArray)

// const persona = {
//     name: 'Juan',
//     surname: 'Perez',
//     age: 25
// }

// const personaString = JSON.stringify(persona)
// localStorage.setItem('persona', personaString)

// const personaEnStorage = JSON.parse(localStorage.getItem('persona'))
// console.log(personaEnStorage)



const formRegistro = document.getElementById('formRegistro')

const listaDeUsuarios = []

formRegistro.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputName = document.getElementById('name')
    const inputCel = document.getElementById('cel')
    const inputEmail = document.getElementById('email')

    const usuario = {
        nombre: inputName,
        cel: inputCel,
        email: inputEmail
    }
    // listaDeUsuarios.push(usuario)

    console.log(usuario)
    // console.log(listaDeUsuarios)
    // const usuariosString = JSON.stringify('listaDeUsuarios')
    guardarEnStorage(listaDeUsuarios)
})

// console.log(formRegistro)

const guardarEnStorage = (usuarios) => {
    if (localStorage.getItem('usuarios') == null) {
        listaDeUsuarios.push(usuario)
        const usuariosString = JSON.stringify(listaDeUsuarios)
        localStorage.setItem('usuarios', usuariosString)
    } else {
        const listaEnStorage = JSON.parse(localStorage.getItem('usuarios'))
        listaEnStorage.push(usuario)
        const usuariosString = JSON.stringify(lisstaEnStorage)
        localStorage.setItem('usuarios', usuariosString)
    }
    localStorage.setItem('usuarios', usuarios)
}