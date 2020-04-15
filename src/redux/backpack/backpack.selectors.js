import { createSelector } from 'reselect'

const selectBackpack = state => state.backpack;

export const selectBackpackBooks = createSelector(
    [selectBackpack],
    backpack => backpack.books
)

export const selectBackpackHidden = createSelector(
    [selectBackpack],
    backpack => backpack.hidden
)

export const selectBackpackBooksCount = createSelector(
    [selectBackpackBooks],
    books => books.reduce((accumulator, book) => {
        return accumulator = accumulator + 1
    }, 0)
)

export const selectIsBookInBackpack = bookId => createSelector(
    [selectBackpackBooks],
    books => books.filter(book => book._id === bookId)
);
