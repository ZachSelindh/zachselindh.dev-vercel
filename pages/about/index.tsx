import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const AboutPage = () => {
    return (
        <>
            <CardHeader title="About" />
            <CardContent>
                <Typography gutterBottom>
                    Here is where about page data will go
                </Typography>
            </CardContent>
        </>
    );
};

export default AboutPage;
