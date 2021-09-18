import React from 'react';
import { Typography, Box, Container, Grid, CardContent, Card, TextField, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import resume from '../assets/CodingResume2.pdf';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

//CSS styling 
const useStyles = makeStyles(theme => ({

    footer: {
        textAlign: 'center',
        textDecoration: 'none',
        color: '#1CC1E7',
        marginTop: '20px',
        fontSize: '120%'
    }
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <section container className={classes.footer}>
            <Container align='center' fontSize='large' margin='5px'>
                <Link href='https://github.com/lhaykus' className={classes.link} target="_blank" fontSize='large'>
                    <GitHubIcon style={{ color: '#1CC1E7', fontSize: '800%', padding: '20px' }} />
                </Link>
                <Link href='https://www.linkedin.com/in/loryn-haykus/' className={classes.link} target="_blank">
                    <LinkedInIcon style={{ color: '#801BEB', fontSize: '800%', padding: '20px' }} />
                </Link>
                <Link href={resume} className={classes.link} target="_blank">
                    <FileCopyIcon style={{ color: "#D714EA", fontSize: '800%', padding: '20px' }} />
                </Link>
            </Container>
            <div>@
                <Link className={classes.footer} href='https://github.com/lhaykus' target='_blank'>DragonWhisperer</Link>
                <p style={{ color: 'white' }}>Cover Artwork created by and credited to <a style={{ color: 'white' }} href="https://twitter.com/Hybridgothica" target='_blank'>Hybridgothica</a></p>
            </div>
        </section>
    )
}

export default Footer;
