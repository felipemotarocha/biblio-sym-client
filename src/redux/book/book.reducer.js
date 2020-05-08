import BookActionTypes from "./book.types";

const INITIAL_STATE = {
	booksByGenres: null,
	isFetching: true,
	error: null,
};

const bookReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case BookActionTypes.FETCH_BOOKS_BY_GENRES_START:
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
		case BookActionTypes.FETCH_BOOKS_BY_GENRES_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload,
			}
		default:
			return state;
	}
};

export default bookReducer;
