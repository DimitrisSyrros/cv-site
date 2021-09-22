import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyle} from "../styles/Globals"
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import useDarkMode from "use-dark-mode";
import Loader from "./Loader";

function MyApp({Component, pageProps}) {
    const darkMode = useDarkMode(true);
    const theme = darkMode.value ? darkTheme : lightTheme
    const router = useRouter()
    const [loading, setLoading] = useState(true)

    useEffect(() => { //<-- this useEffect will be triggered just one time at component initialization
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
