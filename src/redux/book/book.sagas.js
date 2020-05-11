import { takeLatest, all, put, call } from "redux-saga/effects";
import axios from "axios";

import BookActionTypes from "./book.types";
import {
    fetchBooksByGenresSuccess,
    fetchBooksByGenresFailure,
    bookLoanSuccess,
    bookLoanFailure,
} from "./book.actions";

// Asynchronous Code
export function* fetchBooksByGenres() {
    try {
        const REQUEST_URL = "http://localhost:5000/api/genres";
        const { data } = yield axios.get(`${REQUEST_URL}/books`);
        yield put(fetchBooksByGenresSuccess(data));
    } catch (error) {
        yield put(fetchBooksByGenresFailure(error));
    }
}

export function* loanBook({ payload: { books } }) {
    try {
        console.log(books);
        const REQUEST_URL = "http://localhost:5000/api/books";
        const authToken = localStorage.getItem("authToken");
        const { data } = yield axios.post(
            `${REQUEST_URL}/new-loan`,
            {
                books,
            },
            {
                headers: {
                    Authorization: `Bearer ${authToken}`,
                },
            }
        );
        yield put(bookLoanSuccess(data));
    } catch (error) {
        yield put(bookLoanFailure(error));
    }
}

// Listeners
export function* onFetchBooksByGenresStart() {
    yield takeLatest(
        BookActionTypes.FETCH_BOOKS_BY_GENRES_START,
        fetchBooksByGenres
    );
}

export function* onBookLoanStart() {
    yield takeLatest(BookActionTypes.BOOK_LOAN_START, loanBook);
}

export function* bookSagas() {
    yield all([call(onFetchBooksByGenresStart), call(onBookLoanStart)]);
}
