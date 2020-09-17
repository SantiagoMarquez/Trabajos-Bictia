// const frutas = ["manzana", "banano", "pera"]

// const difElements = ["Juan", 2, true, {
//     superheroe: "Batman",
//     hobbie: "Paintball"
// }]

// console.log(difElements[3].superheroe)

const arrayHeroes = ["Batman", "Linterna verde", "Flash"]

//push (agrega en la ultima posicion)
arrayHeroes.push("Robin")

//unshift (agrega en la primera posicion)
arrayHeroes.unshift("Superman", "Shazam")

//splice (agrega un elemento en una posicion especifica, especifica si quiere eliminar items y agrega el elemento)
arrayHeroes.splice(2, 0, "Cyborg")

//pop (elimina el elemento en la ultima posicion)
arrayHeroes.pop()

console.log(arrayHeroes)

const a = "Hola mmundo soy una constante"
const b = a.split(" ")
console.log(b)

const ruta = "assets/images/asd.jpg"
const imagen = ruta.split("/")
console.log(imagen)

const persona = {
    name: "Carlos",
    edad: 33,
    barrio: "castilla",
    hobbies: ["ver tv", "jugar"]
    padres: {
        name: "sr andres"
        edad: 60,
        barrio: "castilla"
        hobbies: ["leer", "comer"]
    }
}
const nombre = document.getElementById('nombre').innerText = persona.name