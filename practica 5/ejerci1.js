let letraCalificacion ='B'; // se cambia la letra para que nos de el mensaje de cada una

switch (letraCalificacion) {
    case 'A':
        console.log("execelente Trabajo");
        break;
    case 'B':
        console.log("Buen trabajo");
        break;
    case 'C':
    console.log("es suficiente");
        break;
    case 'D':
        console.log(" Necesitas mejorar");
        break;
    case 'F':
        console.log("Reprobado");
        break;
        
    default:
    console.log ("calificaciones no valida");
}