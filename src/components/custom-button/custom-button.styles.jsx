import styled, { css } from "styled-components";

const customButtonStyles = css`
	background-color: black;
	color: white;
	border: 1px solid black;

	&:hover {
		background-color: #eee;
		color: black;
		border: 1px solid black;
	}
`;

const invertedStyles = css`
	background-color: #eee;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: 1px solid black;
	}
`;

const googleStyles = css`
	background-color: #4385f4;
	color: white;
	border: 1px solid #4385f4;

	&:hover {
		background-color: #eee;
		color: #4385f4;
		border: 1px solid #4385f4;
	}
`;

const getButtonStyles = ({ inverted, signInWithGoogle }) => {
	if (signInWithGoogle) {
		return googleStyles;
	} else if (inverted) {
		return invertedStyles;
	}
	return customButtonStyles;
};

export const CustomButtonContainer = styled.button`
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	padding: 12px 30px;
	font-family: "Roboto", sans-serif;
	letter-spacing: 2px;
	font-weight: bolder;
	text-transform: uppercase;
	transition: all 300ms;
	width: auto;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);

	${getButtonStyles}

	:hover {
		cursor: pointer;
	}

	i {
		margin-right: 4px;
	}
`;
