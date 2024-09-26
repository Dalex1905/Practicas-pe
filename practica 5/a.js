let categoriaCliente = "Premium"; // Categoría del cliente (Opciones: 'Estándar', 'Frecuente', 'Premium')
let totalCompra = 2000; // Total de la compra

let descuento = 0;
let totalFinal = 0;

// Aplicación de descuento según la categoría del cliente
if (categoriaCliente === "Estándar") {
    if (totalCompra > 1000) {
        descuento = 0.05; // 5% de descuento
    }
} else if (categoriaCliente === "Frecuente") {
    if (totalCompra > 1000) {
        descuento = 0.1; // 10% de descuento
    }
} else if (categoriaCliente === "Premium") {
    if (totalCompra > 1000) {
        descuento = 0.15; // 15% de descuento
    }
} else {
    console.log("Categoría de cliente no válida.");
}

if (descuento > 0) {
    totalFinal = totalCompra - (totalCompra * descuento);
    console.log(`Se aplicó un descuento de ${descuento * 100}%`);
} else {
    totalFinal = totalCompra;
    console.log("No se aplicó ningún descuento.");
}

console.log(`El total a pagar es: $${totalFinal}`);
