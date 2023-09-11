/*
7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/

let multiplicador = [1,2,3,4,5,6,7,8,9,10];

const tableMultiplicar = ((numero)=> {

    document.write("<table border='1'>");
    document.write("<tr>");
    document.write("<th>Multiplicador</th>")
    document.write("<th>Resultado</th>")
    document.write("</tr>");

    for (let i = 0; i < multiplicador.length; i++) {

        let resultado = multiplicador[i] * numero;

        document.write("<tr>");
        document.write("<td>" + multiplicador[i] + "</td>");
        document.write("<td>" + resultado + "</td>");
        document.write("</tr>");   
    }

})

let num = prompt("Ingrese su número a multiplicar: ");

tableMultiplicar(num);