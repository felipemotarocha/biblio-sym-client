import styled, { css } from 'styled-components';

const customButtonStyles = css`
    background-color: black;
    color: white;
    border: 1px solid black;

    &:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
    }
`

const invertedStyles = css`
    background-color: white;
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

    ${getButtonStyles}

    :hover {
        cursor: pointer;
    }
`