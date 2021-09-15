import React from 'react';
import {AppBar, Toolbar, ListItem, ListItemText, IconButton, 
Avatar, Divider, List, Typography, Box, ListItemIcon, Link} from '@material-ui/core';
import {ArrowBack, AssignmentInd, Home, Apps, ContactMail, FilterVintage} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


// CSS styling
const useStyles = makeStyles({
    listItem: {
       fontWeight: 'bold',
       fontSize: '200%',
       color: 'white',
       
    },
    menuContainer: {
        width:250,
        background: '#222',
        height: '30rem'
    }
     
});



//Creating the navbar 
const Navbar = () => {
    const classes = useStyles();
    return (
    
        <List component='nav' className={classes.list}>
            <ListItem component='div' className={classes.listItem}>
                <IconButton>
                    <KeyboardArrowLeftIcon style={{color:'#25EDE8', fontSize:'200%'}}>
                    </KeyboardArrowLeftIcon>
                </IconButton>
            <ListItemText inset>
                    <Typography color='inherit' variant='title'>
                        Loryn Haykus
                    </Typography>
                </ListItemText>
                <ListItemText inset>
                <Typography color='theme' variant='title'>
                        <Link href='#aboutme' color='white'>
                        About Me
                        </Link>
                    </Typography>
                </ListItemText>
                <ListItemText inset>
                <Typography color='#BD1CE7' variant='title'>
                        <Link href='#projects' color='#BD1CE7'>
                        Projects
                        </Link>
                    </Typography>
                </ListItemText>
                <ListItemText inset>
                <Typography color='inherit' variant='title'>
                        <Link href='#skills' color='white'>
                        Skills
                        </Link>
                    </Typography>
                </ListItemText>
                <ListItemText inset>
                <Typography color='inherit' variant='title'>
                        <Link href='#contactme' color='white'>
                       Contact Me!
                        </Link>
                    </Typography>
                </ListItemText>
                <IconButton>
                    <KeyboardArrowRightIcon style={{color:'#25EDE8', fontSize:'200%'}}>
                    </KeyboardArrowRightIcon>
                </IconButton>
            </ListItem>

        </List>
   
  
    )
}

export default Navbar;
