import { combineReducers } from 'redux';
import authReducer from './authReducer';
import booksReducer from './booksReducer';
import searchReducer from './searchReducer';

const rootReducer = combineReducers({
  isLoggedIn: authReducer,
  books: booksReducer,
  search: searchReducer,
});

export default rootReducer;
