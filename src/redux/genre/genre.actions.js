import GenreActionTypes from "./genre.types";

export const setGenres = (genres) => ({
	type: GenreActionTypes.SET_GENRES,
	payload: genres,
});

export const fetchGenresStart = () => ({
	type: GenreActionTypes.FETCH_GENRES_START,
});

export const fetchGenresSuccess = (genres) => ({
	type: GenreActionTypes.FETCH_GENRES_SUCCESS,
	payload: genres,
});

export const fetchGenresFailure = (error) => ({
	type: GenreActionTypes.FETCH_GENRES_FAILURE,
	error,
});
