import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Container, Header, Books } from "./user-books.styles";
import { selectCurrentUserBooks } from "../../redux/user/user.selectors";

import UserBook from "../../components/user-book/user-book.component";

const UserBooks = ({ currentUserBooks }) => {
    return (
        <Container>
            <Header>
                <div>Book</div>
                <div>Title</div>
                <div>Author</div>
            </Header>
            {currentUserBooks ? (
                <Books>
                    {currentUserBooks.map((book, index) => (
                        <UserBook key={index} book={book} />
                    ))}
                </Books>
            ) : null}
        </Container>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUserBooks: selectCurrentUserBooks,
});

export default connect(mapStateToProps)(UserBooks);
