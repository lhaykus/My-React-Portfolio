import React, { useState, useEffect } from 'react';
import { Typography, Box, Container, Grid, CardContent, Card, TextField, Button, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Typed from 'react-typed';
import Footer from './Footer';
import { Parallax } from 'react-parallax';
import lines from '../assets/lines.jpg';
import emailjs from 'emailjs-com';

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
    },
    footer: {
        textAlign: 'center',
        textDecoration: 'none',
        color: '#1CC1E7',
        marginTop: '20px',
        fontSize: '120%'
    }
}));


const ContactMe = () => {
    const classes = useStyles();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent]  = useState(false);

 const sumbit = () => {
     if (firstName && lastName && email && phoneNumber && message) {
        // init('user_6JV5TCJdvgT4GspTtwOEI');
         const serviceId ='service_gqn5lfp';
         const templateId = 'template_vo68bml';
         const userId = 'user_6JV5TCJdvgT4GspTtwOEI';
         const templateParams = {
             firstName, 
             lastName,
             email,
             phoneNumber,
             message
         };

         emailjs.send(serviceId, templateId, templateParams, userId)
         .then(response => console.log(response))
         .then(error => console.log(error));

         setFirstName('');
         setLastName('');
         setEmail('');
         setPhoneNumber('');
         setMessage('');
         setEmailSent(true);
     }else {
         alert('Fill out fields');
     }
 }

 return (
    <section id='contactme'>
        <Parallax bgImage={lines} strength={600} bgImageStyle={{ height: '800px', width: '2050px' }}>
            <div style={{ height: 300 }}>
            </div>
        </Parallax>
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
                                    <TextField name='firstName' label='First Name' placeholder='Enter first name' variant='outlined' fullWidth required value={firstName} onChange={e => setFirstName(e.target.value)}
                                    />
                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField name='lastName' label='Last Name' placeholder='Enter last name' variant='outlined' fullWidth required value={lastName} onChange={e => setLastName(e.target.value)} 
                                    />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField name='email' type='email' label='Email' placeholder='Enter email' variant='outlined' fullWidth required value={email} onChange={e => setEmail(e.target.value)}
                                    />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField name='phoneNumber' type='number' label='Phone Number' placeholder='Enter phone number' variant='outlined' fullWidth required value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}
                                    />
                                </Grid>
                                <Grid xs={12} item>
                                    <TextField name='message' label='Message' multiline rows={4} placeholder='Enter your message here' variant='outlined' fullWidth required value={message} onChange={e => setMessage(e.target.value)}
                                    />
                                </Grid>
                                <Grid xs={12} item>
                                    <Button onClick={sumbit} type='submit' variant='contained' color='red' fullWidth>Sumbit</Button>
                                    <span className={emailSent ? 'visible' : null}>Thank you for reaching out!</span>
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
            {/* Contact Info */}
        </Container>
        <Footer />
    </section>
);
};
export default ContactMe;
