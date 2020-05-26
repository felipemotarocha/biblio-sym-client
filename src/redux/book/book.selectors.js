import { createSelector } from "reselect";

const selectBook = (state) => state.book;

export const selectBooksByGenre = createSelector(
	[selectBook],
	(book) => book.booksByGenres
);

export const selectAreBooksFetching = createSelector(
	[selectBook],
	(book) => book.isFetching
);

export const selectAllBooks = createSelector(
	[selectBook],
	(book) => book.allBooks
);
