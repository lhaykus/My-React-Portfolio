import React from 'react';
//import { Route } from 'react-router-dom';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
//Used to get rid of the padding and gaps above the nav bar
import { CssBaseline, Typography, IconButton, useMediaQuery, useTheme} from '@material-ui/core';
import './App.css';
import Home from './components/Home.js';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Scroll from './components/Scroll';
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
          <ul id='nav'>
            <IconButton>
              <CodeIcon style={{ color: '#25EDE8', fontSize: '200%' }}>
              </CodeIcon>
            </IconButton>
            <li style={{padding:'10px'}}> 
              <Link style={{ color: '#15BDD6', textDecoration:'none', }} to='/'>Home</Link>
            </li>
            <li style={{padding:'10px'}}>
              <Link style={{ color: '#15BDD6', textDecoration:'none' }} to='/aboutme'>About Me</Link>
            </li>
            <li style={{padding:'10px'}}>
              <Link style={{ color: '#15BDD6', textDecoration:'none' }} to='/projects'>Projects</Link>
            </li>
            <li style={{padding:'10px'}}>
              <Link style={{ color: '#15BDD6', textDecoration:'none' }} to='/contactme'>Contact Me</Link>
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
