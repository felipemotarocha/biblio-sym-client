import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import GoogleLogin from "react-google-login";

import { Container, Buttons, Button } from "./sign-in.styles";
import {
	signInWithEmailStart,
	signInWithGoogleStart,
} from "../../redux/user/user.actions";
import GOOGLE_CREDENTIALS from "../../credentials/google/google.credentials";

import CustomInput from "../custom-input/custom-input.component";

const SignIn = ({ dispatch, history }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = () => {
		try {
			dispatch(signInWithEmailStart({ user: { email, password } }));
		} catch (error) {
			alert(error.message);
		}
	};
	const handleSignInWithGoogle = ({
		googleId,
		profileObj: { email, name },
	}) => {
		try {
			dispatch(
				signInWithGoogleStart({ user: { email, name, googleId } })
			);
		} catch (error) {
			console.log("i am fired");
		}
		// history.push("/");
	};
	return (
		<Container>
			<h2>Already have an account?</h2>
			<p>Sign in with the form below</p>
			<CustomInput
				label="E-mail"
				type="email"
				value={email}
				handleChange={({ target: { value } }) => setEmail(value)}
			/>
			<CustomInput
				label="Password"
				type="password"
				value={password}
				handleChange={({ target: { value } }) => setPassword(value)}
			/>
			<Buttons>
				<Button handleClick={handleSubmit}>Sign in</Button>
				<GoogleLogin
					clientId={GOOGLE_CREDENTIALS.clientId}
					render={(renderProps) => (
						<Button
							signInWithGoogle
							handleClick={renderProps.onClick}
							disabled={renderProps.disabled}
						>
							<i className="fab fa-google"></i>Sign in with Google
						</Button>
					)}
					buttonText="Login"
					onSuccess={handleSignInWithGoogle}
					onFailure={handleSignInWithGoogle}
					cookiePolicy={"single_host_origin"}
				/>
			</Buttons>
		</Container>
	);
};

export default connect()(withRouter(SignIn));
