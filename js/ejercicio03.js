/*
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random
para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, 
repitiendo 50 veces esta operación.

Ejemplo de salida:

*/

let apariciones = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let suma = [2,3,4,5,6,7,8,9,10,11,12];

for (let i = 0; i < 50; i++) {

   let dado1 = Math.ceil(Math.random() * 6);
   let dado2 = Math.ceil(Math.random() * 6);
   let dados = dado1 + dado2;
   apariciones[dados - 2];
}






