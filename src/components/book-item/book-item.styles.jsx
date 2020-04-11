import styled from "styled-components";

export const BookItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 180px;
    margin: 0 15px;
`;

export const Image = styled.div`
    width: 100%;
    min-height: 250px;
    max-height: 300px;
    background-image: url(${(props) => props.source});
    background-size: cover;
    background-position: center;
    border-radius: 5px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 7px;
    text-align: center;
`;

export const Title = styled.span`
    font-weight: 600;
    font-size: 1.3rem;
`;

export const Author = styled.span`
    font-style: italic;
`;
