import GenreActionTypes from "./genre.types";

export const setGenres = (genres) => ({
    type: GenreActionTypes.SET_GENRES,
    payload: genres,
});

export const setBooksByGenre = (booksByGenre) => ({
    type: GenreActionTypes.SET_BOOKS_BY_GENRES,
    payload: booksByGenre,
});
