//seleccionar todos los encabezados desde h1-h6
const Headers = document.querySelectorAll('h1,h2,h3,h4,h5,h6');

//usaremos el bucle for para iterar lo encabezados 
for (let i = 0; i< Headers.length; i++){
    //cambiar el texto de cada encabezado
    Headers[i].innerText = `Nuevo Encabezado denivel ${i + 1}`;
}