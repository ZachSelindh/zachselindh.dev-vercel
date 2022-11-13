import React from 'react';
import type { FC, ReactElement } from 'react';
import type { Theme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Header from './Header';
import Footer from './Footer';
import MobileFooter from './MobileFooter';

const styles = {
    paperContainer: {
        // backgroundImage: `url(/images/wacobridge.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        minHeight: 800,
    },
};

const Layout: FC<{ children: ReactElement }> = ({ children }) => {
    const isNotSmall = useMediaQuery((theme: Theme) => theme.breakpoints.up('sm'));

    return (
        <>
            <Header />
            <Paper style={styles.paperContainer}>
                <Container sx={{ pt: 3, pb: 5 }} maxWidth="md">
                    <Card sx={{ minHeight: '35vh' }} variant="outlined">
                        {children}
                    </Card>
                </Container>
            </Paper>
            {isNotSmall ? <Footer /> : <MobileFooter />}
        </>
    );
};

export default Layout;
