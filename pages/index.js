import Head from 'next/head'
import React, {useRef} from "react";
import LandingPage from "./LandingPage";
import {HomeContainer} from "../styles/HomeStyled"
import EducExp from "./EducExp";
import Skills from "./skills";
import AboutMe from "./AboutMe"
import ContactMe from "./ContactMe";
import Navbar from "../components/Navbar/NavBar";
import {GlobalStyle} from "../styles/Globals"

const Home = () => {
    const homeRef = useRef(null)
    const aboutMeRef = useRef(null)
    const contactRef = useRef(null)
    return (
        <HomeContainer>
            <GlobalStyle/>
            <Head>
                <title>Dimitris Syrros|Frontend-Developer</title>
            </Head>
            <Navbar refs={{homeRef,aboutMeRef,contactRef}}/>
            <LandingPage ref={homeRef}/>
            <AboutMe/>
            <EducExp ref={aboutMeRef}/>
            <Skills/>
            <ContactMe ref={contactRef}/>
        </HomeContainer>
    )
}

export default Home;
