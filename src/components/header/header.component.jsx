import React from "react";

import {
    HeaderContainer,
    HeaderContent,
    Logo,
    NavItems,
    NavItem,
    NavIcon
} from "./header.styles";

import BackPackIcon from '../backpack-icon/backpack-icon.component';

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo to="/">
                    <i
                        className="far fa-bookmark"
                        style={{ marginRight: "5px" }}
                    ></i>
                    BiblioSym
                </Logo>
                <NavItems>
                    <NavItem to="/">Home</NavItem>
                    <NavItem to="/login">Login</NavItem>
                    <NavIcon><BackPackIcon /></NavIcon>
                </NavItems>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;
