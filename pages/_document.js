import Document, {Html, Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import React from "react";

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) =>
                        sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }


    render() {
        return (
            <Html lang="en">
                <Head>
                    {this.props.styleTags}
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;700&display=swap" rel="stylesheet"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com"/>
                        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;500&display=swap" rel="stylesheet"/>
                    <title>Dimitris Syrros | Frontend-Developer</title>
                    <meta name="title" content="Dimitris Syrros | Frontend-Developer"/>
                    <meta name="description"
                          content="This site is a portfolio for Dimitris Syrros. Here you can get information about him, download his resume and get in contact with him."/>

                    <meta property="og:type" content="website"/>
                    <meta property="og:url" content="https://www.dsyrros.com/"/>
                    <meta property="og:title" content="Dimitris Syrros | Frontend-Developer"/>
                    <meta property="og:description"
                          content="This site is a portfolio for Dimitris Syrros. Here you can get information about him, download his resume and get in contact with him."/>
                    <meta property="og:image" content="../profile.jpeg"/>

                    <meta property="twitter:card" content="summary_large_image"/>
                    <meta property="twitter:url" content="https://www.dsyrros.com/"/>
                    <meta property="twitter:title" content="Dimitris Syrros | Frontend-Developer"/>
                    <meta property="twitter:description"
                          content="This site is a portfolio for Dimitris Syrros. Here you can get information about him, download his resume and get in contact with him."/>
                    <meta property="twitter:image" content="../profile.jpeg"/>
                    <meta property="og:site_name" content="Dimitris Syrros | Frontend-Developer"/>
                    <link rel="icon" type="image/svg+xml" href="../favicon.svg"/>
                    <link rel="icon" type="image/png" href="../favicon.png"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <meta charSet="utf-8"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
    );
    }
    }