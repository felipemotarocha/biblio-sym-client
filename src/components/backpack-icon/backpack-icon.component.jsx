import React, { Component } from 'react';

import { BackPackIconContainer, BackpackIcon } from './backpack-icon.styles'


class BackPackIcon extends Component {
    state = {}
    render() {
        return (
            <BackPackIconContainer>
                <BackpackIcon />
            </BackPackIconContainer>
        );
    }
}

export default BackPackIcon;