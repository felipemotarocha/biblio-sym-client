import styled from 'styled-components';

export const CustomButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    border: 1px solid black;
    padding: 10px;
    background-color: black;
        color: #fff;
    
    text-transform: uppercase;
    transition: all 300ms;
    width: 150px;

    :hover {
        cursor: pointer;
        background-color: #eee;
        color: black;
    }
`