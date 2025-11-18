// Sistema de Venta Basico

const producto = {
    nombre: "Jersey Charlotte Hornets",
    precio: 115,
    stock: 20
};

// Función para calcular el precio + IVA
function calcularIVA(precio) {
    return precio * 1.16;
}

// Función para aplicar descuento
function aplicarDescuento(precio, descuento) {
    return precio - (precio * descuento / 100);
}

// Verificamos el stock del producto
function verificarStock(producto, cantidad) {
    return cantidad <= producto.stock;
}

// Hacer la venta completa
function vender(producto, cantidad, descuento = 0) {
    if(!verificarStock(producto, cantidad)) {
        console.log("No hay suficiente stock.");
        return;
    }

    // Calculamos precio total
    let precioTotal = calcularIVA(producto.precio) * cantidad;
    precioTotal = aplicarDescuento(precioTotal, descuento);

    // Actualizamos stock
    producto.stock -= cantidad;

    // Mostramos información de la venta
    console.log(`Venta realizada: ${cantidad} x ${producto.nombre}`);
    console.log(`Precio total: ${precioTotal.toFixed(2)} (IVA incluido, descuento aplicado)`);
    console.log(`Stock restante: ${producto.stock}`);
}

// Ejemplos de uso
vender(producto, 5, 10); // Vender 5 con 10% de descuento
vender(producto, 20);    // Intentar vender más de lo que queda
