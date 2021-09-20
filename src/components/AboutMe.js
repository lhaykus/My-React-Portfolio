import React from 'react';
import { Link } from '@material-ui/core';
import { Avatar, Typography, Box, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Typed from 'react-typed';
import avatar from '../assets/me2.jpg';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { EmailOutlined } from '@material-ui/icons';
import resume from '../assets/CodingResume2.pdf';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import Skills from '../components/Skills';
import { Parallax } from 'react-parallax';
import lines from '../assets/lines.jpg';
import Footer from '../components/Footer';

//styling for the about me section
const useStyles = makeStyles(theme => ({
    aboutTitle: {
        color: "#801BEB",
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
    },
    link: {
        alignItems: 'center',
        padding: '5px',
        fontSize: 'large'
    }
}));


//About me section
const AboutMe = () => {
    //Creating variable to target styling
    const classes = useStyles();
    return (
        <>
            <section id='aboutme'>
                <Container component='div'>
                    <br /> <br /><br /> <br /><br /> <br />
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
                                    <Typography style={{ color: '#DD1FD1' }} variant='h4'>HTML, CSS, Javascript, jQuery, Node.js, Express.js, mySQL,
                                    MongoDB, Mongoose, React, and sequelize. </Typography>Video games and computers have always played
                                    a big part in my life so becoming a software developer is
                                    quite exciting for me. Other than coding and video games,
                                    I have a huge love for cars and racing, as well as nature
                                    and animals. This portfolio is the just the beginning of my journey
                                    and I am excited to add projects over the years! Linked below are links to my Github, Linkedin and my Resume, take a look!</Typography>
                                <br /> <br />
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
                                <br /> <br /> <br /> <br />
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
                <Parallax bgImage={lines} strength={600} bgImageStyle={{ height: '800px', width: '2050px' }}>
                    <div style={{ height: 500 }}>
                    </div>
                </Parallax>
                <Skills />
                <Parallax bgImage={lines} strength={600} bgImageStyle={{ height: '800px', width: '2050px' }}>
                    <div style={{ height: 500 }}>
                    </div>
                </Parallax>
                <Footer />
            </section>
        </>
    );
};

export default AboutMe;





