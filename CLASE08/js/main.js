/*
function suma(){
    let n1 = 4;
    let n2 = 3;
    suma = ( n1 + n2 );
    return suma;
}

console.log(suma());
*/

/*
function resta( n1, n2 ){
    resta = ( n1 - n2 );
    return resta;
}

console.log(resta());
*/

const fun = (msg) => {
    let n1 = 2;
    let n2 = 3;
    su = ( n1 + n2 );
    return su + msg;
}

// console.log(fun(", ªº"));

/*
function getNombre(){
    let nombre = "María";
    return nombre;
}
console.log(getNombre());
*/

const getNombre = () => "María";
apellido = "Pérez"
apellido => console.log(apellido);
console.log(getNombre());
console.log(apellido);

// ===========================================
function multiplicacion( n1, n2=2 ){
    return ( n1 * n2 );
}
console.log(multiplicacion(2));
// ===========================================
const multi = ( n1, n2=4 ) => {
    let res = ( n1 * n2 );
    let msg = `Resultado: ${res}`;
    return ( msg );
}
console.log(multi(4));
// ===========================================




let contador = document.getElementById("caja");
total = 0;
setInterval( () => {
    total += 1;
    console.log(total);
    contador.innerHTML = total;
}, 500 );