import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import {
    HeaderContainer,
    HeaderContent,
    Logo,
    NavItems,
    NavItem,
    NavIcon
} from "./header.styles";
import { selectBackpackHidden } from '../../redux/backpack/backpack.selectors'

import BackPackIcon from '../backpack-icon/backpack-icon.component';
import BackpackDropdown from '../backpack-dropdown/backback-dropdown.component'

const Header = ({ backpackHidden }) => {
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
            {backpackHidden ? '' : <BackpackDropdown />}
        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    backpackHidden: selectBackpackHidden
})

export default connect(mapStateToProps)(Header);
