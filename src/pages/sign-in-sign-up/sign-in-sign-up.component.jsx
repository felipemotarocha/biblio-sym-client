import React, { useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Container } from "./sign-in-sign-up.styles";
import {
	selectCurrentUser,
	selectUserError,
} from "../../redux/user/user.selectors";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInSignUpPage = ({ currentUser, userError, history }) => {
	useEffect(() => {
		if (currentUser && !userError) {
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
	userError: selectUserError,
});

export default connect(mapStateToProps)(SignInSignUpPage);
