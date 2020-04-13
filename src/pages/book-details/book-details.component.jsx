import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

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
    Button,
    Quantity,
} from "./book-details.styles";

import { addBook } from "../../redux/backpack/backpack.actions";
import { selectBackpackBooks } from "../../redux/backpack/backpack.selectors";

const BookDetails = ({
    match: {
        params: { id },
    },
    backpackBooks,
    dispatch,
}) => {
    const [book, setBook] = useState("");

    useEffect(() => {
        const fetchBooks = async () => {
            const REQUEST_URL = "http://localhost:5000/api/books";
            const { data } = await axios.get(`${REQUEST_URL}/${id}`);
            setBook(data);
            console.log(data);
        };

        fetchBooks();
    }, []);

    const isBookInBackpack = () => {
        const backpackBook = backpackBooks.find((item) => item._id === id);
        console.log("running");
        return backpackBook;
    };

    const { image, title, author, quantity } = book;
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
                        <Quantity>Available quantity: {quantity}</Quantity>
                        {book ? (
                            isBookInBackpack() === undefined ? (
                                <Button
                                    handleClick={() => dispatch(addBook(book))}
                                >
                                    Add to backpack
                                </Button>
                            ) : (
                                <ContentHeadline>
                                    this book is in your backpack.
                                </ContentHeadline>
                            )
                        ) : (
                            ""
                        )}
                    </Footer>
                </BookContent>
            </BookDetailsContainer>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    backpackBooks: selectBackpackBooks,
});

export default connect(mapStateToProps)(BookDetails);
