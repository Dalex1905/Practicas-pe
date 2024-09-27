
const esperarTresSegundos = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Tiempo completado después de 3 segundos");
    }, 300);
});


esperarTresSegundos
    .then((mensaje) => {
        console.log(mensaje); 
    })
    .catch((error) => {
        console.error(error); 
    });