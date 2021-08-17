// Clase para crear libros

class Book {
    constructor(title, autor, pages, year, estado) {
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
            console.log(books);
        } else {
            alert("Ese libro ya existe");
        }
    }

    setInfo() {
        const carousel__container = document.querySelector(".carousel__container");
        const carousel__item = document.createElement("div");

        carousel__item.classList.add("carousel-item");

        carousel__item.innerHTML = `
            <img class="carousel-item__img"
            src="https://images.pexels.com/photos/4629625/pexels-photo-4629625.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="${this.title}"
            />
            <div class="carousel-item__details">
                <p class="carousel-item__details--title">${this.title} - ${this.autor}</p>
                <p class="carousel-item__details--subtitle">${this.year} ${this.pages}</p>
                <div>
                    <img src="https://img.icons8.com/material/48/26e07f/realtime-protection.png" id="lenin" />
                    <img src="https://img.icons8.com/material/48/fa314a/delete--v1.png" id="mathias" />
                </div>
            </div>`;

        carousel__container.appendChild(carousel__item);
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

export { books, Book };
