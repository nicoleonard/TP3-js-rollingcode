/* Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.*/

function tablaMultiplicar(entero){
    let html = `<table class="table"><thead><tr><th class="col p-1">Numero</th><th class="col p-1">Multiplo</th><th class="col p-1">Resultado</th></thead><tbody>`;
    for(i=1;i<=10;i++){
        html = html.concat(`<tr><td>${entero}</td><td>${i}</td><td>${entero*i}</td></tr>`)
    }
    html = html.concat(`</tbody></table>`);
    return html;
}

document.write(tablaMultiplicar(parseInt(prompt("ingrese un numero entero para hacer su tabla de multiplicar"))));