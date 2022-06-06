let btn = document.getElementById("validar");
let bor = document.getElementById("borrar");
let formulario = document.getElementById("formulario");
let nombre = document.getElementById("txtNombre");
let cedula = document.getElementById("txtCedula");
let msg = document.getElementById("IDmsg");

btn.addEventListener("click", function(e) {
    e.preventDefault(); // CANCELAR EN ENVÍO
    // let tabla = document.getElementById("tabla");
    let valida = true;

    if ( nombre.value == "" ) {
        nombre.classList.add("vacio");
        valida = false;
        msg.innerHTML = "<div class='msg'><p>Campo " + nombre.placeholder + " vacio</p></div>";
    } if ( cedula.value == "" ) {
        cedula.classList.add("vacio");
        valida = false;
        msg.innerHTML = "<div class='msg'><p>Campo " + cedula.placeholder + " vacio</p></div>";
    } if ( nombre.value == "" && cedula.value == "" ) {
        nombre.classList.add("vacio");
        cedula.classList.add("vacio");
        valida = false;
        msg.innerHTML = "<div class='msg'><p>Campos " + nombre.placeholder +  " y " + cedula.placeholder + " vacios</p></div>";
        // tabla.insertRow(-1).innerHTML = "<td colspan='2'><div class='msg'><p>Campos Vacios</p></div></td>";
    }
    if ( valida == true ) {
        formulario.method = "post";
        formulario.submit();
    } 
})

bor.addEventListener("click", function() {
    nombre.classList.remove("vacio");
    cedula.classList.remove("vacio");
    msg.innerHTML = "";
})