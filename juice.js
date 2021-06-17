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
    cerrarPopup = document.querySelector(".btn-cerrar-popup");

nuevoLibro.addEventListener("click", () => {
    overlay.classList.add("active");
    popup.classList.add("active");
});

cerrarPopup.addEventListener("click", () => {
    overlay.classList.remove("active");
    popup.classList.remove("active");
});

function Book() {
    // the constructor...
}

//Función para añadir libros en la librería
function addBookToLibrary(libro) {
    myLibrary.push(libro);
}

//Función para mostrar los libros dentro de una tabla
function mostrarLibros(arregloLibros) {
    arregloLibros.forEach((libro) => {
        let div = document.createElement("h4");
        let lectura = document.createElement("input");
        let cerrar = document.createElement("input");
        lectura.type = "submit";
        lectura.value = "No Leído";
        cerrar.type = "submit";
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
            console.log(arregloLibros);
        });
        lectura.setAttribute("class", "eliminarLibro");
        cerrar.setAttribute("class", "eliminarLibro");
        div.setAttribute("class", "libros");
        div.textContent = libro; //Para agregar contenido a un párrafo dentro de Javascript
        div.appendChild(lectura);
        div.appendChild(cerrar);
        tabla.appendChild(div);
    });
    console.log(arregloLibros);
}

mostrarLibros(myLibrary);
