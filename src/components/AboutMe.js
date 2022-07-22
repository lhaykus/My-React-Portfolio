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
                                <Typography style={{ color: 'white' }} variant='h4' className={classes.text}>Hello! I am Loryn Haykus, a wildly motivated full stack developer who loves everything gaming,
                                    fantasy and technology. Being enrolled in the DU Coding
                                    Bootcamp in Denver, Colorado I have gained skills to bring
                                    data to life and build web pages and apps from scratch. I
                                    have gained skills in front-end and back-end development
                                    including  <span style={{ color: '#DD1FD1' }} variant='h4'> HTML, CSS, Javascript, Node.js, MySQL,
                                        NoSQL, MongoDB, Mongoose, React </span> and look forward to
                                    learning even more! My ability to learn quickly, my love for
                                    overcoming challenges and the satisfaction of bringing
                                    numbers and data to life is what drives me!
                                    <br /> <br />While continuing my 
                                    knowledge in web development I have been bitten by the game development bug and am pursuing education
                                    in <span style={{ color: '#DD1FD1' }} variant='h4'> C++ and Unreal Engine, Python and Pygame </span> and look forward to extending my knowledge to C# and Unity in the 
                                    future!
                                    <br />
                                    <br /><br /><br />
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





