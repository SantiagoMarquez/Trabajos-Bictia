const mensajeNombre = document.getElementById('mensajeAlertaNombre')
const mensajeApellido = document.getElementById('mensajeAlertaApellido')
const mensajeCorreo = document.getElementById('mensajeAlertaCorreo')
const mensajeContrasena = document.getElementById('mensajeAlertaContrasena')
const mensajeEdad = document.getElementById('mensajeAlertaEdad')
const mensajeTyC = document.getElementById('mensajeAlertaTyC')


function validarForm(e){
    e.preventDefault()
    let inputName = document.getElementById('name')
    let inputLname = document.getElementById('lname')
    let inputEmail = document.getElementById('email')
    let inputPass = document.getElementById('passw')
    let inputAge = document.getElementById('age')
    const inputTyC = document.getElementById('inputTyC')


    if(inputName.value ==''){
      //mensajeNombre.innerText = "por favor llenar el nombre"
      inputName.classList.add('bgAlert')
      swal("Error!", "Ingrese su nombre", "error");
    }
    else if(inputLname.value ==''){
      //mensajeApellido.innerText = "por favor llenar el apellido"
      inputLname.classList.add('bgAlert')
      swal("Error!", "Ingrese su apellido", "error");
    }
    else if(inputEmail.value ==''){
      //mensajeCorreo.innerText = "por favor llenar el correo"
      inputEmail.classList.add('bgAlert')
      swal("Error!", "Ingrese su correo", "error");
    }
    else if(inputPass.value ==''){
      //mensajeContrasena.innerText = "Por favor ingrese una contrasena"
      inputPass.classList.add('bgAlert')
      swal("Error!", "Ingrese una contrasena", "error");
    }
    else if(inputAge.value ==''){
      //mensajeEdad.innerText = "Por favor llenar la edad"
      inputAge.classList.add('bgAlert')
      swal("Error!", "Ingrese su edad", "error");
    }
     else if(inputTyC.checked == false){
      //  mensajeTyC.innerText = 'Acepte los terminos y condicines'
        swal("Error!", "Acepte terminos y condiciones", "error");
    } else{
        swal("Exito!", "", "success");
        setTimeout(()=>{
            window.location = '../../Agosto26/index.html'
        },2000)       
    }
}