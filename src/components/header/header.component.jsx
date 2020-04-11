import React from "react";

import {
    HeaderContainer,
    HeaderContent,
    Logo,
    NavItems,
    NavItem,
} from "./header.styles";

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
                </NavItems>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;
