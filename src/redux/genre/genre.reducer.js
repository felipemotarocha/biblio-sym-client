import GenreActionTypes from "./genre.types";

const INITIAL_STATE = {
    genres: null,
    booksByGenre: null,
};

const genreReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GenreActionTypes.SET_GENRES:
            return {
                ...state,
                genres: action.payload,
            };
        case GenreActionTypes.SET_BOOKS_BY_GENRES:
            return {
                ...state,
                booksByGenre: action.payload,
            };
        default:
            return state;
    }
};

export default genreReducer;
