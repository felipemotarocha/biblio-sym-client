import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { Container, Item } from './user-dropdown.styles'

import { userSignOutFetch, toggleUserDropdownHidden } from '../../redux/user/user.actions'

const UserDropdown = ({ dispatch, history }) => {
    return (
        <Container>
            <Item><i className="fas fa-book" /> My Books</Item>
            <Item onClick={() => {
                dispatch(userSignOutFetch());
                dispatch(toggleUserDropdownHidden());
                history.push('/')
            }}><i className="fas fa-sign-out-alt" /> Sign Out</Item>
        </Container>
    );
}

export default connect()(withRouter(UserDropdown));