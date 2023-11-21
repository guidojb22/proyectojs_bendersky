
// TARJETAS PRODUCTOS OFERTA CON FETCH: JSON

const containerTarjetasOferta = document.querySelector(".oferta");

const nodosProductosOferta = (data, container) => {
    const nodos = data.reduce((acc, productos) => {
        return acc + `
        <article class="producto">
            <img class="productoImagen" src=${productos.imagen} alt="${productos.titulo}">
            <div class="productoDetalles">
                <h3 class="productoTitulo">${productos.titulo}</h3>
                <p class="productoPrecio">Precio: $${productos.precio}</p>
                <button class="productoAgregar" id="${productos.id}">Agregar al carrito</button>
            </div>
        </article>
        `;
    }, "");

    container.innerHTML = nodos;
};

const llamadoArrayOferta = (direccion, generarNodos, container) => {
    fetch(direccion)
        .then((res) => res.json())
        .then((oferta) => {
            const productosFiltrados = oferta.filter((objeto) => objeto.oferta === String("si"));
            console.log(productosFiltrados);
            generarNodos(productosFiltrados, container);
        })
        .catch((error) => {
            console.error("Error al obtener los datos:", error);
        });
};
llamadoArrayOferta("../js/productos.json", nodosProductosOferta, containerTarjetasOferta);
