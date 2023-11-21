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

let productos = [];

const nodosProductos = (data, container) => {
    const nodos = data.reduce((acc, producto) => {
        return acc + `
        <article class="producto">
            <img class="productoImagen" src=${producto.imagen} alt="${producto.titulo}">
            <div class="productoDetalles">
                <h3 class="productoTitulo">${producto.titulo}</h3>
                <p class="productoPrecio">Precio: $${producto.precio}</p>
                <button class="productoAgregar" id="${producto.id}">Agregar al carrito</button>
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
        productos = data;
        generarNodos(data, container);
    })
    .catch(error => {
        console.error("Error al obtener los datos:", error);
    });
};

llamadoArray("../js/productos.json", nodosProductos, containerTarjetas);

document.querySelector("#az").addEventListener("click", function () {
    const productosOrdenados = productos.sort((a, b) => a.titulo.localeCompare(b.titulo));
    nodosProductos(productosOrdenados, containerTarjetas);
});

document.querySelector("#za").addEventListener("click", function () {
    const productosOrdenados = productos.sort((a, b) => b.titulo.localeCompare(a.titulo));
    nodosProductos(productosOrdenados, containerTarjetas);
});

// document.body.onclick = ( event ) => {   
//     if (event.target.classList.contains("productoAgregar")) {    
//         console.log(products)
//     }
// }

// FILTRO BUSQUEDA

const inputBusqueda = document.querySelector("#input-busqueda");

document.querySelector("#form-busqueda").onsubmit = event => {
    event.preventDefault();
    const productosBusqueda = productos.filter(producto =>
        producto.categoria.toLowerCase().includes(inputBusqueda.value.toLowerCase())
    );
    nodosProductos(productosBusqueda, containerTarjetas);
};