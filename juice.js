let myLibrary = [
    "De Cero a Uno",
    "La Gallina Degollada",
    "Padre Rico, Padre Pobre",
    "Biblia del Nuevo Mundo",
    "Véndele a la Mente, no a la Gente",
    "Alimento",
    "Hábitos Atómicos",
    "Tiny Habits",
    "Platzi",
];

const tabla = document.querySelector(".table");

let nuevoLibro = document.querySelector("#newBook"),
    popup = document.querySelector(".popup"),
    overlay = document.querySelector(".overlay"),
    cerrarPopup = document.querySelector(".cerrarPopup"),
    añadirLibro = document.querySelector(".btn-añadir"),
    titulo = document.querySelector("#title"),
    autoria = document.querySelector("#author"),
    publicacion = document.querySelector("#year"),
    cantidadPages = document.querySelector("#pages"),
    estadoCheck = document.querySelector("#check"),
    cantidadDeLibros = document.querySelector("#cantidadDeLibros");

//Botón para mostrar el formulario para añadir un nuevo libro
nuevoLibro.onclick = () => {
    overlay.classList.add("active");
    popup.classList.add("active");
};

//Botón para confirmar los cambios y añadir un nuevo libro
añadirLibro.addEventListener("click", () => {
    overlay.classList.remove("active");

    let newLibro = new Book(
        titulo.value, //title
        autoria.value, //autor
        cantidadPages.value, //páginas
        publicacion.value, //año
        estadoCheck.checked
    );

    const title = document.getElementById("title");

    title.addEventListener("input", function () {
        if (title.validity.typeMismatch) {
            title.setCustomValidity("I am expecting an e-mail address!");
        } else {
            title.setCustomValidity("");
        }
    });

    addBookToLibrary(newLibro.title);

    mostrarLibros(newLibro.title.split(), newLibro.autor, newLibro.pages, newLibro.year, newLibro.estado);
});

cerrarPopup.addEventListener("click", () => {
    overlay.classList.remove("active");
    popup.classList.remove("active");
});

//Función Constructor

function Book(title, autor, pages, year, estado) {
    this.title = title;
    this.autor = autor;
    this.pages = pages;
    this.year = year;
    this.estado = estado;
}

//Función para añadir libros en la librería
function addBookToLibrary(libro) {
    myLibrary.push(libro);
}

//Función para mostrar los libros dentro de una tabla
function mostrarLibros(arregloLibros = myLibrary, author = "Desconocido", pages = 456, year = 1969, estado = false) {
    cantidadDeLibros.textContent = myLibrary.length;
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

        //Para comprobar si el libro está leído o no
        if (estado) {
            lectura.style.backgroundColor = "black";
            lectura.style.color = "white";
            lectura.value = "Leído";
        } else {
            lectura.style.backgroundColor = "white";
            lectura.style.color = "black";
            lectura.value = "No Leído";
        }

        lectura.addEventListener("click", () => {
            if (lectura.style.backgroundColor == "black") {
                estado = false;
                lectura.style.backgroundColor = "white";
                lectura.style.color = "black";
                lectura.value = "No Leído";
            } else {
                estado = true;
                lectura.style.backgroundColor = "black";
                lectura.style.color = "white";
                lectura.value = "Leído";
            }
        });

        cerrar.addEventListener("click", () => {
            cantidadDeLibros.textContent = myLibrary.length - 1;
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
