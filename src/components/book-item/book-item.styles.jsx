import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const BookItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 180px;
    margin: 0 15px;
`;

export const Image = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    width: 100%;
    min-height: 250px;
    max-height: 300px;
    background-image: url(${(props) => props.source});
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    transition: all 300ms;
    -webkit-box-shadow: 1px 0px 6px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 0px 6px 0px rgba(0,0,0,0.75);
    box-shadow: 1px 0px 6px 0px rgba(0,0,0,0.75);

    :hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.3);
        background-blend-mode: color;

        .btn {
            opacity: 100;
        }
    }
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
    overflow: hidden;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

export const Author = styled.span`
    font-style: italic;
`;

export const BookItemButton = styled(CustomButton)`
    opacity: 0;
    transition: all 300ms ease-in;
    border-radius: 5px;
    margin-bottom: 20px;
    transition: all 200ms;

    :hover {
        background-color: black;
        color: #eee;
        transform: scale(1.01)
    }
`;
