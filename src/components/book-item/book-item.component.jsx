import React from "react";
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import {
    BookItemContainer,
    Image,
    Title,
    Author,
    Content,
    BookItemButton
} from "./book-item.styles";

import { selectBackpackBooks } from "../../redux/backpack/backpack.selectors";

const BookItem = ({ book, dispatch, match, history, backpackBooks }) => {
    const { _id, title, author, image } = book;

    return (
        <BookItemContainer>
            <Image source={image}>
                <BookItemButton className="btn" handleClick={() => history.push(`${match.url}book/${_id}`)}>See details</BookItemButton>
            </Image>
            <Content>
                <Title>{title}</Title>
                <Author>{author}</Author>
            </Content>
        </BookItemContainer>
    );
};


const mapStateToProps = createStructuredSelector({
    backpackBooks: selectBackpackBooks,
});


export default withRouter(connect(mapStateToProps)(BookItem));
