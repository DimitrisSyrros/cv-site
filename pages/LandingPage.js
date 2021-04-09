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
            <p>I'm a web developer focusing on front‑end technologies <br/> I aspire to always create clean &
                user‑friendly
                experiences,<br/> I am passionate about building excellent software<br/> that improves the lives of
                those around
                me.</p>
        </LandingContainer>
    )

}

export default LandingPage;