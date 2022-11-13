import React from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Layout from '../components/Layout';
import '../styles/globals.css';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Zach Selindh</title>
                <meta name="description" content="Web Developer" />
                <link rel="icon" href="/favicon.ico" />
                {/* <link rel="manifest" href="/manifest.json" /> */}
                {/* <link rel="apple-touch-icon" href="//imagesapple-touch-icon.png"></link> */}
                <meta name="theme-color" content="#fff" />
            </Head>
            <ThemeProvider theme={darkTheme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
};

export default MyApp;
