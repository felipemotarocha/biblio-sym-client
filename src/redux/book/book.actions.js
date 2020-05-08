import BookActionTypes from "./book.types";
import axios from "axios";

const REQUEST_URL = "http://localhost:5000/api/books";

export const fetchBookByIdStart = (id) => ({
	type: BookActionTypes.FETCH_BOOK_BY_ID_START,
	payload: id,
});

export const fetchBooksByGenresStart = () => ({
	type: BookActionTypes.FETCH_BOOKS_BY_GENRES_START,
});

export const fetchBooksByGenresSuccess = (books) => ({
	type: BookActionTypes.FETCH_BOOKS_BY_GENRES_SUCCESS,
	payload: books
});

export const fetchBooksByGenresFailure = (error) => ({
	type: BookActionTypes.FETCH_BOOKS_BY_GENRES_FAILURE,
	payload: error
});

export const loanBooksFetch = (books) => {
	return async (dispatch) => {
		try {
			const bookIds = books.map((book) => book._id);
			await axios.post(`${REQUEST_URL}/new-loan`, { bookIds });
			dispatch(loanBooks(books));
		} catch (err) {
			throw new Error(err.message);
		}
	};
};

export const loanBooks = (bookIds) => ({
	type: BookActionTypes.LOAN_BOOKS,
	payload: bookIds,
});
