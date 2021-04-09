/* eslint-disable no-undef */
import { ip, port } from '../../parameters';

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
  const url = `http://${ip}:${port}/books`;
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
