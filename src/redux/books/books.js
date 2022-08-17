const ADDING = 'book-store-react/books/ADDING';
const REMOVING = 'book-store-react/books/REMOVING';

const bookList = [
  {
    title: 'Wuthering Heights',
    author: 'Emily Bronte',
    id: 0,
  },
  {
    title: 'Ethan Frome',
    author: 'edith Wharton',
    id: 1,
  },
];

export default function bookReducer(state = bookList, action) {
  switch (action.type) {
    case ADDING:
      return [...state, {
        title: action.title,
        author: action.author,
        id: action.id,
      }];
    case REMOVING:
      return state.filter((book) => (
        book.id !== action.id
      ));
    default:
      return state;
  }
}

export function addBook(bookTitle, bookAuthor, bookId) {
  return {
    type: ADDING,
    title: bookTitle,
    author: bookAuthor,
    id: bookId,
  };
}

export function removeBook(bookId) {
  return {
    type: REMOVING,
    id: bookId,
  };
}
