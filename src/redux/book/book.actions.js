import BookActionTypes from './book.types';
import axios from 'axios';

const REQUEST_URL = "http://localhost:5000/api/books";

export const setBooksByGenre = (booksByGenre) => ({
    type: BookActionTypes.SET_BOOKS_BY_GENRES,
    payload: booksByGenre,
});

export const loanBooksFetch = (books) => {
    return async dispatch => {
        try {
            const bookIds = books.map(book => book._id);
            await axios.post(`${REQUEST_URL}/new-loan`, { bookIds });
            dispatch(loanBooks(books));
        } catch (err) {
            throw new Error(err.message);
        }
    }
}

export const loanBooks = (bookIds) => ({
    type: BookActionTypes.LOAN_BOOKS,
    payload: bookIds
});
