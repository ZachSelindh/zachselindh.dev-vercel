import React from 'react';
import type { NextPage } from 'next';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const AboutPage: NextPage = () => {
    return (
        <>
        <CardActions>
            <a href="https://github.com/ZachSelindh" target="_blank" rel="noreferrer">
                <Button startIcon={<GitHubIcon />}>Github</Button>
            </a>
            <a href="https://www.linkedin.com/in/zachselindh/" target="_blank" rel="noreferrer">
                <Button startIcon={<LinkedInIcon />}>LinkedIn</Button>
            </a>
        </CardActions>
        <CardHeader title="About Me" />
        <CardContent>
            <Typography variant='h6' gutterBottom>
                My name is Zach Selindh and I am a web developer with years of experience building small-to-large applications to meet a huge range of business needs.
            </Typography>
            <Typography gutterBottom>
                Test
            </Typography>
        </CardContent>
    </>
    );
};

export default AboutPage;
