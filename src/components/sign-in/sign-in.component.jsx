import React, { useState } from "react";
import { connect } from "react-redux";
import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { Container } from "./sign-in.styles";
import { userLoginFetch } from "../../redux/user/user.actions";

const SignIn = ({ dispatch }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
            <CustomButton
                handleClick={() =>
                    dispatch(userLoginFetch({ email, password }))
                }
            >
                Sign in
            </CustomButton>
        </Container>
    );
};

export default connect()(SignIn);
