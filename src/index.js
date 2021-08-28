import { Book } from './library.js'; // Constructor
import len from './eventController.js';

let itemBook = new Book('Lenin', 'Leninner', 45, 456, true);
let aitemBook = new Book('Lenfin', 'Leninfffnfer', 45, 456, true);
let aitemBook2 = new Book('Lenfind', 'Leninnfer', 45, 456, true);
let aitemsBook2 = new Book('Mathias', 'Leninnfer', 45, 456, true);

itemBook.setInfo();
aitemBook.setInfo();
aitemBook2.setInfo();
aitemsBook2.setInfo();

const addBookWithForm = document.querySelector('#addBookWithForm');

len(addBookWithForm);
