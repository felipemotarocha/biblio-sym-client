import GenreActionTypes from "./genre.types";

const INITIAL_STATE = {
    genres: null,
};

const genreReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GenreActionTypes.SET_GENRES:
            return {
                ...state,
                genres: action.payload,
            };
        default:
            return state;
    }
};

export default genreReducer;
