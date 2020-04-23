import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from 'react-router-dom'

import {
    HeaderContainer,
    HeaderContent,
    Logo,
    NavItems,
    NavItem,
    NavIcon,
} from "./header.styles.jsx";
import { selectBackpackHidden } from "../../redux/backpack/backpack.selectors";
import { toggleUserDropdownHidden } from '../../redux/user/user.actions'
import { selectCurrentUser, selectUserDropdownHidden } from "../../redux/user/user.selectors.js";

import BackPackIcon from "../backpack-icon/backpack-icon.component";
import BackpackDropdown from "../backpack-dropdown/backback-dropdown.component";
import UserDropdown from "../user-dropdown/user-dropdown.component.jsx";

const Header = ({ backpackHidden, userDropdownHidden, currentUser, dispatch, history }) => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <Logo to="/">
                    <i
                        className="fas fa-book"
                        style={{ marginRight: "5px" }}
                    ></i>
                    BiblioSym
                </Logo>
                <NavItems>
                    <NavItem to="/">Home</NavItem>
                    {currentUser ?
                        (
                            <>
                                <NavItem as="li" onClick={() => dispatch(toggleUserDropdownHidden())}>{currentUser.name} <i className="fas fa-angle-down"></i></NavItem>
                                {userDropdownHidden ? '' : <UserDropdown />}
                            </>
                        ) :
                        (
                            <NavItem to="/sign">Sign In</NavItem>
                        )
                    }
                    <NavIcon>
                        <BackPackIcon />
                    </NavIcon>
                </NavItems>
            </HeaderContent>
            {backpackHidden ? "" : <BackpackDropdown />}
        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    backpackHidden: selectBackpackHidden,
    currentUser: selectCurrentUser,
    userDropdownHidden: selectUserDropdownHidden
});

export default connect(mapStateToProps)(withRouter(Header));
