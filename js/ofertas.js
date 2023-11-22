
// TARJETAS PRODUCTOS OFERTA CON FETCH: JSON

const containerTarjetasOferta = document.querySelector(".oferta");

const nodosProductosOferta = (data, container) => {
    const nodos = data.reduce((acc, producto) => {
        return acc + `
        <article class="producto">
            <img class="productoImagen" src=${producto.imagen} alt="${producto.titulo}">
            <div class="productoDetalles">
                <h3 class="productoTitulo">${producto.titulo}</h3>
                <p class="productoPrecio">Precio: $${producto.precio}</p>
                <button class="productoAgregar" id="add-${producto.id}"><i class="productoAgregar bi bi-cart-fill" id="add-${producto.id}"></i> Agregar al carrito</button>
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
