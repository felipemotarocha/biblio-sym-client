import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { Container, Item } from "./user-dropdown.styles";

import {
	signOutUserStart,
	toggleUserDropdownHidden,
} from "../../redux/user/user.actions";

import { selectCurrentUser } from "../../redux/user/user.selectors";

const UserDropdown = ({ dispatch, history, currentUser }) => {
	return (
		<Container isAdmin={currentUser.isAdmin}>
			{currentUser.isAdmin ? (
				<Item
					onClick={() => {
						history.push("/admin");
						dispatch(toggleUserDropdownHidden());
					}}
				>
					<i className="fas fa-user-cog" /> Administrator Panel
				</Item>
			) : (
				""
			)}
			<Item
				onClick={() => {
					history.push("/my-books");
					dispatch(toggleUserDropdownHidden());
				}}
			>
				<i className="fas fa-book" /> My Books
			</Item>
			<Item
				onClick={() => {
					dispatch(signOutUserStart());
					dispatch(toggleUserDropdownHidden());
					history.push("/");
				}}
			>
				<i className="fas fa-sign-out-alt" /> Sign Out
			</Item>
		</Container>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(withRouter(UserDropdown));
