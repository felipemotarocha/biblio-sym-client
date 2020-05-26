import GenreActionTypes from "./genre.types";

const INITIAL_STATE = {
	genres: null,
	isLoading: true,
};

const genreReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case GenreActionTypes.SET_GENRES:
			return {
				...state,
				genres: action.payload,
			};
		case GenreActionTypes.FETCH_GENRES_START:
			return {
				...state,
				isLoading: true,
			};
		case GenreActionTypes.FETCH_GENRES_SUCCESS:
			return {
				...state,
				genres: action.payload,
				isLoading: false,
			};
		case GenreActionTypes.FETCH_GENRES_FAILURE:
			return {
				...state,
				genres: null,
				isLoading: false,
			};
		default:
			return state;
	}
};

export default genreReducer;
