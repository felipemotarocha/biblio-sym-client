import BackpackActionTypes from './backpack.types'
import { addBook } from './backpack.utils';

const INITIAL_STATE = {
    books: [],
    hidden: true,
}

const backpackReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BackpackActionTypes.ADD_BOOK:
            return {
                ...state,
                books: addBook(state.books, action.payload)
            }
        case BackpackActionTypes.TOGGLE_BACKPACK_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default backpackReducer;
