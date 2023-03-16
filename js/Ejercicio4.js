/*Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función. */

function parImpar(entero){
    if(entero%2==0){
        return "el numero es par"
    }else{
        return "el numero es impar"
    }
}

document.write(`${parImpar(parseInt(prompt("ingrese un numero para comprobar paridad")))}`);