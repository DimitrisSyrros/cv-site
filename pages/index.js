import Head from 'next/head'
import LandingPage from "./LandingPage";
import { HomeContainer } from "./Static/HomeStyled"
import EducExp from "./EducExp";
import Skills from "./skills";
import AboutMe from "./AboutMe"
import ContactMe from "./ContactMe";
import Navbar from "../components/Navbar/NavBar";


const Home = () => {
    return (
        <HomeContainer>
            <Head>
                <title>Dimitris Syrros|Frontend-Developer</title>
            </Head>
            <Navbar/>
            <LandingPage />
            <AboutMe />
            <EducExp />
            <Skills />
            <ContactMe />
        </HomeContainer>
    )
}

export default Home;
