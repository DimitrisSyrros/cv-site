import React, {forwardRef, useContext} from "react";
import {LandingContainer, Greeting, Introduction, Name, GreetingWrapper, BackgroundOverlay} from '../styles/LandingStyled';
import {ThemeContext} from "styled-components"
const LandingPage = forwardRef((props,ref) => {
    const themeContext = useContext(ThemeContext);

    return (
        <LandingContainer ref={ref} background={themeContext.background}>
            <BackgroundOverlay>
                <GreetingWrapper>
                    <Greeting>
                        Hi there,
                    </Greeting>
                    <Introduction>
                        <Name>I'm</Name>
                        <Name className="yellow">Dimitris Syrros</Name>
                    </Introduction>
                    <p style={{color:themeContext.greetingColor}}>I make fun things for the web.</p>
                </GreetingWrapper>
            </BackgroundOverlay>
        </LandingContainer>
    )

})

export default LandingPage;