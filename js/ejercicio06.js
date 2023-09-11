/*
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)

Ejemplo:

Input:
lado A = 24
lado B = 5

Output: 58

*/



const calculadoraRectangulo = ((a,b)=>{
    if (!isNaN(a) && !isNaN(b)) {
        let perimetro = 2 * (parseInt(a) + parseInt(b));
        return perimetro;
    } else {
        return "Por favor, ingrese valores numéricos válidos para los lados del rectángulo.";
    }
})

a = prompt("Ingrese lado A ");
b = prompt("Ingrese lado B ");

document.write("Perímetro: " + calculadoraRectangulo(a,b));