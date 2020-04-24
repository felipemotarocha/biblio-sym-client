import styled from "styled-components";

import CustomButton from "../custom-button/custom-button.component";

export const BacpackDropdownContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 350px;
    width: 260px;
    border: 1px solid lightgray;
    border-radius: 5px;
    background: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

    position: absolute;
    right: 130px;
    margin-top: 10px;
    padding: 10px 10px;
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

export const EmptyMessage = styled.span`
    display: flex;
    height: 80%;
    align-items: center;
    color: black;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-align: center;
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
