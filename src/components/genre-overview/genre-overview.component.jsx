import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { GenreOverviewContainer } from "./genre-overview.styles";

import { fetchBooksByGenre } from "../../redux/genre/genre.utils";
import { setBooksByGenre } from "../../redux/genre/genre.actions";
import { selectBooksByGenre } from "../../redux/genre/genre.selectors";

import GenrePreview from "../genre-preview/genre-preview.component";

class GenreOverview extends React.Component {
    async componentDidMount() {
        const { dispatch } = this.props;

        const data = await fetchBooksByGenre();
        dispatch(setBooksByGenre(data));
    }

    render() {
        const { booksByGenre } = this.props;
        return (
            <GenreOverviewContainer>
                {booksByGenre
                    ? booksByGenre.map((group, index) => {
                          if (group.books.length > 0) {
                              return <GenrePreview key={index} group={group} />;
                          }
                      })
                    : "loading"}
            </GenreOverviewContainer>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    booksByGenre: selectBooksByGenre,
});

export default connect(mapStateToProps)(GenreOverview);
