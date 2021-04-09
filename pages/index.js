import Head from 'next/head'
import Navbar from '../components/Navbar/NavBar'
import AboutMe from "./about-me";
import LandingPage from "./LandingPage";
import { HomeContainer } from "./Static/HomeStyled"


const Home = () => {

    return (
        <HomeContainer>
            <Head>
                <title>Dimitris Syrros|Frontend-Developer</title>
            </Head>
            <Navbar/>
            <LandingPage />
            <AboutMe />
        </HomeContainer>
    )

}

export default Home;
