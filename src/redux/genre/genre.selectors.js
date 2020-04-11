import { createSelector } from "reselect";

const selectGenre = (state) => state.genre;

export const selectGenres = createSelector(
    [selectGenre],
    (genre) => genre.genres
);

export const selectBooksByGenre = createSelector(
    [selectGenre],
    (genre) => genre.booksByGenre
);
