/* Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.*/

const meses = ["Enero", "Febrero","Marzo", "Abril","Mayo", "Junio","Julio", "Agosto","Septiembre", "Octubre","Nobiembre", "Diciembre"];
let html = `<ul class="list-group list-group-flush">`;
for(let i=0; i<meses.length;i++){
    html=html.concat("",`<li class="list-group-item">${meses[i]}</li>`)
}
html=html.concat(`</ul>`);
document.write(html);


