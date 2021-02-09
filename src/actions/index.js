import { CREATE_BOOK, REMOVE_BOOK } from '../constants/index';

let bookID = 3;

const createBook = book => ({
  type: CREATE_BOOK,
  payload: { ...book, id: ++bookID },
});

const removeBook = book => ({
  type: REMOVE_BOOK,
  payload: { id: book.id },
});

export { createBook, removeBook };
