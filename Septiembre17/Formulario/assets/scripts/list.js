const tabla = document.getElementById('tablaPeli')


const pelisGuardadasEnStorage = () => {
    const peliEnStorage = JSON.parse(localStorage.getItem('pelis'))
    console.log(peliEnStorage)
    for (let i = 0; i < peliEnStorage.length; i++) {
        tabla.innerHTML += `
            <tr>
                <th style="color: red;">${i+1}</th>
                <td>${peliEnStorage[i].name}</td>
                <td>${peliEnStorage[i].gender}</td>
                <td>${peliEnStorage[i].date}</td>
                <td>${peliEnStorage[i].actor}</td>
            <tr>
        `
        console.log(peliEnStorage[i])
    }

}
pelisGuardadasEnStorage()

document.getElementById('limpiar').addEventListener('click', () => {
    localStorage.clear()
    tabla.innerHTML = ''
})