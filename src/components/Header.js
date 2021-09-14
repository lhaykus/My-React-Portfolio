import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import Typed from 'react-typed';
import avatar from '../assets/avatar.jpg';
import hero from '../assets/heroimage.jpg';


//CSS styling
const useStyles = makeStyles(theme => ({
    title: {
        color: "white",
        fontWeight: 'bold',
        backgroundColor: 'transparent'
    },
    subtitle: {
        color: '#DD1FD1',
        marginBottom: '3rem',
        fontWeight: 'bold'
    },

    hero: {
        backgroundImage: `url('https://img5.goodfon.com/wallpaper/nbig/7/1d/tansie-stephens-by-tansie-stephens-systemic-recharge.jpg') `,
        height: '800px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '5px'
    },
    typedContainer: {
        zIndex: 1,
        textAlign: 'center',
       

    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid className={classes.hero} src={hero}> 
            <Typography className={classes.title} variant='h2'>
                <Typed strings={["Loryn Haykus"]} typeSpeed={40} />
            </Typography>
            <br />
            <Typography className={classes.subtitle} variant='h3'>
                <Typed strings={["Software Developer", "Front-End", "Back-end"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop />
            </Typography>
            </Grid>
            <br/>
        </Box>
      
    );
};

export default Header;
