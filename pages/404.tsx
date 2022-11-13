import React from 'react';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const NotFoundPage = () => {
    return (
        <>
            <CardHeader title="Not Found" />
            <CardContent>
                <Typography gutterBottom>
                Sorry, looks like you requested a page that does not exist!
                </Typography>
            </CardContent>
        </>
      
    );
};

export default NotFoundPage;