function validar(e) {
    e.preventDefault(); // CANCELAR EN ENVÍO
    let formulario = document.getElementById("formulario");
    let cedula = document.getElementById("txtCedula");
    let nombre = document.getElementById("txtNombre");
    let telefono = document.getElementById("txtTelefono");
    let correo = document.getElementById("txtCorreo");
    let fechaNac = document.getElementById("txtFechaNac");
    let valida = true;
    let varificarEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if ( cedula.value == "" ) {
        alert("El campo cedula esta vacío");
        valida = false;
    } if ( nombre.value == "" ) {
        alert("El campo nombre esta vacío");
        valida = false;
    } if ( telefono.value == "" ) {
        alert("El campo telefono esta vacío");
        valida = false;
    } if ( correo.value == "" ) {
        alert("El campo correo esta vacío");
        valida = false;
    } if ( fechaNac.value == "" ) {
        alert("El campo Fecha de Nacimiento esta vacío");
        valida = false;
    } if (varificarEmail.test(correo.value)){
    } else {
        alert("La dirección de correo es incorrecta");
        valida = false;
    } if ( valida == true ) {
        formulario.method = "post";
        formulario.submit();
    } 
}