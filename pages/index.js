import Head from 'next/head'
import React, {useRef, useEffect} from "react";
import LandingPage from "./LandingPage";
import {HomeContainer} from "../styles/HomeStyled"
import EducExp from "./EducExp";
import AboutMe from "./AboutMe"
import ContactMe from "./ContactMe";
import Navbar from "../components/Navbar/NavBar";
import {GlobalStyle} from "../styles/Globals";
import siteImg from "../public/profile.jpeg"

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
                <meta property="og:image" content={siteImg} key="ogimage" />
                <meta property="og:site_name" content="Dimitris Syrros | Frontend-Developer" key="ogsitename" />
                <meta property="og:title" content="Dimitris Syrros | Frontend-Developer" key="ogtitle" />
                <meta property="og:description" content="This site is a portfolio for Dimitris Syrros. Here you can get information about him,
                     download his resume and get in contact with him." key="ogdesc" />
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
