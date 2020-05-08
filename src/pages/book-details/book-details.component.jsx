import React from "react";

import {
    BookDetailsContainer,
    BookImage,
    BookContent,
    Header,
    Title,
    Author,
    Content,
    ContentHeadline,
    Description,
    Footer,
    LoanQuantity,
} from "./book-details.styles";

import AddBookToBackpackButton from "../../components/add-book-to-backpack-button/add-book-to-backpack-button";

const BookDetails = ({ book }) => {
    const { image, title, author, availableForLoan } = book;
    return (
        <div>
            <BookDetailsContainer>
                <BookImage source={image} />
                <BookContent>
                    <Header>
                        <Title>{title}</Title>
                        <Author>by {author}</Author>
                    </Header>
                    <Content>
                        <ContentHeadline>About this book</ContentHeadline>
                        <Description>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Etiam ultrices, felis rhoncus venenatis
                            ornare, nulla lacus efficitur risus, et varius nunc
                            massa in nibh. Nam quis lacinia sem. Curabitur dolor
                            nisi, tristique vel nisi in, molestie pretium
                            tellus. In vulputate dolor mi, eu hendrerit mi
                            condimentum ut. In vel placerat velit. Integer eu
                            ligula in nisi blandit fermentum at sed mi. Nam
                            porttitor justo eu nisl ultricies scelerisque.
                        </Description>
                    </Content>
                    <Footer>
                        <LoanQuantity>
                            Available quantity for loan: {availableForLoan}
                        </LoanQuantity>
                        <AddBookToBackpackButton book={book} />
                    </Footer>
                </BookContent>
            </BookDetailsContainer>
        </div>
    );
};

export default BookDetails;
