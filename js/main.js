// DARKMODE CON LOCALSTORAGE

const botonColorMode = document.querySelector("#color-mode");
const body = document.body;

let darkMode = localStorage.getItem("dark-mode");

function activarDarkMode() {
    body.classList.add("dark-mode");
    localStorage.setItem("dark-mode", "activado");
}

function desactivarDarkMode() {
    body.classList.remove("dark-mode");
    localStorage.setItem("dark-mode", "desactivado");
}

if (darkMode === "activado") {
    activarDarkMode();
} else {
    desactivarDarkMode();
}

botonColorMode.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode")
    
    if (darkMode === "activado") {
        desactivarDarkMode();
    } else {
        activarDarkMode();
    }

    if (body.classList.contains("dark-mode")) {
        botonColorMode.innerText = "Cambiar a Light Mode";
    } else {
        botonColorMode.innerText = "Cambiar a Dark Mode";
    }
})

// TARJETAS PRODUCTOS CON FETCH: JSON

const containerTarjetas = document.querySelector("#productosDOM")

// let carrito = JSON.parse(localStorage.getItem("carrito")) || []

// let products;

// const subirAlLS = ( clave, data ) => localStorage.setItem( clave, JSON.stringify(data))
// const obtenerDelLs = clave => JSON.parse(localStorage.getItem(clave))
// const aniadirAlCarrito = ( data ) => carrito.push(data)
// const obtenerProducto = (data) => {
//     return data.find( element => element.id === Number(obtenerProducto))
// }


const nodosProductos = (data, container) => {
    const nodos = data.reduce((acc, productos) => {
        return acc + `
        <article class="producto">
            <img class="productoImagen" src=${productos.imagen} alt="${productos.titulo}">
            <div class="productoDetalles">
                <h3 class="productoTitulo">${productos.titulo}</h3>
                <p class="productoPrecio">Precio: $${productos.precio}</p>
                <button class="productoAgregar" id= "${productos.id}">Agregar al carrito</button>
            </div>
        </article>
        ` 
    }, "")

    container.innerHTML = nodos
}

const llamadoArray = (direccion, generarNodos, container) => {
    fetch(direccion)
    .then(res => res.json())
    .then(data => {
        generarNodos(data, container)     
        products = data
    })
}

llamadoArray("../js/productos.json", nodosProductos, containerTarjetas)

// document.body.onclick = ( event ) => {   
//     if (event.target.classList.contains("productoAgregar")) {    
//         aniadirAlCarrito(obtenerProducto(event.target.id, products))    
//         subirAlLS("carrito", carrito)
//         Toastify({
//             text: `El producto ${obtenerProducto(event.target.id, products).titulo} ha sido añadido al carrito.`,
//             duration: 3000,
//             destination: "https://github.com/apvarun/toastify-js",
//             newWindow: true,
//             close: true,
//             gravity: "top", // `top` or `bottom`
//             position: "left", // `left`, `center` or `right`
//             stopOnFocus: true, // Prevents dismissing of toast on hover
//             style: {
//               background: "linear-gradient(to right, #00b09b, #96c93d)",
//             },
//             onClick: function(){} // Callback after click
//           }).showToast();       
//     }
// }

// console.log(products)