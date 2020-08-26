//Tipos de variable

// //var
// var dato = "pepito"
// console.log(dato)
// var dato = 28
// console.log(dato)

// //let

// let dato2 = "jose"
// console.log(dato2)
// dato2 = 22
// console.log(dato2)

// //const

// const dato3 = ["juan", "juliana"]
// console.log(dato3)
// dato3.push("carlos")
// console.log(dato3)

//funciones anonimas o tipo flecha

//opcion1
// const myFunction = (num1, num2) => num1 + num2
// //opcion2
// // const myFunction = (num1, num2) => {
// //     return num1 + num2
// // }

//switch

// function diaSemana(dia){
//     switch(dia){
//         case 'lunes':
//         console.log("Lunes, dia de trabajo")
//         break;
//         case 'martes':
//         console.log("Martes, dia de trabajo")
//         break;
//         case 'miercoles':
//         console.log("Miercoles, dia de trabajo")
//         break;
//         case 'jueves':
//         console.log("Jueves, dia de trabajo")
//         break;
//         case 'viernes':
//         console.log("Viernes, dia de trabajo")
//         break;
//         default:
//             console.log("Hoy es dia de descanso")
//         break;
//     }
// }

//ejercicio
let n1 = prompt("ingrese el primer numero")
let n2 = prompt("ingrese el segundo numero")
let op = prompt("ingrese el signo de la operacion a realizar (+,-,/,*)")
let result



if (op == '+') {
    suma(n1,n2)
}else if( op == '-'){
    resta(n1,n2)
}else if( op == '/'){
    div(n1,n2)
}else if( op == '*'){
    multi(n1,n2)
}else{
    alert("opcion no valida")
    console.log("opcion no valida")
}

function suma(n1, n2){
    result = parseInt(n1)+parseInt(n2)
    alert(result)
}

function resta(n1, n2){
    result = parseInt(n1)-parseInt(n2) 
    alert(result)
}

function multi(n1, n2){
    result = parseInt(n1)*parseInt(n2)
    alert(result)
}

function div(n1, n2){
    result = parseInt(n1)/parseInt(n2)
    alert(result)
}