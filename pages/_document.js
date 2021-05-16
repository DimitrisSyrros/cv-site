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
                        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,800;1,100;1,800&display=swap" rel="stylesheet"/>
                </Head>
                <body>
                <Main/>
                <div id="modal-root"></div>
                <NextScript/>
                </body>
            </Html>
    );
    }
    }