let productosCarrito = document.querySelector("#productosCarrito");

function cargarProductos() {
    carrito.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
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

const vaciarElCarrito = (data) => carrito.splice(0,data)

document.body.onclick = (event) => {
    if (event.target.classList.contains("vaciarCarritoBoton")) {
        vaciarElCarrito(carrito.length)
        subirAlLS("carrito", carrito)
        Toastify({
            text: `Ha vaciado el carrito`,
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

// const borrarDelCarrito = (data) => carrito.splice(data,1)

// document.body.onclick = (event) => {
//     if (event.target.classList.contains("productoBorrar")) {
//         borrarDelCarrito(0)
//         subirAlLS("carrito", carrito)
//         Toastify({
//             text: `${obtenerProducto(event.target.id, productos).titulo} ha sido eliminado del carrito`,
//             duration: 2200,
//             destination: "https://github.com/apvarun/toastify-js",
//             newWindow: true,
//             close: true,
//             gravity: "bottom",
//             position: "right",
//             stopOnFocus: true,
//             style: {
//               background: "linear-gradient(to right, #f42b03ff, #ec7505ff)",
//             },
//             onClick: function(){}
//           }).showToast();  
//     }
// }

cargarProductos();