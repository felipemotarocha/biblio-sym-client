export const addBook = (backpackBooks, bookToAdd) => {
    // checking if book is already in backpack
    const bookInBackpack = backpackBooks.find(
        (book) => book._id === bookToAdd._id
    );

    // if it is, increase its quantity
    if (bookInBackpack) {
        return backpackBooks;
    }

    // if it is not, add it to backpack
    return [...backpackBooks, bookToAdd];
};

export const isBookInBackpack = (backpackBooks, bookId) => {
    const backpackBook = backpackBooks.find((item) => item._id === bookId);
    return backpackBook;
};
