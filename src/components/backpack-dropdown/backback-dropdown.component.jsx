import React, { Component } from 'react';

import { BacpackDropdownContainer, Headline, Button } from './backback-dropdown.styles'

class BackpackDropdown extends Component {
    state = {}
    render() {
        return (
            <BacpackDropdownContainer>
                <Headline>your backpack</Headline>
                <Button>GO TO CHECKOUT</Button>
            </BacpackDropdownContainer>
        );
    }
}

export default BackpackDropdown;