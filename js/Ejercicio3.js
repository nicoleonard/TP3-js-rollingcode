/*Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación. */

let contador = 0;
let suma = 0;
let lista = [0,0,0,0,0,0,0,0,0,0,0,0,0];
let html = `<table class="table"><thead><tr><th class="col p-1">Suma</th><th class="col p-1">Apariciones</th></thead><tbody>`;

while(contador<50){
    suma = ((Math.trunc(Math.random()*100))%6 +1) + ((Math.trunc(Math.random()*100))%6 +1)
    lista[suma]= lista[suma]+1;
    contador++;
}

for(let i=0; i<lista.length;i++){
    if(lista[i]!=0){html = html.concat(`<tr><td>${i}</td><td>${lista[i]}</td></tr>`)};
}

html = html.concat(`</tbody></table>`);

document.write(html);
