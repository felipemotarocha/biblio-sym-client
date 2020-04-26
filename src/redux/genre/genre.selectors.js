import { createSelector } from "reselect";

const selectGenre = (state) => state.genre;

export const selectGenres = createSelector(
    [selectGenre],
    (genre) => genre.genres
);
