import React from 'react';
import { ListItem, ListItemText, ListItemIcon, List, Typography, Container, Grid } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
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
    subtitle: {
        color: '#18E49C',
        marginBottom: '6px',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    listText: {
        color: 'white',
        fontSize: '500%',
        padding: '5px',
    },
    listItem: {
        padding: '10px',
        margin: '10px'
    },
    listContainer: {
        fontSize: '250%',
        alignContent: 'center',
    
    }

}));






const Skills = () => {
    const classes = useStyles();

    return (
        <section id='skills'>
            <Container className={classes.listContainer} component='div' align='center' margin='5px'>
                <Typography variant='h2' align='center' className={classes.skillTitle}>
                    <Typed strings={["Technical Skills"]} typeSpeed={80} />
                    <br /><br />
                </Typography>
                <Grid item xs={8} md={6}>
                    <div>
                        <List>
                            <ListItem className={classes.listItem}>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>HTML</ListItemText>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon style={{ color: '#25EDE8' }}></ArrowForwardIosIcon>
                                </ListItemIcon>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>CSS</ListItemText>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon style={{ color: '#25EDE8' }}></ArrowForwardIosIcon>
                                </ListItemIcon>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>Javascript</ListItemText>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon style={{ color: '#25EDE8' }}></ArrowForwardIosIcon>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>jQuery</ListItemText>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon style={{ color: '#25EDE8' }}></ArrowForwardIosIcon>
                                </ListItemIcon>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>Node.js</ListItemText>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon style={{ color: '#25EDE8' }}></ArrowForwardIosIcon>
                                </ListItemIcon>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>Express.js</ListItemText>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon style={{ color: '#25EDE8' }}></ArrowForwardIosIcon>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>mySQL</ListItemText>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon style={{ color: '#25EDE8' }}></ArrowForwardIosIcon>
                                </ListItemIcon>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>Sequelize</ListItemText>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon style={{ color: '#25EDE8' }}></ArrowForwardIosIcon>
                                </ListItemIcon>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>MongoDB</ListItemText>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon style={{ color: '#25EDE8' }}></ArrowForwardIosIcon>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>noSql</ListItemText>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon style={{ color: '#25EDE8' }}></ArrowForwardIosIcon>
                                </ListItemIcon>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>Mongoose</ListItemText>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon style={{ color: '#25EDE8' }}></ArrowForwardIosIcon>
                                </ListItemIcon>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>React</ListItemText>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon style={{ color: '#25EDE8' }}></ArrowForwardIosIcon>
                                </ListItemIcon>
                            </ListItem>
                            <ListItem className={classes.listItem}>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>VSCode</ListItemText>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon style={{ color: '#25EDE8' }}></ArrowForwardIosIcon>
                                </ListItemIcon>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>Github</ListItemText>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon style={{ color: '#25EDE8' }}></ArrowForwardIosIcon>
                                </ListItemIcon>
                                <ListItemIcon>
                                    <ArrowBackIosIcon style={{ color: '#25EDE8' }}></ArrowBackIosIcon>
                                </ListItemIcon>
                                <ListItemText className={classes.listText}>Insomnia</ListItemText>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon style={{ color: '#25EDE8' }}></ArrowForwardIosIcon>
                                </ListItemIcon>
                            </ListItem>
                        </List>
                        <br />
                        <Typography className={classes.subtitle} variant='h3'>
                            <Typed strings={["HTML", "CSS", "Javascript", "Node.js", "Express.js", "mySQL", "React", "noSQL", "MongoDB"]}
                                typeSpeed={80}
                                backSpeed={60}
                                loop />
                        </Typography>
                    </div>
                </Grid>
            </Container>
            <br /> <br /> <br />
        </section >
    );
};

export default Skills;


