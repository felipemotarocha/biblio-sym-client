import React from 'react';

import { BackpackItemContainer, Image, BookInfo, Title, Author } from './backpack-item.styles'

const BackpackItem = ({ title, author, image }) => {
    return (
        <BackpackItemContainer>
            <Image src={image} />
            <BookInfo>
                <Title>{title}</Title>
                <Author>{author}</Author>
            </BookInfo>
        </BackpackItemContainer>
    );
}

export default BackpackItem;