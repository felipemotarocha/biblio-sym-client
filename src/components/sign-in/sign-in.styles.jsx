import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const Container = styled.div`
    padding: 20px;
`;

export const Buttons = styled.div`
    display: flex;
`;

export const Button = styled(CustomButton)`
    margin-right: 10px;
`;
