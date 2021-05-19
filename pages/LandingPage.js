import React from "react";
import {LandingContainer, Greeting, Introduction, Name, GreetingWrapper} from './Static/LandingStyled';

const LandingPage = () => {

    return (
        <LandingContainer>
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
        </LandingContainer>
    )

}

export default LandingPage;