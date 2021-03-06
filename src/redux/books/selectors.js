import { createSelector } from 'reselect';

const getIsLoggedIn = (state) => state.authorization.isLoggedIn;
const getBook = (state) => state.bookDetails;
const getTokenSelector = (state) => state.authorization.token;
const getUserInfo = (state) => state.authorization;
const getBooksSelector = (state) => state.books;
const getFilter = (state) => state.filter;

const getFiltredBooks = createSelector(
  [getBooksSelector, getFilter],
  (books, filter) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    books.filter(
      (book) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        book.title.toLowerCase().includes(filter.toLowerCase()),
      // eslint-disable-next-line function-paren-newline
    ),
);

export default {
  getTokenSelector,
  getBooksSelector,
  getFiltredBooks,
  getFilter,
  getIsLoggedIn,
  getBook,
  getUserInfo,
};
