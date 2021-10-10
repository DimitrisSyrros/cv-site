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
            <Navbar refs={{homeRef, aboutMeRef, contactRef}}/>
            <LandingPage ref={homeRef}/>
            <AboutMe/>
            <EducExp ref={aboutMeRef}/>
            <ContactMe ref={contactRef}/>
        </HomeContainer>
    )
}

export default Home;
