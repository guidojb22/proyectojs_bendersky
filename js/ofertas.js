
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
            generarNodos(productosFiltrados, container);
            document.body.onclick = (event) => {
                if (event.target.classList.contains("productoAgregar")) {
                    aniadirAlCarrito((obtenerProducto(event.target.id, productosFiltrados)))
                    subirAlLS("carrito", carrito)
                    Toastify({
                        text: `${obtenerProducto(event.target.id, productosFiltrados).titulo} ha sido añadido al carrito de compras`,
                        duration: 2200,
                        destination: "https://github.com/apvarun/toastify-js",
                        newWindow: true,
                        close: true,
                        gravity: "bottom",
                        position: "right",
                        stopOnFocus: true,
                        style: {
                          background: "linear-gradient(to right, #f42b03ff, #ec7505ff)",
                        },
                        onClick: function(){}
                      }).showToast();  
                }
            }
        })
        .catch((error) => {
            console.error("Error al obtener los datos:", error);
        });
};
llamadoArrayOferta("../js/productos.json", nodosProductosOferta, containerTarjetasOferta);