import styled from "styled-components";
import CustomButton from '../../components/custom-button/custom-button.component'

export const CheckoutContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const CheckoutHeader = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr) 0.5fr;
    text-align: center;
    justify-items: center;
    grid-gap: 30px;
    width: 80%;
    border-bottom: 1px solid lightgray;
    margin: 15px 0;
    padding: 10px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
`;

export const CheckoutItems = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
`;

export const EmptyMessage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    height: 300px;
    font-size: 1.5rem;
`;

export const TotalMessage = styled.span`
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 1.5rem;
    align-self: flex-end;
`

export const Button = styled(CustomButton)`
    width: 15%;
    margin: 10px 0;
    align-self: flex-end;
`
