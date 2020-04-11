import React from 'react';

import './custom-button.styles.jsx';

import { CustomButtonContainer } from './custom-button.styles'

const CustomButton = (props) => {
    return (
        <CustomButtonContainer {...props}>
            {props.children}
        </CustomButtonContainer>
    );
}

export default CustomButton;