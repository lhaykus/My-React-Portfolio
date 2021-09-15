import React from 'react';
import Typed from 'react-typed';
import { Box, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import fourthKind from '../assets/4thkind.png';
import weather from '../assets/weather.png';
import workout from '../assets/workout.png';
import quiz from '../assets/quiz.png';
import makemyday from '../assets/makemyday.png';
import shark from '../assets/shark.png'



const useStyles = makeStyles(theme => ({
    projectTitle: {
        color: "#E4188A",
        fontWeight: 'bold',
        padding: '5px',
      
    },
    text: {
        fontSize: '200%',
        color: 'white',
        textAlign: 'center',
        textAlign: 'center', 
        fontWeight: 'bold', 
       
    },
    mainContainer: {
        background: 'black',
        height: '100%'
    },
    cardContainer: {
        maxWidth: '650px',
        margin: '3rem',
        margin: '5rem auto',
        backgroundColor: 'black',
    },
    cardTitle: {
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: '250%',
        color: 'white',
        textDecoration: 'underline'
        
    },
    buttons: {
        color: '#CF12D8',
        fontSize: '120%',
        textDecoration: 'underline',
        fontWeight: 'bold'
    }

}));





const Projects = () => {
    const classes = useStyles();
    return (
        <>
            <section id='projects'>
                <Box component='div' style={{ color: 'white' }} className={classes.mainContainer}>
                    <Typography variant='h2' align='center' className={classes.projectTitle}>
                        <Typed strings={["My Projects"]} typeSpeed={80} />
                        <br /><br />
                    </Typography>
                    <Grid container justify='center' alignItems='center' padding='5px' >
                        {/*Card for first project*/}
                        <Grid item xs={12} sm={8} md={6}>
                            <Card className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia component='img' alt='project1' height='500px'
                                        image={fourthKind} />
                                    <CardContent>
                                        <Typography className={classes.cardTitle} gutterBottom variant='h4' style={{ color: 'white' }}>4th Kind</Typography>
                                        <Typography variant='body2' color="textSecondary" component='p' className={classes.text}>A fun interactive UFO
                                            tracker app using <Typography style={{ color: '#DD1FD1', fontSize: '120%' }} variant='h4'>express.js,
                                                sequelize, handlebars and Node.js.</Typography> This app allows users to create/login to their own
                                            account where they can create, update, and delete their
                                            own blog
                                            posts where they can talk about their experiences,
                                            proof, etc. The interactive map allows users to
                                            pinpoint
                                            sighting locations and see others' pinpoints as well.</Typography>
                                        <br /> <br />
                                        <Typography style={{ color: '#2AC1BD', fontSize: '120%', textAlign: 'center', fontWeight: 'bold' }} variant='h4'> |express.js|
                                            |sequelize| |handlebars| |Node.js|</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <h3 style={{color:'white'}}>Check out the App!</h3>
                                        <Button className={classes.buttons} href='https://github.com/lhaykus/4thKind' target="_blank" size='small' color="#DD1FD1">Github</Button>
                                        <Button className={classes.buttons} href='https://the-4th-kind.herokuapp.com/' target='_blank' size='small' color='red'>Deployed App</Button>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={8} md={6}>
                            <Card className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia component='img' alt='project2' height='500px'
                                        image={weather} />
                                    <CardContent>
                                        <Typography gutterBottom variant='h4' className={classes.cardTitle}>Weather Dashboard</Typography>
                                        <Typography variant='body2' color="textSecondary" component='p' className={classes.text}>A weather dashboard to get current and 5-day
                                            forecast of any city using <Typography style={{ color: '#DD1FD1', fontSize: '120%' }} variant='h4'> API calls
                                                and Javascript.</Typography></Typography>
                                        <br /> <br />
                                        <Typography style={{ color: '#2AC1BD', fontSize: '120%', textAlign: 'center', fontWeight: 'bold' }} variant='h4'> |jQuery|
                                            |Javascript| |API Calls| |Moment.js| |Bootstrap|</Typography>
                                    </CardContent>
                                    <CardActions>
                                    <h3 style={{color:'white'}}>Check out the App!</h3>
                                        <Button className={classes.buttons} href='https://github.com/lhaykus/Weather-Dashboard' target="_blank" size='small' color="#DD1FD1">Github</Button>
                                        <Button className={classes.buttons} href='https://lhaykus.github.io/Weather-Dashboard/' target="_blank" size='small' color='red'>Deployed App</Button>
                                    </CardActions>
                                </CardActionArea>
                            </Card >
                        </Grid>
                        <Grid item xs={12} sm={8} md={6}>
                            <Card className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia component='img' alt='project1' height='500px'
                                        image={workout} />
                                    <CardContent>
                                        <Typography gutterBottom variant='h4' className={classes.cardTitle}>Get Physical</Typography>
                                        <Typography variant='body2' color="textSecondary" component='p' className={classes.text}>A NoSQL workout tracker app where users can create
                                            and track daily workouts! Powered by  <Typography style={{ color: '#DD1FD1', fontSize: '120%' }} variant='h4'> Mongoose
                                                and Javascript.</Typography> this app allows users to track the name, type, weight, sets, reps and duration of
                                            exercises they are doing. A weekly chart allows users to visually see their progess and the workouts theyve completed in a week!</Typography>
                                        <br /> <br />
                                        <Typography style={{ color: '#2AC1BD', fontSize: '120%', textAlign: 'center', fontWeight: 'bold' }} variant='h4'> |MongoDB|
                                            |Mongoose| |Javascript ES6| |Node.js| |Express|</Typography>
                                    </CardContent>
                                    <CardActions>
                                    <h3 style={{color:'white'}}>Check out the App!</h3>
                                        <Button className={classes.buttons} href='https://github.com/lhaykus/get-physical' target="_blank" size='small' color="#DD1FD1">Github</Button>
                                        <Button className={classes.buttons} href='https://get-physical-fitness-tracker.herokuapp.com/?id=6130192ac065490016542980' target="_blank" size='small' color='red'>Deployed App</Button>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={8} md={6}>
                            <Card className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia component='img' alt='project1' height='500px'
                                        image={quiz} />
                                    <CardContent>
                                        <Typography gutterBottom variant='h4' className={classes.cardTitle}>Video Game and Movie Quiz</Typography>
                                        <Typography variant='body2' color="textSecondary" component='p' className={classes.text}>A fun quiz to test your video game/movie knowledge using <Typography style={{ color: '#DD1FD1', fontSize: '120%' }} variant='h4'> HTML, CSS, Local Storage
                                            and Javascript.</Typography>This app keeps score of what answers the user chooses, deductes 10 seconds off the timer for every wrong answer chosen and gives the ability to put your name and score into the database to keep track of high scores!
                                            .</Typography>
                                        <br /> <br />
                                        <Typography style={{ color: '#2AC1BD', fontSize: '120%', textAlign: 'center', fontWeight: 'bold' }} variant='h4'> 
                                            |HTML| |CSS| |Javascript|</Typography>
                                    </CardContent>
                                    <CardActions>
                                    <h3 style={{color:'white'}}>Check out the App!</h3>
                                        <Button className={classes.buttons} href='https://github.com/lhaykus/video-game-quiz' target="_blank" size='small' color="#DD1FD1">Github</Button>
                                        <Button className={classes.buttons} href='https://lhaykus.github.io/video-game-quiz/' target="_blank" size='small' color='red'>Deployed App</Button>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={8} md={6}>
                            <Card className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia component='img' alt='project1' height='500px'
                                        image={makemyday} />
                                    <CardContent>
                                        <Typography gutterBottom variant='h4' className={classes.cardTitle}>Make My Day</Typography>
                                        <Typography variant='body2' color="textSecondary" component='p' className={classes.text}>A meme and quote generating app using  <Typography style={{ color: '#DD1FD1', fontSize: '120%' }} variant='h4'> Bootstrap, Fox Images API, Gif Api
                                            and Quotes APIs.</Typography> When on this app users are able to scroll through randolmy generated memes, images, and quotes. Users are able to favorite content 
                                         that will be rendered on a personal favorite page.</Typography>
                                        <br /> <br />
                                        <Typography style={{ color: '#2AC1BD', fontSize: '120%', textAlign: 'center', fontWeight: 'bold' }} variant='h4'> |MDBoostrap|
                                            |jQuery| |Server-Side API Calls| |Javascript|</Typography>
                                    </CardContent>
                                    <CardActions>
                                    <h3 style={{color:'white'}}>Check out the App!</h3>
                                        <Button className={classes.buttons} href='https://github.com/lhaykus/First_Project' target="_blank" size='small' color="#DD1FD1">Github</Button>
                                        <Button className={classes.buttons} href='https://themimmzyy.github.io/First_Project/Home/index.html' target="_blank" size='small' color='red'>Deployed App</Button>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                        <Grid item xs={12} sm={8} md={6}>
                            <Card className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia component='img' alt='project1' height='500px'
                                        image={shark} />
                                    <CardContent>
                                        <Typography gutterBottom variant='h4' className={classes.cardTitle}>Under The Sea</Typography>
                                        <Typography variant='body2' color="textSecondary" component='p' className={classes.text}>This is a fun webpage I made to practice my 
                                        styling skills. I love the ocean and this is a page dedicated to the knowledge of sharks and whales, and how to help protect them and the oceans</Typography>
                                        <br /> <br />
                                        <Typography style={{ color: '#2AC1BD', fontSize: '120%', textAlign: 'center', fontWeight: 'bold' }} variant='h4'> |Boostrap|
                                            |HTML| |CSS| |Parallax|</Typography>
                                    </CardContent>
                                    <CardActions>
                                    <h3 style={{color:'white'}}>Check out the App!</h3>
                                        <Button className={classes.buttons} href='https://github.com/lhaykus/shark-facts' target="_blank" size='small' color="#DD1FD1">Github</Button>
                                        <Button className={classes.buttons} href='https://lhaykus.github.io/shark-facts/' target="_blank" size='small' color='red'>Deployed App</Button>
                                    </CardActions>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>

                </Box>
            </section>
        </>
    )
}

export default Projects;
