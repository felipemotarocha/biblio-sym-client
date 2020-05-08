import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchBooksByGenresStart } from "../../redux/book/book.actions";

import GenreOverviewContainer from "../../components/genre-overview/genre-overview.container";

const HomePage = ({ dispatch }) => {
	useEffect(() => {
		dispatch(fetchBooksByGenresStart());
		// eslint-disable-next-line
	}, []);
	return (
		<div>
			<GenreOverviewContainer />
		</div>
	);
};

export default connect()(HomePage);
