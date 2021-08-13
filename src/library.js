// Clase para crear libros

function Book(title, autor, pages, year, estado) {
    this.title = title;
    this.autor = autor;
    this.pages = pages;
    this.year = year;
    this.estado = estado;

    if (!books[title]) {
        books[title] = {
            title: this.title,
            autor: this.autor,
            year: this.year,
            pages: this.pages,
            estado: this.estado,
        };
    } else {
        alert("Ese libro la existe");
    }
}

let books = {
    "La Cabaña del Tío Tom": {
        title: "La Cabaña del Tío Tom",
        autor: "Leninner",
        year: 1784,
        pages: 4850,
        estado: true,
    },
};
