import React from 'react';
import {
    AppBar, Toolbar, ListItem, ListItemText, ListItemAvatar, ListItemIcon, IconButton,
    Avatar, Divider, List, Typography, Box, Container, Grid, FormGroup, FormControlLabel
} from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/styles';
import Typed from 'react-typed';

//styling for the about me section
const useStyles = makeStyles(theme => ({
    skillTitle: {
        color: "#29C5C2",
        fontWeight: 'bold',
        
    },

    title: {
        color: 'white',
    },
    subtitle:{
        color: '#18E49C',
        marginBottom: '6px',
        fontWeight: 'bold',
        textAlign: 'center',
      

    },
    listText: {
        color: 'white',
        fontSize: '500%',
        padding: '5px'


    },
    listItem: {
        padding: '10px',
        margin: '10px'
    },
    listContainer: {
        fontSize: '250%'
    }

}));


function generate(element) {
    return [0, 1, 2].map((value) =>
        React.cloneElement(element, {
            key: value,
        }),
    );
}




const Skills = () => {
    const classes = useStyles();

    return (
        <section id='skills'>
            <Container className={classes.listContainer} component='div' align='center' margin='5px'>
            
                <Typography variant='h2' align='center' className={classes.skillTitle}>
                    <Typed strings={["Technical Skills"]} typeSpeed={80} />
                    <br /><br />
                    <Typography className={classes.subtitle} variant='h3'>
                <Typed strings={["HTML", "CSS", "Javascript", "Node.js", "Express.js", "mySQL", "React", "noSQL", "MongoDB"]}
                    typeSpeed={80}
                    backSpeed={60}
                    loop />
            </Typography>
                </Typography>
                <Grid item xs={12} md={6}>
                    <div>
                        <List>

                            <ListItem className={classes.listItem}>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>HTML</ListItemText>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>CSS</ListItemText>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>Javascript</ListItemText>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>VSCode</ListItemText>
                            </ListItem>

                           

                            <ListItem className={classes.listItem}>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>jQuery</ListItemText>

                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>Node.js</ListItemText>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>Express.js</ListItemText>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>Insomnia</ListItemText>




                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>mySQL</ListItemText>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>Sequelize</ListItemText>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>MongoDB</ListItemText>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>Mongoose</ListItemText>

                            </ListItem>

                            <ListItem className={classes.listItem}>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>React</ListItemText>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>noSQL</ListItemText>
                             
                            </ListItem>
                            


                        </List>
                    </div>
                </Grid>
            </Container>
            <br /> <br /> <br />
        </section >
       


    )
}

export default Skills;



