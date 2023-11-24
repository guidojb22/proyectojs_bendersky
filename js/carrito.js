let productosCarrito = document.querySelector("#productosCarrito");

function cargarProductos() {
    carrito.forEach(producto => {
        const div = document.createElement("div");
        div.innerHTML = `<article class="producto">
            <img class="productoImagen" src=${producto.imagen} alt="${producto.titulo}">
            <div class="productoDetalles">
                <h3 class="productoTitulo">${producto.titulo}</h3>
                <p class="productoPrecio">Precio: $${producto.precio}</p>
                <button class="productoBorrar" id="del-${producto.id}"><i class="bi bi-trash3-fill productoBorrar" id="del-${producto.id}"></i> Eliminar del carrito</button>
            </div>
        </article>`

        productosCarrito.append(div);
    });
}

function actualizarInterfaz() {
    productosCarrito.innerHTML = "";

    cargarProductos();
}

document.body.onclick = async (event) => {
    if (event.target.classList.contains("vaciarCarritoBoton")) {
        vaciarElCarrito(carrito.length);
        subirAlLS("carrito", carrito);

        actualizarInterfaz();

        Toastify({
            text: `Ha vaciado el carrito`,
            duration: 2200,
            newWindow: true,
            close: false,
            stopOnFocus: true,
            style: {
              background: "#ec7505ff",
            },
            onClick: function(){}
        }).showToast();
    }

    if (event.target.classList.contains("completarCompraBoton")) {
        vaciarElCarrito(carrito.length);
        subirAlLS("carrito", carrito);

        actualizarInterfaz();

        Toastify({
            text: `COMPRA EXITOSA. MUCHAS GRACIAS`,
            duration: 2200,
            newWindow: true,
            close: false,
            stopOnFocus: true,
            style: {
              background: "#ec7505ff"
            },
            onClick: function(){}
        }).showToast();
    }

    if (event.target.classList.contains("productoBorrar")) {
        const productoId = event.target.id.split("-")[1];
        
        const indiceProducto = carrito.findIndex(producto => producto.id === productoId);

        if (indiceProducto !== -1) {
            carrito.splice(indiceProducto, 1);
        
            subirAlLS("carrito", carrito);

            actualizarInterfaz();

            Toastify({
                text: `El producto ha sido eliminado del carrito`,
                duration: 2200,
                newWindow: true,
                close: false,
                stopOnFocus: true,
                style: {
                background: "#ec7505ff",
                },
                onClick: function(){}
            }).showToast();
    }
};}

cargarProductos();