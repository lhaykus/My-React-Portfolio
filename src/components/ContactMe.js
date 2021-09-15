import React, {useState, useEffect} from 'react';
import {
    AppBar, Toolbar, ListItem, ListItemText, IconButton,
    Avatar, Divider, List, Typography, Box, Container, Grid, CardContent, Card, TextField, Button, Link
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Typed from 'react-typed';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import GitHubIcon from '@material-ui/icons/GitHub';
import { EmailOutlined } from '@material-ui/icons';
import resume from '../assets/CodingResume2.pdf';
import FileCopyIcon from '@material-ui/icons/FileCopy';
//import {useForm, Form} from '..components/useForm';





//CSS styling 
const useStyles = makeStyles(theme => ({
    aboutTitle: {
        color: "#29C5C2",
        fontWeight: 'bold',
        padding: '5px'
    },
    contact: {
        fontWeight: 'bold',
        fontSize: '150%',
        textAlign: 'center'
    }
}));



const ContactMe = () => {
    const classes = useStyles();

   /* const initialValues = {
        firstName: '',
        lastName:'',
        email: '',
        phoneNumber: ''  
     }

   
    const {
        values,
        setValues,
        handleInputChange,
    }=useForm(initialValues);
    
*/
   
    return (
        <section id='contactme'>
            <Container component='div'>
                <br /> <br /><br /> <br /><br /> <br />
                <Typography variant='h2' align='center' className={classes.aboutTitle}>
                    <Typed strings={["Contact Me"]} typeSpeed={80} />
                    <br /><br />
                </Typography>
                {/*Contact Form*/}
                <div>
                    <Card style={{ maxWidth: 450, margin: '0 auto', padding: '20px 5px', backgroundColor: '#DAD2DB', color: 'black' }}>
                        <CardContent>
                            <Typography variant='h4' gutterBottom>Contact Me</Typography>
                            <Typography variant='body2' component='p' color='textSecondary'>Send me an email with any questions or comments!</Typography>
                            <form>
                                <Grid container spacing={1} style={{ color: 'white' }}>

                                    <Grid xs={12} sm={6} item>
                                        <TextField name='firstName' label='First Name' placeholder='Enter first name' variant='outlined' fullWidth required //value={values.firstName} onChange={handleInputChange}
                                        />
                                    </Grid>
                                    <Grid xs={12} sm={6} item>
                                        <TextField name='lastName' label='Last Name' placeholder='Enter last name' variant='outlined' fullWidth required //value={values.lastName} onChange={handleInputChange} 
                                        />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <TextField name='email' type='email' label='Email' placeholder='Enter email' variant='outlined' fullWidth required //value={values.email} onChange={handleInputChange}
                                        />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <TextField name='phoneNumber' type='number' label='Phone Number' placeholder='Enter phone number' variant='outlined' fullWidth required //value={values.phoneNumber} onChange={handleInputChange}
                                        />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <TextField name='message' label='Message' multiline rows={4} placeholder='Enter your message here' variant='outlined' fullWidth required //value={values.message} onChange={handleInputChange}
                                        />
                                    </Grid>
                                    <Grid xs={12} item>
                                        <Button type='submit' variant='contained' color='red' fullWidth>Sumbit</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </div>
                <br />
                <Typography className={classes.contact}>
                    <Typed strings={["720-209-4224"]} typeSpeed={80} style={{ color: '#801BEB' }} />
                    <br />
                    <Typed strings={["haykusloryn@gmail.com"]} typeSpeed={80} style={{ color: '#D714EA', }}>
                        
                        </Typed>
                </Typography>
                <Container align='center' fontSize='large'  margin = '5px'>
                                <Link href='https://github.com/lhaykus' className= {classes.link} target="_blank" fontSize='large'>
                                    <GitHubIcon style={{color: '#1CC1E7', fontSize:'800%', padding:'20px'}} />
                                </Link>
                                <Link href='https://www.linkedin.com/in/loryn-haykus/' className= {classes.link} target="_blank">
                                    <LinkedInIcon style={{color: '#801BEB', fontSize: '800%', padding:'20px'}} />
                                </Link>
                                <Link href={resume} className= {classes.link} target="_blank">
                                    <FileCopyIcon style={{color: "#D714EA", fontSize:'800%', padding:'20px'}}/>
                                </Link>
                                </Container>
            </Container>
        </section>
    )
}

export default ContactMe;
