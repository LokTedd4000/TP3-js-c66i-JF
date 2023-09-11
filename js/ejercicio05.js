/*
5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/

const determinarTexto = ((cadena)=>{
    
    if (cadena === cadena.toUpperCase()) {
        return "La cadena de text tiene mayúsculas" + "</br>";
    }
    if (cadena === cadena.toLowerCase()) {
        return "La cadena de text tiene minúsculas" + "</br>";
    } else {
        return "La cadena de text tiene mayúsculas y minúsculas" + "</br>";
    }
})

document.write(determinarTexto("hola, como estás?"));
document.write(determinarTexto("TODO BIEN, VOS?"));
document.write(determinarTexto("Bien, haciendo la Tarea."));