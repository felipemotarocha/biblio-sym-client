import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
    width: 100%;
    height: 70px;
    background: #111;
    color: #fff;
    padding: 8px;
    box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.5);
    position: sticky;
    top: 0;
    opacity: 98%;
`;

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: 100%;
    margin: auto;
`;

export const Logo = styled(Link)`
    font-weight: bold;
    text-decoration: none;
    color: inherit;
    font-size: 1.7rem;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-family: "Montserrat", sans-serif;
    transition: all 300ms;
`;

export const NavItems = styled.ul`
    display: flex;
    list-style: none;
    font-size: 1rem;
    align-items: center;
`;

export const NavItem = styled(Link)`
    text-decoration: none;
    color: inherit;
    padding: 0 15px;
    transition: color 300ms;

    :hover {
        cursor: pointer;
        color: #0092ca;
    }
`;

export const NavIcon = styled.li`
    padding: 0 20px;

    :hover {
        cursor: pointer;
    }
`;
