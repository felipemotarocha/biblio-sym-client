import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
    CheckoutContainer,
    CheckoutHeader,
    EmptyMessage,
} from "./checkout.styles";
import { selectBackpackBooks } from "../../redux/backpack/backpack.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = ({ backpackBooks }) => {
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <div>Book</div>
                <div>Title</div>
                <div>Author</div>
                <div>Remove</div>
            </CheckoutHeader>
            {backpackBooks.length > 0 ? (
                backpackBooks.map((book, index) => (
                    <CheckoutItem key={index} book={book} />
                ))
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
});

export default connect(mapStateToProps)(CheckoutPage);
