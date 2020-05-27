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

export const addGenreStart = (genre) => ({
	type: GenreActionTypes.ADD_GENRE_START,
	payload: genre,
});

export const addGenreSuccess = () => ({
	type: GenreActionTypes.ADD_GENRE_SUCCESS,
	alertMessage: "The genre was sucessfully added!",
});

export const addGenreFailure = (error) => ({
	type: GenreActionTypes.ADD_GENRE_FAILURE,
	error,
});
