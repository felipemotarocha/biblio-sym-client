import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
    CheckoutContainer,
    CheckoutHeader,
    EmptyMessage,
    CheckoutItems,
    Button,
    TotalMessage
} from "./checkout.styles";

import { selectBackpackBooks, selectBackpackBooksCount } from "../../redux/backpack/backpack.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { addUserBooksFetch } from '../../redux/user/user.actions'
import { loanBooksFetch } from '../../redux/book/book.actions'
import { clearBackpack } from '../../redux/backpack/backpack.actions'

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({ backpackBooks, currentUser, backpackBooksCount, dispatch, history, match }) => {
    const handleClick = async () => {
        try {
            if (currentUser) {
                await dispatch(loanBooksFetch(backpackBooks))
                await dispatch(addUserBooksFetch(backpackBooks));
                await dispatch(clearBackpack());
                history.push(`${match.path}/successful`)
            } else {
                alert('You need to be logged in in order to take books.');
                history.push('/sign')
            }
        } catch (err) {
            alert(err.message);
            history.push('/sign')
        }
    }
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <div>Book</div>
                <div>Title</div>
                <div>Author</div>
                <div>Remove</div>
            </CheckoutHeader>
            {backpackBooks.length > 0 ? (
                <CheckoutItems>
                    {backpackBooks.map((book, index) => (
                        <CheckoutItem key={index} book={book} />
                    ))}
                    <TotalMessage>TOTAL: {backpackBooksCount} book(s)</TotalMessage>
                    <Button handleClick={handleClick}>TAKE BOOK(S)</Button>
                </CheckoutItems>

            ) : (
                    <EmptyMessage>
                        <span>Your backpack is empty :(</span>
                    </EmptyMessage>
                )}
        </CheckoutContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    backpackBooks: selectBackpackBooks,
    currentUser: selectCurrentUser,
    backpackBooksCount: selectBackpackBooksCount
});

export default connect(mapStateToProps)(CheckoutPage);
