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
                <Logo>
                    <i
                        className="far fa-bookmark"
                        style={{ marginRight: "5px" }}
                    ></i>
                    BiblioSym
                </Logo>
                <NavItems>
                    <NavItem>Home</NavItem>
                    <NavItem>Login</NavItem>
                </NavItems>
            </HeaderContent>
        </HeaderContainer>
    );
};

export default Header;
