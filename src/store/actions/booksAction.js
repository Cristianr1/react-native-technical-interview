/* eslint-disable no-undef */
export const requestBooks = () => ({
  type: 'REQUEST_BOOKS',
});

export const receiveBooks = (data) => ({
  type: 'RECEIVE_BOOKS',
  payload: data,
});

export const invalidateBooks = (message) => ({
  type: 'INVALIDATE_BOOKS',
  payload: message,
});

export const fetchBooks = () => {
  const url = 'http://192.168.0.19:3000/books';
  return async (dispatch) => {
    dispatch(requestBooks());
    try {
      const response = await fetch(url);
      const results = await response.json();
      dispatch(receiveBooks(results));
    } catch (err) {
      dispatch(invalidateBooks(err.message));
    }
  };
};
