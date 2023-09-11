/*
4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
*/

let numero = 0;

const seraPar = ((numero) => {
    if (parseInt(numero) % 2 === 0) {
        return "El número es par: " + numero + "<br>";
    } else {
        return "El número es impar: " + numero + "<br>";
    }
})


document.write(seraPar(8));

document.write(seraPar(15));