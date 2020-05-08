import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Header = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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

export const Books = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    align-items: center;
`;
