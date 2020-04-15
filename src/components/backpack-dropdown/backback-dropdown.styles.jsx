import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

export const BacpackDropdownContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 350px;
    width: 240px;
    border: 1px solid black;
    border-radius: 5px;
    background: #eee;
    position: absolute;
    right: 110px;
    margin-top: 10px;
    padding: 10px 5px;
    z-index: 5;
`;

export const Books = styled.div`
    height: 260px;
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    width: 100%;
    overflow-y: auto;
`;

export const Headline = styled.span`
    text-align: center;
    text-transform: uppercase;
    color: black;
    letter-spacing: 2px;
    font-size: 0.8rem;
    font-weight: bold;
`;

export const InfoText = styled.span`
    width: 95%;
    padding-bottom: 5px;
    text-align: center;
    font-size: 0.6rem;
    color: black;
    border-bottom: 1px solid lightgray;
    text-transform: uppercase;
`;

export const Button = styled(CustomButton)`
    position: absolute;
    bottom: 10px;
    width: 80%;
`;
