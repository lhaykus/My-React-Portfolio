import React from 'react';
import {
    AppBar, Toolbar, ListItem, ListItemText, IconButton,
    Avatar, Divider, List, Typography, Box
} from '@material-ui/core';
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import { withStyles } from '@material-ui/styles';
import Typed from 'react-typed';

//styling for the about me section
const useStyles = makeStyles(theme => ({
    aboutTitle: {
        color: "#29C5C2",
        fontWeight: 'bold',
        padding: '5px'
    },
    text: {
        fontSize: '150%',
        color: 'white',
        alignItems: 'center'
    }
}));

const whiteTextTypography = withStyles({
    root: {
        color:'white',
        fontSize: '200%',
        alignItems: 'center'
    }
})(Typography);

//About me section
const AboutMe = () => {
    const classes = useStyles();
    return (
        <section component='title'>
            <Typography variant='h2' align='center' className={classes.aboutTitle}>
                <Typed strings={["About Me"]} typeSpeed={80} />
                <br/><br/>
            </Typography>
            <Typography style={{ color: 'white' }} variant='h4'>Hello! I am Loryn Haykus and welcome to my portfolio
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




        </section>
    )
}

export default AboutMe;





