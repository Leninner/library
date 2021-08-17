const len = (button) => {
    button.addEventListener("click", displayForm);
};

const displayForm = () => {
    const formulario = document.querySelector(".form");
    if (!formulario.innerHTML) {
        formulario.innerHTML = `Lenin`;
    } else {
        formulario.innerHTML = ``;
    }
};

export default len;
