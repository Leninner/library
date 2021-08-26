const len = (button) => {
  button.addEventListener('click', displayForm);
};

const displayForm = () => {
  const formulario = document.querySelector('.form');
  if (!formulario.classList.contains('active')) {
    formulario.classList.add('active');
  } else {
    formulario.classList.remove('active');
  }
};

export default len;
