import { takeLatest, all, put, call } from "redux-saga/effects";
import axios from "axios";

import BookActionTypes from "./book.types";
import {
	fetchBooksByGenresSuccess,
	fetchBooksByGenresFailure,
	fetchAllBooksSuccess,
	fetchAllBooksFailure,
	bookLoanSuccess,
	bookLoanFailure,
	addNewBookSuccess,
	addNewBookFailure,
	addExistentBookSuccess,
	addExistentBookFailure,
	updateBooks,
} from "./book.actions";

// Asynchronous Code
export function* addNewBook({
	payload: { title, author, genre, imageUrl, availableForLoan },
}) {
	try {
		const REQUEST_URL = "http://localhost:5000/api/books";
		const {
			data: { allBooks },
		} = yield axios.post(REQUEST_URL, {
			title,
			author,
			genre,
			image: imageUrl,
			availableForLoan,
		});
		yield put(addNewBookSuccess());
		yield put(updateBooks(allBooks));
	} catch ({ response: { data } }) {
		console.log(data);
		yield put(addNewBookFailure(data));
	}
}

export function* addExistentBook({ payload: { id, quantity } }) {
	try {
		const REQUEST_URL = "http://localhost:5000/api/books";
		const {
			data: { allBooks },
		} = yield axios.post(`${REQUEST_URL}/add/${id}`, { quantity });
		yield put(addExistentBookSuccess());
		yield put(updateBooks(allBooks));
	} catch ({ response: { data } }) {
		yield put(addExistentBookFailure(data));
	}
}

export function* fetchAllBooks() {
	try {
		const REQUEST_URL = "http://localhost:5000/api/books";
		const { data } = yield axios.get(`${REQUEST_URL}/all?sortBy=alphabetical`);
		yield put(fetchAllBooksSuccess(data));
	} catch ({ response: { data } }) {
		yield put(fetchAllBooksFailure(data));
	}
}

export function* fetchBooksByGenres() {
	try {
		const REQUEST_URL = "http://localhost:5000/api/genres";
		const { data } = yield axios.get(`${REQUEST_URL}/books`);
		yield put(fetchBooksByGenresSuccess(data));
	} catch ({ response: { data } }) {
		yield put(fetchBooksByGenresFailure(data));
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
	} catch ({ response: { data } }) {
		yield put(bookLoanFailure(data));
	}
}

// Listeners
export function* onAddNewBookStart() {
	yield takeLatest(BookActionTypes.ADD_NEW_BOOK_START, addNewBook);
}

export function* onAddExistentBookStart() {
	yield takeLatest(BookActionTypes.ADD_EXISTENT_BOOK_START, addExistentBook);
}

export function* onFetchAllBooksStart() {
	yield takeLatest(BookActionTypes.FETCH_ALL_BOOK_START, fetchAllBooks);
}

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
	yield all([
		call(onFetchAllBooksStart),
		call(onFetchBooksByGenresStart),
		call(onBookLoanStart),
		call(onAddNewBookStart),
		call(onAddExistentBookStart),
	]);
}
