export const addBook = (backpackBooks, bookToAdd) => {
    // checking if book is already in backpack
    const bookInBackpack = backpackBooks.find(book => book._id === bookToAdd._id);
    console.log(bookInBackpack)
    // if it is, increase its quantity
    if (bookInBackpack) {
        return backpackBooks.map(book => book._id === bookToAdd._id ? { ...book, quantity: book.quantity + 1 } : book);
    }

    // if it is not, add it to backpack
    return [...backpackBooks, { ...bookToAdd, quantity: 1 }];
};
