import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const paperFooterStyles = {
    position: 'relative',
    display: 'flex',
    flex: 1,
    padding: '1.5rem 0',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
};

const Footer = () => {
    return (
        <Paper sx={paperFooterStyles} component="footer" square variant="outlined">
            <Typography>All rights reserved, Zach Selindh 2022</Typography>
        </Paper>
    );
};

export default Footer;
