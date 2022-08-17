const CHECKING = 'book-store-react/categories.js/CHECKING';

const categoriesList = [];

export default function catReducer(state = categoriesList, action) {
  switch (action.type) {
    case CHECKING:
      return [action.text];
    default:
      return state;
  }
}

export function CategorieFunction() {
  return {
    type: CHECKING,
    text: 'Under maintain',
  };
}
