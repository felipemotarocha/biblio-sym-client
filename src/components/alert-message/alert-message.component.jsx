import React from "react";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

import { Container, Box, Message } from "./alert-message.styles";

import CustomButton from "../custom-button/custom-button.component";
import {
	selectErrorMessage,
	selectAlertMessage,
	selectIsAlertOpen,
} from "../../redux/alert/alert.selectors";
import { hideErrorOrMessage } from "../../redux/alert/alert.actions";

const AlertMessage = ({ error, message, isOpen, dispatch, children }) => {
	return (
		<>
			{isOpen ? (
				<Container>
					<Box>
						<Message>{error ? error : message}</Message>
						<CustomButton handleClick={() => dispatch(hideErrorOrMessage())}>
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
	error: selectErrorMessage,
	message: selectAlertMessage,
	isOpen: selectIsAlertOpen,
});

export default connect(mapStateToProps)(AlertMessage);
