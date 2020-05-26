import React from "react";
import { useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useEffect } from "react";
import { connect } from "react-redux";

import { Container, Item } from "./admin-panel.styles";
import { fetchGenresStart } from "../../redux/genre/genre.actions";
import { selectIsLoading } from "../../redux/genre/genre.selectors";

import AddBook from "../../components/add-book/add-book.component";
import AlertMessage from "../../components/alert-message/alert-message.component";

const AdminPanel = ({ isLoading }) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchGenresStart());
	}, [dispatch]);
	return (
		<AlertMessage>
			<Container>
				<Item>
					<AddBook isLoading={isLoading} />
				</Item>
				<Item>
					<h1>REMOVE BOOK</h1>
				</Item>
			</Container>
		</AlertMessage>
	);
};

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsLoading,
});

export default connect(mapStateToProps)(AdminPanel);
