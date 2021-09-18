import React from 'react';
import {
    Toolbar, AppBar, ListItem, ListItemText, IconButton, Avatar, Divider, List, Typography, Box, ListItemIcon,
    Link, useMediaQuery, useTheme, Tabs, Tab
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Typed from 'react-typed';
import DrawerComponent from './DrawerComponent';
import App from '../App';


// CSS styling
const useStyles = makeStyles({
    listItem: {
        fontWeight: 'bold',
        fontSize: '200%',
        color: 'white',
    },
    menuContainer: {
        width: 250,
        background: '#222',
        height: '30rem'
    }
});


//Creating the navbar 
const Navbar = () => {
    const classes = useStyles();

    //Breakpoints for responsive navbar
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <nav>
            {/* If screen goes down to 'sm' run the drawercomponent function which turns navbar into
            hamburger menu icon OTHERWISE do the normal */}
            {isMatch ? (<DrawerComponent />) : (
                <>
                    <List component='nav' className={classes.list}>
                        <ListItem component='div' className={classes.listItem}>
                            <IconButton>
                                <KeyboardArrowLeftIcon style={{ color: '#25EDE8', fontSize: '200%' }}>
                                </KeyboardArrowLeftIcon>
                            </IconButton>
                            <ListItemText inset>
                                <Typography className={classes.title} variant='h3'>
                                    <Typed strings={["Loryn Haykus"]} typeSpeed={80} />
                                </Typography>
                            </ListItemText>
                            <ListItemText inset>
                                <Typography style={{ color: '#15BDD6' }} variant='title'>
                                    <Link to='/' style={{ color: '#15BDD6' }}>Home</Link>
                                </Typography>
                            </ListItemText>
                            <ListItemText inset>
                                <Typography color='white' variant='title'>
                                <Link to='/aboutme' style={{ color: '#15BDD6' }}>About Me</Link>
                                </Typography>
                            </ListItemText>
                            <ListItemText inset>
                                <Typography style={{ color: '#15BDD6' }} variant='title'>
                                <Link to='/projects' style={{ color: '#15BDD6' }}>Projects</Link>
                                </Typography>
                            </ListItemText>
                            <ListItemText inset>
                                <Typography style={{ color: '#15BDD6' }} variant='title'>
                                <Link to='/contactme' style={{ color: '#15BDD6' }}>Contact Me!</Link>
                                </Typography>
                            </ListItemText>
                            <IconButton>
                                <KeyboardArrowRightIcon style={{ color: '#25EDE8', fontSize: '200%' }}>
                                </KeyboardArrowRightIcon>
                            </IconButton>
                        </ListItem>
                    </List>
                </>
            )}
        </nav>


    );
};

export default Navbar;
