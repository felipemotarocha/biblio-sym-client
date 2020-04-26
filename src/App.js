import React, { Component } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import BookDetails from "./pages/book-details/book-details.component";
import CheckoutPage from "./pages/checkout/checkout.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import SuccessfulCheckout from "./pages/successful-checkout/successful-checkout.component";
import AuthenticatedComponent from "./components/authenticated-component/authenticated-component";

import { loginUser } from "./redux/user/user.actions";
import { getUserProfile } from "./redux/user/user.utils";
import UserBooks from "./pages/user-books/user-books.component";

class App extends Component {
	async componentDidMount() {
		const { dispatch } = this.props;
		if (localStorage.getItem("authToken")) {
			try {
				const data = await getUserProfile();
				dispatch(loginUser(data));
			} catch (err) {}
		}
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/book/:id" component={BookDetails} />
					<Route exact path="/checkout" component={CheckoutPage} />
					<Route exact path="/sign" component={SignInSignUpPage} />
					<AuthenticatedComponent>
						<Route exact path="/checkout/successful" component={SuccessfulCheckout} />
						<Route exact path="/my-books" component={UserBooks} />
					</AuthenticatedComponent>
				</Switch>
			</div>
		);
	}
}

export default connect()(withRouter(App));
