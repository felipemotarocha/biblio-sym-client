import React from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';

import { Button, ContentHeadline } from './add-book-to-backpack-button.styles';

import { selectCurrentUser, selectCurrentUserBooks } from '../../redux/user/user.selectors';
import { selectBackpackBooks } from '../../redux/backpack/backpack.selectors';
import { addBook } from "../../redux/backpack/backpack.actions";
import { isBookInBackpack } from "../../redux/backpack/backpack.utils";

const AddBookToBackpackButton = ({ dispatch, book, backpackBooks, currentUser, currentUserBooks }) => {
    const isBookAlreadyLoanForTheUser = () => {
        if (currentUser) {
            const foundBook = currentUserBooks.find((currentBook) => currentBook._id === book._id);
            console.log(foundBook)
            if (foundBook === undefined) return false;
            return true;
        } else {
            return false;
        }
    };

    const isBookAvailableForLoan = () => {
        return book.availableForLoan > 0;
    };
    return (
        <>
            {isBookAvailableForLoan() ? (
                isBookAlreadyLoanForTheUser() === false ? (
                    book ? (
                        isBookInBackpack(backpackBooks, book._id) === undefined ? (
                            <Button handleClick={() => dispatch(addBook(book))}>Add to backpack</Button>
                        ) : (
                                <ContentHeadline>this book is in your backpack.</ContentHeadline>
                            )
                    ) : (
                            ""
                        )
                ) : (
                        <ContentHeadline>You already have this book on loan.</ContentHeadline>
                    )
            ) : (
                    <ContentHeadline>This book is not available for loan :(</ContentHeadline>
                )}
        </>
    );
}

const mapStateToProps = createStructuredSelector({
    backpackBooks: selectBackpackBooks,
    currentUser: selectCurrentUser,
    currentUserBooks: selectCurrentUserBooks,
})

export default connect(mapStateToProps)(AddBookToBackpackButton);