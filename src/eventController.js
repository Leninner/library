import { Book } from './library.js'; // Constructor

const len = (button) => {
  button.addEventListener('click', displayForm);
};

const displayForm = () => {
  const formulario = document.querySelector('.form');
  if (!formulario.classList.contains('active')) {
    formulario.classList.add('active');
    const addBookButton = document.querySelector('.addBook');
    addBookButton.addEventListener('click', () => {
      formulario.classList.remove('active');
      const title = document.querySelector('#title'),
        autor = document.querySelector('#autor'),
        pages = document.querySelector('#pages'),
        year = document.querySelector('#year');

      const book = new Book(title.value, autor.value, pages.value, year.value, true);
      book.setInfo();
      book = '';
    });
  } else {
    formulario.classList.remove('active');
  }
};

export default len;
