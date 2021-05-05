import Head from 'next/head'
import Navbar from '../components/Navbar/NavBar'
import LandingPage from "./LandingPage";
import { HomeContainer } from "./Static/HomeStyled"
import EducExp from "./EducExp";
import Skills from "./skills";


const Home = () => {
    return (
        <HomeContainer>
            <Head>
                <title>Dimitris Syrros|Frontend-Developer</title>
            </Head>
            <Navbar/>
            <LandingPage />
            <EducExp />
            <Skills />
        </HomeContainer>
    )
}

export default Home;
