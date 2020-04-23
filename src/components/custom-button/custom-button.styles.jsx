import styled, { css } from 'styled-components';

const customButtonStyles = css`
    background-color: black;
    color: white;
    border: 1px solid black;

    &:hover {
        background-color: #f9f9f9;
        color: black;
        border: 1px solid black;
    }
`

const invertedStyles = css`
    background-color: #f9f9f9;
    color: black;
    border: 1px solid black;

    &:hover {
        background-color: black;
        color: white;
        border: 1px solid black;
    }
`

const getButtonStyles = ({ inverted }) => {
    return inverted ? invertedStyles : customButtonStyles
}

export const CustomButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    border-radius: 5px;
    padding: 12px;
    font-family: 'Roboto', sans-serif;
    letter-spacing: 2px;
    font-weight: bolder;
    text-transform: uppercase;
    transition: all 300ms;
    width: 150px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);


    ${getButtonStyles}

    :hover {
        cursor: pointer;
    }
`