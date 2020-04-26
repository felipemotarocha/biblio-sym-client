import { createSelector } from 'reselect'

const selectBook = state => state.book;

export const selectBooksByGenre = createSelector(
    [selectBook],
    book => book.booksByGenre
);