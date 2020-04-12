import BackpackActionTypes from './backpack.types';

export const addBook = book => ({
    type: BackpackActionTypes.ADD_BOOK,
    payload: book
})

export const toggleBackpackHidden = () => ({
    type: BackpackActionTypes.TOGGLE_BACKPACK_HIDDEN,
})