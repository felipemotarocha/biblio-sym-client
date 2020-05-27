import React from "react";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";
import { useEffect } from "react";
import { connect } from "react-redux";

import { Container, Item } from "./admin-panel.styles";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import AddBook from "../../components/add-book/add-book.component";
import AddGenre from "../../components/add-genre/add-genre.component";
import AlertMessage from "../../components/alert-message/alert-message.component";

const AdminPanel = ({ currentUser }) => {
	const history = useHistory();
	useEffect(() => {
		if (currentUser) {
			if (!currentUser.isAdmin) {
				history.push("/");
			}
		}
	}, [currentUser, history]);
	return (
		<AlertMessage>
			{currentUser ? (
				<Container>
					<Item>
						<AddBook />
					</Item>
					<Item>
						<AddGenre />
					</Item>
				</Container>
			) : (
				""
			)}
		</AlertMessage>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(AdminPanel);
