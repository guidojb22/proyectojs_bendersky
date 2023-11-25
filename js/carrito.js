let productosCarrito = document.querySelector("#productosCarrito");

let total = document.querySelector("#totalCompra");

function cargarProductos() {
    productosCarrito.innerHTML = ""; 

    carrito.forEach(producto => {
        const div = document.createElement("div");
        div.innerHTML = `<article class="producto">
            <img class="productoCarritoImagen" src=${producto.imagen} alt="${producto.titulo}">
            <div class="productoCarritoDetalles">
                <h3 class="productoCarritoTitulo">${producto.titulo}</h3>
                <p class="productoCarritoPrecio">Precio: $${producto.precio}</p>
                <button class="productoBorrar" id="del-${producto.id}"><i class="bi bi-trash3-fill productoBorrar" id="del-${producto.id}"></i> Eliminar</button>
            </div>
        </article>`

        productosCarrito.append(div);

        const sumaPrecios = carrito.reduce((acc, producto) => acc + producto.precio, 0);
        total.innerHTML = `Total de la compra: $${sumaPrecios}`
        
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
        const sumaPrecios = carrito.reduce((acc, producto) => acc + producto.precio, 0);
        total.innerHTML = `Tu carrito está vacío`;
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

        total.innerHTML = `Muchas gracias por su compra`

        actualizarInterfaz();

        Toastify({
            text: `COMPRA EXITOSA. MUCHAS GRACIAS`,
            duration: 4000,
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
