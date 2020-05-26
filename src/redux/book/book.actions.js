import BookActionTypes from "./book.types";

export const fetchBooksByGenresStart = () => ({
	type: BookActionTypes.FETCH_BOOKS_BY_GENRES_START,
});

export const fetchBooksByGenresSuccess = (books) => ({
	type: BookActionTypes.FETCH_BOOKS_BY_GENRES_SUCCESS,
	payload: books,
});

export const fetchBooksByGenresFailure = (error) => ({
	type: BookActionTypes.FETCH_BOOKS_BY_GENRES_FAILURE,
	error: error,
});

export const fetchAllBooksStart = () => ({
	type: BookActionTypes.FETCH_ALL_BOOK_START,
});

export const fetchAllBooksSuccess = (books) => ({
	type: BookActionTypes.FETCH_ALL_BOOK_SUCCESS,
	payload: books,
});

export const fetchAllBooksFailure = (error) => ({
	type: BookActionTypes.FETCH_ALL_BOOK_FAILURE,
	error: error,
});

export const bookLoanStart = (books) => ({
	type: BookActionTypes.BOOK_LOAN_START,
	payload: books,
});

export const bookLoanSuccess = (loanedBooks) => ({
	type: BookActionTypes.BOOK_LOAN_SUCCESS,
	payload: loanedBooks,
});

export const bookLoanFailure = (error) => ({
	type: BookActionTypes.BOOK_LOAN_FAILURE,
	eror: error,
});

export const addNewBookStart = (book) => ({
	type: BookActionTypes.ADD_NEW_BOOK_START,
	payload: book,
});

export const addNewBookSuccess = () => ({
	type: BookActionTypes.ADD_NEW_BOOK_SUCCESS,
	alertMessage: "The book was succesfully added!",
});

export const addNewBookFailure = (error) => ({
	type: BookActionTypes.ADD_NEW_BOOK_FAILURE,
	error: error,
});

export const addExistentBookStart = (book) => ({
	type: BookActionTypes.ADD_EXISTENT_BOOK_START,
	payload: book,
});

export const addExistentBookSuccess = () => ({
	type: BookActionTypes.ADD_EXISTENT_BOOK_SUCCESS,
	alertMessage: "The book was succesfully added!",
});

export const addExistentBookFailure = (error) => ({
	type: BookActionTypes.ADD_EXISTENT_BOOK_FAILURE,
	error: error,
});

export const updateBooks = (books) => ({
	type: BookActionTypes.UPDATE_BOOKS,
	payload: books,
});
