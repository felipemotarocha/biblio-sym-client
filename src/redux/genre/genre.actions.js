import GenreActionTypes from "./genre.types";

export const setGenres = (genres) => ({
    type: GenreActionTypes.SET_GENRES,
    payload: genres,
});

