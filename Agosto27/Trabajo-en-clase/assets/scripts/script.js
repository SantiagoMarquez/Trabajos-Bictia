const mensajeNombre = document.getElementById('mensajeAlertaNombre')
// const mensajeNombre = document.getElementById('mensajeAlertaApellido')
// const mensajeNombre = document.getElementById('mensajeAlertaCorreo')
// const mensajeNombre = document.getElementById('mensajeAlertaContrasena')
// const mensajeNombre = document.getElementById('mensajeAlertaEdad')
const mensajeTyC = document.getElementById('mensajeAlertaTyC')


function validarForm(e){
    e.preventDefault()
    let inputName = document.getElementById('name')
    // let inputLname = document.getElementById('lname').value
    // let inputEmail = document.getElementById('email').value
    // let inputPass = document.getElementById('pass').value
    // let inputAge = document.getElementById('age').value
    const inputTyC = document.getElementById('inputTyC')

    if(inputName.value ==''){
        mensajeNombre.innerText = "por favor llenar el campo nombre"
        inputName.classList.add('bgAlert')
        // swal("Error!", "Llena el campo de nombre", "error");
    } else if(inputTyC.checked == false){
        mensajeTyC.innerText = 'Acepte los terminos y condicines'
        // swal("Error!", "Acepte terminos y condiciones", "error");
    } else{
        swal("Exito!", "", "success");
        setTimeout(()=>{
            window.location = '../Agosto26/index.html'
        },2000)
        
    }
}