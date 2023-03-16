/* Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/

function mayusminus(cadena){
    if(cadena.includes(cadena.toLowerCase())){
        return "la cadena esta formada por minusculas"
    }
    if(cadena.includes(cadena.toUpperCase())){
        return "la cadena esta formada por mayusculas"
    }
    return "la cadena esta formada por mayusculas y minusculas";
}

console.log(mayusminus("TODO MAYUS"));
console.log(mayusminus("todo minus"));
console.log(mayusminus("MAYUS minus"));