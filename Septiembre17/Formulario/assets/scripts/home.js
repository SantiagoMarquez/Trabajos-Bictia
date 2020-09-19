const formRegistro = document.getElementById('formRegistro')

let listaDePeliculas = [];

formRegistro.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputName = document.getElementById('name').value
    const inputGen = document.getElementById('gen').value
    const inputDate = document.getElementById('date').value
    const inputActor = document.getElementById('actor').value

    const peli = {
        name: inputName,
        gender: inputGen,
        date: inputDate,
        actor: inputActor
    }
    guardarEnStorage(peli)
})

const guardarEnStorage = (peli) => {
    if (localStorage.getItem('pelis') == null) {
        listaDePeliculas.push(peli)
        const pelisString = JSON.stringify(listaDePeliculas)
        localStorage.setItem('pelis', pelisString)
    } else {
        listaEnStorage = JSON.parse(localStorage.getItem("pelis"))
        listaEnStorage.push(peli)
        const pelisString = JSON.stringify(listaEnStorage)
        localStorage.setItem('pelis', pelisString)
    }
}