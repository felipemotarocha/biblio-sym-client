import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	padding: 0 70px;
`;

export const Headline = styled.span`
	font-size: 2rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-weight: bold;
	text-align: center;
`;

export const ItemContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Item = styled.div`
	width: ${(props) => (props.isIcon ? "30px" : "100%")};
	margin: 10px 0;
`;
