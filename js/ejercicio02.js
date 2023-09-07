/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

*Mostrar la longitud del arreglo.
*Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
*Añade en última posición la ciudad de París.
*Escribe por pantalla el elemento que ocupa la segunda posición.
*Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo:

Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]

*/

let ciudades = [];

while (true) {
    let ciudad = prompt("Ingrese nombre de una ciudad:")
    
    if (ciudad === null) {
        break;
    }
    ciudades.push(ciudad);
    
}


if (ciudades.length > 0) {

    document.write("El arreglo de ciudades tiene " + ciudades.length + " elementos."+ "<br><br>");
document.write("<li>Elemento 1era posición: " + ciudades[0] + "</li>");
document.write("<li>Elemento 3era posición: " + ciudades[2] + "</li>");
document.write("<li>Elemento última posición: " + ciudades[ciudades.length-1] + "</li><br>");

ciudades.push("París");

document.write("<li>Elemento última posición: " + ciudades[ciudades.length-1] + "</li>");

ciudades.splice(1,0,"Barceona");

document.write("<h1>Listado de ciudades</h1>");

ciudades.forEach((ciudad)=>{
    document.write("<li>Elemento: " + ciudad + "</li>")
});
    
} else {
    document.write("No se ingresaron ciudades.");
}



