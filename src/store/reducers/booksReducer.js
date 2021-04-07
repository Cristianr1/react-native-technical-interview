const initialState = {
  isFetching: false,
  didInvalidate: false,
  booksData: null,
  errMessage: null,
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_BOOKS':
      return { ...state, isFetching: true };
    case 'RECEIVE_BOOKS':
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        booksData: action.payload,
      };
    case 'INVALIDATE_BOOKS':
      return {
        ...state,
        isFetching: false,
        didInvalidate: true,
        errMessage: action.payload,
      };
    default:
      return state;
  }
};

export default booksReducer;
