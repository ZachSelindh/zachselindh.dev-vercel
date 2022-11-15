import React from 'react';
import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { pages } from './helpers';

const headerStyle = {
    mr: 2,
    display: 'flex',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
    cursor: 'pointer',
};

const boxStyle = { flexGrow: 1, display: { xs: 'none', sm: 'flex' } };

const buttonStyle = { my: 2, color: 'white', display: 'block' };

const Header = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Link href="/">
                        <Typography variant="h6" noWrap sx={headerStyle}>
                            Zach Selindh
                        </Typography>
                    </Link>
                    <Box sx={boxStyle}>
                        {pages.map((page, i) => (
                            <Link key={`${page.value}-${i}`} href={`/${page.value}`}>
                                <Button sx={buttonStyle}>{page.name}</Button>
                            </Link>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
