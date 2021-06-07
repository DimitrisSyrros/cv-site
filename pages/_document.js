import Document, {Html, Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';

export default class MyDocument extends Document {
    static getInitialProps({renderPage}) {
        const sheet = new ServerStyleSheet();
        const page = renderPage((App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        );
        const styleTags = sheet.getStyleElement();
        return {...page, styleTags};
    }

    render() {
        return (
            <Html>
                <Head>
                    {this.props.styleTags}
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700&display=swap" rel="preload"/>
                    <meta name="description" content="This site is a portfolio for Dimitris Syrros. Here you can get information about him,
                     download his resume and get in contact with him."/>
                    <title>Dimitris Syrros | Frontend Developer</title>
                </Head>
                <body>
                <Main/>
                <div id="modal-root"/>
                <NextScript/>
                </body>
            </Html>
    );
    }
    }