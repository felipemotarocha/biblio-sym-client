import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	background: #f9f9f9;
	color: black;
	border-radius: 5px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
	border: 1px solid lightgray;

	top: 72px;
	right: 200px;
	width: ${(props) => (props.isAdmin ? "215px" : "140px")};
	height: auto;
	padding: 15px;
`;

export const Item = styled.span`
	width: 100%;
	padding: 8px;
	border-radius: 5px;
	transition: all 500ms ease;

	:hover {
		background: lightgray;
		cursor: pointer;
	}
`;
