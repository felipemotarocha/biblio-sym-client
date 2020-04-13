import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux'

import { BacpackDropdownContainer, Headline, Button, Books, InfoText } from './backback-dropdown.styles'
import { selectBackpackBooks } from '../../redux/backpack/backpack.selectors'

import BackpackItem from '../backpack-item/backpack-item.component';

const BackpackDropdown = ({ backpackBooks }) => {
    return (
        <BacpackDropdownContainer>
            <Headline>your backpack</Headline>
            <InfoText>(click on the book to remove)</InfoText>
            <Books>
                {backpackBooks.map(({ ...props }) => <BackpackItem {...props} />)}
            </Books>
            <Button>GO TO CHECKOUT</Button>
        </BacpackDropdownContainer>
    );
}

const mapStateToProps = createStructuredSelector({
    backpackBooks: selectBackpackBooks
})

export default connect(mapStateToProps)(BackpackDropdown);