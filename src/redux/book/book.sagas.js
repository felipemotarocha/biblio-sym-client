import { takeLatest, all, put, call } from 'redux-saga/effects';
import axios from 'axios'

import BookActionTypes from './book.types'
import { fetchBooksByGenresSuccess, fetchBooksByGenresFailure } from './book.actions';

export function* fetchBooksByGenres() {
    try {
        const REQUEST_URL = "http://localhost:5000/api/genres";
        const { data } = yield axios.get(`${REQUEST_URL}/books`);
        yield put(fetchBooksByGenresSuccess(data));
    } catch (error) {
        yield put(fetchBooksByGenresFailure(error));
    };
};

export function* onFetchBooksByGenresStart() {
    yield takeLatest(BookActionTypes.FETCH_BOOKS_BY_GENRES_START, fetchBooksByGenres);
};

export function* bookSagas() {
    yield all([call(onFetchBooksByGenresStart)]);
};
