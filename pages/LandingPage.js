import React, {forwardRef} from "react";
import {LandingContainer, Greeting, Introduction, Name, GreetingWrapper, BackgroundOverlay} from '../styles/LandingStyled';

const LandingPage = forwardRef((props,ref) => {

    return (
        <LandingContainer ref={ref}>
            <BackgroundOverlay>
                <GreetingWrapper>
                    <Greeting>
                        Hi there,
                    </Greeting>
                    <Introduction>
                        <Name>I'm</Name>
                        <Name className="yellow">Dimitris Syrros</Name>
                    </Introduction>
                    <p>I make fun things for the web.</p>
                </GreetingWrapper>
            </BackgroundOverlay>
        </LandingContainer>
    )

})

export default LandingPage;