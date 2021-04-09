const initialState = false;

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return true;
    case 'LOG_OUT':
      return false;
    default:
      return state;
  }
};

export default booksReducer;
