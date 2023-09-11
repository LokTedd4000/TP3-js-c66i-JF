/*
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random
para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
repitiendo 50 veces esta operación.

Ejemplo de salida:

*/

let apariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

document.write("<table border='1'>");
document.write("<tr>");
document.write("<th>Suma 🎲🎲</th>");
document.write("<th>Apariciones</th>");
document.write("</tr>");

for (let i = 0; i < 50; i++) {
    let dado1 = Math.ceil(Math.random() * 6);
    let dado2 = Math.ceil(Math.random() * 6);
    let suma = dado1 + dado2;
    apariciones[suma - 2]++;
}

for (let suma = 2; suma <= 12; suma++) {
    document.write("<tr>");
    document.write("<td>" + suma + "</td>");
    document.write("<td>" + apariciones[suma - 2] + "</td>");
    document.write("</tr>");
}

document.write("</table>");
