let edad = 30;
let membresia = "VIP"; // Edad del usuario
                       // Tipo de membresía elegida (opciones: "Básica", 'Estándar", *VIP*)


//Evaluación de la edad del usuario
if (edad < 18) {
console.log ("Eres menor de edad, puedes acceder a la membresia juvenil.");
} else if (edad >= 18 && edad <= 60) {
console. log("Eres un adulto, puedes acceder a todas las membresías.");
} else {
console.log ("Eres mayor de 60 años, tienes descuentos en las membresias.");
}
//Uso de switch para determinar beneficios según la membresia seleccionada
switch (membresia) {
    case "Básica":
        console. log("Membresía Básica: Acceso a las áreas de entrenamiento estándar.");
        break;
    case "Estándar":
        console.log ("Membresia Estándar: Acceso a todas las áreas de entrenamiento y Clases grupales.");
        break
    case "Vip":
        console.log("Membresía VIP: Acceso completo, con beneficios adicionales como spa y entrenadores personalizados.");
        break;
    default:
        console.log("Tipo de membresía no válido.");

}
// Descripción de la estructura utilizada:
//con el 'if', 'else if', y 'else', clasificanos al usuario según su edad.
// El 'switch evalúa el tipo de membresía seleccionada y muestra los beneficios correspondientes.