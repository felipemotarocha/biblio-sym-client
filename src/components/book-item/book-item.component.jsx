import React from "react";

import {
    BookItemContainer,
    Image,
    Title,
    Author,
    Content,
} from "./book-item.styles";

const BookItem = ({ title, author, image, quantity }) => {
    return (
        <BookItemContainer>
            <Image source={image} />
            <Content>
                <Title>{title}</Title>
                <Author>{author}</Author>
            </Content>
        </BookItemContainer>
    );
};

export default BookItem;
