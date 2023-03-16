/* Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

La fórmula del perímetro  es p = 2*(a +b)
*/

function perimetroCuadrilatero(ladoA,ladoB){
    return "el perimetro del cuadrilatero es: "+ 2*(ladoA+ladoB);
}

let A = parseInt(prompt("ingrese un numero entero para un lado del cuadrilatero"));
let B = parseInt(prompt("ingrese un numero entero para el otro lado del cuadrilatero"));

document.write(perimetroCuadrilatero(A,B));