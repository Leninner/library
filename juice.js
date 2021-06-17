let myLibrary = [
    "De Cero a Uno",
    "La Gallina Degollada",
    "Padre Rico, Padre Pobre",
    "Biblia del Nuevo Mundo",
    "Véndele a la Mente, no a la Gente",
    "Alimento",
    "Hábitos Atómicos",
    "Tiny Habits",
];

const tabla = document.querySelector(".table");
// let libros = addBookToLibrary(prompt("¿Cuál es tu libro favorito?"));

//Botón para mostrar los libros en la página
let nuevoLibro = document.querySelector("#newBook"),
    popup = document.querySelector(".popup"),
    overlay = document.querySelector(".overlay"),
    cerrarPopup = document.querySelector(".cerrarPopup"),
    añadirLibro = document.querySelector(".btn-añadir"),
    titulo = document.querySelector("#title");

nuevoLibro.addEventListener("click", () => {
    overlay.classList.add("active");
    popup.classList.add("active");
});

añadirLibro.addEventListener("click", () => {
    overlay.classList.remove("active");
    addBookToLibrary(titulo.value);
    mostrarLibros(titulo.value.split());
});

cerrarPopup.addEventListener("click", () => {
    overlay.classList.remove("active");
    popup.classList.remove("active");
});

//Función Constructor

function Book(title, autor, pages, year) {
    this.name = title;
    this.autor = autor;
    this.pages = pages;
    this.year = year;
}

//Función para añadir libros en la librería
function addBookToLibrary(libro) {
    myLibrary.push(libro);
}

//Función para mostrar los libros dentro de una tabla
function mostrarLibros(arregloLibros = myLibrary) {
    //Valor por defecto con la libreria
    arregloLibros.forEach((libro) => {
        let div = document.createElement("h4");
        let lectura = document.createElement("input");
        let cerrar = document.createElement("input");
        lectura.type = "button";
        lectura.value = "No Leído";
        cerrar.type = "button";
        cerrar.value = "Eliminar";
        lectura.addEventListener("click", () => {
            if (lectura.style.backgroundColor == "black") {
                lectura.style.backgroundColor = "white";
                lectura.style.color = "black";
                lectura.value = "No Leído";
            } else {
                lectura.style.backgroundColor = "black";
                lectura.style.color = "white";
                lectura.value = "Leído";
            }
        });
        cerrar.addEventListener("click", () => {
            tabla.removeChild(div);
            let i = arregloLibros.indexOf(libro);
            if (i !== -1) {
                arregloLibros.splice(i, 1);
            }
        });
        lectura.setAttribute("class", "eliminarLibro");
        cerrar.setAttribute("class", "eliminarLibro");
        div.setAttribute("class", "libros");
        div.textContent = libro; //Para agregar contenido a un párrafo dentro de Javascript
        div.appendChild(lectura);
        div.appendChild(cerrar);
        tabla.appendChild(div);
    });
}

mostrarLibros();
