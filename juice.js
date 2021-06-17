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

//Botón para mostrar los libros en la página
let nuevoLibro = document.querySelector("#newBook"),
    popup = document.querySelector(".popup"),
    overlay = document.querySelector(".overlay"),
    cerrarPopup = document.querySelector(".cerrarPopup"),
    añadirLibro = document.querySelector(".btn-añadir"),
    titulo = document.querySelector("#title"),
    autoria = document.querySelector("#author"),
    publicacion = document.querySelector("#year"),
    cantidadPages = document.querySelector("#pages");

nuevoLibro.addEventListener("click", () => {
    overlay.classList.add("active");
    popup.classList.add("active");
});

añadirLibro.addEventListener("click", () => {
    overlay.classList.remove("active");
    let newLibro = new Book(
        titulo.value, //title
        autoria.value, //autor
        cantidadPages.value, //páginas
        publicacion.value //año
    );
    addBookToLibrary(newLibro.title);
    mostrarLibros(
        newLibro.title.split(),
        newLibro.autor,
        newLibro.pages,
        newLibro.year
    );
});

cerrarPopup.addEventListener("click", () => {
    overlay.classList.remove("active");
    popup.classList.remove("active");
});

//Función Constructor

function Book(title, autor, pages, year) {
    this.title = title;
    this.autor = autor;
    this.pages = pages;
    this.year = year;
}

//Función para añadir libros en la librería
function addBookToLibrary(libro) {
    myLibrary.push(libro);
}

//Función para mostrar los libros dentro de una tabla
function mostrarLibros(
    arregloLibros = myLibrary,
    author = "Lenin",
    pages = 123,
    year = 1785
) {
    //Valor por defecto con la libreria
    arregloLibros.forEach((libro) => {
        let div = document.createElement("div"),
            autor = document.createElement("p"),
            paginas = document.createElement("p"),
            año = document.createElement("p"),
            lectura = document.createElement("input"),
            cerrar = document.createElement("input");

        autor.textContent = "Autor: " + author;
        paginas.textContent = "Páginas: " + pages;
        año.textContent = "Año: " + year;
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

        autor.setAttribute("class", "infoBook");
        paginas.setAttribute("class", "infoBook");
        año.setAttribute("class", "infoBook");
        lectura.setAttribute("class", "eliminarLibro");
        cerrar.setAttribute("class", "eliminarLibro");
        div.setAttribute("class", "libros");

        div.textContent = libro; //Para agregar contenido a un párrafo dentro de Javascript
        div.appendChild(autor);
        div.appendChild(paginas);
        div.appendChild(año);
        div.appendChild(lectura);
        div.appendChild(cerrar);

        tabla.appendChild(div);
    });
}

mostrarLibros();
