import React from 'react';
import {AppBar, Toolbar, ListItem, ListItemText, IconButton, 
Avatar, Divider, List, Typography, Box} from '@material-ui/core';
import {ArrowBack, AssignmentInd, Home, Apps, ContactMail} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';


// CSS styling
const useStyles = makeStyles({
    listItem: {
       fontWeight: 'bold',
       fontSize: '200%',
       color: 'white'
    },
   
});

//Creating the navbar 
const Navbar = () => {
    const classes = useStyles();
    return (
        <List component='nav' className={classes.list}>
            <ListItem component='div' className={classes.listItem}>
            <ListItemText inset>
                    <Typography color='inherit' variant='title'>
                        Loryn Haykus
                    </Typography>
                </ListItemText>
                <ListItemText inset>
                    <Typography color='inherit' variant='title'>
                        About Me
                    </Typography>
                </ListItemText>
                <ListItemText inset>
                    <Typography color='inherit' variant='title'>
                        Projects
                    </Typography>
                </ListItemText>
                <ListItemText inset>
                    <Typography color='inherit' variant ='title'>
                        Contact Me
                    </Typography>
                </ListItemText>
            </ListItem>

        </List>
   
   /* <>
    <Box component ='div'>

    </Box>
        <Box component= 'nav'>
            <AppBar position='static' style={{background: 'black'}}>
                <Toolbar>
                    <IconButton>
                    <ArrowBack  style={{ color: 'pink' }}/>
                    </IconButton>
                    <Typography variant='h5'>Loryn Haykus</Typography>
                </Toolbar>
            </AppBar>
            
        </Box>
        </>
        */
    )
}

export default Navbar;
