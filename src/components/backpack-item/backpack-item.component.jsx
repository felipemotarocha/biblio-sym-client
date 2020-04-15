import React from 'react';
import { connect } from 'react-redux'

import { BackpackItemContainer, ImageContainer, RemoveButton, Image, BookInfo, Title, Author } from './backpack-item.styles'

import { removeBook } from '../../redux/backpack/backpack.actions'

const BackpackItem = ({ _id, title, author, image, dispatch }) => {
    return (
        <BackpackItemContainer>
            <ImageContainer>
                <Image className="img" src={image}></Image>
                <RemoveButton className="remove-btn" onClick={() => dispatch(removeBook(_id))}>&#10005;</RemoveButton>
            </ImageContainer>
            <BookInfo>
                <Title>{title}</Title>
                <Author>{author}</Author>
            </BookInfo>
        </BackpackItemContainer>
    );
}

export default connect()(BackpackItem);