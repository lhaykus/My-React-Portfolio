import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Grid, Box } from '@material-ui/core';
import Typed from 'react-typed';
import avatar from '../assets/avatar.jpg';
import hero from '../assets/heroimage.jpg';
import { Parallax } from 'react-parallax';
import scifi from '../assets/scfi.jpg';


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

   // hero: {
     //   backgroundImage: `url('https://img5.goodfon.com/wallpaper/nbig/7/1d/tansie-stephens-by-tansie-stephens-systemic-recharge.jpg') `,
      //  height: '1000px',
      //  backgroundPosition: 'center',
      //  backgroundRepeat: 'no-repeat',
      //  backgroundSize: 'cover',
      //  position: 'relative',
      //  display: 'flex',
      //  justifyContent: 'center',
      //  alignItems: 'center',
       
  //  },
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

const Header = () => {
    const classes = useStyles();
    return (
        
        <Box className={classes.typedContainer}>
            <Grid>
                
             <Parallax className={classes.parallax} bgImage={scifi} strength={200} bgImageStyle={{height:'1000px', width:'2050px'}} >
        <div> 
            <Typography className={classes.title} variant='h2'>
                <Typed strings={["Loryn Haykus Software Developer" ]} typeSpeed={80} />
            </Typography>
            <Typography className={classes.subtitle} variant='h3'>
                <Typed strings={["Coder", "Nerd", "Gamer", "Passionate", 'Determined']}
                    typeSpeed={80}
                    backSpeed={60}
                    loop />
            </Typography>
        </div>
        
            
            
            
            </Parallax>
            </Grid>
       
           
        </Box>
      
    );
};

export default Header;
