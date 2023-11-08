// ARRAY DE OBJETOS

const productos = [
    {
        id: "01",
        titulo: "Tenedor 1",
        imagen: "../img/tenedor1.jpg",
        imagenOferta: "./img/tenedor1.jpg",
        categoria: "Tenedor",
        precio: 1000
    },
    {
        id: "02",
        titulo: "Tenedor 2",
        imagen: "../img/tenedor2.jpg",
        imagenOferta: "./img/tenedor2.jpg",
        categoria: "Tenedor",
        precio: 1000
    },
    {
        id: "03",
        titulo: "Tenedor 3",
        imagen: "../img/tenedor3.png",
        imagenOferta: "./img/tenedor3.png",
        categoria: "Tenedor",
        precio: 950
    },
    {
        id: "04",
        titulo: "Tenedor 4",
        imagen: "../img/tenedor4.jpg",
        imagenOferta: "./img/tenedor4.jpg",
        categoria: "Tenedor",
        precio: 1000
    },
    {
        id: "05",
        titulo: "Cuchillo 1",
        imagen: "../img/cuchillo1.jpg",
        imagenOferta: "./img/cuchillo1.jpg",
        categoria: "Cuchillo",
        precio: 900
    },
    {
        id: "06",
        titulo: "Cuchillo 2",
        imagen: "../img/cuchillo2.png",
        imagenOferta: "./img/cuchillo2.png",
        categoria: "Cuchillo",
        precio: 900
    },
    {
        id: "07",
        titulo: "Cuchillo 3",
        imagen: "../img/cuchillo3.jpg",
        imagenOferta: "./img/cuchillo3.jpg",
        categoria: "Cuchillo",
        precio: 850
    },
    {
        id: "08",
        titulo: "Cuchillo 4",
        imagen: "../img/cuchillo4.jpeg",
        imagenOferta: "./img/cuchillo4.jpeg",
        categoria: "Cuchillo",
        precio: 900
    },
    {
        id: "09",
        titulo: "Cuchara 1",
        imagen: "../img/cuchara1.jpg",
        imagenOferta: "./img/cuchara1.jpg",
        categoria: "Cuchara",
        precio: 800
    },
    {
        id: "10",
        titulo: "Cuchara 2",
        imagen: "../img/cuchara2.png",
        imagenOferta: "./img/cuchara2.gng",
        categoria: "Cuchara",
        precio: 800
    },
    {
        id: "11",
        titulo: "Cuchara 3",
        imagen: "../img/cuchara3.jpg",
        imagenOferta: "./img/cuchara3.jpg",
        categoria: "Cuchara",
        precio: 750
    },
    {
        id: "12",
        titulo: "Cuchara 4",
        imagen: "../img/cuchara4.webp",
        imagenOferta: "./img/cuchara4.webp",
        categoria: "Cuchara",
        precio: 800
    },
    {
        id: "13",
        titulo: "Cucharita 1",
        imagen: "../img/cucharita1.png",
        imagenOferta: "./img/cucharita1.png",
        categoria: "Cucharita",
        precio: 500
    },
    {
        id: "14",
        titulo: "Cucharita 2",
        imagen: "../img/cucharita2.jpg",
        imagenOferta: "./img/cucharita2.jpg",
        categoria: "Cucharita",
        precio: 500
    },
    {
        id: "15",
        titulo: "Cucharita 3",
        imagen: "../img/cucharita3.png",
        imagenOferta: "./img/cucharita3.png",
        categoria: "Cucharita",
        precio: 450
    },
    {
        id: "16",
        titulo: "Cucharita 4",
        imagen: "../img/cucharita4.jpg",
        imagenOferta: "./img/cucharita4.jpg",
        categoria: "Cucharita",
        precio: 500
    },
]

// DARKMODE

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

// TARJETAS PRODUCTOS

const tarjetasProductos = productos.reduce(( acc, productos ) => {
    return acc + `
    <article class="producto">
        <img class="productoImagen" src=${productos.imagen} alt="${productos.titulo}">
        <div class="productoDetalles">
            <h3 class="productoTitulo">${productos.titulo}</h3>
            <p class="productoPrecio">Precio: $${productos.precio}</p>
            <button class="productoAgregar">Agregar al carrito</button>
        </div>
    </article>
    ` 
}, "")

const conteiner = document.getElementById("productosDOM");

productosDOM.innerHTML = tarjetasProductos