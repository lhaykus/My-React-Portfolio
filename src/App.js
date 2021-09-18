import React from 'react';
//import { Route } from 'react-router-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
//Used to get rid of the padding and gaps above the nav bar
import { CssBaseline, Typography, IconButton, useMediaQuery, useTheme} from '@material-ui/core';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home.js';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import { Parallax } from 'react-parallax';
import lines from './assets/lines.jpg';
import ContactMe from './components/ContactMe';
import Scroll from './components/Scroll';
import Typed from 'react-typed';
import CodeIcon from '@material-ui/icons/Code';
import DrawerComponent from './components/DrawerComponent';



function App() {
  //Breakpoints for responsive navbar
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    
    <>
      <div>
        <nav>
           {/* If screen goes down to 'sm' run the drawercomponent function which turns navbar into
            hamburger menu icon OTHERWISE do the normal */}
            {isMatch ? (<DrawerComponent />) : (
              <>
        <Typography style={{ color: '#DD1FD1' }} variant='h4'>
                <Typed strings={["Loryn Haykus" ]} typeSpeed={80} />
            </Typography>
          <ul id='nav'>
            <IconButton>
              <CodeIcon style={{ color: '#25EDE8', fontSize: '200%' }}>
              </CodeIcon>
            </IconButton>
            <li>
              <Link style={{ color: '#15BDD6' }} to='/'>Home</Link>
            </li>
            <li>
              <Link style={{ color: '#15BDD6' }} to='/aboutme'>About Me</Link>
            </li>
            <li>
              <Link style={{ color: '#15BDD6' }} to='/projects'>Projects</Link>
            </li>
            <li>
              <Link style={{ color: '#15BDD6' }} to='/contactme'>Contact Me</Link>
            </li>
            <IconButton>
              <CodeIcon style={{ color: '#25EDE8', fontSize: '200%' }}>
              </CodeIcon>
            </IconButton>
          </ul>
              </>
              )}
        </nav>
      </div>

      <Switch>
        <Route exact path='/'> <Home /></Route>
        <Route exact path='/aboutme'> <AboutMe /></Route>
        <Route exact path='/projects'> <Projects /></Route>
        <Route exact path='/contactme'> <ContactMe /></Route>
      </Switch>
      <Scroll showBelow={250} />

    </>

  );
}

export default App;
