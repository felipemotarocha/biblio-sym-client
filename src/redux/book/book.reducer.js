import BookActionTypes from './book.types';

const INITIAL_STATE = {
    booksByGenre: null,
}

const bookReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BookActionTypes.SET_BOOKS_BY_GENRES:
            return {
                ...state,
                booksByGenre: action.payload
            }
        default:
            return state;
    }
}

export default bookReducer;
