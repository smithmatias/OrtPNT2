//Array inicial de productos
const productos = [
  { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
  { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
  { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
  { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
  { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" },
];

//////////PARTE 1///////////////

// 1 - Mostrar el nombre del primer producto
console.log(productos[0].nombre);

// 2 - Mostrar en consola nombre y precio de cada producto
for (const producto of productos) {
  console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
}

// 3 - Mostrar en consola nombre y precio de cada producto usando .forEach()
productos.forEach((producto) => {
  console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
});

//////////PARTE 2///////////////

// 4 - Obtener solo los nombres con map(), creando unicamente un array que tenga los nombres
const punto4 = productos.map((producto) => producto.nombre);
console.log(nombres);

// 5 - Crear un array que tenga solamente los productos de la categoría "Ropa"
const punto5 = productos.filter((producto) => producto.categoria === "Ropa");
console.log(punto5);

// 6 - Array con productos con precio mayor a 3000
const punto6 = productos.filter((producto) => producto.precio > 3000);
console.log(punto6);

// 7 - Buscar con find() el producto con nombre "Gorra"
// Nota: Estoy asumiendo que encuentra gorra, si no estoy mostrando un undefined, no se si esta bien eso
const punto7 = productos.find((producto) => producto.nombre === "Gorra");
console.log(punto7);

//////////PARTE 3///////////////

// 8 - buscar con some() si hay alguno con precio mayor a 10.000
const punto8 = productos.some((producto) => producto.precio > 10000);
console.log(punto8);

// 9 - every() si todos son mas caros que 1000
const punto9 = productos.every((producto) => producto.precio > 1000);
console.log(punto9);

// 10 - Chequear si el array del punto 4 contiene el nombre "Campera"
const punto10 = punto4.includes("Campera");
console.log(punto10);

//////////PARTE 4///////////////

// 11 - Ordenar por precio de menor a mayor
// Nota: Uso slice() para no cambiar el original, si no seria sort de una
// Lo hago porque esta todo en el mismo archivo yu se va a romper
const punto11 = productos.slice().sort((a, b) => a.precio - b.precio);
console.log(punto11);

// 12 - Generar mensajes y mostrarlos por consola
const punto12 = productos.map(
  (producto) =>
    `El producto ${producto.nombre} cuesta $${producto.precio} y pertenece a la categoría ${producto.categoria}.`
);
console.log(punto12);

// 13 - Armar un array con el mismo formato, productos cualquiera, y combinarlos con el operador Spread
// Nota: Entiendo que hay que respetar las mismas propiedades, porque si no no tendría sentido
const nuevosProductos = [
  { id: 6, nombre: "Bufanda", precio: 800, categoria: "Accesorios" },
  { id: 7, nombre: "Medias", precio: 5000, categoria: "Calzado" },
  { id: 8, nombre: "Cinturón", precio: 1200, categoria: "Accesorios" },
  { id: 9, nombre: "Chaleco", precio: 3000, categoria: "Ropa" },
];

const punto13 = [...productos, ...nuevosProductos];
console.log(punto13);
