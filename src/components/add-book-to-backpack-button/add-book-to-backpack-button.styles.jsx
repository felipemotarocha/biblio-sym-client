import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button.component';

export const ContentHeadline = styled.span`
	font-size: 1rem;
	font-weight: bold;
	letter-spacing: 2px;
	text-transform: uppercase;
	display: flex;
	align-items: center;
`;

export const Button = styled(CustomButton)`
	width: 210px;
	border-radius: 5px;

	:hover {
		background-color: #fff;
	}
`;
