import Head from 'next/head'
import React, {useRef, useEffect} from "react";
import LandingPage from "./LandingPage";
import {HomeContainer} from "../styles/HomeStyled"
import EducExp from "./EducExp";
import AboutMe from "./AboutMe"
import ContactMe from "./ContactMe";
import Navbar from "../components/Navbar/NavBar";
import {GlobalStyle} from "../styles/Globals";

const Home = () => {
    const homeRef = useRef(null)
    const aboutMeRef = useRef(null)
    const contactRef = useRef(null)
    useEffect(() => {
        window.addEventListener("resize", function () {
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            let vw = window.innerWidth * 0.01;
            document.documentElement.style.setProperty('--vw', `${vw}px`);
        });
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        let vw = window.innerWidth * 0.01;
        document.documentElement.style.setProperty('--vw', `${vw}px`);
    }, [])
    return (
        <HomeContainer>
            <GlobalStyle/>
            <Head>
                <title>Dimitris Syrros | Frontend-Developer</title>
                <meta property="og:url" content="www.dsyrros.com" key="ogurl" />
                <meta property="og:image" content="/public/profile.jpeg" key="ogimage" />
                <meta property="og:site_name" content="Dimitris Syrros | Frontend-Developer" key="ogsitename" />
                <meta property="og:title" content="Dimitris Syrros | Frontend-Developer" key="ogtitle" />
                <meta property="og:description" content="This site is a portfolio for Dimitris Syrros." key="ogdesc" />
                <link rel="icon" type="image/svg+xml" href="/public/assets/favicon.svg"/>
                <link rel="icon" type="image/png" href="/public/assets/favicon.png"/>
                <meta name="description" content="This site is a portfolio for Dimitris Syrros."/>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            <Navbar refs={{homeRef,aboutMeRef,contactRef}}/>
            <LandingPage ref={homeRef}/>
            <AboutMe/>
            <EducExp ref={aboutMeRef}/>
            <ContactMe ref={contactRef}/>
        </HomeContainer>
    )
}

export default Home;
