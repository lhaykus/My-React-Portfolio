import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import Typed from 'react-typed';
import { Parallax } from 'react-parallax';
import scifi from '../assets/scfi.jpg';
import Footer from './Footer';
import lines from '../assets/lines.jpg';


//CSS styling
const useStyles = makeStyles(theme => ({
    title: {
        color: "white",
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#DD1FD1',
        fontWeight: 'bold',
        textAlign: 'center', 
    },
    typedContainer: {
        zIndex: 1,
        textAlign: 'center',
    }, 
    parallax: {
        height: '1000px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        
    },
    name: {
        display: 'flex',
        justifyContent: 'center',
        color: '#BC25EC',
        fontWeight:'bold',
      
    },
}));

const Home = () => {
    const classes = useStyles();

    return (
        <section id='home'>
        <Box className={classes.typedContainer}>
            <Grid>
             <Parallax className={classes.parallax} bgImage={scifi} strength={200} bgImageStyle={{height:'1000px', width:'2050px'}} >
        <div> 
            <Typography className={classes.name} variant='h3'>Loryn Haykus</Typography>
            <br/>
            <Typography className={classes.title} variant='h1'>
            Software Developer
            </Typography>
            {/* Using typed to create an animation on the text */}
            <Typography className={classes.subtitle} variant='h3'>
                <Typed strings={["Coder", "Nerd", "Gamer", "Passionate", 'Determined']}
                    typeSpeed={80}
                    backSpeed={60}
                    loop />
            </Typography>
        </div>
            </Parallax>
            
                
            <Footer />
            </Grid>
        </Box>
        </section>

    );
};

export default Home;
