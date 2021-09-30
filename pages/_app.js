import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyle} from "../styles/Globals"
import {useEffect, useState} from "react";
import useDarkMode from "use-dark-mode";
import Loader from "./Loader";

function MyApp({Component, pageProps}) {
    const darkMode = useDarkMode(true);
    const theme = darkMode.value ? darkTheme : lightTheme
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(()=>{
            setLoading(false)
        },2600)
    }, []);

    return <ThemeProvider theme={theme}>
        <GlobalStyle/>
        {loading ? <Loader/> : <Component {...pageProps}/>}
    </ThemeProvider>
}

export default MyApp
