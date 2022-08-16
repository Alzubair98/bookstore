const CHECKING = 'book-store-react/categories.js/CHECKING';

const defaultState = {
  categoriesList: [],
};

export default function catReducer(state = defaultState, action) {
  switch (action.type) {
    case CHECKING:
      return [action.text];
    default:
      return state;
  }
}

export function addbook() {
  return {
    type: CHECKING,
    text: 'Under maintain',
  };
}
