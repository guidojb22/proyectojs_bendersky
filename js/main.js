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

// TARJETAS PRODUCTOS CON FETCH: JSON Y ORDEN ALFABEETICO CRECIENTE Y DECRECIENTE

const containerTarjetas = document.querySelector("#productosDOM");
let carrito = JSON.parse(localStorage.getItem("carrito")) || []
let productos;

const subirAlLS =(clave, data) => localStorage.setItem(clave, JSON.stringify(data))
const obtenerDelLS = clave => JSON.parse(localStorage.getItem(clave))
const aniadirAlCarrito = (data) => carrito.push(data)
const obtenerProducto = (clase, data) => {
    const obtenerId = clase.slice(4)
    return data.find( element => element.id === obtenerId)
}

const nodosProductos = (data, container) => {
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

const llamadoArray = (direccion, generarNodos, container) => {
    fetch(direccion)
    .then(res => res.json())
    .then(data => {
        generarNodos(data, container);
        productos = data;
    })
    .catch(error => {
        console.error("Error al obtener los datos:", error);
    });
};

document.body.onclick = (event) => {
    if (event.target.classList.contains("productoAgregar")) {
        aniadirAlCarrito((obtenerProducto(event.target.id, productos)))
        subirAlLS("carrito", carrito)
        Toastify({
            text: `${obtenerProducto(event.target.id, productos).titulo} ha sido añadido al carrito de compras`,
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

llamadoArray("../js/productos.json", nodosProductos, containerTarjetas);

document.querySelector("#az").addEventListener("click", function () {
    const productosOrdenados = productos.sort((a, b) => a.titulo.localeCompare(b.titulo));
    nodosProductos(productosOrdenados, containerTarjetas);
});

document.querySelector("#za").addEventListener("click", function () {
    const productosOrdenados = productos.sort((a, b) => b.titulo.localeCompare(a.titulo));
    nodosProductos(productosOrdenados, containerTarjetas);
});

// FILTRO BUSQUEDA

const inputBusqueda = document.querySelector("#input-busqueda");

document.querySelector("#form-busqueda").onsubmit = event => {
    event.preventDefault();
    const productosBusqueda = productos.filter(producto =>
        producto.categoria.toLowerCase().includes(inputBusqueda.value.toLowerCase())
    );
    nodosProductos(productosBusqueda, containerTarjetas);
};