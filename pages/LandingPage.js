import React from "react";
import { LandingContainer, Greeting, Introduction, Name } from './Static/LandingStyled';

const LandingPage = () => {

    return (
        <LandingContainer>
                <Greeting>
                    Hi there,
                </Greeting>
            <Introduction>
                <p>I'm</p>
                <Name>Dimitris Syrros</Name>
            </Introduction>
            <p>I make fun things for the web.</p>
        </LandingContainer>
    )

}

export default LandingPage;