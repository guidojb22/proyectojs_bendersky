// let productosCarrito = document.querySelector("#productosCarrito");

// function cargarProductos() {
    // carrito.forEach(producto => {
    //     const div = document.createElement("div");
    //     div.innerHTML = `<article class="producto">
    //         <img class="productoImagen" src=${producto.imagen} alt="${producto.titulo}">
    //         <div class="productoDetalles">
    //             <h3 class="productoTitulo">${producto.titulo}</h3>
    //             <p class="productoPrecio">Precio: $${producto.precio}</p>
    //             <button class="productoBorrar" id="del-${producto.id}"><i class="bi bi-trash3-fill productoBorrar" id="del-${producto.id}"></i> Eliminar del carrito</button>
    //         </div>
    //     </article>`

    //     productosCarrito.append(div);
    // });
// }

// document.body.onclick = (event) => {
// if (event.target.classList.contains("vaciarCarritoBoton")) {
//     vaciarElCarrito(carrito.length)
//     subirAlLS("carrito", carrito)
//     Toastify({
//         text: `Ha vaciado el carrito`,
//         duration: 2200,
//         destination: "https://github.com/apvarun/toastify-js",
//         newWindow: true,
//         close: true,
//         gravity: "bottom",
//         position: "right",
//         stopOnFocus: true,
//         style: {
//           background: "linear-gradient(to right, #f42b03ff, #ec7505ff)",
//         },
//         onClick: function(){}
//       }).showToast();  
// }
// if (event.target.classList.contains("completarCompraBoton")) {
//     vaciarElCarrito(carrito.length)
//     subirAlLS("carrito", carrito)
//     Toastify({
//         text: `Ha finalizado su compra. Muchas gracias`,
//         duration: 2200,
//         destination: "https://github.com/apvarun/toastify-js",
//         newWindow: true,
//         close: true,
//         gravity: "bottom",
//         position: "right",
//         stopOnFocus: true,
//         style: {
//           background: "linear-gradient(to right, #f42b03ff, #ec7505ff)",
//         },
//         onClick: function(){}
//       }).showToast();  
// }
//     if (event.target.classList.contains("productoBorrar")) {
//     borrarDelCarrito(0)
//     subirAlLS("carrito", carrito)
//     Toastify({
//         text: `${obtenerProducto(event.target.id, productos).titulo} ha sido eliminado del carrito`,
//         duration: 2200,
        // destination: "https://github.com/apvarun/toastify-js",
        // newWindow: true,
        // close: true,
        // gravity: "bottom",
        // position: "right",
        // stopOnFocus: true,
        // style: {
        //   background: "linear-gradient(to right, #f42b03ff, #ec7505ff)",
        // },
        // onClick: function(){}
//       }).showToast();  
// }}

// cargarProductos();

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

    if (event.target.classList.contains("completarCompraBoton")) {
        vaciarElCarrito(carrito.length);
        subirAlLS("carrito", carrito);

        actualizarInterfaz();

        Toastify({
            text: `Ha finalizado su compra. Muchas gracias`,
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

    if (event.target.classList.contains("productoBorrar")) {
        borrarDelCarrito(0);
        subirAlLS("carrito", carrito);

        actualizarInterfaz();

        Toastify({
            text: `El producto ha sido eliminado del carrito`,
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
};

cargarProductos();
