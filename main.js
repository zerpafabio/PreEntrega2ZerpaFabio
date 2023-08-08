class Producto {
    constructor (id, nombre, precio, observacion){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.observacion = observacion;
    }
}

const generarProducto = () => {
    let mensaje = 'Estos son los hostales disponibles: \n';
    let info = productos.map(prod => `ID: ${prod.id} - Nombre: ${prod.nombre} - Precio: ${prod.precio} - observacion: ${prod.observacion} `);
    mensaje += info.join('\n');
    mensaje += '\nIngrese el ID del hostal que desea reservar. Ingrese 0 para salir'
    return mensaje;
}

const productos = [
    new Producto(1, "Hostal Premium", 120000, "Pension Completa"),
    new Producto(2, "Hostal Estandar ", 80000, "Media Pension"),
    new Producto(3, "Hostal familiar ", 75000, "Solo incluye desayuno"),
]

alert('Bienvenido a El cielo en Pumamarca');

let precioTotal = 0;
let idProducto = Number(prompt(generarProducto()));
while (idProducto !== 0) {
    let productoInfo = productos.find(prod => prod.id === idProducto);
    if (productoInfo) {
        precioTotal += productoInfo.precio;
        alert(`Se agregó el producto ${productoInfo.nombre} con precio: $${productoInfo.precio} ARS`);
    } else {
        alert(`Error! ID inexistente`)
    }
    idProducto = Number(prompt(generarProducto())) 
} 
alert(`Final de la compra. Precio total: ${precioTotal} ARS`)   
