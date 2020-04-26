import React from 'react';
import { withRouter } from 'react-router-dom'

import { Container, Headline, Text } from './successful-checkout.styles'

import CustomButton from '../../components/custom-button/custom-button.component'

const SuccessfulCheckout = ({ history }) => {
    return (
        <Container>
            <i className="far fa-laugh-beam fa-9x"></i>
            <Headline>Congratulations! Everything is right and now you can enjoy your reading. Go to our nearest unit and take your book! <i className="far fa-smile"></i></Headline>
            <Text>We hope you have had a great experience with us. Thank you for your preference!</Text>
            <CustomButton handleClick={() => history.push('/')}>Back to home page</CustomButton>
        </Container>
    );
}

export default withRouter(SuccessfulCheckout);