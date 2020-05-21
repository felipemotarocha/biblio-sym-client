import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Container } from "./sign-in-sign-up.styles";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectErrorMessage } from "../../redux/error/error.selectors";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import ErrorMessage from "../../components/error-message/error-message.component";

const SignInSignUpPage = ({ currentUser, errorMessage, history }) => {
	useEffect(() => {
		if (currentUser && !errorMessage) {
			history.push("/");
		}
	}, [currentUser]);
	return (
		<Container>
			<SignIn />
			<SignUp />
		</Container>
	);
};

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	errorMessage: selectErrorMessage,
});

export default connect(mapStateToProps)(SignInSignUpPage);
