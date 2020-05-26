import { takeLatest, put, all, call } from "redux-saga/effects";
import axios from "axios";

import GenreActionTypes from "./genre.types";
import { fetchGenresSuccess, fetchGenresFailure } from "./genre.actions";

const REQUEST_URL = "http://localhost:5000/api/genres";

export function* fetchGenres() {
	try {
		const { data } = yield axios.get(`${REQUEST_URL}?sortBy=alphabetical`);
		yield put(fetchGenresSuccess(data));
	} catch (error) {
		yield put(fetchGenresFailure(error.response));
	}
}

export function* onFetchGenresStart() {
	yield takeLatest(GenreActionTypes.FETCH_GENRES_START, fetchGenres);
}

export function* genreSagas() {
	yield all([call(onFetchGenresStart)]);
}
