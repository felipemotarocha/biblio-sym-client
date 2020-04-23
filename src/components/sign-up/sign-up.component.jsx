import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'

import { Container } from "./sign-up.styles";

import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { userPostFetch } from "../../redux/user/user.actions";

const SignUp = ({ dispatch, history }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = async () => {
        try {
            dispatch(userPostFetch({ name, email, password }))
            history.push('/');
        } catch (err) {
            alert(err.message);
        }
    }
    return (
        <Container>
            <h2>Do not have an account?</h2>
            <p>Sign up with the form below</p>
            <CustomInput
                label="Name"
                type="text"
                value={name}
                handleChange={({ target: { value } }) => setName(value)}
            />
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
                handleClick={handleSubmit}
            >
                Sign Up
            </CustomButton>
        </Container>
    );
};

export default connect()(withRouter(SignUp));
