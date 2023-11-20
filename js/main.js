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
    })
}

llamadoArray("../js/productos.json", nodosProductos, containerTarjetas)

// document.body.onclick = ( event ) => {   
//     if (event.target.classList.contains("productoAgregar")) {    
//         console.log(products)
//     }
// }

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

// SWIPER

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
