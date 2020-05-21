import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	z-index: 2;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.4);
	background-blend-mode: color;
`;

export const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	position: relative;
	height: 150px;
	width: 300px;
	background: #eee;
	color: black;
	border-radius: 5px;
	box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

export const Message = styled.span`
	font-size: 1.1rem;
	margin-bottom: 20px;
`;
