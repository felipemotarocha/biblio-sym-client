import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button.component';

export const BacpackDropdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 250px;
    width: 200px;
    border: 1px solid black;
    background: #eee;
    position: absolute;
    right: 120px;
    margin-top: 10px;
    padding: 10px;
`

export const Headline = styled.span`
    text-transform: uppercase;
    color: black;
    letter-spacing: 2px;
    font-size: 0.8rem;
    font-weight: bold;
`

export const Button = styled(CustomButton)`
    position: absolute;
    bottom: 10px;
`