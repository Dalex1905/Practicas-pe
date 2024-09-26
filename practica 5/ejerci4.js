let plan = "Premium"; // Cambia el valor de 'plan' para probar otros casos
// Selección de beneficios usando switch
switch (plan) {
    case "Básico":
        console. log("Plan Básico: Acceso limitado a contenido.");
        break;
    case "Estándar":
        console.log("Plan Estándar: Acceso a la mayoría del contenido.");
        break;
    case "Premium" :
        console.log("Plan Premium: Acceso 1limitado a todo el contenido.");
        break;
    default:
    console. log("Plan no válido.");
}
// Descripción:
// - Si el usuario selecciona el plan 'Básico", recibe acceso lieitado.
// - Si selecciona el plan 'Estándar', tiene acceso a la mayoría del contenido.
// - Si selecciona el plan 'Premium", obtiene acceso completo.
// - Si el plan no es reconocido, se muestra un mensaje de error.