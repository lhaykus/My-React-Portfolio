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
        textAlign: 'right', 
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
    }
}));

const Home = () => {
    const classes = useStyles();

    return (
        <Box className={classes.typedContainer}>
            <Grid>
             <Parallax className={classes.parallax} bgImage={scifi} strength={200} bgImageStyle={{height:'1000px', width:'2050px'}} >
        <div> 
            <Typography className={classes.title} variant='h1'>
                <Typed strings={["Software Developer" ]} typeSpeed={80} />
            </Typography>
            {/* Using typed to create an animation on the text */}
            <Typography className={classes.subtitle} variant='h2'>
                <Typed strings={["Coder", "Nerd", "Gamer", "Passionate", 'Determined']}
                    typeSpeed={80}
                    backSpeed={60}
                    loop />
            </Typography>
        </div>
            </Parallax>
            <Parallax bgImage={lines} strength={600} bgImageStyle={{ height: '800px', width: '2050px' }}>
                    <div style={{ height: 500 }}>
                    </div>
                </Parallax>
            <Footer />
            </Grid>
        </Box>

    );
};

export default Home;
