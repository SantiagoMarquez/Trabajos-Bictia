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


// Calculadora

function signo(op) {
    let n1 = parseInt(document.getElementById('num1').value)
    let n2 = parseInt(document.getElementById('num2').value)
    let resultado = document.getElementById('result')
    switch (op) {
        case '+':
            resultado.innerText = n1 + n2
            break;
        case '-':
            resultado.innerText = n1 - n2
            break;
        case '*':
            resultado.innerText = n1 * n2
            break;
        case '/':
            resultado.innerText = n1 / n2;
            break;
        default:
            alert("Operacion no valida")
            break;
    }
}
