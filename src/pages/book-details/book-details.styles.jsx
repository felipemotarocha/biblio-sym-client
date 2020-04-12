import styled from "styled-components";
import CustomButton from '../../components/custom-button/custom-button.component';

export const BookDetailsContainer = styled.div`
    display: grid;
    grid-template-columns: 300px 1fr;
    grid-template-rows: 420px;
    max-width: 1200px;
    margin: auto;
    padding: 80px 0px;
    grid-gap: 30px;
`;

export const BookImage = styled.div`
    width: 100%;
    height: 100%;
    background: url(${(props) => props.source}) no-repeat center center/cover;
    border-radius: 5px;
    -webkit-box-shadow: 1px 0px 6px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 0px 6px 0px rgba(0,0,0,0.75);
    box-shadow: 1px 0px 6px 0px rgba(0,0,0,0.75);
`;

export const BookContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const Header = styled.div`
    width: 900px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid lightgray;
    padding-bottom: 10px;
`

export const Title = styled.span`
    width: 100%;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    overflow: hidden;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`

export const Author = styled.span`
    font-size: 1rem;
    font-style: italic;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    padding: 15px 8px;
    overflow: auto;
`

export const ContentHeadline = styled.span`
    font-size: 1rem;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
`

export const Description = styled.span`
    margin: 5px 0;
    text-align: justify;
    line-height: 130%;
`

export const Footer = styled.div`
    display: flex;
    flex-direction: column;
    border-top: 1px solid lightgray;
`

export const Quantity = styled.span`
    font-size: 0.9rem;
    font-weight: bold;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin: 8px 0;
`

export const Button = styled(CustomButton)`
    width: 210px;
    border-radius: 5px;

    :hover {
        background-color: #fff;
    }
`
