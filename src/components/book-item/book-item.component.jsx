import React from "react";
import { withRouter } from 'react-router-dom'

import {
    BookItemContainer,
    Image,
    Title,
    Author,
    Content,
    BookItemButton
} from "./book-item.styles";

const BookItem = ({ _id, title, author, image, match, history }) => {
    return (
        <BookItemContainer>
            <Image source={image}>
                <BookItemButton className="btn" handleClick={() => history.push(`${match.url}book/${_id}`)}>Ver mais</BookItemButton>
            </Image>
            <Content>
                <Title>{title}</Title>
                <Author>{author}</Author>
            </Content>
        </BookItemContainer>
    );
};

export default withRouter(BookItem);
