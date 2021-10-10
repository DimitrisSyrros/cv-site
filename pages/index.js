import Head from 'next/head'
import React, {useRef, useEffect} from "react";
import LandingPage from "./LandingPage";
import {HomeContainer} from "../styles/HomeStyled"
import EducExp from "./EducExp";
import AboutMe from "./AboutMe"
import ContactMe from "./ContactMe";
import Navbar from "../components/Navbar/NavBar";

const Home = () => {
    const homeRef = useRef(null)
    const aboutMeRef = useRef(null)
    const contactRef = useRef(null)
    useEffect(() => {
        window.addEventListener("resize", function () {
            let vh = window.innerHeight * 0.01;
            let vw = window.innerWidth * 0.01;
            if (document.documentElement.style.getPropertyValue('--vw') !== vw.toString()) {
                document.documentElement.style.setProperty('--vh', `${vh}px`);
                document.documentElement.style.setProperty('--vw', `${vw}px`);
            }
        });
        return () => {
            window.removeEventListener("resize", function () {
                let vh = window.innerHeight * 0.01;
                let vw = window.innerWidth * 0.01;
                if (document.documentElement.style.getPropertyValue('--vw') !== vw.toString()) {
                    document.documentElement.style.setProperty('--vh', `${vh}px`);
                    document.documentElement.style.setProperty('--vw', `${vw}px`);
                }
            });
        }
    }, [])
    return (
        <HomeContainer>
            <Head>
                <title>Dimitris Syrros | Frontend-Developer</title>
                <meta name="title" content="Dimitris Syrros | Frontend-Developer"/>
                <meta name="description"
                      content="This site is a portfolio for Dimitris Syrros. Here you can get information about him, download his resume and get in contact with him."/>

                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://www.dsyrros.com/"/>
                <meta property="og:title" content="Dimitris Syrros | Frontend-Developer"/>
                <meta property="og:description"
                      content="This site is a portfolio for Dimitris Syrros. Here you can get information about him, download his resume and get in contact with him."/>
                <meta property="og:image" content="https://www.dsyrros.com/profile.jpeg"/>

                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="https://www.dsyrros.com/"/>
                <meta property="twitter:title" content="Dimitris Syrros | Frontend-Developer"/>
                <meta property="twitter:description"
                      content="This site is a portfolio for Dimitris Syrros. Here you can get information about him, download his resume and get in contact with him."/>
                <meta property="twitter:image" content="https://www.dsyrros.com/profile.jpeg"/>
                <meta property="og:site_name" content="Dimitris Syrros | Frontend-Developer"/>
                <link rel="icon" type="image/svg+xml" href="../favicon.svg"/>
                <link rel="icon" type="image/png" href="../favicon.png"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta charSet="utf-8"/>
            </Head>
            <Navbar refs={{homeRef, aboutMeRef, contactRef}}/>
            <LandingPage ref={homeRef}/>
            <AboutMe/>
            <EducExp ref={aboutMeRef}/>
            <ContactMe ref={contactRef}/>
        </HomeContainer>
    )
}

export default Home;
