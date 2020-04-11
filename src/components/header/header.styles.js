import styled from "styled-components";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    background: #111;
    color: #fff;
    padding: 8px;
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 100%;
    margin: auto;
`;

export const Logo = styled.span`
    font-weight: bold;
    font-size: 1.6rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-family: "Montserrat", sans-serif;
    transition: all 300ms;

    :hover {
        cursor: pointer;
        color: #0092ca;
    }
`;

export const NavItems = styled.ul`
    display: flex;
    list-style: none;
    font-size: 1rem;
    text-transform: uppercase;
`;

export const NavItem = styled.li`
    padding: 0 20px;
    transition: color 300ms;

    :hover {
        cursor: pointer;
        color: #0092ca;
    }
`;
