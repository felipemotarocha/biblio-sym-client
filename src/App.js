import React, { useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import BookDetailsContainer from "./pages/book-details/book-details.container";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import SuccessfulCheckout from "./pages/successful-checkout/successful-checkout.component";
import AuthenticatedComponent from "./components/authenticated-component/authenticated-component";
import AdminComponent from "./components/admin-component/admin-component";
import AdminPanel from "./pages/admin-panel/admin-panel.component";

import { checkUserSession } from "./redux/user/user.actions";
import {
	selectCurrentUser,
	selectIsLoading,
} from "./redux/user/user.selectors";
import UserBooks from "./pages/user-books/user-books.component";

const App = ({ dispatch, currentUser }) => {
	useEffect(() => {
		if (localStorage.getItem("authToken") && currentUser === null) {
			dispatch(checkUserSession());
		}
	}, [currentUser, dispatch]);

	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route exact path="/book/:id" component={BookDetailsContainer} />
				<Route exact path="/checkout" component={CheckoutPage} />
				<Route exact path="/sign" component={SignInSignUpPage} />

				<AuthenticatedComponent>
					<Route
						exact
						path="/checkout/successful"
						component={SuccessfulCheckout}
					/>
					<Route exact path="/my-books" component={UserBooks} />
					<AdminComponent>
						<Route exact path="/admin" component={AdminPanel} />
					</AdminComponent>
				</AuthenticatedComponent>
			</Switch>
		</div>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	isLoading: selectIsLoading,
});

export default connect(mapStateToProps)(withRouter(App));
