import Head from 'next/head'
import LandingPage from "./LandingPage";
import { HomeContainer } from "./Static/HomeStyled"
import EducExp from "./EducExp";
import Skills from "./skills";
import AboutMe from "./AboutMe"


const Home = () => {
    return (
        <HomeContainer>
            <Head>
                <title>Dimitris Syrros|Frontend-Developer</title>
            </Head>
            <LandingPage />
            <AboutMe />
            <EducExp />
            <Skills />
        </HomeContainer>
    )
}

export default Home;
