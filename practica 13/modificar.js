const fs = require('fs');

const fileName = 'archivo.json';

fs.readFile(fileName, 'utf-8', (err, content) => {
  if (err) {
    console.log("Error al leer el archivo JSON", err);
    return;
  }

  try {
    const objectJSON = JSON.parse(content);
    objectJSON.ciclo = 'II-2024';

    const newContent = JSON.stringify(objectJSON, null, 2);
    fs.writeFile(fileName, newContent, (err) => {
      if (err) {
        console.log("Error al escribir archivo JSON", err);
      } else {
        console.log("Archivo JSON modificado y guardado exitosamente");
      }
    });
  } catch (parseError) {
    console.log("Error al analizar el archivo JSON", parseError);
  }
});