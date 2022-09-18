import React from 'react';
import Document, { Head, Html, NextScript, Main } from 'next/document';

//* Import

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href="/assets/images/favicon-16x16.png" />
                    <meta name="theme-color" content="#ffffff" />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
