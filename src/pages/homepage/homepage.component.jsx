import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { fetchBooksByGenre } from "../../redux/book/book.utils";
import { setBooksByGenre } from "../../redux/book/book.actions";

import GenreOverview from "../../components/genre-overview/genre-overview.component";
import LoadingSpinner from "../../components/loading-spinner/loading-spinner.component";

const GenreOverviewWithLoading = LoadingSpinner(GenreOverview);

const HomePage = ({ dispatch }) => {
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		fetchBooksByGenre().then((data) => {
			dispatch(setBooksByGenre(data));
			setLoading(false);
		});
		// eslint-disable-next-line
	}, []);
	return (
		<div>
			<GenreOverviewWithLoading isLoading={isLoading} />
		</div>
	);
};

export default connect()(HomePage);
