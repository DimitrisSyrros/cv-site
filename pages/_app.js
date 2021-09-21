import {ThemeProvider} from "styled-components";
import {lightTheme, darkTheme, GlobalStyle} from "../styles/Globals"

import useDarkMode from "use-dark-mode";

function MyApp({Component, pageProps}) {
    const darkMode = useDarkMode(true);
    const theme = darkMode.value ? darkTheme : lightTheme


    return <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Component {...pageProps}
        /></ThemeProvider>
}

export default MyApp
