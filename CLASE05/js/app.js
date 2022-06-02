btn1 = document.getElementById("btn1");
btn2 = document.getElementById("btn2");
btn3 = document.getElementById("btn3");
btn4 = document.getElementById("btn4");
btn5 = document.getElementById("btn5");
btn6 = document.getElementById("btn6");
txtName = document.getElementById("txtName");

btn1.addEventListener("click", () => {
    alert("Maria");
})

btn2.addEventListener("click", imprimir);

function imprimir(){
    alert("Pedro");
}

btn3.addEventListener("click", mostrarTexto);

function mostrarTexto(){
    alert(txtName.value);
}

btn4.addEventListener("click", () => {
    alert("Margarita");
})

btn5.addEventListener("click", () => {
    alert("Francia");
})

btn6.addEventListener("click", () => {
    alert("Ximena");
})

txtName.addEventListener("blur", () => {
    alert(txtName.value)
})