const len = (button) => {
    button.addEventListener("click", displayForm);
};

const displayForm = () => {
    const formulario = document.querySelector(".form");
    if (!formulario.innerHTML) {
        formulario.classList.add("active");
        formulario.innerHTML = `<h2>Book</h2>
        <label for="title">Title: <input type="text" id="title" placeholder="Title" /></label>
        <label for="autor">Author: <input type="text" id="autor" placeholder="Author" /></label>
        <label for="pages"># Pages: <input type="number" id="pages" placeholder="Number of pages" /></label>
        <label for="year">Year: <input type="date" id="year" placeholder="Year of Publication" /></label>`;
    } else {
        formulario.classList.remove("active");
        formulario.innerHTML = ``;
    }
};

export default len;
