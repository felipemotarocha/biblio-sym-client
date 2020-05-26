import BookActionTypes from "./book.types";

const INITIAL_STATE = {
	booksByGenres: null,
	allBooks: null,
	isFetching: true,
};

const bookReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BookActionTypes.FETCH_ALL_BOOK_START:
		case BookActionTypes.FETCH_BOOKS_BY_GENRES_START:
		case BookActionTypes.ADD_BOOK_START:
			return {
				...state,
				isFetching: true,
			};
		case BookActionTypes.FETCH_BOOKS_BY_GENRES_SUCCESS:
			return {
				...state,
				booksByGenres: action.payload,
				isFetching: false,
			};
		case BookActionTypes.FETCH_ALL_BOOK_FAILURE:
		case BookActionTypes.FETCH_BOOKS_BY_GENRES_FAILURE:
		case BookActionTypes.ADD_BOOK_FAILURE:
			return {
				...state,
				isFetching: false,
			};
		case BookActionTypes.ADD_BOOK_SUCCESS:
			return {
				...state,
				isFetching: false,
			};
		case BookActionTypes.FETCH_ALL_BOOK_SUCCESS:
		case BookActionTypes.UPDATE_BOOKS:
			return {
				...state,
				allBooks: action.payload,
			};
		default:
			return state;
	}
};

export default bookReducer;
