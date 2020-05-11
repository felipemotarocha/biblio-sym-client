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
    payload: error,
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
    payload: error,
});
