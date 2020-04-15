import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
    BacpackDropdownContainer,
    Headline,
    Button,
    Books,
    InfoText,
    EmptyMessage,
} from "./backback-dropdown.styles";
import { selectBackpackBooks } from "../../redux/backpack/backpack.selectors";
import { toggleBackpackHidden } from "../../redux/backpack/backpack.actions";

import BackpackItem from "../backpack-item/backpack-item.component";

const BackpackDropdown = ({ backpackBooks, history, dispatch }) => {
    const handleClick = () => {
        history.push("/checkout");
        dispatch(toggleBackpackHidden());
    };
    return (
        <BacpackDropdownContainer>
            <Headline>your backpack</Headline>
            <InfoText>(click on the book to remove)</InfoText>
            {backpackBooks.length > 0 ? (
                <Books>
                    {backpackBooks.map(({ ...props }, index) => (
                        <BackpackItem key={index} {...props} />
                    ))}
                </Books>
            ) : (
                <EmptyMessage>
                    <span>Your backpack is empty :(</span>
                </EmptyMessage>
            )}
            <Button handleClick={handleClick}>GO TO CHECKOUT</Button>
        </BacpackDropdownContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    backpackBooks: selectBackpackBooks,
});

export default connect(mapStateToProps)(withRouter(BackpackDropdown));
