import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import {
    BackPackIconContainer,
    BackpackIcon,
    BooksCount,
} from "./backpack-icon.styles";
import { selectBackpackBooksCount } from "../../redux/backpack/backpack.selectors";
import { toggleBackpackHidden } from "../../redux/backpack/backpack.actions";

const BackPackIcon = ({ booksCount, dispatch }) => {
    return (
        <BackPackIconContainer onClick={() => dispatch(toggleBackpackHidden())}>
            <BackpackIcon />
            <BooksCount>{booksCount}</BooksCount>
        </BackPackIconContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    booksCount: selectBackpackBooksCount,
});

export default connect(mapStateToProps)(BackPackIcon);
