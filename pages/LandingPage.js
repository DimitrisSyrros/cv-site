import React from "react";
import {LandingContainer, Greeting, Introduction, Name, GreetingWrapper, BackgroundOverlay} from './Static/LandingStyled';

const LandingPage = () => {

    return (
        <LandingContainer>
            <BackgroundOverlay>
                <GreetingWrapper>
                    <Greeting>
                        Hi there,
                    </Greeting>
                    <Introduction>
                        <p>I'm</p>
                        <Name>Dimitris Syrros</Name>
                    </Introduction>
                    <p>I make fun things for the web.</p>
                </GreetingWrapper>
            </BackgroundOverlay>
        </LandingContainer>
    )

}

export default LandingPage;