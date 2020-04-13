import styled from 'styled-components';

export const BackpackItemContainer = styled.div`
    display: flex;
    height: 75px;
    width: 100%;
    color: black;
    margin: 10px 0;
`

export const Image = styled.img`
    display: inline-block;
    height: auto;
    width: 60px;
    border-radius: 2px;
    -webkit-box-shadow: 1px 0px 6px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 0px 6px 0px rgba(0,0,0,0.75);
    box-shadow: 1px 0px 6px 0px rgba(0,0,0,0.75);
`

export const BookInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 5px;
    overflow: hidden;
`

export const Title = styled.span`
    font-size: 0.8rem;
    font-weight: bold;
    text-overflow: ellipsis;
    overflow: hidden;
   -webkit-line-clamp: 2; /* number of lines to show */
   -webkit-box-orient: horizontal;
`

export const Author = styled.span`
    font-style: italic;
    font-size: 0.6rem;
`
