var divNombre = document.getElementById('nombre')
var divNombre2 = document.getElementById('nombre2')
var divNombre3 = document.getElementById('nombre3')
var divEdad = document.getElementById('edad')
var divEdad2 = document.getElementById('edad2')
var divEdad3 = document.getElementById('edad3')
var divBanda = document.getElementById('banda')
var divBanda2 = document.getElementById('banda2')
var divBanda3 = document.getElementById('banda3')
var divGenero = document.getElementById('genero')
var divGenero2 = document.getElementById('genero2')
var divGenero3 = document.getElementById('genero3')
function img1(){
    var nombre = prompt('Nombre')
    divNombre.innerText = 'Nombre: ' + nombre
    var edad = prompt('Edad') 
    divEdad.innerText = 'Edad: ' + edad
    var banda = prompt('Banda')
    divBanda.innerText = 'Banda: ' + banda
    var genero = prompt('Genero musical')   
    divGenero.innerText = 'Genero: ' + genero
}

function img2(){
    var nombre2 = prompt('Nombre')
    divNombre2.innerText = 'Nombre: ' + nombre2
    var edad2 = prompt('Edad') 
    divEdad2.innerText = 'Edad: ' + edad2
    var banda2 = prompt('Banda')
    divBanda2.innerText = 'Banda: ' + banda2
    var genero2 = prompt('Genero musical')   
    divGenero2.innerText = 'Genero: ' + genero2
}

function img3(){
    var nombre3 = prompt('Nombre')
    divNombre3.innerText = 'Nombre: ' + nombre3
    var edad3 = prompt('Edad') 
    divEdad3.innerText = 'Edad: ' + edad3
    var banda3 = prompt('Banda')
    divBanda3.innerText = 'Banda: ' + banda3
    var genero3 = prompt('Genero musical')   
    divGenero3.innerText = 'Genero: ' + genero3
}

