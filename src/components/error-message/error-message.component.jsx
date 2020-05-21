import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { Container, Box, Message } from "./error-message.styles";

import CustomButton from "../custom-button/custom-button.component";
import {
	selectIsErrorOpen,
	selectErrorMessage,
} from "../../redux/error/error.selectors";
import { hideError } from "../../redux/error/error.actions";

const ErrorMessage = ({ message, isOpen, dispatch, children }) => {
	return (
		<>
			{isOpen ? (
				<Container>
					<Box>
						<Message>{message}</Message>
						<CustomButton handleClick={() => dispatch(hideError())}>
							CLOSE
						</CustomButton>
					</Box>
				</Container>
			) : (
				""
			)}
			{children}
		</>
	);
};

const mapStateToProps = createStructuredSelector({
	message: selectErrorMessage,
	isOpen: selectIsErrorOpen,
});

export default connect(mapStateToProps)(ErrorMessage);
