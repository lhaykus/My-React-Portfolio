import React from 'react';
import {
    AppBar, Toolbar, ListItem, ListItemText, IconButton,
    Avatar, Divider, List, Typography, Box, Container, Grid
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Typed from 'react-typed';
import avatar from '../assets/avatar.jpg';

//styling for the about me section
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
    avatar: {
        display: 'flex',
        alignItems: 'flex-start',
        margin: '0.5rem auto',
        width: '30rem',
        height: '30rem',
       



    }
}));


//About me section
const AboutMe = () => {
    const classes = useStyles();
    return (
        <>
    <section id='aboutme'>
            <Container component='div'>
            <br/> <br/><br/> <br/><br/> <br/>
                    <Typography variant='h2' align='center' className={classes.aboutTitle}>
                        <Typed strings={["About Me"]} typeSpeed={80} />
                        <br /><br />
                    </Typography>
                <Grid container>
                    <Grid item xs>
                        <Grid container direction='flex-start'>
                            <Grid item> <Avatar className={classes.avatar} src={avatar} alt='Me' /></Grid>
                        </Grid>
                        <Grid item>
                            <Typography style={{ color: 'white' }} variant='h4' className={classes.text}>Hello! I am Loryn Haykus and welcome to my portfolio
                                where I get to showcase all the work I have done on my
                                journey of becoming a full stack software developer!
                                Attending the Coding Bootcamp at University of Denver,
                                I have gained a multitude of both frontend and backend
                                skills to create apps from scratch. My knowledge includes
                                <Typography style={{ color: '#DD1FD1' }} variant='h4'>HTML, CSS, Javascript, jQuery, Node.js, Express.js, mySQL
                                    and sequelize. </Typography>Video games and computers have always played
                                a big part in my life so becoming a software developer is
                                quite exciting for me. Other than coding and video games,
                                I have a huge love for cars and racing, as well as nature
                                and animals. This portfolio is the just the beginning of my journey and I am excited to add projects over the years!</Typography>
                                <br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/><br/> <br/>
                        </Grid>


                    </Grid>
                </Grid>
                
            </Container>
     </section>
</>




            
    )
}

export default AboutMe;





