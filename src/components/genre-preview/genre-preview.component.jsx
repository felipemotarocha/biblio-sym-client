import React from "react";
import { connect } from "react-redux";

import {
    GenrePreviewContainer,
    GenreTitle,
    Books,
} from "./genre-preview.styles";

import BookItem from "../book-item/book-item.component";

class GenrePreview extends React.Component {
    render() {
        const {
            group: { genre, books },
        } = this.props;
        return (
            <GenrePreviewContainer>
                <GenreTitle>{genre.toUpperCase()}</GenreTitle>
                <Books>
                    {books.map((book) => (
                        <BookItem key={book._id} book={book} />
                    ))}
                </Books>
            </GenrePreviewContainer>
        );
    }
}

export default connect()(GenrePreview);
