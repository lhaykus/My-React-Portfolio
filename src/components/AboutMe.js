import React from 'react';
import { Link } from '@material-ui/core';
import { Avatar, Typography, Box, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Typed from 'react-typed';
import avatar from '../assets/profilepic.jpg';
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
        width: '20rem',
        height: '20rem',
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
                            <br /><br /><br />
                            <Grid item>
                                    <Typography style={{ color: 'white' }} variant='h4' className={classes.text}>A wildly motivated Junior Full-Stack Software Developer specialized in both back and front-end development. 
                                    Starting her journey into the tech world back in 2021, she took a leap and joined the University of Denver Coding Bootcamp and took on the challenge of learning to become a full stack developer 
                                    in 6 months. The bootcamp gave her the knowledge in languages such as <span style={{ color: '#DD1FD1' }} variant='h4'> Javascript, mySQL, noSQL, jQuery,</span> and her 
                                    favorite,<span style={{ color: '#DD1FD1' }} variant='h4'> MERN stack</span>.
                                    <br /><br />
                                     While continuing her education in the world of web development, 
                                    she has been bitten by the game development bug and is currently pursing education in <span style={{ color: '#DD1FD1' }} variant='h4'> C++ and Unreal Engine, Python and Pygame,</span> and is looking forward 
                                    to learning <span style={{ color: '#DD1FD1' }} variant='h4'>C# and Unity</span> as well!
                                    <br /><br />
                                    Along with web and game development, she is also greatly passionate about the automotive and motorsports industry, using her free time studying engines, 
                                    going to races and saving up to one day have a racecar of her own!
                                    <br /><br />
                                    She has a desire to learn, the ability to pick up new skills and apply them in a timely manner! Skills are of course a priority in employment; 
                                    however this developer shows that the desire and ability to adapt and learn new things quickly and efficiently might be the most useful skill one 
                                    can have in this ever changing world of technology. So here is to learning more languages, improving on already acquired knowledge and building 
                                    awesome and world-changing applications!
                                    <br /><br />
                                    <Typography style={{ color: '#1CC1E7' }} variant='h4'> Linked below are links to my Github, Linkedin and my Resume, take a look!</Typography>
                                    </Typography>
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
                    <div style={{ height: 400 }}>
                    </div>
                </Parallax>
                <Skills />
                <Parallax bgImage={lines} strength={600} bgImageStyle={{ height: '800px', width: '2050px' }}>
                    <div style={{ height: 400 }}>
                    </div>
                </Parallax>
                <Footer />
            </section>
        </>
    );
};

export default AboutMe;





