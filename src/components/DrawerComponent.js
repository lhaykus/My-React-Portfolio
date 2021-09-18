import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Divider,
     IconButton, makeStyles, Typography, Link } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    menuIcon: {
        marginLeft: 'auto'
    },
    paper: {
        background:'black'
    }

}));

const DrawerComponent = () => {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState();


    return (
        <>
            <Drawer classes={{ paper: classes.paper }}
                anchor='left' onClose={() => setOpenDrawer(false)}
                open={openDrawer}
                >
                <List component='nav'>
                <ListItem divider button >
                        <ListItemText inset>
                            <Typography>
                                <Link href='#/' style={{color:'#D231EB', fontSize:'30px'}}>
                                    Home</Link>
                            </Typography>
                        </ListItemText>
                        </ListItem>
                    <ListItem divider button  style={{backgroundColor:'black', color:'#D231EB'}} >
                        <ListItemText inset >
                            <Typography  variant='title'>
                                <Link href='#aboutme'  style={{color:'#D231EB', fontSize:'30px'}}>
                                    About Me
                                </Link>
                            </Typography>
                        </ListItemText>
                        </ListItem>
                        <ListItem divider button >
                        <ListItemText inset>
                            <Typography>
                                <Link href='#projects' style={{color:'#D231EB', fontSize:'30px'}}>
                                    Projects
                                </Link>
                            </Typography>
                        </ListItemText>
                        </ListItem>
                        <ListItem divider button >
                        <ListItemText inset>
                            <Typography>
                                <Link href='#contactme' style={{color:'#D231EB', fontSize:'30px'}}>
                                    Contact Me!
                                </Link>
                            </Typography>
                        </ListItemText>
                    </ListItem>

                </List>

            </Drawer>
            <IconButton className={classes.menuIcon} style={{ color: 'white' }} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon />
            </IconButton>

        </>

    );
};

export default DrawerComponent;