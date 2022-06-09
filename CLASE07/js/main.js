let edad = [ 18, 14, 15, 92, 78, 63, "david", "luis" ];
let datos = [
    {edad:12, nombre:"Camilo",apellido:"Perez",telefono:2574773,direccion:"cll 34 sur"},
    {edad:45, nombre:"Juliana",apellido:"Castañeda",telefono:368936,direccion:"cll 34 sur"},
    {edad:65, nombre:"Daniel",apellido:"Castrillon",telefono:246731,direccion:"cll 34 sur"},
    {edad:34, nombre:"Martin",apellido:"Bustamante",telefono:3567356,direccion:"cll 34 sur"},
    {edad:76, nombre:"Ramiro",apellido:"Muñetones",telefono:379343,direccion:"cll 34 sur"}
];

let persona = {nombre:"a", apellido:"b"};
/*
for ( let i = 0; i < datos.length ; i++ ){
    console.log(
        "Edad:" + `${datos[i].edad}` + 
        " Nombre:" + `${datos[i].nombre}` + 
        " Apellido:" + `${datos[i].apellido}` + 
        " Telefono:" + `${datos[i].telefono}` + 
        " Direccion:" + `${datos[i].direccion}`);
}
*/

datos.forEach(element => {
    console.log(`la edad es ${element.edad}, el nombre es ${element.nombre}, el apellido es ${element.apellido}, el telefono es ${element.telefono}, el direccion es ${element.direccion}`);
})