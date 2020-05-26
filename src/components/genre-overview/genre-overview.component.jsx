import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { GenreOverviewContainer } from "./genre-overview.styles";

import { selectBooksByGenre } from "../../redux/book/book.selectors";

import GenrePreview from "../genre-preview/genre-preview.component";

const GenreOverview = ({ booksByGenre }) => {
	return (
		<GenreOverviewContainer>
			{booksByGenre
				? booksByGenre.map((group, index) => {
						if (group.books.length > 0) {
							return <GenrePreview key={index} group={group} />;
						}
						return "";
				  })
				: ""}
		</GenreOverviewContainer>
	);
};

const mapStateToProps = createStructuredSelector({
	booksByGenre: selectBooksByGenre,
});

export default connect(mapStateToProps)(GenreOverview);
