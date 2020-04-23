import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { Container } from "./sign-in.styles";
import { userLoginFetch } from "../../redux/user/user.actions";

import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/custom-input.component";

const SignIn = ({ dispatch, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async () => {
    try {
      await dispatch(userLoginFetch({ email, password }));
      history.push("/");
    } catch (err) {
      alert(err.message);
    }
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
      <CustomButton handleClick={handleSubmit}>Sign in</CustomButton>
    </Container>
  );
};

export default connect()(withRouter(SignIn));
