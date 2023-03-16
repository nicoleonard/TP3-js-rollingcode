/*Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
 */

let solicitud = "";
let arreglo = [];

do{
    solicitud = prompt("Ingrese el nombre de una ciudad para almacenar en un arreglo");
    arreglo.push(solicitud);

}while(confirm("Desea agregar otro mas?"));

console.log(arreglo.length);

let html = `<section><ul class="list-group list-group-flush">`;
for(let i=0; i<arreglo.length;i++){
    if(i==0 || i == 2 || i==arreglo.length-1) html=html.concat("",`<li class="list-group-item">${arreglo[i]}</li>`);
}
html=html.concat(`</ul></section>`);
document.write(html);

arreglo.push("París");
document.write(`<section> <p class="px-3"> ${arreglo[1]} </p> </section>`);
arreglo.splice(1,"Barcelona");
