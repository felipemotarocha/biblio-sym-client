import React from "react";
import { connect } from "react-redux";

import {
    CheckoutItemContainer,
    Title,
    Author,
    Image,
    RemoveButton,
} from "./checkout-item.styles";
import { removeBook } from "../../redux/backpack/backpack.actions";

const CheckoutItem = ({ book: { _id, image, title, author }, dispatch }) => {
    return (
        <CheckoutItemContainer>
            <Image src={image} />
            <Title>{title}</Title>
            <Author>{author}</Author>
            <RemoveButton onClick={() => dispatch(removeBook(_id))}>
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    );
};

export default connect()(CheckoutItem);
