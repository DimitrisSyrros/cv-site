import {useState} from "react"
import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyle, ThemeIcon} from "../styles/Globals"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-regular-svg-icons";

function MyApp({Component, pageProps}) {
    const [theme, setTheme] = useState("dark")

    const toggleTheme = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light')
    }


    return <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle/>
        <FontAwesomeIcon onClick={toggleTheme} icon={theme === 'light' ? faMoon : faSun} style={{
            position: "fixed",
            zIndex: "2000",
            top: "12vh",
            left: "2vw",
            fontSize: "1.2rem",
            cursor: "pointer",
        }}/>
        <Component {...pageProps}
        /></ThemeProvider>
}

export default MyApp
