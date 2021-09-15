import React from 'react';
import {
    AppBar, Toolbar, ListItem, ListItemText, IconButton,
    Avatar, Divider, List, Typography, Box, Container, Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Typed from 'react-typed';

//CSS styling 
const useStyles = makeStyles(theme => ({
    aboutTitle: {
        color: "#29C5C2",
        fontWeight: 'bold',
        padding: '5px'
    },
    text: {
        fontSize: '200%',
        color: 'white',
        textAlign: 'center'

    },
}));

const ContactMe = () => {
    const classes = useStyles();
    return (
        <section id='contactme'>
            <Container component='div'>
            <br/> <br/><br/> <br/><br/> <br/>
                    <Typography variant='h2' align='center' className={classes.aboutTitle}>
                        <Typed strings={["Contact Me"]} typeSpeed={80} />
                        <br /><br />
                    </Typography>
        </Container>
        </section>
    )
}

export default ContactMe;
