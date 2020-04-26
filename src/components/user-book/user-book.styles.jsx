import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	margin: auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 10px;
	align-items: center;
	justify-items: center;
	margin: 10px 0;
	padding-bottom: 15px;
	border-bottom: 1px solid lightgray;
`;

export const Image = styled.img`
	width: 180px;
	height: auto;
	display: inline-block;
	border-radius: 5px;
	-webkit-box-shadow: 1px 0px 6px 0px rgba(0, 0, 0, 0.75);
	-moz-box-shadow: 1px 0px 6px 0px rgba(0, 0, 0, 0.75);
	box-shadow: 1px 0px 6px 0px rgba(0, 0, 0, 0.75);
`;

export const Title = styled.div`
	max-width: 100%;
	text-align: center;
	font-weight: bold;
	font-size: 1.4rem;
	text-overflow: ellipsis;
	overflow: hidden;
	-webkit-line-clamp: 4; /* number of lines to show */
	-webkit-box-orient: horizontal;
`;

export const Author = styled.span`
	width: 100%;
	text-align: center;
	text-overflow: ellipsis;
	overflow: hidden;
	-webkit-line-clamp: 4; /* number of lines to show */
	-webkit-box-orient: horizontal;
	font-weight: bold;
	font-style: italic;
`;
