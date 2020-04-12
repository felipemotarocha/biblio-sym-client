import React from "react";
import axios from "axios";

import {
    BookDetailsContainer, BookImage, BookContent, Header, Title, Author, Content,
    ContentHeadline, Description, Footer, Button, Quantity
} from "./book-details.styles";

class BookDetails extends React.Component {
    state = {
        book: "",
    };

    async componentDidMount() {
        const { match: { params: { id } } } = this.props;

        const REQUEST_URL = "http://localhost:5000/api/books";
        const { data } = await axios.get(`${REQUEST_URL}/${id}`);
        this.setState({ book: data });
        console.log(data);
    }
    render() {
        const { match: { params: { id } } } = this.props;
        const { book: { title, author, image, quantity } } = this.state;

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
                            <ContentHeadline>About the book</ContentHeadline>
                            <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices, felis rhoncus venenatis ornare, nulla lacus efficitur risus, et varius nunc massa in nibh. Nam quis lacinia sem. Curabitur dolor nisi, tristique vel nisi in, molestie pretium tellus. In vulputate dolor mi, eu hendrerit mi condimentum ut. In vel placerat velit. Integer eu ligula in nisi blandit fermentum at sed mi. Nam porttitor justo eu nisl ultricies scelerisque.</Description>
                        </Content>
                        <Footer>
                            <Quantity>Available quantity: {quantity}</Quantity>
                            <Button>Add to backpack</Button>
                        </Footer>
                    </BookContent>
                </BookDetailsContainer>
            </div>
        );
    }
}

export default BookDetails;
