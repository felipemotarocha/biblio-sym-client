import BackpackActionTypes from './backpack.types';

export const addBook = book => ({
    type: BackpackActionTypes.ADD_BOOK,
    payload: book
});

export const removeBook = bookId => ({
    type: BackpackActionTypes.REMOVE_BOOK,
    payload: bookId
});

export const toggleBackpackHidden = () => ({
    type: BackpackActionTypes.TOGGLE_BACKPACK_HIDDEN,
});

export const clearBackpack = () => ({
    type: BackpackActionTypes.CLEAR_BACKPACK
})