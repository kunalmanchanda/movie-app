import React from 'react'

import HeaderContainer from '../containers/Header'
import OptForm from '../components/OptForm'
import Feature from '../components/Feature'
import JumbotronContainer from '../containers/Jumbotron'
import FaqsContainer from '../containers/Faq'
import FooterContainer from '../containers/Footer'

const home = () => {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Unlimited films, TV programmes and more.</Feature.Title>
                    <Feature.SubTitle>Watch anywhere. Cancel at any time.</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button>Try it now</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Ready to watch? Enter your email to create or restart your membership.</OptForm.Text>
                    </OptForm>
                </Feature> 
            </HeaderContainer>
            <JumbotronContainer/>
            <FaqsContainer/> 
            <FooterContainer/>
        </>
    )
}

export default home
