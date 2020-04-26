import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 550px;
    margin: auto;
`

export const Headline = styled.span`
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 10px;
    text-align: center;
`

export const Text = styled.span`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    margin-bottom: 20px;
`